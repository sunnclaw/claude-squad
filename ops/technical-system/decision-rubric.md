# Decision Rubric

Use this before adding infrastructure, abstractions, or major technical work.

Approve only if the answer is clear and evidence-based.

## Gate 1: Revenue

1. Which customer, segment, or pipeline motion does this unblock?
2. Is the impact expected inside 90 days?
3. What revenue risk exists if we do nothing?

If there is no credible 90-day impact, default to `no`.

## Gate 2: Simplicity

1. What is the simplest working version?
2. Can we solve this with configuration, scripting, or a manual process first?
3. Are we introducing a permanent maintenance surface?

If a simpler version exists, build that first.

## Gate 3: Evidence

1. What repeated pain proves this is real?
2. How many customers or internal workflows are affected today?
3. Which metric will improve?

If the pain is hypothetical, delay.

## Gate 4: Cost

1. Build time in engineer-days
2. Ongoing maintenance per month
3. Operational risk introduced
4. Lock-in or migration cost created

If maintenance exceeds the expected business gain, reject.

## Gate 5: Reversibility

1. Can we back this out safely?
2. Will this choice make future changes harder?
3. Are we coupling ourselves to a pattern we have not earned yet?

Prefer reversible decisions.

## Default Outcomes

- `Approve`: concrete 90-day business impact, simple implementation, low maintenance.
- `Approve Narrowly`: ship only the minimum scope with a review date.
- `Delay`: valid idea, weak urgency or weak evidence.
- `Reject`: architecture for imagined future complexity.
