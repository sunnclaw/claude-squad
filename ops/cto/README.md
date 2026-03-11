# CTO Operating System

This system exists to do three things:

1. Ship work that pulls revenue forward.
2. Keep engineering focused on the current constraint.
3. Prevent platform work, abstraction, and roadmap sprawl before they earn the right to exist.

## Core Rules

1. Every engineering initiative must map to one of these outcomes:
   - close revenue faster
   - improve activation
   - improve retention
   - reduce delivery cost for current revenue work
2. If a task does not change one of those outcomes within 30 days, it is probably not a priority.
3. Prefer manual operations plus lightweight tooling before building internal platforms.
4. No "infrastructure improvement" work without a named bottleneck, owner, and before/after metric.
5. One active company-level bet at a time. Everything else supports it or waits.

## Operating Cadence

Use these files every week:

- [Scorecard](E:\开发区域\一人公司\ops\cto\scorecard.md): track the few numbers that matter.
- [Roadmap](E:\开发区域\一人公司\ops\cto\roadmap.md): maintain `Now`, `Next`, `Later`.
- [Build Gates](E:\开发区域\一人公司\ops\cto\build-gates.md): apply before starting or expanding work.
- [Technical Principles](E:\开发区域\一人公司\ops\cto\technical-principles.md): keep the architecture narrow and boring until demand proves otherwise.
- [Weekly Review Template](E:\开发区域\一人公司\ops\cto\templates\weekly-review.md): run the weekly review.

Use these templates before new work starts:

- [Initiative Template](E:\开发区域\一人公司\ops\cto\templates\initiative.md)
- [Experiment Template](E:\开发区域\一人公司\ops\cto\templates\experiment.md)
- [Decision Template](E:\开发区域\一人公司\ops\cto\templates\decision.md)

## Workflow

1. Update the scorecard.
2. Identify the current business constraint.
3. Select one `Now` initiative that attacks it directly.
4. Break delivery into weekly slices that can ship independently.
5. Reject work that fails the build gates.
6. Review outcomes weekly and either double down, reshape, or stop.

## Current Constraint Prompt

Answer this in one sentence each week:

- What is the single biggest thing preventing revenue growth right now?
- What evidence proves that is the real bottleneck?
- What can engineering ship in 7 days that would most likely move it?

## Default Engineering Posture

- Build the thinnest version that can be sold or tested with customers.
- Hardcode before configuring.
- Use one integration before building adapter layers.
- Use one customer segment before building generalized workflows.
- Automate only after the manual path is painful and frequent.
- Delete or simplify before adding new systems.

## Exit Criteria For Work

Work is done when:

- customers can use it,
- the owner can measure whether it helped,
- the team knows what to do next,
- there is no obvious follow-up platform work disguised as cleanup.
