---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/new-label
applicable: Office 365 Security & Compliance Center
title: New-Label
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-Label

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the New-Label cmdlet to create sensitivity labels in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-Label [-Name] <String> -DisplayName <String> -Tooltip <String>
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
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

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
The DisplayName parameter specifies the display name for the sensitivity label. The display name appears in any client that supports sensitivity labels. This includes Word, Excel, PowerPoint, Outlook, SharePoint, Teams, and Power BI.

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

### -Tooltip
The ToolTip parameter specifies the default tooltip and sensitivity label description that's seen by users. It the value contains spaces, enclose the value in quotation marks (").

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
The AdvancedSettings parameter enables client-specific features and capabilities on the sensitivity label. The settings that you configure with this parameter only affect apps that are designed for the setting. For more information, see [How to configure advanced settings for the client by using Security & Compliance Center PowerShell](https://docs.microsoft.com/azure/information-protection/rms-client/clientv2-admin-guide-customizations#how-to-configure-advanced-settings-for-the-client-by-using-office-365-security--compliance-center-powershell).

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
The ApplyContentMarkingFooterAlignment parameter specifies the footer alignment. Valid values are:

- Left
- Center
- Right

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingFooterEnabled parameter enables or disables the Apply Content Marking Footer action for the label. Valid values are:

- $true: The Apply Content Marking Footer action is enabled.

- $false: The Apply Content Marking Footer action is disabled.

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
The ApplyContentMarkingFooterFontColor parameter specifies the color of the footer text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingFooterFontName parameter specifies the font of the footer text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingFooterFontSize parameter specifies the font size (in points) of the footer text.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingFooterMargin parameter specifies the size (in points) of the footer margin.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingFooterText parameter specifies the footer text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderAlignment parameter specifies the header alignment. Valid values are:

- Left
- Center
- Right

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderEnabled parameter enables or disables the Apply Content Marking Header action for the label. Valid values are:

- $true: The Apply Content Marking Header action is enabled.

- $false: The Apply Content Marking Header action is disabled.

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
The ApplyContentMarkingHeaderFontColor parameter specifies the color of the header text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderFontName parameter specifies the font of the header text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderFontSize parameter specifies the font size (in points) of the header text.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderMargin parameter specifies the size (in points) of the header margin.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyContentMarkingHeaderText parameter specifies the header text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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
The ApplyWaterMarkingEnabled parameter enables or disables the Apply Watermarking Header action for the label. Valid values are:

- $true: The Apply Watermarking Header action is enabled.

- $false: The Apply Watermarking Header action is disabled.

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
The ApplyWaterMarkingFontColor parameter specifies the color of the watermark text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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
The ApplyWaterMarkingFontName parameter specifies the font of the watermark text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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
The ApplyWaterMarkingFontSize parameter specifies the font size (in points) of the watermark text.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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
The ApplyWaterMarkingAlignment parameter specifies the watermark alignment. Valid values are:

- Horizontal
- Diagonal

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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
The ApplyWaterMarkingText parameter specifies the watermark text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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
The EncryptionAipTemplateScopes parameter specifies that the label is still published and usable in the AIP classic client. An example value is `"['allcompany@labelaction.onmicrosoft.com','admin@labelaction.onmicrosoft.com']"`.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionContentExpiredOnDateInDaysOrNever parameter specifies when the encrypted content expires. Valid values are:

- An integer (number of days)
- The value `Never`

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionDoNotForward parameter specifies whether the Do Not Forward template is applied. Valid values are:

- $true: The Do Not Forward template is applied.

- $false: The Do Not Forward template is not applied.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The feature for this parameter is currently in Public Preview, and is not available to everyone.

The EncryptionDoubleKeyEncryptionUrl parameter specifies the Double Key Encryption endpoint URL.

You can't remove the URL after the label has been created; you can only modify it.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionEnabled parameter specifies whether encryption in enabled. Value values are:

- $true: Encryption is enabled.

- $false: Encryption is disabled.

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
This parameter is reserved for internal Microsoft use.

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

### -EncryptionOfflineAccessDays
The EncryptionOfflineAccessDays parameter specifies the number of days that offline access is allowed.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionPromptUser parameter specifies whether to set the label with user defined permission in Word, Excel, and PowerPoint. Valid values are:

- $true: The label is set with user defined permissions in Word, Excel and PowerPoint.

- $false: The label is not set with user defined permissions in Word, Excel and PowerPoint.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false, and when the EncryptionProtectionType parameter value is UserDefined.

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
The EncryptionProtectionType parameter specifies the protection type for encryption. Valid values are:

- Template
- RemoveProtection
- UserDefined

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionRightsDefinitions parameter specifies the rights users have when accessing protected. This parameter uses the syntax `Identity1:Rights1,Rights2;Identity2:Rights3,Rights4`. For example, `john@contoso.com:VIEW,EDIT;microsoft.com:VIEW`.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false and the EncryptionProtectionType parameter value is Template.

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
The EncryptionRightsUrl parameter specifies the URL for hold your own key (HYOK) protection.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The EncryptionTemplateId parameter links an existing Azure RMS template to a new label.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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
The Identity parameter is used to migrate an existing Azure Information Protection label by specifying a GUID value.

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

- Label display names: `{"localeKey":"DisplayName","Settings":[{"Key":"en-us","Value":"English display name"},{"Key":"de-de","Value":"Deutscher Anzeigename"},{"Key":"es-es","Value":"Nombre para mostrar en español"}]}`

- Label Tooltips: `{"localeKey":"Tooltip","Settings":[{"Key":"en-us","Value":"English Tooltip"},{"Key":"de-de",Value":"Deutscher Tooltip"},{"Key":"es-es","Value":"Tooltip Español"}]}`

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
The SiteAndGroupProtectionAllowAccessToGuestUsers parameter enables or disables access to guest users. Valid values are:

- $true: Guest access is enabled.

- $false: Guest access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
The SiteAndGroupProtectionAllowEmailFromGuestUsers parameter enables or disables email from guest users. Valid values are:

- $true: Email from guest users is enabled.

- $false: Email from guest users is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
The SiteAndGroupProtectionAllowFullAccess parameter enables or disables full access. Valid values are:

- $true: Full access is enabled.

- $false: Full access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
The SiteAndGroupProtectionAllowLimitedAccess parameter enables or disables limited access. Valid values are:

- $true: Limited access is enabled.

- $false: Limited access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
The SiteAndGroupProtectionBlockAccess parameter blocks access. Valid values are:

- $true: Access is blocked.

- $false: Access is allowed.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
The SiteAndGroupProtectionEnabled parameter enables or disables the Site and Group Protection action for the label. Valid values are:

- $true: The Site and Group Protection action is enabled.

- $false: The Site and Group Protection action is disabled.

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
The SiteAndGroupProtectionPrivacy parameter specifies the privacy level for the labe. Valid values are:

- Public
- Private

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

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
