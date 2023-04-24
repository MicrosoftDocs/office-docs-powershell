# HandleError : Failed to retrieve policy with PolicyId 'AllowSelfServicePurchase'

## Problem

You see the following error message:

> HandleError : Failed to retrieve policy with PolicyId 'AllowSelfServicePurchase', ErrorMessage - The underlying connection was closed: An unexpected error occurred on a send.

This may be due to an older version of Transport Layer Security (TLS). When you connect to this service, you must use TLS 1.2 or greater

## Solution

Upgrade to TLS 1.2. The following syntax updates the ServicePointManager Security Protocol to allow TLS1.2:

```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
```

To learn more, see [How to enable TLS 1.2](/mem/configmgr/core/plan-design/security/enable-tls-1-2).
