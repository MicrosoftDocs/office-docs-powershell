---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/new-label
applicable: Office 365 Security & Compliance Center
title: New-Label
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-Label

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the New-Label cmdlet to create sensitivity labels in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
New-Label [-Name] <String> -DisplayName <String>
 [-AdvancedSettings <PswsHashtable>]
 [-ApplyContentMarkingFooterAlignment <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment>]
 [-ApplyContentMarkingFooterEnabled <System.Boolean>]
 [-ApplyContentMarkingFooterFontColor <String>]
 [-ApplyContentMarkingFooterFontName <String>]
 [-ApplyContentMarkingFooterFontSize <System.Int32>]
 [-ApplyContentMarkingFooterMargin <System.Int32>]
 [-ApplyContentMarkingFooterText <String>]
 [-ApplyContentMarkingHeaderAlignment <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment>]
 [-ApplyContentMarkingHeaderEnabled <System.Boolean>]
 [-ApplyContentMarkingHeaderFontColor <String>]
 [-ApplyContentMarkingHeaderFontName <String>]
 [-ApplyContentMarkingHeaderFontSize <System.Int32>]
 [-ApplyContentMarkingHeaderMargin <System.Int32>]
 [-ApplyContentMarkingHeaderText <String>]
 [-ApplyWaterMarkingEnabled <System.Boolean>]
 [-ApplyWaterMarkingFontColor <String>]
 [-ApplyWaterMarkingFontName <String>]
 [-ApplyWaterMarkingFontSize <System.Int32>]
 [-ApplyWaterMarkingLayout <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+WaterMarkingLayout>]
 [-ApplyWaterMarkingText <String>]
 [-Comment <String>]
 [-Conditions <MultiValuedProperty>]
 [-Confirm]
 [-EncryptionAipTemplateScopes <String>]
 [-EncryptionContentExpiredOnDateInDaysOrNever <String>]
 [-EncryptionDoNotForward <System.Boolean>]
 [-EncryptionDoubleKeyEncryptionUrl <String>]
 [-EncryptionEnabled <System.Boolean>]
 [-EncryptionEncryptOnly <System.Boolean>]
 [-EncryptionLinkedTemplateId <String>]
 [-EncryptionOfflineAccessDays <System.Int32>]
 [-EncryptionPromptUser <System.Boolean>]
 [-EncryptionProtectionType <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+SupportedProtectionType>]
 [-EncryptionRightsDefinitions <String>]
 [-EncryptionRightsUrl <String>]
 [-EncryptionTemplateId <String>]
 [-Identity <MasterIdParameter>]
 [-LabelActions <MultiValuedProperty>]
 [-LocaleSettings <<MultiValuedProperty>]
 [-MigrationId <String>]
 [-ParentId <ComplianceRuleIdParameter>]
 [-Setting <PswsHashtable>]
 [-Settings <PswsHashtable>]
 [-SiteAndGroupProtectionAllowAccessToGuestUsers <System.Boolean>]
 [-SiteAndGroupProtectionAllowEmailFromGuestUsers <System.Boolean>]
 [-SiteAndGroupProtectionAllowFullAccess <System.Boolean>]
 [-SiteAndGroupProtectionAllowLimitedAccess <System.Boolean>]
 [-SiteAndGroupProtectionBlockAccess <System.Boolean>]
 [-SiteAndGroupProtectionEnabled <System.Boolean>]
 [-SiteAndGroupProtectionPrivacy <Microsoft.Office.CompliancePolicy.PolicyConfiguration.AccessType>]
 [-Tooltip <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-Label -DisplayName "My New label" -Name "New Label"
```

This example create a new label named "New Label" with a display name "My New Label".

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the sensitivity label. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name for the sensitivity label. The display name appears in the Microsoft Office and is used by Outlook users to select the appropriate sensitivity label before they send a message.

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

### -AdvancedSettings
The AdvancedSettings parameter enables client-specific features and capabilities on the sensitivity label. The settings that you configure with this parameter only affect apps that are designed for the setting. For more information, see [How to configure advanced settings for the client by using Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/azure/information-protection/rms-client/clientv2-admin-guide-customizations#how-to-configure-advanced-settings-for-the-client-by-using-office-365-security--compliance-center-powershell).

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterAlignment
{{ Fill ApplyContentMarkingFooterAlignment Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterEnabled
{{ Fill ApplyContentMarkingFooterEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterFontColor
{{ Fill ApplyContentMarkingFooterFontColor Description }}

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

### -ApplyContentMarkingFooterFontName
{{ Fill ApplyContentMarkingFooterFontName Description }}

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

### -ApplyContentMarkingFooterFontSize
{{ Fill ApplyContentMarkingFooterFontSize Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterMargin
{{ Fill ApplyContentMarkingFooterMargin Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterText
{{ Fill ApplyContentMarkingFooterText Description }}

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

### -ApplyContentMarkingHeaderAlignment
{{ Fill ApplyContentMarkingHeaderAlignment Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderEnabled
{{ Fill ApplyContentMarkingHeaderEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderFontColor
{{ Fill ApplyContentMarkingHeaderFontColor Description }}

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

### -ApplyContentMarkingHeaderFontName
{{ Fill ApplyContentMarkingHeaderFontName Description }}

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

### -ApplyContentMarkingHeaderFontSize
{{ Fill ApplyContentMarkingHeaderFontSize Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderMargin
{{ Fill ApplyContentMarkingHeaderMargin Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderText
{{ Fill ApplyContentMarkingHeaderText Description }}

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

### -ApplyWaterMarkingEnabled
{{ Fill ApplyWaterMarkingEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingFontColor
{{ Fill ApplyWaterMarkingFontColor Description }}

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

### -ApplyWaterMarkingFontName
{{ Fill ApplyWaterMarkingFontName Description }}

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

### -ApplyWaterMarkingFontSize
{{ Fill ApplyWaterMarkingFontSize Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingLayout
{{ Fill ApplyWaterMarkingLayout Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+WaterMarkingLayout
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingText
{{ Fill ApplyWaterMarkingText Description }}

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

### -Conditions
This parameter is reserved for internal Microsoft use.

```yaml
Type:
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

### -EncryptionAipTemplateScopes
{{ Fill EncryptionAipTemplateScopes Description }}

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

### -EncryptionContentExpiredOnDateInDaysOrNever
{{ Fill EncryptionContentExpiredOnDateInDaysOrNever Description }}

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

### -EncryptionDoNotForward
{{ Fill EncryptionDoNotForward Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionDoubleKeyEncryptionUrl
{{ Fill EncryptionDoubleKeyEncryptionUrl Description }}

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

### -EncryptionEnabled
{{ Fill EncryptionEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionEncryptOnly
{{ Fill EncryptionEncryptOnly Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionLinkedTemplateId
{{ Fill EncryptionLinkedTemplateId Description }}

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

### -EncryptionOfflineAccessDays
{{ Fill EncryptionOfflineAccessDays Description }}

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionPromptUser
{{ Fill EncryptionPromptUser Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionProtectionType
{{ Fill EncryptionProtectionType Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+SupportedProtectionType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRightsDefinitions
{{ Fill EncryptionRightsDefinitions Description }}

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

### -EncryptionRightsUrl
{{ Fill EncryptionRightsUrl Description }}

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

### -EncryptionTemplateId
{{ Fill EncryptionTemplateId Description }}

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

### -Identity
{{ Fill Identity Description }}

```yaml
Type: MasterIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelActions
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

### -LocaleSettings
The LocaleSettings parameter specifies one or more localized label name or label Tooltips in different languages. Regions include all region codes supported in Office Client applications. Valid values use the following syntax:

- Label display names: {"localeKey":"DisplayName","Settings":[{"Key":"en-us","Value":"English display name"},{"Key":"de-de","Value":"Deutscher Anzeigename"},{"Key":"es-es","Value":"Nombre para mostrar en español"}]}

- Label Tooltips: {"localeKey":"Tooltip","Settings":[{"Key":"en-us","Value":"English Tooltip"},{"Key":"de-de",Value":"Deutscher Tooltip"},{"Key":"es-es","Value":"Tooltip Español"}]}

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

### -MigrationId
{{ Fill MigrationId Description }}

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

### -ParentId
The ParentId parameter specifies the parent label that you want this label to be under (a sublabel). You can use any value that uniquely identifies the parent sensitivity label. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Setting
This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Settings
This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowAccessToGuestUsers
{{ Fill SiteAndGroupProtectionAllowAccessToGuestUsers Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowEmailFromGuestUsers
{{ Fill SiteAndGroupProtectionAllowEmailFromGuestUsers Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowFullAccess
{{ Fill SiteAndGroupProtectionAllowFullAccess Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowLimitedAccess
{{ Fill SiteAndGroupProtectionAllowLimitedAccess Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionBlockAccess
{{ Fill SiteAndGroupProtectionBlockAccess Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionEnabled
{{ Fill SiteAndGroupProtectionEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionPrivacy
{{ Fill SiteAndGroupProtectionPrivacy Description }}

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.AccessType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tooltip
The ToolTip parameter specifies the default tooltip and sensitivity label description that's seen by users. It the value contains spaces, enclose the value in quotation marks (").

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

### -WhatIf
The WhatIf switch doesn't work in Office 365 Security & Compliance Center PowerShell.

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
