<!-- Powered by Product Genome™ Framework -->

# Ship Readiness Checklist

## Purpose

To validate that a feature or release is ready to ship to production. This is the final gate before release, combining MQB validation with deployment readiness.

## Pre-Ship Validation

### 1. MQB Gates (All Must Pass)
- [ ] ✅ Gate 1: Purpose Alignment
- [ ] ✅ Gate 2: User Need Validation
- [ ] ✅ Gate 3: Experience Standards
- [ ] ✅ Gate 4: Performance Standards
- [ ] ✅ Gate 5: Accessibility Standards
- [ ] ✅ Gate 6: Security Standards
- [ ] ✅ Gate 7: Data Integrity
- [ ] ✅ Gate 8: Error Handling
- [ ] ✅ Gate 9: Documentation
- [ ] ✅ Gate 10: Instrumentation
- [ ] ✅ Gate 11: Technical Quality
- [ ] ✅ Gate 12: Regression Prevention

**MQB Status:** All gates must be ✅ PASS

### 2. Code Quality
- [ ] Code review approved
- [ ] All tests passing (unit, integration, E2E)
- [ ] Test coverage ≥ 80%
- [ ] Code quality scans passing (no critical issues)
- [ ] No merge conflicts
- [ ] Branch up to date with main
- [ ] Technical debt acceptable and documented

### 3. Testing Validation
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] E2E tests written and passing
- [ ] Performance tests passing
- [ ] Security tests passing
- [ ] Accessibility tests passing
- [ ] Regression tests passing
- [ ] Tested in staging environment
- [ ] Tested on target devices/browsers
- [ ] Edge cases tested

### 4. Documentation
- [ ] User-facing documentation complete
- [ ] In-app help available
- [ ] Release notes prepared
- [ ] API documentation updated (if applicable)
- [ ] Technical documentation updated
- [ ] Runbooks updated (if needed)
- [ ] Change log updated

### 5. Instrumentation & Monitoring
- [ ] Analytics events implemented and tested
- [ ] Metrics visible in dashboard
- [ ] Error tracking configured
- [ ] Performance monitoring active
- [ ] Alerts configured for critical metrics
- [ ] Can measure feature success post-launch

### 6. Deployment Readiness
- [ ] Deployment plan documented
- [ ] Deployment checklist prepared
- [ ] Rollback plan documented
- [ ] Database migrations tested (if applicable)
- [ ] Configuration changes documented
- [ ] Environment variables set
- [ ] Dependencies deployed
- [ ] Feature flags configured (if applicable)
- [ ] Staged rollout plan (if applicable)

### 7. Stakeholder Approval
- [ ] Product Manager approval
- [ ] Engineering Lead approval
- [ ] Design Lead approval (for UX changes)
- [ ] QA sign-off
- [ ] Security approval (for security-sensitive features)
- [ ] Stakeholder communication complete

### 8. Risk Assessment
- [ ] Risks identified and documented
- [ ] Mitigation plans in place
- [ ] Rollback criteria defined
- [ ] On-call coverage arranged
- [ ] Incident response plan ready
- [ ] User impact assessed (low/medium/high)

### 9. Communication
- [ ] Team notified of deployment
- [ ] Stakeholders informed of release
- [ ] Support team briefed
- [ ] Release notes shared
- [ ] User communication prepared (if user-facing)
- [ ] Marketing/sales notified (if needed)

### 10. Post-Launch Plan
- [ ] Monitoring plan for first 24 hours
- [ ] Success metrics tracking plan
- [ ] User feedback collection plan
- [ ] 1-week post-launch review scheduled
- [ ] 4-week post-launch review scheduled
- [ ] Hypothesis validation plan

---

## Ship Decision

**Overall Readiness:** _[READY TO SHIP / NOT READY / BLOCKED]_

### READY TO SHIP
All critical items checked, all MQB gates passed, deployment plan ready.

### NOT READY
Some items incomplete but no critical blockers. Address gaps before shipping.

### BLOCKED
Critical failures in MQB gates or critical items unchecked. Cannot ship.

---

## Sign-Off

**Product Manager:** _[Name]_ ✅ Approved / ❌ Rejected

**Engineering Lead:** _[Name]_ ✅ Approved / ❌ Rejected

**QA Lead:** _[Name]_ ✅ Approved / ❌ Rejected

**Deployment Date:** _[Scheduled date and time]_

**Deployed By:** _[Name]_

**Deployment Status:** _[Success / Rolled Back / In Progress]_

---

## Post-Deployment Validation

### Immediate (First Hour)
- [ ] Deployment successful (no errors)
- [ ] Critical user flows tested in production
- [ ] Error rates within normal range
- [ ] Performance metrics within thresholds
- [ ] Monitoring dashboards green

### First 24 Hours
- [ ] No critical incidents
- [ ] User feedback monitored
- [ ] Analytics events firing correctly
- [ ] Feature usage as expected
- [ ] No unexpected errors

### First Week
- [ ] Success metrics tracked
- [ ] User feedback positive
- [ ] No major issues reported
- [ ] Feature adoption measured
- [ ] Hypothesis validation in progress

---

**Reviewed By:** _[Name]_

**Date:** _[Date]_

**Ship Status:** _[SHIPPED / DELAYED / CANCELLED]_
