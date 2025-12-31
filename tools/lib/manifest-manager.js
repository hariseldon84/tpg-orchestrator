const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');
const { generateHash, checkFileModifications } = require('./hash-generator');

/**
 * ManifestManager handles the install-manifest.yaml file
 * Tracks installed files, versions, and modifications
 */
class ManifestManager {
  /**
   * @param {string} projectRoot - Root directory of the project
   */
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.manifestPath = path.join(projectRoot, 'install-manifest.yaml');
  }

  /**
   * Create a new installation manifest
   * @param {Object} options - Installation options
   * @param {string} options.version - TPG Orchestrator version
   * @param {string} options.installType - 'full' or 'minimal'
   * @param {string[]} options.ides - Array of IDE names
   * @param {string[]} files - Array of installed file paths (relative to project root)
   * @returns {Object} Created manifest
   */
  async create(options, files) {
    const { version, installType = 'full', ides = [], agent = null } = options;

    const manifest = {
      version,
      installed_at: new Date().toISOString(),
      install_type: installType,
      agent,
      ides_setup: ides,
      expansion_packs: [],
      files: []
    };

    // Generate hashes for all files
    for (const file of files) {
      const fullPath = path.join(this.projectRoot, file);
      try {
        const hash = generateHash(fullPath);
        manifest.files.push({
          path: file,
          hash,
          modified: false
        });
      } catch (error) {
        console.error(`Warning: Could not hash ${file}: ${error.message}`);
      }
    }

    // Save manifest
    await this.save(manifest);

    return manifest;
  }

  /**
   * Read the existing manifest file
   * @returns {Object|null} Manifest object or null if doesn't exist
   */
  async read() {
    try {
      if (!fs.existsSync(this.manifestPath)) {
        return null;
      }

      const content = await fs.readFile(this.manifestPath, 'utf8');
      return yaml.load(content);
    } catch (error) {
      throw new Error(`Failed to read manifest: ${error.message}`);
    }
  }

  /**
   * Save manifest to file
   * @param {Object} manifest - Manifest object to save
   */
  async save(manifest) {
    try {
      const yamlContent = yaml.dump(manifest, {
        indent: 2,
        lineWidth: -1, // Don't wrap lines
        quotingType: '"',
        forceQuotes: false
      });

      await fs.writeFile(this.manifestPath, yamlContent, 'utf8');
    } catch (error) {
      throw new Error(`Failed to save manifest: ${error.message}`);
    }
  }

  /**
   * Update manifest with new files
   * @param {string[]} files - Array of file paths to add/update
   * @param {Object} options - Update options
   */
  async update(files, options = {}) {
    const manifest = await this.read();

    if (!manifest) {
      throw new Error('No existing manifest found. Run install first.');
    }

    // Update version if provided
    if (options.version) {
      manifest.version = options.version;
    }

    // Update install type if provided
    if (options.installType) {
      manifest.install_type = options.installType;
    }

    // Update IDEs if provided
    if (options.ides) {
      manifest.ides_setup = options.ides;
    }

    // Create a map of existing files
    const existingFilesMap = new Map();
    for (const fileEntry of manifest.files) {
      existingFilesMap.set(fileEntry.path, fileEntry);
    }

    // Update or add files
    for (const file of files) {
      const fullPath = path.join(this.projectRoot, file);

      try {
        const hash = generateHash(fullPath);
        const existingEntry = existingFilesMap.get(file);

        if (existingEntry) {
          // File exists in manifest, update hash
          existingEntry.hash = hash;
          existingEntry.modified = false;
        } else {
          // New file, add to manifest
          manifest.files.push({
            path: file,
            hash,
            modified: false
          });
        }
      } catch (error) {
        console.error(`Warning: Could not hash ${file}: ${error.message}`);
      }
    }

    await this.save(manifest);
    return manifest;
  }

  /**
   * Check which files have been modified by the user
   * @returns {Object} Object with modified, missing, and unchanged files
   */
  async checkModifications() {
    const manifest = await this.read();

    if (!manifest) {
      throw new Error('No manifest found');
    }

    const result = checkFileModifications(manifest, this.projectRoot);

    // Update manifest to mark modified files
    for (const fileEntry of manifest.files) {
      fileEntry.modified = result.modified.includes(fileEntry.path);
    }

    await this.save(manifest);

    return result;
  }

  /**
   * Remove the manifest file
   */
  async remove() {
    try {
      if (fs.existsSync(this.manifestPath)) {
        await fs.remove(this.manifestPath);
        return { success: true };
      }
      return { success: true, message: 'Manifest does not exist' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Check if TPG Orchestrator is already installed
   * @returns {boolean} True if manifest exists
   */
  async isInstalled() {
    return fs.existsSync(this.manifestPath);
  }

  /**
   * Get installation summary
   * @returns {Object} Summary of installation
   */
  async getSummary() {
    const manifest = await this.read();

    if (!manifest) {
      return {
        installed: false,
        message: 'TPG Orchestrator is not installed'
      };
    }

    const modifications = await this.checkModifications();

    return {
      installed: true,
      version: manifest.version,
      installedAt: manifest.installed_at,
      installType: manifest.install_type,
      ides: manifest.ides_setup,
      agent: manifest.agent,
      totalFiles: manifest.files.length,
      modifiedFiles: modifications.modified.length,
      missingFiles: modifications.missing.length,
      unchangedFiles: modifications.unchanged.length,
      modifications
    };
  }

  /**
   * Add an IDE to the setup list
   * @param {string} ide - IDE name to add
   */
  async addIDE(ide) {
    const manifest = await this.read();

    if (!manifest) {
      throw new Error('No manifest found');
    }

    if (!manifest.ides_setup.includes(ide)) {
      manifest.ides_setup.push(ide);
      await this.save(manifest);
    }
  }

  /**
   * Remove an IDE from the setup list
   * @param {string} ide - IDE name to remove
   */
  async removeIDE(ide) {
    const manifest = await this.read();

    if (!manifest) {
      throw new Error('No manifest found');
    }

    manifest.ides_setup = manifest.ides_setup.filter(i => i !== ide);
    await this.save(manifest);
  }

  /**
   * Add an expansion pack to the manifest
   * @param {string} packName - Name of the expansion pack
   */
  async addExpansionPack(packName) {
    const manifest = await this.read();

    if (!manifest) {
      throw new Error('No manifest found');
    }

    if (!manifest.expansion_packs) {
      manifest.expansion_packs = [];
    }

    if (!manifest.expansion_packs.includes(packName)) {
      manifest.expansion_packs.push(packName);
      await this.save(manifest);
    }
  }
}

module.exports = ManifestManager;
