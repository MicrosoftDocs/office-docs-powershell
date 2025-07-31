---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-aggregatezapreport
schema: 2.0.0
title: Get-AggregateZapReport
---

# Get-AggregateZapReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AggregateZapReport cmdlet to view aggregate information about zero-hour auto purge (ZAP) activity. By default, the cmdlet shows the last three days of activity, but you can specify up to ten days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AggregateZapReport
 [[-EndDate] <System.DateTime>]
 [[-Page] <Int32>]
 [[-PageSize] <Int32>]
 [[-StartDate] <System.DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
For the reporting period you specify, the cmdlet returns the following information:

- Date
- EventType
- ZapActionCount

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AggregateZapReport
```

This example retrieves information for the last 3 days.

### Example 2
```powershell
Get-AggregateZapReport -StartDate 7/1/2023 -EndDate 7/9/2023
```

This example retrieves information for the specified date range.

## PARAMETERS

### -EndDate

> Applicable: Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only. If you enter the date, enclose the value in quotation marks ("), for example, "09/01/2018".

If you use the EndDate parameter, you also need to use the StartDate parameter.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online

The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018".

If you use this parameter, you also need to use the StartDate parameter.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
