<!-- Powered by Product Genome™ Framework -->

# Assess Product Genome Task

## Purpose

To conduct a comprehensive assessment of a product's complete Product Genome across all 6 DNAs, identify maturity levels, critical gaps, and provide prioritized recommendations for achieving genome coherence and product excellence.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for Product Genome assessment. Please ensure TPG Orchestrator is properly installed in your project."
- Extract all DNA configurations

### 1. Introduction and Scope Agreement

Present to user:

```
=== Product Genome Assessment ===

This comprehensive assessment will evaluate your product across all 6 DNAs:
1. Purpose DNA - Why the product exists, vision, north star
2. User DNA - Who you're building for, JTBD, segments, context
3. Experience DNA - Quality thresholds, UX standards, MQB gates
4. Architecture DNA - System structure, ADRs, technical decisions
5. Intelligence DNA - Metrics, experimentation, evidence systems
6. Cultural DNA - Product values, team culture, growth strategies

Assessment Duration: 30-45 minutes
Output: Comprehensive genome maturity report with prioritized action plan

Would you like to:
1. Run full assessment (all 6 DNAs)
2. Run targeted assessment (select specific DNAs)
3. Quick assessment (abbreviated version, 15 minutes)
```

- Wait for user choice
- Proceed based on selection

### 2. Run Individual DNA Assessments

For each DNA in scope, execute the corresponding assessment task:

#### 2.1 Purpose DNA Assessment
- Execute: `.tpg-core/tasks/assess-purpose-dna.md`
- Capture: Maturity score, critical gaps, key findings

#### 2.2 User DNA Assessment
- Execute: `.tpg-core/tasks/assess-user-dna.md`
- Capture: Maturity score, critical gaps, key findings

#### 2.3 Experience DNA Assessment
- Execute: `.tpg-core/tasks/assess-experience-dna.md`
- Capture: Maturity score, critical gaps, key findings

#### 2.4 Architecture DNA Assessment
- Execute: `.tpg-core/tasks/assess-architecture-dna.md`
- Capture: Maturity score, critical gaps, key findings

#### 2.5 Intelligence DNA Assessment
- Execute: `.tpg-core/tasks/assess-intelligence-dna.md`
- Capture: Maturity score, critical gaps, key findings

#### 2.6 Cultural DNA Assessment
- Execute: `.tpg-core/tasks/assess-cultural-dna.md`
- Capture: Maturity score, critical gaps, key findings

### 3. Calculate Overall Genome Health Score

#### 3.1 DNA Maturity Scores Summary

| DNA | Score | Maturity Level | Status |
|-----|-------|----------------|--------|
| Purpose DNA | [X.X] | [Level] | [🔴/🟡/🟢] |
| User DNA | [X.X] | [Level] | [🔴/🟡/🟢] |
| Experience DNA | [X.X] | [Level] | [🔴/🟡/🟢] |
| Architecture DNA | [X.X] | [Level] | [🔴/🟡/🟢] |
| Intelligence DNA | [X.X] | [Level] | [🔴/🟡/🟢] |
| Cultural DNA | [X.X] | [Level] | [🔴/🟡/🟢] |

**Status Indicators:**
- 🔴 Red (1.0-2.9): Critical - Immediate attention required
- 🟡 Yellow (3.0-3.9): Needs improvement
- 🟢 Green (4.0-5.0): Healthy

#### 3.2 Overall Genome Health Score

**Calculation Method:**
- Weighted average of all DNA scores
- Weights based on Product Genome framework:
  - Purpose DNA: 20% (foundation for all others)
  - User DNA: 20% (reality anchor)
  - Experience DNA: 15%
  - Architecture DNA: 15%
  - Intelligence DNA: 15%
  - Cultural DNA: 15%

**Overall Genome Health: [X.X / 5.0]**

#### 3.3 Genome Coherence Analysis

Assess how well the DNAs work together:

**Coherence Factors:**
1. **Purpose-User Alignment**: Does user understanding serve the purpose?
2. **User-Experience Alignment**: Do quality thresholds match user needs?
3. **Experience-Architecture Alignment**: Does architecture support desired experience?
4. **Architecture-Intelligence Alignment**: Is system instrumented for learning?
5. **Cultural-All Alignment**: Do values support all DNA execution?

**Coherence Score: [1-5]**
- 1 = DNAs conflict or work in silos
- 3 = Some alignment, needs work
- 5 = All DNAs reinforce each other

### 4. Identify Cross-DNA Patterns and Insights

#### 4.1 Common Themes
- [Patterns that appear across multiple DNAs]

#### 4.2 Cascade Effects
- [How weakness in one DNA impacts others]
- Example: "Weak Purpose DNA (2.1) causes User DNA confusion (which segments to prioritize?) and dilutes Experience DNA standards"

#### 4.3 Strengths to Leverage
- [Strong DNAs that can help improve weak ones]

### 5. Prioritization Framework

Use this framework to prioritize recommendations:

#### 5.1 Priority Level 1: Foundation DNAs Below 3.0
**If Purpose DNA or User DNA < 3.0, these MUST be addressed first**
- Rationale: Without clear purpose and user understanding, all other work is guesswork
- Impact: Critical - blocks all downstream decisions

#### 5.2 Priority Level 2: Structural DNAs Below 3.0
**Architecture DNA and Experience DNA**
- Rationale: These define how you build and what quality means
- Impact: High - causes technical debt and quality issues

#### 5.3 Priority Level 3: Learning & Culture DNAs
**Intelligence DNA and Cultural DNA**
- Rationale: Enable evolution and growth
- Impact: Medium-High - limits ability to improve and scale

### 6. Generate Comprehensive Genome Assessment Report

Create master report with this structure:

```markdown
# Product Genome Assessment Report
Generated: [Date]
Product: [Product Name]
Assessed By: [TPG Orchestrator]

## Executive Summary

[3-5 paragraph summary covering:
- Current overall genome health
- Top 3 strengths
- Top 3 critical gaps
- Primary recommendation
- Expected impact of addressing gaps]

## Overall Genome Health: [X.X / 5.0]

### Genome Health Interpretation
[What this score means for the product]

### Coherence Score: [X.X / 5.0]
[How well DNAs work together]

## DNA Maturity Summary

[Table from section 3.1]

## Detailed DNA Assessments

### Purpose DNA: [Score] - [Status]
**Key Findings:**
- [Summary of findings]

**Critical Gaps:**
- [Top gaps]

**Strengths:**
- [What's working well]

### User DNA: [Score] - [Status]
[Same structure as Purpose DNA]

### Experience DNA: [Score] - [Status]
[Same structure]

### Architecture DNA: [Score] - [Status]
[Same structure]

### Intelligence DNA: [Score] - [Status]
[Same structure]

### Cultural DNA: [Score] - [Status]
[Same structure]

## Cross-DNA Analysis

### Coherence Assessment
[How DNAs interact and support each other]

### Cascade Effects
[How gaps in one DNA impact others]

### Leverage Points
[Strengths that can help improve weaknesses]

## Critical Gaps Requiring Immediate Attention

1. [Gap with highest priority]
   - Impact: [How it affects product]
   - Recommended Action: [Specific next step]
   - Timeline: [Suggested timeframe]

2. [Second priority gap]
   [Same structure]

[Continue for all critical gaps]

## Prioritized Action Plan

### Phase 1: Foundation (Weeks 1-4)
**Objective:** Establish foundational DNAs

**Actions:**
1. [Specific action with DNA, task, and outcome]
2. [...]

**Success Criteria:**
- [How you'll know Phase 1 is complete]

### Phase 2: Structure (Weeks 5-8)
**Objective:** Build structural DNAs

**Actions:**
1. [Specific action with DNA, task, and outcome]
2. [...]

**Success Criteria:**
- [How you'll know Phase 2 is complete]

### Phase 3: Evolution (Weeks 9-12)
**Objective:** Enable learning and growth DNAs

**Actions:**
1. [Specific action with DNA, task, and outcome]
2. [...]

**Success Criteria:**
- [How you'll know Phase 3 is complete]

### Ongoing Practices
[Habits to maintain genome health]

## Recommended Next Steps

### Immediate (This Week)
1. [Most urgent action]
2. [Second most urgent]

### This Month
1. [Important follow-ups]
2. [...]

### This Quarter
1. [Strategic improvements]
2. [...]

## Specialist Agent Recommendations

Based on critical gaps, we recommend engaging these specialist agents:

1. **[Agent Name]** for [DNA/Task]
   - Command: `*agent [agent-id]`
   - Focus: [What to work on]

2. [Additional agents as needed]

## Appendices

### A. Individual DNA Assessment Reports
- [Links to detailed reports]

### B. Assessment Methodology
- [How assessment was conducted]

### C. Product Genome Framework Reference
- [Brief overview of framework]
```

### 7. Present Results to User

- Present executive summary first
- Show overall genome health score with interpretation
- Highlight DNA maturity table visually
- Emphasize top 3 critical gaps
- Walk through prioritized action plan
- Offer specific next steps

**Key Message Based on Score:**
- **< 2.5**: "CRITICAL - Your product genome has significant gaps that put product success at risk. Immediate action required on foundational DNAs."
- **2.5-3.5**: "NEEDS WORK - Your product has basic structure but lacks maturity. Focused effort on key gaps will significantly improve outcomes."
- **3.5-4.2**: "SOLID - Your product genome is healthy with room for improvement. Targeted enhancements will elevate product excellence."
- **4.2+**: "EXCELLENT - Your product genome is strong. Focus on maintaining coherence and continuous evolution."

### 8. Offer Next Actions

Present numbered options:

```
Based on your assessment results, I recommend:

1. Start with [Highest Priority DNA] - Run *agent [agent-name] to address [specific gap]
2. Create detailed improvement roadmap - I can help you break down the action plan into sprints
3. Focus on quick wins first - Address [specific gap] that can be resolved quickly
4. Schedule follow-up assessment - Plan reassessment in [timeframe] to track progress
5. Export full report - Save complete assessment for stakeholder review

What would you like to do next?
```

### 9. Save Assessment Report and Track Progress

- Save report to: `{genomeDNA.genomeAssessmentLocation}/genome-assessment-[date].md`
- Create or update genome evolution tracking log
- Record baseline scores for future comparison
- Set up recommended reassessment date

### 10. Integration with Evolution Flow

- Log this assessment in Evolution Flow tracking
- Create learning objectives based on gaps
- Set up metrics to track genome improvement over time
- Recommend reassessment frequency based on current maturity level:
  - < 3.0: Every 4-6 weeks
  - 3.0-4.0: Every 2-3 months
  - > 4.0: Every quarter

---

## Assessment Completion Checklist

- [ ] All in-scope DNA assessments completed
- [ ] Overall genome health score calculated
- [ ] Coherence analysis completed
- [ ] Prioritized action plan created
- [ ] Comprehensive report generated
- [ ] Results presented to user with clear next steps
- [ ] Report saved to genome assessment location
- [ ] Evolution tracking updated
- [ ] Follow-up assessment scheduled

---

## Notes for Assessor

- This is a diagnostic tool, not a judgment - focus on helping the team improve
- Be specific in recommendations - avoid generic advice
- Connect gaps to real business impact
- Celebrate strengths while addressing gaps
- Make action plan realistic and achievable
- Remember: The goal is genome coherence, not perfection in every DNA immediately
