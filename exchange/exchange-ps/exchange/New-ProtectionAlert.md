---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-protectionalert
applicable: Security & Compliance
title: New-ProtectionAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ProtectionAlert

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-ProtectionAlert cmdlet to create alert policies in the Microsoft Purview compliance portal and the Microsoft Defender portal. Alert policies contain conditions that define the user activities to monitor, and the notification options for email alerts and entries.

> [!NOTE]
> Although the cmdlet is available, you receive the following error if you don't have an enterprise license:
>
> _Creating advanced alert policies requires an Office 365 E5 subscription or Office 365 E3 subscription with an Office 365 Threat Intelligence or
Office 365 EquivioAnalytics add-on subscription for your organization. With your current subscription, only single event alerts can be created._
>
> You can bypass this error by specifying `-AggregationType None` and an `-Operation` within the command.
>
> For more information, see [Alert policies in Microsoft 365](https://learn.microsoft.com/purview/alert-policies).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ProtectionAlert -Category <AlertRuleCategory> -Name <String> -NotifyUser <MultiValuedProperty> -ThreatType <ThreatAlertType>
 [-AggregationType <AlertAggregationType>]
 [-AlertBy <MultiValuedProperty>]
 [-AlertFor <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-CorrelationPolicyId <System.Guid>]
 [-Description <String>]
 [-Disabled <Boolean>]
 [-Filter <String>]
 [-LogicalOperationName <String>]
 [-NotificationCulture <CultureInfo>]
 [-NotificationEnabled <Boolean>]
 [-NotifyUserOnFilterMatch <Boolean>]
 [-NotifyUserSuppressionExpiryDate <DateTime>]
 [-NotifyUserThrottleThreshold <Int32>]
 [-NotifyUserThrottleWindow <Int32>]
 [-Operation <MultiValuedProperty>]
 [-PrivacyManagementScopedSensitiveInformationTypes <MultiValuedProperty>]
 [-PrivacyManagementScopedSensitiveInformationTypesForCounting <MultiValuedProperty>]
 [-PrivacyManagementScopedSensitiveInformationTypesThreshold <System.UInt64>]
 [-CustomProperties <PswsHashtable>]
 [-Severity <RuleSeverity>]
 [-Threshold <Int32>]
 [-TimeWindow <Int32>]
 [-UseCreatedDateTime <System.Boolean>]
 [-VolumeThreshold <System.UInt64>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-ProtectionAlert -Name "Content search deleted" -Category Others -NotifyUser admin@contoso.com -ThreatType Activity -Operation SearchRemoved -Description "Custom alert policy to track when content searches are deleted" -AggregationType None
```

This example creates an alert policy that triggers an alert whenever anyone in the organization deletes a Content Search in the Microsoft Purview compliance portal.

## PARAMETERS

### -Category
The Category parameter specifies a category for the alert policy. Valid values are:

- AccessGovernance
- ComplianceManager
- DataGovernance
- MailFlow
- Others
- PrivacyManagement
- Supervision
- ThreatManagement

When an activity occurs that matches the conditions of the alert policy, the alert that's generated is tagged with the category that's specified by this parameter. This allows you to track and manage alerts that have the same category setting

```yaml
Type: AlertRuleCategory
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the alert policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUser
The NotifyUser parameter specifies the SMTP address of the user who receives notification messages for the alert policy. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThreatType
The ThreatType parameter specifies the type of activities that are monitored by the alert policy. Valid values are:

- Activity
- Malware

The value that you select for this parameter determines the values you can use for the AlertBy, Filter, and Operation parameters.

You can't change this value after you create the alert policy.

```yaml
Type: ThreatAlertType
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggregationType
The AggregationType parameter specifies the how the alert policy triggers alerts for multiple occurrences of monitored activity. Valid values are:

- None: Alerts are triggered for every occurrence of the activity.
- SimpleAggregation: Alerts are triggered based on the volume of activity in a given time window (the values of the Threshold and TimeWindow parameters). This is the default value.
- AnomalousAggregation: Alerts are triggered when the volume of activity reaches unusual levels (greatly exceeds the normal baseline that's established for the activity). Note that it can take up to 7 days for Microsoft 365 to establish the baseline. During the baseline calculation period, no alerts are generated for the activity.

```yaml
Type: AlertAggregationType
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlertBy
The AlertBy parameter specifies the scope for aggregated alert policies. Valid values are determined by the ThreatType parameter value:

- Activity: Valid values are User or $null (blank, which is the default value). If you don't use the value User, the scope of the alert policy is the entire organization.
- Malware: Valid values are Mail.Recipient or Mail.ThreatName.

You can't use this parameter when the AggregationType parameter value is None (alerts are triggered for every occurrence of the activity).

> [!NOTE]
> AlertBy is mandatory to display entities in alerts. Without it, alerts trigger but show no entities. We strongly recommend setting parameters in ‘AlertBy’


```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlertFor
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CorrelationPolicyId
{{ Fill CorrelationPolicyId Description }}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomProperties
{{ Fill CustomProperties Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies descriptive text for the alert policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
The Disabled parameter enables or disables the alert policy. Valid values are:

- $true: The alert policy is disabled.
- $false: The alert policy is enabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property.
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical `-and` operator (for example, `"Criteria1 -and Criteria2"`).

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

The filterable properties are:

Activity

- Activity.ClientIp
- Activity.CreationTime
- Activity.Item
- Activity.ItemType
- Activity.Operation
- Activity.ResultStatus
- Activity.Scope
- Activity.SiteUrl
- Activity.SourceFileExtension
- Activity.SourceFileName
- Activity.TargetUserOrGroupType
- Activity.UserAgent
- Activity.UserId
- Activity.UserType
- Activity.Workload

Malware

- Mail:AttachmentExtensions
- Mail:AttachmentNames
- Mail:CreationTime
- Mail:DeliveryStatus
- Mail:Direction
- Mail:From
- Mail:FromDomain
- Mail:InternetMessageId
- Mail:IsIntraOrgSpoof
- Mail:IsMalware
- Mail:IsSpam
- Mail:IsThreat
- Mail:Language
- Mail:Recipient
- Mail:Scl
- Mail:SenderCountry
- Mail:SenderIpAddress
- Mail:Subject
- Mail:TenantId
- Mail:ThreatName

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogicalOperationName
{{ Fill LogicalOperationName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationCulture
The NotificationCulture parameter specifies the language or locale that's used for notifications.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationEnabled
{{ Fill NotificationEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserOnFilterMatch
The NotifyUserOnFilterMatch parameter specifies whether to trigger an alert for a single event when the alert policy is configured for aggregated activity. Valid values are:

- $true: Even though the alert is configured for aggregated activity, a notification is triggered during a match for the activity (basically, an early warning).
- $false: Alerts are triggered according to the specified aggregation type. This is the default value.

You can't use this parameter when the AggregationType parameter value is None (alerts are triggered for every occurrence of the activity).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserSuppressionExpiryDate
The NotifyUserSuppressionExpiryDate parameter specifies whether to temporarily suspend notifications for the alert policy. Until the specified date-time, no notifications are sent for detected activities.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserThrottleThreshold
The NotifyUserThrottleThreshold parameter specifies the maximum number of notifications for the alert policy within the time period specified by the NotifyUserThrottleWindow parameter. Once the maximum number of notifications has been reached in the time period, no more notifications are sent for the alert. Valid values are:

- An integer.
- The value $null. This is the default value (no maximum number of notifications for an alert).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserThrottleWindow
The NotifyUserThrottleWindow parameter specifies the time interval in minutes that's used by the NotifyUserThrottleThreshold parameter. Valid values are:

- An integer.
- The value $null. This is the default value (no interval for notification throttling).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operation
The Operation parameter specifies the activities that are monitored by the alert policy. For the list of available activities, see the Audited activities tab at [Audited activities](https://learn.microsoft.com/purview/audit-log-activities).

Although this parameter is technically capable of accepting multiple values separated by commas, multiple values don't work.

You can only use this parameter when the ThreatType parameter has the value Activity.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyManagementScopedSensitiveInformationTypes
{{ Fill PrivacyManagementScopedSensitiveInformationTypes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyManagementScopedSensitiveInformationTypesForCounting
{{ Fill PrivacyManagementScopedSensitiveInformationTypesForCounting Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyManagementScopedSensitiveInformationTypesThreshold
{{ Fill PrivacyManagementScopedSensitiveInformationTypesThreshold Description }}

```yaml
Type: System.UInt64
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Severity
The Severity parameter specifies the severity of the detection. Valid values are:

- Low (This is the default value)
- Medium
- High

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Threshold
The Threshold parameter specifies the number of detections that trigger the alert policy within the time period specified by the TimeWindow parameter. A valid value is an integer that's greater than or equal to 3.

You can only use this parameter when the AggregationType parameter value is SimpleAggregation.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeWindow
The TimeWindow parameter specifies the time interval in minutes for number of detections specified by the Threshold parameter. A valid value is an integer that's greater than 60 (one hour).

You can only use this parameter when the AggregationType parameter value is SimpleAggregation.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCreatedDateTime
{{ Fill UseCreatedDateTime Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VolumeThreshold
{{ Fill VolumeThreshold Description }}

```yaml
Type: System.UInt64
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

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
