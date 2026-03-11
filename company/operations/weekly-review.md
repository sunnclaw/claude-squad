# Weekly Review

Last updated: 2026-03-10
Owner: CTO

## Purpose

Use one short weekly review to keep the company focused on the current bottleneck.

This is not a retrospective on everything. It is a decision tool.

## Cadence

- Monday morning: choose one engineering priority, one sales priority, and one delivery improvement
- Friday afternoon: review results and keep, expand, or kill changes

Use these files during the review:
- `company/technical-system.md`
- `company/dashboard.md`
- `company/operations/engineering-backlog.md`
- `company/operations/engineering-intake-gate.md`
- `company/operations/engineering-scorecard.md`

## Monday Review Template

```md
# Monday Review

Week of:

Revenue scoreboard:
- qualified leads:
- quotes sent:
- paid orders:
- revenue:

Current bottleneck:

Single engineering priority:
- item:
- owner:
- metric:
- ship date:
- backlog ID:
- scorecard updated: yes / no

Single sales priority:
- item:
- metric:

Single delivery improvement priority:
- item:
- metric:

What gets cut or deferred this week:
- 
```

## Friday Review Template

```md
# Friday Review

Week of:

Results:
- qualified leads:
- quotes sent:
- paid orders:
- revenue:
- delivery cycle time:

What shipped:
- 

What changed in the funnel:
- 

Did the engineering priority move a real metric?
- yes / no
- evidence:

Did the build stay inside the technical budget?
- yes / no
- if no, what gets removed:

Keep / Expand / Kill:

Next week's likely bottleneck:

One thing to cut:
- 
```

## Decision Rules

- if the engineering priority did not improve a real metric in 7 days, kill or reduce it
- if the engineering item is still too large after 7 days, rewrite it to fit a 1-day ship
- if customers created surprise work, improve the checklist before adding features
- if sales activity is weak, stop internal optimization and return to outreach and follow-up
- if delivery is late, narrow scope before adding process
- if a deferred item becomes tempting, ask whether the current bottleneck actually changed

## Anti-Patterns

Do not allow the weekly review to become:
- a long task list
- a strategy brainstorm
- a place to justify speculative builds
- a place to track more than one engineering priority
