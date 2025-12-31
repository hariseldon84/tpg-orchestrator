<!-- Powered by Product Genome™ Framework -->

# Assess Cultural DNA Task

## Purpose

To conduct a comprehensive assessment of a product's Cultural DNA maturity - the values, decision-making frameworks, team culture, and sustainable growth strategies that shape how the product evolves and succeeds over time.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Cultural DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `culturalDNA.*`, `genomeDNA.*`

### 1. Gather Existing Cultural DNA Documentation

#### 1.1 Check for Existing Cultural DNA Documents

Based on config, check if these documents exist:
- Main Cultural DNA document (`culturalDNA.culturalFile`)
- Product values document (`culturalDNA.productValuesFile`)
- Decision framework document (`culturalDNA.decisionFrameworkFile`)
- Growth strategy document (`culturalDNA.growthStrategyFile`)

For each existing document:
- Load and review thoroughly
- Note what sections are present and complete
- Identify gaps or incomplete sections

If none exist:
- Note that Cultural DNA needs to be created from scratch
- Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- Team values or principles
- Decision-making processes
- Growth and scaling strategies
- Retrospective notes or learning logs
- Team culture artifacts
- Onboarding materials (reflect culture)
- Celebration and recognition patterns

### 2. Cultural DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / No defined culture, ad-hoc behaviors
- 2 = Minimal / Stated values exist but not practiced
- 3 = Moderate / Some cultural consistency, needs reinforcement
- 4 = Strong / Values embedded, culture guides decisions
- 5 = Exceptional / Cultural excellence, values-driven evolution

#### 2.1 Product Values Definition and Clarity

**Assessment Questions:**
- Are product values clearly defined and documented?
- Are values specific and actionable (not generic like "excellence")?
- Do values connect to Purpose DNA and user focus?
- Can team members articulate the values?
- Are values used in actual decision-making?

**Score: [1-5]**

**Evidence Found:**
- [List stated values or lack thereof]
- [Note specificity and clarity]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 Values Enforcement and Lived Culture

**Assessment Questions:**
- Are values actually practiced (not just posters on walls)?
- Are there examples of values guiding difficult decisions?
- Are values violations addressed?
- Do team members feel accountable to values?
- Is leadership modeling values?

**Score: [1-5]**

**Evidence Found:**
- [List examples of values in action or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 Decision-Making Framework

**Assessment Questions:**
- Is there a clear framework for making product decisions?
- Do team members understand how decisions are made?
- Is decision-making authority clear (who decides what)?
- Are decisions made based on evidence (not politics)?
- Is there psychological safety to challenge decisions?

**Score: [1-5]**

**Evidence Found:**
- [List decision framework or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 Learning Culture and Retrospectives

**Assessment Questions:**
- Is learning from failures celebrated (not punished)?
- Are retrospectives conducted regularly?
- Do retrospectives lead to actionable improvements?
- Are learnings documented and shared?
- Is there a blameless culture (vs. blame culture)?

**Score: [1-5]**

**Evidence Found:**
- [List learning practices or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 Quality Culture and Standards

**Assessment Questions:**
- Is quality valued and protected?
- Are there examples of saying "no" to protect quality?
- Is quality everyone's responsibility (not just QA)?
- Are MQB gates respected under pressure?
- Is there pride in craft and excellence?

**Score: [1-5]**

**Evidence Found:**
- [List quality culture evidence]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 Sustainable Growth Strategies

**Assessment Questions:**
- Are growth strategies sustainable (not just hacks)?
- Is growth aligned with user value delivery?
- Are acquisition, activation, retention all considered?
- Is burnout prevented (sustainable pace)?
- Is growth strategy documented and intentional?

**Score: [1-5]**

**Evidence Found:**
- [List growth strategy or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.7 Collaboration and Psychological Safety

**Assessment Questions:**
- Do team members feel safe to speak up?
- Is disagreement handled constructively?
- Are diverse perspectives valued?
- Is collaboration effective across roles?
- Is there trust among team members?

**Score: [1-5]**

**Evidence Found:**
- [List collaboration patterns]

**Gaps Identified:**
- [List specific gaps]

#### 2.8 User-Centricity in Culture

**Assessment Questions:**
- Is user focus embedded in team culture?
- Are user stories shared regularly?
- Do team members have user empathy?
- Are product decisions user-driven (not feature-driven)?
- Is there regular user contact?

**Score: [1-5]**

**Evidence Found:**
- [List user-centric cultural practices]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall Cultural DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - No defined culture, values not guiding decisions
- 2.0-2.9 = Weak - Values stated but not practiced consistently
- 3.0-3.9 = Moderate - Some cultural consistency, needs strengthening
- 4.0-4.5 = Strong - Values embedded, culture guides decisions
- 4.6-5.0 = Exceptional - Cultural excellence, values-driven evolution

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps causing cultural dysfunction or value misalignment]

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
1. [Habits or practices to maintain/improve Cultural DNA]
2. [Cultural rituals and reinforcement mechanisms]
3. [...]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# Cultural DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### Product Values Definition and Clarity: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Values Enforcement and Lived Culture: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Decision-Making Framework: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Learning Culture and Retrospectives: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Quality Culture and Standards: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Sustainable Growth Strategies: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Collaboration and Psychological Safety: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### User-Centricity in Culture: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Alignment Checks
[Do cultural values support Purpose DNA? Does culture enable effective execution of other DNAs?]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- **CRITICAL WARNING**: If score is below 3.0, emphasize risk of cultural dysfunction and unsustainable practices
- Offer to:
  1. Create Cultural DNA documentation if none exists
  2. Define product values and decision framework
  3. Establish growth strategy aligned with values
  4. Create cultural practices and rituals
  5. Transform to Culture Coach agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/cultural-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
