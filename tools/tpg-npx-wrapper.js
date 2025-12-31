#!/usr/bin/env node

/**
 * TPG Orchestrator NPX Wrapper
 * Entry point for npx execution
 *
 * This wrapper handles both npx and local execution scenarios:
 * - When run via npx, it spawns a child process to preserve the user's working directory
 * - When run locally, it directly requires the CLI
 */

const { spawn } = require('child_process');
const path = require('path');

/**
 * Check if running via npx
 * NPX creates temporary directories with '_npx' in the path or uses .npm cache
 */
function isRunningViaNpx() {
  const currentPath = __dirname;

  // Check for npx indicators in the path
  return (
    currentPath.includes('_npx') ||
    currentPath.includes('.npm') ||
    currentPath.includes('npm/cache') ||
    currentPath.includes('npx-cache')
  );
}

/**
 * Get the actual CLI script path
 */
function getCliPath() {
  return path.join(__dirname, 'cli', 'tpg-cli.js');
}

/**
 * Run via npx (spawn child process)
 */
function runViaNpx() {
  const cliPath = getCliPath();
  const args = process.argv.slice(2);

  // Spawn child process with user's working directory
  const child = spawn(process.execPath, [cliPath, ...args], {
    stdio: 'inherit',
    cwd: process.cwd(), // Preserve user's working directory
    env: process.env
  });

  // Handle process exit
  child.on('exit', (code) => {
    process.exit(code || 0);
  });

  // Handle errors
  child.on('error', (error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}

/**
 * Run locally (direct require)
 */
function runLocally() {
  const cliPath = getCliPath();
  require(cliPath);
}

/**
 * Main entry point
 */
function main() {
  try {
    if (isRunningViaNpx()) {
      // Running via npx - spawn child process to preserve working directory
      runViaNpx();
    } else {
      // Running locally - direct require is fine
      runLocally();
    }
  } catch (error) {
    console.error(`Fatal error: ${error.message}`);
    process.exit(1);
  }
}

// Execute
main();
