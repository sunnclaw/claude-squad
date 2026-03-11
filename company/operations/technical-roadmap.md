# Technical Roadmap

Last updated: 2026-03-10
Owner: CTO
Purpose: define when the company is allowed to move from manual workflows to scripts to software

## Rule

This roadmap is a stage gate, not a wishlist.

Do not build from a later stage until the current stage trigger is already true in real operating data.

## Stage 0: Manual Traction

Window:
- 0 to 2 paid orders total

Primary goal:
- prove that offers close and can be fulfilled repeatedly

Allowed:
- static page improvements
- markdown dashboard and trackers
- offer packs
- delivery kits
- local scripts with no hosting or monitoring
- manual payment collection

Not allowed:
- backend services
- custom CRM
- payment integration
- user accounts
- workflow automation that depends on webhooks or monitoring

Exit trigger:
- 2 paid orders completed, and
- quote and payment flow runs without confusion for 7 days, and
- at least 1 proof asset has been captured

## Stage 1: Service Acceleration

Window:
- after 2 paid orders

Primary goal:
- remove the repeated friction that slows quoting, payment follow-up, or delivery setup

Allowed:
- local quoting helpers
- local reminder helpers
- static intake improvements
- narrow reporting aids
- reusable delivery accelerators

Still not allowed:
- multi-user systems
- databases as default storage
- speculative product builds
- hosted backends unless a live revenue blocker requires one

Exit trigger:
- 5 paid orders in one offer category, and
- the same manual step still consumes 3+ hours per week after templating, and
- there is a direct path to charge more or deliver materially faster

## Stage 2: Narrow Tooling

Window:
- after repeated demand exists in one offer category

Primary goal:
- build one narrow tool that directly improves a proven offer line

Allowed:
- a small hosted tool or internal workflow service
- lightweight storage if it removes repeated manual work
- one product-like experiment tied to a paid offer

Required proof before build:
- exact repeated workflow identified
- one owner
- one metric
- 5-day maximum for the first version
- 30-day path to either more revenue or lower delivery time

Still disallowed:
- broad platforms
- generalized operating systems
- anything that needs a support burden larger than the current revenue can fund

## Upgrade Questions

Before moving to the next stage, answer yes to all of these:
- has the current stage already produced paid revenue?
- is the repeated pain visible in the dashboard?
- did templates and checklists fail to solve it well enough?
- can the next-stage build be maintained in under 30 minutes per week?
- is there a clear reason this will improve revenue or delivery in 30 days?

If any answer is no, stay in the current stage.

## Current Position

Current stage: Stage 0 - Manual traction

Current approved focus:
- quote and payment flow
- standard quote packs
- delivery kit hardening
- proof-asset capture

Current forbidden distractions:
- productizing AI agent setup
- backend architecture
- internal dashboards beyond markdown command and control
