---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-labelpolicy
schema: 2.0.0
title: New-LabelPolicy
---

# New-LabelPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-LabelPolicy cmdlet to create sensitivity label policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-LabelPolicy -Name <String> -Labels <MultiValuedProperty>
 [-AdvancedSettings <PswsHashtable>]
 [-Comment <String>]
 [-Confirm]
 [-ExchangeLocation <MultiValuedProperty>]
 [-ExchangeLocationException <MultiValuedProperty>]
 [-Force]
 [-MigrationId <String>]
 [-ModernGroupLocation <MultiValuedProperty>]
 [-ModernGroupLocationException <MultiValuedProperty>]
 [-OneDriveLocation <MultiValuedProperty>]
 [-OneDriveLocationException <MultiValuedProperty>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PublicFolderLocation <MultiValuedProperty>]
 [-Setting <PswsHashtable>]
 [-Settings <PswsHashtable>]
 [-SharePointLocation <MultiValuedProperty>]
 [-SharePointLocationException <MultiValuedProperty>]
 [-SkypeLocation <MultiValuedProperty>]
 [-SkypeLocationException <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-LabelPolicy -Name "Research and Development" -Labels "R and D","R and D Management"
```

This example creates the sensitivity label policy named Research and Development that contains sensitivity labels named R and D and R and D Management.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies the unique name for the policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -Labels

> Applicable: Security & Compliance

The Labels parameter specifies the sensitivity labels that are associated with the policy. You can use any value that uniquely identifies the label. For example:

- Name
- Distinguished name (DN)
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
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

The AdvancedSettings parameter enables client-specific features and capabilities for the sensitivity label policy.

Specify this parameter with the identity (name or GUID) of the policy, with key/value pairs in a [hash table](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_hash_tables). To remove an advanced setting, use the same AdvancedSettings parameter syntax, but specify a null string value.

Some of the settings that you configure with this parameter are supported only by the Microsoft Purview Information Protection client and not by Office apps and services that support built-in labeling. For a list of these, see [Advanced settings for Microsoft Purview Information Protection client](https://learn.microsoft.com/powershell/exchange/client-advanced-settings).

Supported settings for built-in labeling:

- **AttachmentAction**: Unlabeled emails inherit the highest priority label from file attachments. Set the value to **Automatic** (to automatically apply the label) or **Recommended** (as a recommended prompt to the user. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction="Automatic"}`. For more information about this configuration choice, see [Configure label inheritance from email attachments](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#configure-label-inheritance-from-email-attachments).

- **EnableAudit**: Prevent Office apps from sending sensitivity label data to Microsoft 365 auditing solutions. Supported apps: Word, Excel, and PowerPoint on Windows (version 2201+), macOS (version 16.57+), iOS (version 2.57+), and Android (version 16.0.14827+); Outlook on Windows (version 2201+), Outlook on the web, and rolling out to macOS, iOS, and Android. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{EnableAudit="False"}`.

- **EnableRevokeGuiSupport**: Remove the Track & Revoke button from the sensitivity menu in Office clients. Supported apps: Word, Excel, and PowerPoint on Windows (version 2406+). Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{EnableRevokeGuiSupport="False"}`. For more information about this configuration choice, see [Track and revoke document access](https://learn.microsoft.com/purview/track-and-revoke-admin).

- **DisableMandatoryInOutlook**: Outlook apps that support this setting exempt Outlook messages from mandatory labeling. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{DisableMandatoryInOutlook="True"}`. For more information about this configuration choice, see [Outlook-specific options for default label and mandatory labeling](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling).

- **DisableShowSensitiveContent**: For Office apps that highlight the sensitive content that caused a label to be recommended, turn off these highlights and corresponding indications about the sensitive content. For more information, see [Sensitivity labels are automatically applied or recommended for your files and emails in Office](https://support.microsoft.com/office/sensitivity-labels-are-automatically-applied-or-recommended-for-your-files-and-emails-in-office-622e0d9c-f38c-470a-bcdb-9e90b24d71a1). Supported apps: Word for Windows (version 2311+). Example: `Set-LabelPolicy -Identity Global -AdvancedSettings @{DisableShowSensitiveContent="True"}`

- **OutlookDefaultLabel**: Outlook apps that support this setting apply a default label, or no label. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{OutlookDefaultLabel="None"}`. For more information about this configuration choice, see [Outlook-specific options for default label and mandatory labeling](https://learn.microsoft.com/purview/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling).

- **TeamworkMandatory**: Outlook and Teams apps that support this setting can enable or disable mandatory labeling for meetings. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{TeamworkMandatory="True"}`. For more information about labeling meetings, see [Use sensitivity labels to protect calendar items, Teams meetings, and chat](https://learn.microsoft.com/purview/sensitivity-labels-meetings).

- **teamworkdefaultlabelid**: Outlook and Teams apps that support this setting apply a default label, or no label for meetings. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{teamworkdefaultlabelid="General"}`. For more information about labeling meetings, see [Use sensitivity labels to protect calendar items, Teams meetings, and chat](https://learn.microsoft.com/purview/sensitivity-labels-meetings).

- **HideBarByDefault**: For Office apps that support the sensitivity bar, don't display the sensitivity label name on the window bar title so that there's more space to display long file names. Just the label icon and color (if configured) will be displayed. Users can't revert this setting in the app. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{HideBarByDefault="True"}`

Additionally, for Power BI:

- **powerbimandatory**: Mandatory labeling for Power BI. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{powerbimandatory="true"}`. For more information about this configuration choice, see [Mandatory label policy for Power BI](https://learn.microsoft.com/power-bi/admin/service-security-sensitivity-label-mandatory-label-policy).

- **powerbidefaultlabelid**: Default label for Power BI content. Example: `New-LabelPolicy -Identity Global -AdvancedSettings @{powerbidefaultlabelid="General"}`. For more information about this configuration choice, see [Default label policy for Power BI](https://learn.microsoft.com/power-bi/admin/service-security-sensitivity-label-default-label-policy).

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

### -ExchangeLocation

> Applicable: Security & Compliance

The ExchangeLocation parameter specifies the mailboxes to include in the policy. A valid value is a mailbox.

To specify the mailbox, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

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

### -ExchangeLocationException

> Applicable: Security & Compliance

The ExchangeLocationException parameter specifies the mailboxes to exclude when you use the value All for the ExchangeLocation parameter. A valid value is a mailbox.

To specify the mailbox, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

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

### -Force

> Applicable: Security & Compliance

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -ModernGroupLocation

> Applicable: Security & Compliance

The ModernGroupLocation parameter specifies the Microsoft 365 Groups to include in the policy. To identify the Microsoft 365 Group, you must use the primary SMTP address.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModernGroupLocationException

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocation

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

### -OneDriveLocationException

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

### -PolicyRBACScopes

> Applicable: Security & Compliance

The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

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

### -PublicFolderLocation

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

### -SharePointLocation

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

### -SharePointLocationException

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

### -SkypeLocation

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

### -SkypeLocationException

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
