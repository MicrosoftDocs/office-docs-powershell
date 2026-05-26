---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-billingpolicy
schema: 2.0.0
title: Get-BillingPolicy
---

# Get-BillingPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-BillingPolicy cmdlet to return detailed information about Microsoft 365 pay-as-you-go billing policies for High Volume Email configured for your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-BillingPolicy [-ResourceType] <System.String> [<CommonParameters>]
```

## DESCRIPTION
Billing policies define the Microsoft Azure subscription and related billing metadata used by Microsoft services. For more information, see [Microsoft 365 pay-as-you-go services](https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-overview).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-BillingPolicy -ResourceType HVE
```

This example returns all billing policies in the organization that can be used with High Volume Email.

## PARAMETERS

### -ResourceType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ResourceType parameter specifies the type of billing policies to retrieve. Currently, the only supported value is HVE.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Accepted values: HVE

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
