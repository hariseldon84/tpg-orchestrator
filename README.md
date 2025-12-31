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
Use the TPG Product Owner agent to create user stories
Use the Purpose Architect to define product vision
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
│   │   ├── purpose-architect.md
│   │   ├── user-analyst.md
│   │   ├── experience-guardian.md
│   │   ├── architecture-expert.md
│   │   ├── intelligence-analyst.md
│   │   ├── culture-coach.md
│   │   ├── evolution-manager.md
│   │   ├── product-owner.md
│   │   └── quality-specialist.md
│   │
│   ├── tasks/               # 14 executable tasks
│   │   ├── assess-genome.md
│   │   ├── assess-purpose-dna.md
│   │   ├── assess-user-dna.md
│   │   ├── assess-experience-dna.md
│   │   ├── assess-architecture-dna.md
│   │   ├── assess-intelligence-dna.md
│   │   ├── assess-cultural-dna.md
│   │   ├── define-mqb.md
│   │   ├── run-mqb-gates.md
│   │   ├── create-user-story.md
│   │   ├── create-adr.md
│   │   ├── analyze-metrics.md
│   │   ├── validate-genome-coherence.md
│   │   └── create-doc.md
│   │
│   ├── templates/           # 16 structured templates
│   │   ├── genome-assessment-tmpl.yaml
│   │   ├── purpose-dna-tmpl.yaml
│   │   ├── user-dna-tmpl.yaml
│   │   ├── experience-dna-tmpl.yaml
│   │   ├── architecture-dna-tmpl.yaml
│   │   ├── intelligence-dna-tmpl.yaml
│   │   ├── cultural-dna-tmpl.yaml
│   │   ├── mqb-definition-tmpl.yaml
│   │   ├── user-story-tmpl.yaml
│   │   ├── epic-tmpl.yaml
│   │   ├── adr-tmpl.yaml
│   │   ├── product-brief-tmpl.yaml
│   │   ├── metrics-dashboard-tmpl.yaml
│   │   ├── evolution-plan-tmpl.yaml
│   │   ├── culture-rituals-tmpl.yaml
│   │   └── genome-coherence-report-tmpl.yaml
│   │
│   ├── checklists/          # 10 validation checklists
│   │   ├── purpose-dna-checklist.md
│   │   ├── user-dna-checklist.md
│   │   ├── experience-dna-checklist.md
│   │   ├── architecture-dna-checklist.md
│   │   ├── intelligence-dna-checklist.md
│   │   ├── cultural-dna-checklist.md
│   │   ├── mqb-gate-checklist.md
│   │   ├── evolution-flow-checklist.md
│   │   ├── genome-coherence-checklist.md
│   │   └── ship-readiness-checklist.md
│   │
│   ├── workflows/           # 6 end-to-end workflows
│   │   ├── greenfield-product.yaml
│   │   ├── brownfield-product.yaml
│   │   ├── genome-assessment-flow.yaml
│   │   ├── dna-creation-flow.yaml
│   │   ├── feature-validation-flow.yaml
│   │   └── ship-validation-flow.yaml
│   │
│   ├── data/                # 5 knowledge files
│   │   ├── tpg-kb.md
│   │   ├── genome-patterns.md
│   │   ├── case-studies.md
│   │   ├── elicitation-methods.md
│   │   └── technical-preferences.md
│   │
│   ├── utils/               # 3 utility files
│   │   ├── genome-calculator.md
│   │   ├── template-format.md
│   │   └── workflow-management.md
│   │
│   ├── agent-teams/         # Team configuration
│   │   └── team-product-genome.yaml
│   │
│   └── core-config.yaml     # Framework configuration
│
└── install-manifest.yaml    # Installation tracking
```

## The 10 Specialized Agents

Each agent specializes in a Product Genome DNA:

1. **TPG Orchestrator** - Master coordinator and Product Genome framework expert
2. **Purpose Architect (Sophia)** - Purpose DNA specialist - vision, mission, and strategic direction
3. **User Analyst (Maya)** - User DNA specialist - user research, personas, and Jobs-to-be-Done
4. **Experience Guardian (Emma)** - Experience DNA & MQB specialist - user journeys and quality gates
5. **Architecture Expert (Winston)** - Architecture DNA specialist - system design and ADRs
6. **Intelligence Analyst (Iris)** - Intelligence DNA specialist - metrics, analytics, and data strategy
7. **Culture Coach (Carlos)** - Cultural DNA specialist - team values and collaboration
8. **Evolution Manager (Evelyn)** - Evolution Flow specialist - continuous improvement cycles
9. **Product Owner (Olivia)** - Builder's Hierarchy specialist - stories, epics, and delivery
10. **Quality Specialist (Quinn)** - QA, AI integration, and security specialist

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
