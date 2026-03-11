# Architecture Decisions

Short ADR log. Record only decisions that materially affect speed, cost, or complexity.

## ADR-001: Default System Shape

- Date: 2026-03-11
- Status: Accepted
- Decision: Keep the product on a boring, revenue-first architecture: one core app, one primary database, managed infrastructure where possible, and no new services without operational evidence.
- Why: This minimizes engineering drag, speeds shipping, and reduces the risk of speculative platform work.
- Consequences:
  - The team optimizes for delivery speed, not theoretical scale.
  - Manual operations are acceptable before demand proves automation value.
  - Refactors need direct revenue or reliability justification.

## ADR Template

- Date:
- Status: Proposed | Accepted | Superseded
- Decision:
- Why:
- Consequences:
