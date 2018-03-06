---
applicable: Office 365 Security & Compliance Center
schema: 2.0.0
---

# New-ProtectionAlert

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-ProtectionAlert cmdlet to create alert policies in the Security & Compliance Center. Alert policies contain conditions that define the user activities to monitor, and the notification options for email alerts and entries in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ProtectionAlert
 -Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>
 -Name <String> -NotifyUser <MultiValuedProperty> -ThreatType <None | Malware | Phish | Activity>
 [-AggregationType <None | SimpleAggregation | AnomalousAggregation>] [-AlertBy <MultiValuedProperty>]
 [-AlertFor <MultiValuedProperty>] [-Comment <String>] [-Confirm] [-Description <String>]
 [-Disabled <$true | $false>] [-Filter <String>] [-NotificationCulture <CultureInfo>]
 [-NotifyUserOnFilterMatch <$true | $false>] [-NotifyUserSuppressionExpiryDate <DateTime>]
 [-NotifyUserThrottleThreshold <Int32>] [-NotifyUserThrottleWindow <Int32>] [-Operation <MultiValuedProperty>]
 [-Severity <Low | Medium | High | None>] [-Threshold <Int32>] [-TimeWindow <Int32>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.

### Example 2
```
Insert example commands for example 2.
```

Insert descriptive text for example 2.

## PARAMETERS

### -Category
The Category parameter specifies a category for the alert policy. Valid values are:

- AccessGovernance

- DataGovernance

- DataLossPrevention

- ThreatManagement

- Others

When an activity occurs that matches the conditions of the alert policy, the alert that's generated is tagged with the category that's specified by this parameter. This allows you to track and manage alerts that have the same category setting

```yaml
Type: None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Type: None | Malware | Phish | Activity
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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

- AnomalousAggregation: Alerts are triggered when the volume of activity reaches unusual levels (greatly exceeds the normal baseline that's established for the activity). Note that it can take up to 7 days for Office 365 to establish the baseline. During the baseline calculation period, no alerts are generated for the activity.

```yaml
Type: None | SimpleAggregation | AnomalousAggregation
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter specifies part of the conditions for the alert policy by using OPath filter syntax. The OPath filter includes a property name followed by a comparison operator and value. For example, {Mail:Direction -eq 'Inbound'}. The filterable properties are:

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

You can specify multiple criteria by using the -and comparison operator.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationCulture
The NotificationCulture parameter specifies the language or locale that's used for notifications.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUserSuppressionExpiryDate
The NotifyUserSuppressionExpiryDate parameter specifies whether to temporarily suspend notifications for the alert policy. Until the specified date-time, no notifications are sent for detected activities.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operation
The Operation parameter specifies the activities that are monitored by the alert policy. For the list of available activities, see the Audited activities tab at Search the audit log in the Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?linkid=824986).

You can specify multiple values separated by commas.

You can only use this parameter when the ThreatType parameter has the value Activity.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Type: Low | Medium | High | None
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/48bd261f-8aa3-4f6a-9552-c94756025450.aspx)

