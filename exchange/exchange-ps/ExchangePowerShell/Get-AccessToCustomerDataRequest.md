---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-accesstocustomerdatarequest
schema: 2.0.0
title: Get-AccessToCustomerDataRequest
---

# Get-AccessToCustomerDataRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AccessToCustomerDataRequest cmdlet to view Microsoft 365 Customer Lockbox requests that control access to your data by Microsoft support engineers.

**Note**: Customer Lockbox is included in Microsoft 365 E5, or you can buy a separate Customer Lockbox subscription with any Microsoft 365 Enterprise plan.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AccessToCustomerDataRequest [-ApprovalStatus <String>]
 [-CreatedAfter <ExDateTime>]
 [-RequestId <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AccessToCustomerDataRequest
```

This example returns a summary list of all Customer Lockbox request.

### Example 2
```powershell
Get-AccessToCustomerDataRequest -ApprovalStatus Pending
```

This example returns a summary list of all Customer Lockbox requests that have the status value Pending.

### Example 3
```powershell
Get-AccessToCustomerDataRequest -RequestId EXSR123456 | Format-List
```

This example returns detailed information the Customer Lockbox request EXSR123456.

## PARAMETERS

### -ApprovalStatus

> Applicable: Exchange Online, Exchange Online Protection

The ApprovalStatus parameter filters the results by approval status. Valid values are:

- Approved
- Canceled
- Denied
- Pending

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreatedAfter

> Applicable: Exchange Online, Exchange Online Protection

The CreatedAfter parameter filters the results by the creation date in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestId

> Applicable: Exchange Online, Exchange Online Protection

The RequestId parameter filters the results by reference number (for example, EXSR123456).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
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
