# MSCommerce PowerShell Overview

The **MSCommerce** PowerShell module is now available on [PowerShell Gallery](https://aka.ms/allowselfservicepurchase-powershell-gallery). The module includes a **PolicyID** parameter value for **AllowSelfServicePurchase** that lets you control whether users in your organization can make self-service purchases.

You can use the **MSCommerce** PowerShell module to:

- View the default state of the **AllowSelfServicePurchase** parameter value—whether it's enabled, disabled, or allows trials without a payment method
- View a list of applicable products and whether self-service purchase is enabled, disabled, or allows trials without a payment method
- View or modify the current setting for a specific product to either enable or disable it
- View or modify the setting for trials without payment methods

## Requirements

To use the **MSCommerce** PowerShell module, you need:

- A Windows 10 or later operating system.
- PowerShell 5 or below. Currently, PowerShell 6.x/7.x isn't supported with this module.
- The Global or Billing admin role for your tenant to change the **MSCommerce** product policies.
- The Global reader role for your tenant to see a read-only list of **MSCommerce** product policies.

## Install the MSCommerce PowerShell module

You install the **MSCommerce** PowerShell module on your Windows 10 device once and then import it into each PowerShell session you start. Download the **MSCommerce** PowerShell module from the [PowerShell Gallery](https://aka.ms/allowselfservicepurchase-powershell-gallery).

To install the **MSCommerce** PowerShell module with **PowerShellGet**, run the following command:

```powershell
Install-Module -Name MSCommerce
```

## Related content

[Manage self-service purchases (Admin)](/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins.md) (article)\
[Self-service purchase FAQ](/microsoft-365/commerce/subscriptions/self-service-purchase-faq.yml) (article)
