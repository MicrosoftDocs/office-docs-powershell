# Get started with MSCommerce PowerShell

## Import MSCommerce into the PowerShell session

After you install the module on your Windows 10 device, you then import it into each PowerShell session that you start. To import it into a PowerShell session, run the following command:

```powershell
Import-Module -Name MSCommerce
```

## Connect to MSCommerce with your credentials

To connect to the PowerShell module with your credentials, run the following command.

```powershell
Connect-MSCommerce
```

This command connects the current PowerShell session to an Azure Active Directory tenant. The command prompts you for a username and password for the tenant you want to connect to. If multi-factor authentication is enabled for your credentials, you use the interactive option to sign in.

## View details for AllowSelfServicePurchase

To view a description of the **AllowSelfServicePurchase** parameter value and the default status, based on your organization, run the following command:

```powershell
Get-MSCommercePolicy -PolicyId AllowSelfServicePurchase
```

## View a list of self-service purchase products and their status

To view a list of all available self-service purchase products and the status of each, run the following command:

```powershell
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase
```

The following table lists the available products and their **ProductId**. It also indicates which products have a trial available and don't require a payment method. If applicable, all other trials require a payment method. For the products that have trial without payment method enabled, you can enable the trial, while keeping the ability to purchase the product disabled. For sample commands, see View or set the status for **AllowSelfServicePurchase**.

| **Product** | **ProductId** | **Is trial without payment method enabled?** |
|-----------------------------|--------------|--------------|
| Power Apps per user* | CFQ7TTC0LH2H | No |
| Power Automate per user* | CFQ7TTC0LH3L | No |
| Power Automate RPA* | CFQ7TTC0LSGZ  | No |
| Power BI Premium (standalone)* | CFQ7TTC0H6RP  | No |
| Power BI Pro* | CFQ7TTC0H9MP | No |
| Project Plan 1* | CFQ7TTC0HDB1 | Yes |
| Project Plan 3* | CFQ7TTC0HDB0 | No |
| Teams Exploratory | CFQ7TTC0J1FV | Yes |
| Visio Plan 1* | CFQ7TTC0HD33 | No |
| Visio Plan 2* | CFQ7TTC0HD32 | No |
| Viva Goals (self-service trials only) | CFQ7TTC0PW0V | Yes |
| Windows 365 Enterprise | CFQ7TTC0HHS9 | No |
| Windows 365 Business | CFQ7TTC0J203 | No |
| Windows 365 Business with Windows Hybrid Benefit | CFQ7TTC0HX99 | No |
| Microsoft 365 F3 | CFQ7TTC0LH05 | No |
| Dynamics 365 Marketing | CFQ7TTC0LH3N | No |
| Dynamics 365 Marketing Attach | CFQ7TTC0LHWP | No |
| Dynamics 365 Marketing Additional Application | CFQ7TTC0LHVK | No |
| Dynamics 365 Marketing Additional Non-Prod Application | CFQ7TTC0LHWM | No |

*These IDs have changed. If you previously blocked products using the old IDs, they're automatically blocked using the new IDs. No other work is required.

## View or set the status for AllowSelfServicePurchase

You can set the **Value** parameter for **AllowSelfServicePurchase** to allow or prevent users from making a self-service purchase. You can also use the **OnlyTrialsWithoutPaymentMethod** value to allow users to try products that have no payment required trials. Refer to the product list above to see which products have these trials enabled. Users can only buy the product after the trial is over if **AllowSelfServicePurchase** is enabled.

> [!NOTE]
> Changing the value for **AllowSelfServicePurchase** or **OnlyTrialsWithoutPaymentMethod** only impacts trials or purchases made for the specified product from that point forward. Existing trials or purchases for the specified product aren't affected.

The following table describes the settings for the **Value** parameter.

| **Setting** | **Impact** |
|---|---|
| Enabled | Users can make self-service purchases and acquire trials for the product. |
| OnlyTrialsWithoutPaymentMethod | Users can't make self-service purchases but can acquire free trials for products that don't require them to add a payment method. After the trial expires, a user can't buy the paid version of the product. |
| Disabled | Users can't make self-service purchases or acquire trials for the product. |

To get the policy setting for a specific product, run the following command:

```powershell
Get-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0KP0N
```

To enable the policy setting for a specific product, run the following command:

```powershell
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0KP0N -Value "Enabled"
```

To disable the policy setting for a specific product, run the following command:

```powershell
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0KP0N -Value "Disabled"
```

To allow users to try a specific product without a payment method, run the following command:

```powershell
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0KP0N -Value "OnlyTrialsWithoutPaymentMethod" 
```

## Example script to disable AllowSelfServicePurchase

The following example walks you through how to import the **MSCommerce** module, sign in with your account, get the **ProductId** for Power Automate per user, and then disable **AllowSelfServicePurchase** for that product.

```powershell
Import-Module -Name MSCommerce
Connect-MSCommerce #sign-in with your global or billing administrator account when prompted
$product = Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase | where {$_.ProductName -match 'Power Automate per user'}
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId $product.ProductID -Value "Disabled"
```

If there are multiple values for the product, you can run the command individually for each value as shown in the following example:

```powershell
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId $product[0].ProductID -Value "Disabled"
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId $product[1].ProductID -Value "Disabled"
```
