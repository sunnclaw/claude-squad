# Minimal Architecture Blueprint

## Goal

Support fast customer delivery with low operational overhead and clean upgrade paths.

## Recommended Shape

```text
Web App (Next.js)
  |- Marketing pages
  |- Authenticated product UI
  |- API routes / BFF
  |
  +--> Postgres
  +--> Stripe
  +--> PostHog
  +--> Sentry
  +--> Email provider
  +--> Object storage
  +--> Background jobs / cron
```

## Core Domains

Keep the initial schema and code boundaries narrow:

- `accounts`: users, organizations, roles
- `billing`: plans, subscriptions, invoices, entitlement flags
- `product`: the smallest domain entities that deliver user value
- `events`: key lifecycle and funnel events only
- `ops`: support notes, audit trail, manual override actions

## Service Design Rules

- Start as a modular monolith.
- Split services only when scaling, team ownership, or isolation pressure is real.
- Route all browser-to-data access through a controlled backend layer.
- Keep domain logic outside UI components.

## Required User Journeys

These journeys must be reliable before expanding scope:

1. Visitor lands on page and understands value proposition
2. Visitor signs up or books a demo
3. User reaches first value quickly
4. User upgrades or starts paying
5. Team can observe failures and intervene

## Data Model Rules

- Use UUIDs for public identifiers.
- Add `created_at` and `updated_at` everywhere.
- Add soft delete only where recovery matters.
- Model permissions simply: owner, admin, member unless proven insufficient.
- Avoid generic JSON blobs when a stable field is known.

## Event Tracking

Track only critical events first:

- `landing_page_viewed`
- `signup_started`
- `signup_completed`
- `onboarding_started`
- `first_value_reached`
- `subscription_started`
- `payment_failed`
- `subscription_canceled`
- `support_request_created`

Each event should include:

- `user_id` if known
- `account_id` if known
- `source`
- `plan`
- `timestamp`

## Non-Functional Standards

- Uptime target: good enough for current contracts, not enterprise-grade by default
- Recovery: daily backups and verified restore path
- Security: least privilege, managed secrets, audit logs on admin actions
- Performance: optimize only the core funnel pages and actions first

## Operational Tooling

- PostHog for product analytics
- Sentry for exceptions and performance traces
- Stripe dashboard for billing operations
- CRM for pipeline and customer status
- Shared dashboard for weekly funnel review

## Deployment Rules

- Main branch deploys automatically
- Preview deployments for major user-facing changes
- Simple rollback path documented
- One environment per stage at most: production and staging

## Automation Candidates

Automate only after manual proof:

- Lead routing to CRM
- Trial expiry reminders
- Failed payment recovery emails
- Onboarding nudges
- Weekly metrics summary

## Exit Criteria For Re-Architecture

Revisit architecture only if one is true:

- Release speed is slowing because of codebase coupling
- Reliability issues affect paying customers repeatedly
- Infrastructure costs are materially high relative to revenue
- Compliance or enterprise requirements force structural change
