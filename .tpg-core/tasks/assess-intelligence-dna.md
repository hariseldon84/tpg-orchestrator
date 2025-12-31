<!-- Powered by Product Genome™ Framework -->

# Assess Intelligence DNA Task

## Purpose

To conduct a comprehensive assessment of a product's Intelligence DNA maturity and evidence-based decision-making capability. This task evaluates how well the product measures, learns, and makes data-driven decisions through instrumentation, experimentation, and analytics infrastructure.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Intelligence DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `intelligenceDNA.*`, `genomeDNA.*`

### 1. Gather Existing Intelligence DNA Documentation

#### 1.1 Check for Existing Intelligence DNA Documents

Based on config, check if these documents exist:
- Main Intelligence DNA document (`intelligenceDNA.intelligenceFile`)
- Metrics definition document (`intelligenceDNA.metricsFile`)
- Experimentation framework document (`intelligenceDNA.experimentationFile`)
- Analytics dashboards and reporting

For each existing document:
- Load and review thoroughly
- Note what sections are present and complete
- Identify gaps or incomplete sections

If none exist:
- Note that Intelligence DNA needs to be created from scratch
- Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- Analytics platform configurations (Google Analytics, Mixpanel, Amplitude, etc.)
- Metrics dashboards
- A/B testing frameworks and past experiments
- Data warehouse or analytics database
- Instrumentation documentation
- Metric definitions and glossaries
- Experiment result reports
- Learning logs or retrospectives

### 2. Intelligence DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / Flying blind, no measurement
- 2 = Minimal / Basic analytics, no systematic learning
- 3 = Moderate / Some measurement, inconsistent experimentation
- 4 = Strong / Robust measurement, hypothesis-driven culture
- 5 = Exceptional / Evidence-based excellence, continuous learning

#### 2.1 Instrumentation and Data Collection

**Assessment Questions:**
- Is the product instrumented to collect meaningful data?
- Are key user journeys tracked?
- Is event tracking comprehensive and well-organized?
- Is data collection privacy-compliant (GDPR, etc.)?
- Is instrumentation maintained as product evolves?

**Score: [1-5]**

**Evidence Found:**
- [List analytics tools and instrumentation]
- [Note what is/isn't tracked]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 North Star and Key Metrics Definition

**Assessment Questions:**
- Is the north star metric (from Purpose DNA) actively tracked?
- Are supporting metrics clearly defined and measured?
- Are metrics meaningful (not vanity metrics)?
- Is there a metrics hierarchy (north star → supporting → diagnostic)?
- Do metrics connect to business outcomes?

**Score: [1-5]**

**Evidence Found:**
- [List metrics tracked or lack thereof]
- [Note if north star is tracked]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 Dashboards and Visibility

**Assessment Questions:**
- Are dashboards available showing key metrics?
- Is data accessible to the team (not locked in data team)?
- Are dashboards updated in near-real-time?
- Do dashboards show trends over time?
- Can team members self-serve analytics queries?

**Score: [1-5]**

**Evidence Found:**
- [List dashboards and accessibility]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 Experimentation Framework

**Assessment Questions:**
- Is there an A/B testing or experimentation framework?
- Are experiments run systematically (not ad-hoc)?
- Do experiments follow hypothesis-test-learn cycle?
- Are experiment results documented and shared?
- Is there evidence of killing features based on experiment results?

**Score: [1-5]**

**Evidence Found:**
- [List experimentation tools and practices]
- [Note recent experiments]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 Hypothesis-Driven Development

**Assessment Questions:**
- Are features built based on hypotheses (not assumptions)?
- Is hypothesis format used ("If [change], then [metric] because [reason]")?
- Are hypotheses validated before full build?
- Is there a culture of testing assumptions?
- Are failed experiments celebrated as learning?

**Score: [1-5]**

**Evidence Found:**
- [List hypothesis documentation or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 Learning Culture and Knowledge Management

**Assessment Questions:**
- Are learnings from experiments documented?
- Is there a knowledge base of what works/doesn't work?
- Are insights shared across the team?
- Do retrospectives lead to actionable improvements?
- Is continuous learning valued and practiced?

**Score: [1-5]**

**Evidence Found:**
- [List learning documentation or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.7 Data Quality and Trust

**Assessment Questions:**
- Is data quality high (accurate, complete, timely)?
- Does the team trust the data?
- Are there data validation processes?
- Are metric definitions clear and consistent?
- Is there a single source of truth for metrics?

**Score: [1-5]**

**Evidence Found:**
- [List data quality practices]

**Gaps Identified:**
- [List specific gaps]

#### 2.8 Evidence-Based Decision Making

**Assessment Questions:**
- Are decisions grounded in data (not HiPPO)?
- Is "show me the data" a normal request?
- Are opinions challenged with evidence?
- Do stakeholders reference data in discussions?
- Is there resistance to building without validation?

**Score: [1-5]**

**Evidence Found:**
- [List cultural evidence of data-driven decisions]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall Intelligence DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - Flying blind, building on assumptions
- 2.0-2.9 = Weak - Basic tracking, no systematic learning
- 3.0-3.9 = Moderate - Some evidence-based practices, needs consistency
- 4.0-4.5 = Strong - Robust measurement, hypothesis-driven culture
- 4.6-5.0 = Exceptional - Evidence-based excellence, continuous learning

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps causing blind spots or preventing learning]

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
1. [Habits or practices to maintain/improve Intelligence DNA]
2. [Experimentation cadence and learning rituals]
3. [...]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# Intelligence DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### Instrumentation and Data Collection: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### North Star and Key Metrics Definition: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Dashboards and Visibility: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Experimentation Framework: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Hypothesis-Driven Development: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Learning Culture and Knowledge Management: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Data Quality and Trust: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Evidence-Based Decision Making: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Alignment Checks
[Does Intelligence DNA enable tracking of Purpose DNA north star? Does it provide insights into User DNA understanding?]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- **CRITICAL WARNING**: If score is below 3.0, emphasize risk of building on assumptions and inability to learn what works
- Offer to:
  1. Create Intelligence DNA documentation if none exists
  2. Set up basic instrumentation for key metrics
  3. Define north star metric tracking
  4. Establish experimentation framework
  5. Transform to Intelligence Analyst agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/intelligence-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
