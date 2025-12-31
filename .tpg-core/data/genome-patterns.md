# Product Genome Patterns & Anti-Patterns

**Version:** 1.0
**Last Updated:** 2025-12-30
**Framework:** Product Genome

---

## Introduction

This document catalogs common patterns (good practices) and anti-patterns (dysfunctions) for each Product DNA. Use this as:
- **Diagnostic tool:** Identify which anti-patterns your product exhibits
- **Design guide:** Apply healthy patterns proactively
- **Code review checklist:** Catch anti-patterns before they become embedded
- **Team learning:** Share common failure modes and solutions

---

## Purpose DNA Patterns

### Healthy Patterns

#### Pattern: North Star Metric Clarity

**What It Is:** A single, clear metric that captures value delivery and guides all decisions.

**Characteristics:**
- One metric, not multiple competing metrics
- Directly measures user value (not vanity metrics)
- Easy to explain and understand
- Measurable in near-real-time
- Influences team decisions daily

**Example:**
- **Product:** Field technician diagnostic app
- **North Star:** Average repair time (target: 60 minutes from 150 minutes)
- **Why It Works:** Directly measures the problem being solved; actionable; measurable

**Red Flags It Prevents:**
- Feature requests that don't move the metric
- Vanity metrics (page views, downloads) without user value connection
- Conflicting priorities

#### Pattern: Non-Negotiables as Gates

**What It Is:** 3-5 absolute standards that cannot be compromised, enforced as quality gates.

**Characteristics:**
- Small number (3-5 max, not 20)
- Stated clearly and publicly
- Actually enforced (violations block shipping)
- Connect to core mission
- Leadership models adherence

**Example:**
- **Non-Negotiable:** "Never sacrifice diagnostic accuracy for speed"
- **Enforcement:** Features that reduce accuracy are rejected in code review
- **Result:** Team trust in product quality; users trust results

**Red Flags It Prevents:**
- Quality compromised for deadlines
- Mission drift ("let's add social features")
- Scope creep

#### Pattern: Purpose as Filter

**What It Is:** Every feature request passes through "Does this serve our purpose?" filter.

**Characteristics:**
- Explicit filter in roadmap planning
- Stakeholders know to justify against purpose
- "No" is celebrated when purpose isn't served
- Purpose document is living (reviewed quarterly)

**Example:**
- **Request:** "Add a social feed so users can share diagnostics"
- **Filter:** "Our purpose is reducing repair time. How does social sharing serve that?"
- **Result:** Request rejected (or scoped to specific use case like "share with support team")

**Red Flags It Prevents:**
- Feature factory syndrome (building without clear "why")
- Stakeholder whims driving roadmap
- Loss of focus

---

### Anti-Patterns

#### Anti-Pattern: Vague Purpose Statement

**What It Is:** Purpose that sounds good but provides no actionable guidance.

**Symptoms:**
- Purpose statements like "be the best," "delight users," "innovate"
- No specific problem identified
- No measurable success criteria
- Different team members interpret purpose differently

**Example:**
- **Bad:** "Create innovative solutions for the modern workforce"
- **Why It Fails:** What problem? Which workforce? What's innovative? How measure success?

**Consequences:**
- No filter for feature decisions
- Team pulls in different directions
- Everything seems equally important

**Fix:**
- Define specific problem, solution, north star metric, non-negotiables
- Example: "Reduce time field technicians spend on equipment repairs by providing AI-powered diagnostic guidance"

#### Anti-Pattern: North Star by Committee

**What It Is:** Multiple competing metrics, each championed by different stakeholders.

**Symptoms:**
- "Our north stars are X, Y, and Z"
- Metrics conflict (optimizing one hurts another)
- No clear priority when trade-offs arise
- Different teams optimize different metrics

**Example:**
- "Our north stars are: user engagement, revenue, and customer satisfaction"
- **Problem:** Engagement tactics (notifications) may hurt satisfaction; revenue focus (paywalls) may hurt engagement

**Consequences:**
- Conflicting priorities
- Team confusion
- Inability to make trade-off decisions

**Fix:**
- Choose ONE north star metric
- Other metrics are supporting, not north star
- Clearly prioritize: north star > supporting metrics

#### Anti-Pattern: Negotiable Non-Negotiables

**What It Is:** Stated "non-negotiables" that are routinely compromised under pressure.

**Symptoms:**
- "Never do X" followed by exceptions for deadlines
- Quality standards waived for important stakeholders
- Team learns that standards don't really matter
- "We'll fix it later" culture

**Example:**
- **Stated:** "All features must pass accessibility standards"
- **Reality:** "We'll skip accessibility for this release and fix later"
- **Result:** Accessibility never fixed; users with disabilities excluded

**Consequences:**
- Erosion of trust (team and users)
- Quality debt accumulation
- Cultural shift to "standards are negotiable"

**Fix:**
- Only state non-negotiables you'll actually enforce
- Rare exceptions require executive approval + public justification
- Celebrate saying "no" to shipping below standards

---

## User DNA Patterns

### Healthy Patterns

#### Pattern: Evidence-Based Segments

**What It Is:** User segments defined through research, not assumptions or conference room brainstorming.

**Characteristics:**
- Based on user research (interviews, observation, analytics)
- Specific and actionable (not "millennials" or "busy professionals")
- Validated with real users
- Updated as evidence changes

**Example:**
- **Segment:** "Field maintenance technicians servicing industrial equipment, working alone in remote locations, time-pressured (SLA targets), wearing protective equipment (gloves), using mobile devices with spotty connectivity"
- **Why It Works:** Specific, observable, actionable (informs design decisions)

**Red Flags It Prevents:**
- Building for "everyone" (which is no one)
- Personas invented without research
- Ignoring user constraints

#### Pattern: Jobs-to-be-Done Focus

**What It Is:** Understanding the progress users want to make, not just tasks they perform.

**Characteristics:**
- JTBD format: "When [situation], I want to [motivation], so I can [outcome]"
- Focus on user goals, not product features
- Identifies current alternatives and switching costs
- Informs feature design

**Example:**
- **Task-Focused (Bad):** "User wants to search diagnostics"
- **JTBD-Focused (Good):** "When equipment fails unexpectedly (situation), I want to quickly identify the most likely cause (motivation), so I can start repairs without trial-and-error and meet my SLA (outcome)"

**Red Flags It Prevents:**
- Feature lists without user value
- Copying competitor features blindly
- Solving symptoms, not root causes

#### Pattern: Continuous Discovery

**What It Is:** Ongoing user research integrated into development rhythm, not one-time activity.

**Characteristics:**
- Weekly user contact (interviews, usability tests, field visits)
- Research integrated into sprints
- Insights shared broadly (not siloed in research team)
- User DNA updated quarterly based on new evidence

**Example:**
- **Cadence:** 2 user interviews per week, 1 usability test per sprint, quarterly field visits
- **Result:** Continuous learning, no stale assumptions

**Red Flags It Prevents:**
- Building on outdated assumptions
- Surprises after launch
- Loss of user empathy over time

---

### Anti-Patterns

#### Anti-Pattern: Building for "Everyone"

**What It Is:** Trying to serve all possible users, resulting in generic product that delights no one.

**Symptoms:**
- No primary user segment
- Feature requests justified as "some users want this"
- Conflicting requirements from different user types
- Mediocre fit for all segments

**Example:**
- "Our app is for professionals, students, and casual users"
- **Result:** Not optimized for any; students find it too complex, professionals find it too simplistic

**Consequences:**
- Generic, undifferentiated product
- No strong value proposition
- Low user satisfaction across all segments

**Fix:**
- Choose primary segment explicitly
- Build for primary segment first
- Add other segments only after primary is delighted

#### Anti-Pattern: Persona Theater

**What It Is:** Personas created in conference room without research, then never referenced again.

**Symptoms:**
- Personas have names, photos, hobbies (but no research basis)
- Created in workshop, printed as posters
- Never referenced in actual decisions
- No validation with real users

**Example:**
- "Marketing Mary, 35, likes yoga and coffee, wants easy-to-use software"
- **Problem:** Not based on research; doesn't inform design decisions; generic

**Consequences:**
- False sense of user understanding
- Decisions based on stereotypes, not evidence
- Waste of time creating personas

**Fix:**
- Base segments on research, not imagination
- Focus on JTBD and context, not demographic details
- Validate with real users
- Update as evidence changes

#### Anti-Pattern: Assumption-Based Development

**What It Is:** Building features based on team assumptions, not user validation.

**Symptoms:**
- "We think users want X"
- "I'm a user, and I would want Y"
- No user research budget
- Surprises after launch ("users didn't adopt the feature")

**Example:**
- "We think users want a dark mode" (no research)
- **Reality:** Users want offline access (identified in research, but deprioritized for assumed need)

**Consequences:**
- Building wrong things
- Wasted effort on unwanted features
- Low user adoption

**Fix:**
- Validate assumptions before building
- Talk to users (interviews, surveys, usability tests)
- Test with prototypes before production code
- Use fake door tests to measure interest

---

## Experience DNA Patterns

### Healthy Patterns

#### Pattern: Context-Appropriate Quality Standards

**What It Is:** Quality thresholds tailored to user context (mobile, low-connectivity, stress, etc.).

**Characteristics:**
- Standards reflect actual user environment
- Performance budgets based on user devices
- Usability standards account for user constraints (gloves, low light, etc.)
- Tested in realistic conditions

**Example:**
- **User Context:** Field technicians using mobile in outdoor, low-connectivity environments
- **Standards:**
  - Load time < 2s on 3G
  - Works fully offline
  - Touch targets > 48px (glove-friendly)
  - High contrast (outdoor readability)

**Red Flags It Prevents:**
- Designing for ideal conditions (desk, high-bandwidth, mouse)
- Performance regressions unnoticed
- Usability failures in real context

#### Pattern: MQB as Pre-Commit Gates

**What It Is:** Minimum Quality Bar gates enforced before code merges, not after.

**Characteristics:**
- Automated gates in CI/CD (tests, linting, performance)
- Manual gates in PR review (accessibility, usability)
- Failures block merge
- No "we'll fix later" exceptions

**Example:**
- **Gate:** Test coverage must be > 80%
- **Enforcement:** PR blocked if coverage drops
- **Result:** Quality maintained, no test debt

**Red Flags It Prevents:**
- Quality compromised for speed
- Technical debt accumulation
- "We'll fix it later" (which never comes)

#### Pattern: Consistent Design System

**What It Is:** Shared component library and design patterns, ensuring consistency.

**Characteristics:**
- Single source of truth for UI components
- Design and code in sync
- Accessible by default (WCAG AA)
- Documented with usage guidelines

**Example:**
- Component library with buttons, forms, modals, etc.
- All accessible, all following design standards
- Developers use library components, don't build custom
- **Result:** Consistency, faster development, better accessibility

**Red Flags It Prevents:**
- Inconsistent UX across features
- Reinventing the wheel (custom components for every feature)
- Accessibility as afterthought

---

### Anti-Patterns

#### Anti-Pattern: Quality as Negotiable

**What It Is:** Quality standards compromised under deadline pressure.

**Symptoms:**
- "We'll ship with bugs and fix later"
- "Skip accessibility for this release"
- "Performance isn't great but it's good enough"
- Quality debt accumulates

**Example:**
- **Deadline approaching:** "Let's skip automated tests for this feature and add them later"
- **Reality:** Tests never added, feature becomes untestable, bugs accumulate

**Consequences:**
- Technical debt compounds
- User-facing quality degrades
- Team learns quality doesn't matter

**Fix:**
- Enforce MQB gates (no exceptions)
- Adjust scope, not quality
- Celebrate saying "no" to shipping below bar

#### Anti-Pattern: Desktop-First for Mobile Users

**What It Is:** Designing for desktop, then "making it responsive" for mobile users who are primary segment.

**Symptoms:**
- Mobile experience is afterthought
- Responsive design added late
- Mobile performance poor
- User segment is primarily mobile

**Example:**
- **Primary User:** Field technicians (100% mobile)
- **Design Process:** Desktop mockups → responsive tweaks
- **Result:** Clunky mobile experience, slow performance

**Consequences:**
- Poor experience for primary users
- Performance issues
- Low user satisfaction

**Fix:**
- Design mobile-first if users are mobile-primary
- Test on actual devices in actual conditions
- Performance budget for mobile networks

#### Anti-Pattern: Accessibility as Afterthought

**What It Is:** Adding accessibility at the end (or not at all) instead of building it in.

**Symptoms:**
- "We'll add accessibility after launch"
- No accessibility testing until late
- Retrofitting accessibility (hard and incomplete)
- Legal risk

**Example:**
- Build entire product, then run accessibility audit
- Find hundreds of violations
- Expensive retrofit, still incomplete

**Consequences:**
- Excludes users with disabilities
- Legal risk (ADA, Section 508)
- Expensive to retrofit
- Brand damage

**Fix:**
- Build accessibility in from start
- Use accessible component library
- Test with screen readers, keyboard-only
- Automate accessibility testing in CI/CD

---

## Architecture DNA Patterns

### Healthy Patterns

#### Pattern: Architecture Decision Records (ADRs)

**What It Is:** Document why architectural decisions were made, not just what was decided.

**Characteristics:**
- Template: Context, Decision, Rationale, Consequences
- Stored in version control (near code)
- Reviewed during architecture changes
- Updated as context changes

**Example ADR:**
```
Title: Use PostgreSQL for primary database
Context: Need reliable transactional database for financial data
Decision: PostgreSQL over MongoDB
Rationale: ACID compliance critical for financial accuracy; team expertise
Consequences: More complex queries but guaranteed data integrity
```

**Red Flags It Prevents:**
- "Why did we choose this?" → "No idea"
- Revisiting past decisions without context
- Knowledge loss when team members leave

#### Pattern: Intentional Modularity

**What It Is:** Architecture designed for change, with clear boundaries and loose coupling.

**Characteristics:**
- Modules with clear responsibilities
- Interfaces over implementations
- Dependencies flow inward (core has no dependencies)
- Easy to test in isolation

**Example:**
- Diagnostic engine module: no UI dependencies, pure logic
- API layer: thin adapter, delegates to domain logic
- **Result:** Can change UI without touching diagnostics, can test diagnostics in isolation

**Red Flags It Prevents:**
- Tight coupling (changes ripple everywhere)
- Hard to test (too many dependencies)
- Hard to change (everything connected)

#### Pattern: Instrumentation-First

**What It Is:** Build observability (logging, metrics, tracing) into architecture from day one.

**Characteristics:**
- Logging at appropriate levels (debug, info, warn, error)
- Metrics for key operations (latency, errors, throughput)
- Distributed tracing for microservices
- Dashboards for real-time visibility

**Example:**
- Every API endpoint logs duration, status code, error details
- Metrics dashboards show p95/p99 latency
- Alerts fire when error rate > 1%
- **Result:** Issues detected quickly, root cause analysis faster

**Red Flags It Prevents:**
- "We'll add monitoring later" (never comes)
- Production issues hard to debug
- No visibility into system behavior

---

### Anti-Patterns

#### Anti-Pattern: Architecture by Accident

**What It Is:** No intentional architecture design; structure emerges chaotically.

**Symptoms:**
- "We'll refactor later" (never comes)
- No documentation of why decisions made
- Coupling increases over time
- Hard to change anything without breaking something

**Example:**
- Start with simple script
- Add features incrementally without design
- Result: Spaghetti code, tight coupling, no clear structure

**Consequences:**
- Increasing cost of change
- Hard to onboard new developers
- Refactoring becomes impossible

**Fix:**
- Document architecture intentions (ADRs)
- Design for modularity upfront
- Refactor proactively (don't accumulate debt)

#### Anti-Pattern: Over-Engineering

**What It Is:** Building for hypothetical future scale/complexity instead of actual needs.

**Symptoms:**
- Microservices for 3-person team
- Complex abstraction layers "for flexibility"
- Premature optimization
- High operational overhead for low value

**Example:**
- Startup with 100 users builds microservices architecture
- Operational complexity slows development
- Scale problems don't materialize
- **Result:** Wasted effort, slow velocity

**Consequences:**
- Slower development
- Higher operational costs
- Complexity without benefit

**Fix:**
- Build for current needs + 1-2 years
- Start simple, evolve architecture as needed
- Optimize when data shows it's needed

#### Anti-Pattern: Technology Resume-Driven Development

**What It Is:** Choosing technologies to pad resumes, not because they solve problems.

**Symptoms:**
- "Let's use Kubernetes" (no orchestration need)
- "Let's rewrite in Go" (no performance issue)
- Technology choices disconnected from user needs
- Churn for churn's sake

**Example:**
- Team rewrites working Python service in Rust "for performance"
- No performance issue existed
- Months of effort, no user-facing improvement

**Consequences:**
- Wasted effort
- Operational complexity
- Distraction from user value

**Fix:**
- Justify technology choices with user/business value
- Document rationale in ADRs
- Challenge "shiny object" proposals

---

## Intelligence DNA Patterns

### Healthy Patterns

#### Pattern: Hypothesis-Driven Development

**What It Is:** Formulate testable hypotheses for features, then validate with data.

**Characteristics:**
- Hypothesis format: "If we [change], then [metric] will [direction] because [reason]"
- A/B tests for validation
- Clear decision criteria (ship if metric improves by X%)
- Learning documented (why did/didn't it work?)

**Example:**
- **Hypothesis:** "If we add one-click checkout, conversion will increase 15% because users abandon due to form friction"
- **Test:** A/B test with 50/50 split
- **Result:** Conversion increased 18% → Ship
- **Learning:** Form friction was main abandonment cause

**Red Flags It Prevents:**
- Building without validation
- Keeping failed features (sunk cost fallacy)
- Not learning from experiments

#### Pattern: Leading Indicators Tracking

**What It Is:** Track early signals (leading indicators) that predict north star metric movement.

**Characteristics:**
- Identify metrics that predict north star
- Track daily/weekly (before north star moves)
- Use for early course correction
- Connect to features/changes

**Example:**
- **North Star:** Revenue
- **Leading Indicators:** Trial signups, activation rate, feature usage
- **Usage:** If trial signups drop, investigate before revenue drops

**Red Flags It Prevents:**
- Waiting too long for feedback (north star is lagging)
- Surprises in quarterly metrics
- Reactive vs. proactive management

#### Pattern: Data Democratization

**What It Is:** Analytics accessible to entire team, not locked in data team.

**Characteristics:**
- Self-service dashboards
- Common definitions (what is "active user"?)
- Training on analytics tools
- Data-driven culture

**Example:**
- Engineers can query analytics database
- PMs have dashboards for their features
- Everyone sees north star metric daily

**Red Flags It Prevents:**
- HiPPO-driven decisions (data available for everyone)
- Slow decision-making (waiting for data team)
- Inconsistent definitions (everyone uses same metrics)

---

### Anti-Patterns

#### Anti-Pattern: Vanity Metrics

**What It Is:** Tracking metrics that look good but don't measure real value.

**Symptoms:**
- Page views, downloads, registered users (without engagement)
- Metrics always go up (never down)
- No connection to business outcomes
- Team focuses on moving metrics, not delivering value

**Example:**
- **Metric:** "1 million downloads!"
- **Reality:** 5% activation rate, 1% retention
- **Truth:** 950,000 users tried and abandoned

**Consequences:**
- False sense of success
- Resource allocation to wrong areas
- Not measuring what matters

**Fix:**
- Track value metrics (engagement, retention, revenue)
- Track cohort retention, not just total users
- Connect metrics to business outcomes

#### Anti-Pattern: No Instrumentation

**What It Is:** Building features without analytics, flying blind.

**Symptoms:**
- "We'll add analytics later" (never comes)
- Can't measure feature adoption
- Don't know if features improve north star
- Decisions based on opinions, not data

**Example:**
- Launch major feature without tracking
- Three months later: "Is anyone using it?" → "No idea"

**Consequences:**
- Can't learn from experiments
- Keep failed features, kill successful ones
- No evidence for decisions

**Fix:**
- Add analytics before feature launches
- Track feature adoption, usage, impact
- Review metrics weekly

#### Anti-Pattern: Analysis Paralysis

**What It Is:** Endless analysis without action, perfectionism over progress.

**Symptoms:**
- Requests for "more data" endlessly
- A/B tests run long past statistical significance
- Decisions delayed indefinitely
- Fear of being wrong

**Example:**
- A/B test reaches significance (p < 0.05) in week 1
- Team runs test for 6 more weeks "to be sure"
- Competitor ships similar feature in that time

**Consequences:**
- Slow decision-making
- Competitive disadvantage
- Team frustration

**Fix:**
- Set decision criteria upfront
- Act when criteria met
- Bias toward action (reversible decisions especially)

---

## Cultural DNA Patterns

### Healthy Patterns

#### Pattern: Blameless Post-Mortems

**What It Is:** After incidents, focus on learning and system improvements, not blame.

**Characteristics:**
- "What happened?" not "Who's fault?"
- Document timeline, root cause, prevention
- Share learnings broadly
- Celebrate learning from failures

**Example (from Etsy):**
- Production outage occurs
- Post-mortem: Document what happened, why, how to prevent
- Share with entire engineering team
- No blame, only learning

**Red Flags It Prevents:**
- Hiding mistakes (fear of punishment)
- Repeated failures (not learning)
- Psychological unsafety

#### Pattern: Quality Celebration

**What It Is:** Celebrate saying "no" to shipping below quality bar, not just shipping features.

**Characteristics:**
- "No-ship" decisions celebrated publicly
- Quality champions recognized
- MQB violations called out respectfully
- Culture of pride in craft

**Example:**
- Engineer blocks PR due to accessibility violations
- Team thanks engineer for upholding standards
- Fix made, then shipped
- **Result:** Quality is everyone's responsibility

**Red Flags It Prevents:**
- Quality compromise culture
- "Ship at all costs" mentality
- Accumulation of quality debt

#### Pattern: Evidence Over Opinions

**What It Is:** Decisions grounded in data and user research, not HiPPO (Highest Paid Person's Opinion).

**Characteristics:**
- "Show me the data" is normal ask
- User research influences decisions
- Opinions welcome, but data weighs more
- Respectful challenge is encouraged

**Example:**
- CEO suggests feature
- PM asks: "What user research supports this?"
- Team validates (or invalidates) with user interviews
- Decision based on evidence, not seniority

**Red Flags It Prevents:**
- HiPPO-driven roadmap
- Political decision-making
- Building based on assumptions

---

### Anti-Patterns

#### Anti-Pattern: Blame Culture

**What It Is:** When things fail, find culprit and punish, rather than fix system.

**Symptoms:**
- "Whose fault is this?"
- Fear of making mistakes
- Hiding problems until they explode
- No psychological safety

**Example:**
- Bug reaches production
- Manager asks: "Who wrote this code?"
- Developer blamed, shamed
- **Result:** Developers hide mistakes, don't report issues early

**Consequences:**
- Psychological unsafety
- Problems hidden, not fixed
- No learning from failures
- High turnover

**Fix:**
- Shift to blameless post-mortems
- Focus on system improvements
- Celebrate learning from failures

#### Anti-Pattern: Feature Factory Culture

**What It Is:** Measure success by features shipped, not value delivered.

**Symptoms:**
- "How many features did we ship this quarter?"
- No measurement of feature success
- Velocity over value
- Roadmap driven by requests, not strategy

**Example:**
- Team ships 20 features in Q1
- User satisfaction flat or declining
- North star metric unchanged
- **Truth:** Movement without progress

**Consequences:**
- Building wrong things faster
- Burnout from meaningless work
- User dissatisfaction

**Fix:**
- Measure value (north star impact), not output
- Kill failed features
- Celebrate learning and impact, not just shipping

#### Anti-Pattern: Hero Culture

**What It Is:** Celebrating firefighting and overtime, not prevention and sustainability.

**Symptoms:**
- "John stayed up all night to fix the bug!" (celebrated)
- Firefighters are heroes, preventers are invisible
- Crunch time normalized
- Burnout accepted

**Example:**
- Production outage
- Engineer works 20 hours straight to fix
- Celebrated as hero
- **Problem:** No discussion of why outage happened or how to prevent

**Consequences:**
- Burnout
- Reactive vs. proactive culture
- Quality issues normalized

**Fix:**
- Celebrate prevention, not just firefighting
- Invest in stability, monitoring, automation
- Sustainable pace, not heroics

---

## Evolution Flow Patterns

### Healthy Patterns

#### Pattern: Vertical Slicing

**What It Is:** Slice features by user value (end-to-end), not technical layers.

**Characteristics:**
- Each slice delivers user value
- Slice includes UI, logic, data (full stack)
- Can be deployed and tested independently
- Small, iterative releases

**Example (Good):**
- Slice 1: View diagnostic history (basic read-only)
- Slice 2: Filter diagnostics by equipment type
- Slice 3: Export diagnostics to PDF
- **Result:** Each slice delivers value, can be released independently

**Example (Bad):**
- Slice 1: Database layer
- Slice 2: API layer
- Slice 3: UI layer
- **Problem:** No user value until all slices complete

**Red Flags It Prevents:**
- Long time-to-value
- Big-bang releases
- Integration nightmares

#### Pattern: Validation Before Build

**What It Is:** Test assumptions with prototypes, user research, fake door tests before production code.

**Characteristics:**
- Prototypes for usability testing
- Fake door tests for interest measurement
- Concierge MVP (manual version) to validate
- Build production only after validation

**Example:**
- **Hypothesis:** "Users want automated report generation"
- **Validation:** Add "Generate Report" button (fake door)
- **Measure:** Click rate (20% of users click)
- **Decision:** Build it (validated interest)

**Red Flags It Prevents:**
- Building unwanted features
- Wasted engineering effort
- Surprises after launch

#### Pattern: Feature Flags for Controlled Rollout

**What It Is:** Deploy code but control feature visibility, enabling gradual rollout and easy rollback.

**Characteristics:**
- Feature flags in code
- Gradual rollout (1% → 10% → 50% → 100%)
- Monitor metrics at each stage
- Easy rollback if issues

**Example:**
- Deploy new checkout flow behind flag
- Enable for 1% of users
- Monitor conversion, errors
- If good, scale to 10%, then 50%, then 100%
- **Result:** Safe rollout, easy rollback

**Red Flags It Prevents:**
- Big-bang releases
- All-or-nothing deployments
- Difficult rollbacks

---

### Anti-Patterns

#### Anti-Pattern: Big-Bang Releases

**What It Is:** Accumulate months of changes, release all at once, pray it works.

**Symptoms:**
- Infrequent releases (quarterly, annually)
- Large batches of changes
- Integration nightmares
- High risk of major failures

**Example:**
- Develop for 6 months without releasing
- Release everything at once
- Multiple features break
- Users overwhelmed with changes
- Rollback is hard (what broke?)

**Consequences:**
- High risk
- Hard to debug (too many changes)
- Long feedback loops
- User overwhelm

**Fix:**
- Small, frequent releases
- Vertical slicing (incremental user value)
- Feature flags for gradual rollout

#### Anti-Pattern: Skipping Validation

**What It Is:** Jump from idea directly to production code without testing assumptions.

**Symptoms:**
- "We think users want X" → build it
- No prototypes, no user testing
- Surprises after launch
- Low feature adoption

**Example:**
- "We think users want a dark mode"
- Build dark mode (2 weeks of work)
- Launch
- **Result:** 2% adoption (users didn't care)
- **Lesson:** Could have validated with fake door test (1 day)

**Consequences:**
- Wasted effort
- Low user adoption
- Building wrong things

**Fix:**
- Prototype and test before building
- Fake door tests for interest
- User research for validation

#### Anti-Pattern: No Kill Criteria

**What It Is:** Features launched without defining success/failure criteria, so failed features live forever.

**Symptoms:**
- "Let's launch and see what happens"
- No defined success metrics
- Failed features never removed
- Bloat accumulates

**Example:**
- Launch social feed feature
- No success criteria defined
- Three months later: 1% usage
- Feature remains (no one decides to kill it)
- **Result:** Maintenance burden for no value

**Consequences:**
- Product bloat
- Maintenance burden
- Confusion for users (too many features)

**Fix:**
- Define success criteria before launch
- Set kill criteria (if metric doesn't improve by X, we kill it)
- Review features quarterly, kill failures

---

## Genome Coherence Patterns

### Healthy Patterns

#### Pattern: DNA Alignment Reviews

**What It Is:** Quarterly reviews to assess how well DNAs reinforce each other.

**Characteristics:**
- Score alignment between DNA pairs (1-5)
- Identify misalignments
- Action plans to improve coherence
- Track coherence over time

**Example:**
- Purpose DNA: Reduce repair time
- User DNA: Field technicians (mobile, offline, time-pressured)
- Experience DNA: Mobile-first, offline-capable, performance < 2s
- Architecture DNA: Offline-first architecture, mobile-optimized
- **Coherence:** High (all DNAs point same direction)

**Red Flags It Prevents:**
- Conflicting priorities
- Misaligned decisions
- Different teams pulling different directions

#### Pattern: Purpose-Driven Trade-Offs

**What It Is:** When trade-offs arise, Purpose DNA provides the tiebreaker.

**Characteristics:**
- Trade-off discussions reference purpose
- Non-negotiables guide decisions
- North star metric impact is deciding factor
- Consistency in trade-off patterns

**Example:**
- **Trade-off:** Speed vs. Accuracy in diagnostic suggestions
- **Purpose DNA:** "Never sacrifice accuracy for speed" (non-negotiable)
- **Decision:** Prioritize accuracy, even if slower
- **Result:** Consistent with purpose, maintains user trust

**Red Flags It Prevents:**
- Inconsistent decisions
- Violating stated values
- Team confusion about priorities

---

### Anti-Patterns

#### Anti-Pattern: Siloed DNAs

**What It Is:** DNAs developed independently, don't reinforce each other.

**Symptoms:**
- Different teams own different DNAs
- DNAs conflict (purpose says X, user research says Y)
- No holistic view
- Decisions pull in different directions

**Example:**
- Purpose DNA: "Fast time-to-market"
- Experience DNA: "Highest quality standards"
- **Conflict:** Speed vs. quality unresolved
- **Result:** Team confusion, inconsistent decisions

**Consequences:**
- Conflicting priorities
- Team confusion
- Suboptimal decisions

**Fix:**
- Cross-functional DNA development
- Coherence reviews (quarterly)
- Purpose DNA as ultimate tiebreaker

#### Anti-Pattern: Static DNAs

**What It Is:** DNAs created once, never updated, become stale.

**Symptoms:**
- DNAs written years ago, not reviewed
- No longer reflect reality
- Team doesn't reference them
- "Those old documents"

**Example:**
- Purpose DNA written in 2020
- Market has changed, users have changed
- Purpose no longer relevant
- Team ignores it

**Consequences:**
- DNAs become irrelevant
- No guidance for decisions
- Wasted effort creating them

**Fix:**
- Quarterly reviews
- Update as evidence changes
- Treat as living documents
- Reference in actual decisions

---

## Conclusion

Patterns and anti-patterns provide a diagnostic lens for product health:

- **Identify:** Which anti-patterns does your product exhibit?
- **Prioritize:** Which are causing the most pain?
- **Apply Patterns:** Replace anti-patterns with healthy patterns
- **Measure:** Track improvement over time

**Remember:** Anti-patterns are common, not shameful. Recognizing them is the first step to fixing them.

Use this guide to diagnose, design, and improve your Product Genome health.

---

**Product Genome Framework © 2025**
