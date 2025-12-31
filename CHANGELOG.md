# Changelog

All notable changes to TPG Orchestrator will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-alpha.2] - 2025-12-31

### Added
- **IDE-Specific Configuration Generation**: Installer now creates IDE-specific folders and wrapper files for Claude Code, Cursor, Windsurf, and GitHub Copilot
- **Multi-IDE Support**: All 10 TPG agents and 14 tasks are now available as:
  - Claude Code slash commands (`.claude/commands/TPG/`)
  - Cursor rules (`.cursor/rules/tpg/`)
  - Windsurf workflows (`.windsurf/workflows/`)
  - GitHub Copilot chat modes (`.github/chatmodes/`)
- **Automatic IDE Detection**: Installer generates appropriate wrapper files based on selected IDEs
- **IDE-Specific Instructions**: Post-installation guidance customized for each IDE

### Changed
- Installer now generates 24+ IDE configuration files (10 agents + 14 tasks) for each selected IDE
- Improved installation output to show IDE-specific folder structure
- Enhanced post-installation instructions with IDE-specific activation steps

### Fixed
- Agent ID extraction from YAML now handles Windows line endings correctly
- IDE configuration files now have correct command names and metadata

### Technical
- New module: `tools/lib/ide-config-generator.js` - Generates IDE-specific wrapper files
- Updated: `tools/lib/installer.js` - Integrates IDE config generation
- Updated: `tools/lib/installer.js` - Uninstaller now removes IDE-specific folders

## [1.0.0-alpha.1] - 2025-12-31

### Added

#### Core Package Features
- Initial alpha release of TPG Orchestrator as an NPM package
- NPM package installation via `npx tpg-orchestrator install`
- Command-line interface with install, update, uninstall, and info commands
- Installation manifest tracking with YAML format
- File hash generation for modification detection
- Multi-IDE support (Claude Code, Cursor, Windsurf, VS Code, GitHub Copilot, Gemini)
- Automatic backup creation during updates
- Interactive CLI prompts for installation options

#### Framework Components
- **10 Specialized Agents**
  - TPG Orchestrator (master coordinator)
  - Product Manager (strategy and roadmap)
  - Product Owner (user stories and backlog)
  - Architect (system design)
  - Developer (implementation)
  - QA Engineer (testing and quality)
  - UX Expert (user experience)
  - Analyst (data and insights)
  - Scrum Master (agile processes)
  - AI Strategist (intelligence design)

- **14 Executable Tasks**
  - DNA Assessment (all 6 DNAs)
  - DNA Creation (all 6 DNAs)
  - MQB Gate Check
  - User Research
  - Journey Mapping
  - Architecture Design
  - And more...

- **16 Structured Templates**
  - DNA Assessment Template
  - User Persona Template
  - User Journey Template
  - System Architecture Template
  - Product Requirements Template
  - Technical Specification Template
  - And more...

- **10 Validation Checklists**
  - Purpose DNA Checklist
  - User DNA Checklist
  - Experience DNA Checklist
  - Architecture DNA Checklist
  - Intelligence DNA Checklist
  - Cultural DNA Checklist
  - MQB Gate Checklists
  - And more...

- **6 Workflow Definitions**
  - Greenfield Product Development
  - Brownfield Product Enhancement
  - AI Integration Workflow
  - Feature Development Workflow
  - Product Migration Workflow
  - Scale and Optimization Workflow

- **5 Data Files**
  - Product Genome Guide
  - MQB Framework Reference
  - Builder's Hierarchy Guide
  - Evolution Flow Documentation
  - Best Practices Compendium

#### Product Genome Framework
- Complete implementation of The Product Genome methodology
- 6 Product DNAs: Purpose, User, Experience, Architecture, Intelligence, Cultural
- MQB (Minimum Quality Bar) 12-gate framework
- Builder's Hierarchy for systematic development
- Evolution Flow 6-stage cycle (Assess, Envision, Design, Build, Validate, Scale)

#### Web Bundles
- TPGFullstack.md - Complete framework bundle (19,560 lines)
- Compatible with ChatGPT, Claude Projects, Gemini Gems
- Single-file distribution for platforms without file support

#### Installation Features
- Full installation option (all components)
- Minimal installation option (core components only)
- IDE-specific configuration
- Preserves user modifications during updates
- Automatic file integrity checking
- Installation manifest with versioning

#### CLI Features
- Colored terminal output using chalk
- Interactive prompts using inquirer
- Progress spinners using ora
- YAML manifest management
- MD5 hash-based file tracking
- Comprehensive error handling

### Technical Details

#### Dependencies
- `chalk` ^4.1.2 - Terminal styling
- `commander` ^11.1.0 - CLI framework
- `fs-extra` ^11.2.0 - File operations
- `inquirer` ^8.2.6 - Interactive prompts
- `js-yaml` ^4.1.0 - YAML parsing
- `ora` ^5.4.1 - Loading spinners

#### Requirements
- Node.js >= 20.0.0
- NPM or compatible package manager

#### Package Structure
```
tpg-orchestrator/
├── tools/
│   ├── cli/
│   │   └── tpg-cli.js
│   ├── lib/
│   │   ├── installer.js
│   │   ├── file-copier.js
│   │   ├── manifest-manager.js
│   │   └── hash-generator.js
│   └── tpg-npx-wrapper.js
├── .tpg-core/
│   ├── agents/
│   ├── tasks/
│   ├── templates/
│   ├── checklists/
│   ├── workflows/
│   ├── data/
│   └── core-config.yaml
├── package.json
├── README.md
├── CHANGELOG.md
└── LICENSE
```

### Installation

```bash
npx tpg-orchestrator@alpha install
```

### Commands

- `npx tpg-orchestrator install` - Install in current project
- `npx tpg-orchestrator install --full` - Full installation (default)
- `npx tpg-orchestrator install --minimal` - Minimal installation
- `npx tpg-orchestrator install --ide <name>` - Specify IDE
- `npx tpg-orchestrator update` - Update to latest version
- `npx tpg-orchestrator info` - Show installation info
- `npx tpg-orchestrator uninstall` - Remove from project

### Known Issues

None reported yet. This is the initial alpha release.

### Future Roadmap

Planned for future releases:
- Expansion packs for specialized domains
- IDE-specific plugins and extensions
- Enhanced analytics and reporting
- Team collaboration features
- Cloud synchronization options
- Custom agent creation tools
- Template customization interface
- Workflow builder

---

## Version History

- **1.0.0-alpha.1** (2025-12-31) - Initial alpha release

---

**Note**: This is an alpha release. Features and APIs may change in future versions. Feedback and contributions are welcome!
