# Technical Principles

## Build Strategy

- Keep the product in a modular monolith by default.
- Add services only when scaling, isolation, or ownership pain is demonstrated.
- Favor managed services for non-differentiating capabilities.

## Delivery Strategy

- Ship thin slices.
- Instrument the core user journey before adding peripheral analytics.
- Optimize onboarding, reliability, and payment flows before new surface area.

## Complexity Controls

- New abstraction requires a current repeated need.
- New dependency requires a clear time-saving or capability gain.
- New internal tool requires proof of repeated manual pain.
- New infra component requires a failure mode the current system cannot handle.

## Reliability Strategy

- Protect the revenue path first.
- Define alerts only for conditions that require action.
- Write runbooks for recurring incidents before building automation.

## Data Strategy

- Keep customer, billing, and product usage data linkable.
- Record the key events behind activation and payment.
- Avoid fragmented sources of truth.
