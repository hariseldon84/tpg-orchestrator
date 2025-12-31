# Product Genome Knowledge Base

**Version:** 1.0
**Last Updated:** 2025-12-30
**Framework:** Product Genome™

---

## Table of Contents

1. [Introduction to Product Genome](#introduction)
2. [The 6 Core DNAs](#the-6-core-dnas)
3. [Minimum Quality Bar (MQB)](#minimum-quality-bar)
4. [Builder's Hierarchy](#builders-hierarchy)
5. [Evolution Flow](#evolution-flow)
6. [Genome Coherence](#genome-coherence)
7. [Common Anti-Patterns](#common-anti-patterns)
8. [Best Practices](#best-practices)

---

## Introduction to Product Genome {#introduction}

### What is Product Genome?

The Product Genome is a framework that treats product development like a biological system with interconnected DNA strands. Just as biological DNA determines an organism's characteristics and behavior, Product DNA determines how a product grows, evolves, and responds to its environment.

### Why "Genome" and Not "Pillars" or "Principles"?

**Genome is Different Because:**

- **Generative** - It creates and grows, not just supports
- **Adaptive** - It responds to environmental changes
- **Coherent** - Every part connects to every other part
- **Reproducible** - You can teach it, scale it, and evolve it
- **Interdependent** - Damage to one DNA impacts everything downstream

**The Key Insight:** If one DNA in a product is broken, it affects everything built on top of it. Just like biological DNA.

### The Core Problem Product Genome Solves

**Feature Factory Syndrome:** Teams building features without clear purpose, user understanding, or quality standards. Movement without progress.

**Symptoms:**
- Lots of features, low user satisfaction
- Conflicting priorities
- Technical debt accumulation
- Team confusion about "why" they're building something
- Quality is negotiable under deadline pressure

**The Solution:** Establish clear DNA across 6 dimensions that guide all decisions and enforce non-negotiable standards.

---

## The 6 Core DNAs {#the-6-core-dnas}

### 1. Purpose DNA: The North Star

**What It Is:** Why the product exists, what problem it solves, what it will never compromise on.

**Key Elements:**
- **Problem Definition** - What specific problem are we solving?
- **Solution Vision** - How do we uniquely solve this problem?
- **North Star Metric** - The ONE metric that captures value delivery
- **Success Criteria** - Measurable outcomes that indicate success
- **Non-Negotiables** - What we will NEVER compromise (3-5 maximum)
- **Value Proposition** - Value to users, business, ecosystem
- **Scope Boundaries** - What's IN and OUT of scope

**Purpose as Filter:** Every feature decision must pass: "Does this serve our purpose?"

**Common Failures:**
- Vague purpose statements ("be the best")
- No north star metric or vanity metrics
- No non-negotiables (everything is negotiable)
- Scope creep (no boundaries)

**Example (Strong Purpose DNA):**
```
Problem: Field technicians spend 2.5 hours per repair due to generic troubleshooting guides
Solution: AI-powered diagnostic assistant with real-time IoT data and context-aware guidance
North Star: Average Repair Time (target: 60 minutes from 150)
Non-Negotiable: Never sacrifice diagnostic accuracy for speed
```

### 2. User DNA: The Reality Anchor

**What It Is:** Who you're building for, their jobs-to-be-done, context, constraints, and behaviors.

**Key Elements:**
- **User Segments** - Specific, evidence-based segments (NOT "everyone")
- **Primary Segment** - The ONE segment you optimize for first
- **Jobs-to-be-Done (JTBD)** - What progress users want to make
- **User Context** - Where, when, how they use the product
- **User Constraints** - Time, skills, environment, technology limitations
- **User Behaviors** - What they actually DO (not what they say)
- **Evidence Sources** - Research methods and ongoing discovery plan

**Building for "Everyone" = Building for No One**

**JTBD Format:**
"When [situation], I want to [motivation], so I can [outcome]"

**Context Matters:**
- Same user in different contexts has different needs
- Mobile technician in field ≠ same technician in office
- Stress, time pressure, connectivity all shape needs

**Evidence-Based, Not Assumption-Based:**
- User research (interviews, observation, surveys)
- Analytics and behavioral data
- Support tickets and feedback
- Ongoing continuous discovery

**Common Failures:**
- "Users" without specific segments
- Personas invented in conference room (not research-based)
- No understanding of constraints
- Assumptions instead of evidence

### 3. Experience DNA: Quality Thresholds & Flow

**What It Is:** How users perceive and interact with the product, non-negotiable quality standards.

**Key Elements:**
- **Quality Thresholds** - Measurable standards for "good enough"
- **Performance Standards** - Load times, response times, uptime
- **Usability Standards** - Cognitive load, error handling, learnability
- **Accessibility Standards** - WCAG levels, inclusive design
- **Interaction Patterns** - Consistent UX patterns, not chaos
- **MQB Gates** - Quality gates that block shipping if not met

**Quality is NOT Negotiable:**
- Define minimum standards BEFORE building
- Standards apply to ALL features, no exceptions
- Deadline pressure cannot compromise quality
- "We'll fix it later" = never fixing it

**Minimum Quality Bar (MQB):**
The line you will NOT cross. Features below MQB don't ship.

**Common Failures:**
- No defined quality standards (it "feels right")
- Quality compromised for deadlines
- Inconsistent UX across features
- Accessibility as afterthought

### 4. Architecture DNA: Structural Stability

**What It Is:** How the system is designed to evolve, technical decisions that enable/limit future progress.

**Key Elements:**
- **System Structure** - Modularity, boundaries, dependencies
- **Technical Decisions** - Languages, frameworks, patterns
- **ADRs (Architecture Decision Records)** - WHY decisions were made
- **Scalability Design** - How system handles growth
- **Technical Constraints** - What limits exist and why
- **Evolution Path** - How architecture enables future changes

**Architecture by Design, Not by Accident:**
- Intentional decisions, not defaults
- Document the "why" (ADRs), not just "what"
- Design for evolution, not just current needs
- Technical decisions serve user needs (from User DNA)

**ADR Format:**
```
Title: Use PostgreSQL for primary database
Context: Need reliable transactional database for financial data
Decision: Chose PostgreSQL over MongoDB
Rationale: ACID compliance critical for financial accuracy
Consequences: More complex queries but guaranteed data integrity
```

**Common Failures:**
- "Architecture by accident" (no intentional design)
- No documentation of WHY decisions were made
- Over-engineering or under-engineering
- Technical choices that ignore user constraints

### 5. Intelligence DNA: Evidence Infrastructure

**What It Is:** How you measure, learn, and make evidence-based decisions (merges Data DNA + Validation DNA).

**Key Elements:**
- **Instrumentation** - What you measure and why
- **Key Metrics** - North star + supporting metrics
- **Experimentation Framework** - A/B testing, hypothesis testing
- **Analytics Infrastructure** - Tools and systems for measurement
- **Learning Loops** - How insights lead to action
- **Evidence-Based Decisions** - Data over opinions

**Why Merge Data + Validation?**
- Data without validation = noise
- Validation without data = guesswork
- Together = evidence-based learning

**Hypothesis-Driven Development:**
1. Hypothesis: "Adding one-click checkout will increase conversion by 15%"
2. Test: A/B test with control group
3. Measure: Track conversion rates
4. Learn: Did hypothesis hold? Why or why not?
5. Decide: Ship, iterate, or kill

**Intelligence DNA Enables:**
- Knowing if you're succeeding (north star tracking)
- Learning what works (experiments)
- Catching problems early (monitoring)
- Making decisions on evidence, not HiPPO (Highest Paid Person's Opinion)

**Common Failures:**
- No instrumentation ("we'll add analytics later")
- Vanity metrics instead of value metrics
- No experimentation (build and hope)
- Building on assumptions instead of evidence

### 6. Cultural DNA: Values + Growth

**What It Is:** Values embedded in product decisions, how teams work, sustainable growth strategies (merges Cultural DNA + Growth DNA).

**Key Elements:**
- **Product Values** - What matters in product decisions
- **Decision Framework** - How decisions are made
- **Team Culture** - How team collaborates
- **Growth Strategies** - Sustainable scaling, not hacks
- **Learning Culture** - How team learns and evolves
- **Quality Culture** - Attitude toward standards and excellence

**Why Merge Culture + Growth?**
- Hacks don't lead to sustainable growth
- Culture drives long-term success
- Values shape product direction

**Product Values Examples:**
- "User privacy is non-negotiable"
- "We ship only when quality bar is met"
- "Evidence over opinions in decisions"
- "Learning from failures is celebrated"

**Growth Through Culture:**
- User referrals from delight (not tricks)
- Sustainable practices, not burn-out sprints
- Building for retention, not just acquisition

**Common Failures:**
- Growth hacks instead of sustainable strategies
- Values stated but not enforced
- Culture of shipping fast > shipping right
- Blame culture instead of learning culture

---

## Minimum Quality Bar (MQB) {#minimum-quality-bar}

### What is MQB?

The **Minimum Quality Bar** is the set of non-negotiable quality standards that EVERY product increment must meet before shipping.

**MQB is the line you will NOT cross, regardless of deadline pressure.**

### Why MQB Matters

**Without MQB:**
- "We'll fix it later" (but later never comes)
- Quality debt accumulates
- Standards become negotiable
- Team learns quality doesn't matter
- Feature factory syndrome

**With MQB:**
- Clear standards everyone understands
- Quality is protected from deadline pressure
- Technical debt is prevented, not created
- Team builds quality culture
- Users receive consistent quality

### MQB Gates

**12 Critical Gates:**

1. **Purpose Alignment** - Does feature serve stated purpose?
2. **User Value** - Does feature address real user need (validated)?
3. **Functional Quality** - All acceptance criteria met, no critical bugs?
4. **User Experience** - Usability, accessibility, context-appropriate?
5. **Performance** - Meets defined thresholds?
6. **Reliability** - Stable, handles errors gracefully?
7. **Security** - Authentication, authorization, data protection?
8. **Testing** - Adequate test coverage, tests pass?
9. **Documentation** - User and technical docs complete?
10. **Operational Readiness** - Monitoring, logging, rollback capability?
11. **North Star Impact** - Expected metric impact defined?
12. **Non-Negotiables** - No violations of stated non-negotiables?

**ALL gates must pass. One failure = NO SHIP.**

### MQB Enforcement

**Critical Rule:** MQB violations block shipping. Period. No exceptions for deadlines.

**Exception Handling:**
- Exceptions are EXTREMELY rare
- Require executive-level approval
- Must include risk assessment and mitigation plan
- Must include remediation timeline

**Cultural Shift:**
- Celebrate saying "no" to shipping bad quality
- Quality is everyone's responsibility
- MQB protects users AND team

### The Cost of "We'll Fix It Later"

**Data:**
- $2.41 trillion annual cost of bad software (US alone)
- 60% of rework costs from wrong/incomplete requirements
- 87% of engineering budget can go to maintenance in severe cases

**Reality:** "Later" never comes. Quality debt compounds.

---

## Builder's Hierarchy {#builders-hierarchy}

### What is Builder's Hierarchy?

A four-level framework that connects strategy to execution, preventing "building features nobody needs" syndrome.

### The Four Levels

**1. Goal (Why?)**
- What business outcome are we after?
- NOT "build a feature" (that's output, not goal)
- Measurable, time-bound, outcome-focused

**Example:**
- Bad Goal: "Build automated reconciliation"
- Good Goal: "Cut reconciliation time from 4 hours to 15 minutes for 95% of transactions within 30 days"

**2. Actors (Who?)**
- Whose behavior needs to change?
- Be specific - not "users"
- Primary actor drives priority

**Example:**
- Not: "Users"
- Yes: "Field maintenance technicians who travel to repair equipment"

**3. Impacts (How?)**
- What should actors do differently?
- Behavioral change that delivers the goal
- Observable and measurable

**Example:**
- "Identify top candidates 50% faster and schedule interviews without email ping-pong"

**4. Deliverables (What?)**
- What features will create that behavioral change?
- Features serve impacts, impacts serve goals
- Features without clear goal/actor/impact get killed

**Example:**
- CV parsing, AI candidate matching, integrated calendar sync
- All serving the impact (faster candidate identification)

### How It Prevents Waste

**Common Mistake:** Start at Level 4 (deliverables) without asking 1-3.

**Result:** Build things nobody needs.

**Example - Wrong Approach:**
- "Let's build a dashboard with charts and filters"
- No goal, no actor, no impact defined
- Just building features

**Example - Right Approach:**
- Goal: Reduce time-to-hire by 30%
- Actor: Recruiters
- Impact: Identify candidates faster, schedule without email ping-pong
- Deliverables: CV parsing, calendar sync (features that drive impact)

### Builder's Hierarchy in Practice

**Use it for:**
- Feature prioritization (does this serve a clear goal?)
- Roadmap planning (connect all work to outcomes)
- Saying "no" (feature doesn't map to goal/actor/impact)

**Questions to Ask:**
1. What goal does this serve? (If none, don't build)
2. Whose behavior will change? (If unclear, don't build)
3. What impact will we see? (If unmeasurable, don't build)
4. Is this the right deliverable for that impact? (Validate before building)

---

## Evolution Flow {#evolution-flow}

### What is Evolution Flow?

A six-stage process that turns ideas into validated, impactful products without wasting months building the wrong thing.

### The Six Stages

**1. Vision - Start with the Outcome**

Not "build X feature" but "achieve Y outcome for Z users"

**Example:**
- Bad: "Build automated reconciliation"
- Good: "Let finance teams reconcile 95% of transactions automatically, cutting time from 4 hours to 15 minutes"

**2. Strategy - Break It Down**

Slice by user outcomes (vertical slices), not by technical layers (horizontal slices).

**Example (Good Slicing):**
- Slice 1: Parent payment experience (mobile checkout)
- Slice 2: Accountant reconciliation engine
- Slice 3: Communication system (payment reminders)

Each slice delivers value independently.

**Example (Bad Slicing):**
- Slice 1: Database layer
- Slice 2: API layer
- Slice 3: UI layer

No value until all slices complete.

**3. Validation - Test Before Building**

Validate assumptions BEFORE investing in build.

**Validation Methods:**
- Prototypes and mockups
- User interviews with concepts
- Landing pages to test interest
- Concierge MVP (manual version)
- Fake door tests (measure interest before building)

**Goal:** Learn if this solves the problem before writing production code.

**4. Build - Small Increments**

Build in smallest deployable increments, not big-bang releases.

**Principles:**
- Each increment delivers value
- Each increment can be tested with users
- Each increment passes MQB gates
- Iterate based on feedback

**5. Launch - Release and Observe**

Shipping is not the end, it's the beginning of learning.

**Launch Practices:**
- Feature flags for controlled rollout
- Monitor north star and supporting metrics
- Gather user feedback immediately
- Be ready to iterate or rollback

**6. Evolution - Learn and Improve**

Continuous learning and improvement based on evidence.

**Evolution Practices:**
- Regular retrospectives
- Learning logs (what worked, what didn't)
- Metric reviews (did we move the north star?)
- User feedback integration
- Hypothesis refinement

### Why Teams Skip Steps

**Common Pattern:** Jump from idea → build, skipping Vision and Validation.

**Result:** Build wrong thing, fast. Movement without progress.

**The Marketplace Nobody Wanted:**
- Idea: Add marketplace to education app
- Skipped: Vision (what outcome?), Validation (do users want this?)
- Jumped to: Build (built full marketplace)
- Result: 0.1% usage, 1% of revenue, shut down after 4 months

**Lesson:** Fast execution of wrong idea = waste. Slow down to speed up.

---

## Genome Coherence {#genome-coherence}

### What is Genome Coherence?

How well the 6 DNAs work together and reinforce each other. Strong products have high coherence.

### Coherence Factors

**1. Purpose-User Alignment**
- Does user understanding serve the purpose?
- Are user segments chosen based on purpose?
- Do user jobs-to-be-done connect to problem being solved?

**2. User-Experience Alignment**
- Do quality thresholds match user needs and constraints?
- Does UX design respect user context (mobile, low connectivity, etc.)?
- Are performance standards based on user expectations?

**3. Experience-Architecture Alignment**
- Does technical architecture support desired experience?
- Can architecture deliver performance standards?
- Do technical choices respect user constraints (offline capability, etc.)?

**4. Architecture-Intelligence Alignment**
- Is system instrumented for metrics collection?
- Can architecture support experimentation (A/B tests)?
- Does data infrastructure enable learning?

**5. Cultural-All Alignment**
- Do product values support purpose, user focus, quality standards?
- Does team culture enable effective decision-making?
- Do growth strategies align with user value delivery?

### Cascade Effects

**Weak Purpose DNA →** User DNA confusion (which segments?) → Diluted Experience DNA → Misaligned Architecture

**Example:**
- Vague purpose ("be the best app")
- Team can't prioritize user segments
- Quality standards unclear (best for whom?)
- Architecture decisions lack direction

**Strong Purpose DNA →** Clear User focus → Specific Experience standards → Aligned Architecture

**Example:**
- Clear purpose (reduce technician repair time)
- Focus on field technicians specifically
- Quality standards: mobile-first, offline capability, low cognitive load
- Architecture: mobile-optimized, offline-first design

### Measuring Coherence

**Coherence Score (1-5):**
- 1 = DNAs conflict or work in silos
- 3 = Some alignment, needs improvement
- 5 = All DNAs reinforce each other perfectly

**Signs of High Coherence:**
- Decisions are easy (DNAs point same direction)
- Team has shared understanding
- Quality is consistent across product
- Features align with purpose and user needs

**Signs of Low Coherence:**
- Conflicting priorities
- Different teams pulling different directions
- Inconsistent quality
- Features don't serve clear purpose

---

## Common Anti-Patterns {#common-anti-patterns}

### 1. Feature Factory Syndrome

**Symptoms:**
- Building lots of features, low user satisfaction
- "Ship something" culture without purpose
- Roadmap driven by requests, not strategy
- No clear "why" for features

**Cure:**
- Establish Purpose DNA (clear filter for decisions)
- Enforce Builder's Hierarchy (goal → actor → impact → deliverable)
- Implement MQB gates (quality over speed)

### 2. Building for "Everyone"

**Symptoms:**
- No specific user segments
- Trying to please all users
- Generic features that don't delight anyone
- "Users want X" (which users?)

**Cure:**
- Define specific user segments (User DNA)
- Choose primary segment explicitly
- Build for primary segment first
- Say "no" to non-primary segment requests (initially)

### 3. Quality Debt Accumulation

**Symptoms:**
- "We'll fix it later" culture
- Buggy releases are normal
- Technical debt grows unchecked
- Quality compromised for deadlines

**Cure:**
- Implement MQB gates
- Make quality non-negotiable
- Celebrate saying "no" to shipping bad quality
- Track quality metrics

### 4. Assumption-Based Development

**Symptoms:**
- "We think users want X"
- No user research
- Building on opinions, not evidence
- Surprises after launch

**Cure:**
- Establish Intelligence DNA (instrumentation, experimentation)
- Conduct user research (User DNA evidence requirements)
- Implement Evolution Flow (validation before build)
- Build hypothesis-test-learn cycles

### 5. Architecture by Accident

**Symptoms:**
- No documented technical decisions
- "Why did we choose this?" → "No idea"
- Technical decisions don't serve user needs
- Refactoring constantly due to poor foundations

**Cure:**
- Document Architecture DNA
- Write ADRs for significant decisions
- Connect technical choices to user constraints
- Design for evolution, not just current needs

### 6. HiPPO-Driven Decisions

**HiPPO:** Highest Paid Person's Opinion

**Symptoms:**
- "CEO wants feature X" → it gets built (no validation)
- Data ignored when conflicts with opinion
- Team afraid to challenge ideas
- Strategy changes with whoever speaks loudest

**Cure:**
- Establish Purpose DNA as filter (even CEO ideas must align)
- Implement Intelligence DNA (evidence over opinions)
- Builder's Hierarchy validation (does this serve a measurable goal?)
- Culture that values evidence and respectful challenge

---

## Best Practices {#best-practices}

### Starting with Product Genome

**If Starting Fresh (Greenfield):**

1. **Start with Purpose DNA**
   - Define problem, solution vision, north star
   - Establish non-negotiables early
   - Set clear scope boundaries

2. **Build User DNA Next**
   - Conduct user research immediately
   - Define segments based on evidence
   - JTBD analysis before feature decisions

3. **Define Experience DNA Standards**
   - Set MQB gates before first feature
   - Define quality thresholds upfront
   - Commit to standards as team

4. **Document Architecture DNA**
   - Write ADRs for major technical decisions
   - Design for evolution from day one
   - Connect architecture to user constraints

5. **Instrument for Intelligence DNA**
   - Add analytics from first feature
   - Track north star metric from launch
   - Build experimentation capability early

6. **Establish Cultural DNA**
   - Define team values and decision framework
   - Build learning culture from start
   - Celebrate quality and evidence-based decisions

**If Improving Existing Product (Brownfield):**

1. **Assess Current Genome**
   - Run comprehensive genome assessment
   - Identify critical gaps (usually Purpose or User DNA)
   - Prioritize based on risk

2. **Fix Foundation DNAs First**
   - Purpose DNA and User DNA are foundational
   - Without these, all other work is guesswork
   - Invest in user research if User DNA weak

3. **Implement MQB Gates Immediately**
   - Don't ship another increment below quality bar
   - Stop accumulating quality debt NOW
   - Celebrate first "no-ship" decision

4. **Backfill Architecture DNA**
   - Document why past decisions were made
   - Write ADRs for future decisions
   - Plan technical debt reduction

5. **Build Intelligence Infrastructure**
   - Instrument key user journeys
   - Start tracking north star metric
   - Begin hypothesis-driven development

6. **Evolve Culture Over Time**
   - Cultural change is slowest
   - Lead by example (leadership uses framework)
   - Celebrate evidence-based decisions

### Maintaining Genome Health

**Quarterly Practices:**

- **Genome Assessment** - Re-assess maturity of all DNAs
- **North Star Review** - Is metric still right? Are we improving?
- **Non-Negotiables Check** - Have we upheld them? Any violations?
- **User Research** - Continuous discovery, update User DNA

**Per Feature/Increment:**

- **Builder's Hierarchy Validation** - Goal → Actor → Impact → Deliverable
- **MQB Gate Check** - All 12 gates pass before ship
- **Purpose Alignment Check** - Does this serve our purpose?

**Cultural Practices:**

- **Learning Retrospectives** - What did we learn? Update DNAs
- **Quality Celebrations** - Celebrate "no-ship" decisions that protect quality
- **Evidence Sharing** - Share user research, experiment results
- **ADR Reviews** - Revisit architecture decisions as needed

### Common Pitfalls to Avoid

1. **Don't treat DNAs as one-time documents**
   - DNAs evolve as product evolves
   - Regular updates keep them relevant

2. **Don't skip MQB gates under pressure**
   - Deadline pressure is when MQB matters most
   - One exception creates culture of exceptions

3. **Don't assume you know users**
   - Continuous discovery, not one-time research
   - Evidence over assumptions, always

4. **Don't optimize suboptimal flow**
   - If purpose is wrong, efficient execution is waste
   - Fix foundation before optimizing process

5. **Don't separate team roles from DNA ownership**
   - All DNAs are everyone's responsibility
   - Specialists guide, but team owns collectively

### Signs of Healthy Product Genome

- **Decisions are easy** - DNAs provide clear direction
- **Team is aligned** - Shared understanding of why/who/what
- **Quality is consistent** - MQB prevents regression
- **Users are delighted** - Product serves real needs
- **North star moves** - Evidence of value delivery
- **Saying "no" is normal** - Purpose and User DNA filter requests
- **Learning is continuous** - Intelligence DNA and Evolution Flow working
- **Culture reinforces quality** - Team protects standards

### Signs of Unhealthy Product Genome

- **Constant firefighting** - Quality issues and technical debt
- **Team confusion** - Unclear why features are built
- **Feature requests flood** - No filter, everything seems important
- **User satisfaction low** - Building wrong things
- **North star flat** - Not delivering value
- **Quality negotiated** - "Ship it, we'll fix later"
- **Assumptions drive decisions** - Lack of evidence
- **Blame culture** - Failures punished, not learned from

---

## Conclusion

The Product Genome framework provides a systematic approach to building products that succeed by:

1. **Clear Purpose** - Every decision connects to why
2. **User Understanding** - Build for real people, not assumptions
3. **Quality Standards** - Non-negotiable bar prevents debt
4. **Intentional Architecture** - Design for evolution
5. **Evidence-Based Learning** - Measure, test, improve
6. **Values-Driven Culture** - Sustainable growth

**The biological metaphor matters:** Just as DNA determines an organism's growth and behavior, Product DNA determines how your product grows, evolves, and succeeds.

**Damage to one DNA cascades to others.** Fix the foundation before optimizing execution.

**Coherence is key.** When all DNAs reinforce each other, decisions become obvious and quality becomes natural.

**Evolution is continuous.** DNAs aren't static documents—they evolve as you learn.

---

**Start Simple:**

1. Assess your current genome
2. Fix critical gaps (usually Purpose or User DNA)
3. Implement MQB gates
4. Build genome health into team culture

**Remember:** Perfect genome isn't the goal. Coherent genome that guides decisions and prevents chaos is the goal.

---

**Product Genome Framework © 2025**
**Based on "The Product Genome" methodology**
