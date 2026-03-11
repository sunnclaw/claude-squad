# CTO Operating System

This system exists to do three things:

1. Ship product improvements that move revenue quickly.
2. Keep engineering focused on the current bottleneck.
3. Block architecture and process bloat before it starts.

## Core Rules

1. Revenue beats elegance.
2. Speed beats optionality until demand proves otherwise.
3. Manual first, automation second, platform last.
4. One roadmap, one bottleneck, one owner.
5. Every project must tie to pipeline, conversion, retention, or delivery cost.
6. If a project cannot show business impact in 30-45 days, it is not a priority by default.

## Operating Cadence

### Weekly

- Monday: revenue review and priority reset.
- Tuesday-Friday: build only the top 1-2 active bets.
- Friday: release review, learnings, backlog cuts.

### Monthly

- Re-rank all work by revenue impact, confidence, and time-to-value.
- Delete or pause low-signal projects.
- Review where manual work is painful enough to justify software.

## What Engineering Works On

Engineering work must fit one of these buckets:

- `Acquire`: traffic, lead capture, onboarding, activation.
- `Convert`: pricing, checkout, sales workflows, objections, proof.
- `Retain`: product usage, reliability, support leverage, churn reduction.
- `Expand`: upsells, add-ons, usage expansion, referrals.
- `Efficiency`: only if it materially increases delivery speed or reduces support burden.

If work does not fit one of these buckets, it waits.

## Default Technical Strategy

- Start with a single product codebase.
- Start with a single relational database.
- Prefer one deploy target.
- Prefer server-rendered or simple SPA patterns already used by the team.
- Prefer boring vendor services for auth, billing, email, analytics, file storage, and queueing.
- Avoid microservices, event buses, custom infrastructure, and internal platforms until metrics force them.

See [decision-rules.md](/E:/开发区域/一人公司/ops/cto-system/decision-rules.md) and [architecture.md](/E:/开发区域/一人公司/ops/cto-system/architecture.md).

## Required Artifacts Before Build Starts

Every non-trivial project needs:

- [PRD Lite](/E:/开发区域/一人公司/ops/cto-system/templates/prd-lite.md)
- [Engineering Brief](/E:/开发区域/一人公司/ops/cto-system/templates/engineering-brief.md)
- [Experiment Scorecard](/E:/开发区域/一人公司/ops/cto-system/templates/experiment-scorecard.md)
- [Roadmap Scorecard](/E:/开发区域/一人公司/ops/cto-system/templates/roadmap-scorecard.md)

If a project is too small for these, it should likely be done in one day or not done at all.

## Success Metrics

Track only the few numbers that matter:

- New qualified leads per week
- Activation rate
- Trial-to-paid or demo-to-close conversion
- Net revenue retention or repeat purchase rate
- Time from idea to production
- Support hours per customer
- Uptime on revenue-critical flows

## Adoption

1. Put all upcoming work through the templates in `templates/`.
2. Kill anything that does not have a measurable commercial outcome.
3. Keep only 1 strategic initiative and 1 maintenance initiative active at a time.
4. Review architecture exceptions against [decision-rules.md](/E:/开发区域/一人公司/ops/cto-system/decision-rules.md).
