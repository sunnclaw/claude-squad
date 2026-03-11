# Code Review Delivery Kit

Last updated: 2026-03-10
Owner: CTO

## Purpose

Keep code review work focused on high-signal findings instead of broad commentary.

## Definition Of Ready

Do not start until these are clear:
- order ID
- repo, branch, commit, or file set
- review goal
- known risk areas
- language and framework context
- payment state
- deadline

## Start Checklist

- confirm the file or module scope is fixed
- identify what changed or what the client is worried about
- note whether fixes are included or findings only
- open the order row in the dashboard

## Review Checklist

- check correctness and likely regressions first
- check security and data-handling risks second
- check maintainability and performance only after real risks are covered
- separate must-fix findings from nice-to-have improvements
- capture exact file references for each material finding

## Report Checklist

- findings are ordered by severity
- each major finding explains impact, not just code style
- recommendations are concrete and bounded
- the report avoids filler, praise padding, and generic best practices
- summary states whether the code is safe to ship

## Delivery Package

Send:
- findings report
- optional fix recommendations or patch guidance if sold
- revision or follow-up clarification rule

## Internal Reuse Capture

After delivery, record at least one:
- recurring bug pattern
- reusable review prompt
- stronger scoping language for the offer pack
- anonymized finding that could become proof content
