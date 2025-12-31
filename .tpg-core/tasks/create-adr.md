<!-- Powered by Product Genome™ Framework -->

# Create Architecture Decision Record (ADR) Task

## Purpose

To create a comprehensive, well-documented Architecture Decision Record (ADR) that captures significant architectural decisions with context, rationale, consequences, and alternatives. ADRs ensure architectural knowledge is preserved, shared, and used to inform future decisions.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Core Configuration

- Load `.tpg-core/core-config.yaml` from the project root
- If the file does not exist, HALT and inform the user: "core-config.yaml not found. This file is required for ADR creation. Please ensure TPG Orchestrator is properly installed in your project."
- Extract key configurations: `architectureDNA.adrDirectory`, `architectureDNA.adrTemplate`

### 1. Determine ADR Context

#### 1.1 Identify the Architectural Decision

**Elicit from User:**
- What architectural decision needs to be documented?
- Why is this decision significant enough to warrant an ADR?
- Who is impacted by this decision?
- When does this decision need to be made/implemented?

**Decision Significance Criteria** (must meet at least 2):
- Impacts multiple teams or system components
- Difficult or costly to reverse
- Represents significant trade-offs
- Establishes a pattern for future decisions
- Affects non-functional requirements (scalability, security, performance)
- Changes existing architectural patterns

**If decision is not significant enough:**
- Inform user: "This decision may not require a full ADR. Consider documenting in code comments, team wiki, or Architecture DNA instead."
- Offer to proceed anyway or pivot to lighter documentation

#### 1.2 Check Existing ADR Directory

- Verify ADR directory exists: `{architectureDNA.adrDirectory}`
- If directory doesn't exist, offer to create it
- List existing ADRs to understand naming convention and numbering
- Determine next ADR number (e.g., ADR-001, ADR-002, etc.)

### 2. Gather ADR Information (Interactive Elicitation)

Use advanced elicitation techniques to gather comprehensive information.

#### 2.1 Context Section

**Elicit:**
- What is the situation or problem that requires this decision?
- What forces or constraints are driving this decision?
- What is the current state (if changing from existing architecture)?
- What business or technical requirements necessitate this decision?
- What is the timeline or urgency?

**Prompting Questions:**
- "Why are we making this decision now?"
- "What happens if we don't make a decision?"
- "What constraints are we working within (budget, time, skills, technology)?"
- "What prior decisions or existing architecture influences this?"

**Expected Output:**
- 2-4 paragraphs clearly establishing context
- Specific forces/constraints documented
- Links to related decisions or requirements

#### 2.2 Decision Section

**Elicit:**
- What exactly have we decided to do?
- What is the proposed architectural change or pattern?
- What technologies, patterns, or approaches will be used?
- Who made or will make the final decision?

**Prompting Questions:**
- "State the decision in one clear sentence."
- "What specific actions will we take?"
- "What technologies or patterns are involved?"
- "Is this decision final, or is it a proposal for review?"

**Expected Output:**
- Clear, unambiguous decision statement
- Specific technologies/patterns named
- Decision status (Proposed, Accepted, Rejected, Superseded)

#### 2.3 Rationale Section

**Elicit:**
- WHY did we choose this approach?
- What principles or criteria guided the decision?
- What evidence supports this choice?
- How does this align with Architecture DNA principles?
- What benefits does this approach provide?

**Prompting Questions:**
- "Why is this the best choice given the context?"
- "What Architecture DNA principles does this support?"
- "What evidence (benchmarks, case studies, experience) supports this?"
- "How does this serve user needs or business goals?"

**Expected Output:**
- Clear explanation of "why" (not just "what")
- Connection to architectural principles
- Evidence or reasoning supporting the choice
- Alignment with Purpose DNA and User DNA

#### 2.4 Alternatives Considered Section

**Elicit:**
- What other options were evaluated?
- For each alternative, why was it rejected?
- What are the pros and cons of each alternative?
- Was "do nothing" considered?

**Prompting Questions:**
- "What other approaches did you consider?"
- "Why did you reject each alternative?"
- "What would be the consequences of not making any change?"
- "Did you evaluate X approach?" (suggest common alternatives if user hasn't considered them)

**Expected Output:**
- At least 2-3 alternatives documented
- Pros and cons for each
- Clear reasons for rejection
- "Do nothing" option included if applicable

#### 2.5 Consequences Section

**Elicit:**
- What are the positive consequences of this decision?
- What are the negative consequences or trade-offs?
- What technical debt might this create?
- What new risks are introduced?
- What opportunities are enabled?
- What future flexibility is gained or lost?

**Prompting Questions:**
- "What becomes easier with this decision?"
- "What becomes harder?"
- "What trade-offs are we accepting?"
- "How does this impact team velocity, code quality, or maintainability?"
- "What risks should we monitor?"
- "How does this constrain future decisions?"

**Expected Output:**
- Honest assessment of both positive and negative consequences
- Trade-offs explicitly acknowledged
- Risks documented
- Impact on technical debt, team, and future flexibility

#### 2.6 Implementation Details (Optional)

**Elicit:**
- Are there specific implementation notes or guidance?
- What is the migration path (if changing from existing)?
- What is the timeline for implementation?
- Who is responsible for implementation?

**Expected Output:**
- High-level implementation guidance (not exhaustive)
- Migration plan if applicable
- Timeline and ownership

### 3. Validate ADR Quality

Run quality checks on the drafted ADR:

#### 3.1 Completeness Check
- [ ] Context clearly establishes why decision is needed
- [ ] Decision is stated unambiguously
- [ ] Rationale explains "why" convincingly
- [ ] At least 2 alternatives documented
- [ ] Consequences include both positives and negatives
- [ ] No placeholder text (TBD, TODO)

#### 3.2 Clarity Check
- [ ] Language is clear and free of jargon (or jargon is explained)
- [ ] Technical terms are defined
- [ ] Anyone on the team can understand the decision
- [ ] Decision status is clear (Proposed, Accepted, etc.)

#### 3.3 Alignment Check
- [ ] Decision aligns with Architecture DNA principles
- [ ] Decision supports Purpose DNA and User DNA
- [ ] Trade-offs are acceptable given priorities
- [ ] Consequences are well understood

#### 3.4 Evidence Check
- [ ] Decision is based on evidence (not just opinion)
- [ ] Alternatives were genuinely considered
- [ ] Consequences are realistic (not wishful thinking)

**If validation fails:**
- Identify specific gaps
- Re-elicit missing information
- Refine sections until validation passes

### 4. Review and Refinement

#### 4.1 Present Draft ADR to User

Present the complete ADR in the standard format:

```markdown
# ADR-XXX: [Decision Title]

**Status:** [Proposed | Accepted | Rejected | Superseded]
**Date:** [Date]
**Decision Makers:** [Names/Roles]
**Supersedes:** [ADR-YYY if applicable]

## Context

[Context paragraphs]

## Decision

[Decision statement]

## Rationale

[Rationale explanation]

## Alternatives Considered

### Alternative 1: [Name]
**Pros:** [...]
**Cons:** [...]
**Rejection Reason:** [...]

### Alternative 2: [Name]
...

## Consequences

### Positive Consequences
- [...]

### Negative Consequences / Trade-offs
- [...]

### Risks to Monitor
- [...]

### Impact on Technical Debt
- [...]

## Implementation Notes

[Optional implementation guidance]

---

**Related ADRs:** [Links to related ADRs]
**References:** [Links to research, documentation, etc.]
```

#### 4.2 Gather Feedback

Ask user:
- "Does this accurately capture the decision and context?"
- "Is the rationale convincing?"
- "Are the consequences realistic?"
- "Is anything missing or unclear?"

Allow user to refine any section.

### 5. Finalize and Save ADR

#### 5.1 Determine ADR Status

Ask user:
- Is this ADR **Proposed** (for review) or **Accepted** (final)?
- Who are the decision makers?
- Are there related ADRs to reference?

#### 5.2 Generate ADR File

- Create filename: `ADR-XXX-short-title.md` (e.g., `ADR-003-offline-first-architecture.md`)
- Use kebab-case for filename
- Save to: `{architectureDNA.adrDirectory}/ADR-XXX-short-title.md`

#### 5.3 Update ADR Index

If an ADR index exists (`{architectureDNA.adrDirectory}/README.md` or `index.md`):
- Add entry to index:
  - ADR number and title
  - Status
  - Date
  - Brief one-line summary
- If index doesn't exist, offer to create one

#### 5.4 Update Architecture DNA

If Architecture DNA document exists:
- Add ADR to the "Key ADRs" table
- Reference in relevant sections (e.g., technology stack, modularity)

### 6. Post-Creation Actions

#### 6.1 Confirmation

Inform user:
```
ADR created successfully: {file_path}

ADR-XXX: [Title]
Status: [Proposed/Accepted]
Decision Makers: [Names]

This ADR has been saved to the ADR directory and will serve as a reference for future architectural decisions.
```

#### 6.2 Suggest Next Steps

Based on ADR status:

**If Proposed:**
1. Share with team for review
2. Schedule architecture review meeting
3. Gather feedback and iterate
4. Update status to Accepted once finalized

**If Accepted:**
1. Communicate decision to all affected teams
2. Update Architecture DNA to reference this ADR
3. Add to onboarding materials for new team members
4. Create implementation plan if not yet defined
5. Schedule follow-up review (e.g., in 3-6 months) to validate consequences

#### 6.3 Integration Suggestions

Offer to:
1. **Update Architecture DNA:** Add this ADR to Architecture DNA document
2. **Create Implementation Plan:** If decision requires implementation, create technical plan
3. **Share via Pull Request:** If using version control, create PR for review
4. **Create Related ADRs:** If this decision triggers other decisions
5. **Update Team Wiki/Documentation:** Propagate decision to other docs

### 7. ADR Lifecycle Management Guidance

Provide guidance on ADR lifecycle:

**When to Update an ADR:**
- Never modify an accepted ADR
- If decision changes, create new ADR that supersedes the old one
- Mark old ADR as "Superseded by ADR-XXX"

**When to Create Follow-Up ADR:**
- If consequences emerge that require new decisions
- If context changes significantly
- If alternatives need reconsideration

**Review Schedule:**
- Review ADRs quarterly or after major changes
- Validate consequences match reality
- Document lessons learned

---

## Error Handling

### Missing ADR Directory
- Error: "ADR directory not found at {path}"
- Action: Offer to create directory structure
- Create: `docs/adrs/` (or path from config)

### ADR Number Conflict
- Error: "ADR-XXX already exists"
- Action: Increment to next available number
- Inform user of number change

### Insufficient Detail
- Error: "ADR lacks sufficient detail in [section]"
- Action: Re-elicit information for that section
- Provide examples to guide user

---

## ADR Quality Standards

An excellent ADR should:
- **Be discoverable:** Easy to find via index and search
- **Be understandable:** Anyone on team can understand it
- **Be honest:** Acknowledges trade-offs and risks
- **Be evidence-based:** Grounded in facts, not opinions
- **Be timeless:** Context preserves understanding even years later
- **Be actionable:** Provides clear direction for implementation

---

## Template Reference

ADRs use the template defined in `.tpg-core/templates/adr-tmpl.yaml`.

---

## Notes for ADR Creator

- **Quality over speed:** Take time to capture context and rationale fully
- **Challenge assumptions:** Ask "why" repeatedly to get to root rationale
- **Document alternatives:** Even if obvious, document what was considered
- **Be honest about consequences:** Acknowledge trade-offs and risks
- **Future-proof context:** Write for someone reading this in 2 years
- **Connect to Architecture DNA:** Ensure alignment with principles
- **Avoid jargon:** Explain technical terms for broader team understanding

---

## Task Completion

- Status: [Draft / Complete]
- ADR Created: [ADR-XXX]
- File Location: [Path]
- Next Recommended Action: [Share for review / Update Architecture DNA / Create implementation plan]
