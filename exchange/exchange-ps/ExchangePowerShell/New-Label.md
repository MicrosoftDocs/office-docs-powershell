---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/policy-and-compliance/new-label
schema: 2.0.0
title: New-Label
---

# New-Label

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-Label cmdlet to create sensitivity labels in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
 [-ApplyDynamicWatermarkingEnabled <System.Boolean>]
 [-ApplyWaterMarkingEnabled <System.Boolean>]
 [-ApplyWaterMarkingFontColor <String>]
 [-ApplyWaterMarkingFontName <String>]
 [-ApplyWaterMarkingFontSize <System.Int32>]
 [-ApplyWaterMarkingLayout <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+WaterMarkingLayout>]
 [-ApplyWaterMarkingText <String>]
 [-ColumnAssetCondition <String>]
 [-Comment <String>]
 [-Conditions <MultiValuedProperty>]
 [-Confirm]
 [-ContentType <MipLabelContentType>]
 [-DefaultContentLabel <String>]
 [-DynamicWatermarkDisplay <String>]
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
 [-EncryptionRightsDefinitions <EncryptionRightsDefinitionsParameter>]
 [-EncryptionRightsUrl <String>]
 [-EncryptionTemplateId <String>]
 [-Identity <MasterIdParameter>]
 [-IsLabelGroup]
 [-LabelActions <MultiValuedProperty>]
 [-LocaleSettings <MultiValuedProperty>]
 [-MigrationId <String>]
 [-ParentId <ComplianceRuleIdParameter>]
 [-SchematizedDataCondition <String>]
 [-Setting <PswsHashtable>]
 [-Settings <PswsHashtable>]
 [-SiteAndGroupProtectionAllowAccessToGuestUsers <System.Boolean>]
 [-SiteAndGroupProtectionAllowEmailFromGuestUsers <System.Boolean>]
 [-SiteAndGroupProtectionAllowFullAccess <System.Boolean>]
 [-SiteAndGroupProtectionAllowLimitedAccess <System.Boolean>]
 [-SiteAndGroupProtectionBlockAccess <System.Boolean>]
 [-SiteAndGroupProtectionEnabled <System.Boolean>]
 [-SiteAndGroupProtectionLevel <SiteAndGroupProtectionLevelParameter>]
 [-SiteAndGroupProtectionPrivacy <Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+GroupProtectionPrivacy>]
 [-SiteExternalSharingControlType <Microsoft.Office.CompliancePolicy.Tasks.SiteExternalSharingControlType>]
 [-TeamsAllowedPresenters <Microsoft.Office.CompliancePolicy.PolicyConfiguration.AllowedPresenters>]
 [-TeamsAllowMeetingChat <Microsoft.Office.CompliancePolicy.PolicyConfiguration.MeetingChatMode>]
 [-TeamsAllowPrivateTeamsToBeDiscoverableUsingSearch <System.Boolean>]
 [-TeamsBypassLobbyForDialInUsers <System.Boolean>]
 [-TeamsChannelProtectionEnabled <System.Boolean>]
 [-TeamsChannelSharedWithExternalTenants <System.Boolean>]
 [-TeamsChannelSharedWithPrivateTeamsOnly <System.Boolean>]
 [-TeamsChannelSharedWithSameLabelOnly <System.Boolean>]
 [-TeamsCopyRestrictionEnforced <System.Boolean>]
 [-TeamsDetectSensitiveContentDuringScreenSharingEnabled System.Boolean>]
 [-TeamsDisableLobby <System.Boolean>]
 [-TeamsEndToEndEncryptionEnabled <System.Boolean>]
 [-TeamsLobbyBypassScope <Microsoft.Office.CompliancePolicy.PolicyConfiguration.LobbyBypassScope>]
 [-TeamsLobbyRestrictionEnforced <System.Boolean>]
 [-TeamsPresentersRestrictionEnforced <System.Boolean>]
 [-TeamsProtectionEnabled <System.Boolean>]
 [-TeamsRecordAutomatically <System.Boolean>]
 [-TeamsVideoWatermark <Microsoft.Office.CompliancePolicy.PolicyConfiguration.WaterMarkProtectionValues>]
 [-TeamsWhoCanRecord <Microsoft.Office.CompliancePolicy.PolicyConfiguration.WhoCanRecordOptions>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-Label -DisplayName "My New label" -Name "New Label"
```

This example create a new label named "New Label" with a display name "My New Label".

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies the unique name for the sensitivity label. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Security & Compliance

The DisplayName parameter specifies the display name for the sensitivity label. The display name appears in any client that supports sensitivity labels. This includes Word, Excel, PowerPoint, Outlook, SharePoint, Teams, and Power BI.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tooltip

> Applicable: Security & Compliance

The ToolTip parameter specifies the default tooltip and sensitivity label description that's seen by users. It the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdvancedSettings

> Applicable: Security & Compliance

The AdvancedSettings parameter enables specific features and capabilities for a sensitivity label.

Specify this parameter with the identity (name or GUID) of the sensitivity label, with key/value pairs in a [hash table](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_hash_tables). To remove an advanced setting, use the same AdvancedSettings parameter syntax, but specify a null string value.

Some of the settings that you configure with this parameter are supported only by the Microsoft Purview Information Protection client and not by Office apps and services that support built-in labeling. For a list of these, see [Advanced settings for Microsoft Purview Information Protection client](https://learn.microsoft.com/powershell/exchange/client-advanced-settings).

Supported settings for built-in labeling:

- **BlockContentAnalysisServices**: Specifies a privacy setting to allow or prevent content in Word, Excel, PowerPoint, and Outlook from being sent to Microsoft for content analysis. Available values are True, and False (the default). This setting affects services such as data loss prevention policy tips, automatic and recommended labeling, and Microsoft Copilot for Microsoft 365. Example: `New-Label -Identity Confidential -AdvancedSettings @{BlockContentAnalysisServices="True"}`. For more information, see [Prevent some connected experiences that analyze content](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#prevent-some-connected-experiences-that-analyze-content).

- **Color**: Specifies a label color as a hex triplet code for the red, green, and blue (RGB) components of the color. Example: `New-Label -DisplayName "General" -Name "General" -Tooltip "Business data that is not intended for public consumption." -AdvancedSettings @{color="#40e0d0"}`. For more information, see [Configuring custom colors by using PowerShell](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#configuring-custom-colors-by-using-powershell).

- **DefaultSharingScope**: Specifies the default sharing link type for a site when the label scope includes **Groups & sites**, and the default sharing link type for a document when the label scope includes **Files & emails**. Available values are SpecificPeople, Organization, and Anyone. Example: `New-Label DisplayName "General" -Name "General" -Tooltip "Business data that is not intended for public consumption." -AdvancedSettings @{DefaultSharingScope="SpecificPeople"}`. For more information, see [Use sensitivity labels to configure the default sharing link type for sites and documents in SharePoint and OneDrive](https://learn.microsoft.com/purview/sensitivity-labels-default-sharing-link).

- **DefaultShareLinkPermission**: Specifies the permissions for the sharing link for a site when the label scope includes **Groups & sites**, and the permissions for the sharing link for a document when the label scope includes **Files & emails**. Available values are View and Edit. Example: `New-Label DisplayName "General" -Name "General" -Tooltip "Business data that is not intended for public consumption." -AdvancedSettings @{DefaultShareLinkPermission="Edit"}`. For more information, see [Use sensitivity labels to configure the default sharing link type for sites and documents in SharePoint and OneDrive](https://learn.microsoft.com/purview/sensitivity-labels-default-sharing-link).

- **DefaultShareLinkToExistingAccess**: Specifies whether to override *DefaultSharingScope* and *DefaultShareLinkPermission* to instead set the default sharing link type to people with existing access with their existing permissions. Example: `New-Label DisplayName "General" -Name "General" -Tooltip "Business data that is not intended for public consumption." -AdvancedSettings @{DefaultShareLinkToExistingAccess="True"}`. For more information, see [Use sensitivity labels to configure the default sharing link type for sites and documents in SharePoint and OneDrive](https://learn.microsoft.com/purview/sensitivity-labels-default-sharing-link).

- **DefaultSubLabelId**: Specifies a default sublabel to be applied automatically when a user selects a parent label in Office apps. Example: `New-Label -DisplayName "Confidential" -Name "Confidential" -Tooltip "Confidential data that requires protection, which allows all employees full permissions. Data owners can track and revoke content." -AdvancedSettings @{DefaultSubLabelId="8faca7b8-8d20-48a3-8ea2-0f96310a848e"}`. For more information, see [Specify a default sublabel for a parent label](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#specify-a-default-sublabel-for-a-parent-label).

- **MembersCanShare**: For a container label, specifies how members can share for a SharePoint site. Available values are MemberShareAll, MemberShareFileAndFolder, and MemberShareNone. Example: `New-Label -DisplayName "General" -Name "General" -Tooltip "Business data that is not intended for public consumption." -AdvancedSettings @{MembersCanShare="MemberShareFileAndFolder"}`. For more information, see [Configure site sharing permissions by using PowerShell advanced settings](https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites#configure-site-sharing-permissions-by-using-powershell-advanced-settings).

- **SMimeEncrypt**: Specifies S/MIME encryption for Outlook. Available values are True, and False (the default). Example: `New-Label DisplayName "Confidential" -Name "Confidential" -Tooltip "Sensitive business data that could cause damage to the business if shared with unauthorized people." -AdvancedSettings @{SMimeEncrypt="True"}`. For more information, see [Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook).

- **SMimeSign**: Specifies S/MIME digital signature for Outlook. Available values are True, and False (the default). Example: `New-Label DisplayName "Confidential" -Name "Confidential" -Tooltip "Sensitive business data that could cause damage to the business if shared with unauthorized people." -AdvancedSettings @{SMimeSign="True"}`. For more information, see [Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook).

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterAlignment

> Applicable: Security & Compliance

The ApplyContentMarkingFooterAlignment parameter specifies the footer alignment. Valid values are:

- Left
- Center
- Right

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterEnabled

> Applicable: Security & Compliance

The ApplyContentMarkingFooterEnabled parameter enables or disables the Apply Content Marking Footer action for the label. Valid values are:

- $true: The Apply Content Marking Footer action is enabled.
- $false: The Apply Content Marking Footer action is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterFontColor

> Applicable: Security & Compliance

The ApplyContentMarkingFooterFontColor parameter specifies the color of the footer text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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

### -ApplyContentMarkingFooterFontName

> Applicable: Security & Compliance

The ApplyContentMarkingFooterFontName parameter specifies the font of the footer text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

This parameter is supported only by the Azure Information Protection unified labeling client and not by Office apps and services that support built-in labeling.

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

### -ApplyContentMarkingFooterFontSize

> Applicable: Security & Compliance

The ApplyContentMarkingFooterFontSize parameter specifies the font size (in points) of the footer text.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterMargin

> Applicable: Security & Compliance

The ApplyContentMarkingFooterMargin parameter specifies the size (in points) of the footer margin.

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

**Note**: In Microsoft Word and PowerPoint, the specified value is used as a bottom margin and left margin or right margin for left-aligned or right-aligned content marks. A minimum value of 15 points is required. Word also adds a constant offset of 5 points to the left margin for left-aligned content marks, or to the right margin for right-aligned content marks.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingFooterText

> Applicable: Security & Compliance

The ApplyContentMarkingFooterText parameter specifies the footer text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyContentMarkingFooterEnabled parameter value is either $true or $false.

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

### -ApplyContentMarkingHeaderAlignment

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderAlignment parameter specifies the header alignment. Valid values are:

- Left
- Center
- Right

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+ContentAlignment
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderEnabled

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderEnabled parameter enables or disables the Apply Content Marking Header action for the label. Valid values are:

- $true: The Apply Content Marking Header action is enabled.
- $false: The Apply Content Marking Header action is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderFontColor

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderFontColor parameter specifies the color of the header text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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

### -ApplyContentMarkingHeaderFontName

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderFontName parameter specifies the font of the header text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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

### -ApplyContentMarkingHeaderFontSize

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderFontSize parameter specifies the font size (in points) of the header text.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderMargin

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderMargin parameter specifies the size (in points) of the header margin.

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

**Note**: In Microsoft Word and PowerPoint, the specified value is used as a top margin and left margin or right margin for left-aligned or right-aligned content marks. A minimum value of 15 points is required. Word also adds a constant offset of 5 points to the left margin for left-aligned content marks, or to the right margin for right-aligned content marks.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyContentMarkingHeaderText

> Applicable: Security & Compliance

The ApplyContentMarkingHeaderText parameter specifies the header text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyContentMarkingHeaderEnabled parameter value is either $true or $false.

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

### -ApplyDynamicWatermarkingEnabled

> Applicable: Security & Compliance

**Note**: This parameter is Generally Available only for labels with admin-defined permissions. Support for label with user-defined permissions is currently in Public Preview, isn't available in all organizations, and is subject to change.

The ApplyDynamicWatermarkingEnabled parameter enables dynamic watermarking for a specific label that applies encryption. Valid values are:

- $true: Enables dynamic watermarking for a specific label.
- $false: Disables dynamic watermarking for a specific label.

You set the watermark text with the DynamicWatermarkDisplay parameter. For more information about using dynamic watermarks for supported apps, see [Dynamic watermarks](https://learn.microsoft.com/purview/encryption-sensitivity-labels#dynamic-watermarks).

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingEnabled

> Applicable: Security & Compliance

The ApplyWaterMarkingEnabled parameter enables or disables the Apply Watermarking Header action for the label. Valid values are:

- $true: The Apply Watermarking Header action is enabled.
- $false: The Apply Watermarking Header action is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingFontColor

> Applicable: Security & Compliance

The ApplyWaterMarkingFontColor parameter specifies the color of the watermark text. This parameter accepts a hexadecimal color code value in the format `#xxxxxx`. The default value is `#000000`.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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

### -ApplyWaterMarkingFontName

> Applicable: Security & Compliance

The ApplyWaterMarkingFontName parameter specifies the font of the watermark text. If the value contains spaces, enclose the value in quotation marks ("). For example `"Courier New"`.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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

### -ApplyWaterMarkingFontSize

> Applicable: Security & Compliance

The ApplyWaterMarkingFontSize parameter specifies the font size (in points) of the watermark text.

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingLayout

> Applicable: Security & Compliance

The ApplyWaterMarkingLayout parameter specifies the watermark alignment. Valid values are:

- Horizontal
- Diagonal

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+WaterMarkingLayout
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyWaterMarkingText

> Applicable: Security & Compliance

The ApplyWaterMarkingText parameter specifies the watermark text. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the ApplyWaterMarkingEnabled parameter value is either $true or $false.

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

### -ColumnAssetCondition

> Applicable: Security & Compliance

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

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Conditions

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MulitValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentType

> Applicable: Security & Compliance

The ContentType parameter specifies where the sensitivity label can be applied. Valid values are:

- File
- Email
- Site
- UnifiedGroup
- PurviewAssets
- Teamwork
- SchematizedData

Values can be combined, for example: "File, Email, PurviewAssets".

```yaml
Type: MipLabelContentType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultContentLabel

> Applicable: Security & Compliance

The DefaultContentLabel specifies a label that can be automatically applied to meetings created in a labeled Teams channel.

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

### -DynamicWatermarkDisplay

> Applicable: Security & Compliance

**Note**: This parameter is Generally Available only for labels with admin-defined permissions. Support for label with user-defined permissions is currently in Public Preview, isn't available in all organizations, and is subject to change.

The DynamicWatermarkDisplay parameter specifies the watermark text to display for a given label. This parameter supports text and the following special tokens:

- `${Consumer.PrincipalName}`: Required. The value is the user principal name (UPN) of the user.
- `${Device.DateTime}`: Optional. The value is current date/time of the device used to view the document.

This parameter is meaningful only when the ApplyDynamicWatermarkingEnabled parameter value is $true.

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

### -EncryptionAipTemplateScopes

> Applicable: Security & Compliance

The EncryptionAipTemplateScopes parameter specifies that the label is still published and usable in the AIP classic client. An example value is `"['allcompany@labelaction.onmicrosoft.com','admin@labelaction.onmicrosoft.com']"`.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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

### -EncryptionContentExpiredOnDateInDaysOrNever

> Applicable: Security & Compliance

The EncryptionContentExpiredOnDateInDaysOrNever parameter specifies when the encrypted content expires. Valid values are:

- An integer (number of days)
- The value `Never`

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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

### -EncryptionDoNotForward

> Applicable: Security & Compliance

The EncryptionDoNotForward parameter specifies whether the Do Not Forward template is applied. Valid values are:

- $true: The Do Not Forward template is applied.
- $false: The Do Not Forward template is not applied.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionDoubleKeyEncryptionUrl

> Applicable: Security & Compliance

The feature for this parameter is currently in Public Preview, and is not available to everyone.

The EncryptionDoubleKeyEncryptionUrl parameter specifies the Double Key Encryption endpoint URL.

You can't remove the URL after the label is created; you can only modify it.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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

### -EncryptionEnabled

> Applicable: Security & Compliance

The EncryptionEnabled parameter specifies whether encryption in enabled. Valid values are:

- $true: Encryption is enabled.
- $false: Encryption is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionEncryptOnly

> Applicable: Security & Compliance

The EncryptionEncryptOnly parameter specifies whether the encrypt-only template is applied. Valid values are:

- $true: The encrypt-only template is applied.
- $false: The encrypt-only template is not applied.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionLinkedTemplateId

> Applicable: Security & Compliance

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

### -EncryptionOfflineAccessDays

> Applicable: Security & Compliance

The EncryptionOfflineAccessDays parameter specifies the number of days that offline access is allowed.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionPromptUser

> Applicable: Security & Compliance

The EncryptionPromptUser parameter specifies whether to set the label with user defined permission in Word, Excel, and PowerPoint. Valid values are:

- $true: The label is set with user defined permissions in Word, Excel and PowerPoint.
- $false: The label is not set with user defined permissions in Word, Excel and PowerPoint.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false, and when the EncryptionProtectionType parameter value is UserDefined.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionProtectionType

> Applicable: Security & Compliance

The EncryptionProtectionType parameter specifies the protection type for encryption. Valid values are:

- Template
- RemoveProtection
- UserDefined

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+SupportedProtectionType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRightsDefinitions

> Applicable: Security & Compliance

The EncryptionRightsDefinitions parameter specifies the rights users have when accessing protected. This parameter uses the syntax `Identity1:Rights1,Rights2;Identity2:Rights3,Rights4`. For example, `john@contoso.com:VIEW,EDIT;microsoft.com:VIEW`.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false and the EncryptionProtectionType parameter value is Template.

```yaml
Type: EncryptionRightsDefinitionsParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRightsUrl

> Applicable: Security & Compliance

The EncryptionRightsUrl parameter specifies the URL for hold your own key (HYOK) protection.

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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

### -EncryptionTemplateId

> Applicable: Security & Compliance

The EncryptionTemplateId parameter lets you convert an existing protection template from Azure Information Protection to a new sensitivity label. Specify the template by its ID that you can identify by running the [Get-AipServiceTemplate](https://learn.microsoft.com/powershell/module/aipservice/get-aipservicetemplate) cmdlet from the [AIPService PowerShell module](https://learn.microsoft.com/powershell/module/aipservice).

This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false.

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

### -Identity

> Applicable: Security & Compliance

The Identity parameter is used to migrate an existing Azure Information Protection label by specifying a GUID value.

```yaml
Type: MasterIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsLabelGroup

> Applicable: Security & Compliance

{{ Fill IsLabelGroup Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelActions

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

### -LocaleSettings

> Applicable: Security & Compliance

The LocaleSettings parameter specifies one or more localized label names or label Tooltips in different languages. Regions include all region codes supported in Office Client applications. Valid values use the following syntax:

- Label display names: `{"localeKey":"DisplayName","Settings":[{"Key":"en-us","Value":"English display name"},{"Key":"de-de","Value":"Deutscher Anzeigename"},{"Key":"es-es","Value":"Nombre para mostrar en español"}]}`
- Label Tooltips: `{"localeKey":"Tooltip","Settings":[{"Key":"en-us","Value":"English Tooltip"},{"Key":"de-de",Value":"Deutscher Tooltip"},{"Key":"es-es","Value":"Tooltip Español"}]}`

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

### -MigrationId

> Applicable: Security & Compliance

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

### -ParentId

> Applicable: Security & Compliance

The ParentId parameter specifies the parent label that you want this label to be under (a sublabel). You can use any value that uniquely identifies the parent sensitivity label. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchematizedDataCondition

> Applicable: Security & Compliance

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

### -Setting

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Settings

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowAccessToGuestUsers

> Applicable: Security & Compliance

The SiteAndGroupProtectionAllowAccessToGuestUsers parameter enables or disables access to guest users. Valid values are:

- $true: Guest access is enabled.
- $false: Guest access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowEmailFromGuestUsers

> Applicable: Security & Compliance

The SiteAndGroupProtectionAllowEmailFromGuestUsers parameter enables or disables email from guest users. Valid values are:

- $true: Email from guest users is enabled.
- $false: Email from guest users is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowFullAccess

> Applicable: Security & Compliance

The SiteAndGroupProtectionAllowFullAccess parameter enables or disables full access. Valid values are:

- $true: Full access is enabled.
- $false: Full access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionAllowLimitedAccess

> Applicable: Security & Compliance

The SiteAndGroupProtectionAllowLimitedAccess parameter enables or disables limited access. Valid values are:

- $true: Limited access is enabled.
- $false: Limited access is disabled.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionBlockAccess

> Applicable: Security & Compliance

The SiteAndGroupProtectionBlockAccess parameter blocks access. Valid values are:

- $true: Access is blocked.
- $false: Access is allowed.

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionEnabled

> Applicable: Security & Compliance

The SiteAndGroupProtectionEnabled parameter enables or disables the Site and Group Protection action for the label. Valid values are:

- $true: The Site and Group Protection action is enabled.
- $false: The Site and Group Protection action is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionLevel

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: SiteAndGroupProtectionLevelParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteAndGroupProtectionPrivacy

> Applicable: Security & Compliance

The SiteAndGroupProtectionPrivacy parameter specifies the privacy level for the labe. Valid values are:

- Public
- Private

This parameter is meaningful only when the SiteAndGroupProtectionEnabled parameter value is $true or $false.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FlattenLabelActionUtils+GroupProtectionPrivacy
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteExternalSharingControlType

> Applicable: Security & Compliance

The SiteExternalSharingControlType parameter specifies the external user sharing setting for the label. Valid values are:

- ExternalUserAndGuestSharing
- ExternalUserSharingOnly
- ExistingExternalUserSharingOnly
- Disabled

These correspond to the following settings through the admin center:

- Anyone
- New and Existing Guests
- Existing Guests
- Only people in your organization

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.SiteExternalSharingControlType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsAllowedPresenters

> Applicable: Security & Compliance

The TeamsAllowedPresenters parameter controls who can present in Teams meetings. Valid values are:

- Everyone
- Organization
- Organizer
- RoleIsPresenter
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.AllowedPresenters
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsAllowMeetingChat

> Applicable: Security & Compliance

The TeamsAllowMeetingChat parameter controls whether chat is available in Teams meetings. Valid values are:

- Enabled
- Disabled
- Limited: Chat is available only for the duration of the call.
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.MeetingChatMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsAllowPrivateTeamsToBeDiscoverableUsingSearch

> Applicable: Security & Compliance

{{ Fill TeamsAllowPrivateTeamsToBeDiscoverableUsingSearch Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsBypassLobbyForDialInUsers

> Applicable: Security & Compliance

The TeamsBypassLobbyForDialInUsers parameter controls the lobby experience for dial-in users who join Teams meetings. Valid values are:

- $true: Dial in users bypass the lobby when joining Teams meetings.
- $false: Dial in users don't bypass the lobby when joining Teams meetings.
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsChannelProtectionEnabled

> Applicable: Security & Compliance

{{ Fill TeamsChannelProtectionEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsChannelSharedWithExternalTenants

> Applicable: Security & Compliance

{{ Fill TeamsChannelSharedWithExternalTenants Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsChannelSharedWithPrivateTeamsOnly

> Applicable: Security & Compliance

{{ Fill TeamsChannelSharedWithPrivateTeamsOnly Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsChannelSharedWithSameLabelOnly

> Applicable: Security & Compliance

{{ Fill TeamsChannelSharedWithSameLabelOnly Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsCopyRestrictionEnforced

> Applicable: Security & Compliance

The TeamsCopyRestrictionEnforced parameter controls whether chat messages in Teams meetings can be copied to the clipboard. Valid values are:

- $true: Chat messages can be copied to the clipboard.
- $false: Chat messages can't be copied to the clipboard.

The value $null (blank) allows users to configure this setting in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsDetectSensitiveContentDuringScreenSharingEnabled

> Applicable: Security & Compliance

{{ Fill TeamsDetectSensitiveContentDuringScreenSharingEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsDisableLobby

> Applicable: Security & Compliance

{{ Fill TeamsDisableLobby Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsEndToEndEncryptionEnabled

> Applicable: Security & Compliance

The TeamsEndToEndEncryptionEnabled parameter controls video stream encryption in Teams meetings. Valid values are:

- $true: Video stream encryption is enabled.
- $false: Video stream encryption isn't enabled.
- $null (blank): Users configure this setting themselves in the Teams app.

The value $null (blank) allows users to configure this setting in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsLobbyBypassScope

> Applicable: Security & Compliance

The TeamsLobbyBypassScope parameter controls who bypasses the lobby when joining Teams meetings. Valid values are:

- Everyone
- Invited
- Organization
- OrganizationAndFederated
- OrganizationExcludingGuests
- Organizer
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.LobbyBypassScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsLobbyRestrictionEnforced

> Applicable: Security & Compliance

The TeamsLobbyRestrictionEnforced parameter controls whether participants bypass the lobby when joining Teams meetings. Valid values are:

- $true: Users bypass the lobby when joining Teams meetings.
- $false: Users don't bypass the lobby when joining Teams meetings.
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsPresentersRestrictionEnforced

> Applicable: Security & Compliance

The TeamsPresentersRestrictionEnforced parameter controls whether presenter restrictions are enabled in Teams meetings. Valid values are:

- $true: Presenter restrictions are enabled in Teams meetings.
- $false: Presenter restrictions aren't enabled in Teams meetings.
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsProtectionEnabled

> Applicable: Security & Compliance

The TeamsProtectionEnabled parameter controls whether Teams protection is enabled in Teams meetings. Valid values are:

- $true: Teams protection is enabled in Teams meetings.
- $false: Teams protection is not enabled in Teams meetings.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsRecordAutomatically

> Applicable: Security & Compliance

The TeamsRecordAutomatically parameter controls whether Teams meetings are automatically recorded after they start. Valid values are:

- $true: Teams meetings are automatically recorded after they start.
- $false: Teams meetings are not automatically recorded.
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsVideoWatermark

> Applicable: Security & Compliance

The TeamsVideoWatermark parameter controls whether a watermark is shown in Teams meetings. Valid values are:

- None
- EnabledForContentSharing
- EnabledForVideo
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.WaterMarkProtectionValues
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsWhoCanRecord

> Applicable: Security & Compliance

The TeamsWhoCanRecord parameter controls who can record Teams meetings. Valid values are:

- Organizer
- Coorganizers
- Presenters
- $null (blank): Users configure this setting themselves in the Teams app.

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.WhoCanRecordOptions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
