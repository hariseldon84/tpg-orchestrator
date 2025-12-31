<!-- Powered by Product Genome™ Framework -->

# Create User Story (Builder's Hierarchy) Task

## Purpose

To create comprehensive, well-structured user stories using the Builder's Hierarchy framework. This ensures stories are grounded in user needs, aligned with Product Genome DNAs, validated against MQB gates, and ready for implementation with clear acceptance criteria.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration and Product Genome

- Load `.tpg-core/core-config.yaml` from the project root
- Load Product Genome DNAs:
  - `docs/dna/purpose-dna.md` (for purpose alignment)
  - `docs/dna/user-dna.md` (for user needs and JTBD)
  - `docs/dna/experience-dna.md` (for quality standards)
  - `docs/dna/intelligence-dna.md` (for metrics)
- Load `docs/mqb-definition.md` (for quality gates)
- If critical DNAs missing, WARN: "User stories are stronger with complete Product Genome. Consider creating missing DNAs first."

### 1. Understand Builder's Hierarchy Context

#### 1.1 Explain Builder's Hierarchy

Present framework to user:

```
The Builder's Hierarchy structures product work into 5 levels:

Level 0: Product Genome (Foundation)
└─ The 6 DNAs that define product identity and standards

Level 1: Epics (Strategic Themes)
└─ Large initiatives aligned with purpose (3-6 months of work)

Level 2: Stories (User Value Increments)  ← YOU ARE HERE
└─ Deliverable user value (1-2 weeks of work)
└─ Vertical slices through the system
└─ Must pass all 12 MQB gates before shipping

Level 3: Tasks (Implementation Steps)
└─ Technical work to deliver a story (1-3 days)

Level 4: Subtasks (Granular Actions)
└─ Specific actions within tasks (hours)

We're creating a LEVEL 2 STORY - a vertical slice of user value that:
- Solves a specific user need
- Delivers end-to-end functionality
- Passes MQB quality gates
- Ships independently
```

### 2. Identify Story Context

#### 2.1 Determine Parent Epic (if applicable)

**Ask user:**
- Is this story part of a larger epic?
- What epic does this belong to?
- If no epic exists, should we create one first?

**If epic exists:**
- Load epic context
- Validate story aligns with epic objectives
- Reference epic in story

**If no epic:**
- Note that story is standalone
- Ensure story still aligns with Purpose DNA

#### 2.2 Understand Story Genesis

**Elicit from user:**
- What prompted this story?
- What user need or pain point does this address?
- Is this based on research, data, feedback, or hypothesis?
- What's the urgency or priority?

**Common story sources:**
- User research findings
- Data insights (analytics, metrics)
- User feedback or support tickets
- Strategic initiative
- Technical enabler (infrastructure, architecture)

### 3. Ground Story in User Need

#### 3.1 Identify User Segment

From User DNA, identify which segment this serves:
- Primary user segment: [X]
- Secondary segments (if applicable): [Y, Z]
- Persona: [Name and brief context]

#### 3.2 Map to Job-to-be-Done (JTBD)

From User DNA, identify JTBD:
- When [situation]
- I want to [motivation]
- So I can [expected outcome]

**Example:**
- When I'm diagnosing a broken cooler at a retail location
- I want to see real-time sensor data and diagnostic suggestions
- So I can fix the issue quickly without calling support

#### 3.3 Document User Context

**Capture:**
- User's environment and constraints
- Current workaround or pain
- Frequency of this need
- Evidence of need (research quotes, data, etc.)

### 4. Craft Story Using Standard Format

#### 4.1 Story Title

Create concise, descriptive title:
- Format: "[Action] [Object] [Context]"
- Examples:
  - "View real-time cooler sensor data in diagnostic interface"
  - "Export diagnostic report as PDF for customer records"
  - "Receive push notification when equipment status changes"

**Title should:**
- Be clear and specific
- Indicate user value (not just technical implementation)
- Be scannable in backlog

#### 4.2 Story Statement (User Story Format)

Write story in standard format:

```
As a [user role from User DNA],
I want to [specific capability],
So that [valuable outcome aligned with JTBD].
```

**Example:**
```
As a field maintenance technician,
I want to view real-time sensor data from the equipment I'm diagnosing,
So that I can identify issues faster without waiting for support or manual checks.
```

**Validation:**
- [ ] Specifies user role (not "user" or "system")
- [ ] Describes capability (not implementation)
- [ ] Articulates value/outcome (not just feature)
- [ ] Aligns with JTBD from User DNA

#### 4.3 Context and Background

**Elicit and document:**
- **User Need:** Why do users need this? What pain does it solve?
- **Current State:** What do users do today? Why is it inadequate?
- **Evidence:** What research, data, or feedback validates this need?
- **Business Value:** Why should we build this now?

**Example:**
```
**User Need:** Technicians currently rely on generic troubleshooting guides
and phone support, leading to 2-3 hour average repair times. Real-time sensor
data would enable faster, more accurate diagnosis.

**Evidence:** User interviews (25 technicians) showed 90% need real-time data
access. Support tickets average 15/day requesting sensor readings.

**Business Value:** Reducing repair time by 60% (our north star metric) requires
real-time diagnostic capabilities.
```

### 5. Define Acceptance Criteria

#### 5.1 Functional Acceptance Criteria

List specific, testable criteria that define "done":

**Format:**
- Given [context/precondition]
- When [action/event]
- Then [expected outcome]

**Example:**
```
AC1: Display Real-Time Sensor Data
Given I'm viewing a diagnostic session for a cooler
When sensor data is available from the equipment
Then I see current temperature, pressure, and status readings
And data updates every 5 seconds
And timestamps show when data was last received

AC2: Handle Missing Sensor Data
Given I'm viewing a diagnostic session
When sensor data is unavailable (offline equipment)
Then I see a clear message: "Sensor data unavailable - equipment offline"
And I can still access historical sensor data
And the app doesn't crash or show errors

AC3: Sensor Data Accuracy
Given sensor data is displayed
When I compare to manufacturer's diagnostic tool
Then values match within +/- 2% tolerance
And data format matches industry standards
```

**Validation:**
- [ ] Criteria are specific and measurable
- [ ] Criteria cover happy path and edge cases
- [ ] Criteria include error states
- [ ] Criteria are testable (can verify pass/fail)

#### 5.2 Non-Functional Acceptance Criteria

From Experience DNA, include quality criteria:

**Performance:**
- Sensor data loads in < 1 second (95th percentile)
- Data updates every 5 seconds without UI lag

**Accessibility:**
- Sensor data readable by screen readers
- Color-coding has text labels (not color-only indicators)

**Usability:**
- Sensor data layout follows design system
- Mobile-optimized (readable on small screens)

**Security:**
- Sensor data accessed only by authenticated technicians
- Data encrypted in transit

**Instrumentation:**
- Track "sensor data accessed" event
- Track load time and error rates

### 6. Validate Against Product Genome

#### 6.1 Purpose Alignment

**Validate against Purpose DNA:**
- Does this story serve a stated Purpose DNA objective? Which one?
- Does this support the north star metric?
- Is this within scope boundaries (not out-of-scope)?
- Does this respect non-negotiables?

**Document:**
- **Purpose Alignment:** This supports [specific Purpose DNA objective] by
  enabling [outcome]. Directly contributes to north star metric (repair time reduction).

#### 6.2 User DNA Validation

**Validate against User DNA:**
- Does this solve a validated user need?
- Is this the right solution for the identified JTBD?
- Does this fit user context and constraints?
- Have users validated this approach?

**Document:**
- **User Validation:** Validated with 10 technicians via prototype testing.
  95% found real-time sensor data "essential" or "very helpful".

#### 6.3 Experience DNA Standards

**Validate against Experience DNA:**
- Does this meet UX quality thresholds?
- Does this follow design system and patterns?
- Are performance standards achievable?
- Are accessibility requirements met?

**Document:**
- **Experience Standards:** Design approved. Performance tested (< 1s load).
  Accessibility compliant (WCAG 2.1 AA).

### 7. Define MQB Gate Readiness

For each of the 12 MQB gates, define how this story will meet criteria:

**Quick checklist:**
1. **Purpose Alignment:** ✅ Documented above
2. **User Need Validation:** ✅ Prototype tested with 10 users
3. **Experience Standards:** ✅ Design approved, follows design system
4. **Performance Standards:** Target < 1s load, will performance test
5. **Accessibility Standards:** WCAG 2.1 AA compliance required
6. **Security Standards:** Authentication required, data encrypted
7. **Data Integrity:** Sensor data validated against manufacturer specs
8. **Error Handling:** Offline/error states documented in AC
9. **Documentation:** In-app help for sensor data interpretation
10. **Instrumentation:** Events defined (sensor data accessed, errors)
11. **Technical Quality:** Code review + 80% test coverage required
12. **Regression Prevention:** Existing diagnostic flows must still work

**Note:** Full MQB validation happens before shipping, but story must plan for all gates.

### 8. Estimate Story Size

#### 8.1 Story Point Estimation (if using)

**Factors to consider:**
- Complexity (technical challenge)
- Uncertainty (known vs. unknown)
- Volume of work (amount of code, tests, documentation)

**T-shirt sizing:**
- Small (1-2 days, low complexity)
- Medium (3-5 days, moderate complexity)
- Large (1-2 weeks, high complexity)

**If story is too large:**
- Consider splitting into multiple stories
- Each story should be deliverable independently
- Vertical slices preferred over horizontal (full feature in phases, not frontend then backend)

#### 8.2 Dependency Identification

**Ask:**
- What must be in place before this story can start?
- What other stories or technical work does this depend on?
- What infrastructure or APIs are required?

**Document dependencies:**
- **Dependencies:** Requires IoT API integration (Story #123) to be complete.
  Requires design system v2 (in progress).

### 9. Define Tasks (Level 3 Breakdown)

Break story into implementation tasks:

**Example tasks:**
```
1. Backend: Create sensor data API endpoint
   - Define API contract
   - Implement real-time data fetch from IoT bridge
   - Add error handling for offline equipment
   - Write unit tests

2. Frontend: Build sensor data display component
   - Implement UI component following design system
   - Connect to API endpoint
   - Add 5-second auto-refresh
   - Handle loading and error states

3. Testing: E2E and integration testing
   - Write integration tests for API
   - Write E2E tests for user flows
   - Performance testing (< 1s load)

4. Documentation: User-facing help
   - Create in-app tooltip for sensor data
   - Update help documentation

5. Instrumentation: Analytics implementation
   - Add "sensor data accessed" event
   - Track load time and errors
```

**Task validation:**
- [ ] Tasks are granular (1-3 days each)
- [ ] Tasks cover implementation, testing, documentation, instrumentation
- [ ] Tasks assigned to appropriate roles (backend, frontend, QA, etc.)

### 10. Create Story Document

#### 10.1 Use Story Template

Using template `user-story-tmpl.yaml`, generate story document:

**Document structure:**
```markdown
# [Story ID]: [Story Title]

**Epic:** [Link to epic if applicable]
**Status:** Backlog | In Progress | In Review | Done
**Priority:** High | Medium | Low
**Estimate:** [Story points or size]

## User Story

As a [user role],
I want to [capability],
So that [outcome].

## Context

**User Segment:** [From User DNA]
**JTBD:** [Job-to-be-Done]
**User Need:** [Problem being solved]
**Current State:** [What users do today]
**Evidence:** [Research, data, feedback]
**Business Value:** [Why build this now]

## Acceptance Criteria

### Functional Criteria
[List AC with Given/When/Then format]

### Non-Functional Criteria
[Performance, accessibility, security, etc.]

## Product Genome Validation

**Purpose Alignment:** [How this serves Purpose DNA]
**User Validation:** [Evidence of user need]
**Experience Standards:** [How this meets Experience DNA]

## MQB Gate Readiness

[Quick checklist of 12 gates]

## Dependencies

[List dependencies on other stories or technical work]

## Tasks

[Breakdown of implementation tasks]

## Instrumentation

[Analytics events and metrics to track]

## Risks and Mitigations

[Potential issues and how to address them]

## Definition of Done

- [ ] All acceptance criteria met
- [ ] All MQB gates passed
- [ ] Code reviewed and approved
- [ ] Tests written and passing (≥80% coverage)
- [ ] Documentation updated
- [ ] Instrumentation verified
- [ ] Deployed to production
- [ ] Validated with real users (if applicable)
```

#### 10.2 Save Story Document

- Save to: `docs/stories/story-[ID]-[short-title].md`
- Add to backlog tracking (Jira, Linear, etc.)
- Link to epic if applicable

### 11. Review and Refine Story

#### 11.1 Story Quality Check

**Validation questions:**
- [ ] Is user value clear?
- [ ] Are acceptance criteria specific and testable?
- [ ] Is the story the right size (not too big/small)?
- [ ] Are dependencies identified?
- [ ] Is MQB readiness considered?
- [ ] Is this aligned with Product Genome?

#### 11.2 Team Review

Share story with team:
- Product: Validates user need and priority
- Design: Confirms UX approach
- Engineering: Confirms feasibility and estimates
- QA: Confirms testability

Refine based on feedback.

### 12. Prioritize Story in Backlog

#### 12.1 Prioritization Criteria

**Consider:**
- **User Impact:** How many users benefit? How much?
- **Purpose Alignment:** How directly does this serve Purpose DNA?
- **North Star Impact:** Will this move the north star metric?
- **Urgency:** Is there a time-sensitive need?
- **Dependencies:** Do other stories depend on this?
- **Risk:** What's the cost of NOT doing this?

#### 12.2 Place in Backlog

Determine priority:
- **P0 (Critical):** Blocks users, critical bug, or prerequisite for other work
- **P1 (High):** High user impact, strong north star contribution
- **P2 (Medium):** Moderate impact, nice-to-have
- **P3 (Low):** Low impact, long-term investment

### 13. Present Story to User

**Deliverables:**
1. Complete story document
2. Acceptance criteria
3. Task breakdown
4. MQB gate readiness assessment
5. Priority recommendation

**Confirm with user:**
- "Does this story capture the user need accurately?"
- "Are the acceptance criteria clear and complete?"
- "Is this the right priority?"
- "Are you ready to add this to the backlog?"

---

## Task Completion

- Status: [Complete]
- Story Created: [Story ID and title]
- File Location: [Path]
- Priority: [P0/P1/P2/P3]
- Next Action: [Add to sprint / Keep in backlog / Refine further]
