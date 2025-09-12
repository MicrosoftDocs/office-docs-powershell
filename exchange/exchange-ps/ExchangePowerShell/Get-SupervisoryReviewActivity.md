---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-supervisoryreviewactivity
schema: 2.0.0
title: Get-SupervisoryReviewActivity
---

# Get-SupervisoryReviewActivity

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SupervisoryReviewActivity cmdlet to view all activities performed by a reviewer for a specific supervision policy. This information might be useful if reviewer activities are required in regulatory compliance audits or in litigation.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SupervisoryReviewActivity -EndDate <ExDateTime> -PolicyId <String> -StartDate <ExDateTime>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SupervisoryReviewActivity -PolicyId $policyId -StartDate $startDate -EndDate $endDate | Sort-Object Timestamp -Descending | Format-List PolicyId,ItemSubject,ActivityId,Timestamp,ActionType,ActionAppliedBy,ItemStatusAfterAction
```

This example returns all the supervisory review activities for specified supervision policy.

### Example 2
```powershell
Get-SupervisoryReviewActivity -PolicyId $policyId -StartDate $startDate -EndDate $endDate | Sort-Object Timestamp -Descending | select-object PolicyId,ItemSubject,ActivityId,Timestamp,ActionType,ActionAppliedBy,ItemStatusAfterAction | Export-csv 'C:\Temp\SupervisoryReviewActivity.csv'
```

This example exports all the supervisory review activities for a policy to a .csv file named "SupervisoryReviewActivity".

## PARAMETERS

### -EndDate

> Applicable: Exchange Online, Security & Compliance

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyId

> Applicable: Exchange Online, Security & Compliance

{{ Fill PolicyId Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online, Security & Compliance

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: True
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
