# Payment Runbook

Last updated: 2026-03-10
Owner: CTO

## Purpose

Remove payment friction without building payment infrastructure too early.

## Rule

The company does not begin paid work without one of:
- full payment received
- deposit received and logged

## Standard Payment Policy

| Order type | Policy |
|------|------|
| Small standard order | 100% up front |
| Larger standard order | 50% deposit to start, 50% before final files |
| Custom order | 50% deposit minimum |

## Payment Checklist

Before sending a payment request:
- scope is written clearly
- price is confirmed
- turnaround is confirmed
- revision limit is written
- customer knows what happens after payment

## Payment Methods

We accept:
- **WeChat Pay (微信支付)** - QR code at `company/payment/wechat-pay.jpg`
- **Alipay (支付宝)** - QR code at `company/payment/alipay.jpg`

See `company/payment/README.md` for QR code images and usage instructions.

## Payment Request Template

```md
Hi [Name],

To start your order, please complete payment using one of the methods below.

Offer: [offer name]
Price: CNY [amount]
Payment required now: CNY [deposit/full amount]

Payment methods:
- WeChat Pay: scan QR code below
- Alipay: scan QR code below

[Attach QR code image from company/payment/]

After payment, please send:
- screenshot or payment reference

Once confirmed, work starts immediately and the delivery clock begins.
```

## What To Record In The Dashboard

For every payment:
- order ID
- amount
- payment method
- payment state
- confirmation date
- proof received yes/no

## Escalation Rules

If payment is not confirmed:
- after 24 hours: send a reminder
- after 48 hours: pause scheduling
- after 7 days: move the lead back to follow-up or close-lost

## Do Not Build Yet

Do not build or integrate:
- custom checkout
- backend payment handling
- invoice automation
- subscription billing

These are allowed only after repeated manual payment volume justifies them.
