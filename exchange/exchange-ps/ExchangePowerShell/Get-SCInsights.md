---
applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-scinsights
schema: 2.0.0
title: Get-SCInsights
---

# Get-SCInsights

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SCInsights cmdlet to view Microsoft 365 insights information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SCInsights [-EndDate <DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the following output:

- Organization: The Microsoft 365 domain.
- Date: The date of the event in Coordinated Universal Time (UTC).
- InsightType
- InsightSubType: The value All or Archive.
- UsersCount: An integer count, or the size in megabytes for the InsightType value.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SCInsights
```

This example returns all insights data.

### Example 2
```powershell
Get-SCInsights -EndDate (Get-Date "3/3/2018 9:30 AM").ToUniversalTime()
```

This example return insights data for March 15, 2018.

## PARAMETERS

### -EndDate

> Applicable: Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The EndDate parameter specifies the end date of the date range.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
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
