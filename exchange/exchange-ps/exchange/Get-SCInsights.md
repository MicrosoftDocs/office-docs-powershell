---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-SCInsights
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-SCInsights

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SCInsights cmdlet to view Office 365 insights information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SCInsights [-EndDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the following output:

- Organization: The Office 365 domain.

- Date: The date of the even in Coordinated Universal Time (UTC).

- InsightType

- InsightSubType: The value All or Archive.

- UsersCount: An integer count, or the size in megabytes for the InsightType value.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SCInsights
```

This example returns all insights data.

### -------------------------- Example 2 --------------------------
```
Get-SCInsights -EndDate (Get-Date "3/3/2018 9:30 AM").ToUniversalTime()
```

This example return insights data for March 15, 2018.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, (Get-Date "5/6/2016 9:30 AM").ToUniversalTime(). For more information, see Get-Date (https://go.microsoft.com/fwlink/p/?LinkID=113313).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e237daae-d2a7-4668-98a7-6c599f4a6545.aspx)
