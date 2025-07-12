---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpincidentdetailsreport
applicable: Exchange Online, Security & Compliance
title: Get-DlpIncidentDetailReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DlpIncidentDetailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet will be retired. Use the [Export-ActivityExplorerData](https://learn.microsoft.com/powershell/module/exchange/export-activityexplorerdata) instead.

Use the Get-DlpIncidentDetailReport cmdlet to view the details of incidents that happened in the last 30 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpIncidentDetailReport
 [-Action <MultiValuedProperty>]
 [-Actor <MultiValuedProperty>]
 [-DlpCompliancePolicy <MultiValuedProperty>]
 [-DlpComplianceRule <MultiValuedProperty>]
 [-EndDate <System.DateTime>]
 [-EventType <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-Source <MultiValuedProperty>]
 [-StartDate <System.DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of the Get-DlpIncidentDetailReport cmdlet includes the following properties:

- Date
- Title
- Location
- Severity
- Size
- Source
- Actor
- DlpCompliancePolicy
- DlpComplianceRule
- UserAction
- Justification
- SensitiveInformationType
- SensitiveInformationCount
- SensitiveInformationConfidence
- EventType
- Action
- DistinctRuleCount
- DistinctPolicyCount
- RuleList
- PolicyList
- ActionList
- SensitiveInformationTypeList
- SensitiveInformationCountList
- SensitiveInformationConfidenceList

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DlpIncidentDetailReport -StartDate 2022/11 -EndDate 2022/11/30
```

This example lists the details of the all incidents that occurred between the dates specified.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken by DLP policies. Valid values are:

- BlockAccess
- GenerateIncidentReport
- NotifyUser

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Actor
The Actor parameter filters the report by the user who last modified the item. You can enter multiple users separated by commas.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpCompliancePolicy
The DlpCompliancePolicy parameter filters the report by the name of the DLP compliance policy. You can specify multiple policies separated by commas.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpComplianceRule
The DlpComplianceRule parameter filters the report by the name of the DLP compliance rule. You can specify multiple rules separated by commas.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType
The EventType parameter filters the report by the event type. Valid values are:

- DLPByIncidentIdActionHits
- DLPByIncidentIdMessages
- DLPByIncidentIdPolicyFalsePositive
- DLPByIncidentIdPolicyHits
- DLPByIncidentIdPolicyOverride
- DLPByIncidentIdRuleHits

To view the potential list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify DLP incident event types for DLP incident reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

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
Applicable: Exchange Online, Security & Compliance

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
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
The Source parameter filters the report by workload. Valid values are:

- EXCH: Exchange Online
- ODB: OneDrive
- SPO: SharePoint
- TEAMS

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

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
