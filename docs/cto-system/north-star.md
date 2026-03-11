# North Star

## Goal

Create a company that can reach revenue quickly without engineering fragmentation.

## What Engineering Is Responsible For

- Shortening time from idea to deployed customer value
- Protecting the core user journey from failure
- Producing enough instrumentation to learn what converts
- Keeping complexity low enough that a small team can move fast

## What Engineering Is Not Responsible For

- Building speculative platforms
- Supporting multiple future business models at once
- Gold-plating internal tools before customer demand exists
- Solving edge cases that do not affect active revenue

## Current Technical Strategy

Build the business as four layers only:

1. Demand capture
2. Core product workflow
3. Payments and revenue operations
4. Feedback and analytics

Everything else is secondary.

## Approval Standard

Work is approved only if it does one of these:

- Increases qualified traffic
- Improves activation or conversion
- Reduces churn or support cost
- Improves delivery speed for paying customers
- Fixes a reliability problem affecting trust or sales

## Kill Standard

Stop or pause work when:

- The metric is undefined
- The customer is undefined
- A simpler manual workaround exists
- The project needs platform abstractions before proving demand
- It will take more than 2 weeks to learn whether it matters
