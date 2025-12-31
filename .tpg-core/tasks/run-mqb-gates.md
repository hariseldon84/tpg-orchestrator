<!-- Powered by Product Genome™ Framework -->

# Run MQB Gates Validation Task

## Purpose

To execute comprehensive validation of all 12 Minimum Quality Bar (MQB) gates for a product increment before shipping. This task ensures systematic quality validation, identifies gaps, and enforces the quality immune system that protects the Product Genome.

## Task Parameters

This task requires:
- Feature or increment to be validated
- MQB definition document (`docs/mqb-definition.md`)
- Product Genome DNAs (for gate criteria)

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load MQB Configuration and Context

- Load `.tpg-core/core-config.yaml` from the project root
- Load `docs/mqb-definition.md` (MQB gate definitions)
- Load MQB gate checklist template from `.tpg-core/checklists/mqb-gate-checklist.md`
- Load relevant Product Genome DNAs

**If MQB not defined:**
- HALT and inform user: "MQB gates are not defined. Run 'define-mqb' task first to establish Minimum Quality Bar."

### 1. Identify Feature/Increment to Validate

#### 1.1 Gather Feature Context

**Elicit from user:**
- What feature or increment are we validating?
- What is the scope of this increment?
- Is this a new feature, enhancement, or bug fix?
- What user story or requirement does this address?
- What is the target release date/version?

**Collect artifacts:**
- Feature specification or user story
- Design mockups or prototypes
- Technical implementation details
- Related pull requests or code changes

### 2. Initialize MQB Validation Session

#### 2.1 Create Validation Instance

Create new validation checklist instance:
- Filename: `mqb-validation-[feature-name]-[date].md`
- Location: `docs/mqb-validations/` (or configured location)
- Include feature context and metadata

**Checklist Header:**
```markdown
# MQB Gate Validation: [Feature Name]

**Feature:** [Name and brief description]
**Date:** [Date]
**Validator(s):** [Names/Roles]
**Target Release:** [Version/Date]
**Status:** In Progress

## Feature Context
[Brief description of what's being validated]
```

#### 2.2 Set Expectations

Inform user:
```
We will now validate all 12 MQB gates. For each gate:
1. Review the gate criteria
2. Gather evidence of compliance
3. Mark as PASS, FAIL, or NEEDS IMPROVEMENT
4. Document findings and evidence

A feature must PASS all 12 gates to ship. Any FAIL blocks release.
```

### 3. Execute Gate Validation (All 12 Gates)

For each gate, systematically validate criteria.

---

## GATE 1: Purpose Alignment

### Criteria Review

Present criteria from MQB definition:
- Feature maps to Purpose DNA goal or objective
- Feature supports north star metric (or doesn't harm it)
- Feature aligns with scope boundaries (in-scope, not out-of-scope)
- Feature respects non-negotiables
- Purpose alignment documented

### Evidence Collection

**Ask user:**
- "Does this feature serve a stated Purpose DNA objective? Which one?"
- "How does this impact the north star metric?"
- "Is this within our defined scope boundaries?"
- "Does this violate any non-negotiables?"
- "Where is purpose alignment documented?"

**Gather evidence:**
- Link to Purpose DNA section this serves
- North star metric impact analysis
- Scope boundary confirmation
- Non-negotiable compliance check

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Feature clearly serves purpose, aligns with scope, respects non-negotiables
- ⚠️ **NEEDS IMPROVEMENT:** Alignment unclear or weakly documented, needs refinement
- ❌ **FAIL:** Feature doesn't serve purpose, violates scope, or breaks non-negotiables

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Links and documentation]
- Notes: [Observations, concerns, or questions]

**If FAIL:**
- Gate blocks release
- Recommend: Pivot feature to align with purpose, or reject feature

---

## GATE 2: User Need Validation

### Criteria Review

Present criteria:
- User need documented with evidence (research, interviews, data)
- Maps to User DNA segment and JTBD
- User validation conducted (prototype, usability test, or beta)
- User acceptance criteria defined and met
- Evidence documented

### Evidence Collection

**Ask user:**
- "What user need does this solve? What's the evidence?"
- "Which User DNA segment and JTBD does this serve?"
- "What user validation was conducted?"
- "What were the results? Did users validate the need?"
- "Where is user validation documented?"

**Gather evidence:**
- User research reports or interview notes
- User DNA segment and JTBD mapping
- Usability test results or beta feedback
- User acceptance criteria and results

### Validation Decision

**Evaluate:**
- ✅ **PASS:** User need validated with evidence, user testing positive
- ⚠️ **NEEDS IMPROVEMENT:** Limited evidence, or user validation inconclusive
- ❌ **FAIL:** No user validation, or users rejected the approach

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Research links, test results]
- Notes: [User feedback summary]

**If FAIL:**
- Gate blocks release
- Recommend: Conduct user research/testing, or reject feature if users don't need it

---

## GATE 3: Experience Standards

### Criteria Review

Present criteria from Experience DNA:
- Meets UX consistency standards (design system compliance)
- Meets usability thresholds (task success rate, error rate)
- Responsive design implemented
- Visual design quality standards met
- Interaction patterns follow conventions
- User flows validated as intuitive

### Evidence Collection

**Ask user:**
- "Does this follow the design system? Any deviations?"
- "What are the usability testing results?"
- "Is responsive design implemented and tested?"
- "Has design review been completed?"
- "Where is UX validation documented?"

**Gather evidence:**
- Design review approval
- Design system compliance check
- Usability testing results (task success rate, time on task, error rate)
- Responsive design testing (mobile, tablet, desktop)

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Design system compliant, usability metrics meet thresholds
- ⚠️ **NEEDS IMPROVEMENT:** Minor deviations, usability borderline
- ❌ **FAIL:** Design inconsistent, usability poor, not responsive

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Design review, usability results]
- Notes: [Specific issues or concerns]

**If FAIL:**
- Gate blocks release
- Recommend: Redesign to meet standards, conduct additional usability testing

---

## GATE 4: Performance Standards

### Criteria Review

Present criteria from Experience DNA:
- Page load time ≤ [threshold] (e.g., 2 seconds)
- API response time (p95) ≤ [threshold] (e.g., 200ms)
- Mobile performance meets targets
- No performance regressions
- Performance tested under realistic load

### Evidence Collection

**Ask user:**
- "What are the performance test results?"
- "Do page loads meet the threshold?"
- "Do API responses meet the threshold?"
- "Has mobile performance been tested?"
- "Are there any performance regressions?"

**Gather evidence:**
- Performance test results (Lighthouse, WebPageTest, load tests)
- API response time metrics (p50, p95, p99)
- Mobile performance results
- Baseline comparison (regression analysis)

### Validation Decision

**Evaluate:**
- ✅ **PASS:** All performance metrics within thresholds, no regressions
- ⚠️ **NEEDS IMPROVEMENT:** Minor threshold misses, close to targets
- ❌ **FAIL:** Significant performance issues, major regressions

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Test results, metrics]
- Notes: [Specific performance issues]

**If FAIL:**
- Gate blocks release
- Recommend: Performance optimization, caching, code refactoring

---

## GATE 5: Accessibility Standards

### Criteria Review

Present criteria from Experience DNA:
- WCAG [level] compliance (e.g., WCAG 2.1 AA)
- Screen reader compatible
- Keyboard navigation functional
- Color contrast meets standards
- Alt text for images
- Accessibility audit passing

### Evidence Collection

**Ask user:**
- "What are the accessibility test results?"
- "Has screen reader testing been conducted?"
- "Is keyboard navigation fully functional?"
- "Are there any accessibility violations?"

**Gather evidence:**
- Automated accessibility scan results (Axe, Lighthouse, WAVE)
- Manual screen reader testing (NVDA, JAWS, VoiceOver)
- Keyboard navigation testing
- Color contrast analysis

### Validation Decision

**Evaluate:**
- ✅ **PASS:** WCAG compliant, zero critical violations, screen reader works
- ⚠️ **NEEDS IMPROVEMENT:** Minor violations, some navigation issues
- ❌ **FAIL:** Critical accessibility violations, screen reader broken

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Audit results, testing notes]
- Notes: [Specific violations or issues]

**If FAIL:**
- Gate blocks release
- Recommend: Fix accessibility violations, retest

---

## GATE 6: Security Standards

### Criteria Review

Present criteria from Architecture DNA:
- No critical or high-severity vulnerabilities
- Authentication and authorization correct
- Input validation and sanitization
- Sensitive data encrypted
- OWASP Top 10 mitigations applied
- Security review passed

### Evidence Collection

**Ask user:**
- "What are the security scan results?"
- "Has security review been completed?"
- "Are there any vulnerabilities?"
- "How is sensitive data handled?"

**Gather evidence:**
- Security scan results (SAST, DAST, dependency scans)
- Security review sign-off
- Penetration testing results (if applicable)
- Authentication/authorization testing

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Zero critical/high vulnerabilities, security review approved
- ⚠️ **NEEDS IMPROVEMENT:** Low/medium vulnerabilities, mitigations planned
- ❌ **FAIL:** Critical or high vulnerabilities present

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Scan results, review approval]
- Notes: [Specific vulnerabilities]

**If FAIL:**
- Gate blocks release (security is non-negotiable)
- Recommend: Fix vulnerabilities immediately, retest

---

## GATE 7: Data Integrity

### Criteria Review

Present criteria:
- Data validation implemented (client and server)
- Data storage uses proper constraints
- Data migrations tested and reversible
- No data loss scenarios
- Backup/recovery in place
- Concurrent access handled

### Evidence Collection

**Ask user:**
- "How is data validated?"
- "Have edge cases been tested (boundary values, invalid inputs)?"
- "Are data migrations tested? Can they roll back?"
- "How is concurrent data access handled?"

**Gather evidence:**
- Data validation test results
- Edge case testing (invalid inputs, boundary conditions)
- Migration testing in staging
- Concurrency testing

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Data validation robust, migrations tested, no data loss risk
- ⚠️ **NEEDS IMPROVEMENT:** Some edge cases not covered, migrations need work
- ❌ **FAIL:** Data validation weak, risk of data loss or corruption

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Test results]
- Notes: [Specific data integrity concerns]

**If FAIL:**
- Gate blocks release (data integrity is critical)
- Recommend: Strengthen validation, test migrations thoroughly

---

## GATE 8: Error Handling

### Criteria Review

Present criteria:
- All error states have user-friendly messages
- Errors don't expose sensitive info
- System recovers gracefully
- Errors logged and monitored
- User can recover without data loss
- Offline scenarios handled

### Evidence Collection

**Ask user:**
- "What happens when errors occur? Is it user-friendly?"
- "Have you tested error scenarios (network failures, invalid inputs)?"
- "Are errors logged? Are alerts configured?"
- "Can users recover from errors?"

**Gather evidence:**
- Error scenario testing results
- Error message review (user-friendliness)
- Logging and monitoring verification
- Recovery testing

### Validation Decision

**Evaluate:**
- ✅ **PASS:** All error states handled gracefully, user-friendly messages, logging works
- ⚠️ **NEEDS IMPROVEMENT:** Some error states not handled, messages could improve
- ❌ **FAIL:** Errors cause crashes, expose stack traces, poor user experience

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Error testing results]
- Notes: [Specific error handling issues]

**If FAIL:**
- Gate blocks release
- Recommend: Improve error handling, add user-friendly messages

---

## GATE 9: Documentation

### Criteria Review

Present criteria:
- User-facing help documentation exists
- In-app guidance for complex features
- Release notes updated
- API documentation updated (if applicable)
- Error messages include guidance
- FAQs updated

### Evidence Collection

**Ask user:**
- "Does user-facing help exist for this feature?"
- "Are there in-app tooltips or guidance?"
- "Are release notes prepared?"
- "Is API documentation updated?"

**Gather evidence:**
- Help documentation links
- In-app guidance screenshots
- Release notes draft
- API docs (if applicable)

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Documentation complete, help accessible, release notes ready
- ⚠️ **NEEDS IMPROVEMENT:** Documentation exists but incomplete or unclear
- ❌ **FAIL:** No documentation, users won't know how to use feature

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Documentation links]
- Notes: [Documentation gaps]

**If FAIL:**
- Gate blocks release
- Recommend: Create documentation, add in-app guidance

---

## GATE 10: Instrumentation

### Criteria Review

Present criteria from Intelligence DNA:
- Feature usage tracked (events)
- Success/failure metrics instrumented
- Performance metrics captured
- Error rates tracked
- User journey analytics in place
- North star metric impact trackable

### Evidence Collection

**Ask user:**
- "What analytics events are being tracked?"
- "Can you see feature usage in the analytics dashboard?"
- "Are errors being tracked?"
- "How will you measure feature success?"

**Gather evidence:**
- Analytics instrumentation verification (staging tests)
- Dashboard showing tracked metrics
- Event tracking tested and working
- Alerting configured (if applicable)

### Validation Decision

**Evaluate:**
- ✅ **PASS:** All key metrics instrumented, visible in dashboard, alerts configured
- ⚠️ **NEEDS IMPROVEMENT:** Some metrics missing, dashboard needs work
- ❌ **FAIL:** No instrumentation, can't measure feature success

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Analytics verification, dashboard screenshots]
- Notes: [Missing metrics]

**If FAIL:**
- Gate blocks release (can't improve what you can't measure)
- Recommend: Add instrumentation, verify in staging

---

## GATE 11: Technical Quality

### Criteria Review

Present criteria from Architecture DNA:
- Code review completed and approved
- Test coverage ≥ [threshold] (e.g., 80%)
- No critical code quality issues
- Cyclomatic complexity ≤ [threshold]
- No excessive duplication
- Architecture patterns followed
- Technical debt acceptable

### Evidence Collection

**Ask user:**
- "Has code review been approved?"
- "What is the test coverage?"
- "Are all tests passing?"
- "What are the code quality scan results?"

**Gather evidence:**
- Code review approval
- Test coverage report
- Test suite status (all passing)
- Code quality scan results (SonarQube, ESLint, etc.)

### Validation Decision

**Evaluate:**
- ✅ **PASS:** Code reviewed, coverage meets threshold, quality scans pass
- ⚠️ **NEEDS IMPROVEMENT:** Coverage slightly low, minor quality issues
- ❌ **FAIL:** No code review, low coverage, critical quality issues

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Code review, coverage report, quality scans]
- Notes: [Specific technical issues]

**If FAIL:**
- Gate blocks release
- Recommend: Complete code review, add tests, fix quality issues

---

## GATE 12: Regression Prevention

### Criteria Review

Present criteria:
- Existing automated tests passing (100%)
- Regression test suite executed
- Critical user journeys tested
- No breaking changes to APIs
- Backward compatibility maintained
- Rollback plan exists

### Evidence Collection

**Ask user:**
- "Are all existing tests passing?"
- "Have regression tests been run?"
- "Have critical user flows been tested in staging?"
- "Are there any breaking changes?"
- "What's the rollback plan if issues occur?"

**Gather evidence:**
- Full test suite results (100% passing)
- Regression test execution results
- Smoke test results (critical flows)
- API compatibility verification
- Rollback procedure documented

### Validation Decision

**Evaluate:**
- ✅ **PASS:** All tests passing, no regressions, rollback plan ready
- ⚠️ **NEEDS IMPROVEMENT:** Few test failures, regressions identified
- ❌ **FAIL:** Tests failing, critical flows broken

**Document findings:**
- Status: [PASS / NEEDS IMPROVEMENT / FAIL]
- Evidence: [Test results]
- Notes: [Regressions or test failures]

**If FAIL:**
- Gate blocks release (regressions are unacceptable)
- Recommend: Fix failing tests, resolve regressions

---

### 4. Calculate MQB Validation Score

#### 4.1 Tally Results

Count gates by status:
- **PASS:** [Count] / 12
- **NEEDS IMPROVEMENT:** [Count] / 12
- **FAIL:** [Count] / 12

#### 4.2 Determine Overall Status

**Rules:**
- **READY TO SHIP:** All 12 gates PASS
- **NEEDS WORK:** Any gate NEEDS IMPROVEMENT (must be resolved before shipping)
- **BLOCKED:** Any gate FAIL (cannot ship until resolved)

**Overall Status:** [READY TO SHIP / NEEDS WORK / BLOCKED]

### 5. Generate Validation Report

#### 5.1 Summary Report

Create summary at top of checklist:

```markdown
## Validation Summary

**Overall Status:** [READY TO SHIP / NEEDS WORK / BLOCKED]
**Gates Passed:** [X] / 12
**Gates Needing Improvement:** [X]
**Gates Failed:** [X]
**Validator:** [Name]
**Date:** [Date]

### Critical Issues (Blockers)
- [List any FAIL gates with brief description]

### Improvements Needed
- [List any NEEDS IMPROVEMENT gates with brief description]

### Strengths
- [List notable quality achievements]

### Recommendation
[APPROVE FOR RELEASE / HOLD PENDING FIXES / REJECT]
```

#### 5.2 Detailed Findings

For each gate, include:
- Status (PASS / NEEDS IMPROVEMENT / FAIL)
- Evidence collected
- Notes and observations
- Action items (if not passing)

### 6. Present Results to User

#### 6.1 Share Report

Present validation summary and ask:
- "Do you agree with these findings?"
- "Are there any gates you want to discuss or challenge?"
- "Are you ready to address the issues, or do we need to escalate?"

#### 6.2 If READY TO SHIP

Congratulate team:
```
Excellent work! This feature has passed all 12 MQB gates and is READY TO SHIP.

All quality standards have been met:
✅ Purpose Alignment
✅ User Need Validation
✅ Experience Standards
✅ Performance Standards
✅ Accessibility Standards
✅ Security Standards
✅ Data Integrity
✅ Error Handling
✅ Documentation
✅ Instrumentation
✅ Technical Quality
✅ Regression Prevention

Next steps:
1. Final deployment approval
2. Release to production
3. Monitor post-launch metrics
4. Celebrate quality commitment!
```

#### 6.3 If NEEDS WORK or BLOCKED

**Be clear and supportive:**
```
This feature is not yet ready to ship. The following gates need attention:

[List FAIL and NEEDS IMPROVEMENT gates]

This is NOT a failure - this is the MQB doing its job by protecting users
and product quality. Let's address these issues before shipping.

Next steps:
1. [Specific action for each failed gate]
2. Re-run MQB validation after fixes
3. Ship only when all gates pass
```

### 7. Track MQB Results

#### 7.1 Log Validation

- Save validation checklist to `docs/mqb-validations/`
- Add entry to MQB validation log
- Track pass/fail rates over time
- Identify patterns (which gates fail most often?)

#### 7.2 Celebrate Quality Culture

**If PASS:**
- Celebrate team's quality commitment
- Share success in team channels
- Recognize individuals who championed quality

**If FAIL/NEEDS WORK:**
- Celebrate catching issues BEFORE shipping
- Praise team for respecting MQB
- Reinforce that saying "not ready" is the right call

### 8. Follow-Up Actions

#### 8.1 If Blockers Exist

- Create action items for each FAIL gate
- Assign owners and deadlines
- Schedule re-validation after fixes
- Do NOT bypass MQB without exception process

#### 8.2 If Ready to Ship

- Proceed with deployment
- Monitor post-launch metrics
- Validate assumptions (did feature perform as expected?)
- Conduct post-launch retrospective

#### 8.3 MQB Process Improvement

- Identify gates that are frequently failed → need better processes upstream
- Identify gates that are always passed → consider automation
- Gather feedback: Is MQB working? Too strict? Too lenient?

---

## Task Completion

- Status: [Complete]
- Feature: [Name]
- Overall MQB Status: [READY TO SHIP / NEEDS WORK / BLOCKED]
- Validation Report: [File path]
- Next Action: [Deploy / Fix issues / Re-validate]
