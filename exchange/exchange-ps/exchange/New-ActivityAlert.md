---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-activityalert
applicable: Security & Compliance
title: New-ActivityAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ActivityAlert

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

**Note**: Activity alerts have been effectively replaced by alert policies and the corresponding **\*-ProtectionAlert** cmdlets. For more information about alert policies, see [Alert policies in Microsoft 365](https://learn.microsoft.com/purview/alert-policies).

Use the New-ActivityAlert cmdlet to create activity alerts. Activity alerts send email notifications when users perform specific activities in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AnomalousOperationAuditAlert
```
New-ActivityAlert -Multiplier <Double> -Name <String> -NotifyUser <MultiValuedProperty> -Type <AlertType>
 [-Operation <MultiValuedProperty>]
 [-Category <AlertRuleCategory>]
 [-Condition <String>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <Boolean>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-ScopeLevel <AlertScopeLevel>]
 [-Severity <RuleSeverity>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

### SimpleAggregationAuditAlert
```
New-ActivityAlert -Name <String> -NotifyUser <MultiValuedProperty> -Threshold <Int32> -TimeWindow <Int32> -Type <AlertType>
 [-Operation <MultiValuedProperty>]
 [-Category <AlertRuleCategory>]
 [-Condition <String>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <Boolean>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-ScopeLevel <AlertScopeLevel>]
 [-Severity <RuleSeverity>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
New-ActivityAlert -Name <String> -NotifyUser <MultiValuedProperty> -Operation <MultiValuedProperty>
 [-Type <AlertType>]
 [-Category <AlertRuleCategory>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <Boolean>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-Severity <RuleSeverity>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-ActivityAlert -Name "External Sharing Alert" -Operation sharinginvitationcreated -NotifyUser chrisda@contoso.com,michelle@contoso.com -UserId laura@contoso.com,julia@contoso.com -Description "Notification for external sharing events by laura@contoso.com and julia@contoso.com"
```

This example creates a new activity alert named External Sharing Alert that has the following properties:

- Operation: sharinginvitationcreated.
- NotifyUser: chrisda@contoso.com and michelle@contoso.com.
- UserId: laura@contoso.com and julia@contoso.com.
- Description: Notification for external sharing events by laura@contoso.com and julia@contoso.com.

## PARAMETERS

### -Multiplier
The Multiplier parameter specifies the number of events that trigger an activity alert. The value of this parameter indicates a multiplier from a baseline value.

You can only use this parameter with the Type parameter value AnomalousAggregation.

```yaml
Type: Double
Parameter Sets: AnomalousOperationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the activity alert. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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
The NotifyUser parameter specifies the email addressesfor notification messages. You can specify internal and external email addresses.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

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

### -Operation
The Operation parameter specifies the activity that triggers an activity alert.

A valid value for this parameter is an activity that's available in the Microsoft 365 audit log. For a description of these activities, see [Audited activities](https://learn.microsoft.com/purview/audit-log-activities).

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter if the Type parameter value is ElevationOfPrivilege.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MultiValuedProperty
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Threshold
The Threshold parameter specifies the number of events that trigger an activity alert in the time interval that's specified by the TimeWindow parameter. The minimum value for this parameter is 3.

You can only use this parameter with the Type parameter value SimpleAggregation.

```yaml
Type: Int32
Parameter Sets: SimpleAggregationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeWindow
The TimeWindow parameter specifies the time window in minutes that's used by the Threshold parameter.

You can only use this parameter with the Type parameter value SimpleAggregation.

```yaml
Type: Int32
Parameter Sets: SimpleAggregationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type alert. Valid values are:

- Custom: An alert is created for the activities you specify with the Operation parameter. Typically, you don't need to use this value (if you don't use the Type parameter, and you specify the activities with the Operations parameter, the value Custom is automatically added to the Type property).
- ElevationOfPrivilege: This value is being retired.
- SimpleAggregation: An alert is created based on the activities defined by the Operation and Condition parameters, the number of activities specified by the Threshold parameter, and the time period specified by the TimeWindow parameter.
- AnomalousAggregation: An alert is created based the activities defined by the Operation and Condition parameters, and the number of activities specified by the Multiplier parameter.

**Note**: You can't change the Type value in an existing activity alert.

```yaml
Type: AlertType
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: AlertType
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Category
The Category parameter specifies a category for the activity alert. Valid values are:

- None (This is the default value)
- DataLossPrevention
- ThreatManagement
- DataGovernance
- AccessGovernance
- Others

```yaml
Type: AlertRuleCategory
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Condition
The Condition parameter specifies filter conditions for event aggregation.

```yaml
Type: String
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert
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

### -Description
The Description parameter specifies an optional description for the activity alert. If the value contains spaces, enclose the value in quotation marks (").

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
The Disabled parameter specifies whether the activity alert is enabled or disabled. Valid values are:

- $true: The activity alert is disabled.
- $false: The activity alert is enabled. This is the default value.

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

### -EmailCulture
The EmailCulture parameter specifies the language of the notification email message.

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

### -RecordType
The RecordType parameter specifies a record type label for the activity alert. For details about the available values, see [AuditLogRecordType](https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema#auditlogrecordtype).

You can't use this parameter when the value of the Type parameter is ElevationOfPrivilege.

```yaml
Type: AuditRecordType
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeLevel
The ScopeLevel parameter specifies the scope for activity alerts that use the Type parameter values SimpleAggregation or AnomalousAggregation. Valid values are:

- SingleUser (This is the default value)
- AllUsers

```yaml
Type: AlertScopeLevel
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Severity
The Severity parameter specifies a severity level for the activity alert. Valid values are:

- None
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

### -UserId
The UserId parameter specifies who you want to monitor.

- If you specify a user's email address, you'll receive an email notification when the user performs the specified activity. You can specify multiple email addresses separated by commas.
- If this parameter is blank ($null), you'll receive an email notification when any user in your organization performs the specified activity.

You can only use this parameter with the Type parameter values Custom or ElevationOfPrivilege.

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
