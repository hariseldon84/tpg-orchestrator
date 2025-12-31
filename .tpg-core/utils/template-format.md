# Template Format Utilities

## Purpose
Provide standardized formatting utilities and guidelines for all Product Genome template files.

## Template File Structure

All YAML templates must follow this structure:

```yaml
template:
  id: unique-template-id
  name: Human Readable Name
  version: 1.0
  output:
    format: markdown
    filename: docs/output-filename.md
    title: "{{project_name}} Document Title"

workflow:
  mode: interactive  # or automated
  elicitation: advanced-elicitation  # optional

sections:
  - id: section-id
    title: Section Title
    instruction: |
      Clear instructions for the agent on what to create in this section.
      Include guidance on:
      - What information to gather
      - How to structure the content
      - What questions to ask
      - What examples to provide
    elicit: true  # Enable elicitation for this section
    condition: Optional condition for including section
    repeatable: false  # Can this section repeat?

    content: |
      Optional fixed content that doesn't need creation

    template: "{{variable_name}}"  # Template with variables

    sections:  # Nested subsections
      - id: subsection-id
        title: Subsection Title
        # ... same structure as parent
```

## Variable Conventions

### Naming
- Use snake_case for all variables
- Be descriptive: `user_persona_description` not `desc`
- Prefix related variables: `mqb_gate_1`, `mqb_gate_2`

### Common Variables
```yaml
# Project identifiers
{{project_name}}
{{project_version}}
{{project_description}}

# Dates and tracking
{{date}}
{{version}}
{{author}}

# DNA-specific
{{purpose_statement}}
{{north_star_metric}}
{{user_segment}}
{{mqb_threshold}}
{{architecture_pattern}}
{{cultural_value}}
```

## Section Types

### 1. Fixed Content
Content that doesn't change, just includes project variables:

```yaml
- id: introduction
  content: |
    This document defines {{project_name}}'s Purpose DNA.
```

### 2. Template-Based
Content structure provided, agent fills variables:

```yaml
- id: purpose
  template: |
    **Problem:** {{problem_statement}}
    **Solution:** {{solution_vision}}
    **Impact:** {{intended_impact}}
```

### 3. Repeatable Sections
Sections that can repeat (e.g., multiple user segments):

```yaml
- id: user-segments
  repeatable: true
  sections:
    - id: segment
      title: "{{segment_name}}"
      template: |
        **Who:** {{who_description}}
        **Context:** {{context}}
        **Jobs:** {{jobs_to_be_done}}
```

### 4. Conditional Sections
Sections included only if condition met:

```yaml
- id: external-apis
  condition: Project requires external integrations
  instruction: |
    Only include if the project integrates with external services.
```

## Elicitation Integration

### When to Enable Elicitation

Enable `elicit: true` when:
- Section requires strategic thinking
- Multiple valid approaches exist
- User input is critical
- Content impacts other sections
- Risk or uncertainty is high

### Elicitation Format

```yaml
- id: critical-section
  elicit: true
  instruction: |
    Present the drafted content with detailed rationale.
    Then offer 1-9 elicitation options:
    1. Proceed to next section
    2-9. Selected from data/elicitation-methods.md
```

## Instructions Best Practices

### Clear Guidance
```yaml
instruction: |
  Work with the user to define the Purpose DNA:

  1. Ask about the core problem being solved
  2. Identify the target users affected by this problem
  3. Explore the intended transformation (before → after)
  4. Validate alignment with Product Genome principles
  5. Get explicit confirmation before proceeding
```

### Include Examples
```yaml
instruction: |
  Define the north star metric - the ONE metric that best represents success.

  Examples:
  - "30-day user retention rate"
  - "Time to complete core job"
  - "% of users achieving desired outcome"

  Note: Choose a user-outcome metric, not a business metric.
```

### Provide Context
```yaml
instruction: |
  Review the Purpose DNA and User DNA documents before starting.
  This ensures Experience DNA aligns with user needs and product purpose.

  If those documents don't exist, guide the user to create them first.
```

## Table Formatting

### Simple Tables
```yaml
- id: tech-stack
  type: table
  columns: [Technology, Version, Purpose]
  rows:
    - ["React", "18.2.0", "UI Framework"]
    - ["Node.js", "20.11.0", "Backend Runtime"]
```

### Template Tables
```yaml
- id: mqb-gates
  type: table
  columns: [Gate, Threshold, Validation Method]
  instruction: Define each MQB gate with specific thresholds
  template: |
    | {{gate_name}} | {{threshold}} | {{validation_method}} |
```

## Mermaid Diagrams

### Graph Diagrams
```yaml
- id: purpose-filter
  type: mermaid
  mermaid_type: graph
  template: |
    graph TD
      A[Feature Request] --> B{Serves Purpose?}
      B -->|No| C[Decline]
      B -->|Yes| D{Validated by Users?}
      D -->|No| E[Research First]
      D -->|Yes| F{Meets MQB?}
      F -->|No| G[Defer]
      F -->|Yes| H[Build]
```

### Sequence Diagrams
```yaml
- id: user-flow
  type: mermaid
  mermaid_type: sequence
  template: |
    sequenceDiagram
      User->>System: {{action_1}}
      System->>Database: {{query_1}}
      Database-->>System: {{response_1}}
      System-->>User: {{feedback_1}}
```

## Validation Rules

### Required Fields
Every template must have:
- `template.id` - unique identifier
- `template.name` - human-readable name
- `template.output.filename` - where to save
- At least one `sections` entry

### Optional But Recommended
- `template.version` - for tracking changes
- `workflow.mode` - guides execution approach
- Section `instruction` - helps agent understand intent
- `elicit: true` - for strategic sections

## Common Patterns

### DNA Document Pattern
```yaml
template:
  id: dna-name-tmpl
  name: DNA Name Document
  output:
    filename: docs/dna-name.md
    title: "{{project_name}} DNA Name"

sections:
  - id: introduction
    # Fixed content introducing the DNA

  - id: core-definition
    elicit: true
    # Interactive section for main DNA content

  - id: validation
    # Validation criteria

  - id: next-steps
    # Action items and handoffs
```

### Assessment Pattern
```yaml
template:
  id: assessment-name-tmpl
  name: Assessment Name
  output:
    filename: reports/assessment-name.md

sections:
  - id: current-state
    # Where are we now?

  - id: maturity-scoring
    type: table
    # Maturity scores 1-5

  - id: gaps-identified
    # What's missing?

  - id: recommendations
    # Prioritized action plan
```

### Checklist Pattern
```yaml
template:
  id: checklist-name-tmpl
  name: Checklist Name
  output:
    filename: checklists/checklist-name.md

sections:
  - id: category-1
    type: checklist
    items:
      - "Item to validate"
      - "Another validation point"

  - id: category-2
    type: checklist
    # More validation items

  - id: results
    # Pass/fail summary
```

## Error Handling

### Missing Variables
If a variable is referenced but not defined:
- Prompt the user for the value
- Provide examples or guidance
- Don't proceed until resolved

### Invalid Conditions
If a condition can't be evaluated:
- Ask the user for clarification
- Suggest reasonable default
- Document the assumption

### Elicitation Failures
If elicitation doesn't produce actionable feedback:
- Re-present the content with more context
- Offer different elicitation methods
- Allow user to provide direct input

## Product Genome Principles

All templates should embody:

1. **Evidence Over Assumptions**
   - Ask for data and research
   - Validate with real users
   - Document sources

2. **Quality Over Speed**
   - Include validation steps
   - Enforce MQB gates
   - Don't skip critical sections

3. **Purpose Over Features**
   - Always connect to Purpose DNA
   - Validate strategic alignment
   - Filter noise from signal

4. **Coherence Across DNAs**
   - Reference related DNA documents
   - Check for conflicts
   - Maintain consistency

## Version Control

When updating templates:
1. Increment `template.version`
2. Add entry to changelog section
3. Document breaking changes
4. Provide migration path if needed

## Testing Templates

Before finalizing a template:
1. Test in interactive mode
2. Test in automated mode (if supported)
3. Verify all variables populate correctly
4. Check mermaid diagrams render
5. Validate table formatting
6. Test with elicitation enabled

---

**Remember:** Templates are instruments of thinking, not just document generators. Design them to guide Product Genome thinking, not just fill in blanks.
