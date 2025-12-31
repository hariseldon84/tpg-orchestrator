<!-- Powered by Product Genome™ Framework -->

# Intelligence DNA Validation Checklist

## Purpose

To validate that Intelligence DNA is comprehensive, establishes clear measurement frameworks, and enables data-driven decision making. This checklist ensures the Intelligence DNA document meets Product Genome quality standards and prevents building without learning, vanity metrics, and gut-feel decisions.

## How to Use This Checklist

- Review each item carefully
- Mark as ✅ Pass, ❌ Fail, or ⚠️ Needs Improvement
- Document specific findings for any failures or improvements needed
- A complete Intelligence DNA should have ALL items marked as Pass

---

## Section 1: Measurement Philosophy Validation

### 1.1 Measurement Principles
- [ ] Core measurement principles are defined (3-5 principles)
- [ ] Principles emphasize learning over vanity metrics
- [ ] Principles connect to Purpose DNA north star metric
- [ ] Principles guide what to measure and what not to measure
- [ ] Principles prevent "measure everything" syndrome

**Finding:** _[Document specific issues or confirm pass]_

### 1.2 Data-Driven Culture
- [ ] Commitment to data-driven decisions is stated
- [ ] Balance between data and intuition is addressed
- [ ] Process for handling conflicting data is defined
- [ ] Data quality standards are established
- [ ] Data democratization approach is documented

**Finding:** _[Document specific issues or confirm pass]_

### 1.3 Learning Orientation
- [ ] Learning goals are prioritized over proving goals
- [ ] Failed experiments are valued for learning
- [ ] Metric instrumentation is part of feature development
- [ ] Regular metric review cadence is established
- [ ] Metrics evolution is expected and planned

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 2: North Star Metric Tracking Validation

### 2.1 North Star Implementation
- [ ] North star metric from Purpose DNA is instrumented
- [ ] Measurement method is clearly documented
- [ ] Data collection is automated (not manual)
- [ ] Baseline value is established
- [ ] Target value and timeline are tracked

**Finding:** _[Document specific issues or confirm pass]_

### 2.2 North Star Quality
- [ ] Metric actually measures user value (not vanity)
- [ ] Metric is updated with sufficient frequency (daily, weekly, etc.)
- [ ] Metric can be decomposed into contributing factors
- [ ] Metric has ownership and accountability
- [ ] Metric trends are reviewed regularly (weekly/monthly)

**Finding:** _[Document specific issues or confirm pass]_

### 2.3 North Star Input Metrics
- [ ] 3-5 input metrics that drive north star are identified
- [ ] Input metrics are leading indicators
- [ ] Input metrics are actionable by team
- [ ] Relationship between input metrics and north star is understood
- [ ] Input metrics are tracked with same rigor as north star

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 3: Product Metrics Framework Validation

### 3.1 Metric Hierarchy
- [ ] Metric hierarchy is clearly defined (north star → primary → secondary)
- [ ] Each metric has a clear owner
- [ ] Metrics connect to specific product areas
- [ ] Metric relationships are documented
- [ ] Metrics ladder up to north star and business goals

**Finding:** _[Document specific issues or confirm pass]_

### 3.2 Metric Categories
- [ ] Acquisition metrics are defined (if applicable)
- [ ] Activation metrics are specified
- [ ] Engagement metrics are established
- [ ] Retention metrics are tracked
- [ ] Revenue/monetization metrics are defined (if applicable)
- [ ] Referral metrics are identified (if applicable)

**Finding:** _[Document specific issues or confirm pass]_

### 3.3 Counter Metrics
- [ ] Counter metrics are defined for each primary metric
- [ ] Counter metrics prevent gaming the system
- [ ] Counter metrics protect against unintended consequences
- [ ] Examples: quality metrics counter speed metrics
- [ ] Counter metrics are actively monitored

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 4: User Behavior Analytics Validation

### 4.1 User Journey Tracking
- [ ] Key user journeys are mapped
- [ ] Journey instrumentation points are defined
- [ ] Drop-off points are tracked
- [ ] Journey completion rates are measured
- [ ] Journey analytics inform product decisions

**Finding:** _[Document specific issues or confirm pass]_

### 4.2 Feature Usage Analytics
- [ ] Feature adoption is tracked
- [ ] Feature engagement depth is measured
- [ ] Feature retention is monitored
- [ ] Unused features are identified and reviewed
- [ ] Feature usage informs roadmap prioritization

**Finding:** _[Document specific issues or confirm pass]_

### 4.3 User Segmentation Analytics
- [ ] User segments (from User DNA) are trackable in analytics
- [ ] Segment-specific metrics are defined
- [ ] Cross-segment comparisons are enabled
- [ ] Segment behavior differences inform decisions
- [ ] New segment discovery is supported

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 5: Instrumentation Standards Validation

### 5.1 Instrumentation Requirements
- [ ] All features are instrumented before shipping
- [ ] Instrumentation is part of definition of done
- [ ] Event tracking standards are documented
- [ ] Event naming conventions are specified
- [ ] Event properties schema is defined

**Finding:** _[Document specific issues or confirm pass]_

### 5.2 Analytics Tools
- [ ] Analytics tooling is specified (e.g., Mixpanel, Amplitude, custom)
- [ ] Tool integration is documented
- [ ] Data pipeline is reliable
- [ ] Analytics SDKs/libraries are standardized
- [ ] Analytics testing is required (QA validates tracking)

**Finding:** _[Document specific issues or confirm pass]_

### 5.3 Data Quality
- [ ] Data validation is automated
- [ ] Data quality checks are in place
- [ ] Data anomalies trigger alerts
- [ ] Data integrity is monitored
- [ ] Bad data is identified and handled

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 6: Experimentation Framework Validation

### 6.1 Experiment Capability
- [ ] A/B testing capability exists
- [ ] Experimentation platform is documented
- [ ] Statistical significance requirements are defined
- [ ] Sample size calculation methods are specified
- [ ] Experiment duration guidelines are established

**Finding:** _[Document specific issues or confirm pass]_

### 6.2 Experiment Process
- [ ] Experiment design process is documented
- [ ] Hypothesis formation is standardized
- [ ] Success criteria are defined before experiments
- [ ] Experiment results are analyzed rigorously
- [ ] Experiment learnings are shared

**Finding:** _[Document specific issues or confirm pass]_

### 6.3 Experiment Quality
- [ ] Statistical rigor is maintained (not p-hacking)
- [ ] Experiments run to completion (not stopped early)
- [ ] Multiple testing correction is applied when needed
- [ ] Confounding variables are controlled
- [ ] Failed experiments are valued for learning

**Finding:** _[Document specific issues or confirm pass]_

### 6.4 Feature Flagging
- [ ] Feature flag system is in place
- [ ] Flags enable gradual rollouts
- [ ] Flags support A/B testing
- [ ] Flag lifecycle management is defined
- [ ] Flag cleanup process exists (no flag debt)

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 7: Performance & Technical Metrics Validation

### 7.1 Performance Monitoring
- [ ] Performance metrics align with Experience DNA thresholds
- [ ] Load time tracking is comprehensive
- [ ] Core Web Vitals are monitored (for web)
- [ ] Performance budgets are enforced
- [ ] Performance regressions trigger alerts

**Finding:** _[Document specific issues or confirm pass]_

### 7.2 Reliability Metrics
- [ ] Uptime/availability is tracked
- [ ] Error rates are monitored
- [ ] Error budgets are defined (SRE principles)
- [ ] Mean time to recovery (MTTR) is measured
- [ ] Incident frequency is tracked

**Finding:** _[Document specific issues or confirm pass]_

### 7.3 Infrastructure Metrics
- [ ] Resource utilization is monitored (CPU, memory, disk)
- [ ] Capacity metrics are tracked
- [ ] Cost metrics are visible
- [ ] Scalability metrics are defined
- [ ] Infrastructure alerts are configured

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 8: Business Metrics Validation

### 8.1 Business KPIs
- [ ] Business metrics are clearly defined
- [ ] Revenue metrics are tracked (if applicable)
- [ ] Customer acquisition cost (CAC) is measured
- [ ] Lifetime value (LTV) is calculated
- [ ] Unit economics are understood
- [ ] Business metrics connect to north star

**Finding:** _[Document specific issues or confirm pass]_

### 8.2 Growth Metrics
- [ ] User growth is tracked (new, active, churned)
- [ ] Growth rate is measured
- [ ] Growth channels are instrumented
- [ ] Cohort retention is analyzed
- [ ] Viral coefficient is calculated (if applicable)

**Finding:** _[Document specific issues or confirm pass]_

### 8.3 Financial Metrics
- [ ] Revenue metrics are accurate and timely
- [ ] Churn/retention revenue impact is quantified
- [ ] Pricing experiment capability exists
- [ ] ROI of features/initiatives is measurable
- [ ] Budget vs. actuals are tracked

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 9: Qualitative Data Integration Validation

### 9.1 User Feedback Collection
- [ ] User feedback collection methods are defined
- [ ] Feedback is systematically collected (not ad-hoc)
- [ ] Feedback is categorized and quantified
- [ ] Feedback informs product decisions
- [ ] Feedback loop exists (users know they're heard)

**Finding:** _[Document specific issues or confirm pass]_

### 9.2 Support & Issue Tracking
- [ ] Support tickets are analyzed for patterns
- [ ] Bug frequency/severity is tracked
- [ ] Common issues inform product improvements
- [ ] Support metrics feed into product metrics
- [ ] Support insights are reviewed regularly

**Finding:** _[Document specific issues or confirm pass]_

### 9.3 Qualitative-Quantitative Integration
- [ ] Qualitative insights validate quantitative data
- [ ] Quantitative anomalies trigger qualitative investigation
- [ ] User research findings connect to analytics
- [ ] Combined insights drive decisions
- [ ] Both types of data are valued equally

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 10: Dashboard & Reporting Validation

### 10.1 Dashboard Existence
- [ ] Executive dashboard exists (high-level view)
- [ ] Team dashboards exist (tactical metrics)
- [ ] Real-time dashboards are available where needed
- [ ] Dashboards are accessible to relevant stakeholders
- [ ] Dashboard ownership is clear

**Finding:** _[Document specific issues or confirm pass]_

### 10.2 Dashboard Quality
- [ ] Dashboards show trends, not just current values
- [ ] Dashboards highlight anomalies
- [ ] Dashboards are actionable (not just informational)
- [ ] Dashboards load quickly (not slow or broken)
- [ ] Dashboards are kept up to date

**Finding:** _[Document specific issues or confirm pass]_

### 10.3 Reporting Cadence
- [ ] Regular metric review meetings are scheduled
- [ ] Weekly/monthly reports are generated
- [ ] Reporting format is standardized
- [ ] Key insights are highlighted, not just data dumps
- [ ] Action items emerge from metric reviews

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 11: Data Governance Validation

### 11.1 Data Privacy & Compliance
- [ ] Data privacy policies are defined
- [ ] User consent for tracking is obtained
- [ ] GDPR/CCPA compliance is maintained
- [ ] PII handling is documented and secure
- [ ] Data retention policies are specified

**Finding:** _[Document specific issues or confirm pass]_

### 11.2 Data Access & Security
- [ ] Data access controls are in place
- [ ] Sensitive data is protected
- [ ] Data access is logged and auditable
- [ ] Data sharing policies are defined
- [ ] Third-party data sharing is controlled

**Finding:** _[Document specific issues or confirm pass]_

### 11.3 Data Ownership
- [ ] Data ownership is clearly defined
- [ ] Data stewardship roles are assigned
- [ ] Data quality responsibility is clear
- [ ] Data documentation is maintained
- [ ] Data lifecycle management is specified

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 12: Learning Loops & Iteration Validation

### 12.1 Build-Measure-Learn Cycle
- [ ] Build-measure-learn cycle is established
- [ ] Cycle time is measured and optimized
- [ ] Learning from data drives next build cycle
- [ ] Failed hypotheses are learning opportunities
- [ ] Iteration speed is valued

**Finding:** _[Document specific issues or confirm pass]_

### 12.2 Retrospective Data
- [ ] Retrospectives use data to validate learnings
- [ ] Metric impact of changes is reviewed
- [ ] Predictions vs. actuals are compared
- [ ] Estimation accuracy improves over time
- [ ] Data prevents repeating past mistakes

**Finding:** _[Document specific issues or confirm pass]_

### 12.3 Continuous Discovery
- [ ] Ongoing user research is integrated with analytics
- [ ] New insights are continuously surfaced
- [ ] Opportunity scoring uses data
- [ ] Discovery cadence is regular (not just at kickoff)
- [ ] Discovery findings are acted upon

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 13: Metric Ownership & Accountability Validation

### 13.1 Ownership Clarity
- [ ] Each key metric has a designated owner
- [ ] Owner is accountable for metric performance
- [ ] Owner reviews metric regularly
- [ ] Owner can explain metric changes
- [ ] Ownership prevents "tragedy of the commons"

**Finding:** _[Document specific issues or confirm pass]_

### 13.2 Team Alignment
- [ ] Teams know which metrics they impact
- [ ] Team goals connect to product metrics
- [ ] Metric performance is celebrated
- [ ] Metric declines trigger action
- [ ] Cross-team metric dependencies are managed

**Finding:** _[Document specific issues or confirm pass]_

### 13.3 Executive Visibility
- [ ] Executives review north star metric regularly
- [ ] Metric trends inform strategic decisions
- [ ] Metric targets are set with executive input
- [ ] Metric-based resource allocation decisions are made
- [ ] Metrics prevent feature factory syndrome

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 14: Alerting & Anomaly Detection Validation

### 14.1 Alert Configuration
- [ ] Critical metrics have alerts configured
- [ ] Alert thresholds are meaningful (not too sensitive)
- [ ] Alert fatigue is prevented
- [ ] Alerts trigger appropriate responses
- [ ] Alert effectiveness is reviewed

**Finding:** _[Document specific issues or confirm pass]_

### 14.2 Anomaly Detection
- [ ] Anomaly detection is automated
- [ ] Unusual metric patterns trigger investigation
- [ ] Anomalies are categorized (good, bad, neutral)
- [ ] Root cause analysis is standardized
- [ ] Anomaly learnings improve system

**Finding:** _[Document specific issues or confirm pass]_

### 14.3 Incident Response
- [ ] Metric-triggered incidents have response playbooks
- [ ] Response time SLAs are defined
- [ ] Incident post-mortems include metric analysis
- [ ] Preventive actions emerge from incidents
- [ ] Incident patterns are identified

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 15: Document Completeness

### 15.1 Required Sections Present
- [ ] All required sections from template are present
- [ ] No sections contain placeholder text
- [ ] No sections are marked as "TBD" or "TODO"
- [ ] Metric definitions are comprehensive

**Finding:** _[Document specific issues or confirm pass]_

### 15.2 Intelligence Validation Questions
- [ ] Intelligence validation questions section exists
- [ ] 5-7 validation questions are provided
- [ ] Questions can be used to evaluate measurement decisions
- [ ] Questions prevent vanity metrics and gut-feel decisions

**Finding:** _[Document specific issues or confirm pass]_

### 15.3 Change Log
- [ ] Change log exists
- [ ] Change log has at least initial entry
- [ ] Change log format is consistent
- [ ] Metric definition changes are tracked

**Finding:** _[Document specific issues or confirm pass]_

---

## Overall Assessment

**Total Items:** _[Count total checklist items]_

**Passed:** _[Count items marked Pass]_

**Failed:** _[Count items marked Fail]_

**Needs Improvement:** _[Count items marked Needs Improvement]_

**Pass Rate:** _[Passed / Total]_ %

---

## Pass/Fail Criteria

- **PASS (Ready to Use):** 90%+ pass rate, zero critical failures
- **CONDITIONAL PASS (Usable with Improvements):** 75-89% pass rate, address improvements within 2 weeks
- **FAIL (Needs Major Revision):** <75% pass rate, significant gaps in core sections

**Overall Status:** _[PASS / CONDITIONAL PASS / FAIL]_

---

## Critical Failures (Automatic Fail)

If ANY of these are marked Fail, the Intelligence DNA cannot pass regardless of overall score:

- [ ] North star metric is not instrumented or tracked
- [ ] No instrumentation standards defined
- [ ] No experimentation capability
- [ ] Metrics are vanity metrics (don't measure real value)
- [ ] No data quality standards
- [ ] No metric ownership defined
- [ ] Data collection violates privacy regulations

**Critical Failures Detected:** _[Yes/No and list if yes]_

---

## Warning Signs (High Risk)

These don't cause automatic failure but indicate high risk of building without learning:

- [ ] Metrics are reviewed less than monthly
- [ ] No A/B tests run in last 3 months
- [ ] Instrumentation is manual or inconsistent
- [ ] Data quality issues are frequent
- [ ] Metrics don't inform decisions (decorative metrics)
- [ ] No counter metrics defined
- [ ] Dashboards are outdated or ignored

**Warning Signs Detected:** _[Count and list]_

---

## Recommendations

Based on checklist results, provide specific recommendations:

### High Priority Actions (Address Immediately)
1. _[Specific action based on failures]_
2. _[...]_

### Medium Priority Improvements (Address Soon)
1. _[Specific action based on needs improvement]_
2. _[...]_

### Measurement Maturity Evolution
1. _[How to evolve measurement practices]_
2. _[...]_

### Experimentation Acceleration
1. _[How to run more/better experiments]_
2. _[...]_

### Strengths to Maintain
1. _[What's working well with measurement]_
2. _[...]_

---

## Checklist Completion

**Reviewed By:** _[Name/Role]_

**Review Date:** _[Date]_

**Next Review Date:** _[Recommended: Every quarter or when measurement framework evolves]_

**Status:** _[APPROVED / CONDITIONAL / REJECTED]_

**Notes:** _[Any additional context or observations]_
