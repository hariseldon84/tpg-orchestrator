# Product Genome Elicitation Methods

**Version:** 1.0
**Last Updated:** 2025-12-30
**Framework:** Product Genome

---

## Introduction

Elicitation is the art of drawing out deep, evidence-based insights about products, users, and systems. In Product Genome, effective elicitation prevents assumption-based development and uncovers the truth needed to build products that succeed.

This guide provides 25+ elicitation methods grounded in Product Genome principles: evidence-based, user-centric, quality-focused, and systematic.

---

## Core Product Genome Elicitation Methods

### 1. Purpose Alignment Check

**What It Is:** Validate that every feature, decision, or initiative serves the stated Purpose DNA.

**When to Use:**
- During feature prioritization
- When stakeholders request new features
- During roadmap planning
- When scope is unclear

**How to Apply:**
1. State the purpose clearly (problem, solution, north star metric, non-negotiables)
2. Present the proposed feature/decision
3. Ask: "Does this serve our purpose? How?"
4. Ask: "Will this move our north star metric? By how much?"
5. Ask: "Does this violate any non-negotiables?"
6. Ask: "Is this within our scope boundaries?"

**Example Questions:**
- "Our purpose is to reduce technician repair time. How does adding a social feed serve that purpose?"
- "Our north star is average repair time. Will this feature measurably reduce that metric?"
- "One of our non-negotiables is 'never sacrifice diagnostic accuracy for speed.' Does this compromise that?"
- "This seems outside our scope boundaries. Why should we include it?"

**Red Flags:**
- Answers are vague ("it would be nice to have")
- No clear connection to north star metric
- Justification is "competitors have it"
- Feature violates stated non-negotiables

---

### 2. Five Whys - User Need Edition

**What It Is:** Dig beneath surface-level feature requests to uncover the real user need.

**When to Use:**
- When users/stakeholders request specific features
- When requirements seem unclear or conflicting
- During user research synthesis
- When prioritizing competing requests

**How to Apply:**
1. Start with the request: "We need feature X"
2. Ask: "Why do you need that?"
3. For each answer, ask "Why?" again
4. Continue for five iterations (or until you reach root motivation)
5. Identify the true job-to-be-done
6. Validate that the original request is the best solution

**Example:**
- Request: "We need a dark mode"
- Why? "Users complain about eye strain"
- Why do they get eye strain? "They use the app at night in low-light conditions"
- Why at night? "Field technicians work evening shifts and need to check diagnostics"
- Why is this problematic? "Bright screens alert equipment operators and disrupt work"
- Root need: Technicians need discreet, non-disruptive access to diagnostics during active operations

**Result:** Dark mode is one solution, but maybe a "stealth mode" with minimal UI and haptic feedback is better.

**Red Flags:**
- Stakeholder can't explain why beyond "users asked for it"
- Answers loop back to the original request
- No evidence backing the "why" claims

---

### 3. Jobs-to-be-Done Deep Dive

**What It Is:** Uncover the progress users are trying to make in their lives, not just the tasks they perform.

**When to Use:**
- During user research and persona development
- When User DNA is unclear or weak
- Before building new features
- When user satisfaction is low despite feature richness

**How to Apply:**
1. Identify the situation (when/where does the need arise?)
2. Identify the motivation (what progress do they want to make?)
3. Identify the desired outcome (how do they define success?)
4. Identify current alternatives (what do they hire today to do this job?)
5. Identify switching costs (why don't they switch from current solution?)

**JTBD Format:**
"When [situation], I want to [motivation], so I can [outcome]"

**Example Questions:**
- "When do you feel the need for this solution? What triggers it?"
- "What are you trying to accomplish in your life/work?"
- "How do you define success for this task?"
- "What do you use today to solve this problem?"
- "What would make you switch from your current solution?"
- "What fears or anxieties do you have about trying something new?"

**Example:**
- Bad: "Users want faster load times"
- Good: "When field technicians arrive at a repair site (situation), they want to instantly access the equipment's diagnostic history (motivation), so they can start repairs without delay and meet their time targets (outcome)"

**Red Flags:**
- Focus on features, not progress ("I want a button")
- No clear situation or context
- Motivation is vague ("to be more efficient")
- No measurable outcome

---

### 4. User Context Mapping

**What It Is:** Map the complete context in which users operate, revealing constraints and opportunities.

**When to Use:**
- When designing user experiences
- When Experience DNA quality thresholds are unclear
- Before setting performance standards
- When features fail despite good design

**How to Apply:**
1. Map the physical environment (where are they?)
2. Map the temporal context (when do they use it? time pressure?)
3. Map the social context (who is around? privacy concerns?)
4. Map the technical context (device, connectivity, battery life)
5. Map the emotional context (stress level, cognitive load)
6. Identify constraints from each dimension

**Example Questions:**
- "Where are you when you need to use this? Indoors? Outdoors? Moving?"
- "What's the lighting like? Noisy? Quiet?"
- "Are you alone or with others? Who can see your screen?"
- "How much time do you have? Are you rushed?"
- "What device are you using? What's your connectivity like?"
- "How are you feeling? Stressed? Calm? Frustrated?"
- "What else are you doing at the same time?"

**Example:**
- User: Field maintenance technician
- Physical: Outdoors, often in tight spaces, wearing gloves
- Temporal: Time-pressured (SLA deadlines), irregular schedule
- Social: Equipment operators watching, can't show ignorance
- Technical: Mobile phone, spotty connectivity, battery concerns
- Emotional: Stress from time pressure, fear of looking incompetent

**Design Implications:**
- Large touch targets (gloves)
- Offline-first architecture (connectivity)
- Low battery consumption (battery)
- Discreet UI (social pressure)
- Low cognitive load (stress)

**Red Flags:**
- Assuming desk-based, high-bandwidth, distraction-free context
- Ignoring environmental constraints
- Designing for ideal conditions, not reality

---

### 5. Minimum Quality Bar Gate Check

**What It Is:** Validate that a feature meets all 12 MQB gates before shipping.

**When to Use:**
- Before marking a feature "done"
- During sprint review/demo
- Before release candidate approval
- When quality is questioned

**How to Apply:**
Run through all 12 gates systematically. One failure = no ship.

**The 12 Gates:**

1. **Purpose Alignment:** Does feature serve stated purpose? (Pass/Fail + evidence)
2. **User Value:** Does feature address real user need (validated)? (Pass/Fail + evidence)
3. **Functional Quality:** All acceptance criteria met, no critical bugs? (Pass/Fail + evidence)
4. **User Experience:** Usability, accessibility, context-appropriate? (Pass/Fail + evidence)
5. **Performance:** Meets defined thresholds (load time, response time)? (Pass/Fail + metrics)
6. **Reliability:** Stable, handles errors gracefully? (Pass/Fail + evidence)
7. **Security:** Authentication, authorization, data protection? (Pass/Fail + evidence)
8. **Testing:** Adequate test coverage, tests pass? (Pass/Fail + coverage %)
9. **Documentation:** User and technical docs complete? (Pass/Fail + evidence)
10. **Operational Readiness:** Monitoring, logging, rollback capability? (Pass/Fail + evidence)
11. **North Star Impact:** Expected metric impact defined? (Pass/Fail + hypothesis)
12. **Non-Negotiables:** No violations of stated non-negotiables? (Pass/Fail + evidence)

**Example Questions (for each gate):**
- Gate 1: "Show me how this aligns with our purpose. What's the connection?"
- Gate 2: "What user research validates this need? Show me the evidence."
- Gate 4: "Have we tested this with users in their actual context (mobile, low connectivity, etc.)?"
- Gate 11: "What's our hypothesis for how this impacts the north star metric? How will we measure it?"

**Red Flags:**
- "We'll fix it later" justifications
- Gates marked "pass" without evidence
- Pressure to ship despite gate failures
- Exceptions requested without risk assessment

---

### 6. Builder's Hierarchy Validation

**What It Is:** Ensure every deliverable connects to impact, actor, and goal—preventing "feature factory" syndrome.

**When to Use:**
- During roadmap planning
- When prioritizing features
- When stakeholders request features without clear justification
- During strategy reviews

**How to Apply:**
Work backwards from Level 4 to Level 1.

**Level 1 - Goal (Why?):**
- "What business outcome are we after?"
- "How will we measure success?"
- "What's the time frame?"

**Level 2 - Actors (Who?):**
- "Whose behavior needs to change?"
- "Be specific - not 'users,' but which segment?"
- "Who is the primary actor?"

**Level 3 - Impacts (How?):**
- "What should actors do differently?"
- "What behavioral change delivers the goal?"
- "How will we observe this change?"

**Level 4 - Deliverables (What?):**
- "What features will create that behavioral change?"
- "Are there alternatives that could achieve the same impact?"
- "Is this the minimum viable deliverable?"

**Example:**
- **Bad Request:** "We need a dashboard with charts and filters"
- **After Builder's Hierarchy:**
  - Goal: Reduce time-to-hire by 30% (measurable, time-bound)
  - Actors: Recruiters managing 50+ open positions
  - Impacts: Identify top candidates 50% faster, schedule interviews without email ping-pong
  - Deliverables: CV parsing, AI candidate matching, integrated calendar sync

**Red Flags:**
- Can't articulate the goal (or goal is "build feature X")
- Actors are vague ("users," "everyone")
- Impact is unmeasurable or unobservable
- Deliverable doesn't logically lead to impact

---

### 7. Evidence vs. Assumption Test

**What It Is:** Distinguish evidence-based claims from assumptions, forcing validation before building.

**When to Use:**
- During requirements gathering
- When reviewing user stories
- Before committing to development
- When Intelligence DNA is weak

**How to Apply:**
1. List all claims about users, problems, or solutions
2. For each claim, ask: "Is this evidence or assumption?"
3. For evidence: "What's the source? When was it collected? How reliable?"
4. For assumptions: "How can we validate this before building?"
5. Prioritize validation of riskiest assumptions

**Example Questions:**
- "How do you know users want this? Did you ask them, or are we guessing?"
- "What's the source of this data? User research? Analytics? Support tickets?"
- "When was this research conducted? Is it still valid?"
- "How many users did we talk to? Is the sample representative?"
- "What could we do to test this assumption before building?"

**Example:**
- Claim: "Users want one-click checkout"
- Question: "Is this evidence or assumption?"
- Answer: "Assumption based on industry trends"
- Validation: "Let's run a fake door test—add a button that tracks clicks but doesn't work yet. Measure interest before building."

**Red Flags:**
- All claims are assumptions, no evidence
- Evidence is old (6+ months in fast-changing domain)
- Evidence is anecdotal ("I heard a user say...")
- No plan to validate assumptions

---

### 8. North Star Metric Impact Analysis

**What It Is:** Predict and measure how features impact the one metric that matters most.

**When to Use:**
- During feature prioritization
- Before/after feature launches
- During quarterly planning
- When evaluating experiment results

**How to Apply:**
1. Confirm the north star metric (the ONE metric capturing value delivery)
2. For each feature, hypothesize the impact (direction and magnitude)
3. Identify leading indicators (early signals of impact)
4. Design measurement approach (A/B test, cohort analysis, etc.)
5. Set decision criteria (if metric moves by X, we ship; if not, we kill/iterate)

**Example Questions:**
- "What is our north star metric? (Only one allowed)"
- "How will this feature move the north star? Increase it? Decrease it? By how much?"
- "What's our hypothesis? (If we build X, then Y will happen because Z)"
- "What are the leading indicators we can track before the north star moves?"
- "How will we measure this? A/B test? Cohort comparison?"
- "What's our decision threshold? (If metric improves by X%, we scale; if not, we kill)"

**Example:**
- North Star: Average Repair Time (for field technician app)
- Feature: Offline diagnostic access
- Hypothesis: "If we enable offline access to diagnostic history, average repair time will decrease by 15% because technicians won't waste time waiting for data to load"
- Leading Indicators: Time to first diagnostic view, % of sessions starting offline
- Measurement: A/B test with 50% of users getting offline capability
- Decision Criteria: If repair time decreases by 10%+, roll out to all; if <5%, kill feature

**Red Flags:**
- No north star metric defined
- Multiple "north star" metrics (defeats the purpose)
- Can't articulate how feature impacts north star
- No measurement plan

---

### 9. Non-Negotiables Stress Test

**What It Is:** Test decisions against stated non-negotiables to prevent mission drift.

**When to Use:**
- When facing deadline pressure
- When stakeholders push for shortcuts
- During trade-off discussions
- When quality is questioned

**How to Apply:**
1. State the non-negotiables clearly (3-5 maximum)
2. Present the proposed decision/feature/shortcut
3. Ask: "Does this violate any non-negotiables?"
4. If yes: "Which one? How?"
5. If stakeholder insists: "Are we changing our non-negotiables? Is this now negotiable?"

**Example Questions:**
- "Our non-negotiable is 'never sacrifice diagnostic accuracy for speed.' Does this feature compromise accuracy?"
- "We said 'user privacy is non-negotiable.' Does collecting this data violate that?"
- "Our non-negotiable is 'accessible to WCAG AA standard.' Does this design meet that bar?"
- "If we're willing to compromise on this, is it really non-negotiable? Should we update our Purpose DNA?"

**Example:**
- Non-Negotiable: "Never ship a feature that doesn't pass all automated tests"
- Pressure: "We're behind schedule. Let's ship with known bugs and fix later."
- Response: "That violates our non-negotiable. We either delay the ship date or cut scope to meet the quality bar. We don't ship broken features."

**Red Flags:**
- Non-negotiables are regularly negotiated (they're not really non-negotiable)
- Deadline pressure overrides quality standards
- Team doesn't know what the non-negotiables are
- No consequences for violating non-negotiables

---

### 10. Genome Coherence Check

**What It Is:** Assess how well the 6 DNAs align and reinforce each other.

**When to Use:**
- During strategic planning
- When decisions feel difficult or conflicted
- During product retrospectives
- When team alignment is low

**How to Apply:**
Evaluate alignment between DNA pairs:

1. **Purpose-User Alignment:** Does user understanding serve the purpose?
2. **User-Experience Alignment:** Do quality thresholds match user needs?
3. **Experience-Architecture Alignment:** Does tech support desired experience?
4. **Architecture-Intelligence Alignment:** Can we measure what we need to measure?
5. **Cultural-All Alignment:** Do values support purpose, users, quality?

**Scoring (1-5 for each pair):**
- 1 = DNAs conflict or contradict
- 3 = Some alignment, room for improvement
- 5 = DNAs perfectly reinforce each other

**Example Questions:**
- "Does our user segmentation connect to our purpose? Or are we trying to serve everyone?"
- "Do our quality standards match our users' context? (E.g., mobile-first users but desktop-optimized experience)"
- "Can our architecture deliver the performance standards we've set?"
- "Are we instrumenting the right metrics to track our north star?"
- "Do our stated values (Cultural DNA) align with how we actually make decisions?"

**Red Flags:**
- Low scores (1-2) on multiple DNA pairs
- Decisions are constantly difficult (DNAs pulling different directions)
- Different teams have different understandings of DNAs
- DNAs haven't been reviewed in 6+ months

---

## Advanced Elicitation Methods

### 11. Tree of Thoughts - Product Decisions

**What It Is:** Explore multiple reasoning paths simultaneously for complex product decisions.

**When to Use:**
- Complex architectural decisions
- Major strategic pivots
- When optimal path is unclear
- When stakes are high

**How to Apply:**
1. Break the decision into discrete "thoughts" (intermediate steps)
2. For each thought, explore 2-3 alternative paths
3. Self-evaluate each path: "sure" (likely to succeed), "maybe" (uncertain), "unlikely" (risky)
4. Use breadth-first search: explore all "sure" paths first, then "maybe"
5. Prune "unlikely" paths early
6. Identify the optimal path through evidence and reasoning

**Example:**
- Decision: Should we build native mobile apps or use progressive web app (PWA)?
- Thought 1: User Context Analysis
  - Path A: Users primarily offline → Native (sure)
  - Path B: Users primarily online → PWA (maybe)
  - Path C: Mixed usage → Hybrid (maybe)
- Thought 2: Development Resources
  - Path A: Team has mobile expertise → Native (sure)
  - Path B: Team is web-focused → PWA (sure)
  - Path C: No mobile expertise → Hybrid/outsource (maybe)
- Optimal Path: Cross-reference user context with team capabilities

---

### 12. Red Team vs. Blue Team

**What It Is:** Competitive analysis where one team attacks a proposal and another defends it.

**When to Use:**
- Major feature decisions
- Before committing to architecture changes
- When consensus is too easy (groupthink risk)
- Before large investments

**How to Apply:**
- **Red Team (Attack):** Find all vulnerabilities, edge cases, failure modes
- **Blue Team (Defend):** Strengthen the approach, mitigate risks
- **Rules:** 30-minute time-boxed rounds, evidence-based arguments only
- **Outcome:** Red Team findings → Risk log, Blue Team responses → Mitigation plan

**Example Questions (Red Team):**
- "What's the worst-case scenario if this fails?"
- "What assumptions are we making that could be wrong?"
- "What are competitors doing that we're ignoring?"
- "What edge cases will break this approach?"

**Example Questions (Blue Team):**
- "How can we mitigate each risk Red Team identified?"
- "What evidence supports this approach?"
- "What safeguards can we build in?"
- "How can we test assumptions before full commitment?"

---

### 13. Hindsight Retrospective (Pre-Mortem)

**What It Is:** Imagine the feature/project has failed spectacularly. Work backwards to identify what went wrong.

**When to Use:**
- Before starting major initiatives
- When optimism bias is high
- To surface hidden risks
- Before committing resources

**How to Apply:**
1. Set the scene: "It's six months from now. This project has failed catastrophically."
2. Ask: "What happened? What went wrong?"
3. Brainstorm all possible failure modes
4. Prioritize by likelihood and impact
5. Create mitigation plans for top risks

**Example:**
- Scene: "We launched the new mobile app. Six months later, it has 1-star reviews and 90% uninstall rate. What happened?"
- Responses:
  - "We didn't test with real users in their actual environment (field conditions)"
  - "Performance was terrible on older devices (we only tested on new iPhones)"
  - "Offline mode didn't work, and our users have spotty connectivity"
  - "UI was too complex for glove-wearing users"
- Mitigation: Test in field conditions, performance budget for older devices, offline-first architecture, larger touch targets

---

### 14. User Journey Breakdown

**What It Is:** Map the complete user journey from trigger to outcome, identifying friction and opportunities.

**When to Use:**
- When Experience DNA is undefined
- When drop-off rates are high
- Before redesigning flows
- When user satisfaction is low

**How to Apply:**
1. Map the journey stages (awareness → consideration → use → retention)
2. For each stage, identify:
   - User's goal
   - User's context
   - User's emotional state
   - Friction points
   - Opportunities for improvement
3. Prioritize improvements by impact

**Example Questions:**
- "What triggers the user to start this journey?"
- "What are they thinking/feeling at each step?"
- "Where do they get stuck? Why?"
- "What would make this step easier?"
- "What would make them abandon at this point?"

---

### 15. Constraint-Based Design

**What It Is:** Use constraints (user, technical, business) as creative drivers, not limitations.

**When to Use:**
- When resources are limited
- When user constraints are severe
- When innovation is needed
- When "obvious" solutions aren't working

**How to Apply:**
1. List all constraints (user context, technical, budget, timeline, regulatory)
2. Reframe each constraint as a design driver
3. Ask: "How can we turn this constraint into an advantage?"
4. Generate solutions that embrace constraints

**Example:**
- Constraint: Users have spotty internet connectivity
- Reframe: "How can we make this app work better offline than competitors' apps work online?"
- Solution: Offline-first architecture, aggressive caching, sync when connected

---

### 16. Metrics Hypothesis Testing

**What It Is:** Formulate clear hypotheses for how features will impact metrics, then test rigorously.

**When to Use:**
- Before building features
- When prioritizing roadmap
- During A/B testing
- When evaluating results

**Hypothesis Format:**
"If we [change], then [metric] will [direction + magnitude] because [reason]"

**Example:**
- "If we add one-click checkout, then conversion rate will increase by 15% because users currently abandon due to form friction"

**Validation:**
- A/B test: 50% get one-click, 50% get regular checkout
- Measure: Conversion rate, abandonment rate, time-to-purchase
- Decision: If conversion improves by 10%+, ship; if <5%, kill

---

### 17. Persona-Based Challenge

**What It Is:** Challenge decisions from specific persona perspectives (PM, Engineer, Designer, User, Exec).

**When to Use:**
- When one perspective dominates
- To surface blind spots
- During design reviews
- When alignment is needed

**How to Apply:**
Rotate through personas, asking persona-specific questions:

**Product Manager:**
- "Does this serve our OKRs?"
- "What's the opportunity cost of building this?"

**Engineer:**
- "Is this technically feasible within our architecture?"
- "What's the maintenance burden?"

**Designer:**
- "Does this meet usability standards?"
- "Is this accessible?"

**End User:**
- "Does this solve my problem?"
- "Is this worth the learning curve?"

**Executive:**
- "What's the business impact?"
- "Does this align with company strategy?"

---

### 18. Anti-Pattern Identification

**What It Is:** Identify common anti-patterns in current approach and actively avoid them.

**When to Use:**
- When repeating past mistakes
- During retrospectives
- When quality is slipping
- Before major decisions

**Common Product Genome Anti-Patterns:**
1. **Feature Factory:** Building without clear purpose
2. **Building for Everyone:** No specific user segment
3. **Quality Debt Accumulation:** "We'll fix it later"
4. **Assumption-Based Development:** No evidence
5. **Architecture by Accident:** No intentional design
6. **HiPPO-Driven Decisions:** Highest paid person's opinion over evidence

**How to Apply:**
- Review current initiative against anti-pattern list
- Ask: "Are we falling into any of these traps?"
- Identify early warning signs
- Course-correct before it's too late

---

### 19. Stakeholder Needs Mapping

**What It Is:** Map needs of all stakeholders (users, business, team, ecosystem) and find overlaps.

**When to Use:**
- When stakeholder conflicts arise
- During strategic planning
- When priorities are unclear
- Before major pivots

**How to Apply:**
1. List all stakeholders (users, business, team, partners, regulators, etc.)
2. For each stakeholder, identify:
   - Primary need
   - Success criteria
   - Non-negotiables
   - Nice-to-haves
3. Identify overlaps (win-win zones)
4. Identify conflicts (trade-offs needed)
5. Prioritize based on Purpose DNA

---

### 20. Evidence Source Audit

**What It Is:** Audit the quality and recency of evidence underlying decisions.

**When to Use:**
- During User DNA assessment
- When decisions feel uncertain
- Before major investments
- When user research is old

**How to Apply:**
1. List all evidence sources (user research, analytics, support tickets, etc.)
2. For each source, assess:
   - Recency (when was it collected?)
   - Relevance (does it still apply?)
   - Reliability (sample size, methodology)
   - Representativeness (does it reflect target users?)
3. Identify gaps (what don't we know?)
4. Plan new research to fill gaps

**Red Flags:**
- Evidence is 6+ months old
- Small sample sizes (< 10 users)
- Biased samples (power users only)
- No direct user contact (all secondhand)

---

## Process Control Methods

### 21. Proceed / No Further Elicitation

**What It Is:** Recognize when sufficient information has been gathered and it's time to act.

**When to Use:**
- When analysis paralysis sets in
- When diminishing returns on more questions
- When time-boxed elicitation session ends
- When decision criteria are met

**How to Apply:**
- Set decision criteria upfront (what information do we need to decide?)
- Time-box elicitation sessions
- Recognize when additional questions yield no new insights
- Make decision with available information (avoiding perfection paralysis)

**Example:**
- "We've validated the core user need with 12 interviews. Diminishing returns on more interviews. Let's proceed to prototype."

---

### 22. Escalate to Expert

**What It Is:** Recognize when specialized expertise is needed and engage appropriate expert.

**When to Use:**
- When domain expertise is lacking
- When technical complexity exceeds team knowledge
- When regulatory/legal questions arise
- When risk is high

**Example Escalations:**
- Security questions → Security expert
- Accessibility questions → Accessibility expert
- Performance questions → Performance engineer
- User research questions → UX researcher

---

### 23. Research Spike

**What It Is:** Time-boxed investigation to answer specific questions before committing.

**When to Use:**
- When uncertainty is high
- When technical feasibility is unknown
- When user need validation is needed
- Before large investments

**How to Apply:**
1. Define the question to answer
2. Time-box the investigation (1-5 days typical)
3. Define "done" criteria (what constitutes an answer?)
4. Share findings and make decision

**Example:**
- Question: "Can our database handle 10x traffic?"
- Spike: 2 days of load testing
- Done Criteria: Performance metrics at 10x load
- Decision: Scale vertically, scale horizontally, or re-architect?

---

### 24. Hypothesis Parking Lot

**What It Is:** Capture ideas and assumptions that aren't immediately testable for future validation.

**When to Use:**
- During brainstorming
- When ideas emerge mid-conversation
- When current focus is elsewhere
- To prevent idea loss

**How to Apply:**
- Maintain a "parking lot" document
- Capture hypothesis in standard format
- Revisit during planning cycles
- Test when resources allow

---

### 25. Elicitation Retrospective

**What It Is:** Reflect on elicitation process itself to improve over time.

**When to Use:**
- After major elicitation sessions
- During team retrospectives
- When elicitation feels ineffective
- Quarterly process reviews

**How to Apply:**
1. What questions uncovered valuable insights?
2. What questions were dead-ends?
3. What methods worked well?
4. What should we do differently next time?
5. Update elicitation playbook based on learnings

---

## Applying Elicitation Methods

### Choosing the Right Method

**For Purpose DNA:**
- Purpose Alignment Check
- Non-Negotiables Stress Test
- North Star Metric Impact Analysis

**For User DNA:**
- Five Whys - User Need Edition
- Jobs-to-be-Done Deep Dive
- User Context Mapping
- User Journey Breakdown

**For Experience DNA:**
- Minimum Quality Bar Gate Check
- User Context Mapping
- Anti-Pattern Identification

**For Architecture DNA:**
- Tree of Thoughts
- Constraint-Based Design
- Red Team vs. Blue Team

**For Intelligence DNA:**
- Evidence vs. Assumption Test
- Metrics Hypothesis Testing
- Evidence Source Audit

**For Cultural DNA:**
- Hindsight Retrospective (Pre-Mortem)
- Stakeholder Needs Mapping
- Persona-Based Challenge

**For Overall Coherence:**
- Genome Coherence Check
- Builder's Hierarchy Validation

---

## Best Practices

1. **Start with Purpose:** Always begin with Purpose Alignment Check
2. **Evidence Over Opinions:** Use Evidence vs. Assumption Test liberally
3. **User-Centric:** Prioritize user-focused methods (JTBD, Context Mapping)
4. **Time-Box Sessions:** Prevent analysis paralysis
5. **Document Findings:** Capture insights for future reference
6. **Iterate Methods:** Use Elicitation Retrospective to improve
7. **Combine Methods:** Use multiple methods for complex decisions
8. **Respect Non-Negotiables:** Never compromise stated standards

---

## Anti-Patterns to Avoid

1. **Elicitation as Justification:** Using elicitation to justify pre-made decisions
2. **Leading Questions:** Asking questions that embed desired answers
3. **Cherry-Picking Evidence:** Selecting only evidence that supports your view
4. **Analysis Paralysis:** Asking questions forever, never deciding
5. **Skipping Validation:** Assuming instead of testing
6. **Ignoring Constraints:** Designing without considering user/technical constraints
7. **Surface-Level Questions:** Not digging deep enough (stopping at first "why")

---

## Conclusion

Effective elicitation is the foundation of Product Genome practice. These methods transform assumptions into evidence, vague ideas into clear direction, and feature factories into purpose-driven product teams.

Use these methods systematically, adapt them to your context, and always remember: **evidence over opinions, users over assumptions, quality over speed.**

---

**Product Genome Framework © 2025**
