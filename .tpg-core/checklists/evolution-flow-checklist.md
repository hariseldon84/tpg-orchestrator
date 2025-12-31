<!-- Powered by Product Genome™ Framework -->

# Evolution Flow Checklist

## Purpose

To validate that features follow the Evolution Flow process from hypothesis through validation, ensuring alignment with Product Genome at every stage. This checklist prevents building features without validation and ensures systematic learning.

## Evolution Flow Stages

### Stage 1: Hypothesis (Pre-Build)
- [ ] Feature hypothesis clearly stated ("If we build X, then Y will happen because Z")
- [ ] User need validated with evidence (research, interviews, data)
- [ ] Maps to User DNA segment and JTBD
- [ ] Aligns with Purpose DNA objectives
- [ ] North star metric impact hypothesized
- [ ] Success metrics defined before building
- [ ] Risks and assumptions documented

### Stage 2: Design & Validation (Pre-Code)
- [ ] User story created using Builder's Hierarchy
- [ ] Acceptance criteria defined (functional and non-functional)
- [ ] Design created and reviewed
- [ ] Prototype created for user testing (low or high fidelity)
- [ ] Usability testing conducted (minimum 5 users)
- [ ] User feedback validates approach (≥80% positive)
- [ ] Design approved by Design Lead
- [ ] MQB gate readiness assessed

### Stage 3: Build (Implementation)
- [ ] Feature implemented following architecture standards
- [ ] Code review completed and approved
- [ ] Unit tests written (≥80% coverage)
- [ ] Integration tests written
- [ ] E2E tests written for critical paths
- [ ] Performance tested (meets Experience DNA thresholds)
- [ ] Accessibility tested (WCAG compliance)
- [ ] Security reviewed (no critical vulnerabilities)
- [ ] Error handling implemented
- [ ] Documentation created (user-facing and technical)
- [ ] Instrumentation implemented (analytics events)

### Stage 4: MQB Gates (Pre-Ship)
- [ ] All 12 MQB gates validated and passed
- [ ] Gate 1: Purpose Alignment ✅
- [ ] Gate 2: User Need Validation ✅
- [ ] Gate 3: Experience Standards ✅
- [ ] Gate 4: Performance Standards ✅
- [ ] Gate 5: Accessibility Standards ✅
- [ ] Gate 6: Security Standards ✅
- [ ] Gate 7: Data Integrity ✅
- [ ] Gate 8: Error Handling ✅
- [ ] Gate 9: Documentation ✅
- [ ] Gate 10: Instrumentation ✅
- [ ] Gate 11: Technical Quality ✅
- [ ] Gate 12: Regression Prevention ✅

### Stage 5: Ship (Release)
- [ ] All MQB gates passed (100%)
- [ ] Deployment plan documented
- [ ] Rollback plan prepared
- [ ] Monitoring and alerting configured
- [ ] Staged rollout planned (if applicable)
- [ ] Released to production
- [ ] Post-launch monitoring active

### Stage 6: Measure (Post-Launch)
- [ ] Success metrics tracked in analytics
- [ ] Usage metrics visible in dashboard
- [ ] User feedback collected (NPS, CSAT, qualitative)
- [ ] Performance metrics monitored
- [ ] Error rates monitored
- [ ] North star metric impact measured
- [ ] 1-week post-launch review completed
- [ ] 4-week post-launch review completed

### Stage 7: Learn (Validation)
- [ ] Hypothesis validated or invalidated (data-driven)
- [ ] Learnings documented
- [ ] Impact on north star metric assessed
- [ ] User satisfaction measured
- [ ] Feature adoption measured
- [ ] Unexpected behaviors identified
- [ ] Insights inform next iteration or new features

### Stage 8: Iterate or Sunset
- [ ] Decision made: Iterate, Keep, or Sunset
- [ ] If Iterate: Next iteration hypothesis defined
- [ ] If Keep: Feature enters maintenance mode
- [ ] If Sunset: Deprecation plan created
- [ ] Learnings shared with team
- [ ] Evolution Flow cycle complete

---

## Pass/Fail Criteria

**PASS:** All stages completed, all MQB gates passed, hypothesis validated
**CONDITIONAL:** Most stages completed, minor gaps, plan for completion
**FAIL:** Critical stages skipped, MQB gates failed, or hypothesis invalidated without learnings

**Overall Status:** _[PASS / CONDITIONAL / FAIL]_

**Reviewed By:** _[Name]_

**Date:** _[Date]_
