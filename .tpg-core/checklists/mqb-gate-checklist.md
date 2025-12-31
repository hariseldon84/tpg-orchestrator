<!-- Powered by Product Genome™ Framework -->

# Minimum Quality Bar (MQB) Gate Checklist

## Purpose

To enforce the Minimum Quality Bar before ANY product increment ships. This checklist represents the non-negotiable quality standards that protect against technical debt, user frustration, and feature factory syndrome.

**CRITICAL RULE:** If this checklist fails, the increment does NOT ship. Period. No exceptions for deadlines.

## How to Use This Checklist

- Review each gate before release
- Mark as ✅ Pass, ❌ Fail, or ⚠️ Needs Verification
- Document specific findings for any failures
- ALL gates must pass before shipping
- This checklist is NON-NEGOTIABLE

---

## Gate 1: Purpose Alignment Gate

### 1.1 Purpose Validation
- [ ] Feature/increment aligns with Purpose DNA
- [ ] Feature serves stated problem (not invented problem)
- [ ] Feature passes alignment questions from Purpose DNA
- [ ] Feature has NOT been added just because "competitor has it"
- [ ] Feature has NOT been added just because "stakeholder requested it"

**Evidence Required:** Reference to Purpose DNA alignment check

**Finding:** _[Document alignment validation]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 2: User Value Gate

### 2.1 User Segment Validation
- [ ] Feature serves defined user segment (from User DNA)
- [ ] Feature addresses real user need (not assumed need)
- [ ] Feature has been validated with actual users
- [ ] User research supports this feature (not built on assumptions)

**Evidence Required:** User research summary or validation results

**Finding:** _[Document user validation]_

### 2.2 Jobs-to-be-Done Validation
- [ ] Feature helps users complete their JTBD
- [ ] Feature makes measurable progress toward user goals
- [ ] Feature does NOT add unnecessary complexity
- [ ] Feature respects user constraints (time, context, cognitive load)

**Evidence Required:** JTBD mapping showing how feature helps

**Finding:** _[Document JTBD alignment]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 3: Functional Quality Gate

### 3.1 Core Functionality
- [ ] All acceptance criteria are met (100%, no exceptions)
- [ ] Feature works as specified in all normal scenarios
- [ ] Feature handles edge cases appropriately
- [ ] Feature degrades gracefully when errors occur
- [ ] No known critical bugs (severity 1 or 2)

**Finding:** _[Document functional testing results]_

### 3.2 Integration Quality
- [ ] Feature integrates correctly with existing features
- [ ] No regressions introduced to existing functionality
- [ ] Data flows correctly between components
- [ ] APIs/interfaces work as documented

**Finding:** _[Document integration testing results]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 4: User Experience Gate

### 4.1 Usability Standards
- [ ] Feature is intuitive for defined user segment
- [ ] Feature follows established UX patterns (no arbitrary differences)
- [ ] Feature respects cognitive load constraints
- [ ] User can complete task without documentation (for simple tasks)
- [ ] Error messages are clear and actionable

**Finding:** _[Document UX validation]_

### 4.2 Accessibility Standards
- [ ] Feature meets accessibility requirements (WCAG level per Experience DNA)
- [ ] Feature works with assistive technologies (if applicable)
- [ ] Color contrast meets standards
- [ ] Keyboard navigation works (for web/desktop)
- [ ] Screen reader compatibility verified (if applicable)

**Finding:** _[Document accessibility testing]_

### 4.3 Context Appropriateness
- [ ] Feature works in user's actual environment (per User DNA context)
- [ ] Feature respects device constraints (screen size, input method)
- [ ] Feature handles poor connectivity (if applicable per User DNA)
- [ ] Feature works in realistic time constraints

**Finding:** _[Document context testing]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 5: Performance Gate

### 5.1 Performance Standards
- [ ] Load times meet defined thresholds (from Experience DNA)
- [ ] Feature performs acceptably under expected load
- [ ] No performance regressions introduced
- [ ] Resource usage is acceptable (memory, CPU, battery)

**Thresholds:** _[Reference Experience DNA performance thresholds]_

**Finding:** _[Document performance test results]_

### 5.2 Scalability
- [ ] Feature handles expected user volume
- [ ] Feature doesn't create bottlenecks
- [ ] Database queries are optimized
- [ ] Caching is implemented where needed

**Finding:** _[Document scalability validation]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 6: Reliability Gate

### 6.1 Stability
- [ ] Feature doesn't crash or freeze
- [ ] Error handling is robust
- [ ] Feature recovers gracefully from failures
- [ ] No memory leaks or resource leaks detected

**Finding:** _[Document stability testing]_

### 6.2 Data Integrity
- [ ] Data validation is implemented
- [ ] Data is stored correctly and securely
- [ ] No data loss scenarios identified
- [ ] Transactions are atomic where required

**Finding:** _[Document data integrity validation]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 7: Security Gate

### 7.1 Security Basics
- [ ] Authentication is implemented correctly (if applicable)
- [ ] Authorization is enforced (users can only access what they should)
- [ ] Input validation prevents injection attacks
- [ ] Sensitive data is encrypted in transit and at rest
- [ ] No hardcoded credentials or secrets

**Finding:** _[Document security review results]_

### 7.2 Privacy
- [ ] User privacy requirements are met
- [ ] Personal data handling complies with regulations (GDPR, etc.)
- [ ] Data collection is transparent to users
- [ ] User consent is obtained where required

**Finding:** _[Document privacy compliance]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 8: Testing Gate

### 8.1 Test Coverage
- [ ] Unit tests exist and pass (coverage per Architecture DNA standards)
- [ ] Integration tests exist and pass
- [ ] End-to-end tests pass (if applicable)
- [ ] No tests are skipped or disabled without documentation

**Coverage Achieved:** _[Percentage or N/A]_

**Finding:** _[Document test results]_

### 8.2 Test Quality
- [ ] Tests are meaningful (not just placeholder tests)
- [ ] Tests cover critical paths and edge cases
- [ ] Tests are automated (not manual-only)
- [ ] Test failures are investigated and resolved

**Finding:** _[Document test quality assessment]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 9: Documentation Gate

### 9.1 User Documentation
- [ ] User-facing documentation exists (if needed for feature)
- [ ] Documentation is clear and accurate
- [ ] Examples are provided where helpful
- [ ] Documentation matches actual behavior

**Finding:** _[Document user docs validation]_

### 9.2 Technical Documentation
- [ ] Code is reasonably documented (comments where needed)
- [ ] API documentation is updated (if applicable)
- [ ] Architecture decisions are documented (ADRs if significant)
- [ ] Known limitations are documented

**Finding:** _[Document technical docs validation]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 10: Operational Readiness Gate

### 10.1 Monitoring & Observability
- [ ] Feature is instrumented for monitoring
- [ ] Key metrics are tracked (per Intelligence DNA)
- [ ] Logging is implemented for debugging
- [ ] Alerts are configured for critical failures

**Finding:** _[Document monitoring setup]_

### 10.2 Rollback Capability
- [ ] Feature can be rolled back if issues occur
- [ ] Rollback procedure is documented
- [ ] Data migrations are reversible (if applicable)
- [ ] Feature flags allow disabling if needed

**Finding:** _[Document rollback readiness]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 11: North Star Impact Gate

### 11.1 Metric Impact Validation
- [ ] Feature is expected to impact north star metric (or clearly doesn't need to)
- [ ] Success metrics are defined for this feature
- [ ] Measurement plan exists to track impact
- [ ] Feature is NOT shipping without knowing if it helps

**Expected Impact:** _[How feature affects north star metric]_

**Finding:** _[Document metric impact plan]_

**Gate Status:** _[PASS / FAIL]_

---

## Gate 12: Non-Negotiables Gate

### 12.1 Non-Negotiables Compliance
- [ ] Feature does NOT violate any non-negotiables from Purpose DNA
- [ ] All non-negotiables have been explicitly checked
- [ ] No compromises were made on non-negotiable standards
- [ ] If non-negotiable conflict occurred, it was escalated and resolved

**Non-Negotiables Checked:** _[List each non-negotiable and compliance status]_

**Finding:** _[Document non-negotiables validation]_

**Gate Status:** _[PASS / FAIL]_

---

## Overall MQB Gate Assessment

**Total Gates:** 12

**Gates Passed:** _[Count]_

**Gates Failed:** _[Count]_

**Gates Needing Verification:** _[Count]_

---

## Ship/No-Ship Decision

**CRITICAL RULE:** ALL gates must pass to ship. Even ONE failure = NO SHIP.

**Decision:** _[SHIP / NO-SHIP]_

**Rationale:** _[If NO-SHIP, explain which gates failed and why they block shipping]_

---

## Failure Resolution Plan

If NO-SHIP decision, document resolution plan:

### Failed Gates
1. _[Gate name and failure reason]_
2. _[...]_

### Resolution Actions
1. _[Specific action to resolve failure]_
   - Responsible: _[Person/Team]_
   - Timeline: _[When fix will be complete]_
   - Re-check date: _[When to re-run gate]_

### Re-Evaluation Date
_[When MQB gate will be re-run after fixes]_

---

## Exception Handling (Use Sparingly)

**IMPORTANT:** Exceptions to MQB gates should be EXTREMELY rare and require executive approval.

### Exception Request
- [ ] No exceptions requested (standard case)
- [ ] Exception requested for: _[Specific gate]_

### Exception Justification
**Business Justification:** _[Why exception is needed]_

**Risk Assessment:** _[What risks does this exception create?]_

**Mitigation Plan:** _[How will risks be mitigated?]_

**Approval Required:** _[Executive/Director level]_

**Approved By:** _[Name and date]_

**Remediation Timeline:** _[When will exception be resolved?]_

---

## MQB Gate Completion

**Reviewed By:** _[Name/Role]_

**Review Date:** _[Date]_

**Increment/Feature:** _[What's being evaluated]_

**Version:** _[Version number]_

**Decision:** _[SHIP / NO-SHIP / SHIP WITH EXCEPTIONS]_

**Next MQB Gate:** _[For next increment]_

**Notes:** _[Any additional context]_

---

## Lessons Learned

### What Went Well
- _[Aspects of quality that were strong]_

### What Needs Improvement
- _[Areas where quality fell short]_

### Process Improvements
- _[How to improve MQB process itself]_

### Cultural Observations
- _[Team behaviors around quality - celebrate resistance to shipping bad quality]_
