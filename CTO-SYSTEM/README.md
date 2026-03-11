# CTO System

This system exists to do three things:

1. Ship product changes that can move revenue in weeks, not quarters.
2. Keep engineering focused on a single bottleneck at a time.
3. Prevent platform work that is not justified by actual usage or sales pressure.

## Operating Principles

- Revenue first: every engineering initiative must tie to acquisition, activation, conversion, retention, or expansion.
- One bottleneck: the team works on the highest-leverage constraint, not a balanced backlog.
- Manual before automated: use ops and support labor before building software for edge cases.
- Single product path: one primary customer, one core workflow, one monetization path until traction is clear.
- Defaults over flexibility: avoid configurability unless a closed deal or repeated churn risk requires it.
- Buy before build: prefer managed services for auth, billing, analytics, email, storage, search, and queues.
- Instrument before scaling: fix measurement gaps before adding architecture.
- Keep the system legible: small services, boring stacks, explicit ownership, and written decisions.

## What To Build

The company technical system is split into four layers.

### 1. Revenue Layer

This is the product surface closest to money.

- Landing pages and pricing
- Signup and onboarding
- Core product workflow
- Billing and subscription management
- CRM and lead capture
- Product analytics and funnel reporting

Rule: if this layer is weak, platform work stops.

### 2. Feedback Layer

This shortens time from user behavior to engineering action.

- Event tracking for funnel steps
- Session replay or user interview capture
- Error tracking
- Support inbox tagging
- Weekly KPI review

Rule: every major feature must produce observable signals within seven days of release.

### 3. Delivery Layer

This keeps shipping stable without becoming an internal platform.

- Single application repo unless scale forces separation
- CI for tests, lint, build, and preview deploys
- Staging optional; production plus preview environments are often enough early
- Feature flags for risky launches
- Daily deploys preferred

Rule: optimize for change velocity and rollback speed, not theoretical future scale.

### 4. Control Layer

This is the management system for engineering decisions.

- Quarterly business target
- Current bottleneck
- Now / next / later roadmap
- ADRs for irreversible or costly decisions
- Kill criteria for experiments and features

Rule: if work cannot be explained in one paragraph with a revenue link, it does not start.

## Default Reference Architecture

Use this unless a real constraint proves it wrong.

- Frontend: single web app
- Backend: modular monolith
- Database: Postgres
- Auth: managed auth provider
- Billing: Stripe
- File storage: managed object storage
- Email: managed transactional provider
- Analytics: product analytics plus error tracking
- Background work: one queue system
- Infra: single cloud provider with managed database and app hosting

Avoid early adoption of:

- Microservices
- Kubernetes
- Event-driven architectures spanning many services
- Multi-region infrastructure
- Custom workflow engines
- Internal developer platforms

## Team Cadence

### Weekly

- Review funnel metrics
- Review top lost deals and churn reasons
- Pick one engineering bottleneck for the week
- Ship customer-visible improvement

### Monthly

- Audit system complexity
- Delete stale experiments, flags, and dead code paths
- Re-rank roadmap by revenue impact

### Quarterly

- Set one company target tied to revenue
- Define top three technical bets only
- Freeze non-essential refactors

## Prioritization Standard

Use this score for all work:

Priority = Revenue Impact x Time-to-Learn x Confidence / Effort

Definitions:

- Revenue Impact: likely effect on pipeline, conversion, retention, or expansion
- Time-to-Learn: how quickly the work produces a decision-grade signal
- Confidence: evidence from users, data, or deals
- Effort: engineering weeks plus hidden operational cost

Anything with low learning speed should be treated skeptically even if it sounds strategic.

## Engineering Guardrails

- No project longer than two weeks without a production checkpoint
- No refactor without a named business benefit
- No infra migration during active go-to-market uncertainty unless reliability is blocking sales
- No new service unless it removes a measured bottleneck
- No feature request from one prospect unless it helps the target segment or closes a concrete deal
- No performance work before measurement, except for obvious outages

## Definition Of Done

Work is only done when:

- It is in production or available to real users
- It is instrumented
- It has an owner
- Success and kill criteria are written
- Follow-up debt is captured explicitly

## First 30 Days

1. Instrument the full funnel.
2. Make signup, activation, and payment work reliably.
3. Reduce time from customer feedback to shipped change.
4. Remove speculative roadmap items.
5. Create a weekly operating review with product, sales, and engineering in one loop.

Start with the current bottleneck. Do not start with architecture cleanup.
