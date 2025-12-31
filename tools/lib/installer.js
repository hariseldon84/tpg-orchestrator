const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');
const FileCopier = require('./file-copier');
const ManifestManager = require('./manifest-manager');

// Package version (should match package.json)
const PACKAGE_VERSION = '1.0.0-alpha.1';

// Available IDEs
const AVAILABLE_IDES = [
  'claude-code',
  'cursor',
  'windsurf',
  'vscode',
  'github-copilot',
  'gemini'
];

/**
 * Display TPG Orchestrator welcome banner
 */
function showBanner() {
  console.log('\n');
  console.log(chalk.cyan('╔═══════════════════════════════════════════════════════════════╗'));
  console.log(chalk.cyan('║') + chalk.bold.white('            THE PRODUCT GENOME ORCHESTRATOR                   ') + chalk.cyan('║'));
  console.log(chalk.cyan('║') + chalk.white('                                                               ') + chalk.cyan('║'));
  console.log(chalk.cyan('║') + chalk.yellow('         AI-Powered Product Development Framework              ') + chalk.cyan('║'));
  console.log(chalk.cyan('╚═══════════════════════════════════════════════════════════════╝'));
  console.log('\n');
}

/**
 * Check if Node.js version meets requirements
 */
function checkNodeVersion() {
  const currentVersion = process.version;
  const major = parseInt(currentVersion.split('.')[0].substring(1));

  if (major < 20) {
    console.error(chalk.red(`Error: Node.js version ${currentVersion} is not supported.`));
    console.error(chalk.yellow('TPG Orchestrator requires Node.js >= 20.0.0'));
    console.error(chalk.yellow(`Please upgrade your Node.js installation.`));
    process.exit(1);
  }

  return true;
}

/**
 * Get the package root directory (where .tpg-core is located)
 */
function getPackageRoot() {
  // When running from npx, we need to find the package root
  // Look for .tpg-core directory relative to this file
  const currentDir = __dirname;
  const packageRoot = path.resolve(currentDir, '../..');

  return packageRoot;
}

/**
 * Install TPG Orchestrator
 */
async function install(options = {}) {
  showBanner();
  checkNodeVersion();

  const projectRoot = process.cwd();
  const manifestManager = new ManifestManager(projectRoot);

  // Check if already installed
  const isInstalled = await manifestManager.isInstalled();
  if (isInstalled) {
    console.log(chalk.yellow('TPG Orchestrator is already installed in this project.'));
    const { proceed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: 'Do you want to reinstall?',
        default: false
      }
    ]);

    if (!proceed) {
      console.log(chalk.blue('Installation cancelled.'));
      return;
    }
  }

  // Prompt for IDE selection if not provided
  let ides = options.ide ? [options.ide] : null;
  if (!ides) {
    const { selectedIdes } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedIdes',
        message: 'Which IDE(s) are you using? (Select all that apply)',
        choices: AVAILABLE_IDES.map(ide => ({
          name: ide,
          value: ide,
          checked: ide === 'claude-code' // Default to claude-code
        }))
      }
    ]);
    ides = selectedIdes;
  }

  if (ides.length === 0) {
    console.log(chalk.yellow('No IDEs selected. You can configure IDEs later.'));
  }

  // Prompt for installation type if not provided
  let installType = 'full';
  if (!options.full && !options.minimal) {
    const { type } = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Select installation type:',
        choices: [
          { name: 'Full installation (All agents, tasks, and templates)', value: 'full' },
          { name: 'Minimal installation (Core files only)', value: 'minimal' }
        ],
        default: 'full'
      }
    ]);
    installType = type;
  } else if (options.minimal) {
    installType = 'minimal';
  }

  console.log('\n' + chalk.blue(`Starting ${installType} installation...`) + '\n');

  // Set up paths
  const packageRoot = getPackageRoot();
  const sourcePath = path.join(packageRoot, '.tpg-core');
  const targetPath = path.join(projectRoot, '.tpg-core');

  // Check if source directory exists
  if (!fs.existsSync(sourcePath)) {
    console.error(chalk.red(`Error: Source directory not found: ${sourcePath}`));
    console.error(chalk.yellow('The package may be corrupted. Please try reinstalling.'));
    process.exit(1);
  }

  // Copy files
  const fileCopier = new FileCopier(sourcePath, targetPath);
  const spinner = ora('Copying framework files...').start();

  try {
    const result = await fileCopier.copyAll(
      { overwrite: true },
      (progress) => {
        spinner.text = `Copying files... ${progress.current}/${progress.total} - ${progress.file}`;
      }
    );

    spinner.succeed(chalk.green(`Copied ${result.copied} files successfully`));

    if (result.failed > 0) {
      console.log(chalk.yellow(`Warning: ${result.failed} files failed to copy`));
    }

    // Create manifest
    spinner.start('Creating installation manifest...');

    const installedFiles = result.files.map(file => `.tpg-core/${file}`);

    await manifestManager.create(
      {
        version: PACKAGE_VERSION,
        installType,
        ides,
        agent: null
      },
      installedFiles
    );

    spinner.succeed(chalk.green('Installation manifest created'));

    // Show success message
    console.log('\n' + chalk.green.bold('✓ Installation complete!') + '\n');

    console.log(chalk.white('TPG Orchestrator has been installed with:'));
    console.log(chalk.cyan(`  • ${result.copied} framework files`));
    console.log(chalk.cyan(`  • Installation type: ${installType}`));
    console.log(chalk.cyan(`  • IDEs configured: ${ides.join(', ') || 'none'}`));

    console.log('\n' + chalk.white('What\'s next?') + '\n');

    if (ides.includes('claude-code')) {
      console.log(chalk.yellow('For Claude Code:'));
      console.log(chalk.white('  1. Type *help to see available commands'));
      console.log(chalk.white('  2. Start with /tpg-orchestrator to activate the framework'));
    }

    if (ides.includes('cursor')) {
      console.log(chalk.yellow('\nFor Cursor:'));
      console.log(chalk.white('  1. Open Cursor Rules'));
      console.log(chalk.white('  2. Reference the TPG Orchestrator agents in your prompts'));
    }

    if (ides.includes('windsurf')) {
      console.log(chalk.yellow('\nFor Windsurf:'));
      console.log(chalk.white('  1. Open the command palette'));
      console.log(chalk.white('  2. Reference TPG agents in your cascade'));
    }

    console.log('\n' + chalk.white('File structure created:'));
    console.log(chalk.gray('  your-project/'));
    console.log(chalk.gray('  ├── .tpg-core/'));
    console.log(chalk.gray('  │   ├── agents/          (10 specialized agents)'));
    console.log(chalk.gray('  │   ├── tasks/           (14 executable tasks)'));
    console.log(chalk.gray('  │   ├── templates/       (16 structured templates)'));
    console.log(chalk.gray('  │   ├── checklists/      (10 validation checklists)'));
    console.log(chalk.gray('  │   ├── workflows/       (6 workflow definitions)'));
    console.log(chalk.gray('  │   ├── data/            (5 knowledge files)'));
    console.log(chalk.gray('  │   └── core-config.yaml'));
    console.log(chalk.gray('  └── install-manifest.yaml'));

    console.log('\n' + chalk.blue('Run') + chalk.bold(' npx tpg-orchestrator info ') + chalk.blue('to view installation details'));
    console.log('\n');

  } catch (error) {
    spinner.fail(chalk.red('Installation failed'));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Update TPG Orchestrator to latest version
 */
async function update() {
  showBanner();

  const projectRoot = process.cwd();
  const manifestManager = new ManifestManager(projectRoot);

  // Check if installed
  const isInstalled = await manifestManager.isInstalled();
  if (!isInstalled) {
    console.log(chalk.red('Error: TPG Orchestrator is not installed in this project.'));
    console.log(chalk.yellow('Run: npx tpg-orchestrator install'));
    return;
  }

  console.log(chalk.blue('Checking for updates...\n'));

  const spinner = ora('Reading installation manifest...').start();

  try {
    const summary = await manifestManager.getSummary();
    spinner.succeed('Manifest loaded');

    console.log(chalk.white(`Current version: ${summary.version}`));
    console.log(chalk.white(`Latest version: ${PACKAGE_VERSION}`));

    if (summary.version === PACKAGE_VERSION) {
      console.log(chalk.green('\nYou are already running the latest version.'));

      // Still check for modifications
      if (summary.modifiedFiles > 0) {
        console.log(chalk.yellow(`\nNote: ${summary.modifiedFiles} file(s) have been modified.`));
        console.log(chalk.yellow('Run: npx tpg-orchestrator info for details'));
      }

      return;
    }

    // Check for user modifications
    const modifications = await manifestManager.checkModifications();

    if (modifications.modified.length > 0) {
      console.log(chalk.yellow(`\nWarning: ${modifications.modified.length} file(s) have been modified:`));
      modifications.modified.slice(0, 5).forEach(file => {
        console.log(chalk.gray(`  • ${file}`));
      });
      if (modifications.modified.length > 5) {
        console.log(chalk.gray(`  ... and ${modifications.modified.length - 5} more`));
      }

      const { proceed } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'proceed',
          message: 'These modifications will be preserved. Continue with update?',
          default: true
        }
      ]);

      if (!proceed) {
        console.log(chalk.blue('Update cancelled.'));
        return;
      }

      // Create backup
      spinner.start('Creating backup...');
      const backupPath = path.join(projectRoot, `.tpg-core-backup-${Date.now()}`);
      const targetPath = path.join(projectRoot, '.tpg-core');
      const fileCopier = new FileCopier(targetPath, backupPath);
      await fileCopier.createBackup(backupPath);
      spinner.succeed(chalk.green(`Backup created: ${path.basename(backupPath)}`));
    }

    // Perform update
    spinner.start('Updating framework files...');

    const packageRoot = getPackageRoot();
    const sourcePath = path.join(packageRoot, '.tpg-core');
    const targetPath = path.join(projectRoot, '.tpg-core');

    const fileCopier = new FileCopier(sourcePath, targetPath);
    const result = await fileCopier.copyAll({ overwrite: true });

    spinner.succeed(chalk.green(`Updated ${result.copied} files`));

    // Update manifest
    spinner.start('Updating manifest...');
    const installedFiles = result.files.map(file => `.tpg-core/${file}`);
    await manifestManager.update(installedFiles, { version: PACKAGE_VERSION });
    spinner.succeed(chalk.green('Manifest updated'));

    console.log('\n' + chalk.green.bold('✓ Update complete!') + '\n');
    console.log(chalk.white(`Updated from ${summary.version} to ${PACKAGE_VERSION}`));

    if (modifications.modified.length > 0) {
      console.log(chalk.yellow(`\n${modifications.modified.length} modified file(s) were preserved.`));
      console.log(chalk.yellow(`Backup available at: ${path.basename(backupPath)}`));
    }

    console.log('\n');

  } catch (error) {
    spinner.fail(chalk.red('Update failed'));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Uninstall TPG Orchestrator
 */
async function uninstall() {
  showBanner();

  const projectRoot = process.cwd();
  const manifestManager = new ManifestManager(projectRoot);

  // Check if installed
  const isInstalled = await manifestManager.isInstalled();
  if (!isInstalled) {
    console.log(chalk.red('Error: TPG Orchestrator is not installed in this project.'));
    return;
  }

  const summary = await manifestManager.getSummary();

  console.log(chalk.yellow('This will remove TPG Orchestrator from your project:'));
  console.log(chalk.gray(`  • ${summary.totalFiles} framework files`));
  console.log(chalk.gray('  • Installation manifest'));

  if (summary.modifiedFiles > 0) {
    console.log(chalk.red(`\nWarning: ${summary.modifiedFiles} file(s) have been modified and will be deleted!`));
  }

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to uninstall?',
      default: false
    }
  ]);

  if (!confirm) {
    console.log(chalk.blue('Uninstall cancelled.'));
    return;
  }

  const spinner = ora('Removing TPG Orchestrator...').start();

  try {
    // Remove .tpg-core directory
    const targetPath = path.join(projectRoot, '.tpg-core');
    const fileCopier = new FileCopier('', targetPath);
    await fileCopier.removeAll();

    // Remove manifest
    await manifestManager.remove();

    spinner.succeed(chalk.green('TPG Orchestrator has been uninstalled'));

    console.log('\n' + chalk.white('All files have been removed.'));
    console.log(chalk.blue('To reinstall, run: npx tpg-orchestrator install'));
    console.log('\n');

  } catch (error) {
    spinner.fail(chalk.red('Uninstall failed'));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

/**
 * Show installation information
 */
async function showInfo() {
  showBanner();

  const projectRoot = process.cwd();
  const manifestManager = new ManifestManager(projectRoot);

  // Check if installed
  const isInstalled = await manifestManager.isInstalled();
  if (!isInstalled) {
    console.log(chalk.red('TPG Orchestrator is not installed in this project.'));
    console.log(chalk.blue('\nTo install, run: npx tpg-orchestrator install'));
    console.log('\n');
    return;
  }

  const spinner = ora('Reading installation info...').start();

  try {
    const summary = await manifestManager.getSummary();
    spinner.stop();

    console.log(chalk.bold.white('Installation Information:') + '\n');

    console.log(chalk.cyan('Version:       ') + chalk.white(summary.version));
    console.log(chalk.cyan('Installed:     ') + chalk.white(new Date(summary.installedAt).toLocaleString()));
    console.log(chalk.cyan('Install Type:  ') + chalk.white(summary.installType));
    console.log(chalk.cyan('IDEs Setup:    ') + chalk.white(summary.ides.join(', ') || 'none'));

    console.log('\n' + chalk.bold.white('File Statistics:') + '\n');

    console.log(chalk.cyan('Total Files:   ') + chalk.white(summary.totalFiles));
    console.log(chalk.cyan('Unchanged:     ') + chalk.green(summary.unchangedFiles));

    if (summary.modifiedFiles > 0) {
      console.log(chalk.cyan('Modified:      ') + chalk.yellow(summary.modifiedFiles));

      console.log('\n' + chalk.yellow('Modified files:'));
      summary.modifications.modified.slice(0, 10).forEach(file => {
        console.log(chalk.gray(`  • ${file}`));
      });

      if (summary.modifications.modified.length > 10) {
        console.log(chalk.gray(`  ... and ${summary.modifications.modified.length - 10} more`));
      }
    }

    if (summary.missingFiles > 0) {
      console.log(chalk.cyan('Missing:       ') + chalk.red(summary.missingFiles));

      console.log('\n' + chalk.red('Missing files:'));
      summary.modifications.missing.slice(0, 10).forEach(file => {
        console.log(chalk.gray(`  • ${file}`));
      });

      if (summary.modifications.missing.length > 10) {
        console.log(chalk.gray(`  ... and ${summary.modifications.missing.length - 10} more`));
      }
    }

    console.log('\n' + chalk.bold.white('Available Commands:') + '\n');
    console.log(chalk.cyan('  npx tpg-orchestrator update    ') + chalk.gray('- Update to latest version'));
    console.log(chalk.cyan('  npx tpg-orchestrator uninstall ') + chalk.gray('- Remove from project'));
    console.log('\n');

  } catch (error) {
    spinner.fail(chalk.red('Failed to read installation info'));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

module.exports = {
  install,
  update,
  uninstall,
  showInfo
};
