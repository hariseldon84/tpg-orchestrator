<!-- Powered by Product Genome™ Framework -->

# Analyze Intelligence DNA Metrics Task

## Purpose

To conduct comprehensive analysis of product metrics defined in Intelligence DNA, uncover insights, identify trends, and inform data-driven decisions. This task transforms raw data into actionable intelligence that guides product evolution and validates (or invalidates) assumptions.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration and Intelligence DNA

- Load `.tpg-core/core-config.yaml` from the project root
- Load `docs/dna/intelligence-dna.md` (metrics framework and definitions)
- Load `docs/dna/purpose-dna.md` (north star metric)
- If Intelligence DNA doesn't exist, HALT: "Intelligence DNA not found. Create Intelligence DNA first to define metrics framework."

### 1. Define Analysis Scope

#### 1.1 Identify Analysis Objective

**Elicit from user:**
- What metrics do you want to analyze?
- What question are you trying to answer?
- What time period should we analyze?
- What prompted this analysis?

**Common analysis objectives:**
- North star metric performance review
- Feature success/failure analysis
- User journey funnel analysis
- Cohort behavior analysis
- Experiment results validation
- Product-market fit assessment
- User satisfaction trends

#### 1.2 Determine Metrics to Analyze

From Intelligence DNA, identify relevant metrics:
- **North Star Metric:** Primary value metric
- **Key Performance Indicators (KPIs):** Top-level success metrics
- **Feature Metrics:** Usage, adoption, satisfaction
- **User Journey Metrics:** Funnels, drop-offs, completion rates
- **Quality Metrics:** Performance, errors, reliability
- **Engagement Metrics:** Retention, frequency, depth

**Prioritize metrics** based on analysis objective.

### 2. Gather Data Sources

#### 2.1 Identify Data Sources

**Determine where data lives:**
- Analytics platform (Google Analytics, Mixpanel, Amplitude, etc.)
- Application database (user data, transactions)
- Logging and monitoring (Datadog, Splunk, etc.)
- User research data (surveys, interviews)
- Support tickets and feedback
- A/B testing platform
- Business intelligence tools

#### 2.2 Access and Extract Data

**For each metric:**
- Verify data is being tracked (instrumentation working)
- Define time range for analysis
- Extract relevant datasets
- Note data quality issues (missing data, outliers, anomalies)

**Data extraction checklist:**
- [ ] North star metric data available
- [ ] Segmentation data available (user segments, cohorts)
- [ ] Funnel/journey data available
- [ ] Comparison periods available (prior week, month, quarter)
- [ ] Contextual data available (feature releases, marketing campaigns)

### 3. North Star Metric Analysis

#### 3.1 Current Performance

**Analyze north star metric:**
- Current value
- Trend over time (daily, weekly, monthly)
- Comparison to baseline
- Comparison to target (from Purpose DNA)
- Rate of change (velocity)

**Calculate:**
- Current value: [X]
- Target value (from Purpose DNA): [Y]
- Gap: [Y - X]
- Progress: [X / Y * 100]%
- Trend: [Increasing / Flat / Decreasing]

**Visualize:**
- Time series chart (trend over time)
- Progress to target chart

#### 3.2 Contributing Factors

**Decompose north star metric:**
- What user behaviors drive this metric?
- What features contribute most?
- What segments perform best/worst?
- What external factors influence this metric?

**Example (if north star is "Weekly Active Users"):**
- New user activation rate
- Returning user rate
- Feature engagement driving retention
- Seasonal patterns

#### 3.3 North Star Health Assessment

**Evaluate:**
- ✅ **Healthy:** On track to target, positive trend
- ⚠️ **At Risk:** Stagnant or slow progress, needs intervention
- ❌ **Unhealthy:** Declining or far from target, urgent action needed

**Document findings:**
- North Star Status: [Healthy / At Risk / Unhealthy]
- Evidence: [Data and trends]
- Key Drivers: [What's moving the metric]
- Blockers: [What's preventing progress]

### 4. User Journey and Funnel Analysis

#### 4.1 Identify Critical Journeys

From Intelligence DNA, identify key user journeys:
- Onboarding flow
- Core value delivery flow
- Conversion flow
- Retention loop

#### 4.2 Funnel Analysis

For each critical journey:
- Map funnel steps
- Calculate conversion rates at each step
- Identify drop-off points
- Benchmark against targets

**Funnel metrics:**
- Step 1 → Step 2 conversion: [X]%
- Step 2 → Step 3 conversion: [X]%
- Overall funnel completion: [X]%
- Comparison to prior period: [+/- X]%

**Identify:**
- Biggest drop-off points (where users abandon)
- Steps below target conversion rates
- Steps that improved or degraded

#### 4.3 Journey Insights

**Ask:**
- Where are users getting stuck?
- What patterns emerge for successful vs. unsuccessful users?
- Are there unexpected paths or behaviors?
- How do different segments perform through the journey?

### 5. Segmentation and Cohort Analysis

#### 5.1 User Segment Performance

From User DNA, analyze each segment:
- Engagement levels by segment
- North star metric performance by segment
- Feature usage by segment
- Satisfaction by segment

**Compare segments:**
- Which segment contributes most to north star?
- Which segment has highest/lowest engagement?
- Are we serving all segments or neglecting some?

#### 5.2 Cohort Analysis

**Analyze cohorts:**
- Retention curves by cohort (week 1, week 2, week 4, etc.)
- Feature adoption by cohort
- Behavior changes over time
- Cohort performance comparison

**Identify:**
- Is retention improving for newer cohorts?
- What behaviors correlate with retention?
- When do users churn (and why)?

### 6. Feature Performance Analysis

#### 6.1 Feature Usage Metrics

For recent features:
- Adoption rate (% of users using feature)
- Usage frequency (how often)
- Engagement depth (time spent, actions taken)
- Completion rate (for task-based features)

**Compare to expectations:**
- Expected adoption: [X]%
- Actual adoption: [Y]%
- Gap: [Y - X]%

#### 6.2 Feature Impact on North Star

**Correlate feature usage with north star:**
- Do users who use Feature X have higher north star metric?
- Does Feature X drive retention, activation, or engagement?
- Is Feature X worth the investment?

**Classify features:**
- **High Impact:** Drives north star significantly
- **Medium Impact:** Contributes modestly
- **Low Impact:** Minimal or no effect
- **Negative Impact:** Harms north star (consider sunset)

#### 6.3 Feature Success/Failure Assessment

**Evaluate each feature:**
- ✅ **Success:** High adoption, positive impact on north star
- ⚠️ **Underperforming:** Low adoption or unclear impact, needs improvement
- ❌ **Failure:** Minimal usage, no impact, consider sunset

### 7. Quality and Performance Metrics Analysis

#### 7.1 Technical Performance

From Experience DNA thresholds:
- Page load times (p50, p95, p99)
- API response times
- Error rates
- Uptime/availability

**Evaluate:**
- Are we meeting Experience DNA thresholds?
- Are there performance regressions?
- Where are bottlenecks?

#### 7.2 Error and Issue Analysis

- Error rate trends
- Most common errors
- User-impacting errors
- Error recovery rates

**Identify:**
- Critical errors needing immediate fixes
- Patterns in errors (specific features, user segments, environments)

#### 7.3 User Satisfaction

- NPS (Net Promoter Score) trends
- CSAT (Customer Satisfaction) scores
- User-reported issues (support tickets)
- App store ratings/reviews

**Analyze sentiment:**
- What are users praising?
- What are users complaining about?
- How has satisfaction changed over time?

### 8. Experimentation and A/B Test Analysis

If experiments are running:

#### 8.1 Experiment Results

For each active experiment:
- Hypothesis tested
- Variants and control
- Sample sizes and statistical significance
- Primary metric results
- Secondary metric results
- Guardrail metric results (any negative impacts?)

#### 8.2 Decision Recommendation

**Evaluate experiment:**
- ✅ **Ship:** Variant significantly better, no negative impacts
- ⚠️ **Iterate:** Unclear results, needs refinement
- ❌ **Kill:** Variant worse or no improvement

**Document learning:**
- What did we learn?
- Does this validate or invalidate our assumptions?
- What should we try next?

### 9. Identify Insights and Patterns

#### 9.1 Data Synthesis

Across all metrics analyzed, identify:
- **Key Insights:** What stands out? What surprised you?
- **Patterns:** What trends or correlations emerge?
- **Anomalies:** What's unusual or unexpected?
- **Opportunities:** Where can we improve?
- **Risks:** What's declining or concerning?

#### 9.2 Validate or Invalidate Assumptions

**Challenge assumptions:**
- We assumed X, but data shows Y
- We thought Feature Z would work, but it didn't
- User segment A is more valuable than we expected

**Update understanding:**
- Revise user personas if behavior differs from assumptions
- Update journey maps if actual paths differ
- Adjust priorities based on what's actually working

### 10. Generate Recommendations

#### 10.1 Actionable Recommendations

Based on analysis, generate specific recommendations:

**Format:**
- **Insight:** [What the data shows]
- **Implication:** [What this means for the product]
- **Recommendation:** [Specific action to take]
- **Priority:** [High / Medium / Low]
- **Expected Impact:** [How this improves north star or metrics]

**Example:**
- **Insight:** Onboarding completion rate dropped from 75% to 60% after redesign
- **Implication:** New users aren't reaching core value, harming activation
- **Recommendation:** Revert onboarding changes and run usability tests to identify friction
- **Priority:** High (blocking new user activation)
- **Expected Impact:** Restore 75% completion, improving Weekly Active Users by 15%

#### 10.2 Prioritize Recommendations

**Prioritization criteria:**
- **High:** Blocks north star, critical issue, high confidence
- **Medium:** Improves metrics moderately, medium confidence
- **Low:** Nice-to-have, low confidence, or long-term play

### 11. Create Metrics Analysis Report

#### 11.1 Report Structure

Generate comprehensive report:

```markdown
# Metrics Analysis Report: [Analysis Objective]

**Date:** [Date]
**Analyst:** [Name]
**Time Period:** [Date range]
**Data Sources:** [List sources]

## Executive Summary
[2-3 paragraphs: key findings, top recommendations]

## North Star Metric Analysis
- Current Value: [X]
- Target: [Y]
- Progress: [X/Y]%
- Trend: [Increasing/Flat/Decreasing]
- Health Status: [Healthy / At Risk / Unhealthy]

[Chart: North Star over time]

### Key Drivers
- [What's moving the metric]

### Blockers
- [What's preventing progress]

## User Journey and Funnel Analysis
[Funnel conversion rates, drop-off analysis]

## Segmentation Insights
[Performance by user segment]

## Feature Performance
[Usage, adoption, impact analysis for key features]

## Quality and Performance Metrics
[Technical performance, errors, user satisfaction]

## Experimentation Results
[A/B test outcomes and learnings]

## Key Insights
1. [Insight with supporting data]
2. [Insight with supporting data]
3. [...]

## Recommendations
### High Priority
1. [Recommendation with expected impact]
2. [...]

### Medium Priority
[...]

### Low Priority
[...]

## Assumptions Validated/Invalidated
- ✅ **Validated:** [Assumption and evidence]
- ❌ **Invalidated:** [Assumption and contradicting evidence]

## Next Steps
1. [Action item with owner and deadline]
2. [...]

## Appendix
[Detailed charts, tables, raw data]
```

#### 11.2 Visualizations

Include charts and graphs:
- North star metric trend line
- Funnel conversion charts
- Cohort retention curves
- Feature adoption graphs
- Segment comparison charts

### 12. Present Findings

#### 12.1 Share Report

- Save report to: `docs/intelligence/metrics-analysis-[date].md`
- Share with product team, stakeholders
- Present in team meeting or async

#### 12.2 Facilitate Discussion

**Guide discussion:**
- What surprises you in this data?
- Do you agree with the insights?
- What recommendations should we prioritize?
- What additional analysis is needed?

### 13. Track Actions and Impact

#### 13.1 Convert Recommendations to Action Items

For each high-priority recommendation:
- Create task/ticket
- Assign owner
- Set deadline
- Define success criteria

#### 13.2 Schedule Follow-Up Analysis

- Set reminder for next analysis (weekly, monthly, quarterly)
- Track whether actions improved metrics
- Close the learning loop

---

## Error Handling

### Missing Data
- Error: "Data not available for [metric]"
- Action: Check instrumentation, note gap in Intelligence DNA
- Recommendation: Implement instrumentation for missing metrics

### Data Quality Issues
- Error: "Data appears incomplete or anomalous"
- Action: Investigate data pipeline, validate with source
- Note caveats in report

### Inconclusive Results
- Error: "Not enough data for statistical significance"
- Action: Extend analysis period or note limitation
- Avoid drawing conclusions from insufficient data

---

## Task Completion

- Status: [Complete]
- Analysis Report: [File path]
- Key Insights: [Count]
- Recommendations: [Count]
- Next Analysis: [Scheduled date]
- Action Items Created: [Count]
