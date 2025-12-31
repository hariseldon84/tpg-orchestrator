# Technical Preferences Template

**Version:** 1.0
**Last Updated:** 2025-12-30
**Framework:** Product Genome
**Status:** CUSTOMIZABLE - Edit this file to match your team's preferences

---

## Purpose of This Document

This document captures your team's technical preferences, standards, and constraints. It serves as a reference for:
- Architecture DNA decisions
- Technology stack selection
- Hiring and skill development
- Vendor/tool evaluation
- Consistency across products

**IMPORTANT:** This is a template. Replace the example content below with your actual team preferences.

---

## How to Use This Template

1. **Customize sections** with your team's actual preferences
2. **Document the "why"** for each preference (rationale matters)
3. **Update regularly** (quarterly reviews recommended)
4. **Use in ADRs** (Architecture Decision Records should reference this)
5. **Share with new hires** (faster onboarding)
6. **Review during tech decisions** (consistency check)

---

## Team Context

**Team Name:** [Your Team/Product Name]
**Team Size:** [Number of engineers]
**Product Domain:** [E.g., B2B SaaS, Mobile App, Healthcare Platform]
**Primary Users:** [Who uses your product?]
**Scale Requirements:** [Traffic, data volume, user base]
**Key Constraints:** [Regulatory, performance, budget]

---

## 1. Programming Languages

### Primary Languages

**Language:** [e.g., TypeScript]
**Version:** [e.g., TypeScript 5.0+]
**Use Cases:** [e.g., Frontend, Backend API, Shared libraries]
**Rationale:** [Why this language? Team expertise? Ecosystem? Performance?]

**Language:** [e.g., Python]
**Version:** [e.g., Python 3.11+]
**Use Cases:** [e.g., Data processing, ML pipelines, Automation scripts]
**Rationale:** [Why this language?]

### Secondary Languages (Special Use Cases)

**Language:** [e.g., Go]
**Use Cases:** [e.g., High-performance microservices, CLI tools]
**Rationale:** [Why this language for these cases?]

### Languages to Avoid

**Language:** [e.g., PHP]
**Reason:** [Why avoid? Lack of team expertise? Better alternatives exist?]

---

## 2. Frameworks & Libraries

### Frontend

**Framework:** [e.g., React]
**Version:** [e.g., React 18+]
**Rationale:** [Why? Team expertise? Ecosystem? Performance? Hiring market?]

**State Management:** [e.g., Redux Toolkit, Zustand, React Context]
**Rationale:** [Why this approach?]

**UI Component Library:** [e.g., Material-UI, Chakra UI, Custom Design System]
**Rationale:** [Why? Accessibility? Consistency? Speed?]

**Testing:** [e.g., Jest, React Testing Library, Playwright]
**Rationale:** [Why these tools?]

### Backend

**Framework:** [e.g., Node.js + Express, Django, FastAPI]
**Version:** [e.g., Node 20 LTS]
**Rationale:** [Why? Performance? Developer experience? Ecosystem?]

**API Style:** [e.g., REST, GraphQL, gRPC]
**Rationale:** [Why this style? Client needs? Performance?]

**Testing:** [e.g., Jest, Pytest, Supertest]
**Rationale:** [Why these tools?]

### Mobile

**Framework:** [e.g., React Native, Flutter, Native (Swift/Kotlin)]
**Rationale:** [Why? Code sharing? Performance? Developer experience?]

**Platform Support:** [iOS, Android, Both]
**Minimum Versions:** [e.g., iOS 14+, Android 10+]
**Rationale:** [Why these minimums? User base? Capabilities needed?]

---

## 3. Cloud Providers & Infrastructure

### Primary Cloud Provider

**Provider:** [e.g., AWS, Azure, GCP, Self-hosted]
**Rationale:** [Why? Cost? Capabilities? Team expertise? Compliance?]

**Key Services Used:**
- [e.g., EC2, S3, RDS, Lambda]
- [Rationale for each service choice]

### Infrastructure as Code

**Tool:** [e.g., Terraform, CloudFormation, Pulumi]
**Rationale:** [Why? Multi-cloud? Team preference? Ecosystem?]

### Container Orchestration

**Tool:** [e.g., Kubernetes, ECS, Docker Swarm, None]
**Rationale:** [Why? Scale needs? Complexity? Team expertise?]

### CI/CD

**Platform:** [e.g., GitHub Actions, GitLab CI, Jenkins, CircleCI]
**Rationale:** [Why? Integration with code host? Features? Cost?]

---

## 4. Databases & Data Storage

### Primary Database

**Database:** [e.g., PostgreSQL]
**Version:** [e.g., PostgreSQL 15+]
**Use Cases:** [e.g., Transactional data, User data]
**Rationale:** [Why? ACID compliance? JSON support? Team expertise?]

### Secondary Databases

**Database:** [e.g., Redis]
**Use Cases:** [e.g., Caching, Session storage, Real-time features]
**Rationale:** [Why this for these cases?]

**Database:** [e.g., MongoDB]
**Use Cases:** [e.g., Document storage, Flexible schemas]
**Rationale:** [Why this for these cases?]

### Data Warehouse / Analytics

**Tool:** [e.g., Snowflake, BigQuery, Redshift]
**Use Cases:** [e.g., Business analytics, Reporting, ML training data]
**Rationale:** [Why? Scale? Cost? Integration?]

### Object Storage

**Tool:** [e.g., S3, Google Cloud Storage, Azure Blob]
**Use Cases:** [e.g., User uploads, Backups, Static assets]
**Rationale:** [Why? Cost? Reliability? Integration?]

---

## 5. Development Tools

### Version Control

**System:** [e.g., Git]
**Platform:** [e.g., GitHub, GitLab, Bitbucket]
**Rationale:** [Why? CI/CD integration? Team familiarity? Features?]

### Code Editor / IDE

**Preferred:** [e.g., VS Code, IntelliJ, Vim]
**Extensions/Plugins:** [List key extensions for consistency]
**Rationale:** [Why? Team preference? Language support? Collaboration features?]

### Code Quality

**Linter:** [e.g., ESLint, Pylint, Rubocop]
**Formatter:** [e.g., Prettier, Black, gofmt]
**Type Checking:** [e.g., TypeScript, mypy, Flow]
**Rationale:** [Why these tools? Consistency? Catching bugs early?]

### API Development

**Tool:** [e.g., Postman, Insomnia, cURL]
**Documentation:** [e.g., OpenAPI/Swagger, GraphQL Playground]
**Rationale:** [Why? Team preference? API style? Collaboration?]

---

## 6. Monitoring & Observability

### Application Performance Monitoring (APM)

**Tool:** [e.g., Datadog, New Relic, Elastic APM]
**Rationale:** [Why? Features? Cost? Integration?]

### Logging

**Tool:** [e.g., Elasticsearch + Kibana, Splunk, CloudWatch]
**Rationale:** [Why? Scale? Searchability? Cost?]

### Error Tracking

**Tool:** [e.g., Sentry, Rollbar, Bugsnag]
**Rationale:** [Why? Integration? Features? Cost?]

### Metrics & Dashboards

**Tool:** [e.g., Grafana, Datadog, CloudWatch]
**Rationale:** [Why? Customization? Integration? Real-time?]

---

## 7. Security & Compliance

### Authentication & Authorization

**Tool/Standard:** [e.g., Auth0, OAuth2 + OIDC, Custom JWT]
**Rationale:** [Why? Security? Compliance? User experience?]

### Secrets Management

**Tool:** [e.g., AWS Secrets Manager, HashiCorp Vault, 1Password]
**Rationale:** [Why? Integration? Security? Developer experience?]

### Security Scanning

**SAST:** [e.g., SonarQube, Snyk, Semgrep]
**DAST:** [e.g., OWASP ZAP, Burp Suite]
**Dependency Scanning:** [e.g., Dependabot, Snyk, WhiteSource]
**Rationale:** [Why these tools? Coverage? Integration?]

### Compliance Requirements

**Standards:** [e.g., SOC 2, HIPAA, GDPR, PCI-DSS]
**Impact:** [How does this constrain technology choices?]

---

## 8. Communication & Collaboration

### Project Management

**Tool:** [e.g., Jira, Linear, GitHub Projects, Asana]
**Rationale:** [Why? Integration with dev tools? Team preference?]

### Documentation

**Tool:** [e.g., Notion, Confluence, Google Docs, Markdown in repo]
**Rationale:** [Why? Collaboration? Search? Version control?]

### Team Communication

**Tool:** [e.g., Slack, Microsoft Teams, Discord]
**Rationale:** [Why? Integration? Team preference?]

### Design Collaboration

**Tool:** [e.g., Figma, Sketch, Adobe XD]
**Rationale:** [Why? Collaboration? Handoff to dev? Prototyping?]

---

## 9. Testing Strategy

### Unit Testing

**Framework:** [e.g., Jest, Pytest, JUnit]
**Coverage Target:** [e.g., 80% line coverage]
**Rationale:** [Why this target? Balance between confidence and speed?]

### Integration Testing

**Framework:** [e.g., Supertest, Pytest, Testcontainers]
**Scope:** [What gets integration tested? APIs? Database interactions?]

### End-to-End Testing

**Framework:** [e.g., Playwright, Cypress, Selenium]
**Scope:** [Critical user journeys only? Full coverage?]
**Rationale:** [Why this scope? Speed vs. confidence trade-off?]

### Performance Testing

**Tool:** [e.g., k6, JMeter, Locust]
**When:** [Before major releases? Continuously? On-demand?]

---

## 10. Architecture Patterns & Principles

### Architecture Style

**Style:** [e.g., Microservices, Monolith, Modular Monolith, Serverless]
**Rationale:** [Why? Scale? Team size? Complexity? Operational overhead?]

### Design Patterns

**Preferred Patterns:** [e.g., Repository pattern, Factory pattern, Observer pattern]
**Anti-Patterns to Avoid:** [e.g., God objects, Spaghetti code, Circular dependencies]

### API Design Principles

**REST Principles:** [e.g., Resource-based URLs, HTTP verbs, HATEOAS]
**Versioning Strategy:** [e.g., URL versioning, Header versioning, No versioning]
**Rationale:** [Why this approach?]

### Data Modeling

**Approach:** [e.g., Normalized relational, Denormalized for read performance, Event sourcing]
**Rationale:** [Why? Read/write patterns? Query complexity? Scale?]

---

## 11. Performance Standards

### Frontend Performance

**Metrics:**
- Time to First Byte (TTFB): [e.g., < 200ms]
- First Contentful Paint (FCP): [e.g., < 1.5s]
- Largest Contentful Paint (LCP): [e.g., < 2.5s]
- Time to Interactive (TTI): [e.g., < 3.5s]
- Cumulative Layout Shift (CLS): [e.g., < 0.1]

**Bundle Size:** [e.g., Initial load < 200KB gzipped]
**Rationale:** [Why these targets? User context? Competition? Industry standards?]

### Backend Performance

**API Response Time:** [e.g., p95 < 200ms, p99 < 500ms]
**Database Query Time:** [e.g., p95 < 50ms]
**Throughput:** [e.g., 1000 requests/second]
**Rationale:** [Why these targets? SLA? User expectations? Cost?]

### Availability & Reliability

**Uptime Target:** [e.g., 99.9% (43.8 minutes downtime/month)]
**Error Budget:** [e.g., 0.1% of requests can fail]
**Rationale:** [Why this target? User impact? Cost of higher availability?]

---

## 12. Accessibility Standards

### Standard

**Level:** [e.g., WCAG 2.1 Level AA, Section 508]
**Rationale:** [Why? Legal requirement? User base? Values?]

### Key Requirements

- [e.g., Keyboard navigation for all interactive elements]
- [e.g., Screen reader compatibility]
- [e.g., Color contrast ratio 4.5:1 for text]
- [e.g., Alt text for all images]
- [e.g., Semantic HTML]

### Testing

**Tool:** [e.g., axe DevTools, WAVE, Lighthouse]
**Frequency:** [e.g., Every PR, Before release]

---

## 13. Localization & Internationalization

### Supported Languages

**Current:** [e.g., English, Spanish, French]
**Planned:** [e.g., German, Japanese]

### Approach

**Framework:** [e.g., react-i18next, gettext, ICU MessageFormat]
**String Management:** [e.g., Lokalise, Crowdin, JSON files in repo]
**Rationale:** [Why this approach? Scale? Collaboration with translators?]

### Considerations

- [e.g., Right-to-left (RTL) language support]
- [e.g., Date/time formatting]
- [e.g., Currency formatting]
- [e.g., Number formatting]

---

## 14. Mobile-Specific Considerations

### Offline Support

**Requirement:** [e.g., Full offline functionality, Read-only offline, No offline support]
**Rationale:** [Why? User context? Connectivity constraints?]

### Platform-Specific Features

**Push Notifications:** [Yes/No, Tool: e.g., Firebase Cloud Messaging]
**In-App Purchases:** [Yes/No, Platform: Apple, Google, both]
**Biometric Auth:** [Yes/No, Face ID, Touch ID, Fingerprint]
**Rationale:** [Why needed? User expectations? Business model?]

### App Size Constraints

**Target:** [e.g., < 50MB initial download]
**Rationale:** [Why? User acquisition? Connectivity constraints?]

---

## 15. Cost Considerations

### Budget Philosophy

**Approach:** [e.g., Optimize for developer velocity, Optimize for cost, Balance]
**Rationale:** [Why? Stage of company? Burn rate? Profitability?]

### Cost-Conscious Choices

**Example:** [e.g., Use serverless for low-traffic services, Reserved instances for predictable load]
**Monitoring:** [e.g., Monthly cost reviews, Budget alerts]

---

## 16. Team Skills & Growth

### Current Team Strengths

- [e.g., Strong in React/TypeScript]
- [e.g., DevOps expertise]
- [e.g., Mobile development]

### Skill Gaps

- [e.g., Machine learning]
- [e.g., Kubernetes]
- [e.g., Performance optimization]

### Learning & Development

**Budget:** [e.g., $2000/engineer/year for courses, conferences]
**Approach:** [e.g., Friday learning time, Internal tech talks, External conferences]

---

## 17. Vendor & SaaS Tools

### Current Vendors

**Vendor:** [e.g., Stripe]
**Service:** [e.g., Payment processing]
**Rationale:** [Why? Features? Compliance? Cost?]

**Vendor:** [e.g., Twilio]
**Service:** [e.g., SMS, Voice]
**Rationale:** [Why?]

### Vendor Selection Criteria

- [e.g., SOC 2 compliance required]
- [e.g., SLA of 99.9%+]
- [e.g., Responsive support]
- [e.g., Transparent pricing]
- [e.g., API-first approach]

---

## 18. Product Genome Alignment

### Purpose DNA Alignment

**How technical choices serve purpose:**
[e.g., Offline-first architecture serves our purpose of "field technicians complete repairs faster" because connectivity is unreliable in field environments]

### User DNA Alignment

**How technical choices serve users:**
[e.g., Mobile-first responsive design serves our primary user segment (field technicians) who exclusively use mobile devices]

### Experience DNA Alignment

**How technical choices enable quality standards:**
[e.g., Performance budget and monitoring ensure we meet our < 2s load time quality threshold]

### Architecture DNA Rationale

**Key architectural decisions and why:**
[Document your major ADRs and link them here]

---

## 19. Decision-Making Framework

### When to Deviate from Preferences

**Process:**
1. Document the rationale (Why is deviation needed?)
2. Assess the impact (What's the cost of this exception?)
3. Get team buy-in (Discuss in architecture review)
4. Create an ADR (Architecture Decision Record)
5. Update this document if it becomes the new standard

### Architecture Decision Records (ADRs)

**Location:** [e.g., /docs/adr/ in repository]
**Template:** [Link to ADR template]
**Review Process:** [e.g., Architecture review meeting, PR review]

---

## 20. Review & Updates

### Review Frequency

**Cadence:** [e.g., Quarterly]
**Owner:** [e.g., Tech Lead, Architecture Guild]
**Process:** [e.g., Team survey + discussion meeting]

### Change Log

**Date:** 2025-12-30
**Change:** Initial template created
**Rationale:** Establish baseline for team technical preferences

---

## Example: Product Genome-Aligned Technical Preferences

Below is an example of how a team might fill out this template with Product Genome principles in mind.

---

### Example Team Context

**Team Name:** FieldFix Mobile Diagnostics
**Team Size:** 8 engineers (4 mobile, 3 backend, 1 DevOps)
**Product Domain:** B2B Mobile SaaS for industrial equipment diagnostics
**Primary Users:** Field maintenance technicians
**Scale Requirements:** 10,000 active users, 1M API calls/day
**Key Constraints:** Offline-first requirement, glove-friendly UI, low-bandwidth environments

---

### Example: Programming Languages

**Primary Language:** TypeScript
**Version:** 5.0+
**Use Cases:** React Native mobile app, Node.js backend
**Rationale:** Type safety prevents bugs in critical diagnostic logic; strong ecosystem for both mobile and backend; team expertise from previous projects

**Secondary Language:** Python
**Version:** 3.11+
**Use Cases:** ML model training (diagnostic prediction), Data analysis scripts
**Rationale:** Industry standard for ML; extensive libraries; data science team familiarity

---

### Example: Mobile Framework

**Framework:** React Native
**Version:** 0.72+
**Rationale:**
- Code sharing between iOS/Android (small team, limited resources)
- Team expertise in React
- Large ecosystem for offline storage, background sync
- Fast iteration speed (aligns with Evolution Flow)

**Offline Support:** Required (full offline functionality)
**Rationale:** User DNA - Field technicians work in areas with spotty connectivity; diagnostic access can't depend on network

---

### Example: Performance Standards

**Mobile App Startup:** < 2 seconds on 3-year-old devices
**Rationale:** User DNA - Users operate in time-pressured environments; every second counts

**Diagnostic Load Time:** < 500ms offline, < 1s online
**Rationale:** Purpose DNA - North star metric is "average repair time"; slow diagnostics directly impact this

**Battery Consumption:** < 5% per hour of active use
**Rationale:** User DNA - Technicians work 8-12 hour shifts; app can't drain battery

---

## Conclusion

This template should be customized to your team's actual technical preferences. Keep it updated, use it in decision-making, and align it with your Product Genome DNAs.

**Remember:** Technology choices should serve your purpose, users, and quality standards—not the other way around.

---

**Product Genome Framework © 2025**
