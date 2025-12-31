#!/usr/bin/env node

/**
 * TPG Orchestrator CLI
 * Main command-line interface for The Product Genome Orchestrator
 */

const { Command } = require('commander');
const chalk = require('chalk');
const packageJson = require('../../package.json');

const program = new Command();

// Configure the CLI
program
  .name('tpg-orchestrator')
  .description('The Product Genome Orchestrator - AI-powered product development framework')
  .version(packageJson.version, '-v, --version', 'Output the current version');

// Install command
program
  .command('install')
  .description('Install TPG Orchestrator in current project')
  .option('-f, --full', 'Full installation (all files) - default')
  .option('-m, --minimal', 'Minimal installation (core files only)')
  .option('--ide <ide>', 'Specify IDE (claude-code, cursor, windsurf, vscode, github-copilot, gemini)')
  .action(async (options) => {
    try {
      const installer = require('../lib/installer');
      await installer.install(options);
    } catch (error) {
      console.error(chalk.red(`Installation failed: ${error.message}`));
      process.exit(1);
    }
  });

// Update command
program
  .command('update')
  .description('Update TPG Orchestrator to latest version')
  .action(async () => {
    try {
      const installer = require('../lib/installer');
      await installer.update();
    } catch (error) {
      console.error(chalk.red(`Update failed: ${error.message}`));
      process.exit(1);
    }
  });

// Uninstall command
program
  .command('uninstall')
  .description('Remove TPG Orchestrator from project')
  .action(async () => {
    try {
      const installer = require('../lib/installer');
      await installer.uninstall();
    } catch (error) {
      console.error(chalk.red(`Uninstall failed: ${error.message}`));
      process.exit(1);
    }
  });

// Info command
program
  .command('info')
  .description('Show installation information')
  .action(async () => {
    try {
      const installer = require('../lib/installer');
      await installer.showInfo();
    } catch (error) {
      console.error(chalk.red(`Failed to retrieve info: ${error.message}`));
      process.exit(1);
    }
  });

// Help command enhancement
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ npx tpg-orchestrator install');
  console.log('  $ npx tpg-orchestrator install --ide claude-code');
  console.log('  $ npx tpg-orchestrator install --minimal');
  console.log('  $ npx tpg-orchestrator update');
  console.log('  $ npx tpg-orchestrator info');
  console.log('  $ npx tpg-orchestrator uninstall');
  console.log('');
  console.log('For more information, visit:');
  console.log('  https://github.com/theproductgenome/tpg-orchestrator');
  console.log('');
});

// Handle unknown commands
program.on('command:*', (operands) => {
  console.error(chalk.red(`Error: Unknown command '${operands[0]}'`));
  console.log('');
  console.log('Available commands:');
  console.log('  install     Install TPG Orchestrator');
  console.log('  update      Update to latest version');
  console.log('  uninstall   Remove from project');
  console.log('  info        Show installation info');
  console.log('');
  console.log('Run ' + chalk.cyan('tpg-orchestrator --help') + ' for more information');
  process.exit(1);
});

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
