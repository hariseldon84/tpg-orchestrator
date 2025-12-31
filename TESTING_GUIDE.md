# TPG Orchestrator - Testing Guide

## Local Testing (Before Publishing)

### 1. Test CLI Locally

From the TPGOrchestrator directory:

```bash
# Test help command
node tools/cli/tpg-cli.js --help

# Test version command
node tools/cli/tpg-cli.js --version

# Test install command (dry run in a test directory)
cd /path/to/test-project
node /path/to/TPGOrchestrator/tools/cli/tpg-cli.js install
```

### 2. Test NPM Pack

Create a tarball to test what will be published:

```bash
cd TPGOrchestrator
npm pack
```

This creates `tpg-orchestrator-1.0.0-alpha.1.tgz`

### 3. Test Local Installation

Install the package locally from the tarball:

```bash
# In a test project directory
mkdir test-tpg-install
cd test-tpg-install
npm init -y
npm install /path/to/TPGOrchestrator/tpg-orchestrator-1.0.0-alpha.1.tgz

# Test the installed package
npx tpg-orchestrator install
```

### 4. Test NPX Wrapper

The NPX wrapper should preserve the user's working directory:

```bash
cd test-tpg-install
npx tpg-orchestrator install
```

Verify:
- Installation creates `.tpg-core/` in current directory
- Creates `install-manifest.yaml` in current directory
- Shows proper banner and progress

### 5. Test All Commands

```bash
# Install
npx tpg-orchestrator install --ide claude-code

# Info
npx tpg-orchestrator info

# Update (should show "already latest version")
npx tpg-orchestrator update

# Uninstall
npx tpg-orchestrator uninstall
```

### 6. Test Installation Options

```bash
# Full installation (default)
npx tpg-orchestrator install --full

# Minimal installation
npx tpg-orchestrator install --minimal

# IDE-specific
npx tpg-orchestrator install --ide cursor
npx tpg-orchestrator install --ide windsurf
```

### 7. Test Modification Detection

```bash
# Install
npx tpg-orchestrator install

# Modify a file
echo "# Test modification" >> .tpg-core/agents/tpg-orchestrator.md

# Check info (should show 1 modified file)
npx tpg-orchestrator info

# Update (should preserve modification)
npx tpg-orchestrator update
```

### 8. Verify File Structure

After installation, verify:

```bash
ls -la .tpg-core/
ls -la .tpg-core/agents/
ls -la .tpg-core/tasks/
ls -la .tpg-core/templates/
ls -la install-manifest.yaml
```

Expected structure:
- `.tpg-core/agents/` - 10 agent files
- `.tpg-core/tasks/` - 14 task files
- `.tpg-core/templates/` - 16 template files
- `.tpg-core/checklists/` - 10 checklist files
- `.tpg-core/workflows/` - 6 workflow files
- `.tpg-core/data/` - 5 data files
- `.tpg-core/core-config.yaml`
- `install-manifest.yaml`

### 9. Verify Manifest Content

Check `install-manifest.yaml`:

```yaml
version: 1.0.0-alpha.1
installed_at: '2025-12-31T...'
install_type: full  # or minimal
agent: null
ides_setup:
  - claude-code
  - cursor
expansion_packs: []
files:
  - path: .tpg-core/core-config.yaml
    hash: abc123...
    modified: false
  # ... more files
```

### 10. Test Error Handling

```bash
# Try to update without installing
cd empty-directory
npx tpg-orchestrator update
# Should show error: "TPG Orchestrator is not installed"

# Try to uninstall without installing
npx tpg-orchestrator uninstall
# Should show error: "TPG Orchestrator is not installed"
```

## Publishing to NPM

### Prerequisites

1. **NPM Account**: Create account at https://www.npmjs.com/signup
2. **Login**: `npm login`
3. **Verify**: `npm whoami`

### Publishing Steps

#### 1. Verify Package

```bash
cd TPGOrchestrator
npm run lint  # If configured
npm test      # If tests exist
npm pack --dry-run
```

#### 2. Publish Alpha Version

```bash
npm publish --tag alpha --access public
```

This publishes as: `tpg-orchestrator@1.0.0-alpha.1`

Users can install with:
```bash
npx tpg-orchestrator@alpha install
```

#### 3. Verify Publication

```bash
npm view tpg-orchestrator
npm view tpg-orchestrator@alpha
```

#### 4. Test Published Package

```bash
# In a test directory
npx tpg-orchestrator@alpha install
```

### Publishing Beta/Stable Versions

For beta:
```bash
npm version 1.0.0-beta.1
npm publish --tag beta --access public
```

For stable release:
```bash
npm version 1.0.0
npm publish --access public
```

## CI/CD (Optional)

### GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Troubleshooting

### Issue: "Cannot find module"

**Solution**: Ensure all dependencies are installed:
```bash
npm install
```

### Issue: "Permission denied" on install

**Solution**: The bin scripts need execute permissions:
```bash
chmod +x tools/tpg-npx-wrapper.js
chmod +x tools/cli/tpg-cli.js
```

### Issue: Files not copying during install

**Solution**: Check that `.tpg-core/` directory exists in package:
```bash
ls -la .tpg-core/
```

### Issue: NPX not preserving working directory

**Solution**: The NPX wrapper should handle this. Check `tools/tpg-npx-wrapper.js` is being used as entry point.

## Test Checklist

- [ ] CLI help works (`--help`)
- [ ] CLI version works (`--version`)
- [ ] Install command works
- [ ] Update command works
- [ ] Uninstall command works
- [ ] Info command works
- [ ] Full installation copies all files
- [ ] Minimal installation works
- [ ] IDE selection works
- [ ] Manifest is created correctly
- [ ] File hashes are generated
- [ ] Modification detection works
- [ ] Backup is created during update
- [ ] User modifications are preserved
- [ ] Error messages are clear
- [ ] Colored output works
- [ ] Progress indicators show
- [ ] Interactive prompts work
- [ ] NPM pack succeeds
- [ ] Local tarball installation works
- [ ] Published package installs correctly

## Next Steps After Testing

1. **Fix any issues** found during testing
2. **Update version** if needed: `npm version patch|minor|major`
3. **Create git tag**: `git tag v1.0.0-alpha.1`
4. **Push to GitHub**: `git push && git push --tags`
5. **Publish to NPM**: `npm publish --tag alpha --access public`
6. **Announce release** in README and CHANGELOG
7. **Monitor for issues** and user feedback
