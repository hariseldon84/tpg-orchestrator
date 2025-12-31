const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * FileCopier handles copying files from the package to the project
 */
class FileCopier {
  /**
   * @param {string} sourcePath - Path to source .tpg-core directory (in package)
   * @param {string} targetPath - Path to target .tpg-core directory (in project)
   */
  constructor(sourcePath, targetPath) {
    this.sourcePath = sourcePath;
    this.targetPath = targetPath;
    this.copiedFiles = [];
  }

  /**
   * Get list of all files in the source directory recursively
   * @returns {string[]} Array of relative file paths
   */
  getFileList() {
    const files = [];

    function walkDir(dir, baseDir) {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath, baseDir);
        } else if (stat.isFile()) {
          const relativePath = path.relative(baseDir, fullPath);
          files.push(relativePath);
        }
      }
    }

    if (fs.existsSync(this.sourcePath)) {
      walkDir(this.sourcePath, this.sourcePath);
    }

    return files;
  }

  /**
   * Copy a single file from source to target
   * @param {string} relativePath - Relative path within .tpg-core
   * @returns {boolean} True if copied successfully
   */
  async copyFile(relativePath) {
    try {
      const sourceFile = path.join(this.sourcePath, relativePath);
      const targetFile = path.join(this.targetPath, relativePath);

      // Create parent directory if it doesn't exist
      const targetDir = path.dirname(targetFile);
      await fs.ensureDir(targetDir);

      // Copy the file
      await fs.copy(sourceFile, targetFile, { overwrite: true });

      this.copiedFiles.push(relativePath);
      return true;
    } catch (error) {
      console.error(chalk.yellow(`Warning: Failed to copy ${relativePath}: ${error.message}`));
      return false;
    }
  }

  /**
   * Copy all files from source to target
   * @param {Object} options - Copy options
   * @param {Function} progressCallback - Callback for progress updates
   * @returns {Object} Summary of copied files
   */
  async copyAll(options = {}, progressCallback = null) {
    const { overwrite = true, filter = null } = options;

    // Ensure target directory exists
    await fs.ensureDir(this.targetPath);

    // Get list of files to copy
    let files = this.getFileList();

    // Apply filter if provided
    if (filter && typeof filter === 'function') {
      files = files.filter(filter);
    }

    const total = files.length;
    let copied = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check if target file exists and overwrite is false
      const targetFile = path.join(this.targetPath, file);
      if (!overwrite && fs.existsSync(targetFile)) {
        skipped++;
        if (progressCallback) {
          progressCallback({
            current: i + 1,
            total,
            file,
            status: 'skipped'
          });
        }
        continue;
      }

      // Copy the file
      const success = await this.copyFile(file);

      if (success) {
        copied++;
        if (progressCallback) {
          progressCallback({
            current: i + 1,
            total,
            file,
            status: 'copied'
          });
        }
      } else {
        failed++;
        if (progressCallback) {
          progressCallback({
            current: i + 1,
            total,
            file,
            status: 'failed'
          });
        }
      }
    }

    return {
      total,
      copied,
      skipped,
      failed,
      files: this.copiedFiles
    };
  }

  /**
   * Copy only specific files
   * @param {string[]} relativePaths - Array of relative paths to copy
   * @returns {Object} Summary of copied files
   */
  async copySelected(relativePaths) {
    const results = {
      success: [],
      failed: []
    };

    for (const file of relativePaths) {
      const success = await this.copyFile(file);
      if (success) {
        results.success.push(file);
      } else {
        results.failed.push(file);
      }
    }

    return results;
  }

  /**
   * Remove all copied files (for uninstall)
   * @returns {Object} Summary of removed files
   */
  async removeAll() {
    try {
      if (fs.existsSync(this.targetPath)) {
        await fs.remove(this.targetPath);
        return {
          success: true,
          removed: this.targetPath
        };
      }
      return {
        success: true,
        removed: null,
        message: 'Directory does not exist'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Create a backup of existing files before overwriting
   * @param {string} backupPath - Path to store backups
   * @returns {Object} Backup summary
   */
  async createBackup(backupPath) {
    try {
      if (fs.existsSync(this.targetPath)) {
        await fs.copy(this.targetPath, backupPath);
        return {
          success: true,
          path: backupPath
        };
      }
      return {
        success: true,
        path: null,
        message: 'No existing files to backup'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get statistics about files
   * @returns {Object} File statistics
   */
  getStats() {
    const files = this.getFileList();
    const stats = {
      totalFiles: files.length,
      byExtension: {},
      byDirectory: {}
    };

    for (const file of files) {
      const ext = path.extname(file) || 'no-extension';
      const dir = path.dirname(file);

      stats.byExtension[ext] = (stats.byExtension[ext] || 0) + 1;
      stats.byDirectory[dir] = (stats.byDirectory[dir] || 0) + 1;
    }

    return stats;
  }
}

module.exports = FileCopier;
