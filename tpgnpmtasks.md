# TPG Orchestrator NPM Package - Complete Task List

**Created:** December 31, 2025
**Purpose:** Transform TPG Orchestrator into an NPM package installable via `npx tpg-orchestrator install`
**Reference:** BMAD-METHOD package structure at https://github.com/bmad-code-org/BMAD-METHOD
**Target:** Enable installation across Claude Code, Cursor, Gemini, GitHub Copilot, VS Code, Windsurf, etc.

---

## RESEARCH COMPLETED ✅

**BMAD Package Analysis:**
- Package name: `bmad-method`
- Version: 6.0.0-alpha.22
- Installation: `npx bmad-method@alpha install`
- Node requirement: ≥20.0.0
- Entry points: tools/bmad-npx-wrapper.js → tools/cli/bmad-cli.js
- Manifest tracking: install-manifest.yaml with file hashes
- IDE support: cursor, claude-code, windsurf, gemini, github-copilot, codex, codex-web
- License: MIT

---

## PHASE 1: PACKAGE FOUNDATION

### Task 1.1: Create package.json ⏳
**Location:** `TPGOrchestrator/package.json`

**Required Fields:**
```json
{
  "name": "tpg-orchestrator",
  "version": "1.0.0-alpha.1",
  "description": "The Product Genome Orchestrator - AI-powered product development framework",
  "license": "MIT",
  "author": "Anand (The Product Genome)",
  "main": "tools/cli/tpg-cli.js",
  "bin": {
    "tpg": "tools/tpg-npx-wrapper.js",
    "tpg-orchestrator": "tools/tpg-npx-wrapper.js"
  },
  "engines": {
    "node": ">=20.0.0"
  },
  "keywords": [
    "product-genome",
    "tpg",
    "orchestrator",
    "ai-agents",
    "product-development",
    "claude-code",
    "cursor",
    "windsurf"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/[your-org]/tpg-orchestrator.git"
  }
}
```

**Dependencies to add:**
- chalk (for colored CLI output)
- commander (for CLI commands)
- inquirer (for interactive prompts)
- js-yaml (for YAML parsing)
- ora (for spinners)

**DevDependencies to add:**
- eslint
- prettier
- jest (for testing)

**Priority:** HIGH
**Estimated lines:** ~100 lines in package.json

---

### Task 1.2: Create directory structure ⏳
**Action:** Create folders for NPM package

**Folders to create:**
```
TPGOrchestrator/
├── tools/
│   ├── cli/
│   │   └── tpg-cli.js          (main CLI script)
│   ├── tpg-npx-wrapper.js      (npx entry point)
│   └── lib/
│       ├── installer.js        (installation logic)
│       ├── file-copier.js      (copy .tpg-core files)
│       ├── manifest-manager.js (manage install-manifest.yaml)
│       └── hash-generator.js   (generate file hashes)
├── .tpg-core/                  (existing - framework files)
├── package.json
├── .npmignore
└── README.md
```

**Priority:** HIGH
**Estimated effort:** 10 minutes

---

### Task 1.3: Create .npmignore ⏳
**Location:** `TPGOrchestrator/.npmignore`

**Content to exclude from npm package:**
```
# Documentation
TPGOrchestorcontext.md
TPGFullstacktasklist.md
tpgnpmtasks.md
missingfilelist.md
IMPLEMENTATION_SUMMARY.md

# Test files
*.test.js
__tests__/

# IDE configs
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Git
.git/
.gitignore

# Examples that shouldn't ship
exampleteamfullstack.md

# Build artifacts
node_modules/
dist/
coverage/
```

**Priority:** MEDIUM
**Estimated lines:** ~30 lines

---

## PHASE 2: CLI IMPLEMENTATION

### Task 2.1: Create NPX Wrapper (tools/tpg-npx-wrapper.js) ⏳

**Purpose:** Entry point for `npx tpg-orchestrator` command

**Functionality:**
1. Detect if running via npx (check if path includes '_npx' or '.npm')
2. If npx: spawn child process preserving user's working directory
3. If local: directly require the CLI
4. Pass all arguments to actual CLI
5. Handle errors gracefully

**Reference:** BMAD's tools/bmad-npx-wrapper.js

**Priority:** HIGH
**Estimated lines:** ~50 lines

---

### Task 2.2: Create Main CLI (tools/cli/tpg-cli.js) ⏳

**Purpose:** Main command-line interface

**Commands to implement:**
```javascript
#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();

program
  .name('tpg-orchestrator')
  .description('The Product Genome Orchestrator')
  .version('1.0.0-alpha.1');

// Main command: install
program
  .command('install')
  .description('Install TPG Orchestrator in current project')
  .option('-f, --full', 'Full installation (all files)')
  .option('-m, --minimal', 'Minimal installation (core only)')
  .option('--ide <ide>', 'Specify IDE (claude-code, cursor, windsurf, etc.)')
  .action(async (options) => {
    const installer = require('../lib/installer');
    await installer.install(options);
  });

// Command: update
program
  .command('update')
  .description('Update TPG Orchestrator to latest version')
  .action(async () => {
    const installer = require('../lib/installer');
    await installer.update();
  });

// Command: uninstall
program
  .command('uninstall')
  .description('Remove TPG Orchestrator from project')
  .action(async () => {
    const installer = require('../lib/installer');
    await installer.uninstall();
  });

// Command: info
program
  .command('info')
  .description('Show installation information')
  .action(async () => {
    const installer = require('../lib/installer');
    await installer.showInfo();
  });

program.parse(process.argv);
```

**Priority:** HIGH
**Estimated lines:** ~100 lines

---

### Task 2.3: Create Installer Module (tools/lib/installer.js) ⏳

**Purpose:** Handle installation logic

**Functions to implement:**

1. **install(options)**
   - Welcome message with TPG logo
   - Check Node.js version (≥20.0.0)
   - Prompt user for IDE selection (multi-select)
   - Prompt for installation type (full/minimal)
   - Copy .tpg-core files to project directory
   - Generate install-manifest.yaml
   - Create .tpg-orchestrator/ folder if needed
   - Show success message with next steps

2. **update()**
   - Read existing install-manifest.yaml
   - Check for new/modified files
   - Backup user-modified files
   - Update framework files
   - Update manifest
   - Show update summary

3. **uninstall()**
   - Read install-manifest.yaml
   - Confirm with user
   - Remove .tpg-core/ folder
   - Remove install-manifest.yaml
   - Show uninstall confirmation

4. **showInfo()**
   - Read install-manifest.yaml
   - Display version, install date, IDE setup
   - Show file count and status
   - Show any modified files

**Priority:** CRITICAL
**Estimated lines:** ~300-400 lines

---

### Task 2.4: Create File Copier (tools/lib/file-copier.js) ⏳

**Purpose:** Copy files from package to project

**Functions:**
```javascript
class FileCopier {
  constructor(sourcePath, targetPath) {
    this.sourcePath = sourcePath;  // package's .tpg-core
    this.targetPath = targetPath;  // project's .tpg-core
  }

  async copyAll() {
    // Copy all files from source to target
    // Preserve directory structure
    // Track copied files for manifest
  }

  async copyFile(relativePath) {
    // Copy single file
    // Create parent directories if needed
  }

  getFileList() {
    // Return list of all files in .tpg-core
  }
}
```

**Priority:** HIGH
**Estimated lines:** ~150 lines

---

### Task 2.5: Create Manifest Manager (tools/lib/manifest-manager.js) ⏳

**Purpose:** Manage install-manifest.yaml

**Structure:**
```yaml
version: 1.0.0-alpha.1
installed_at: '2025-12-31T10:00:00.000Z'
install_type: full  # or minimal
agent: null
ides_setup:
  - claude-code
  - cursor
  - windsurf
  - gemini
  - github-copilot
expansion_packs: []
files:
  - path: .tpg-core/core-config.yaml
    hash: abc123def456
    modified: false
  - path: .tpg-core/agents/tpg-orchestrator.md
    hash: def456ghi789
    modified: false
  # ... all files
```

**Functions:**
```javascript
class ManifestManager {
  async create(files, options) {
    // Create new manifest
    // Generate file hashes
    // Save to install-manifest.yaml
  }

  async read() {
    // Read existing manifest
    // Parse YAML
    // Return manifest object
  }

  async update(files) {
    // Update manifest with new files
    // Check for modifications
    // Save updated manifest
  }

  async checkModifications() {
    // Compare current file hashes with manifest
    // Return list of modified files
  }
}
```

**Priority:** HIGH
**Estimated lines:** ~200 lines

---

### Task 2.6: Create Hash Generator (tools/lib/hash-generator.js) ⏳

**Purpose:** Generate file hashes for integrity checking

**Functions:**
```javascript
const crypto = require('crypto');
const fs = require('fs');

function generateHash(filePath) {
  // Read file
  // Generate MD5 or SHA256 hash
  // Return hash string (first 16 chars like BMAD)
}

function verifyHash(filePath, expectedHash) {
  // Generate current hash
  // Compare with expected
  // Return true/false
}
```

**Priority:** MEDIUM
**Estimated lines:** ~50 lines

---

## PHASE 3: DOCUMENTATION

### Task 3.1: Create README.md ⏳
**Location:** `TPGOrchestrator/README.md`

**Content structure:**
```markdown
# TPG Orchestrator

> The Product Genome Orchestrator - AI-powered framework for building exceptional products

## Quick Start

### Installation

Install TPG Orchestrator in your project:

\`\`\`bash
npx tpg-orchestrator install
\`\`\`

Or install with alpha version:

\`\`\`bash
npx tpg-orchestrator@alpha install
\`\`\`

### Requirements

- Node.js ≥ 20.0.0
- Compatible with:
  - Claude Code
  - Cursor
  - Windsurf
  - VS Code
  - GitHub Copilot
  - Gemini

## What is The Product Genome?

[Explanation of Product Genome framework...]

## Features

- **10 Specialized Agents** for Product Genome implementation
- **14 Executable Tasks** for DNA assessment and creation
- **16 Templates** for structured outputs
- **10 Checklists** for validation
- **6 Workflows** for different scenarios
- **5 Data Files** with comprehensive knowledge

## Usage

After installation, activate the TPG Orchestrator in your IDE:

\`\`\`
*help
\`\`\`

## Commands

- `npx tpg-orchestrator install` - Install in current project
- `npx tpg-orchestrator update` - Update to latest version
- `npx tpg-orchestrator uninstall` - Remove from project
- `npx tpg-orchestrator info` - Show installation info

## Project Structure

After installation:
\`\`\`
your-project/
├── .tpg-core/
│   ├── agents/
│   ├── tasks/
│   ├── templates/
│   ├── checklists/
│   ├── workflows/
│   ├── data/
│   ├── utils/
│   └── core-config.yaml
└── install-manifest.yaml
\`\`\`

## Web Bundles

For ChatGPT, Claude Projects, or Gemini Gems, use:
- `TPGFullstack.md` (19,560 lines - complete bundle)

## License

MIT

## Author

Anand (The Product Genome)
```

**Priority:** HIGH
**Estimated lines:** ~150-200 lines

---

### Task 3.2: Create CHANGELOG.md ⏳
**Location:** `TPGOrchestrator/CHANGELOG.md`

**Content:**
```markdown
# Changelog

All notable changes to TPG Orchestrator will be documented here.

## [1.0.0-alpha.1] - 2025-12-31

### Added
- Initial alpha release
- NPM package installation via `npx tpg-orchestrator install`
- 10 specialized Product Genome agents
- 14 executable tasks
- 16 structured templates
- 10 validation checklists
- 6 workflow definitions
- Installation manifest tracking
- Multi-IDE support (Claude Code, Cursor, Windsurf, etc.)
- TPGFullstack.md web bundle (19,560 lines)

### Features
- Complete Product Genome framework
- 6 DNAs: Purpose, User, Experience, Architecture, Intelligence, Cultural
- MQB (Minimum Quality Bar) 12-gate framework
- Builder's Hierarchy implementation
- Evolution Flow 6-stage cycle
```

**Priority:** MEDIUM
**Estimated lines:** ~50 lines

---

### Task 3.3: Create LICENSE file ⏳
**Location:** `TPGOrchestrator/LICENSE`

**Content:** MIT License text

**Priority:** MEDIUM
**Estimated lines:** ~21 lines

---

### Task 3.4: Update TPG_ORCHESTRATOR_GUIDE.md ⏳

**Add section:**
```markdown
## Installation via NPM

### Quick Install

\`\`\`bash
npx tpg-orchestrator install
\`\`\`

### What Gets Installed

The installer creates a `.tpg-core/` directory in your project with:
- 10 specialized agents
- 14 executable tasks
- 16 templates
- 10 checklists
- 6 workflows
- 3 utilities
- 5 data files

### IDE Configuration

The installer configures your IDE for optimal Product Genome workflow.

### Updates

To update to the latest version:

\`\`\`bash
npx tpg-orchestrator update
\`\`\`
```

**Priority:** MEDIUM

---

## PHASE 4: TESTING & VALIDATION

### Task 4.1: Create test suite ⏳

**Tests needed:**
1. **Package structure tests**
   - Verify all required files exist
   - Validate package.json structure
   - Check bin scripts are executable

2. **Installation tests**
   - Test fresh install
   - Test install with options (--full, --minimal)
   - Test IDE selection
   - Verify .tpg-core files copied correctly
   - Validate manifest creation

3. **Update tests**
   - Test update preserves user modifications
   - Verify backup creation
   - Check version upgrade

4. **Uninstall tests**
   - Verify complete removal
   - Check manifest cleanup

5. **Hash verification tests**
   - Test hash generation
   - Test modification detection

**Priority:** HIGH
**Estimated lines:** ~300-500 lines of tests

---

### Task 4.2: Manual testing checklist ⏳

**Test scenarios:**

1. **Fresh install:**
   ```bash
   cd test-project/
   npx tpg-orchestrator install
   ```
   - Verify .tpg-core/ created
   - Check install-manifest.yaml
   - Confirm all 66 files present

2. **IDE integration:**
   - Test in Claude Code
   - Test in Cursor
   - Test in Windsurf
   - Test in VS Code
   - Verify agents load correctly

3. **Update workflow:**
   ```bash
   npx tpg-orchestrator update
   ```
   - Modify a file
   - Run update
   - Verify modified file preserved

4. **Uninstall:**
   ```bash
   npx tpg-orchestrator uninstall
   ```
   - Confirm removal
   - Check no artifacts remain

**Priority:** CRITICAL

---

## PHASE 5: NPM PUBLISHING PREPARATION

### Task 5.1: Create .npmrc ⏳
**Location:** `TPGOrchestrator/.npmrc`

**Content:**
```
access=public
```

**Priority:** LOW

---

### Task 5.2: Prepare for publishing ⏳

**Steps:**
1. Create npm account (if not exists)
2. Login: `npm login`
3. Verify package name available: `npm search tpg-orchestrator`
4. Test package locally: `npm pack` and install from tarball
5. Publish alpha: `npm publish --tag alpha`

**Priority:** MEDIUM

---

### Task 5.3: GitHub repository setup ⏳

**Actions:**
1. Create GitHub repository for tpg-orchestrator
2. Push code to GitHub
3. Update package.json with correct GitHub URL
4. Add GitHub Actions for CI/CD (optional)
5. Create release tags

**Priority:** MEDIUM

---

## PHASE 6: WEB BUNDLES & INTEGRATION

### Task 6.1: Verify TPGFullstack.md bundle ✅

**Status:** COMPLETE (19,560 lines)
**Location:** `TPGOrchestrator/TPGFullstack.md`

**Action:** Document in README how to use with:
- ChatGPT (upload file)
- Claude Projects (attach file)
- Gemini Gems (upload file)

**Priority:** LOW (documentation only)

---

### Task 6.2: Create IDE-specific guides ⏳

**Guides needed:**
1. **Claude Code setup guide**
   - How to use after installation
   - Recommended .claude-code settings
   - Example workflows

2. **Cursor setup guide**
   - Configuration steps
   - Cursor Rules integration
   - Agent activation

3. **Windsurf setup guide**
   - Installation verification
   - Usage patterns

4. **VS Code + Copilot guide**
   - Extension compatibility
   - Workspace settings

**Priority:** MEDIUM
**Estimated:** 4 guides × 50 lines = 200 lines

---

## SUMMARY

### File Count
**New files to create:** ~20-25 files
- 1 package.json
- 1 .npmignore
- 1 .npmrc
- 1 LICENSE
- 1 README.md
- 1 CHANGELOG.md
- 1 tools/tpg-npx-wrapper.js
- 1 tools/cli/tpg-cli.js
- 4 tools/lib/*.js files
- Test files
- Documentation updates

### Line Count Estimate
**Total new code:** ~2,000-2,500 lines
- Package config: ~200 lines
- CLI & tools: ~800-1,000 lines
- Tests: ~300-500 lines
- Documentation: ~500-700 lines

### Timeline Estimate
**Development phases:**
1. Foundation (Phase 1): 2-3 hours
2. CLI Implementation (Phase 2): 4-6 hours
3. Documentation (Phase 3): 2-3 hours
4. Testing (Phase 4): 2-3 hours
5. Publishing prep (Phase 5): 1-2 hours

**Total:** 11-17 hours of development work

---

## PRIORITY ORDER

### CRITICAL PATH (Do First)
1. ✅ Research BMAD structure
2. ⏳ Create package.json (Task 1.1)
3. ⏳ Create directory structure (Task 1.2)
4. ⏳ Create NPX wrapper (Task 2.1)
5. ⏳ Create main CLI (Task 2.2)
6. ⏳ Create installer module (Task 2.3)
7. ⏳ Create file copier (Task 2.4)
8. ⏳ Create manifest manager (Task 2.5)
9. ⏳ Test installation locally
10. ⏳ Create README.md (Task 3.1)

### SECOND PRIORITY
11. ⏳ Create hash generator (Task 2.6)
12. ⏳ Create .npmignore (Task 1.3)
13. ⏳ Create CHANGELOG.md (Task 3.2)
14. ⏳ Create test suite (Task 4.1)
15. ⏳ Manual testing (Task 4.2)

### THIRD PRIORITY (Before Publishing)
16. ⏳ Create LICENSE (Task 3.3)
17. ⏳ Update guides (Task 3.4)
18. ⏳ Create .npmrc (Task 5.1)
19. ⏳ GitHub setup (Task 5.3)
20. ⏳ IDE guides (Task 6.2)

### FINAL STEP
21. ⏳ NPM publish (Task 5.2)

---

## SUCCESS CRITERIA

✅ **Package installable via:** `npx tpg-orchestrator install`
✅ **Works in IDEs:** Claude Code, Cursor, Windsurf, VS Code, GitHub Copilot
✅ **All 66 files** copied to project's .tpg-core/
✅ **Manifest tracking** file hashes and modifications
✅ **Update/uninstall** workflows functional
✅ **Documentation** complete and clear
✅ **Tests passing** all scenarios
✅ **Published to npm** as alpha version

---

**Status:** Planning complete, ready to execute
**Next Step:** Update TPGOrchestorcontext.md, then begin Phase 1
