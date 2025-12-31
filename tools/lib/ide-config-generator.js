const fs = require('fs-extra');
const path = require('path');

/**
 * IDE Configuration Generator
 *
 * Generates IDE-specific wrapper files for TPG agents and tasks
 * Supports: Claude Code, Cursor, Windsurf, GitHub Copilot, VS Code, Gemini
 */
class IDEConfigGenerator {
  constructor(tpgCorePath, projectRoot) {
    this.tpgCorePath = tpgCorePath;
    this.projectRoot = projectRoot;

    // IDE configuration paths
    this.ideConfigs = {
      'claude-code': {
        enabled: true,
        basePath: '.claude/commands/TPG',
        agentPath: '.claude/commands/TPG/agents',
        taskPath: '.claude/commands/TPG/tasks',
        extension: '.md',
        generateWrapper: this.generateClaudeWrapper.bind(this)
      },
      'cursor': {
        enabled: true,
        basePath: '.cursor/rules/tpg',
        agentPath: '.cursor/rules/tpg',
        taskPath: '.cursor/rules/tpg',
        extension: '.mdc',
        generateWrapper: this.generateCursorWrapper.bind(this)
      },
      'windsurf': {
        enabled: true,
        basePath: '.windsurf/workflows',
        agentPath: '.windsurf/workflows',
        taskPath: '.windsurf/workflows',
        extension: '.md',
        generateWrapper: this.generateWindsurfWrapper.bind(this)
      },
      'github-copilot': {
        enabled: true,
        basePath: '.github/chatmodes',
        agentPath: '.github/chatmodes',
        taskPath: '.github/chatmodes',
        extension: '.chatmode.md',
        generateWrapper: this.generateGitHubCopilotWrapper.bind(this)
      },
      'vscode': {
        enabled: false, // VS Code doesn't have a standard agent format yet
        basePath: '.vscode',
        agentPath: '.vscode',
        taskPath: '.vscode',
        extension: '.md',
        generateWrapper: null
      },
      'gemini': {
        enabled: false, // Gemini CLI agent format not standardized
        basePath: '.gemini',
        agentPath: '.gemini',
        taskPath: '.gemini',
        extension: '.md',
        generateWrapper: null
      }
    };
  }

  /**
   * Get list of all agents in .tpg-core/agents
   */
  async getAgents() {
    const agentsPath = path.join(this.tpgCorePath, 'agents');
    if (!fs.existsSync(agentsPath)) {
      return [];
    }

    const files = await fs.readdir(agentsPath);
    return files
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        filename: f,
        name: f.replace('.md', ''),
        path: path.join(agentsPath, f)
      }));
  }

  /**
   * Get list of all tasks in .tpg-core/tasks
   */
  async getTasks() {
    const tasksPath = path.join(this.tpgCorePath, 'tasks');
    if (!fs.existsSync(tasksPath)) {
      return [];
    }

    const files = await fs.readdir(tasksPath);
    return files
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        filename: f,
        name: f.replace('.md', ''),
        path: path.join(tasksPath, f)
      }));
  }

  /**
   * Read agent or task file and extract metadata
   */
  async readAgentFile(filePath) {
    const content = await fs.readFile(filePath, 'utf8');

    // Extract agent name/id from YAML block
    const yamlMatch = content.match(/```yaml([\s\S]*?)```/);
    if (!yamlMatch) {
      return { content, agentId: 'unknown', agentTitle: 'Unknown' };
    }

    const yamlContent = yamlMatch[1];

    // Simple approach: search for patterns that look like "  id: value"
    // These should be indented under the agent: section
    let agentId = 'unknown';
    let agentTitle = 'Unknown';

    // Split by both \r\n and \n to handle Windows and Unix line endings
    const lines = yamlContent.split(/\r?\n/);
    let inAgentSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check if we entered agent section (allow for optional whitespace after colon)
      if (line.match(/^agent:\s*$/)) {
        inAgentSection = true;
        continue;
      }

      // Check if we left agent section (next top-level key that isn't indented)
      if (inAgentSection && line.match(/^[a-zA-Z]/)) {
        inAgentSection = false;
      }

      // Extract values if in agent section
      if (inAgentSection) {
        const idMatch = line.match(/^\s+id:\s*(.+)$/);
        const titleMatch = line.match(/^\s+title:\s*(.+)$/);
        const nameMatch = line.match(/^\s+name:\s*(.+)$/);

        if (idMatch) agentId = idMatch[1].trim();
        if (titleMatch) agentTitle = titleMatch[1].trim();
        if (!agentTitle || agentTitle === 'Unknown') {
          if (nameMatch) agentTitle = nameMatch[1].trim();
        }
      }
    }

    return {
      content,
      agentId,
      agentTitle,
      yamlContent
    };
  }

  /**
   * Generate Claude Code wrapper (slash command format)
   */
  generateClaudeWrapper(agentData, type = 'agent') {
    const { content, agentId, agentTitle } = agentData;

    // Claude uses # /command-name format
    const header = `# /${agentId} Command\n\nWhen this command is used, adopt the following agent persona:\n\n`;
    const footer = '';

    return header + content + footer;
  }

  /**
   * Generate Cursor wrapper (.mdc format with frontmatter)
   */
  generateCursorWrapper(agentData, type = 'agent') {
    const { content, agentId, agentTitle } = agentData;

    // Cursor uses frontmatter
    const frontmatter = `---
description:
globs: []
alwaysApply: false
---

`;

    // Add title
    const header = `# ${agentTitle.toUpperCase()} Agent Rule

This rule is triggered when the user types \`@${agentId}\` and activates the ${agentTitle} agent persona.

## Agent Activation

`;

    return frontmatter + header + content;
  }

  /**
   * Generate Windsurf wrapper (cascade format)
   */
  generateWindsurfWrapper(agentData, type = 'agent') {
    const { content, agentId, agentTitle } = agentData;

    // Windsurf uses frontmatter with auto_execution_mode
    const frontmatter = `---
description: ${agentId}
auto_execution_mode: 3
---

`;

    return frontmatter + content;
  }

  /**
   * Generate GitHub Copilot wrapper (chatmode format)
   */
  generateGitHubCopilotWrapper(agentData, type = 'agent') {
    const { content, agentId, agentTitle } = agentData;

    // GitHub Copilot uses frontmatter with tools
    const frontmatter = `---
description: "Activates the ${agentTitle} agent persona."
tools: ['changes', 'codebase', 'fetch', 'findTestFiles', 'githubRepo', 'problems', 'usages', 'editFiles', 'runCommands', 'runTasks', 'runTests', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure']
---

`;

    return frontmatter + content;
  }

  /**
   * Generate IDE configuration files for a specific IDE
   */
  async generateIDEConfig(ideName, agents, tasks) {
    const ideConfig = this.ideConfigs[ideName];

    if (!ideConfig || !ideConfig.enabled || !ideConfig.generateWrapper) {
      return { success: false, skipped: true, reason: 'IDE not supported or disabled' };
    }

    const results = {
      success: true,
      ide: ideName,
      agentsCreated: 0,
      tasksCreated: 0,
      files: []
    };

    try {
      // Create agent wrappers
      const agentDir = path.join(this.projectRoot, ideConfig.agentPath);
      await fs.ensureDir(agentDir);

      for (const agent of agents) {
        const agentData = await this.readAgentFile(agent.path);
        const wrapperContent = ideConfig.generateWrapper(agentData, 'agent');

        const wrapperFilename = agent.name + ideConfig.extension;
        const wrapperPath = path.join(agentDir, wrapperFilename);

        await fs.writeFile(wrapperPath, wrapperContent, 'utf8');

        results.agentsCreated++;
        results.files.push(path.relative(this.projectRoot, wrapperPath));
      }

      // Create task wrappers (only for Claude Code which has separate tasks folder)
      if (ideConfig.taskPath !== ideConfig.agentPath) {
        const taskDir = path.join(this.projectRoot, ideConfig.taskPath);
        await fs.ensureDir(taskDir);

        for (const task of tasks) {
          const taskData = await this.readAgentFile(task.path);
          const wrapperContent = ideConfig.generateWrapper(taskData, 'task');

          const wrapperFilename = task.name + ideConfig.extension;
          const wrapperPath = path.join(taskDir, wrapperFilename);

          await fs.writeFile(wrapperPath, wrapperContent, 'utf8');

          results.tasksCreated++;
          results.files.push(path.relative(this.projectRoot, wrapperPath));
        }
      }

      return results;

    } catch (error) {
      return {
        success: false,
        ide: ideName,
        error: error.message
      };
    }
  }

  /**
   * Generate configurations for all selected IDEs
   */
  async generateAll(selectedIdes = []) {
    const agents = await this.getAgents();
    const tasks = await this.getTasks();

    if (agents.length === 0) {
      throw new Error('No agents found in .tpg-core/agents directory');
    }

    const results = {
      agents: agents.length,
      tasks: tasks.length,
      ides: []
    };

    for (const ideName of selectedIdes) {
      const result = await this.generateIDEConfig(ideName, agents, tasks);
      results.ides.push(result);
    }

    return results;
  }

  /**
   * Remove IDE configurations (for uninstall)
   */
  async removeIDEConfig(ideName) {
    const ideConfig = this.ideConfigs[ideName];

    if (!ideConfig) {
      return { success: false, reason: 'IDE not found' };
    }

    try {
      const basePath = path.join(this.projectRoot, ideConfig.basePath);

      if (fs.existsSync(basePath)) {
        await fs.remove(basePath);
        return { success: true, removed: basePath };
      }

      return { success: true, removed: null, message: 'Directory does not exist' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Get list of supported IDEs
   */
  getSupportedIDEs() {
    return Object.keys(this.ideConfigs)
      .filter(ide => this.ideConfigs[ide].enabled);
  }
}

module.exports = IDEConfigGenerator;
