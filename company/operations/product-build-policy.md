# Product Build Policy

Last updated: 2026-03-10
Owner: CTO

## Purpose

Stop the company from drifting from service revenue into premature product building.

## Default Rule

The company is a services business until evidence says otherwise.

Evidence means:
- customers already pay for a repeated outcome
- the same problem appears across multiple buyers
- delivery contains a repeated manual step worth standardizing

Without that evidence, do not build a product.

## What Counts As A Product Bet

Treat any of these as a product bet:
- standalone software not required for current delivery
- reusable tool intended for future customers
- internal platform that assumes future team scale
- automation with setup and maintenance cost beyond the current offer flow

Product bets require a higher bar than service delivery improvements.

## Product Bet Gate

All five must be true:

| Question | Required answer |
|------|------|
| Have at least 3 customers paid for the same outcome or pain? | Yes |
| Is there a repeated manual step consuming at least 3 hours per week? | Yes |
| Can a paid service still sell if the product bet is delayed? | Yes |
| Can the first version ship inside 5 working days? | Yes |
| Is there a direct path to charge for it within 30 days? | Yes |

If any answer is no, keep selling services and improve templates instead.

## Approved Product-Like Work Right Now

The following are allowed because they directly support current revenue:
- better offer pages
- order and quote pages
- scope calculators in markdown or static HTML
- delivery kits and prompt packs
- proof-asset packaging

These are not product bets. They are revenue infrastructure.

## Rejection Cases

Reject immediately if the idea depends on:
- future traffic that does not exist yet
- self-serve demand before live sales are working
- a free tool to attract users without a conversion path
- complex architecture because it might be useful later

## Escalation Rule

If the company reaches:
- 5 paid orders in one offer category, and
- the same delivery step remains painful after templating

then open a new engineering request and re-evaluate whether a narrow product or tool is justified.
