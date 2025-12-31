const crypto = require('crypto');
const fs = require('fs');

/**
 * Generate a hash for a file to track modifications
 * Uses MD5 algorithm and returns first 16 characters (like BMAD)
 *
 * @param {string} filePath - Absolute path to the file
 * @returns {string} Hash string (16 chars)
 */
function generateHash(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const hash = crypto.createHash('md5').update(fileContent).digest('hex');
    return hash.substring(0, 16); // Return first 16 chars like BMAD
  } catch (error) {
    throw new Error(`Failed to generate hash for ${filePath}: ${error.message}`);
  }
}

/**
 * Verify if a file's hash matches the expected hash
 *
 * @param {string} filePath - Absolute path to the file
 * @param {string} expectedHash - Expected hash value
 * @returns {boolean} True if hashes match, false otherwise
 */
function verifyHash(filePath, expectedHash) {
  try {
    const currentHash = generateHash(filePath);
    return currentHash === expectedHash;
  } catch (error) {
    // File might not exist or is unreadable
    return false;
  }
}

/**
 * Generate hashes for multiple files
 *
 * @param {string[]} filePaths - Array of absolute file paths
 * @returns {Object} Map of filepath to hash
 */
function generateHashesForFiles(filePaths) {
  const hashes = {};

  for (const filePath of filePaths) {
    try {
      hashes[filePath] = generateHash(filePath);
    } catch (error) {
      console.error(`Warning: Could not hash ${filePath}: ${error.message}`);
      hashes[filePath] = null;
    }
  }

  return hashes;
}

/**
 * Check which files have been modified since installation
 *
 * @param {Object} manifest - Installation manifest with file hashes
 * @param {string} projectRoot - Root directory of the project
 * @returns {Object} Object with modified and missing files
 */
function checkFileModifications(manifest, projectRoot) {
  const modified = [];
  const missing = [];
  const unchanged = [];

  if (!manifest || !manifest.files) {
    return { modified, missing, unchanged };
  }

  for (const fileEntry of manifest.files) {
    const filePath = fileEntry.path;
    const fullPath = `${projectRoot}/${filePath}`;

    if (!fs.existsSync(fullPath)) {
      missing.push(filePath);
      continue;
    }

    try {
      const currentHash = generateHash(fullPath);
      if (currentHash !== fileEntry.hash) {
        modified.push(filePath);
      } else {
        unchanged.push(filePath);
      }
    } catch (error) {
      console.error(`Warning: Could not verify ${filePath}: ${error.message}`);
      modified.push(filePath); // Treat unreadable files as modified
    }
  }

  return { modified, missing, unchanged };
}

module.exports = {
  generateHash,
  verifyHash,
  generateHashesForFiles,
  checkFileModifications
};
