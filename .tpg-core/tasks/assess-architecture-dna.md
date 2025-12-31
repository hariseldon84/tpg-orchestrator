<!-- Powered by Product Genome™ Framework -->

# Assess Architecture DNA Task

## Purpose

To conduct a comprehensive assessment of a product's Architecture DNA maturity and intentionality. This task evaluates how well the product's technical architecture is designed for evolution, whether decisions are documented, and if architecture serves user needs and business objectives.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Architecture DNA assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `architectureDNA.*`, `genomeDNA.*`

### 1. Gather Existing Architecture DNA Documentation

#### 1.1 Check for Existing Architecture DNA Documents

Based on config, check if these documents exist:
- Main Architecture DNA document (`architectureDNA.architectureFile`)
- Architecture Decision Records (ADRs) directory (`architectureDNA.adrDirectory`)
- Technical constraints document (`architectureDNA.technicalConstraintsFile`)
- System architecture diagrams
- API documentation

For each existing document:
- Load and review thoroughly
- Note what sections are present and complete
- Identify gaps or incomplete sections

If none exist:
- Note that Architecture DNA needs to be created from scratch
- Skip to Assessment Framework (Step 2)

#### 1.2 Review Related Documentation

Check for and review (if they exist):
- System architecture diagrams (C4, component, deployment)
- ADR collection (how many, how recent, quality)
- Technical documentation
- API specifications
- Database schemas
- Infrastructure as Code (IaC) configurations
- Dependency management
- Scalability and performance documentation

### 2. Architecture DNA Assessment Framework

Run through the following assessment dimensions. For each dimension, assign a maturity score (1-5):

**Maturity Scale:**
- 1 = Non-existent / Architecture by accident
- 2 = Minimal / Ad-hoc decisions, no documentation
- 3 = Moderate / Some intentional design, inconsistent documentation
- 4 = Strong / Well-designed, documented, evolvable
- 5 = Exceptional / Architecture excellence, continuous evolution

#### 2.1 Intentional Design vs. Accidental Architecture

**Assessment Questions:**
- Is there evidence of intentional architecture design?
- Or did architecture emerge organically without planning?
- Are there documented architecture principles?
- Do architecture decisions connect to user/business needs?
- Is there a clear system structure (layers, modules, boundaries)?

**Score: [1-5]**

**Evidence Found:**
- [List architecture documentation or lack thereof]
- [Note if design is intentional or accidental]

**Gaps Identified:**
- [List specific gaps]

#### 2.2 Architecture Decision Records (ADRs)

**Assessment Questions:**
- Do ADRs exist for significant architecture decisions?
- Are ADRs stored in version control (accessible and versioned)?
- Do ADRs follow a consistent format (Context, Decision, Rationale, Consequences)?
- Are ADRs referenced when making new decisions?
- Are there recent ADRs (architecture still evolving)?

**Score: [1-5]**

**Evidence Found:**
- [Count of ADRs, dates, quality]
- [Note format consistency]

**Gaps Identified:**
- [List specific gaps]

#### 2.3 Modularity and Maintainability

**Assessment Questions:**
- Is the system modular (clear component boundaries)?
- Are modules loosely coupled (changes don't ripple everywhere)?
- Are responsibilities clearly defined (high cohesion)?
- Is the code testable (can components be tested in isolation)?
- Is there evidence of intentional dependency management?

**Score: [1-5]**

**Evidence Found:**
- [Describe system modularity or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.4 Scalability and Performance Design

**Assessment Questions:**
- Is scalability intentionally designed (not just hoped for)?
- Are there documented scalability strategies?
- Do performance characteristics align with Experience DNA thresholds?
- Is there capacity planning?
- Can the system handle expected growth?

**Score: [1-5]**

**Evidence Found:**
- [List scalability documentation or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.5 Technical Debt Management

**Assessment Questions:**
- Is technical debt tracked and managed?
- Is there a strategy for paying down debt?
- Are architecture decisions made to prevent debt (not just create it)?
- Is refactoring prioritized appropriately?
- Is there evidence of proactive improvement (not just reactive firefighting)?

**Score: [1-5]**

**Evidence Found:**
- [List debt tracking systems or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.6 Observability and Instrumentation

**Assessment Questions:**
- Is the system instrumented for observability (logging, metrics, tracing)?
- Can you debug production issues effectively?
- Are monitoring dashboards available?
- Is alerting configured for critical issues?
- Does instrumentation support Intelligence DNA needs?

**Score: [1-5]**

**Evidence Found:**
- [List observability tools and practices]

**Gaps Identified:**
- [List specific gaps]

#### 2.7 User-Architecture Alignment

**Assessment Questions:**
- Do technical decisions serve user needs (from User DNA)?
- Does architecture respect user constraints (offline, mobile, low-bandwidth)?
- Are technical choices justified by user value?
- Is there evidence of user needs driving architecture decisions?

**Score: [1-5]**

**Evidence Found:**
- [List examples of user-driven architecture or lack thereof]

**Gaps Identified:**
- [List specific gaps]

#### 2.8 Evolution Capability

**Assessment Questions:**
- Is architecture designed to evolve (not just for current needs)?
- Can new features be added without major rewrites?
- Is there evidence of successful evolution over time?
- Are there extension points and flexibility?
- Can you make changes safely (with confidence)?

**Score: [1-5]**

**Evidence Found:**
- [List evolution evidence or lack thereof]

**Gaps Identified:**
- [List specific gaps]

### 3. Calculate Overall Architecture DNA Maturity Score

**Calculation:**
- Average all dimension scores
- Round to one decimal place

**Overall Maturity Score: [X.X / 5.0]**

**Maturity Level:**
- 1.0-1.9 = Critical - Architecture by accident, high technical debt risk
- 2.0-2.9 = Weak - Minimal intentional design, difficult to evolve
- 3.0-3.9 = Moderate - Some good practices, needs more discipline
- 4.0-4.5 = Strong - Well-architected, documented, evolvable
- 4.6-5.0 = Exceptional - Architecture excellence, continuous improvement

### 4. Identify Critical Gaps and Priorities

Based on the assessment, identify:

#### 4.1 Critical Gaps (Must Address Immediately)
- [List gaps creating immediate risk or blocking evolution]

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
1. [Habits or practices to maintain/improve Architecture DNA]
2. [ADR creation and review processes]
3. [Technical debt management practices]

### 6. Assessment Report Generation

Generate a comprehensive assessment report with the following structure:

```markdown
# Architecture DNA Assessment Report
Generated: [Date]

## Executive Summary
[2-3 paragraph summary of current state, maturity level, and top recommendations]

## Overall Maturity Score: [X.X / 5.0] - [Maturity Level]

## Detailed Assessment Results

### Intentional Design vs. Accidental Architecture: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Architecture Decision Records (ADRs): [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Modularity and Maintainability: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Scalability and Performance Design: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Technical Debt Management: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Observability and Instrumentation: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### User-Architecture Alignment: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

### Evolution Capability: [Score]
- Evidence: [Summary]
- Gaps: [Summary]

## Critical Gaps
[List with details]

## Recommendations
[Organized by timeframe]

## Alignment Checks
[How well does Architecture DNA support Experience DNA standards and User DNA constraints?]

## Next Steps
1. [Immediate next action]
2. [What to do with this report]
3. [Who should review this]
```

### 7. Present Results to User

- Present the assessment report
- Highlight the overall maturity score and what it means
- Emphasize critical gaps that need immediate attention
- **CRITICAL WARNING**: If score is below 3.0, emphasize risk of technical debt explosion and inability to evolve
- Offer to:
  1. Create Architecture DNA documentation if none exists
  2. Start ADR practice for future decisions
  3. Document existing architecture decisions
  4. Create architecture improvement roadmap
  5. Transform to Architecture Expert agent for deeper work

### 8. Save Assessment Report

- Save report to: `{genomeDNA.genomeAssessmentLocation}/architecture-dna-assessment.md`
- Confirm save location with user
- Log assessment in Product Genome evolution tracking

---

## Assessment Completion

- Status: [Draft / Complete]
- Next Recommended Action: [Specific command or task]
- Agent Recommendation: [Which agent to work with next, if applicable]
