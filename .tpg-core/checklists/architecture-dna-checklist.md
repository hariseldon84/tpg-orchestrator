<!-- Powered by Product Genome™ Framework -->

# Architecture DNA Validation Checklist

## Purpose

To validate that Architecture DNA is comprehensive, well-documented, and establishes clear technical standards for modularity, scalability, maintainability, and technical excellence. This checklist ensures the Architecture DNA document meets Product Genome quality standards and prevents technical debt accumulation and architectural erosion.

## How to Use This Checklist

- Review each item carefully
- Mark as ✅ Pass, ❌ Fail, or ⚠️ Needs Improvement
- Document specific findings for any failures or improvements needed
- A complete Architecture DNA should have ALL items marked as Pass

---

## Section 1: Architectural Principles Validation

### 1.1 Core Principles Definition
- [ ] 5-8 core architectural principles are clearly defined
- [ ] Each principle has a descriptive name and explanation
- [ ] Principles are specific to this product's needs (not generic principles)
- [ ] Principles connect to Purpose DNA and User DNA constraints
- [ ] Principles guide technical decisions (not just aspirational statements)

**Finding:** _[Document specific issues or confirm pass]_

### 1.2 Principles Quality
- [ ] Principles are actionable (can be used to evaluate technical choices)
- [ ] Principles can cause teams to say "no" to certain technical approaches
- [ ] Each principle includes examples of what it means in practice
- [ ] Principles address scalability, maintainability, and evolvability
- [ ] Trade-offs between principles are acknowledged

**Finding:** _[Document specific issues or confirm pass]_

### 1.3 Principles Enforcement
- [ ] Principles are referenced in code reviews
- [ ] Violations of principles are documented and justified
- [ ] Architectural decisions are evaluated against principles
- [ ] Principles are taught to new team members

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 2: System Architecture Validation

### 2.1 Architecture Overview
- [ ] High-level architecture diagram exists and is current
- [ ] Major system components are clearly identified
- [ ] Component responsibilities are documented
- [ ] Interaction patterns between components are shown
- [ ] Architecture supports stated Purpose and User needs

**Finding:** _[Document specific issues or confirm pass]_

### 2.2 Architecture Quality Attributes
- [ ] Scalability requirements are specified
- [ ] Performance requirements are documented
- [ ] Reliability/availability targets are defined
- [ ] Security requirements are established
- [ ] Maintainability goals are stated
- [ ] Evolvability considerations are addressed

**Finding:** _[Document specific issues or confirm pass]_

### 2.3 Modularity & Boundaries
- [ ] Module boundaries are clearly defined
- [ ] Module coupling is minimized (loose coupling)
- [ ] Module cohesion is maximized (high cohesion)
- [ ] Module interfaces are well-defined
- [ ] Dependency direction is intentional and documented

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 3: Conway's Law & Team Structure Validation

### 3.1 Team-Architecture Alignment
- [ ] Architecture reflects desired team structure (Conway's Law addressed)
- [ ] Team boundaries align with system boundaries
- [ ] Module ownership is clearly assigned
- [ ] Communication patterns match architectural boundaries
- [ ] Organizational friction points are identified and addressed

**Finding:** _[Document specific issues or confirm pass]_

### 3.2 Ownership & Accountability
- [ ] Each major component has a clear owner (team or individual)
- [ ] Ownership boundaries prevent "tragedy of the commons"
- [ ] Shared components have defined governance
- [ ] Cross-team dependencies are managed
- [ ] Ownership model supports autonomous teams

**Finding:** _[Document specific issues or confirm pass]_

### 3.3 Scalability of Team Structure
- [ ] Architecture allows teams to work independently
- [ ] Integration points are well-defined to minimize coordination
- [ ] Architecture supports adding new teams without major restructuring
- [ ] Team cognitive load is managed (team topologies principles)

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 4: Technology Stack Validation

### 4.1 Technology Choices
- [ ] Primary technologies are clearly documented (languages, frameworks)
- [ ] Technology choices are justified (not just "cool tech")
- [ ] Technology stack aligns with team expertise
- [ ] Technology choices support scalability requirements
- [ ] Technology longevity and community support are considered

**Finding:** _[Document specific issues or confirm pass]_

### 4.2 Technology Standards
- [ ] Approved technologies are listed
- [ ] Unapproved/discouraged technologies are documented
- [ ] Process for adopting new technologies is defined
- [ ] Technology evaluation criteria are specified
- [ ] Version management strategy is documented

**Finding:** _[Document specific issues or confirm pass]_

### 4.3 Third-Party Dependencies
- [ ] Third-party library/service usage policy is defined
- [ ] Dependency evaluation criteria are specified (licensing, support, security)
- [ ] Dependency update strategy is documented
- [ ] Vendor lock-in risks are identified and mitigated
- [ ] Dependency inventory is maintained

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 5: Architecture Decision Records (ADRs) Validation

### 5.1 ADR Practice Existence
- [ ] ADR practice is established and documented
- [ ] ADR template is defined
- [ ] ADR storage location is specified
- [ ] ADR review process is documented
- [ ] Team is trained on writing ADRs

**Finding:** _[Document specific issues or confirm pass]_

### 5.2 ADR Coverage
- [ ] Significant architectural decisions have ADRs
- [ ] At least 5-10 ADRs exist for non-trivial products
- [ ] Recent major decisions are documented
- [ ] Legacy decisions are documented (even if after the fact)
- [ ] ADRs include context, decision, consequences

**Finding:** _[Document specific issues or confirm pass]_

### 5.3 ADR Quality
- [ ] ADRs capture the "why" not just the "what"
- [ ] ADRs document alternatives considered
- [ ] ADRs identify trade-offs made
- [ ] ADRs are discoverable and searchable
- [ ] ADRs are kept up to date (marked as superseded when changed)

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 6: Data Architecture Validation

### 6.1 Data Model
- [ ] Core data model is documented
- [ ] Entity relationships are clear
- [ ] Data ownership is defined
- [ ] Data lifecycle is documented (creation, storage, archival, deletion)
- [ ] Data model supports business requirements

**Finding:** _[Document specific issues or confirm pass]_

### 6.2 Data Storage Strategy
- [ ] Database technology choices are documented and justified
- [ ] Data partitioning strategy is defined (if applicable)
- [ ] Data replication strategy is specified (if applicable)
- [ ] Backup and disaster recovery are addressed
- [ ] Data retention policies are defined

**Finding:** _[Document specific issues or confirm pass]_

### 6.3 Data Access Patterns
- [ ] Data access patterns are documented
- [ ] Query optimization strategy is defined
- [ ] Caching strategy is specified
- [ ] Data consistency requirements are clear (ACID vs. eventual consistency)
- [ ] Data access performance targets are established

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 7: API & Integration Architecture Validation

### 7.1 API Design Standards
- [ ] API design standards are documented (REST, GraphQL, gRPC, etc.)
- [ ] API versioning strategy is defined
- [ ] API documentation standards are specified
- [ ] API authentication/authorization approach is documented
- [ ] API error handling standards are established

**Finding:** _[Document specific issues or confirm pass]_

### 7.2 Integration Patterns
- [ ] Integration patterns are documented (sync vs. async, messaging, etc.)
- [ ] Integration with external systems is specified
- [ ] Event-driven architecture standards are defined (if applicable)
- [ ] Message format standards are documented (if applicable)
- [ ] Integration error handling is standardized

**Finding:** _[Document specific issues or confirm pass]_

### 7.3 API Quality & Governance
- [ ] API contract testing is required
- [ ] Breaking change policy is defined
- [ ] API deprecation process is documented
- [ ] API performance requirements are specified
- [ ] API monitoring and observability are addressed

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 8: Scalability & Performance Validation

### 8.1 Scalability Strategy
- [ ] Horizontal vs. vertical scaling approach is defined
- [ ] Scalability bottlenecks are identified
- [ ] Auto-scaling strategy is documented (if cloud-based)
- [ ] Load balancing approach is specified
- [ ] Scalability testing requirements are defined

**Finding:** _[Document specific issues or confirm pass]_

### 8.2 Performance Architecture
- [ ] Performance requirements align with Experience DNA
- [ ] Performance optimization strategy is documented
- [ ] Caching strategy is comprehensive (where, what, TTL)
- [ ] Database optimization approach is specified
- [ ] CDN usage is defined (if applicable)

**Finding:** _[Document specific issues or confirm pass]_

### 8.3 Capacity Planning
- [ ] Capacity planning process is documented
- [ ] Growth projections are used to inform architecture
- [ ] Resource requirements are estimated
- [ ] Scaling triggers are defined
- [ ] Cost implications of scaling are considered

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 9: Security Architecture Validation

### 9.1 Security Principles
- [ ] Security-by-design principles are documented
- [ ] Threat modeling has been conducted
- [ ] Security requirements are specified
- [ ] Security controls are documented
- [ ] Security review process is defined

**Finding:** _[Document specific issues or confirm pass]_

### 9.2 Authentication & Authorization
- [ ] Authentication mechanism is documented
- [ ] Authorization model is specified (RBAC, ABAC, etc.)
- [ ] Session management approach is defined
- [ ] Password/credential policies are established
- [ ] Multi-factor authentication approach is specified (if applicable)

**Finding:** _[Document specific issues or confirm pass]_

### 9.3 Data Security
- [ ] Encryption at rest is addressed
- [ ] Encryption in transit is specified (TLS, etc.)
- [ ] Sensitive data handling is documented
- [ ] Data privacy requirements are met (GDPR, CCPA, etc.)
- [ ] Secret management approach is defined (API keys, credentials)

**Finding:** _[Document specific issues or confirm pass]_

### 9.4 Security Testing & Monitoring
- [ ] Security testing requirements are defined
- [ ] Vulnerability scanning is automated
- [ ] Dependency vulnerability checking is in place
- [ ] Security monitoring and alerting are specified
- [ ] Incident response process is documented

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 10: Reliability & Resilience Validation

### 10.1 Failure Modes
- [ ] Potential failure modes are identified
- [ ] Single points of failure are documented and addressed
- [ ] Failure impact analysis is conducted
- [ ] Recovery time objectives (RTO) are defined
- [ ] Recovery point objectives (RPO) are specified

**Finding:** _[Document specific issues or confirm pass]_

### 10.2 Resilience Patterns
- [ ] Circuit breaker pattern is implemented where needed
- [ ] Retry logic is standardized
- [ ] Timeout policies are defined
- [ ] Bulkhead pattern is used to isolate failures
- [ ] Graceful degradation strategy is documented

**Finding:** _[Document specific issues or confirm pass]_

### 10.3 Disaster Recovery
- [ ] Backup strategy is documented
- [ ] Disaster recovery plan exists
- [ ] Failover mechanisms are defined
- [ ] Data recovery procedures are specified
- [ ] Recovery testing is conducted regularly

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 11: Technical Debt Management Validation

### 11.1 Tech Debt Identification
- [ ] Technical debt tracking system is in place
- [ ] Technical debt is categorized (intentional vs. unintentional)
- [ ] Tech debt items are prioritized
- [ ] Tech debt impact is quantified (time, risk, maintainability)
- [ ] Tech debt is visible to product/business stakeholders

**Finding:** _[Document specific issues or confirm pass]_

### 11.2 Tech Debt Management
- [ ] Tech debt reduction is part of regular sprint work
- [ ] Percentage of time allocated to tech debt is defined (e.g., 20%)
- [ ] Tech debt paydown strategy exists
- [ ] "Boy scout rule" is practiced (leave code better than you found it)
- [ ] Tech debt doesn't block new feature development indefinitely

**Finding:** _[Document specific issues or confirm pass]_

### 11.3 Preventing New Tech Debt
- [ ] Code review standards prevent new tech debt
- [ ] Architectural review process catches design debt
- [ ] Testing requirements prevent quality debt
- [ ] Documentation requirements prevent knowledge debt
- [ ] Tech debt is discussed in planning (intentional debt is OK with paydown plan)

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 12: Code Quality Standards Validation

### 12.1 Coding Standards
- [ ] Coding standards are documented per language
- [ ] Style guides are defined and enforced (via linters/formatters)
- [ ] Code organization conventions are specified
- [ ] Naming conventions are standardized
- [ ] Code complexity thresholds are defined

**Finding:** _[Document specific issues or confirm pass]_

### 12.2 Code Review Process
- [ ] Code review process is documented
- [ ] Code review checklist exists
- [ ] Review turnaround time expectations are set
- [ ] All code changes require review (no exceptions)
- [ ] Architectural changes require senior review

**Finding:** _[Document specific issues or confirm pass]_

### 12.3 Testing Standards
- [ ] Testing pyramid is defined (unit, integration, E2E ratios)
- [ ] Code coverage targets are specified
- [ ] Test quality standards are documented (not just coverage)
- [ ] TDD/BDD practices are encouraged or required
- [ ] Testing anti-patterns are identified and avoided

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 13: Deployment & DevOps Architecture Validation

### 13.1 Deployment Strategy
- [ ] Deployment approach is documented (blue-green, canary, rolling, etc.)
- [ ] Deployment automation is in place (CI/CD)
- [ ] Deployment frequency target is specified
- [ ] Deployment rollback process is defined
- [ ] Feature flag strategy is documented

**Finding:** _[Document specific issues or confirm pass]_

### 13.2 Environment Strategy
- [ ] Environment strategy is documented (dev, staging, prod, etc.)
- [ ] Environment parity is maintained
- [ ] Environment provisioning is automated
- [ ] Environment configuration management is specified
- [ ] Infrastructure as Code (IaC) is used

**Finding:** _[Document specific issues or confirm pass]_

### 13.3 Observability Architecture
- [ ] Logging strategy is comprehensive
- [ ] Monitoring and alerting are defined
- [ ] Distributed tracing is implemented (if microservices)
- [ ] Metrics collection is standardized
- [ ] Observability aligns with Intelligence DNA

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 14: Documentation Standards Validation

### 14.1 Code Documentation
- [ ] Code documentation standards are defined
- [ ] Complex logic requires comments
- [ ] Public APIs are documented
- [ ] Documentation is kept in sync with code
- [ ] Documentation generation tools are used (if applicable)

**Finding:** _[Document specific issues or confirm pass]_

### 14.2 Architecture Documentation
- [ ] Architecture documentation is maintained
- [ ] Diagrams are kept up to date
- [ ] Onboarding documentation exists
- [ ] Runbooks are documented for common operations
- [ ] Troubleshooting guides are available

**Finding:** _[Document specific issues or confirm pass]_

### 14.3 Documentation Accessibility
- [ ] Documentation is centralized and discoverable
- [ ] Documentation is searchable
- [ ] Documentation ownership is clear
- [ ] Documentation updates are part of definition of done
- [ ] Outdated documentation is marked or removed

**Finding:** _[Document specific issues or confirm pass]_

---

## Section 15: Document Completeness

### 15.1 Required Sections Present
- [ ] All required sections from template are present
- [ ] No sections contain placeholder text
- [ ] No sections are marked as "TBD" or "TODO"
- [ ] Architecture diagrams are included and current

**Finding:** _[Document specific issues or confirm pass]_

### 15.2 Architecture Validation Questions
- [ ] Architecture validation questions section exists
- [ ] 5-7 validation questions are provided
- [ ] Questions can be used to evaluate technical decisions
- [ ] Questions connect to architectural principles

**Finding:** _[Document specific issues or confirm pass]_

### 15.3 Change Log
- [ ] Change log exists
- [ ] Change log has at least initial entry
- [ ] Change log format is consistent
- [ ] Major architectural changes are tracked

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

If ANY of these are marked Fail, the Architecture DNA cannot pass regardless of overall score:

- [ ] No architectural principles defined
- [ ] No architecture documentation exists
- [ ] No ADR practice established for significant product
- [ ] Conway's Law not addressed (architecture-team misalignment)
- [ ] No technical debt management process
- [ ] No security architecture specified
- [ ] No scalability strategy for growing product

**Critical Failures Detected:** _[Yes/No and list if yes]_

---

## Warning Signs (High Risk)

These don't cause automatic failure but indicate high risk of technical problems:

- [ ] Architecture hasn't been updated in >6 months despite active development
- [ ] No ADRs written in last 6 months despite major changes
- [ ] Tech debt backlog growing faster than it's being paid down
- [ ] Module boundaries frequently violated
- [ ] No code review process or inconsistently followed
- [ ] Testing coverage <60% or no coverage tracking
- [ ] Deployment is manual or error-prone

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

### Technical Debt Focus Areas
1. _[Specific tech debt to address]_
2. _[...]_

### Architecture Evolution
1. _[How architecture should evolve]_
2. _[...]_

### Strengths to Maintain
1. _[What's working well architecturally]_
2. _[...]_

---

## Checklist Completion

**Reviewed By:** _[Name/Role]_

**Review Date:** _[Date]_

**Next Review Date:** _[Recommended: Every quarter or after major architectural changes]_

**Status:** _[APPROVED / CONDITIONAL / REJECTED]_

**Notes:** _[Any additional context or observations]_
