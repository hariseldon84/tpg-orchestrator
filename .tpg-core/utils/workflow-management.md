# Workflow Management Utilities

## Purpose
Provide utilities and guidelines for managing Product Genome workflows, including workflow definition, execution, tracking, and coordination across multiple agents.

## Workflow Types

### 1. Assessment Workflows
**Purpose:** Evaluate current product state across DNAs
**Pattern:** Discover → Analyze → Score → Recommend

```
genome-assessment-flow:
  1. *assess-genome (orchestrator)
  2. Generate maturity scores (1-5) for each DNA
  3. Identify critical gaps
  4. Prioritize recommendations
  5. Create action plan
```

### 2. Creation Workflows
**Purpose:** Build DNA documents from scratch
**Pattern:** Foundation → Build → Validate → Integrate

```
dna-creation-flow:
  1. Start with Purpose DNA (foundation)
  2. Create User DNA (anchor to reality)
  3. Define Experience DNA (quality thresholds)
  4. Document Architecture DNA (structure)
  5. Establish Intelligence DNA (measurement)
  6. Define Cultural DNA (values & rituals)
  7. Validate coherence across all DNAs
```

### 3. Validation Workflows
**Purpose:** Validate features against Product Genome
**Pattern:** Check → Test → Gate → Decide

```
feature-validation-flow:
  1. Does it serve Purpose DNA? (strategic filter)
  2. Is it validated by User DNA? (evidence check)
  3. Does it meet Experience DNA thresholds? (quality bar)
  4. Does it fit Architecture DNA? (structural integrity)
  5. Can we measure it? (Intelligence DNA)
  6. Does it align with Cultural DNA? (values check)
  7. MQB Gate validation (12 gates)
  8. Ship/No-Ship decision
```

### 4. Transformation Workflows
**Purpose:** Transform existing products to Product Genome
**Pattern:** Assess → Plan → Execute → Validate

```
brownfield-product:
  1. Run genome assessment
  2. Identify most critical DNA gap
  3. Start with highest-impact DNA (usually Purpose or User)
  4. Build remaining DNAs incrementally
  5. Validate coherence
  6. Implement MQB gates
  7. Monitor and iterate
```

## Workflow State Management

### Workflow States
```yaml
states:
  not_started: Workflow hasn't been initiated
  in_progress: Currently executing
  paused: Temporarily suspended (waiting for input/approval)
  completed: Successfully finished
  failed: Encountered blocking error
  cancelled: User terminated
```

### State Transitions
```
not_started → in_progress (when workflow starts)
in_progress → paused (when awaiting user input)
paused → in_progress (when user provides input)
in_progress → completed (when all steps done)
in_progress → failed (when error blocks progress)
any_state → cancelled (when user exits)
```

## Multi-Agent Coordination

### Agent Handoff Pattern

```yaml
handoff:
  from_agent: purpose-architect
  to_agent: user-analyst
  context:
    - Purpose DNA document completed
    - North star metric defined
    - Strategic boundaries established
  deliverables:
    - docs/purpose-dna.md
  next_steps:
    - Create User DNA aligned with Purpose DNA
    - Validate user segments serve the purpose
    - Define user research plan
```

### Party Mode Coordination

When multiple agents collaborate simultaneously:

```
*party-mode workflow:
  1. Orchestrator moderates discussion
  2. Each specialist provides perspective
  3. Conflicts highlighted and resolved
  4. Consensus reached on decision
  5. Decision documented with rationale
  6. Action items assigned to specific agents
```

## Workflow Execution Patterns

### Sequential Pattern
Steps must complete in order:

```yaml
workflow:
  type: sequential
  steps:
    - step: 1
      agent: purpose-architect
      task: create-purpose-dna
      required: true

    - step: 2
      agent: user-analyst
      task: create-user-dna
      depends_on: step_1
      required: true

    - step: 3
      agent: experience-guardian
      task: create-experience-dna
      depends_on: [step_1, step_2]
      required: true
```

### Parallel Pattern
Steps can execute simultaneously:

```yaml
workflow:
  type: parallel
  steps:
    - step: assess_purpose
      agent: purpose-architect
      task: assess-purpose-dna

    - step: assess_user
      agent: user-analyst
      task: assess-user-dna

    - step: assess_experience
      agent: experience-guardian
      task: assess-experience-dna

  consolidation:
    step: compile_results
    agent: tpg-orchestrator
    task: assess-genome
    requires_all: true
```

### Conditional Pattern
Steps depend on conditions:

```yaml
workflow:
  type: conditional
  steps:
    - step: check_purpose
      condition: "docs/purpose-dna.md exists"
      if_true: skip_to_user_dna
      if_false: create_purpose_dna

    - step: create_purpose_dna
      agent: purpose-architect
      task: create-purpose-dna

    - step: skip_to_user_dna
      agent: user-analyst
      task: create-user-dna
```

## Workflow Documentation

### Workflow Definition Format

```yaml
workflow:
  id: workflow-unique-id
  name: Human Readable Workflow Name
  version: 1.0
  description: What this workflow accomplishes

  use_cases:
    - When to use this workflow
    - What problems it solves

  prerequisites:
    - What must exist before starting
    - Required context or documents

  agents_involved:
    - agent-1
    - agent-2

  estimated_duration: "30-60 minutes"

  phases:
    - phase: 1
      name: Phase Name
      objective: What this phase accomplishes
      steps:
        - step_id
        - step_id

    - phase: 2
      # ...

  steps:
    - id: step-1
      name: Step Name
      agent: agent-id
      task: task-id
      inputs:
        - Input 1
        - Input 2
      outputs:
        - Output 1
        - Output 2
      validation:
        - Validation check 1
        - Validation check 2

  deliverables:
    - Final deliverable 1
    - Final deliverable 2

  success_criteria:
    - How to know workflow succeeded
```

### Example: Greenfield Product Workflow

```yaml
workflow:
  id: greenfield-product
  name: New Product Development (Product Genome)
  version: 1.0
  description: End-to-end workflow for building a new product using Product Genome principles

  phases:
    - phase: 1
      name: Foundation (DNAs 1-2)
      steps: [define_purpose, research_users]

    - phase: 2
      name: Quality & Structure (DNAs 3-4)
      steps: [set_experience_standards, design_architecture]

    - phase: 3
      name: Intelligence & Culture (DNAs 5-6)
      steps: [establish_metrics, define_culture]

    - phase: 4
      name: Validation & Launch
      steps: [validate_coherence, setup_mqb, first_feature]

  steps:
    - id: define_purpose
      agent: purpose-architect
      task: create-purpose-dna
      outputs: [docs/purpose-dna.md]
      validation:
        - Purpose statement clear and measurable
        - North star metric defined
        - Strategic boundaries established

    # ... more steps
```

## Workflow Tracking

### Progress Tracking

```
Workflow: greenfield-product
Status: IN PROGRESS (Phase 2 of 4)
Started: 2025-12-30 10:00 AM
Current Step: set_experience_standards

Completed Steps:
✅ define_purpose (30 min)
✅ research_users (45 min)

Current Step:
🔄 set_experience_standards (in progress, 15 min elapsed)

Upcoming Steps:
⏸️ design_architecture
⏸️ establish_metrics
⏸️ define_culture
⏸️ validate_coherence
⏸️ setup_mqb
⏸️ first_feature

Estimated Time Remaining: 90 minutes
```

### Checkpoints

Define checkpoints where user approval is required:

```yaml
checkpoints:
  - after_phase: 1
    checkpoint: foundation_review
    requires_approval: true
    validation:
      - Purpose DNA validated by stakeholders
      - User research sufficient to proceed

  - after_phase: 2
    checkpoint: architecture_review
    requires_approval: true
    validation:
      - Experience standards agreed upon
      - Architecture patterns approved
```

## Error Handling

### Workflow Errors

```yaml
error_handling:
  - error_type: missing_prerequisite
    action: pause_workflow
    message: "Required document not found: {filename}"
    resolution: "Create the missing document or skip this step"

  - error_type: validation_failed
    action: retry_step
    max_retries: 3
    fallback: pause_for_user_input

  - error_type: agent_unavailable
    action: suggest_alternative_agent
    message: "Agent {agent_id} not available. Use {alternative}?"
```

### Recovery Patterns

```
When workflow fails:
  1. Save current state
  2. Identify failure point
  3. Present recovery options:
     - Retry from failed step
     - Skip failed step (with justification)
     - Restart from last checkpoint
     - Cancel workflow
  4. Document resolution
  5. Resume or exit
```

## Workflow Optimization

### Parallelization Opportunities

Identify steps that can run in parallel:
- Independent DNA assessments
- Non-dependent template creations
- Separate validation checks

### Automation Points

Steps that can be fully automated:
- File existence checks
- Format validation
- Cross-reference verification
- Maturity score calculation

### User Interaction Points

Minimize but preserve critical user touchpoints:
- Strategic decisions
- Content approval
- Prioritization choices
- Validation checkpoints

## Best Practices

### 1. Clear Entry Points
Every workflow should have obvious starting conditions:
```
Start this workflow when:
- Building a new product from scratch
- No existing Product Genome documents
- Team aligned on using Product Genome approach
```

### 2. Explicit Exits
Define how workflows end:
```
Success exit:
- All deliverables created
- All validations passed
- User approves final state

Failure exit:
- Critical blocker encountered
- User cancels
- Time/resource constraints

Partial exit:
- Some objectives met
- Remaining work documented
- Clear continuation path
```

### 3. Resumability
Workflows should be resumable:
```
Resumption points:
- After each completed phase
- After each major deliverable
- After each user approval
- After any pause
```

### 4. Documentation
Every workflow execution should produce:
- Execution log (what happened, when, who)
- Deliverables (documents, decisions, artifacts)
- Lessons learned (what worked, what didn't)
- Next steps (continuation path)

## Product Genome Workflow Principles

All workflows must embody:

1. **Evidence-Based Progression**
   - Each step builds on validated previous work
   - No guesswork or assumptions
   - Data and research drive decisions

2. **Quality Gates**
   - Clear validation at each step
   - MQB enforced throughout
   - No skipping quality checks

3. **User-Centricity**
   - User DNA validates all work
   - Real user input required
   - Not building in isolation

4. **Coherence Checks**
   - Regular cross-DNA validation
   - Conflict detection and resolution
   - Maintain alignment across all DNAs

5. **Iterative Refinement**
   - Workflows are living documents
   - Learn from each execution
   - Improve based on outcomes

---

**Remember:** Workflows are guides, not rigid scripts. Adapt to context while preserving Product Genome principles.
