# Decision Rules

Use these rules to decide what gets built.

## A Task Is Allowed If

- It helps win a live deal.
- It materially improves activation for new users.
- It fixes a retention or reliability issue affecting paying users.
- It replaces a manual process that already happens at least 3 times per week.
- It reduces a real cost line in a measurable way.

## A Task Is Blocked If

- It is a rewrite without customer demand.
- It introduces a platform, framework, or abstraction before the second use case.
- It optimizes a workflow that is not yet a bottleneck.
- It is justified mainly by taste, polish, or future flexibility.
- It requires more than 2 weeks before producing customer-visible learning.

## Build vs Manual vs Buy

Default order:

1. Manual
2. Buy
3. Build

Choose manual when:

- Volume is low.
- The workflow is still changing.
- The main goal is learning.

Choose buy when:

- The problem is standard.
- Integration is faster than custom development.
- The vendor does not create lock-in risk that outweighs speed.

Choose build when:

- The workflow is core to differentiation or margin.
- The team already understands the shape of the problem.
- There is repeated volume.
- A bought solution would constrain sales or delivery.

## Architecture Guardrails

- Prefer modular monolith over distributed systems until scale proves otherwise.
- Prefer boring technology over exciting technology.
- Prefer explicit duplication over premature shared abstractions.
- Prefer synchronous simple flows over async complexity unless latency or throughput require otherwise.
- Prefer operational visibility before scaling work.

## Kill Criteria

Stop an initiative if any of these are true:

- No measurable movement after the agreed test window.
- A manual workaround is good enough for the current revenue stage.
- New customer evidence changes the problem statement.
- The effort expands beyond the original one-pager without executive re-approval.
