# Genome Calculator Utilities

**Version:** 1.0
**Last Updated:** 2025-12-31
**Framework:** Product Genome™

---

## Purpose

Provide standardized calculation methods and scoring frameworks for evaluating Product Genome health. These utilities enable objective assessment of DNA maturity, genome coherence, quality gates, north star impact, and strategic alignment.

**Use This When:**
- Assessing current product DNA maturity
- Evaluating feature readiness against MQB gates
- Measuring genome coherence across DNA pairs
- Estimating impact of changes on north star metrics
- Tracing deliverables to strategic goals
- Making ship/no-ship decisions

---

## Table of Contents

1. [DNA Maturity Scoring](#dna-maturity-scoring)
2. [Genome Coherence Scoring](#genome-coherence-scoring)
3. [MQB Gate Pass Rate](#mqb-gate-pass-rate)
4. [North Star Metric Impact Estimation](#north-star-metric-impact-estimation)
5. [Builder's Hierarchy Traceability Score](#builders-hierarchy-traceability-score)
6. [Calculation Examples](#calculation-examples)
7. [Usage Guidelines](#usage-guidelines)

---

## DNA Maturity Scoring {#dna-maturity-scoring}

### Overview

Each of the 6 Product Genome DNAs is scored on a 1-5 maturity scale. These scores assess how well-defined, actionable, and integrated each DNA is into product decisions.

### Scoring Scale (1-5)

#### Level 1: Non-Existent
**Status:** No documented DNA, decisions made without this dimension

**Characteristics:**
- No documented artifacts or standards
- Decisions appear random to this dimension
- Team cannot articulate what this DNA is about
- Reactive, not strategic

**Example (Purpose DNA):**
- Product has no stated purpose or north star metric
- "We build what customers ask for"
- Different team members describe product purpose differently

**Remediation:** Create foundational document within 2 weeks

---

#### Level 2: Minimal
**Status:** DNA exists but is vague, incomplete, or not consistently applied

**Characteristics:**
- Document exists but lacks specificity
- Scoring is subjective/unclear
- Partially applied to decisions
- Gaps are obvious but not addressed

**Example (User DNA):**
- Document says "build for field technicians" but no segmentation
- No JTBD analysis
- No evidence of user research
- Team guesses about user needs

**Remediation:** Fill critical gaps, conduct research, get stakeholder buy-in (4 weeks)

---

#### Level 3: Defined
**Status:** DNA is clearly defined, evidence-based, regularly applied

**Characteristics:**
- Clear, specific documentation
- Evidence-based (research, data, feedback)
- Applied to most decisions
- Minor gaps exist but known and planned for

**Example (Experience DNA):**
- MQB gates documented with clear criteria
- Performance standards defined and measured
- Applied to all shipping decisions
- Some performance gaps exist but roadmap addresses them

**Remediation:** Close remaining gaps, improve consistency (8 weeks)

---

#### Level 4: Optimized
**Status:** DNA is refined through iteration, consistently guides decisions, excellent enforcement

**Characteristics:**
- Highly specific, evidence-based documentation
- Applied consistently to ALL decisions
- Regular review and refinement cycle
- Team culture reflects this DNA
- Metrics show positive impact

**Example (Intelligence DNA):**
- Comprehensive instrumentation across all user journeys
- A/B testing framework operational
- North star metric tracked daily
- Decisions made on evidence, not opinion
- Team reviews experiments weekly

**Remediation:** Maintain, iterate based on learnings (ongoing)

---

#### Level 5: Transcendent
**Status:** DNA is embedded in team DNA, autonomous, predictive

**Characteristics:**
- Fully integrated into team decisions and culture
- Applied predictively (anticipate issues before they happen)
- Continuous improvement culture established
- External validation (users, market, competitors recognize excellence)
- Near-zero violations or deviations

**Example (Cultural DNA):**
- Values are embedded in hiring, firing, promotion
- Team makes quality-first decisions without prompting
- Users notice and comment on coherence
- Sustainable growth demonstrated over years
- Industry recognized as exemplar

**Remediation:** Document and share (internal case studies, external speaking)

---

### DNA Maturity Assessment Framework

#### Purpose DNA Scoring

**Level 1 Indicators (Score: 1)**
- No stated north star metric
- Product purpose is vague ("be the best")
- No documented problem being solved
- Different stakeholders describe purpose differently

**Level 2 Indicators (Score: 2)**
- North star metric defined but vague (e.g., "user satisfaction")
- Problem statement exists but lacks specificity
- No clear scope boundaries
- Non-negotiables not documented

**Level 3 Indicators (Score: 3)**
- Clear north star metric (e.g., "30-day retention rate")
- Specific problem statement with evidence
- Scope boundaries defined (IN/OUT)
- Non-negotiables documented (3-5)
- Metric tracked monthly

**Level 4 Indicators (Score: 4)**
- Quantified north star with target (e.g., "30-day retention: 60% → 75% in 6 months")
- Evidence-based problem statement
- Clear scope with feature filter logic
- Non-negotiables enforced (recent decision shows alignment)
- Metric tracked weekly, trend analyzed

**Level 5 Indicators (Score: 5)**
- North star metric is aspirational, customer-validated
- Problem statement is market-validated
- Feature filter results in 40%+ features filtered out
- Non-negotiables have zero violations in past 6 months
- Metric improving predictably, team anticipates changes

**Assessment Questions:**
1. Is the north star metric quantifiable and user-outcome focused? (1-5 points)
2. Is the problem statement evidence-based and specific? (1-5 points)
3. Are scope boundaries documented and enforced? (1-5 points)
4. Are non-negotiables defined and upheld? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = Purpose DNA Maturity Score

**Scoring:**
- 1.0-1.9 = Level 1
- 2.0-2.9 = Level 2
- 3.0-3.9 = Level 3
- 4.0-4.4 = Level 4
- 4.5-5.0 = Level 5

---

#### User DNA Scoring

**Level 1 Indicators (Score: 1)**
- No documented user segments
- Assumptions used instead of research
- "Users" treated as monolithic
- No understanding of user constraints or context

**Level 2 Indicators (Score: 2)**
- User segments identified but not research-based
- Some user research conducted (interviews, but sample too small)
- JTBD analysis incomplete or missing
- Limited understanding of user context/constraints

**Level 3 Indicators (Score: 3)**
- 3-5 specific user segments defined
- Research-based (interviews with 15+ users per segment)
- JTBD analysis for primary segment
- User context and constraints documented
- Evidence plan for ongoing discovery

**Level 4 Indicators (Score: 4)**
- Segments validated through multiple research methods (interviews, analytics, surveys)
- JTBD analysis for all segments
- Detailed persona documentation (behaviors, not demographics)
- Context mapping for primary segment (mobile, connectivity, time pressure, etc.)
- Continuous discovery process active

**Level 5 Indicators (Score: 5)**
- Segments are predictive (can identify which segment before interacting)
- JTBD library updated quarterly with new user behaviors
- Personas are behavioral, not demographic
- Context understood deeply (embedded researchers or user advisory board)
- Product decisions regularly changed based on user research

**Assessment Questions:**
1. Are user segments specific and research-based? (1-5 points)
2. Is JTBD analysis complete for primary segment? (1-5 points)
3. Are user constraints and context well understood? (1-5 points)
4. Is evidence collected regularly (quarterly+)? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = User DNA Maturity Score

---

#### Experience DNA Scoring

**Level 1 Indicators (Score: 1)**
- No documented quality standards
- Quality is subjective ("feels good")
- No MQB gates
- Features shipped with known bugs/issues

**Level 2 Indicators (Score: 2)**
- Basic quality standards exist (vague)
- Some MQB gates mentioned informally
- Quality compromised under deadline pressure (recent examples)
- Inconsistent UX across features

**Level 3 Indicators (Score: 3)**
- Clear quality standards documented (performance, usability, accessibility)
- MQB gates defined with clear pass/fail criteria
- All features evaluated against gates
- Performance monitoring in place
- WCAG AA accessibility target

**Level 4 Indicators (Score: 4)**
- Detailed quality standards with measurable thresholds
- MQB gates enforced (zero exceptions in past 3 months)
- Automated quality checks (tests, performance monitoring)
- 100% features meet gate criteria before ship
- WCAG AA compliance enforced

**Level 5 Indicators (Score: 5)**
- Predictive quality monitoring (catch issues before users)
- MQB gates are aspirational, not just minimum
- Quality culture embedded (team suggests higher standards)
- Zero defect shipping becoming normal
- WCAG AAA target achieved

**Assessment Questions:**
1. Are quality standards documented and measurable? (1-5 points)
2. Are MQB gates defined and enforced? (1-5 points)
3. Is quality monitored and improving? (1-5 points)
4. Are accessibility standards being met? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = Experience DNA Maturity Score

---

#### Architecture DNA Scoring

**Level 1 Indicators (Score: 1)**
- No documented architecture
- Technical decisions made ad-hoc
- No ADRs or decision records
- Architecture appears accidental

**Level 2 Indicators (Score: 2)**
- Basic architecture documentation exists
- Some ADRs written (incomplete)
- Technical debt acknowledged but not tracked
- Scalability concerns emerging

**Level 3 Indicators (Score: 3)**
- Architecture documented and clear
- ADRs written for significant decisions
- Technical debt tracked in backlog
- System design supports current scale
- Evolution plan exists (next 12 months)

**Level 4 Indicators (Score: 4)**
- Detailed architecture documentation with diagrams
- Comprehensive ADRs with clear rationale
- Technical debt proactively managed
- Architecture supports 10x scale
- Regular architecture reviews (quarterly)

**Level 5 Indicators (Score: 5)**
- Architecture enables new capabilities without redesign
- ADRs predict and address future constraints
- Technical debt near zero
- System scales elegantly with user growth
- Architecture decisions adopted by industry

**Assessment Questions:**
1. Is architecture clearly documented with rationale? (1-5 points)
2. Are significant decisions recorded with ADRs? (1-5 points)
3. Is technical debt managed and limited? (1-5 points)
4. Can architecture support 10x user growth? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = Architecture DNA Maturity Score

---

#### Intelligence DNA Scoring

**Level 1 Indicators (Score: 1)**
- No instrumentation or analytics
- Decisions made on opinion, not evidence
- No north star metric tracking
- "We'll add analytics later"

**Level 2 Indicators (Score: 2)**
- Basic analytics implemented (pageviews, events)
- Some metrics tracked but inconsistently
- No experimentation framework
- Analysis is ad-hoc

**Level 3 Indicators (Score: 3)**
- Comprehensive instrumentation of key journeys
- North star metric tracked and dashboards updated
- A/B testing framework operational
- Weekly metric reviews
- Decisions increasingly evidence-based

**Level 4 Indicators (Score: 4)**
- Full instrumentation with real-time dashboards
- North star tracked daily with automated alerts
- A/B testing framework operational (5+ experiments/month)
- Data-driven culture (all decisions have supporting evidence)
- Experiments documented and learnings shared

**Level 5 Indicators (Score: 5)**
- Predictive analytics identifying issues before they occur
- North star predictive model (forecast impact of changes)
- Experimentation generates insights beyond hypothesis
- Data literacy across product team
- External recognition for analytics capability

**Assessment Questions:**
1. Is instrumentation comprehensive and real-time? (1-5 points)
2. Is north star metric actively tracked and monitored? (1-5 points)
3. Is experimentation framework operational? (1-5 points)
4. Are decisions made on evidence vs. opinion? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = Intelligence DNA Maturity Score

---

#### Cultural DNA Scoring

**Level 1 Indicators (Score: 1)**
- No stated product values
- Culture is reactive, not intentional
- Quality often compromised for speed
- Blame culture when things fail

**Level 2 Indicators (Score: 2)**
- Values stated but not enforced
- Some commitment to quality but inconsistent
- Learning happening but not systematic
- Occasional tension between speed and quality

**Level 3 Indicators (Score: 3)**
- Clear, documented product values
- Values reflected in recent decisions (3+ examples)
- Quality considered equal to speed
- Regular retrospectives and learning
- Team aligned on decision framework

**Level 4 Indicators (Score: 4)**
- Values embedded in hiring, promotion, feedback
- Values visibly guide difficult decisions
- Quality-first culture evident (saying "no" to ship is celebrated)
- Learning culture with systematic retrospectives
- Growth strategies sustainable and evidence-based

**Level 5 Indicators (Score: 5)**
- Team embodies values autonomously
- New hires quickly understand and adopt values
- Quality becomes instinctive (team suggests higher standards)
- Continuous learning is normal
- External recognition for team culture and values

**Assessment Questions:**
1. Are product values clearly defined and documented? (1-5 points)
2. Are values reflected in actual decisions? (1-5 points)
3. Is quality treated as non-negotiable? (1-5 points)
4. Is learning culture established and active? (1-5 points)

**Formula:** (Q1 + Q2 + Q3 + Q4) / 4 = Cultural DNA Maturity Score

---

### Overall Genome Maturity

**Formula:**
```
Genome Maturity = (Purpose + User + Experience + Architecture + Intelligence + Cultural) / 6
```

**Interpretation:**

| Score | Status | Implication |
|-------|--------|------------|
| 1.0-1.9 | Foundation Crisis | Critical gaps threaten product viability |
| 2.0-2.9 | Foundation Weak | Significant improvement needed before scaling |
| 3.0-3.9 | Foundation Strong | Ready to scale, continue improvements |
| 4.0-4.4 | Foundation Excellent | Top decile product team |
| 4.5-5.0 | Foundation Transcendent | Exceptionally rare, industry exemplar |

---

## Genome Coherence Scoring {#genome-coherence-scoring}

### Overview

Genome Coherence measures how well the 6 DNAs work together and reinforce each other. Strong coherence means decisions are obvious and conflicts are rare. Weak coherence means teams pull in different directions.

### DNA Pair Alignment (1-5 Scale)

Each pair of DNAs can be assessed for alignment:

#### Purpose ↔ User Alignment

**Measures:** How well user understanding supports and reinforces purpose

**Scoring:**

**1 = Misaligned**
- Purpose and user focus conflict
- Example: Purpose is "reduce time to setup" but primary users are novices who need extensive onboarding
- User needs are opposite of purpose
- Evidence of tension (support tickets show frustration)

**2 = Loosely Aligned**
- Some connection between purpose and user focus
- Example: Purpose is healthcare, users are clinic staff but no focus on their specific constraints
- Partial overlap but significant gaps
- Some tension exists but manageable

**3 = Aligned**
- User focus clearly serves purpose
- Example: Purpose is reduce repair time, primary users are field technicians with time pressure
- User segments were chosen because they solve the problem
- Clear, documented connection

**4 = Well Aligned**
- User focus is optimized for purpose
- Example: Primary users are the 20% of technicians who do 80% of repairs
- User constraints inform purpose design (offline capability, mobile-first)
- Regular alignment checks (quarterly)

**5 = Perfectly Aligned**
- User understanding continuously refines purpose
- Example: User research drives north star metric updates
- User feedback shapes non-negotiables
- Purpose acts as quality filter for user research (validates priorities)

**Assessment Question:** How well do user segments and needs reinforce the product purpose?

---

#### User ↔ Experience Alignment

**Measures:** How well quality standards respect user constraints and expectations

**Scoring:**

**1 = Misaligned**
- Quality standards don't match user context
- Example: Performance standards assume broadband, users on 3G
- Accessibility ignored, but users have accessibility needs
- UX design ignores user constraints

**2 = Loosely Aligned**
- Some consideration of user context in quality standards
- Example: Mobile performance considered but not primary
- Accessibility compliance but not a cultural priority
- Some mismatch between standards and user reality

**3 = Aligned**
- Quality standards designed around user context
- Example: Performance standards based on user connectivity (mobile-first)
- WCAG AA compliance required
- Usability standards tested with primary users

**4 = Well Aligned**
- All quality standards optimized for user context
- Example: Performance standards based on median user connectivity
- WCAG AA compliance with accessibility champion
- Usability testing regular and systematic

**5 = Perfectly Aligned**
- User feedback continuously improves experience standards
- Example: Performance standards improve based on user environment monitoring
- Accessibility standards exceed legal requirements
- User experience continuous improvement cycle

**Assessment Question:** Are quality standards set based on user context and constraints?

---

#### Experience ↔ Architecture Alignment

**Measures:** Can the architecture deliver the experience standards?

**Scoring:**

**1 = Misaligned**
- Architecture cannot deliver experience standards
- Example: Performance standards require 2s load, architecture achieves 8s
- Scalability concerns threaten uptime standards
- UX design requires capabilities architecture can't provide

**2 = Loosely Aligned**
- Architecture mostly delivers standards with workarounds
- Example: Performance needs refactoring but current system works
- Technical debt accumulates
- Some standards are aspirational, not actual

**3 = Aligned**
- Architecture clearly supports experience standards
- Example: Performance standards are met and measured
- Scalability plan exists to 10x current size
- UX design matches technical capabilities

**4 = Well Aligned**
- Architecture is optimized for experience standards
- Example: Performance monitoring is predictive
- Scalability is built in, not added later
- Architecture facilitates UX improvements

**5 = Perfectly Aligned**
- Architecture enables raising experience standards
- Example: Infrastructure improvements enable lower latency
- System stability enables more sophisticated UX
- Architecture and experience co-evolve

**Assessment Question:** Can the technical architecture deliver the experience standards?

---

#### Architecture ↔ Intelligence Alignment

**Measures:** Can instrumentation and experimentation work within the architecture?

**Scoring:**

**1 = Misaligned**
- Architecture doesn't support data collection
- Example: No logging, no instrumentation possible
- A/B testing would require major refactoring
- No way to measure impact of changes

**2 = Loosely Aligned**
- Some data collection possible but incomplete
- Example: Basic analytics work but deep instrumentation difficult
- A/B testing possible but challenging
- Some key metrics unmeasurable

**3 = Aligned**
- Architecture supports comprehensive instrumentation
- Example: Event logging infrastructure in place
- A/B testing framework operational
- North star metric measurable and tracked

**4 = Well Aligned**
- Architecture optimized for data collection and analysis
- Example: Real-time data pipeline operational
- A/B testing platform is part of architecture
- Experiments ship as fast as features

**5 = Perfectly Aligned**
- Instrumentation enables architecture improvements
- Example: Performance data drives optimization
- A/B testing shapes architectural choices
- Data and architecture co-evolve

**Assessment Question:** Does architecture support comprehensive measurement and experimentation?

---

#### Intelligence ↔ Cultural Alignment

**Measures:** Do team values support evidence-based decision making?

**Scoring:**

**1 = Misaligned**
- Culture prefers opinion over evidence
- Example: HiPPO makes decisions, data ignored
- "Ship it and see" instead of validating first
- No time for analysis or learning

**2 = Loosely Aligned**
- Some evidence considered but opinions still dominate
- Example: Data available but often overridden
- Experimentation happening but not standard practice
- Some learning from failures but inconsistent

**3 = Aligned**
- Evidence is standard for decisions
- Example: Decisions require data support
- Experimentation is standard practice
- Learning retrospectives regular
- Team values evidence-based approach

**4 = Well Aligned**
- Evidence shapes decisions automatically
- Example: All major decisions require A/B tests
- Team questions decisions without data
- Learning is systematic and documented
- Data literacy across team

**5 = Perfectly Aligned**
- Evidence collection drives cultural evolution
- Example: User research shapes team values
- Experimentation results inform strategy
- Culture celebrates learning from failures
- Team teaches others about evidence-based approach

**Assessment Question:** Does team culture support and enable evidence-based decisions?

---

#### All DNAs ↔ Purpose Alignment

**Measures:** How well do all DNAs reinforce the purpose?

**Scoring:**

**1 = Misaligned**
- Multiple DNAs pull away from purpose
- Example: User focus is different from stated purpose, quality standards don't match, architecture unrelated to purpose
- Purpose is marketing slogan, not guide

**2 = Loosely Aligned**
- Some DNAs support purpose, others don't
- Example: User DNA is aligned but architecture ignores purpose constraints
- Purpose is sometimes used as filter

**3 = Aligned**
- All DNAs support and reinforce purpose
- Example: Each DNA makes sense in context of purpose
- Purpose is clear filter for decisions
- Documented connections between DNAs and purpose

**4 = Well Aligned**
- All DNAs are optimized to achieve purpose
- Example: User DNA choices maximize purpose achievement
- Quality standards designed for purpose
- Architecture enables purpose delivery
- Regular alignment checks

**5 = Perfectly Aligned**
- Purpose evolves based on DNA learnings
- Example: User research refines purpose understanding
- Quality standards enable higher purpose achievements
- Architecture design driven by purpose
- Culture embeds purpose in decisions

**Assessment Question:** How well does each DNA support the overall purpose?

---

### Coherence Calculation

**Pair Scores:**
1. Purpose ↔ User: ___
2. User ↔ Experience: ___
3. Experience ↔ Architecture: ___
4. Architecture ↔ Intelligence: ___
5. Intelligence ↔ Cultural: ___
6. Purpose ↔ Experience: ___
7. Purpose ↔ Architecture: ___
8. Purpose ↔ Intelligence: ___
9. Purpose ↔ Cultural: ___
10. User ↔ Architecture: ___
11. User ↔ Intelligence: ___
12. User ↔ Cultural: ___
13. Experience ↔ Intelligence: ___
14. Experience ↔ Cultural: ___
15. Architecture ↔ Cultural: ___

**Formula:**
```
Coherence Score = (Sum of all 15 pair scores) / 15
```

**Interpretation:**

| Score | Status | Implication |
|-------|--------|------------|
| 1.0-1.9 | Fragmented | DNAs work in isolation, conflicts common |
| 2.0-2.9 | Loose | Some alignment, occasional conflicts |
| 3.0-3.9 | Coherent | Good alignment, rare conflicts |
| 4.0-4.4 | Highly Coherent | DNAs reinforce each other |
| 4.5-5.0 | Perfectly Coherent | Decisions obvious, conflicts nearly impossible |

---

### Red Flags and Green Flags

#### Red Flags (Coherence Breakdown)

**Critical Red Flags:**
- Purpose and User DNA are misaligned (score < 2)
  - *Implication:* Building for wrong users or the wrong purpose
  - *Action:* Stop and realign immediately (sprint stop)

- Experience and Architecture misaligned (score < 2)
  - *Implication:* Cannot deliver promised quality
  - *Action:* Plan major architecture change or lower standards

- All DNAs to Purpose misaligned (average < 2)
  - *Implication:* Product strategy is broken
  - *Action:* Strategy review required at leadership level

**Warning Red Flags:**
- Any pair scores 2 or below
  - *Implication:* Specific dimension needs attention
  - *Action:* Create improvement plan (30 days)

- Coherence Score below 3
  - *Implication:* General alignment issues
  - *Action:* Genome assessment and improvement roadmap

- Three or more pairs below 2.5
  - *Implication:* Systematic alignment breakdown
  - *Action:* All-hands meeting to realign

---

#### Green Flags (Coherence Health)

**Strong Green Flags:**
- All pair scores 3.5 or above
  - *Implication:* All DNAs working well together
  - *Celebration:* Recognize team achieving coherence

- Coherence Score 4.0 or above
  - *Implication:* Decisions are obvious, few conflicts
  - *Culture:* Team operates with high alignment

- Zero pairs below 3
  - *Implication:* No critical alignment gaps
  - *Opportunity:* Focus on optimization, not fixing

**Positive Indicators:**
- Coherence improves over quarters
  - *Implication:* Team learning and aligning
  - *Trend:* Continue current approach

- Coherence score matches Genome Maturity score
  - *Implication:* Growth is balanced across all DNAs
  - *Health:* Good sign of integrated development

- Employees mention alignment unprompted
  - *Implication:* Coherence is embedded in culture
  - *Sustainability:* Less likely to drift

---

## MQB Gate Pass Rate {#mqb-gate-pass-rate}

### Overview

MQB (Minimum Quality Bar) gates are 12 quality checkpoints that every feature must pass before shipping. The pass rate indicates what percentage of features clear all gates before release.

### The 12 MQB Gates

**Gate 1: Purpose Alignment**
- Does feature serve stated purpose DNA?
- Does feature support north star metric?
- Pass Criteria: Explicit connection documented, stakeholder agreed

**Gate 2: User Value**
- Is feature validated by real user needs (from User DNA)?
- Evidence: User research, customer feedback, or internal evidence
- Pass Criteria: Evidence documented, tested with target users (5+ interviews or 100+ survey responses)

**Gate 3: Functional Quality**
- Do all acceptance criteria pass?
- No critical bugs (P1/P2)
- Pass Criteria: QA sign-off, no critical defects

**Gate 4: User Experience**
- Is UX usable, accessible, appropriate to context?
- Follows design system, accessible (WCAG AA minimum)
- Pass Criteria: Accessibility audit pass, 5+ user test pass, design review approved

**Gate 5: Performance**
- Meets Experience DNA performance standards
- Example: <2s load, <100ms interaction response
- Pass Criteria: Performance monitoring shows consistently met targets

**Gate 6: Reliability**
- System is stable, handles errors gracefully
- No data loss, corruption, or inconsistency
- Pass Criteria: Error budget remaining (99.9% uptime over 30 days)

**Gate 7: Security**
- Authentication, authorization, data protection implemented
- No security vulnerabilities (critical or high)
- Pass Criteria: Security review passed, no open critical issues

**Gate 8: Testing**
- Adequate test coverage (code + user testing)
- Acceptance criteria tested
- Pass Criteria: 80%+ code coverage, user acceptance test passed

**Gate 9: Documentation**
- User documentation clear and complete
- Technical documentation for maintainers
- Pass Criteria: Docs reviewed by non-author, help center articles published

**Gate 10: Operational Readiness**
- Monitoring and alerting configured
- Logging sufficient for troubleshooting
- Rollback plan documented
- Pass Criteria: Monitoring dashboard shows metrics, runbook documented

**Gate 11: North Star Impact**
- Expected impact on north star metric defined
- Metrics will be monitored post-ship
- Pass Criteria: Hypothesis documented, metrics identified, monitoring configured

**Gate 12: Non-Negotiables**
- No violations of stated non-negotiables from Purpose DNA
- Pass Criteria: Review against non-negotiables, zero violations

---

### Calculating Pass Rate

**Formula:**
```
MQB Pass Rate = (Features Passing All 12 Gates) / (Total Features Released) × 100%
```

**Tracking:**

```
Release Cycle: Q4 2025
Total Features Shipped: 24
Features Passing All Gates: 22
Features with Gate Exceptions: 2

MQB Pass Rate = 22/24 × 100% = 91.7%
```

---

### Interpreting Pass Rate

| Rate | Status | Implication |
|------|--------|------------|
| 100% | Exemplary | MQB is being enforced strictly, quality culture strong |
| 95-99% | Excellent | Minor exceptions only, generally high quality |
| 85-94% | Good | Some exceptions, mostly acceptable, needs slight tightening |
| 75-84% | Warning | Too many exceptions, quality standards erosion risk |
| <75% | Critical | MQB is meaningless, quality debt accumulating rapidly |

---

### Gate Exception Process

**When gates cannot be met:**

1. **Identify gap** - Which gate(s) fail? Why?

2. **Risk assessment** - What's the risk of shipping without gate?
   - Low risk (cosmetic, performance only): Consider shipping
   - Medium risk (usability, some data concerns): High approval threshold
   - High risk (security, core functionality, non-negotiable): Don't ship

3. **Mitigation plan** - How will risk be addressed?
   - Timeline to fix
   - Monitoring plan to catch issues
   - User communication if needed

4. **Approval** - Who can approve exceptions?
   - Low risk: Product Manager
   - Medium risk: Director/VP
   - High risk: C-level + risk acknowledgment

5. **Documentation** - Record exception with rationale

6. **Remediation** - Fix must be completed (with deadline)

**Critical Rule:** Exception becomes pattern → cultural erosion

---

### Improving Pass Rate

**Common Gates That Fail:**

**Gate 2 (User Value) - Most Common**
- Problem: Not enough user research
- Solution: Require user research earlier in cycle (discovery phase)
- Timeline: Add 1-2 weeks to cycle

**Gate 4 (UX) - Common**
- Problem: Design time insufficient
- Solution: Allocate more design resources or reduce scope
- Timeline: Add design phase before build

**Gate 5 (Performance) - Common**
- Problem: Performance not measured during build
- Solution: Add performance benchmarks at start of sprint
- Timeline: 30% of build cycle for performance work

**Gate 8 (Testing) - Very Common**
- Problem: Testing at end instead of throughout
- Solution: Implement TDD, continuous testing
- Timeline: Shift testing left (build phase, not QA phase)

**Gate 9 (Documentation) - Very Common**
- Problem: Documentation written after feature done
- Solution: Require docs in definition of done
- Timeline: 20% of build cycle for documentation

**Gate 10 (Ops Readiness) - Common**
- Problem: Ops not involved during build
- Solution: Ops included from design phase
- Timeline: Add ops review step before QA

---

## North Star Metric Impact Estimation {#north-star-metric-impact-estimation}

### Overview

Before shipping a feature, estimate how it will impact the north star metric. This transforms development from "hope it works" to "predict and measure impact."

### Three-Step Impact Framework

**Step 1: Hypothesis Formulation**

Define what you expect to happen and why.

**Format:**
```
Feature: [Feature Name]
Hypothesis: [Specific prediction about user behavior change]
Hypothesis Type: [Adoption | Activation | Engagement | Retention | Monetization]
Expected Impact: [Quantified change to north star metric]
Confidence: [High/Medium/Low]
Timeframe: [When will impact be measurable?]
```

**Example:**
```
Feature: One-Click Checkout
Hypothesis: Users with one-click checkout will complete purchases 25% faster
Hypothesis Type: Engagement
Expected Impact: 30-day retention +8% (from efficiency enabling more tasks)
Confidence: High (validated in user testing)
Timeframe: Measurable in 2 weeks (after 1000+ transactions)
Mechanism: Faster checkout → more repeat purchases → higher retention
```

**Hypothesis Types:**
- **Adoption** - Will users try the feature? (new user acquisition)
- **Activation** - Will new users successfully complete core task? (time to first value)
- **Engagement** - Will users use more frequently or do more? (usage frequency)
- **Retention** - Will users come back? (return rate, churn reduction)
- **Monetization** - Will ARPU increase? (revenue impact)

---

**Step 2: Impact Estimation Methodology**

Use data to estimate expected impact, don't guess.

**Method 1: User Research Based**

From user interviews or surveys:
```
Question: "How much faster would this make your task?"
User 1: "50% faster"
User 2: "30% faster"
User 3: "40% faster"
Average: 40% faster

Conservative estimate (25th percentile): 30% faster
Realistic estimate (median): 40% faster
Optimistic estimate (75th percentile): 50% faster

Use realistic estimate for planning, monitor conservative/optimistic ranges.
```

**Method 2: Benchmark Based**

Compare to similar features in market:
```
Feature: One-click checkout exists in: Amazon, Shopify, PayPal
Market data shows: 25-35% conversion increase for one-click checkout
Industry standard: ~30% improvement
Our context: Mid-tier ecommerce, lower sophistication than Amazon
Adjusted estimate: 20-25% conversion increase

Expected impact on retention: (conversion +23%) × (repeat purchase correlation 0.7) = +16% retention
```

**Method 3: Cohort Analysis Based**

Use internal data if you have it:
```
Current conversion path: Browse → Add to cart → Checkout (3 steps)
Average drop-off at checkout: 35%
One-click users (estimated): ~10% reduction in drop-off

Impact: 35% drop × 10% improvement = 3.5% absolute improvement
Current conversion: 2.5% → New conversion: 5.75% (130% relative improvement)
```

**Method 4: Mechanism Based**

Break down the mechanism:
```
Feature: Collaborative editing
Mechanism:
1. Users can work on same document simultaneously
   Impact: 50% reduction in version conflict time

2. Less time resolving conflicts → more time on content
   Impact: +20% productivity per session

3. Higher productivity → more users invite others
   Impact: +15% collaboration adoption

4. Network effects: More collaborators → more value
   Impact: +25% long-term retention (estimated)

Chain: 1 → 2 (high confidence) → 3 (medium) → 4 (low)
Conservative chain: 1 × 50% × 2 = 50% confidence
Realistic chain: 1 × 2 × 3 = 100% confidence
Optimistic chain: 1 × 2 × 3 × 4 = 125% confidence

Expected impact: 100% confidence (50% improvement to productivity → +20% retention)
```

---

**Step 3: Confidence Scoring**

Assign confidence level to each estimate.

**Confidence Matrix:**

| Confidence | Criteria | Example |
|-----------|----------|---------|
| High (80-95%) | User research validated, similar features shipped, market data supports | One-click checkout (validated in user testing, market benchmarks, internal data) |
| Medium (50-79%) | Some evidence, some uncertainty, mechanism unclear | New collaboration feature (users want it, but adoption rate unclear) |
| Low (20-49%) | Mostly assumption, limited evidence, mechanism speculative | Marketplace feature (sounds good, but market research limited) |
| Very Low (<20%) | Pure speculation, no supporting evidence | Random feature idea without validation |

**Confidence Checklist:**

High Confidence:
- [ ] User research with 20+ interviews
- [ ] Market precedent (exists elsewhere)
- [ ] Internal benchmark data available
- [ ] Mechanism is clear and linear
- [ ] Similar features shipped before

Medium Confidence:
- [ ] User research with 10-20 interviews
- [ ] Some market precedent
- [ ] Mechanism is clear but effects uncertain
- [ ] Related feature shipped before

Low Confidence:
- [ ] Limited user research (<10 interviews)
- [ ] No clear market precedent
- [ ] Mechanism has multiple unknown steps
- [ ] New type of feature

---

### Impact Monitoring Framework

**Post-Ship Measurement:**

```
Feature: [Feature Name]
Shipped: [Date]
Measurement Period: [2 weeks, 4 weeks, 12 weeks]

Hypothesis: [Restated]
Expected Impact: [+8% retention]
Confidence: High

Actual Results:
- Week 1: +3% retention (early adoption phase)
- Week 2: +6% retention (increasing, as expected)
- Week 4: +7% retention (reaching expected range)
- Week 12: +9% retention (exceeded expectation!)

Outcome: CONFIRMED
Learning: Feature is more valuable than expected
Action: Increase marketing investment, explore variations
```

**Measuring Impact on North Star:**

1. **Establish baseline** - What is north star before feature?
   ```
   30-day retention: 45%
   Baseline established: [Date]
   ```

2. **Segment users** - Feature users vs. non-feature users
   ```
   Cohort A (feature): Started using one-click checkout
   Cohort B (control): Hasn't used one-click checkout
   Measure retention for both cohorts
   ```

3. **Account for seasonality** - Isolate feature impact
   ```
   Retention without feature: 45% (baseline)
   Retention with feature (if only seasonal): ~47% (normal seasonal +2%)
   Actual retention with feature: 53% (+8%)
   Isolated impact: 53% - 47% = +6% due to feature
   ```

4. **Time-series analysis** - When did impact start?
   ```
   Chart retention over time
   Feature shipped on 12/15
   Retention starts improving on 12/20 (5-day lag)
   Steepest improvement 12/20-1/5 (adoption phase)
   Plateaus after 1/10 (most users who want feature, have it)

   Can now say: Feature's impact is clear and measurable
   ```

---

### Impact Estimation Example

**Real Example: Mobile App Push Notifications**

**Hypothesis Formulation:**
```
Feature: Personalized push notifications based on user behavior
Hypothesis: Personalized notifications will increase daily active users by 15%
Hypothesis Type: Engagement
Expected Impact: 30-day retention +12% (more engagement → more value → higher retention)
Confidence: Medium
Timeframe: Measurable in 2 weeks
Mechanism:
  1. Personalized → relevant to users (medium confidence, tested in design)
  2. More relevant → higher open rates (+25% from market data, high confidence)
  3. Higher open rates → more sessions (medium confidence, depends on message quality)
  4. More sessions → higher retention (high confidence, documented relationship)
```

**Impact Estimation:**
```
Current push notification open rate: 8%
Market benchmark for personalization: +25% open rate improvement
Conservative estimate: +3.75% absolute (from 8% → 11.75%)
Realistic estimate: +25% relative improvement (from 8% → 10%)
Optimistic estimate: +35% relative improvement (from 8% → 10.8%)

Impact on DAU:
  Per 1000 users sending 2 notifications/week
  Current opens: 1000 × 2 × 8% = 160 opens/week
  Realistic: 160 × 1.25 = 200 opens/week (+25%)

  If each open drives session: +25% sessions per user
  If sessions drive retention: +25% sessions correlation with +12% retention improvement

Expected impact: +10-12% 30-day retention
```

**Confidence Assessment:**
- User research: Design tested with 15 users, +18 to +30% improvement range. ✓ High
- Market data: Industry studies show 20-30% improvement for personalization. ✓ High
- Mechanism: 1 and 2 high confidence, 3 and 4 medium-high confidence. ✓ Medium-High
- Measurement: Can track open rates daily, retention weekly. ✓ High

**Overall Confidence: High (80%)**

---

## Builder's Hierarchy Traceability Score {#builders-hierarchy-traceability-score}

### Overview

Builder's Hierarchy (Goal → Actor → Impact → Deliverable) ensures features connect to business outcomes. Traceability Score measures how well deliverables trace back to strategic goals.

**Traceability = Confidence that feature will deliver desired outcome**

### Four-Level Traceability Framework

#### Level 4: Deliverables (Features)
What specific features are being built?
```
Examples:
- One-click checkout button
- Collaborative editing mode
- Mobile app push notifications
- AI-powered search
```

#### Level 3: Impacts (Behavioral Change)
What should users do differently because of the feature?
```
Examples:
- Complete checkout 40% faster
- Create documents with less back-and-forth
- Discover products they didn't know about
- Find answers without support tickets
```

#### Level 2: Actors (Who)
Whose behavior should change?
```
Examples:
- E-commerce customers making purchases
- Document collaboration teams
- Casual shoppers with exploration intent
- Support-dependent users
```

#### Level 1: Goals (Why)
What business outcome are we after?
```
Examples:
- Increase conversion rate by 15%
- Reduce time-to-first-draft by 30%
- Increase average order value by 25%
- Reduce support ticket volume by 20%
```

---

### Traceability Scoring

Each level is scored on how well it connects to the level above it.

#### Goal Definition Quality (1-5)

**1 = Vague**
- "Increase revenue"
- "Make users happy"
- "Improve product"

**2 = Somewhat Specific**
- "Increase conversion rate"
- "Improve user satisfaction"
- "Better onboarding"

**3 = Specific**
- "Increase conversion rate by 15% in 90 days"
- "Reduce support tickets by 20%"
- "Increase 30-day retention to 50%"

**4 = Highly Specific**
- "Increase checkout conversion from 2.5% to 3.8% (52% improvement) within 12 weeks"
- "Reduce MTTR from 45min to 30min for P1 incidents"
- "Increase 30-day retention from 35% to 45% (28% improvement)"

**5 = Exemplary**
- Quantified, time-bound, measurable, outcome-focused
- Connected to overall business strategy
- Validated with stakeholders
- Example: "Increase subscription LTV by $200 (25%) within fiscal year by expanding retention to customers using 5+ features"

**Assessment:** Does goal define measurable outcome, not output?

---

#### Actor Identification Quality (1-5)

**1 = Generic**
- "Users"
- "Everyone"
- "Customers"

**2 = Broad Segments**
- "Premium users"
- "Active users"
- "Enterprise customers"

**3 = Specific Segments**
- "Enterprise customers with 100+ employees"
- "Mobile users on 3G or worse connectivity"
- "Long-form content creators (writing 10k+ words/month)"

**4 = Highly Specific**
- "Enterprise CTOs at companies with 100-500 employees, managing technical teams, responsible for 5+ mission-critical applications"
- "Mobile users in emerging markets on 2G/3G networks with phones 2+ years old"

**5 = Behavioral Specification**
- "Power users who spend 20+ hours/week in app, create 5+ documents/month, use collaboration features 40%+ of time"
- "Tech-savvy early adopters (prefer new features to stability), willing to experiment, quick to provide feedback"

**Assessment:** Is actor specific enough to predict behavior?

---

#### Impact Clarity (1-5)

**1 = Unclear**
- "Users will be happier"
- "Better experience"
- "More engagement"

**2 = Vague**
- "Users will use feature more"
- "Improve workflow"
- "Enable collaboration"

**3 = Specific**
- "Field technicians will complete repairs 20% faster"
- "Finance teams will resolve disputes 3x faster"
- "Account managers will identify upsell opportunities 2x faster"

**4 = Highly Specific**
- "Field technicians performing routine diagnostics (35% of repairs) will complete diagnosis 30% faster, allowing 1-2 additional jobs per day"
- "Finance teams will resolve 80% of reconciliation disputes automatically (vs. 20% today) without manual intervention"

**5 = Mechanism Articulated**
- "Field technicians will complete diagnosis 30% faster because AI will surface relevant previous cases and error codes, reducing information search time from 8 minutes to 5 minutes, enabling X additional jobs per day"
- "Finance teams will achieve 80% auto-reconciliation because system will learn transaction patterns and flag anomalies, reducing manual review from 30min to 5min per batch"

**Assessment:** Is behavioral change specific and mechanically sound?

---

#### Deliverable Appropriateness (1-5)

**1 = Disconnected**
- Feature doesn't address impact
- Example: Goal is "reduce churn" but feature is "add new chart type"
- No clear link to outcome

**2 = Loosely Connected**
- Feature might help but alternative deliverables would work better
- Example: Goal is "faster diagnosis" and feature is "add help documentation" (helps but search better)
- Suboptimal solution

**3 = Appropriate**
- Feature clearly addresses impact
- Example: Goal is "faster diagnosis" and feature is "AI case recommendation engine" (directly reduces search time)
- Good match

**4 = Optimized**
- Feature is ideal deliverable for impact
- Example: Goal is "faster diagnosis" and feature is "contextual AI case recommendation based on error codes" (perfect match)
- No better alternative

**5 = Innovative**
- Feature over-delivers on impact or enables new impacts
- Example: Goal is "faster diagnosis" and feature is "AI diagnostic assistant that predicts failures before they occur" (enables prevention, not just faster diagnosis)
- Opens new possibilities

**Assessment:** Is deliverable the best way to achieve impact for this actor and goal?

---

### Calculating Traceability Score

**Formula:**
```
Traceability Score = (Goal Quality + Actor Quality + Impact Clarity + Deliverable Appropriateness) / 4
```

**Example:**

```
Feature: AI-powered diagnostic assistant for field technicians

Goal Definition: "Reduce average repair time from 150 minutes to 90 minutes (40% improvement) within 6 months"
Score: 4/5 (specific and measurable, but could be more specific about mechanism)

Actor Identification: "Field technicians performing routine diagnostics (35% of repairs)"
Score: 5/5 (specific, behavioral, segment size clear)

Impact Clarity: "Technicians will complete diagnosis 30% faster by having AI surface relevant previous cases, reducing information search time from 8 min to 5 min"
Score: 5/5 (specific and mechanistic)

Deliverable Appropriateness: "AI case recommendation engine with contextual filtering"
Score: 4/5 (appropriate, though could explore other options like search improvements)

Traceability Score = (4 + 5 + 5 + 4) / 4 = 4.5/5
Interpretation: EXCELLENT - Feature will very likely deliver stated outcome
```

---

### Traceability Interpretation

| Score | Status | Implication |
|-------|--------|------------|
| 4.5-5.0 | Exemplary | Will almost certainly deliver outcome |
| 4.0-4.4 | Excellent | High confidence in outcome delivery |
| 3.5-3.9 | Good | Should deliver outcome, minor validation needed |
| 3.0-3.4 | Adequate | Will likely deliver, but verification important |
| 2.5-2.9 | Poor | Uncertain if will deliver, needs improvement |
| <2.5 | Broken | Don't build - won't deliver outcome |

---

### Gap Identification Framework

**Common Traceability Gaps:**

**Gap Type 1: Vague Goal**
- Symptom: Goal undefined or measured by output ("ship features")
- Impact: Can't measure if deliverable succeeded
- Fix: Define specific, outcome-focused goal
- Timeline: 1-2 days

**Gap Type 2: Actor Unclear**
- Symptom: "Users" or "customers" without specificity
- Impact: Don't know if deliverable serves right users
- Fix: Conduct user research to identify specific segments
- Timeline: 2-4 weeks

**Gap Type 3: Impact Disconnected**
- Symptom: Behavioral change doesn't connect to goal
- Impact: Even if impact happens, goal won't move
- Fix: Validate impact→goal connection through research
- Timeline: 2-4 weeks

**Gap Type 4: Deliverable Misaligned**
- Symptom: Feature won't enable impact
- Impact: Build and discover feature doesn't work
- Fix: Validate deliverable drives impact (prototyping, user testing)
- Timeline: 2-4 weeks

---

### Completeness Checklist

Before building any feature, verify traceability:

**Foundational Questions:**
- [ ] What specific outcome are we after? (Goal)
- [ ] Whose behavior needs to change? (Actor)
- [ ] What will they do differently? (Impact)
- [ ] Why will this feature make that change? (Mechanism)

**Validation Questions:**
- [ ] Is goal measurable? (Can we prove we succeeded?)
- [ ] Is actor specific? (Can we identify/segment them?)
- [ ] Is impact validated? (Do users confirm this would help?)
- [ ] Is deliverable optimal? (Is this the best way to achieve impact?)

**Confidence Questions:**
- [ ] What's our confidence goal will move if impact happens? (High/Medium/Low)
- [ ] What's our confidence impact will happen if we ship? (High/Medium/Low)
- [ ] What's our confidence users will actually use deliverable? (High/Medium/Low)
- [ ] What's our confidence mechanism is correct? (High/Medium/Low)

**Decision:**
- [ ] Traceability Score > 3.5? → Ship
- [ ] Traceability Score 2.5-3.5? → Validate further before building
- [ ] Traceability Score < 2.5? → Don't build (redesign)

---

## Calculation Examples {#calculation-examples}

### Example 1: Complete DNA Assessment

**Project:** Mobile Health Tracking App

**Scenario:** 18-month-old startup, Series A funding, 50K MAU, looking to assess product health.

**Assessment Process:**

#### Step 1: DNA Maturity Scoring

**Purpose DNA Assessment:**
- North star metric exists: "30-day retention rate" (defined)
- Problem is specific: "Chronic disease patients lack real-time health tracking leading to poor medication adherence" (research-backed)
- Scope boundaries exist: "Focus on Type 2 diabetes initially, not general health" (documented)
- Non-negotiables exist: "Privacy is non-negotiable" (enforced in all decisions)

Scoring:
- North star quantifiability: 4/5 (defined but not tracking actual target)
- Problem specificity: 5/5 (evidence-based, specific disease)
- Scope boundaries: 4/5 (clear, enforced)
- Non-negotiables: 4/5 (stated, mostly upheld)

Purpose DNA Maturity = (4 + 5 + 4 + 4) / 4 = **4.25/5 (Level 4: Optimized)**

**User DNA Assessment:**
- Segments: 2 segments identified ("Type 2 diabetes patients" and "Healthcare providers")
- Research: 30 patient interviews, 10 provider interviews (good sample)
- JTBD: Analyzed for primary segment only
- Context: Understand medication adherence behavior, not device experience
- Evidence plan: Informal feedback, no systematic process

Scoring:
- Segment specificity: 3/5 (two segments, could be more granular)
- Research quality: 4/5 (good interviews, but no follow-up surveys)
- JTBD completeness: 3/5 (primary segment done, secondary incomplete)
- Context understanding: 3/5 (medical context good, user context gaps)
- Evidence plan: 2/5 (informal, not systematic)

User DNA Maturity = (3 + 4 + 3 + 3 + 2) / 5 = **3.0/5 (Level 3: Defined, needs improvement)**

**Experience DNA Assessment:**
- Quality standards: "App must never lose data" defined
- MQB gates: Basic criteria exist, not formalized
- Performance standards: "App must sync within 30 seconds" defined
- Accessibility: Not addressed

Scoring:
- Standards documentation: 3/5 (some standards, not comprehensive)
- MQB formalization: 2/5 (criteria exist informally)
- Performance tracking: 3/5 (target exists, not monitored)
- Accessibility standards: 1/5 (not addressed)
- Enforcement: 2/5 (sometimes enforced, sometimes negotiated)

Experience DNA Maturity = (3 + 2 + 3 + 1 + 2) / 5 = **2.2/5 (Level 2: Minimal)**

**Architecture DNA Assessment:**
- Architecture documented: Yes, system design doc exists
- ADRs written: 2 ADRs exist (mobile framework, backend service), most decisions undocumented
- Technical debt: Tracked informally, ~20% of roadmap
- Scalability plan: Vague, not quantified

Scoring:
- Architecture documentation: 3/5 (system design exists, not detailed)
- ADR completeness: 2/5 (only 2 of 8 major decisions documented)
- Technical debt management: 2/5 (aware of but not tracking)
- Scalability planning: 2/5 (vague plan for "10x scale")
- Design for evolution: 2/5 (reactive, not proactive)

Architecture DNA Maturity = (3 + 2 + 2 + 2 + 2) / 5 = **2.2/5 (Level 2: Minimal)**

**Intelligence DNA Assessment:**
- Instrumentation: Basic events tracked (~15 key events)
- North star tracking: Tracked weekly in spreadsheet
- A/B testing: Not operational
- Data literacy: Some team understanding, not widespread
- Evidence culture: Decisions mixed (some data-driven, some opinion)

Scoring:
- Instrumentation: 2/5 (basic, missing key journeys)
- North star tracking: 2/5 (tracked but manual, not real-time)
- A/B testing: 1/5 (no capability, no framework)
- Data literacy: 2/5 (product manager knows, others guessing)
- Evidence culture: 2/5 (some, but HiPPO still dominates)

Intelligence DNA Maturity = (2 + 2 + 1 + 2 + 2) / 5 = **1.8/5 (Level 2: Minimal)**

**Cultural DNA Assessment:**
- Values documented: Mission statement exists, values not explicit
- Quality culture: "Fix it later" sometimes heard
- Learning culture: Informal retrospectives, no systematic learning
- Growth strategy: Hitting growth targets, but not sustainable

Scoring:
- Values definition: 2/5 (mission exists, product values unclear)
- Values enforcement: 2/5 (inconsistently applied)
- Quality-first culture: 2/5 (sometimes, but deadline pressure wins)
- Learning culture: 2/5 (some retrospectives, not systematic)
- Growth sustainability: 2/5 (hitting targets, but through effort, not leverage)

Cultural DNA Maturity = (2 + 2 + 2 + 2 + 2) / 5 = **2.0/5 (Level 2: Minimal)**

#### Step 2: Overall Genome Maturity

```
Genome Maturity = (Purpose 4.25 + User 3.0 + Experience 2.2 + Architecture 2.2 + Intelligence 1.8 + Cultural 2.0) / 6

= 15.45 / 6 = 2.58/5

Status: WEAK FOUNDATION (Level 2-3)
Interpretation: Company has good purpose clarity but critical gaps in user understanding, quality standards, architecture documentation, measurement, and culture. Ready to scale user base only if critical gaps addressed.
```

#### Step 3: Coherence Assessment

**Purpose ↔ User Alignment:** 4/5
- Purpose (diabetes management) aligns with user segment (Type 2 patients)
- User research validates purpose is relevant
- Some coherence gaps: secondary segment (providers) less connected to purpose

**User ↔ Experience Alignment:** 2/5
- User context (mobile, on-the-go, quick checks) requires mobile-first experience
- Experience standards are generic (data safety), not user context optimized
- No performance standards for mobile network conditions (users in rural areas with poor connectivity)

**Experience ↔ Architecture Alignment:** 3/5
- Architecture supports core requirements (data safety)
- Architecture doesn't optimize for mobile constraints (offline capability not planned)
- Some mismatch between quality aspirations and architecture capability

**Architecture ↔ Intelligence Alignment:** 2/5
- Instrumentation barely adequate for current needs
- Architecture doesn't support A/B testing (major limitation)
- Scaling architecture and metrics capability will require redesign

**Intelligence ↔ Cultural Alignment:** 2/5
- Evidence exists but culture doesn't fully value it
- HiPPO decisions still happen regularly
- No systematic learning cycle

**All DNAs ↔ Purpose Alignment:** 3/5
- Purpose is clear but other DNAs don't fully serve it
- User DNA validates purpose but incompletely (provider segment weaker)
- Experience DNA doesn't optimize for purpose (no mobile-first approach for patients on-the-go)

**Coherence Score:** (4 + 2 + 3 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 2 + 2 + 2 + 2 + 2) / 15 = **2.67/5**

**Status: LOOSE COHERENCE (Level 2-3)**
- Some alignment between key DNAs but significant gaps
- Easy for team to pull in different directions
- Conflicts likely when difficult decisions needed

---

### Example 2: Feature Traceability Scorecard

**Feature:** Push notification reminders for medication timing

**Hierarchy Assessment:**

**Goal:** "Improve medication adherence for 80% of users, increasing 30-day retention by 15%"
- Specific: Yes (80% adherence, 15% retention improvement)
- Measurable: Yes (can track in app)
- Outcome-focused: Yes (behavioral and business outcome)
Score: 4/5 (could quantify baseline and timeline more)

**Actor:** "Type 2 diabetes patients with primary medication regimen (not insulin)"
- Specific: Yes (Type 2, specific patient type)
- Segment size: ~70% of current user base (relevant)
- Behavior predictable: Yes (medication schedule patterns)
Score: 5/5 (well-defined actor)

**Impact:** "Patients will take 90% of scheduled medications on time (vs. 65% today) because reminders will prompt them at the right time, preventing missed doses"
- Specific: Yes (90% adherence rate target)
- Mechanistic: Yes (reminders → prompts → compliance)
- Validated: Partially (not user tested yet)
Score: 3/5 (specific but not validated)

**Deliverable:** "Contextual push notifications at optimal reminder time (determined by historical app usage patterns and patient preference)"
- Optimal solution: Yes (more targeted than generic reminders)
- Alternative explored: Some alternatives considered (SMS, email, in-app)
- Feasibility: Architecture supports (mobile push already in place)
Score: 4/5 (good solution, could explore more alternatives)

**Traceability Score = (4 + 5 + 3 + 4) / 4 = 4.0/5**

**Interpretation: EXCELLENT**
- High confidence this feature will improve adherence and retention
- Well-aligned hierarchy with strong goal and actor clarity
- Validation gap: Should user test impact before building

**Recommendation: CONDITIONAL SHIP**
- Proceed with build
- Validate impact with 10-15 user interviews before launch
- Monitor adherence metrics closely post-launch
- Be prepared to iterate on reminder timing if impact is lower than expected

---

## Usage Guidelines {#usage-guidelines}

### When to Use Each Calculator

**DNA Maturity Scoring:**
- Quarterly genome assessments
- Product health evaluations
- New hire onboarding (assess product health)
- Strategic planning (identify improvement focus)
- Team alignment (shared baseline understanding)

**Genome Coherence Scoring:**
- During strategy conflicts (are DNAs misaligned?)
- Product pivot or strategic shift (reassess coherence)
- New DNA development (ensure coherent with existing)
- Team expansion (evaluate culture integration challenges)
- Quarterly reviews (measure coherence improvement)

**MQB Gate Pass Rate:**
- After each release (calculate pass rate)
- Mid-quarter (corrective action if trending low)
- When quality issues spike (identify gate failures)
- Culture shift work (measure quality culture improvement)
- Leadership reporting (demonstrate quality commitment)

**North Star Impact Estimation:**
- Before building any major feature
- Roadmap prioritization (compare impact estimates)
- Success criteria definition (set expectations)
- Post-launch review (compare prediction vs. actual)
- Resource allocation (bigger impact → more resources)

**Builder's Hierarchy Traceability:**
- Feature specification (before starting)
- Roadmap planning (ensure all work traces to goals)
- Prioritization discussions (high-traceability features first)
- Post-launch review (did feature deliver expected outcome?)
- Strategy communication (show team why features matter)

---

### Quick Assessment Template

Use this for rapid assessment:

```markdown
# DNA Assessment Summary

**Project:** [Project Name]
**Assessment Date:** [Date]
**Assessed By:** [Name]

## Maturity Scores

| DNA | Score | Level | Notes |
|-----|-------|-------|-------|
| Purpose | ___/5 | ____ | |
| User | ___/5 | ____ | |
| Experience | ___/5 | ____ | |
| Architecture | ___/5 | ____ | |
| Intelligence | ___/5 | ____ | |
| Cultural | ___/5 | ____ | |
| **Overall** | **___/5** | **____** | |

## Coherence Assessment

| Pair | Score | Status |
|------|-------|--------|
| Purpose ↔ User | ___/5 | |
| User ↔ Experience | ___/5 | |
| Experience ↔ Architecture | ___/5 | |
| Architecture ↔ Intelligence | ___/5 | |
| Intelligence ↔ Cultural | ___/5 | |
| **Overall Coherence** | **___/5** | |

## MQB Metrics

- Last Release: [Date]
- Features Shipped: ___
- Features Passing All Gates: ___
- **Pass Rate: ____%**
- Gate Failures: [List]

## Key Findings

- Strongest DNA: [Which one?]
- Weakest DNA: [Which one?]
- Critical Gaps: [List top 3]
- Biggest Coherence Issue: [Which pair?]

## Recommended Actions

**Immediate (Next Sprint):**
1. [Action]
2. [Action]

**Short-term (Next Quarter):**
1. [Action]
2. [Action]

**Medium-term (Next 6 Months):**
1. [Action]
2. [Action]

## Success Metrics

When you've improved:
- [DNA] from [current] to [target]: [Outcome]
- [DNA] from [current] to [target]: [Outcome]
- Coherence from [current] to [target]: [Outcome]
```

---

### Integration with Product Genome Workflows

These calculators integrate with:

**1. Genome Assessment Workflow**
- Use all calculators to assess product health
- Output: Comprehensive genome assessment report
- Action: Improvement roadmap

**2. Feature Development Workflow**
- Use North Star Impact before building
- Use Traceability during specification
- Use MQB Gates before shipping
- Track improvements to pass rate

**3. Strategic Planning**
- Use DNA Maturity for capability gaps
- Use Coherence for strategy conflicts
- Use pass rate for quality baseline
- Plan improvements quarterly

**4. Culture & Learning**
- Use results to teach Product Genome framework
- Celebrate improvements (quality culture)
- Use as data for retrospectives (evidence-based learning)
- Track coherence improvement (team alignment)

---

### Product Genome Alignment

All calculations embody Product Genome principles:

**1. Evidence Over Assumptions**
- DNA scores based on documented assessment, not opinion
- Calculations require evidence (research, metrics, history)
- Results provide data for decisions

**2. Quality Over Speed**
- MQB gates enforce quality (quality as non-negotiable)
- Traceability ensures building right thing
- Coherence prevents waste from misalignment

**3. Purpose Over Features**
- Hierarchy traceability connects features to outcomes
- DNA scores measure strategic alignment
- Coherence ensures purpose guides all decisions

**4. Coherence Across DNAs**
- Coherence calculator measures cross-DNA alignment
- Pair scores identify specific misalignments
- Results drive integrated improvement

**5. User-Centricity**
- User DNA heavily weighted in assessments
- North Star Impact estimates user value
- Traceability ensures user outcomes drive features

---

## Conclusion

These calculation methods transform Product Genome from concept to measurable practice:

- **DNA Maturity** gives you objective DNA health assessment
- **Coherence Scoring** reveals alignment gaps before they cause problems
- **MQB Pass Rate** enforces quality culture
- **North Star Impact** transforms feature development into hypothesis-driven approach
- **Traceability** ensures every feature serves a strategic goal

Used together, they provide a comprehensive measurement system for building excellent products.

---

**Remember:** Calculators are instruments of thinking, not just number generators. Use these frameworks to have better conversations about product health, not to replace judgment.

---

**Product Genome Framework © 2025**
**Genome Calculator Utilities v1.0**

