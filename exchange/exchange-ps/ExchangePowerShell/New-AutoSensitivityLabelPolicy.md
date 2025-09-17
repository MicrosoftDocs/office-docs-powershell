---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-autosensitivitylabelpolicy
schema: 2.0.0
title: New-AutoSensitivityLabelPolicy
---

# New-AutoSensitivityLabelPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-AutoSensitivityLabelPolicy cmdlet to create auto-labeling policies in your organization. Create auto-labeling policy rules using the New-AutoSensitivityLabelRule cmdlet and associate them with the policy to complete the policy creation.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AutoSensitivityLabelPolicy [-Name] <String> -ApplySensitivityLabel <String>
 [-Comment <String>]
 [-Confirm]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeAdaptiveScopes <MultiValuedProperty>]
 [-ExchangeAdaptiveScopesException <MultiValuedProperty>]
 [-ExchangeLocation <MultiValuedProperty>]
 [-ExchangeSender <SmtpAddress[]>]
 [-ExchangeSenderException <SmtpAddress[]>]
 [-ExchangeSenderMemberOf <SmtpAddress[]>]
 [-ExchangeSenderMemberOfException <SmtpAddress[]>]
 [-ExternalMailRightsManagementOwner <SmtpAddress>]
 [-Force]
 [-Locations <String>]
 [-Mode <PolicyMode>]
 [-OneDriveAdaptiveScopes <MultiValuedProperty>]
 [-OneDriveAdaptiveScopesException <MultiValuedProperty>]
 [-OneDriveLocation <MultiValuedProperty>]
 [-OneDriveLocationException <MultiValuedProperty>]
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-OverwriteLabel <Boolean>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PolicyTemplateInfo <PswsHashtable>]
 [-Priority <System.Int32>]
 [-SharePointAdaptiveScopes <MultiValuedProperty>]
 [-SharePointAdaptiveScopesException <MultiValuedProperty>]
 [-SharePointLocation <MultiValuedProperty>]
 [-SharePointLocationException <MultiValuedProperty>]
 [-UnifiedAuditLogEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-AutoSensitivityLabelPolicy -Name "GlobalPolicy" -Comment "Primary policy" -SharePointLocation "https://my.url","https://my.url2" -OneDriveLocation "https://my.url3","https://my.url4" -Mode TestWithoutNotifications -ApplySensitivityLabel "Test"
```

This example creates an auto-labeling policy named GlobalPolicy for the specified SharePoint and OneDrive locations with the label "Test". The new policy has a descriptive comment and is created in simulation mode.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the auto-labeling policy. If the value contains spaces, enclose the value with quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplySensitivityLabel

> Applicable: Security & Compliance

The ApplySensitivityLabel parameter specifies the label to use for the auto-labeling policy.

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

### -ExceptIfOneDriveSharedBy

> Applicable: Security & Compliance

The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the policy (the sites of the OneDrive user accounts are included in the policy). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedByMemberOf

> Applicable: Security & Compliance

{{ Fill ExceptIfOneDriveSharedByMemberOf Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAdaptiveScopes

> Applicable: Security & Compliance

{{ Fill ExchangeAdaptiveScopes Description }}

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

### -ExchangeAdaptiveScopesException

> Applicable: Security & Compliance

{{ Fill ExchangeAdaptiveScopesException Description }}

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

### -ExchangeLocation

> Applicable: Security & Compliance

The ExchangeLocation parameter specifies whether to include email messages in the policy. The valid value for this parameter is All. If you don't want to include email messages in the policy, don't use this parameter (the default value is blank or $null).

You can use this parameter in the following procedures:

- If you use `-ExchangeLocation All` by itself, the policy applies to email for all internal users.

- To include email of specific internal or external users in the policy, use `-ExchangeLocation All` with the ExchangeSender parameter in the same command. Only email of the specified users is included in the policy.

- To include only email of specific group members in the policy, use `-ExchangeLocation All` with the ExchangeSenderMemberOf parameter in the same command. Only email of members of the specified groups is included in the policy.

- To exclude email of specific internal users from the policy, use `-ExchangeLocation All` with the ExchangeSenderException parameter in the same command. Only email of the specified users is excluded from the policy.

- To exclude only email of specific group members from the policy, use `-ExchangeLocation All` with the ExchangeSenderMemberOfException parameter in the same command. Only email of members of the specified groups is excluded from the policy.

You can't specify inclusions and exclusions in the same policy.

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

### -ExchangeSender

> Applicable: Security & Compliance

The ExchangeSender parameter specifies the users whose email is included in the policy. You identify the users by email address. You can specify internal or external email addresses.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSenderException or ExchangeSenderMemberOfException parameters.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderException

> Applicable: Security & Compliance

The ExchangeSenderException parameter specifies the internal users whose email is excluded from the policy. You identify the users by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSender or ExchangeSenderMemberOf parameters.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOf

> Applicable: Security & Compliance

The ExchangeSenderMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the policy (email of the group members is included in the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSenderException or ExchangeSenderMemberOfException parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOfException

> Applicable: Security & Compliance

The ExchangeSenderMemberOfException parameter specifies the distribution groups or mail-enabled security groups to exclude from the policy (email of the group members is excluded from the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You must use this parameter with the ExchangeLocation parameter.

You can't use this parameter with the ExchangeSender or ExchangeSenderMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailRightsManagementOwner

> Applicable: Security & Compliance

The ExternalMailRightsManagementOwner parameter specifies the email address of a user mailbox that's used to encrypt incoming email messages from external senders using RMS.

This parameter works only on Exchange locations, and the policy must apply a label that has an encryption action.

```yaml
Type: SmtpAddress
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

### -Locations

> Applicable: Security & Compliance

{{ Fill Locations Description }}

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

### -Mode

> Applicable: Security & Compliance

The Mode parameter specifies the action and notification level of the auto-labeling policy. Valid values are:

- Enable: The policy is enabled for actions and notifications. This value is the default.
- Disable: The policy is disabled.
- TestWithNotifications: No actions are taken, but notifications are sent.
- TestWithoutNotifications: An audit mode where no actions are taken, and no notifications are sent.

```yaml
Type: PolicyMode
Parameter Sets: (All)
Aliases:
Accepted values: Enable, TestWithNotifications, TestWithoutNotifications, Disable, PendingDeletion

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAdaptiveScopes

> Applicable: Security & Compliance

{{ Fill OneDriveAdaptiveScopes Description }}

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

### -OneDriveAdaptiveScopesException

> Applicable: Security & Compliance

{{ Fill OneDriveAdaptiveScopesException Description }}

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

### -OneDriveLocation

> Applicable: Security & Compliance

The OneDriveLocation parameter specifies the OneDrive sites to include in the policy. You identify the site by its URL value, or you can use the value All to include all sites.

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

### -OneDriveLocationException

> Applicable: Security & Compliance

This parameter specifies the OneDrive sites to exclude when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

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

### -OneDriveSharedBy

> Applicable: Security & Compliance

The OneDriveSharedBy parameter specifies the users to include in the policy (the sites of the OneDrive user accounts are included in the policy). You identify the users by UPN (`laura@contoso.onmicrosoft.com`).

To use this parameter, OneDrive sites need to be included in the policy (the OneDriveLocation parameter value is All, which is the default value).

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedByMemberOf

> Applicable: Security & Compliance

{{ Fill OneDriveSharedByMemberOf Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverwriteLabel

> Applicable: Security & Compliance

The OverwriteLabel parameter specifies whether to overwrite a manual label. Valid values are:

- $true: Overwrite the manual label.
- $false: Don't overwrite the manual label. This value is the default.

This parameter works only on Exchange locations.

```yaml
Type: Boolean
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

### -PolicyTemplateInfo

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

### -Priority

> Applicable: Security & Compliance

The Priority parameter specifies the priority of the policy. The highest priority policy takes precedence over lower priority policies if two policies are applicable for a file.

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

### -SharePointAdaptiveScopes

> Applicable: Security & Compliance

{{ Fill SharePointAdaptiveScopes Description }}

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

### -SharePointAdaptiveScopesException

> Applicable: Security & Compliance

{{ Fill SharePointAdaptiveScopesException Description }}

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

### -SharePointLocation

> Applicable: Security & Compliance

The SharePointLocation parameter specifies the SharePoint sites to include in the policy. You identify the site by its URL value, or you can use the value All to include all sites.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`. SharePoint sites can't be added to a policy until they have been indexed.

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

This parameter specifies the SharePoint sites to exclude when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

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

### -UnifiedAuditLogEnabled

> Applicable: Security & Compliance

{{ Fill UnifiedAuditLogEnabled Description }}

```yaml
Type: Boolean
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
