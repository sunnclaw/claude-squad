# Technical Principles

These rules keep the system fast to build, cheap to maintain, and hard to overengineer.

## 1. One Default Stack

Use one primary stack for the core product unless revenue forces a change.

- one frontend path
- one backend path
- one database
- one deployment model

Extra stacks create drag before they create advantage.

## 2. Favor Boring Technology

Choose tools with:

- good docs
- predictable hosting
- simple hiring surface
- low operational complexity

Do not optimize for novelty.

## 3. Monolith First

Default to a modular monolith before microservices, event buses, or internal platforms.

Split services only when:

- scale demands it,
- security boundaries require it, or
- team topology makes it unavoidable.

## 4. Narrow Interfaces

Do not create generic plugin systems, adapters, or domain frameworks until there are at least two real use cases.

The second real use case earns the abstraction.

## 5. Ship Internal Tools Last

Use scripts, SQL, dashboards, and documented manual steps before building internal UIs.

Internal products usually look cheap and safe but consume product capacity.

## 6. Instrument What You Sell

Track the path from:

- lead or signup
- to activation
- to value moment
- to retained usage

If a feature cannot be measured in that chain, question why it exists.

## 7. Reliability Is Selective

Invest heavily in reliability where it affects customer trust, onboarding, billing, and delivery commitments.

Do not build production-grade ceremony around low-value experiments.

## 8. Cleanup Has To Earn Time

Refactoring is allowed when it:

- speeds up the next revenue-critical change,
- removes repeated defects, or
- reduces serious operational risk.

Refactoring is not a side quest.
