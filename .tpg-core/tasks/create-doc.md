<!-- Powered by Product Genome™ Framework -->

# Create Document Task

## Purpose

To create a comprehensive, well-structured document using Product Genome templates. This task handles interactive document creation with elicitation, validation, and quality assurance based on template specifications.

## Task Parameters

This task requires a template parameter specifying which template to use:
- Template file location: `.tpg-core/templates/{template-name}.yaml`

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load Template and Configuration

- Load the specified template from `.tpg-core/templates/{template-name}.yaml`
- Load `.tpg-core/core-config.yaml` from project root
- Parse template structure including:
  - Output format and destination
  - Sections and subsections
  - Elicitation requirements
  - Validation rules
  - Workflow mode (interactive vs automated)

### 1. Determine Document Creation Mode

Based on template `workflow.mode`:

**Interactive Mode** (default):
- Engage user in conversation for each section
- Use elicitation techniques for unclear items
- Provide educated guesses for user to confirm/refine
- Present section-by-section for review

**Automated Mode**:
- Pre-fill all sections based on available context
- Present complete document for review
- Ask for specific refinements

### 2. Initialize Document Structure

- Create document outline based on template sections
- Set up document metadata (title, date, version)
- Initialize change log if specified in template
- Prepare output destination based on template config

### 3. Process Document Sections Sequentially

For each section in the template:

#### 3.1 Read Section Configuration
- Section ID, title, type
- Instruction text
- Elicitation requirements (elicit: true/false)
- Subsections (if any)
- Examples provided
- Validation rules

#### 3.2 Handle Section Based on Type

**For Standard Sections:**
1. Present section title and instruction
2. If elicit=true, engage in interactive elicitation:
   - Ask clarifying questions
   - Provide examples from template
   - Offer educated guesses based on context
   - Refine based on user feedback
3. If elicit=false, pre-fill based on context
4. Present drafted section to user
5. Allow user to refine/approve

**For Repeatable Sections (e.g., epics, stories):**
1. Present section template
2. Ask how many instances needed
3. For each instance:
   - Gather required information
   - Fill template with instance data
   - Present for review
4. Allow adding/removing instances

**For Conditional Sections:**
1. Evaluate condition
2. If condition met, process as standard section
3. If condition not met, skip section

#### 3.3 Section Types Handling

**Paragraphs:**
- Allow free-form text entry
- Provide word count guidance if specified
- Offer to draft based on context

**Bullet Lists:**
- Numbered or unnumbered based on type
- Prefix handling (e.g., FR, NFR)
- Allow adding/removing items

**Tables:**
- Column structure from template
- Row-by-row entry
- Initial rows if specified

**Structured Templates:**
- User story format
- JTBD format
- Custom formats as specified

### 4. Advanced Elicitation (if template specifies)

If template includes `workflow.elicitation: advanced-elicitation`:

- Execute `.tpg-core/tasks/advanced-elicitation.md`
- Use sophisticated questioning techniques
- Uncover hidden assumptions
- Challenge vague statements
- Seek evidence for claims
- Push for specificity

### 5. Document Review and Refinement

#### 5.1 Section-by-Section Review
- Present completed sections to user
- Highlight areas that need more detail
- Flag any missing required information
- Allow targeted edits

#### 5.2 Full Document Review
- Present complete document
- Check for coherence across sections
- Verify all required sections complete
- Ensure consistency in terminology and style

### 6. Validation and Quality Checks

Run validation checks based on template specifications:

#### 6.1 Completeness Check
- All required sections present
- No placeholder text remaining
- All tables/lists populated

#### 6.2 Quality Check
- Clarity: Is language clear and unambiguous?
- Specificity: Are statements specific enough to be actionable?
- Evidence: Are claims supported by evidence/data?
- Consistency: Is terminology consistent throughout?

#### 6.3 Template-Specific Validation
- Run any custom validation rules specified in template
- Check against checklists if referenced
- Validate cross-references

### 7. Execute Associated Checklists

If template specifies checklist validation:
- Load specified checklist(s)
- Run checklist evaluation
- Document results
- Address any checklist failures before finalizing

### 8. Generate Output Document

#### 8.1 Format Document
- Apply markdown formatting
- Structure headings properly
- Format tables, lists, code blocks
- Add table of contents if needed
- Include metadata header

#### 8.2 Create Output File
- Write to destination specified in template
- Create directory structure if needed
- Preserve any existing version history
- Update change log

### 9. Post-Creation Actions

#### 9.1 Confirmation
- Confirm document created successfully
- Display file location
- Show document summary (word count, section count, etc.)

#### 9.2 Next Steps Guidance
Based on document type, suggest next steps:
- For Purpose DNA: Suggest running validation checklist
- For User DNA: Suggest conducting user research
- For Genome Assessment: Suggest creating action plan
- Provide relevant agent/task recommendations

#### 9.3 Link to Product Genome Evolution
- Log document creation in evolution tracking
- Update genome status if applicable
- Set reminder for document review/update

### 10. Offer Additional Services

Present numbered options:
```
Document created successfully: {file_path}

What would you like to do next?

1. Output full document for review
2. Run validation checklist
3. Create related document (e.g., if created Purpose DNA, offer User DNA)
4. Export to different format
5. Share with specific agent for further work
6. Return to orchestrator
```

---

## Error Handling

### Missing Template
- Error message: "Template {template-name}.yaml not found in .tpg-core/templates/"
- Offer to list available templates
- Suggest creating custom template if needed

### Configuration Issues
- Validate template YAML syntax
- Check for required fields
- Provide clear error messages for malformed templates

### User Interruption
- Save progress if user needs to pause
- Allow resuming from last completed section
- Maintain draft state

---

## Special Handling for Common Document Types

### Purpose DNA Documents
- Emphasize clarity and measurability
- Push for specific success criteria
- Validate north star metric definition
- Connect to Business Model if available

### User DNA Documents
- Require evidence sources
- Challenge assumptions
- Push for specific segments
- Validate JTBD format
- Link to Purpose DNA

### Experience DNA Documents
- Require measurable thresholds
- Validate MQB gate criteria
- Connect to User DNA needs
- Ensure quality metrics are trackable

### Architecture DNA Documents
- Require rationale for decisions
- Generate ADR format
- Connect to Experience DNA requirements
- Validate technical constraints

---

## Notes for Document Creator

- Quality over speed - take time to get it right
- Evidence over assumptions - always seek validation
- Clarity over cleverness - simple, clear language wins
- User collaboration - this is a conversation, not interrogation
- Iterate - documents can be refined over time
- Context awareness - use all available project context
- Template fidelity - follow template structure but allow flexibility when needed
