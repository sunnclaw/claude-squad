# CTO System

This is the technical operating system for a small company optimizing for early revenue.

It exists to do three things:

1. Ship customer value fast.
2. Keep engineering focused on the current bottleneck.
3. Prevent platform work that is not yet justified.

## Use This In Order

1. Read `north-star.md`.
2. Use `prioritization.md` before approving any project.
3. Build new work using `system-architecture.md`.
4. Run weekly execution from `delivery-cadence.md`.
5. Record major decisions in `templates/adr-template.md`.

## Default Rules

- One product surface, one primary customer, one revenue path at a time.
- Prefer manual operations over premature automation until pain is repeated.
- Build only what directly improves acquisition, activation, conversion, retention, or delivery margin.
- Every project must have an owner, a target metric, and a kill condition.
- No infrastructure project is approved without a clear bottleneck tied to revenue or reliability.

## Deliverables In This Folder

- `north-star.md`: company-level engineering strategy
- `system-architecture.md`: minimum viable business system
- `prioritization.md`: project approval filter
- `delivery-cadence.md`: weekly execution model
- `metrics-scoreboard.md`: operating metrics
- `templates/`: reusable templates for PRDs, ADRs, and weekly reviews
