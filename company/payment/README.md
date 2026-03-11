# Company Payment Methods

Last updated: 2026-03-10
Owner: CEO

## Payment QR Codes

### WeChat Pay (微信支付)

![WeChat Pay QR Code](./wechat-pay.jpg)

Scan to pay via WeChat.

### Alipay (支付宝)

![Alipay QR Code](./alipay.jpg)

Scan to pay via Alipay.

## Usage in Payment Requests

When sending payment requests to customers, include the appropriate QR code image along with the payment template from `company/operations/payment-runbook.md`.

### Payment Request Template

```md
Hi [Name],

To start your order, please complete payment using one of the methods below.

Offer: [offer name]
Price: CNY [amount]
Payment required now: CNY [deposit/full amount]

Payment methods:
- WeChat Pay: scan QR code below
- Alipay: scan QR code below

[Include QR code image]

After payment, please send:
- screenshot or payment reference

Once confirmed, work starts immediately and the delivery clock begins.
```

## File Locations

- WeChat Pay QR: `company/payment/wechat-pay.jpg`
- Alipay QR: `company/payment/alipay.jpg`

## Security Notes

- Never share these QR codes publicly on the website
- Only send QR codes directly to customers with active orders
- Always confirm payment receipt before starting work
