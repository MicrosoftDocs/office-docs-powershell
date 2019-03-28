---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-SupervisoryReviewPolicyReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-SupervisoryReviewPolicyReport

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-SupervisoryReviewPolicyReport cmdlet to view supervisory review policy events in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SupervisoryReviewPolicyReport [-EndDate <DateTime>] [-Page <Int32>] [-PageSize <Int32>]
 [-Policies <MultiValuedProperty>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
For the reporting period you specify, the Get-SupervisoryReviewPolicyReport cmdlet returns the following information:

- Organization

- Date

- Policy

- Message Type

- Tag Type: Messages that are eligible for evaluation by the policy are `InPurview`. Messages that match the conditions of the policy are `HitPolicy`. Classifications that are manually assigned to messages by the designated reviewers using the Supervision add-in for Outlook web app are `Compliant`, `Non-compliant`, `Questionable`, and `Resolved`. Messages that match the conditions of a policy but haven't been reviewed by a designated reviewer are `Not-Reviewed`. Messages that match the conditions of a policy and have been reviewed by a designated reviewer are `New-Reviewed`.

- Item Count

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SupervisoryReviewPolicyReport -StartDate 03/01/2018 -EndDate 03/31/2018
```

This example returns the supervisory review policy events for the month of March, 2018.

### -------------------------- Example 2 --------------------------
```
Get-SupervisoryReviewPolicyReport -Policies "EU Brokers Policy"
```

This example returns the supervisory review policy events for the policy named EU Brokers Policy.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -Page
The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policies
The Policies parameter filters the results by the supervisory review policy.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

[Online Version](https://technet.microsoft.com/library/cdd3cf55-6319-47ef-bcf8-12b6d4dc29e7.aspx)
