---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-ActivityAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-ActivityAlert

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the New-ActivityAlert cmdlet to create activity alerts in the Security & Compliance Center. Activity alerts send you email notifications when users perform specific activities in Office 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### AnomalousOperationAuditAlert
```
New-ActivityAlert -Multiplier <Double> -Name <String> -NotifyUser <MultiValuedProperty> [-Operation <MultiValuedProperty>] -Type <Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation>
 [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>]
 [-Condition <String>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-ScopeLevel <SingleUser | AllUsers>]
 [-Severity <Low | Medium | High | None>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

### Default
```
New-ActivityAlert -Name <String> -NotifyUser <MultiValuedProperty> -Operation <MultiValuedProperty> [-Type <Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation>]
 [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-Severity <Low | Medium | High | None>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

### SimpleAggregationAuditAlert
```
New-ActivityAlert -Name <String> -NotifyUser <MultiValuedProperty> [-Operation <MultiValuedProperty>] -Threshold <Int32> -TimeWindow <Int32> -Type <Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation>
 [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>]
 [-Condition <String>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-ScopeLevel <SingleUser | AllUsers>]
 [-Severity <Low | Medium | High | None>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

### ElevationOfPrivilegeAuditAlert
```
New-ActivityAlert -Name <String> -NotifyUser <MultiValuedProperty> -Type <Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation>
 [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>]
 [-Confirm]
 [-Description <String>]
 [-Disabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-EmailCulture <CultureInfo>]
 [-RecordType <AuditRecordType>]
 [-Severity <Low | Medium | High | None>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUser
The NotifyUser parameter specifies the email addressesfor notification messages. You can specify internal and external email addresses.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

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

### -Operation
The Operation parameter specifies the activity that triggers an activity alert.

A valid value for this parameter is an activity that's available in the Office 365 audit log. For a description of these activities, see [Audited activities](https://go.microsoft.com/fwlink/p/?LinkId=824986).

Although this parameter is technically capable of accepting multiple values separated by commas, multiple values don't work.

You can't use this parameter if the Type parameter value is ElevationOfPrivilege.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type alert. Valid values are:

- Custom: An alert is created for the activities you specify with the Operation parameter. Typically, you don't need to use this value (if you don't use the Type parameter, and you specify the activities with the Operations parameter, the value Custom is automatically added to the Type property).

- ElevationOfPrivilege: An alert is created for a predefined list of elevation of privilege activities (Operation parameter values). The activities are Add-RoleGroupMember, New-ManagementRoleAssignment, Add member to role., Update-RoleGroupMember, New-RoleGroup, Set-RoleGroup, Set-Mailbox, and Set-ManagementRoleEntry. You can't use the Operation parameter when you use the ElevationOfPrivilege value (on the New-ActivityAlert or Set-ActivityAlert cmdlets).

- SimpleAggregation: An alert is created based on the activities defined by the Operation and Condition parameters, the number of activities specified by the Threshold parameter, and the time period specified by the TimeWindow parameter.

- AnomalousAggregation: An alert is created based the activities defined by the Operation and Condition parameters, and the number of activities specified by the Multiplier parameter.

Note: You can't change the Type value in an existing activity alert.

```yaml
Type: Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert, ElevationOfPrivilegeAuditAlert
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation
Parameter Sets: Default
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Type: None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Aliases: cf
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailCulture
The EmailCulture parameter specifies the language of the notification email message.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).

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

### -RecordType
The RecordType parameter specifies a record type label for the activity alert. Valid values are:

- AeD

- AzureActiveDirectory

- AzureActiveDirectoryAccountLogon

- AzureActiveDirectoryStsLogon

- ComplianceDLPExchange

- ComplianceDLPSharePoint

- CRM

- DataCenterSecurityCmdlet

- Discovery

- ExchangeAdmin

- ExchangeAggregatedOperation

- ExchangeItem

- ExchangeItemGroup

- MicrosoftTeams

- OneDrive

- PowerBIAudit

- SecurityComplianceAlerts

- SecurityComplianceCenterEOPCmdlet

- SecurityComplianceInsights

- SharePoint

- SharePointFileOperation

- SharePointListOperation

- SharePointSharingOperation

- SkypeForBusinessCmdlets

- SkypeForBusinessPSTNUsage

- SkypeForBusinessUsersBlocked

- Sway

- ThreatIntelligence

- ThreatIntelligenceAtpContent

- ThreatIntelligenceUrl

- WorkplaceAnalytics

- Yammer

You can't use this parameter when the value of the Type parameter is ElevationOfPrivilege.

```yaml
Type: AuditRecordType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Type: SingleUser | AllUsers
Parameter Sets: AnomalousOperationAuditAlert, SimpleAggregationAuditAlert
Aliases:
Applicable: Office 365 Security & Compliance Center

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

### -UserId
The UserId parameter specifies who you want to monitor.

- If you specify a user's email address, you'll receive an email notification when the user performs the specified activity. You can specify multiple email addresses separated by commas.

- If this parameter is blank ($null), you'll receive an email notification when any user in your organization performs the specified activity.

You can only use this parameter with the Type parameter values Custom or ElevationOfPrivilege.

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

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c84fb3ae-c608-4ff2-9d1b-3c423a815d9e.aspx)
