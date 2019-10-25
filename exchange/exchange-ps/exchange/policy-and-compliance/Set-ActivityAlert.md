---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-ActivityAlert
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Set-ActivityAlert

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Set-ActivityAlert cmdlet to modify activity alerts in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ActivityAlert [-Identity] <ComplianceRuleIdParameter>
 [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>]
 [-Condition <String>] [-Confirm]
 [-Description <String>]
 [-Disabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-EmailCulture <CultureInfo>]
 [-Multiplier <Double>]
 [-Name <String>]
 [-NotifyUser <MultiValuedProperty>]
 [-Operation <MultiValuedProperty>]
 [-RecordType <AuditRecordType>]
 [-ScopeLevel <SingleUser | AllUsers>]
 [-Severity <Low | Medium | High | None>]
 [-Threshold <Int32>]
 [-TimeWindow <Int32>]
 [-UserId <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$NU = Get-ActivityAlert "Contoso Elevation of Privilege"; $NU.NotifyUser.Add("chris@fabrikam.com"); Set-ActivityAlert "Contoso Elevation of Privilege" -NotifyUser $NU.NotifyUser
```

This example adds the external user chris@fabrikam.com to the list of recipients that email notifications are sent to for the activity alert named Contoso Elevation of Privilege.

Note: To remove an existing email address from the list of recipients, change the value NotifyUser.Add to NotifyUser.Remove.

### -------------------------- Example 2 --------------------------
```
Set-ActivityAlert -Identity "External Sharing Alert" -Disabled $true
```

This example disables the existing activity alert named External Sharing Alert.

## PARAMETERS

### -Identity
The Identity parameter specifies the activity alert that you want to modify. You can use any value that uniquely identifies the activity alert. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

### -Multiplier
The Multiplier parameter specifies the number of events that trigger an activity alert. The value of this parameter indicates a multiplier from a baseline value.

You can only use this parameter on activity alerts that have the Type property value AnomalousAggregation.

```yaml
Type: Double
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
This parameter is reserved for internal Microsoft use.

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

### -NotifyUser
The NotifyUser parameter specifies the email address of the recipients who will receive the notification emails. You can specify internal and external email addresses.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

To modify the existing list of recipients, see the Examples section.

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

### -Operation
The Operation parameter specifies the activities that trigger activity alerts.

A valid value for this parameter is an activity that's available in the Office 365 audit log. For a description of these activities, see [Audited activities](https://go.microsoft.com/fwlink/p/?LinkId=824986).

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

For the syntax that you use to modify an existing list of Operations values, see the Examples section.

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

### -Threshold
The Threshold parameter specifies the number of events that trigger an activity alert in the time interval that's specified by the TimeWindow parameter. The minimum value for this parameter is 3.

You can only use this parameter on activity alerts that have the Type property value SimpleAggregation.

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
The TimeWindow parameter specifies the time window in minutes that's used by the Threshold parameter.

You can only use this parameter on activity alerts that have the Type property value SimpleAggregation.

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

### -UserId
The UserId parameter specifies who you want to monitor.

- If you specify a user's email address, you'll receive an email notification when the user performs the specified activity. You can specify multiple email addresses separated by commas.

- If this parameter is blank ($null), you'll receive an email notification when any user in your organization performs the specified activity.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can only use this parameter on activity alerts that have the Type property values Custom or ElevationOfPrivilege.

For the syntax that you use to modify an existing list of UserId values, see the Examples section.

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

[Online Version](https://technet.microsoft.com/library/798baa99-ff27-45e2-a19a-8c3d7b288a3d.aspx)
