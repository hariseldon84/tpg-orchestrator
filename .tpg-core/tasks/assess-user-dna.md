<!-- Powered by Product Genome™ Framework -->

# Assess User DNA Task

## Purpose

To conduct a comprehensive assessment of a product's User DNA maturity and clarity. This task evaluates how well the product team understands their users through segmentation, Jobs-to-be-Done (JTBD) analysis, personas, context understanding, and constraints identification.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for User DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `userDNA.*`, `genomeDNA.*`

### 1. Gather Existing User DNA Documentation

#### 1.1 Check for Existing User DNA Documents

Based on config, check if these documents exist:
- Main User DNA document (`userDNA.userFile`)
- User Segments document (`userDNA.userSegmentsFile`)
- JTBD Analysis document (`userDNA.jtbdFile`)

For each existing document:
- Load and review thoroughly
- Note what sections are present and complete
- Identify gaps or incomplete sections

If none exist:
- Note that User DNA needs to be created from scratch
- Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- User personas
- User research reports
- Customer interviews or surveys
- Analytics reports showing user behavior
- User journey maps
- Support tickets or user feedback
- Market research on target users

### 2. User DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / No clarity
- 2 = Minimal / Vague assumptions exist
- 3 = Moderate / Some evidence-based understanding
- 4 = Strong / Clear, evidence-based, actionable
- 5 = Exceptional / Deep understanding, continuously validated

#### 2.1 User Segmentation Clarity

**Assessment Questions:**
- Are user segments clearly defined?
- Are they based on evidence (not assumptions)?
- Are segments specific enough to guide decisions?
- Does the team agree on who the primary segment is?
- Are segments based on meaningful differences (behavior, needs, context)?

**Score: [1-5]**

**Evidence Found:**
- [List specific segments or lack thereof]
- [Note if based on research or assumptions]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 Jobs-to-be-Done (JTBD) Understanding

**Assessment Questions:**
- Are the jobs users are "hiring" the product for clearly defined?
- Are jobs based on actual user research (interviews, observation)?
- Are functional, emotional, and social jobs all considered?
- Are jobs specific enough to drive product decisions?
- Is there evidence of jobs being used to prioritize features?

**Score: [1-5]**

**Evidence Found:**
- [List specific jobs or lack thereof]
- [Note research methods used]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 Persona Quality and Usage

**Assessment Questions:**
- Do evidence-based personas exist (not invented in conference room)?
- Do personas include goals, context, constraints, behaviors?
- Are personas actively used in decision-making?
- Do personas represent real user segments?
- Are they updated based on ongoing research?

**Score: [1-5]**

**Evidence Found:**
- [List personas or lack thereof]
- [Note evidence sources]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 User Context Understanding

**Assessment Questions:**
- Is user context (when, where, how they use product) well understood?
- Are different usage contexts documented?
- Does context inform product decisions?
- Is there evidence from field research or contextual inquiry?

**Score: [1-5]**

**Evidence Found:**
- [List context documentation or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 User Constraints Identification

**Assessment Questions:**
- Are user constraints clearly documented (time, money, skills, tools, environment)?
- Do constraints inform feature design and prioritization?
- Are constraints validated through research?
- Does the team design within realistic constraints?

**Score: [1-5]**

**Evidence Found:**
- [List constraints documented or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 Evidence-Based Understanding

**Assessment Questions:**
- Is user understanding based on research, not assumptions?
- Is there ongoing user research?
- Are user insights updated based on new evidence?
- Is there a system for continuous user discovery?
- Does analytics data inform user understanding?

**Score: [1-5]**

**Evidence Found:**
- [List research methods used or lack thereof]
- [Note frequency of research]

**Gaps Identified:**
- [List specific gaps]

#### 2.7 User-Feature Alignment

**Assessment Questions:**
- Do features map back to specific user needs or jobs?
- Are features validated with users before building?
- Is there evidence of features being rejected because they don't serve user needs?
- Does the roadmap reflect user priorities (not just internal ideas)?

**Score: [1-5]**

**Evidence Found:**
- [List examples or lack thereof]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall User DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - Building for "everyone" or imaginary users, high risk of failure
- 2.0-2.9 = Weak - User understanding is mostly assumptions, needs research
- 3.0-3.9 = Moderate - Some user understanding exists but needs more depth and evidence
- 4.0-4.5 = Strong - User DNA is evidence-based and actively guides decisions
- 4.6-5.0 = Exceptional - Deep user understanding, continuous discovery, user-obsessed culture

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps that are causing team to build wrong things or for wrong people]

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
1. [Habits or practices to maintain/improve User DNA]
2. [Continuous discovery methods to implement]
3. [...]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# User DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### User Segmentation Clarity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Jobs-to-be-Done Understanding: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Persona Quality and Usage: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### User Context Understanding: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### User Constraints Identification: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Evidence-Based Understanding: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### User-Feature Alignment: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Suggested User Research Methods
[Based on gaps, suggest specific research methods: interviews, surveys, contextual inquiry, analytics analysis, etc.]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- **CRITICAL WARNING**: If score is below 3.0, emphasize high risk of building wrong product
- Offer to:
  1. Create User DNA documentation if none exists
  2. Refine existing User DNA based on gaps
  3. Run specific tasks to address critical gaps (define-segments, jtbd-analysis, create-personas, etc.)
  4. Create user research plan
  5. Transform to User Analyst agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/user-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
