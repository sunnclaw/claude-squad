# Build Filter

Use this before any project, feature, refactor, or tooling investment.

## Greenlight Questions

All answers must be concrete.

1. Which metric should move?
2. Which user or operator workflow gets better?
3. What is the smallest shippable version?
4. Can this be delivered in 1 week or less?
5. Can we test demand manually first?
6. What will we explicitly not build yet?
7. How will we know within 2 weeks if this worked?

## Scoring

Score each from 1 to 5.

- Revenue impact in next 90 days
- Speed to ship
- Confidence from existing evidence
- Reuse of existing systems
- Reduction of manual work

Subtract:

- Engineering complexity
- Ongoing maintenance burden
- Cross-system coordination cost

Default rule:

- ship if total is high and scope is small
- shrink if value is real but scope is large
- reject if evidence is weak and complexity is high

## Mandatory Kill Conditions

Stop or defer if:

- the work is mostly infrastructure for future possibility
- the proposal depends on unknown customer behavior
- analytics are missing for the target area
- there is no owner for the business result
- the first release requires edge-case completeness

## Release Shape

Every approved initiative must define:

- target user
- target metric
- launch cohort
- rollback method
- manual fallback
- review date
