<!-- Powered by Product Genome™ Framework -->

# Define Minimum Quality Bar (MQB) Task

## Purpose

To establish a comprehensive Minimum Quality Bar (MQB) that defines the non-negotiable quality gates every product increment must pass before shipping. The MQB prevents quality debt accumulation, ensures consistent user experience, and protects the Product Genome from erosion through compromised standards.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for MQB definition. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `mqb.*`, `genomeDNA.*`

### 1. Understand MQB Context and Purpose

#### 1.1 Explain MQB Concept to User

Present MQB concept:

```
The Minimum Quality Bar (MQB) is a set of 12 quality gates that EVERY product increment
must pass before shipping to users. Think of MQB as your quality immune system:

- It prevents quality debt from accumulating
- It ensures every feature meets baseline standards
- It protects user experience from degradation
- It enforces Product Genome principles

MQB is NOT about perfection - it's about preventing regressions and maintaining
a consistent quality baseline. Features can exceed MQB, but NEVER ship below it.

The 12 MQB Gates:
1. Purpose Alignment - Serves stated purpose
2. User Need Validation - Solves validated user need
3. Experience Standards - Meets UX quality thresholds
4. Performance Standards - Meets speed/efficiency targets
5. Accessibility Standards - Usable by all user segments
6. Security Standards - No critical vulnerabilities
7. Data Integrity - Handles data correctly and safely
8. Error Handling - Fails gracefully, recovers well
9. Documentation - User-facing help available
10. Instrumentation - Trackable and measurable
11. Technical Quality - Clean, maintainable code
12. Regression Prevention - Doesn't break existing functionality
```

#### 1.2 Assess Current State

Ask user:
- Do you have existing quality standards or gates?
- What quality issues have you experienced in the past?
- What quality compromises have caused user pain?
- Are there quality-related post-launch fixes happening frequently?

**Identify Pain Points:**
- Features shipped with bugs → Need stronger testing gates
- Performance issues after launch → Need performance gates
- Accessibility complaints → Need accessibility gates
- Security incidents → Need security gates

### 2. Load Product Genome Context

MQB must be grounded in Product Genome DNAs.

#### 2.1 Load Relevant DNAs

- Load `docs/dna/purpose-dna.md` (for Purpose Alignment gate)
- Load `docs/dna/user-dna.md` (for User Need Validation gate)
- Load `docs/dna/experience-dna.md` (for Experience Standards gate)
- Load `docs/dna/architecture-dna.md` (for Technical Quality gate)
- Load `docs/dna/intelligence-dna.md` (for Instrumentation gate)

**If DNAs are missing:**
- HALT and inform user: "MQB requires at least Purpose DNA and Experience DNA to be defined. Please create these DNAs first."
- Offer to create DNAs or proceed with lightweight MQB

#### 2.2 Extract Quality Thresholds from DNAs

From Experience DNA:
- Performance thresholds (load time, response time)
- Accessibility standards (WCAG level, screen reader support)
- UX quality criteria (usability, consistency)
- Quality principles

From Architecture DNA:
- Code quality standards (coverage, complexity)
- Security requirements
- Technical debt policies

From Intelligence DNA:
- Instrumentation requirements
- Metrics tracking needs

### 3. Define Each MQB Gate (Interactive)

For each of the 12 gates, elicit specific, measurable criteria.

#### Gate 1: Purpose Alignment

**Elicit:**
- How do we verify a feature serves the product's purpose?
- What questions must be answered affirmatively?
- What documentation is required?

**Define Criteria:**
- [ ] Feature maps to Purpose DNA goal or objective
- [ ] Feature supports north star metric (or doesn't harm it)
- [ ] Feature aligns with scope boundaries (in-scope, not out-of-scope)
- [ ] Feature respects non-negotiables
- [ ] Purpose alignment documented in feature spec

**Validation Method:**
- Purpose alignment questionnaire answered
- Product Owner sign-off on alignment

**Examples:**
- "Feature must answer: Which Purpose DNA objective does this serve?"
- "Feature must not violate any non-negotiable in Purpose DNA"

#### Gate 2: User Need Validation

**Elicit:**
- How do we verify this solves a real user need?
- What evidence is required?
- What user validation is necessary?

**Define Criteria:**
- [ ] User need documented with evidence (research, interviews, data)
- [ ] Maps to User DNA segment and JTBD
- [ ] User validation conducted (prototype, usability test, or beta)
- [ ] User acceptance criteria defined and met
- [ ] Evidence of user need documented in feature spec

**Validation Method:**
- User research artifacts attached
- User testing results showing validation
- Product Owner confirms user need validated

**Examples:**
- "Minimum 5 user interviews showing need for this feature"
- "Usability test with 80%+ task completion rate"

#### Gate 3: Experience Standards

**Elicit:**
- What UX quality standards must every feature meet?
- What experience thresholds are defined in Experience DNA?
- What consistency requirements exist?

**Define Criteria (from Experience DNA):**
- [ ] Meets UX consistency standards (follows design system)
- [ ] Meets usability thresholds (task success rate, error rate)
- [ ] Responsive design implemented (mobile, tablet, desktop)
- [ ] Visual design meets quality standards
- [ ] Interaction patterns follow established conventions
- [ ] User flows are intuitive (validated via testing)

**Validation Method:**
- Design review approval
- Usability testing results
- Design system compliance check

**Examples:**
- "Task success rate ≥ 90% in usability testing"
- "Zero deviations from design system (or approved exceptions)"

#### Gate 4: Performance Standards

**Elicit:**
- What are acceptable performance thresholds?
- What metrics matter for your users?
- What Experience DNA performance criteria exist?

**Define Criteria (from Experience DNA):**
- [ ] Page load time ≤ [X seconds] (e.g., 2 seconds)
- [ ] API response time (p95) ≤ [X ms] (e.g., 200ms)
- [ ] Mobile app startup ≤ [X seconds]
- [ ] No performance regressions vs. baseline
- [ ] Performance tested under realistic load
- [ ] Performance metrics tracked and passing

**Validation Method:**
- Performance test results attached
- Automated performance tests passing
- Metrics within thresholds

**Examples:**
- "Page load (p95) ≤ 2 seconds on 3G connection"
- "API response ≤ 200ms for 95% of requests"

#### Gate 5: Accessibility Standards

**Elicit:**
- What accessibility level is committed in Experience DNA?
- What user segments require accessibility support?
- What assistive technologies must be supported?

**Define Criteria (from Experience DNA):**
- [ ] WCAG [level] compliance (e.g., WCAG 2.1 AA)
- [ ] Screen reader compatible (tested with [specific tools])
- [ ] Keyboard navigation fully functional
- [ ] Color contrast meets standards
- [ ] Alt text for images and meaningful content
- [ ] Focus indicators visible
- [ ] Accessibility audit passing

**Validation Method:**
- Automated accessibility testing (Axe, Lighthouse)
- Manual screen reader testing
- Keyboard navigation testing
- Accessibility audit report

**Examples:**
- "WCAG 2.1 AA compliance verified via Axe scan (0 violations)"
- "Screen reader tested with NVDA and VoiceOver"

#### Gate 6: Security Standards

**Elicit:**
- What security requirements exist?
- What security risks are unacceptable?
- What security testing is required?

**Define Criteria (from Architecture DNA):**
- [ ] No critical or high-severity vulnerabilities
- [ ] Authentication and authorization implemented correctly
- [ ] Input validation and sanitization in place
- [ ] Sensitive data encrypted (at rest and in transit)
- [ ] OWASP Top 10 mitigations applied
- [ ] Security review passed (manual or automated)
- [ ] Dependency vulnerabilities resolved

**Validation Method:**
- Security scan results (no critical/high issues)
- Security review sign-off
- Penetration testing (for high-risk features)

**Examples:**
- "Zero critical/high vulnerabilities in security scan"
- "Authentication tested against common attacks (SQL injection, XSS)"

#### Gate 7: Data Integrity

**Elicit:**
- How do we ensure data is handled correctly?
- What data validation is required?
- What are the consequences of data corruption?

**Define Criteria:**
- [ ] Data validation implemented (client and server-side)
- [ ] Data storage uses appropriate constraints and types
- [ ] Data migrations tested and reversible
- [ ] Data integrity tests passing
- [ ] No data loss scenarios (tested)
- [ ] Backup and recovery mechanisms in place (if applicable)
- [ ] Concurrent data access handled correctly

**Validation Method:**
- Data integrity test suite passing
- Edge case testing (boundary values, invalid inputs)
- Migration testing in staging

**Examples:**
- "Data validation rejects invalid inputs (100% coverage)"
- "Data migration tested with rollback capability"

#### Gate 8: Error Handling

**Elicit:**
- How should the system behave when errors occur?
- What error states have we seen cause user pain?
- What graceful degradation is required?

**Define Criteria:**
- [ ] All error states have user-friendly messages
- [ ] Errors don't expose sensitive information or stack traces
- [ ] System recovers gracefully from errors
- [ ] Critical errors are logged and monitored
- [ ] User can recover from error states without data loss
- [ ] Offline scenarios handled (if applicable)
- [ ] Network failures handled gracefully

**Validation Method:**
- Error scenario testing (simulate failures)
- Error message review
- Logging verification

**Examples:**
- "All API errors return user-friendly messages (no stack traces)"
- "Network failure shows helpful message and retry option"

#### Gate 9: Documentation

**Elicit:**
- What user-facing documentation is required?
- What help or onboarding is needed?
- What documentation exists today?

**Define Criteria:**
- [ ] User-facing help documentation exists
- [ ] In-app guidance or tooltips for complex features
- [ ] Release notes updated with user-facing changes
- [ ] API documentation updated (if applicable)
- [ ] Error messages include helpful guidance
- [ ] FAQs or troubleshooting guide updated

**Validation Method:**
- Documentation review
- Help content accessible from feature
- Documentation completeness check

**Examples:**
- "Help documentation includes step-by-step guide for new feature"
- "In-app tooltips explain non-obvious UI elements"

#### Gate 10: Instrumentation

**Elicit:**
- What metrics must be tracked for this feature?
- How will we know if the feature is successful?
- What Intelligence DNA requirements exist?

**Define Criteria (from Intelligence DNA):**
- [ ] Feature usage tracked (events, actions)
- [ ] Success/failure metrics instrumented
- [ ] Performance metrics captured
- [ ] Error rates tracked
- [ ] User journey analytics in place
- [ ] North star metric impact trackable (if applicable)
- [ ] A/B test infrastructure ready (if experiment)

**Validation Method:**
- Analytics instrumentation verified in staging
- Metrics visible in analytics dashboard
- Event tracking tested

**Examples:**
- "Feature usage events tracked (feature accessed, action completed)"
- "Error rates monitored and alerting configured"

#### Gate 11: Technical Quality

**Elicit:**
- What code quality standards exist?
- What technical debt is unacceptable?
- What Architecture DNA standards apply?

**Define Criteria (from Architecture DNA):**
- [ ] Code review completed and approved
- [ ] Test coverage ≥ [X%] (e.g., 80%)
- [ ] No critical code quality issues (linting, static analysis)
- [ ] Cyclomatic complexity ≤ [X] (e.g., 10)
- [ ] No duplicated code beyond threshold
- [ ] Architecture patterns followed
- [ ] Technical debt documented and acceptable

**Validation Method:**
- Code review approval
- Automated tests passing
- Code quality tools passing (SonarQube, ESLint, etc.)

**Examples:**
- "Test coverage ≥ 80% for new code"
- "Zero critical/high issues in SonarQube scan"

#### Gate 12: Regression Prevention

**Elicit:**
- How do we ensure we don't break existing functionality?
- What regression testing is in place?
- What critical user flows must not break?

**Define Criteria:**
- [ ] Existing automated tests passing (100%)
- [ ] Regression test suite executed and passing
- [ ] Critical user journeys tested (smoke tests)
- [ ] No breaking changes to APIs (or properly versioned)
- [ ] Backward compatibility maintained
- [ ] Deployment rollback plan exists

**Validation Method:**
- Full test suite passing (unit, integration, E2E)
- Regression tests executed in staging
- Smoke tests passing

**Examples:**
- "All 500+ existing tests passing (zero failures)"
- "Critical user flows tested in staging (login, checkout, etc.)"

### 4. Define MQB Enforcement Process

#### 4.1 MQB Checklist Integration

**Determine:**
- When is MQB checklist run? (Before merging code? Before deploying? Before release?)
- Who is responsible for validating each gate?
- What happens if a gate fails?

**Define Process:**
1. **Pre-Merge:** Some gates validated before code merge (technical quality, tests)
2. **Pre-Deploy:** Most gates validated before deploying to staging/production
3. **Pre-Release:** All gates must pass before releasing to users

**Gate Ownership:**
- Engineering: Technical Quality, Regression Prevention, Performance
- Product: Purpose Alignment, User Need Validation
- Design: Experience Standards, Accessibility
- QA: All gates validation coordination
- Security: Security Standards
- DevOps: Deployment readiness

#### 4.2 Exception Handling Process

**Define:**
- Can MQB gates be bypassed? (Answer: RARELY, with explicit process)
- Who can approve exceptions? (Senior leadership only)
- What documentation is required for exceptions?

**Exception Process:**
1. Document specific gate failure and reason
2. Assess risk and user impact
3. Define mitigation plan and timeline for remediation
4. Get explicit approval from [role] (e.g., VP Product + VP Engineering)
5. Track exception and ensure remediation

**Exception Tracking:**
- Log all exceptions in MQB exception log
- Review exceptions quarterly
- Celebrate when exceptions are zero (quality culture)

#### 4.3 Cultural Commitment

**Emphasize:**
- Saying "no, not ready to ship" is CELEBRATED, not punished
- MQB protects users and team from quality debt
- Shipping slower with quality beats shipping fast with defects
- MQB prevents "feature factory" syndrome

**Team Commitment:**
- All team members commit to MQB compliance
- Leadership supports rejecting features below MQB
- Retrospectives include MQB gate pass/fail analysis
- MQB is revisited quarterly and improved

### 5. Document MQB Definition

#### 5.1 Generate MQB Definition Document

Using template `mqb-definition-tmpl.yaml`, create comprehensive MQB document:

**Document Structure:**
```markdown
# Minimum Quality Bar (MQB) Definition

## Purpose
[Why MQB exists, what it protects]

## The 12 MQB Gates

### Gate 1: Purpose Alignment
**Criteria:**
- [Specific, measurable criteria]
**Validation Method:**
- [How to validate]
**Owner:** [Role]

[Repeat for all 12 gates]

## MQB Enforcement Process
[When and how MQB is validated]

## Exception Handling
[Process for exceptions]

## Cultural Commitment
[Team agreement and expectations]

## MQB Evolution
[How MQB is reviewed and improved]
```

#### 5.2 Save MQB Document

- Save to: `docs/mqb-definition.md` (or path from config)
- Ensure version control
- Make accessible to entire team

### 6. Create MQB Gate Checklist

Using template `mqb-gate-checklist.md`, create operational checklist:

**Checklist should:**
- List all 12 gates with pass/fail checkboxes
- Include validation evidence fields
- Track who validated each gate
- Link to supporting documentation
- Be used for every feature before shipping

Save to: `.tpg-core/checklists/mqb-gate-checklist.md`

### 7. Operationalize MQB

#### 7.1 Integrate into Workflow

**Define integration points:**
- Add MQB checklist to Definition of Done
- Add MQB validation to deployment checklist
- Create MQB review step in CI/CD pipeline (automated gates)
- Add MQB status to feature tracking (Jira, Linear, etc.)

#### 7.2 Automate Where Possible

**Identify automatable gates:**
- Gate 4 (Performance): Automated performance tests
- Gate 5 (Accessibility): Automated accessibility scans
- Gate 6 (Security): Automated security scans
- Gate 11 (Technical Quality): Automated code quality checks
- Gate 12 (Regression Prevention): Automated test suites

**Setup automation:**
- Integrate tools into CI/CD pipeline
- Configure thresholds and failure conditions
- Generate automated gate status reports

#### 7.3 Train Team on MQB

**Training includes:**
- MQB purpose and philosophy
- Each gate's criteria and validation method
- How to run MQB checklist
- Exception process
- Cultural expectations (celebrating "no")

**Training deliverables:**
- Team workshop conducted
- MQB quick reference guide created
- MQB integrated into onboarding

### 8. MQB Review and Evolution

#### 8.1 Schedule Regular Reviews

**Define:**
- MQB reviewed quarterly (or after major releases)
- Review includes:
  - Are gates still relevant?
  - Are criteria still appropriate?
  - Have we had gate failures that caused issues?
  - Should gates be tightened or adjusted?

#### 8.2 Continuous Improvement

**Track:**
- Gate pass/fail rates
- Common gate failures
- Exceptions granted
- User issues related to quality gaps

**Improve:**
- Tighten gates if quality issues persist
- Adjust criteria based on learnings
- Add new gates if new quality dimensions emerge
- Remove gates that aren't adding value (rare)

### 9. Success Metrics for MQB

**Define success criteria:**
- MQB compliance rate ≥ 95% (few exceptions)
- Post-launch critical defects ↓ by [X%]
- User-reported quality issues ↓ by [X%]
- Quality debt not increasing (stable or decreasing)
- Team celebrates "no-ship" decisions

### 10. Present MQB to User

**Deliverables:**
1. `docs/mqb-definition.md` - Comprehensive MQB document
2. `.tpg-core/checklists/mqb-gate-checklist.md` - Operational checklist
3. MQB enforcement process documented
4. Automation plan for gates
5. Team training plan

**Confirm with user:**
- "Does this MQB protect the quality you expect?"
- "Are the criteria realistic and achievable?"
- "Is the enforcement process clear?"
- "Are you committed to supporting MQB (even when it slows shipping)?"

**Celebrate commitment:**
- This is a significant quality commitment
- MQB will prevent quality debt accumulation
- MQB will protect users and Product Genome

---

## Error Handling

### Unrealistic Gates
- Error: "Gate criteria too strict to achieve"
- Action: Adjust to realistic but challenging thresholds
- Start with achievable baseline, tighten over time

### Missing DNA Context
- Error: "Experience DNA not defined, can't set thresholds"
- Action: Create lightweight thresholds, refine when DNA exists

### Team Resistance
- Error: "Team pushback on MQB (too slow)"
- Action: Explain quality debt cost, show long-term benefits
- Start with subset of critical gates, expand gradually

---

## Task Completion

- Status: [Draft / Complete]
- MQB Definition: [Created / Updated]
- File Locations:
  - `docs/mqb-definition.md`
  - `.tpg-core/checklists/mqb-gate-checklist.md`
- Next Recommended Action: [Train team / Integrate into workflow / Run first MQB validation]
