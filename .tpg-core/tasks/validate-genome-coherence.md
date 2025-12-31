<!-- Powered by Product Genome™ Framework -->

# Validate Genome Coherence Task

## Purpose

To conduct comprehensive cross-DNA coherence validation ensuring all 6 DNAs work together harmoniously, identify conflicts or misalignments, and assess overall Product Genome health. This task prevents DNA drift, catches contradictions, and ensures the genome remains a cohesive system rather than disconnected documents.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load All Product Genome DNAs

- Load `.tpg-core/core-config.yaml` from the project root
- Load all 6 DNAs:
  1. `docs/dna/purpose-dna.md`
  2. `docs/dna/user-dna.md`
  3. `docs/dna/experience-dna.md`
  4. `docs/dna/architecture-dna.md`
  5. `docs/dna/intelligence-dna.md`
  6. `docs/dna/cultural-dna.md`
- Load coherence validation checklist from `.tpg-core/checklists/genome-coherence-checklist.md`

**If any DNA missing:**
- WARN: "Incomplete Product Genome. Coherence validation requires all 6 DNAs."
- Offer to: (a) Create missing DNAs first, (b) Validate partial genome with caveats

### 1. Explain Genome Coherence Concept

#### 1.1 Present Coherence Framework

Inform user:

```
Genome Coherence validates that all 6 DNAs work together as a system:

Coherence Dimensions:
1. Alignment: Do DNAs point in the same direction?
2. Consistency: Do DNAs avoid contradictions?
3. Completeness: Do DNAs cover all necessary aspects without gaps?
4. Mutual Reinforcement: Do DNAs strengthen each other?

Strong coherence (score 4-5):
- DNAs align seamlessly
- Decisions in one DNA naturally lead to decisions in others
- The genome feels like a unified system

Weak coherence (score 1-2):
- DNAs conflict or contradict
- Decisions in one DNA undermine decisions in others
- The genome feels like disconnected documents
```

### 2. Purpose-User Coherence Validation

#### 2.1 Purpose-User Alignment

**Validate:**
- Does User DNA serve users who can achieve the Purpose?
- Do User DNA segments align with Purpose DNA scope?
- Does the primary user segment match the purpose focus?
- Do JTBDs align with purpose objectives?

**Coherence Questions:**
1. "If we serve these user segments successfully, will we achieve our purpose?"
2. "Are we targeting users who care about what we're purposing to deliver?"
3. "Do user needs align with our north star metric?"
4. "Are there user needs that conflict with our purpose?"

**Scoring:**
- 5 = Perfect alignment (users and purpose completely aligned)
- 4 = Strong alignment (minor gaps)
- 3 = Moderate alignment (some misalignment needing attention)
- 2 = Weak alignment (significant conflicts)
- 1 = Misaligned (users and purpose don't match)

**Document findings:**
- Alignment Score: [1-5]
- Evidence: [Specific examples of alignment or conflicts]
- Conflicts: [Any contradictions between Purpose and User DNAs]
- Recommendations: [How to resolve conflicts]

#### 2.2 Purpose-User Evidence Check

**Validate:**
- Is user research validating purpose assumptions?
- Do users actually need what the purpose promises?
- Is the north star metric meaningful to users?

**Red Flags:**
- Users don't care about the purpose
- Purpose promises something users don't value
- North star metric disconnected from user needs

### 3. User-Experience Coherence Validation

#### 3.1 User-Experience Alignment

**Validate:**
- Do Experience DNA standards serve User DNA needs?
- Do quality thresholds match user expectations?
- Do UX patterns fit user context and constraints?
- Are accessibility standards appropriate for user segments?

**Coherence Questions:**
1. "Do our quality standards match what users need and expect?"
2. "Are performance thresholds set based on user context (mobile, offline, etc.)?"
3. "Do UX patterns respect user constraints and capabilities?"
4. "Are we over-engineering or under-delivering on quality?"

**Scoring:**
- 5 = Experience perfectly tailored to user needs
- 4 = Strong fit with minor gaps
- 3 = Moderate fit, some standards miss user context
- 2 = Weak fit, standards disconnected from users
- 1 = Misaligned (quality standards don't serve users)

**Document findings:**
- Alignment Score: [1-5]
- Evidence: [Examples of user-experience fit or misfit]
- Conflicts: [Standards that don't match user needs]
- Recommendations: [Adjustments needed]

#### 3.2 User Constraints Check

**Validate:**
- Do Experience standards respect user constraints?
  - Offline capability if users work offline
  - Mobile optimization if users are mobile
  - Low bandwidth if users have poor connectivity
  - Accessibility if users have disabilities

**Red Flags:**
- Experience DNA requires constant connectivity but User DNA works offline
- Performance thresholds assume high-end devices but users have budget phones
- Accessibility standards ignore user segment with disabilities

### 4. Purpose-Experience Coherence Validation

#### 4.1 Purpose-Experience Alignment

**Validate:**
- Do Experience standards support purpose achievement?
- Are quality gates aligned with north star metric?
- Do MQB gates protect purpose from erosion?
- Does user experience deliver on purpose promise?

**Coherence Questions:**
1. "If we meet all Experience DNA standards, will we achieve our purpose?"
2. "Do quality thresholds directly support the north star metric?"
3. "Are we measuring the right quality attributes for our purpose?"
4. "Could we meet experience standards but still fail at purpose?"

**Scoring:**
- 5 = Experience directly drives purpose achievement
- 4 = Strong support with minor gaps
- 3 = Moderate support, some experience aspects don't serve purpose
- 2 = Weak support, experience and purpose loosely connected
- 1 = Misaligned (great experience but doesn't serve purpose)

**Document findings:**
- Alignment Score: [1-5]
- Evidence: [How experience serves or fails to serve purpose]
- Gaps: [Experience areas not supporting purpose]

### 5. Architecture-Experience Coherence Validation

#### 5.1 Architecture-Experience Alignment

**Validate:**
- Does Architecture DNA enable Experience DNA standards?
- Can architecture deliver the performance thresholds?
- Does architecture support accessibility requirements?
- Are architecture choices justified by experience needs?

**Coherence Questions:**
1. "Can our architecture actually deliver the experience standards we've set?"
2. "Are architecture decisions driven by experience requirements?"
3. "Does architecture enable or constrain the user experience?"
4. "Are there experience promises the architecture can't support?"

**Scoring:**
- 5 = Architecture perfectly enables experience
- 4 = Strong enablement with minor limitations
- 3 = Moderate support, some experience standards challenging architecturally
- 2 = Weak support, architecture blocks some experience goals
- 1 = Misaligned (architecture can't deliver experience promises)

**Document findings:**
- Alignment Score: [1-5]
- Evidence: [How architecture enables or blocks experience]
- Conflicts: [Experience standards architecture can't support]
- Technical Debt: [Architecture improvements needed for experience]

### 6. Architecture-User Coherence Validation

#### 6.1 Architecture-User Alignment

**Validate:**
- Does architecture respect user constraints?
  - Offline-first if users work offline
  - Mobile-optimized if users are mobile
  - Low latency if users need instant response
- Do technology choices fit user environment?
- Does architecture serve user needs (not just technical elegance)?

**Coherence Questions:**
1. "Are architecture decisions driven by user needs or technical preferences?"
2. "Does architecture respect user context (offline, mobile, low-bandwidth)?"
3. "Would users benefit from our architectural choices?"
4. "Are there architectural decisions that harm user experience?"

**Scoring:**
- 5 = Architecture designed around user needs
- 4 = Strong user focus with some technical considerations
- 3 = Moderate balance between user needs and technical preferences
- 2 = Architecture prioritizes technical elegance over user needs
- 1 = Misaligned (architecture ignores user constraints)

**Document findings:**
- Alignment Score: [1-5]
- Evidence: [Architecture decisions serving or ignoring users]
- Conflicts: [Architectural choices conflicting with user constraints]

### 7. Intelligence DNA Cross-Validation

#### 7.1 Intelligence-Purpose Alignment

**Validate:**
- Is the north star metric from Purpose DNA being tracked?
- Do Intelligence DNA metrics measure purpose achievement?
- Are we instrumenting what matters for purpose?

**Coherence Questions:**
1. "Can we measure whether we're achieving our purpose?"
2. "Do our metrics track north star progress?"
3. "Are we tracking vanity metrics or meaningful purpose indicators?"

**Scoring:**
- 5 = Metrics perfectly measure purpose achievement
- 3 = Some purpose measurement, gaps exist
- 1 = Metrics disconnected from purpose

#### 7.2 Intelligence-User Alignment

**Validate:**
- Are we tracking user behavior and satisfaction?
- Do metrics cover all key user segments?
- Can we measure success of user JTBDs?

**Coherence Questions:**
1. "Can we tell if users are successful with our product?"
2. "Are we measuring what users care about?"

**Scoring:**
- 5 = User success fully measurable
- 3 = Partial user measurement
- 1 = No user-focused metrics

#### 7.3 Intelligence-Experience Alignment

**Validate:**
- Are Experience DNA thresholds being tracked?
- Can we monitor performance, accessibility, quality?
- Are MQB gates measurable?

**Scoring:**
- 5 = All experience standards measurable
- 3 = Partial measurement
- 1 = Standards not measurable

### 8. Cultural DNA Cross-Validation

#### 8.1 Cultural-Purpose Alignment

**Validate:**
- Do cultural values reinforce purpose?
- Do team rituals support purpose focus?
- Do decision-making practices align with purpose?

**Coherence Questions:**
1. "Does team culture support purpose achievement?"
2. "Do we celebrate behaviors that serve purpose?"
3. "Do cultural practices prevent purpose drift?"

**Scoring:**
- 5 = Culture strongly reinforces purpose
- 3 = Some cultural support for purpose
- 1 = Culture works against purpose

#### 8.2 Cultural-Experience Alignment

**Validate:**
- Does culture value quality (MQB compliance)?
- Are team rituals supporting quality standards?
- Is "saying no to low quality" celebrated?

**Scoring:**
- 5 = Quality culture deeply embedded
- 3 = Some quality culture, inconsistent
- 1 = Quality not valued culturally

### 9. Calculate Overall Coherence Score

#### 9.1 Score Each DNA Pair

**DNA Pair Coherence Scores:**
1. Purpose ↔ User: [1-5]
2. User ↔ Experience: [1-5]
3. Purpose ↔ Experience: [1-5]
4. Architecture ↔ Experience: [1-5]
5. Architecture ↔ User: [1-5]
6. Intelligence ↔ Purpose: [1-5]
7. Intelligence ↔ User: [1-5]
8. Intelligence ↔ Experience: [1-5]
9. Cultural ↔ Purpose: [1-5]
10. Cultural ↔ Experience: [1-5]

#### 9.2 Calculate Overall Score

**Overall Coherence Score:**
- Average of all pair scores
- Round to one decimal place

**Score: [X.X / 5.0]**

**Coherence Level:**
- 4.5-5.0 = Exceptional (DNAs work seamlessly together)
- 4.0-4.4 = Strong (well-aligned, minor improvements possible)
- 3.0-3.9 = Moderate (functional but needs attention)
- 2.0-2.9 = Weak (significant conflicts, requires remediation)
- 1.0-1.9 = Critical (DNAs contradicting each other, urgent fixes needed)

### 10. Identify Conflicts and Gaps

#### 10.1 Critical Conflicts

**Identify contradictions:**
- Purpose promises X, but User DNA targets users who need Y
- Experience DNA requires Z, but Architecture DNA can't deliver Z
- Cultural DNA values A, but Purpose DNA requires B

**For each conflict:**
- Conflict: [Description]
- Impact: [How this harms coherence]
- Resolution: [How to fix]
- Priority: [High / Medium / Low]

#### 10.2 Gaps

**Identify missing elements:**
- Purpose defined but not measured (Intelligence gap)
- User needs identified but experience standards missing
- Architecture exists but doesn't serve user constraints

### 11. Generate Coherence Report

#### 11.1 Report Structure

Using template `genome-coherence-report-tmpl.yaml`, create report:

```markdown
# Product Genome Coherence Report

**Date:** [Date]
**Validator:** [Name]
**Genome Version:** [Version if tracked]

## Executive Summary

[2-3 paragraphs: overall coherence state, critical issues, top recommendations]

## Overall Coherence Score: [X.X / 5.0] - [Coherence Level]

## DNA Pair Scores

| DNA Pair | Score | Status | Key Issues |
|----------|-------|--------|------------|
| Purpose ↔ User | [X.X] | [Strong/Moderate/Weak] | [Issues] |
| User ↔ Experience | [X.X] | [Strong/Moderate/Weak] | [Issues] |
| ... | ... | ... | ... |

## Critical Conflicts

### Conflict 1: [Title]
- **DNAs Involved:** [X and Y]
- **Description:** [What contradicts]
- **Impact:** [How this harms product]
- **Resolution:** [How to fix]
- **Priority:** High

[Repeat for all critical conflicts]

## Gaps and Missing Elements

[List gaps between DNAs]

## Strengths (What's Working Well)

[Highlight strong coherence areas]

## Recommendations

### High Priority (Address Immediately)
1. [Specific action with expected impact]
2. [...]

### Medium Priority (Address Soon)
1. [...]

### Ongoing Coherence Practices
1. [How to maintain coherence going forward]

## Next Steps

1. [Immediate action]
2. [Schedule for next coherence validation]
3. [DNA updates needed]
```

### 12. Present Results and Remediation Plan

#### 12.1 Share Report

- Save report to: `docs/genome-coherence-report-[date].md`
- Share with product team and stakeholders
- Present in team meeting

#### 12.2 Create Remediation Plan

For each critical conflict:
- Create action item
- Assign owner
- Set deadline
- Define success criteria

### 13. Schedule Ongoing Coherence Validation

**Recommend:**
- Quarterly coherence validation (every 3 months)
- After any major DNA update
- Before major product decisions
- When genome feels "off" or contradictory

---

## Task Completion

- Status: [Complete]
- Overall Coherence Score: [X.X / 5.0]
- Coherence Level: [Exceptional / Strong / Moderate / Weak / Critical]
- Critical Conflicts: [Count]
- Report Location: [File path]
- Next Validation: [Scheduled date]
