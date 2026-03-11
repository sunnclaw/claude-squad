# Architecture Principles

Use these rules for technical decisions.

## System Design

- start as a modular monolith
- use synchronous flows first unless latency or retries prove async is needed
- centralize business rules in application code, not scattered automation
- prefer explicit APIs over hidden coupling
- make the happy path easy to observe

## Data

- one source of truth per domain
- one transactional database before introducing replicas or specialty stores
- schema changes must be reversible or paired with a rollback plan
- record customer and billing events as first-class data

## Reliability

- define service levels only for customer-critical paths
- alert on user impact, not infrastructure trivia
- write runbooks only for failures that have already happened or are high-risk
- do not build elaborate internal platforms to solve rare incidents

## Security

- use managed auth, secret storage, and backup defaults
- limit privileged access by role
- log admin and billing actions
- patch externally exposed systems first

## Delivery

- trunk-based development by default
- small PRs merged daily
- feature flags for risky launches
- migrations and deploys must be automatable before scale requires it

## Anti-Patterns

- microservices before team boundaries exist
- event-driven rewrites without clear throughput needs
- custom observability stacks before managed tooling is exhausted
- internal developer platforms for teams too small to justify them
