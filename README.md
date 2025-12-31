# TPG Orchestrator

> The Product Genome Orchestrator - AI-powered framework for building exceptional products

[![npm version](https://badge.fury.io/js/tpg-orchestrator.svg)](https://badge.fury.io/js/tpg-orchestrator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)

## Quick Start

### Installation

Install TPG Orchestrator in your project with one command:

```bash
npx tpg-orchestrator install
```

Or install the alpha version:

```bash
npx tpg-orchestrator@alpha install
```

### Requirements

- **Node.js** >= 20.0.0
- Compatible with:
  - Claude Code
  - Cursor
  - Windsurf
  - VS Code
  - GitHub Copilot
  - Gemini

## What is The Product Genome?

The Product Genome is a comprehensive framework for building products with AI-powered intelligence. It defines the complete DNA of a product across six critical dimensions:

### The 6 Product DNAs

1. **Purpose DNA** - Vision, mission, and strategic direction
2. **User DNA** - Deep user understanding and personas
3. **Experience DNA** - User journeys and interaction design
4. **Architecture DNA** - System design and technical foundation
5. **Intelligence DNA** - AI capabilities and data strategy
6. **Cultural DNA** - Team values and collaboration patterns

### The MQB Framework

The Minimum Quality Bar (MQB) provides 12 essential gates that every product must pass:

- **Vision Gates** (Purpose DNA)
- **User Gates** (User DNA)
- **Experience Gates** (Experience DNA)
- **Technical Gates** (Architecture DNA)
- **Intelligence Gates** (Intelligence DNA)
- **Cultural Gates** (Cultural DNA)

### The Builder's Hierarchy

A systematic approach to product development:

1. **Foundation** - Purpose and vision
2. **Understanding** - User research and insights
3. **Design** - Experience and architecture
4. **Intelligence** - AI and data integration
5. **Culture** - Team and collaboration

### The Evolution Flow

Six stages of continuous product improvement:

1. **Assess** - Current state analysis
2. **Envision** - Future state definition
3. **Design** - Solution architecture
4. **Build** - Implementation
5. **Validate** - Testing and refinement
6. **Scale** - Growth and optimization

## Features

TPG Orchestrator provides a complete toolkit for Product Genome implementation:

- **10 Specialized Agents** - Expert AI agents for each product domain
- **14 Executable Tasks** - Automated workflows for DNA assessment and creation
- **16 Templates** - Structured outputs for documentation and analysis
- **10 Checklists** - Quality validation and completeness checks
- **6 Workflows** - End-to-end processes for different scenarios
- **5 Data Files** - Comprehensive knowledge base and reference materials

## Usage

After installation, the framework is available in your IDE.

### In Claude Code

```
*help
```

Then activate the orchestrator:

```
/tpg-orchestrator
```

### In Cursor

Reference TPG agents in your Cursor Rules or prompts:

```
Use the TPG Product Manager agent to create user stories
```

### In Windsurf

Reference TPG agents in your cascade:

```
@tpg-architect Design the system architecture
```

## Commands

| Command | Description |
|---------|-------------|
| `npx tpg-orchestrator install` | Install in current project |
| `npx tpg-orchestrator install --ide claude-code` | Install with specific IDE |
| `npx tpg-orchestrator install --minimal` | Minimal installation |
| `npx tpg-orchestrator update` | Update to latest version |
| `npx tpg-orchestrator info` | Show installation details |
| `npx tpg-orchestrator uninstall` | Remove from project |

## Project Structure

After installation, TPG Orchestrator creates the following structure:

```
your-project/
├── .tpg-core/
│   ├── agents/              # 10 specialized AI agents
│   │   ├── tpg-orchestrator.md
│   │   ├── tpg-pm.md
│   │   ├── tpg-po.md
│   │   ├── tpg-architect.md
│   │   ├── tpg-developer.md
│   │   ├── tpg-qa.md
│   │   ├── tpg-ux.md
│   │   ├── tpg-analyst.md
│   │   ├── tpg-sm.md
│   │   └── tpg-ai-strategist.md
│   │
│   ├── tasks/               # 14 executable tasks
│   │   ├── assess-dna.md
│   │   ├── create-dna.md
│   │   ├── mqb-gate-check.md
│   │   ├── user-research.md
│   │   ├── journey-mapping.md
│   │   ├── architecture-design.md
│   │   └── ... (and more)
│   │
│   ├── templates/           # 16 structured templates
│   │   ├── dna-assessment.md
│   │   ├── user-persona.md
│   │   ├── user-journey.md
│   │   ├── system-architecture.md
│   │   └── ... (and more)
│   │
│   ├── checklists/          # 10 validation checklists
│   │   ├── purpose-dna-checklist.md
│   │   ├── user-dna-checklist.md
│   │   ├── experience-dna-checklist.md
│   │   └── ... (and more)
│   │
│   ├── workflows/           # 6 end-to-end workflows
│   │   ├── greenfield-product.md
│   │   ├── brownfield-enhancement.md
│   │   ├── ai-integration.md
│   │   └── ... (and more)
│   │
│   ├── data/                # 5 knowledge files
│   │   ├── product-genome-guide.md
│   │   ├── mqb-framework.md
│   │   ├── builders-hierarchy.md
│   │   ├── evolution-flow.md
│   │   └── best-practices.md
│   │
│   ├── utils/               # Utility scripts
│   └── core-config.yaml     # Framework configuration
│
└── install-manifest.yaml    # Installation tracking
```

## The 10 Specialized Agents

Each agent is an expert in a specific domain:

1. **TPG Orchestrator** - Master coordinator and framework expert
2. **Product Manager** - Product strategy and roadmap planning
3. **Product Owner** - User stories and backlog management
4. **Architect** - System design and technical architecture
5. **Developer** - Implementation and coding best practices
6. **QA Engineer** - Testing strategy and quality assurance
7. **UX Expert** - User experience and design
8. **Analyst** - Data analysis and insights
9. **Scrum Master** - Agile processes and team facilitation
10. **AI Strategist** - AI integration and intelligence design

## Web Bundles

For IDEs without file-based support (ChatGPT, Claude Projects, Gemini Gems):

- **TPGFullstack.md** - Complete framework in a single file (19,560 lines)

Simply upload this file to your AI tool to access the full TPG Orchestrator framework.

## Installation Options

### Full Installation (Default)

```bash
npx tpg-orchestrator install
```

Includes all agents, tasks, templates, checklists, workflows, and data files.

### Minimal Installation

```bash
npx tpg-orchestrator install --minimal
```

Includes only core agents and essential templates.

### IDE-Specific Installation

```bash
npx tpg-orchestrator install --ide claude-code
npx tpg-orchestrator install --ide cursor
npx tpg-orchestrator install --ide windsurf
```

## Updating

To update to the latest version:

```bash
npx tpg-orchestrator update
```

The update process:
- Preserves your modifications
- Creates a backup before updating
- Updates only framework files
- Maintains your configuration

## Examples

### Creating a New Product

1. Start with the TPG Orchestrator:
   ```
   /tpg-orchestrator
   ```

2. Assess current state:
   ```
   Run the assess-dna task for our new product
   ```

3. Create the 6 DNAs:
   ```
   Create Purpose DNA for [product name]
   ```

### Enhancing Existing Product

1. Use the brownfield workflow:
   ```
   Follow the brownfield-enhancement workflow
   ```

2. Identify gaps:
   ```
   Run MQB gate check on current product
   ```

3. Implement improvements:
   ```
   Create user journey for [specific feature]
   ```

### AI Integration

1. Use the AI Strategist agent:
   ```
   /tpg-ai-strategist
   ```

2. Design intelligence layer:
   ```
   Create Intelligence DNA for AI-powered features
   ```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Support

- **Issues**: [GitHub Issues](https://github.com/theproductgenome/tpg-orchestrator/issues)
- **Documentation**: [Full Documentation](https://github.com/theproductgenome/tpg-orchestrator/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/theproductgenome/tpg-orchestrator/discussions)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**Anand** - The Product Genome

---

**Built with the Product Genome Framework**

Transform your product development with AI-powered intelligence and systematic excellence.
