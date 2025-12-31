# TPG Orchestrator - Quick Start Guide

## For Users

### Install

```bash
npx tpg-orchestrator install
```

or for alpha version:

```bash
npx tpg-orchestrator@alpha install
```

### Commands

```bash
# Install in project
npx tpg-orchestrator install

# Install with specific IDE
npx tpg-orchestrator install --ide claude-code

# Minimal installation
npx tpg-orchestrator install --minimal

# Show installation info
npx tpg-orchestrator info

# Update to latest version
npx tpg-orchestrator update

# Uninstall from project
npx tpg-orchestrator uninstall

# Show help
npx tpg-orchestrator --help
```

---

## For Publishers (First Time)

### 1. Test Locally

```bash
cd TPGOrchestrator

# Install dependencies
npm install

# Test CLI
node tools/cli/tpg-cli.js --help
node tools/cli/tpg-cli.js --version

# Create test package
npm pack

# Test in another directory
cd ../test-project
npm install ../TPGOrchestrator/tpg-orchestrator-1.0.0-alpha.1.tgz
npx tpg-orchestrator install
```

### 2. Publish to NPM

```bash
cd TPGOrchestrator

# Login to NPM (first time only)
npm login

# Publish alpha version
npm publish --tag alpha --access public
```

### 3. Verify Publication

```bash
# Check on NPM
npm view tpg-orchestrator@alpha

# Test installation from NPM
cd ../test-project-2
npx tpg-orchestrator@alpha install
```

---

## For Publishers (Updates)

### Update Version

```bash
# For patch (1.0.0-alpha.1 -> 1.0.0-alpha.2)
npm version prerelease --preid=alpha

# For minor (1.0.0 -> 1.1.0)
npm version minor

# For major (1.0.0 -> 2.0.0)
npm version major
```

### Publish Update

```bash
# Alpha release
npm publish --tag alpha --access public

# Beta release
npm publish --tag beta --access public

# Stable release
npm publish --access public
```

---

## Project Structure

After installation in user's project:

```
your-project/
├── .tpg-core/
│   ├── agents/              # 10 specialized agents
│   ├── tasks/               # 14 executable tasks
│   ├── templates/           # 16 structured templates
│   ├── checklists/          # 10 validation checklists
│   ├── workflows/           # 6 workflow definitions
│   ├── data/                # 5 knowledge files
│   ├── utils/               # Utility scripts
│   └── core-config.yaml     # Framework configuration
└── install-manifest.yaml    # Installation tracking
```

---

## Package Structure

NPM package structure:

```
tpg-orchestrator/
├── tools/
│   ├── cli/
│   │   └── tpg-cli.js              # Main CLI
│   ├── lib/
│   │   ├── installer.js            # Installation logic
│   │   ├── file-copier.js          # File operations
│   │   ├── manifest-manager.js     # Manifest management
│   │   └── hash-generator.js       # Hash generation
│   └── tpg-npx-wrapper.js          # NPX entry point
├── .tpg-core/                      # Framework files (66 files)
├── package.json
├── README.md
├── CHANGELOG.md
├── LICENSE
├── .npmignore
├── TESTING_GUIDE.md
├── QUICK_START.md
└── NPM_PACKAGE_SUMMARY.md
```

---

## Common Tasks

### Test Before Publishing

```bash
npm pack
npm install -g ./tpg-orchestrator-1.0.0-alpha.1.tgz
tpg-orchestrator install
```

### Update Package

```bash
# Make changes to code
git add .
git commit -m "Description of changes"

# Update version
npm version patch

# Publish
npm publish --tag alpha --access public

# Tag in git
git tag v1.0.0-alpha.2
git push && git push --tags
```

### Unpublish (if needed - within 72 hours)

```bash
npm unpublish tpg-orchestrator@1.0.0-alpha.1
```

**Note**: Only use for critical issues. Cannot unpublish after 72 hours.

### Deprecate Version

```bash
npm deprecate tpg-orchestrator@1.0.0-alpha.1 "Please upgrade to 1.0.0-alpha.2"
```

---

## Troubleshooting

### "Cannot find module"

```bash
cd TPGOrchestrator
npm install
```

### "Permission denied" during install

```bash
sudo npm install -g  # Linux/Mac
```

or run terminal as administrator (Windows)

### Files not copying

Check `.tpg-core/` directory exists:
```bash
ls -la .tpg-core/
```

### NPX wrapper not working

Verify bin scripts are executable:
```bash
chmod +x tools/tpg-npx-wrapper.js
chmod +x tools/cli/tpg-cli.js
```

---

## Resources

- **NPM Package**: https://www.npmjs.com/package/tpg-orchestrator
- **GitHub**: https://github.com/theproductgenome/tpg-orchestrator
- **Issues**: https://github.com/theproductgenome/tpg-orchestrator/issues
- **Documentation**: See README.md

---

## Version Tags

- **Alpha**: `npx tpg-orchestrator@alpha install`
- **Beta**: `npx tpg-orchestrator@beta install`
- **Stable**: `npx tpg-orchestrator install`

Current version: **1.0.0-alpha.1**

---

**Quick Reference Card**

```bash
# User Commands
npx tpg-orchestrator install           # Install
npx tpg-orchestrator info              # Show info
npx tpg-orchestrator update            # Update
npx tpg-orchestrator uninstall         # Uninstall

# Publisher Commands
npm login                              # Login to NPM
npm publish --tag alpha --access public # Publish
npm version patch                      # Bump version
npm view tpg-orchestrator@alpha        # Check published

# Testing
npm pack                               # Create tarball
npm install ./tpg-orchestrator-*.tgz   # Test locally
node tools/cli/tpg-cli.js --help       # Test CLI
```

---

**Status**: Ready for Publishing ✅
**Last Updated**: December 31, 2025
