# TPG Orchestrator - Publishing Checklist

**Date:** December 31, 2025
**Version:** 1.0.0-alpha.1
**Goal:** Publish to NPM and GitHub

---

## PRE-PUBLISHING CHECKLIST

### ✅ Prerequisites
- [ ] Node.js ≥20.0.0 installed
- [ ] NPM account created at https://www.npmjs.com/signup
- [ ] GitHub account ready
- [ ] Git installed on your system

---

## STEP-BY-STEP PUBLISHING GUIDE

### PHASE 1: LOCAL TESTING (5-10 minutes)

#### Step 1.1: Install Dependencies
```bash
cd C:\Users\anand\Documents\TheProductGenome\GithubRepoSynch\theproductgenome\TPGOrchestrator
npm install
```

**Expected Output:**
- Installs chalk, commander, inquirer, js-yaml, ora, fs-extra
- Creates node_modules/ folder
- Creates package-lock.json

**Verify:**
```bash
node tools/cli/tpg-cli.js --version
```
Should show: `1.0.0-alpha.1`

---

#### Step 1.2: Test CLI Commands
```bash
node tools/cli/tpg-cli.js --help
```

**Expected Output:**
```
Usage: tpg-orchestrator [options] [command]

The Product Genome Orchestrator

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  install [options]  Install TPG Orchestrator in current project
  update             Update TPG Orchestrator to latest version
  uninstall          Remove TPG Orchestrator from project
  info               Show installation information
  help [command]     display help for command
```

---

#### Step 1.3: Create Test Package
```bash
npm pack
```

**Expected Output:**
- Creates: `tpg-orchestrator-1.0.0-alpha.1.tgz`
- Shows package size and file count

---

#### Step 1.4: Test Installation in Separate Directory

**Create test directory:**
```bash
cd ..
mkdir test-tpg-install
cd test-tpg-install
npm init -y
```

**Install from local package:**
```bash
npm install ../TPGOrchestrator/tpg-orchestrator-1.0.0-alpha.1.tgz
```

**Test the installation:**
```bash
npx tpg-orchestrator install
```

**Expected Behavior:**
1. Shows TPG Orchestrator welcome banner
2. Prompts for IDE selection (use arrow keys and space to select)
3. Prompts for installation type (full/minimal)
4. Shows progress spinner
5. Creates `.tpg-core/` directory
6. Creates `install-manifest.yaml`
7. Shows success message

**Verify Installation:**
```bash
dir .tpg-core
type install-manifest.yaml
npx tpg-orchestrator info
```

**Test other commands:**
```bash
npx tpg-orchestrator info
npx tpg-orchestrator update
npx tpg-orchestrator uninstall
```

**Clean up test:**
```bash
cd ..
rmdir /s /q test-tpg-install
cd TPGOrchestrator
```

---

### PHASE 2: GITHUB REPOSITORY SETUP (10-15 minutes)

#### Step 2.1: Create GitHub Repository

**Via GitHub Website:**
1. Go to https://github.com/new
2. **Repository name:** `tpg-orchestrator`
3. **Description:** "The Product Genome Orchestrator - AI-powered framework for building exceptional products"
4. **Visibility:** Public
5. **DO NOT initialize with README** (we already have one)
6. Click **Create repository**

**Save the repository URL:**
```
https://github.com/[YOUR-USERNAME]/tpg-orchestrator.git
```

---

#### Step 2.2: Update package.json with GitHub URL

Open `package.json` and update the repository field:

```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/[YOUR-USERNAME]/tpg-orchestrator.git"
},
"bugs": {
  "url": "https://github.com/[YOUR-USERNAME]/tpg-orchestrator/issues"
},
"homepage": "https://github.com/[YOUR-USERNAME]/tpg-orchestrator#readme"
```

**Replace `[YOUR-USERNAME]` with your actual GitHub username.**

---

#### Step 2.3: Create .gitignore

Create `.gitignore` file in TPGOrchestrator folder:

```
# Dependencies
node_modules/
package-lock.json

# NPM
*.tgz
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
test-tpg-install/
coverage/

# OS
.DS_Store
Thumbs.db
*.log

# IDE
.vscode/
.idea/
*.swp
*.swo

# Build
dist/
```

---

#### Step 2.4: Initialize Git and Push to GitHub

```bash
# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial release: TPG Orchestrator v1.0.0-alpha.1

- Complete NPM package implementation
- 10 specialized Product Genome agents
- 14 executable tasks
- 16 structured templates
- 10 validation checklists
- 6 workflow definitions
- Smart installation with IDE support
- File integrity tracking with install manifest
- Update/uninstall functionality
- Complete documentation and guides"

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/[YOUR-USERNAME]/tpg-orchestrator.git

# Push to GitHub
git branch -M main
git push -u origin main

# Create version tag
git tag v1.0.0-alpha.1
git push --tags
```

---

#### Step 2.5: Verify GitHub Repository

1. Go to your repository on GitHub
2. Verify all files are present:
   - ✅ README.md displayed as homepage
   - ✅ LICENSE visible
   - ✅ package.json present
   - ✅ tools/ folder with all scripts
   - ✅ .tpg-core/ folder with framework files

3. Check the release tag:
   - Go to "Releases" tab
   - Should see `v1.0.0-alpha.1` tag

---

### PHASE 3: NPM PUBLISHING (5-10 minutes)

#### Step 3.1: NPM Account Setup

**If you don't have an NPM account:**
1. Go to https://www.npmjs.com/signup
2. Fill in username, email, password
3. Verify email address

**If you already have an account:**
- Just remember your credentials

---

#### Step 3.2: Login to NPM

```bash
npm login
```

**Prompts:**
- Username: [your-npm-username]
- Password: [your-password]
- Email: [your-email]
- One-time password (if 2FA enabled): [code from authenticator]

**Verify login:**
```bash
npm whoami
```

Should show your username.

---

#### Step 3.3: Check Package Name Availability

```bash
npm search tpg-orchestrator
```

**Expected:** No results (package name available)

**If name is taken:**
- Consider: `@your-username/tpg-orchestrator` (scoped package)
- Or different name: `theproductgenome-orchestrator`

---

#### Step 3.4: Pre-publish Verification

**Run final checks:**
```bash
# Check package.json syntax
npm pkg get name version
# Should output: "tpg-orchestrator" and "1.0.0-alpha.1"

# Verify files to be published
npm pack --dry-run
```

**Review output:** Ensure important files are included, unnecessary files excluded

---

#### Step 3.5: Publish to NPM (Alpha Version)

```bash
npm publish --tag alpha --access public
```

**Flags explained:**
- `--tag alpha`: Publishes as alpha (users need `@alpha` to install)
- `--access public`: Makes package publicly available

**Expected Output:**
```
npm notice
npm notice 📦  tpg-orchestrator@1.0.0-alpha.1
npm notice === Tarball Contents ===
npm notice [list of files]
npm notice === Tarball Details ===
npm notice name:          tpg-orchestrator
npm notice version:       1.0.0-alpha.1
npm notice package size:  XXX kB
npm notice unpacked size: XXX kB
npm notice total files:   XX
npm notice
+ tpg-orchestrator@1.0.0-alpha.1
```

---

#### Step 3.6: Verify NPM Publication

**Check on NPM website:**
1. Go to https://www.npmjs.com/package/tpg-orchestrator
2. Should see your package with version 1.0.0-alpha.1
3. Check README is displayed correctly
4. Verify installation command is shown

**Check via CLI:**
```bash
npm view tpg-orchestrator
```

Should show package metadata.

---

### PHASE 4: POST-PUBLISH TESTING (5 minutes)

#### Step 4.1: Test Published Package

**In a completely separate directory:**
```bash
cd C:\Users\anand\Desktop
mkdir test-published-package
cd test-published-package
npm init -y
```

**Install from NPM:**
```bash
npx tpg-orchestrator@alpha install
```

**Expected:**
1. Downloads package from NPM
2. Runs installation wizard
3. Copies all .tpg-core files
4. Creates install-manifest.yaml
5. Shows success message

**Verify:**
```bash
dir .tpg-core
npx tpg-orchestrator info
```

**Test commands:**
```bash
npx tpg-orchestrator --help
npx tpg-orchestrator --version
npx tpg-orchestrator update
npx tpg-orchestrator uninstall
```

---

#### Step 4.2: Test in Different IDEs (Optional)

**Claude Code:**
1. Open test project in Claude Code
2. Try activating agents
3. Verify .tpg-core files accessible

**Cursor:**
1. Open test project in Cursor
2. Check agent activation
3. Test workflows

---

### PHASE 5: ANNOUNCEMENT & DOCUMENTATION (Optional)

#### Step 5.1: Update GitHub README

Add badges to top of README.md:

```markdown
# TPG Orchestrator

[![npm version](https://badge.fury.io/js/tpg-orchestrator.svg)](https://www.npmjs.com/package/tpg-orchestrator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/tpg-orchestrator)](https://nodejs.org/)

> The Product Genome Orchestrator - AI-powered framework for building exceptional products
```

---

#### Step 5.2: Create GitHub Release

1. Go to GitHub repository → Releases → Draft a new release
2. **Tag:** v1.0.0-alpha.1
3. **Title:** TPG Orchestrator v1.0.0-alpha.1 (Alpha Release)
4. **Description:** Copy from CHANGELOG.md
5. **Check:** This is a pre-release
6. Publish release

---

#### Step 5.3: Share with Community (Optional)

**NPM Package:**
- Share link: https://www.npmjs.com/package/tpg-orchestrator

**GitHub Repository:**
- Share link: https://github.com/[YOUR-USERNAME]/tpg-orchestrator

**Installation Command:**
```bash
npx tpg-orchestrator@alpha install
```

---

## QUICK COMMAND REFERENCE

### Testing Locally
```bash
cd TPGOrchestrator
npm install
npm pack
node tools/cli/tpg-cli.js --help
```

### GitHub Setup
```bash
git init
git add .
git commit -m "Initial release v1.0.0-alpha.1"
git remote add origin https://github.com/[USERNAME]/tpg-orchestrator.git
git push -u origin main
git tag v1.0.0-alpha.1
git push --tags
```

### NPM Publishing
```bash
npm login
npm publish --tag alpha --access public
```

### Testing Published Package
```bash
npx tpg-orchestrator@alpha install
```

---

## TROUBLESHOOTING

### Issue: "npm ERR! 403 Forbidden"
**Solution:** Package name already taken. Try scoped package: `@username/tpg-orchestrator`

### Issue: "npm ERR! code ENEEDAUTH"
**Solution:** Run `npm login` again

### Issue: Git push rejected
**Solution:**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main --force
```

### Issue: Package not found after publishing
**Solution:** Wait 5-10 minutes for NPM registry to propagate

---

## SUCCESS CRITERIA

### ✅ GitHub Published
- [ ] Repository created on GitHub
- [ ] All files pushed to main branch
- [ ] Version tag v1.0.0-alpha.1 created
- [ ] README displays correctly
- [ ] License file visible

### ✅ NPM Published
- [ ] Package visible at https://www.npmjs.com/package/tpg-orchestrator
- [ ] Version 1.0.0-alpha.1 shown
- [ ] Installation works: `npx tpg-orchestrator@alpha install`
- [ ] README displays on NPM page
- [ ] All commands functional

### ✅ Verification Complete
- [ ] Tested installation in clean directory
- [ ] All CLI commands work
- [ ] .tpg-core files copied correctly
- [ ] install-manifest.yaml created
- [ ] Can update and uninstall

---

## NEXT STEPS AFTER PUBLISHING

### For Future Updates:

**1. Make changes to code**

**2. Update version:**
```bash
npm version prerelease --preid=alpha
# This updates: 1.0.0-alpha.1 → 1.0.0-alpha.2
```

**3. Commit and tag:**
```bash
git add .
git commit -m "Version 1.0.0-alpha.2: [changes]"
git push
git push --tags
```

**4. Republish:**
```bash
npm publish --tag alpha --access public
```

---

**Ready to publish? Follow the steps above in order!** 🚀
