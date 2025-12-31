<!-- Powered by Product Genome™ Framework -->

# Assess Purpose DNA Task

## Purpose

To conduct a comprehensive assessment of a product's Purpose DNA maturity and clarity. This task identifies gaps, strengths, and areas for improvement in how the product defines and communicates its core purpose, vision, problem-solution fit, and north star metrics.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Purpose DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `purposeDNA.*`, `genomeDNA.*`

### 1. Gather Existing Purpose DNA Documentation

#### 1.1 Check for Existing Purpose DNA Document

- Based on `purposeDNA.purposeFile` from config, check if Purpose DNA document exists
- If it exists:
  - Load and review the document thoroughly
  - Note what sections are present and complete
  - Identify gaps or incomplete sections
- If it doesn't exist:
  - Note that Purpose DNA needs to be created from scratch
  - Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- Product vision documents
- Business case or pitch decks
- Problem statements
- Value propositions
- Mission/vision statements
- North star metric definitions
- Success criteria documents

### 2. Purpose DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / No clarity
- 2 = Minimal / Vague statements exist
- 3 = Moderate / Some clarity, needs refinement
- 4 = Strong / Clear and actionable
- 5 = Exceptional / Crystal clear, measurable, aligned

#### 2.1 Problem Definition Clarity

**Assessment Questions:**
- Is the core problem clearly stated?
- Is it a real problem validated by user research?
- Is the problem specific enough to guide decisions?
- Does everyone on the team understand the problem the same way?

**Score: [1-5]**

**Evidence Found:**
- [List specific statements or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 Solution Vision Clarity

**Assessment Questions:**
- Is there a clear vision for how the product solves the problem?
- Does the vision differentiate from alternatives?
- Is the vision inspiring yet achievable?
- Can the vision be explained in one clear sentence?

**Score: [1-5]**

**Evidence Found:**
- [List specific statements or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 North Star Metric Definition

**Assessment Questions:**
- Is there a defined north star metric?
- Is it measurable and trackable?
- Does it capture real value delivery (not vanity metrics)?
- Is it understood and used for decision-making?

**Score: [1-5]**

**Evidence Found:**
- [List specific metrics or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 Success Criteria Specificity

**Assessment Questions:**
- Are success criteria clearly defined?
- Are they measurable (not subjective)?
- Are they time-bound?
- Do they connect to business outcomes?

**Score: [1-5]**

**Evidence Found:**
- [List specific criteria or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 Non-Negotiables Clarity

**Assessment Questions:**
- Are there clearly stated non-negotiables (what the product will NEVER compromise)?
- Are they actually enforced in decision-making?
- Do they serve as filters for feature requests?

**Score: [1-5]**

**Evidence Found:**
- [List specific non-negotiables or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 Purpose-Decision Alignment

**Assessment Questions:**
- Do product decisions connect back to purpose?
- Is there evidence of purpose being used as a filter?
- Have features been rejected because they didn't align with purpose?
- Does the roadmap reflect the stated purpose?

**Score: [1-5]**

**Evidence Found:**
- [List examples or lack thereof]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall Purpose DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - Purpose DNA is severely lacking, product has no clear direction
- 2.0-2.9 = Weak - Purpose exists but is vague, team likely building without clear filter
- 3.0-3.9 = Moderate - Purpose is defined but needs refinement and enforcement
- 4.0-4.5 = Strong - Purpose DNA is well-defined and actively guides decisions
- 4.6-5.0 = Exceptional - Purpose DNA is crystal clear, measurable, and embedded in culture

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps that are blocking product clarity or causing team misalignment]

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
1. [Habits or practices to maintain/improve Purpose DNA]
2. [...]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# Purpose DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### Problem Definition Clarity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Solution Vision Clarity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### North Star Metric Definition: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Success Criteria Specificity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Non-Negotiables Clarity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Purpose-Decision Alignment: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- Offer to:
  1. Create a Purpose DNA document if none exists
  2. Refine existing Purpose DNA based on gaps
  3. Run specific tasks to address critical gaps (define-north-star, problem-solution-fit, etc.)
  4. Transform to Purpose Architect agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/purpose-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
