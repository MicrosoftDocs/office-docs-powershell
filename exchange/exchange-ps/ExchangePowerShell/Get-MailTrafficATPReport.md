---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailtrafficatpreport
schema: 2.0.0
title: Get-MailTrafficATPReport
---

# Get-MailTrafficATPReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficATPReport cmdlet to view the results of Microsoft Defender for Office 365 detections in your cloud-based organization for the last 90 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailTrafficATPReport
 [-Action <MultiValuedProperty>]
 [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-NumberOfRows <Int32>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-PivotBy <MultiValuedProperty>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [-SummarizeBy <MultiValuedProperty>]
 [-ThreatClassification <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

For the reporting period you specify, the cmdlet returns the following information:

- Date
- Event Type
- Direction
- Verdict Source
- Message Count

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailTrafficATPReport
```

This example retrieves details for messages for the last 92 days.

### Example 2
```powershell
Get-MailTrafficATPReport -StartDate (Get-Date "12/25/2021 12:01 AM").ToUniversalTime() -EndDate (Get-Date "12/25/2021 11:59 PM").ToUniversalTime() -Direction Outbound
```

This example retrieves the statistics for outgoing messages on December 25, 2021 and displays the results in a table.

## PARAMETERS

### -Action

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggregateBy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AggregateBy parameter specifies the reporting period. Valid values are Hour, Day, or Summary. The default value is Day.

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

### -Direction

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Direction parameter filters the results by incoming or outgoing messages. Valid values are:

- Inbound
- Outbound
- IntraOrg

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The EndDate parameter specifies the end of the date range in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you use this parameter, you also need to use the StartDate parameter.

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

### -EventType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The EventType parameter filters the report by the event type. Valid values are:

- Advanced filter
- Anti-malware Engine
- Campaign
- File detonation
- File detonation reputation
- File reputation
- Fingerprint matching
- General filter
- Impersonation brand
- Impersonation domain
- Impersonation user
- Mailbox intelligence impersonation
- Message passed
- Mixed analysis detection
- Spoof DMARC
- Spoof external domain
- Spoof intra-org
- URL detonation
- URL detonation reputation
- URL malicious reputation

**Note**: Some values correspond to features that are available only in Defender for Office 365 (plan 1 and plan 2 or plan 2 only).

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfRows

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The NumberOfRows parameter specifies the number of rows to return in the report. The maximum value is 10000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PivotBy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill PivotBy Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeTag

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

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

### -StartDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The StartDate parameter specifies the start of the date range in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you use this parameter, you also need to use the EndDate parameter.

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

### -SummarizeBy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

For this cmdlet, valid values are:

- Action
- Direction
- Domain
- EventType

You can specify multiple values separated by commas. When you specify the values Action or Domain, the value is not displayed in the results (the values in the corresponding columns are blank).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThreatClassification

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill ThreatClassification Description }}

```yaml
Type: MultiValuedProperty
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
