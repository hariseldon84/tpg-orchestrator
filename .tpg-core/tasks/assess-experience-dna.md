<!-- Powered by Product Genome™ Framework -->

# Assess Experience DNA Task

## Purpose

To conduct a comprehensive assessment of a product's Experience DNA maturity and quality standards. This task evaluates how well the product defines and enforces quality thresholds, user experience standards, accessibility requirements, and Minimum Quality Bar (MQB) gates.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Experience DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `experienceDNA.*`, `genomeDNA.*`

### 1. Gather Existing Experience DNA Documentation

#### 1.1 Check for Existing Experience DNA Documents

Based on config, check if these documents exist:
- Main Experience DNA document (`experienceDNA.experienceFile`)
- Quality thresholds document (`experienceDNA.qualityThresholdsFile`)
- MQB gates document (`experienceDNA.mqbGatesFile`)
- UX standards and design system documentation

For each existing document:
- Load and review thoroughly
- Note what sections are present and complete
- Identify gaps or incomplete sections

If none exist:
- Note that Experience DNA needs to be created from scratch
- Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- Design system guidelines
- Accessibility standards documentation
- Performance budgets and benchmarks
- Usability testing reports
- User experience research
- MQB gate checklists
- Quality metrics dashboards

### 2. Experience DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / No standards defined
- 2 = Minimal / Ad-hoc quality decisions
- 3 = Moderate / Some standards, inconsistently enforced
- 4 = Strong / Clear standards, consistently enforced
- 5 = Exceptional / Quality culture embedded, proactive improvement

#### 2.1 Quality Thresholds Definition

**Assessment Questions:**
- Are quality thresholds clearly defined and documented?
- Are thresholds measurable (not subjective)?
- Do thresholds cover performance, usability, accessibility, reliability?
- Are thresholds context-appropriate (match user environment)?
- Are thresholds validated and tracked?

**Score: [1-5]**

**Evidence Found:**
- [List specific thresholds or lack thereof]
- [Note measurement methods]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 Performance Standards

**Assessment Questions:**
- Are performance standards defined (load time, response time, resource usage)?
- Are standards based on user device/network constraints (from User DNA)?
- Is performance monitored against standards?
- Are performance budgets enforced in development?
- Do features ship only if performance standards are met?

**Score: [1-5]**

**Evidence Found:**
- [List performance thresholds or lack thereof]
- [Note monitoring systems]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 Usability Standards

**Assessment Questions:**
- Are usability standards clearly defined?
- Do standards address cognitive load, learnability, efficiency?
- Are standards validated through usability testing?
- Is there a defined error handling approach?
- Are interaction patterns consistent across the product?

**Score: [1-5]**

**Evidence Found:**
- [List usability standards or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 Accessibility Standards

**Assessment Questions:**
- Are accessibility standards defined (WCAG level, etc.)?
- Are standards enforced before shipping?
- Is accessibility tested (automated and manual)?
- Does product work with assistive technologies?
- Is accessibility a requirement or optional?

**Score: [1-5]**

**Evidence Found:**
- [List accessibility standards or lack thereof]
- [Note WCAG level targeted]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 Design System Maturity

**Assessment Questions:**
- Does a design system exist (component library, patterns)?
- Is the design system documented and maintained?
- Are components accessible by default?
- Do teams actually use the design system?
- Is there consistency across product features?

**Score: [1-5]**

**Evidence Found:**
- [List design system components or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 MQB Gates Implementation

**Assessment Questions:**
- Are MQB gates defined for all releases?
- Are the 12 critical gates implemented?
- Are gates enforced (failures block shipping)?
- Is there evidence of features being blocked for quality issues?
- Are exceptions rare and properly documented?

**Score: [1-5]**

**Evidence Found:**
- [List gates implemented or lack thereof]
- [Note enforcement evidence]

**Gaps Identified:**
- [List specific gaps]

#### 2.7 Quality Culture and Enforcement

**Assessment Questions:**
- Is quality viewed as non-negotiable (not "nice to have")?
- Does team celebrate protecting quality bar?
- Are quality standards enforced under deadline pressure?
- Is there evidence of "we'll fix it later" being rejected?
- Do team members feel empowered to block poor quality?

**Score: [1-5]**

**Evidence Found:**
- [List cultural evidence or lack thereof]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall Experience DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - No quality standards, high risk of poor user experience
- 2.0-2.9 = Weak - Ad-hoc quality, inconsistent user experience
- 3.0-3.9 = Moderate - Standards exist but enforcement needs strengthening
- 4.0-4.5 = Strong - Quality bar well-defined and consistently enforced
- 4.6-5.0 = Exceptional - Quality culture embedded, proactive excellence

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps that are causing quality issues or user frustration]

#### 4.2 High Priority Improvements
- [List important gaps that should be addressed soon]

#### 4.3 Nice-to-Have Enhancements
- [List areas that could be improved but aren't blocking]

### 5. Generate Recommendations

Based on the maturity score and gaps identified, provide specific, actionable recommendations:

#### 5.1 Immediate Actions (Next 1-2 weeks)
1. [Specific action item with clear outcome]
2. [Specific action item with clear outcome]
3. [...]

#### 5.2 Short-Term Actions (Next 1-3 months)
1. [Specific action item with clear outcome]
2. [Specific action item with clear outcome]
3. [...]

#### 5.3 Ongoing Practices
1. [Habits or practices to maintain/improve Experience DNA]
2. [Quality monitoring and improvement processes]
3. [...]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# Experience DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### Quality Thresholds Definition: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Performance Standards: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Usability Standards: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Accessibility Standards: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Design System Maturity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### MQB Gates Implementation: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Quality Culture and Enforcement: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Alignment Check
[How well do Experience standards align with User DNA needs and constraints?]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- **CRITICAL WARNING**: If score is below 3.0, emphasize risk of quality debt accumulation and user frustration
- Offer to:
  1. Create Experience DNA documentation if none exists
  2. Define MQB gates if not defined
  3. Establish quality thresholds
  4. Run specific tasks to address critical gaps
  5. Transform to Experience Guardian agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/experience-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
