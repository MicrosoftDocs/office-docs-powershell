---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy
applicable: Security & Compliance
title: Set-AutoSensitivityLabelPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-AutoSensitivityLabelPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-AutoSensitivityLabelPolicy cmdlet to modify auto-labeling policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Set-AutoSensitivityLabelPolicy [-Identity] <PolicyIdParameter>
 [-AddExchangeLocation <MultiValuedProperty>]
 [-AddOneDriveLocation <MultiValuedProperty>]
 [-AddOneDriveLocationException <MultiValuedProperty>]
 [-AddSharePointLocation <MultiValuedProperty>]
 [-AddSharePointLocationException <MultiValuedProperty>]
 [-ApplySensitivityLabel <String>]
 [-AutoEnableAfter <Timespan>]
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExceptIfOneDriveSharedBy <RecipientIdParameter[]>]
 [-ExceptIfOneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-ExchangeAdaptiveScopes <MultiValuedProperty>]
 [-ExchangeAdaptiveScopesException <MultiValuedProperty>]
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
 [-OneDriveSharedBy <RecipientIdParameter[]>]
 [-OneDriveSharedByMemberOf <RecipientIdParameter[]>]
 [-OverwriteLabel <Boolean>]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-PolicyTemplateInfo <PswsHashtable>]
 [-Priority <System.Int32>]
 [-RemoveExchangeLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocation <MultiValuedProperty>]
 [-RemoveOneDriveLocationException <MultiValuedProperty>]
 [-RemoveSharePointLocation <MultiValuedProperty>]
 [-RemoveSharePointLocationException <MultiValuedProperty>]
 [-SharePointAdaptiveScopes <MultiValuedProperty>]
 [-SharePointAdaptiveScopesException <MultiValuedProperty>]
 [-SpoAipIntegrationEnabled <Boolean>]
 [-StartSimulation <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### TeamLocation
```
Set-AutoSensitivityLabelPolicy [-Identity] <PolicyIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-Force]
 [-Mode <PolicyMode>]
 [-WhatIf]
 [<CommonParameters>]
```

### RetryDistributionParameterSet
```
Set-AutoSensitivityLabelPolicy [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-Mode <PolicyMode>]
 [-RetryDistribution]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AutoSensitivityLabelPolicy -Identity "Main PII" -AddSharePointLocation "https://my.url1","https://my.url2" -AddOneDriveLocation "https://my.url3","https://my.url4"
```

This example adds the specified URLs to the SharePoint Online and OneDrive for Business locations for the autolabeling policy named Main PII without affecting the existing URL values.

## PARAMETERS

### -Identity
The Identity parameter specifies the auto-labeling policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddExchangeLocation
The AddExchangeLocation parameter adds email messages to the policy if they're not already included. The valid value for this parameter is All.

If the policy doesn't already include email messages (in the output of the Get-AutoSensitivityLabelPolicy cmdlet, the ExchangeLocation property value is blank), you can use this parameter in the following procedures:

- If you use `-AddExchangeLocation All` by itself, the policy applies to email for all internal users.

- To include email of specific internal or external users in the policy, use `-AddExchangeLocation All` with the ExchangeSender parameter in the same command. Only email of the specified users is included in the policy.

- To include email of specific group members in the policy, use `-AddExchangeLocation All` with the ExchangeSenderMemberOf parameter in the same command. Only email of members of the specified groups is included in the policy.

- To exclude email of specific internal users from the policy, use `-AddExchangeLocation All` with the ExchangeSenderException parameter in the same command. Only email of the specified users is excluded from the policy.

- To exclude email of specific group members from the policy, use `-AddExchangeLocation All` with the ExchangeSenderMemberOfException parameter in the same command. Only email of members of the specified groups is excluded from the policy.

You can't specify inclusions and exclusions in the same policy.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation
The AddOneDriveLocation parameter specifies the OneDrive for Business sites to add to the list of included sites when you aren't using the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationException
The AddOneDriveLocationException parameter specifies the OneDrive for Business sites to add to the list of excluded sites when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

SharePoint Online sites can't be added to the policy until they have been indexed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationException
The AddSharePointLocationException parameter specifies the SharePoint Online sites to add to the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplySensitivityLabel
The ApplySensitivityLabel parameter selects which label to be used for the policy. This will override the previous label on the policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoEnableAfter
The AutoEnableAfter parameter allows you to automatically turn on the policy after a set time period in simulation with no modifications to the policy. You need to explicitly set this parameter after each policy edit to keep or reset the automatic turn on timeline.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

A valid value is between 1 hour and 25 days. To clear an existing AutoEnableAfter schedule that's associated with a policy, use the value $null.

You must use this parameter with the -StartSimulation parameter.

```yaml
Type: System.TimeSpan
Parameter Sets: Identity
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
Parameter Sets: Identity, TeamLocation
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

### -Enabled
The Enabled parameter enables or disables the policy. Valid values are:

- $true: The policy is enabled. This is the default value.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: Identity, TeamLocation
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedBy
The ExceptIfOneDriveSharedBy parameter specifies the users to exclude from the policy (the sites of the OneDrive for Business user accounts are included in the policy). You identify the users by UPN (laura@contoso.onmicrosoft.com).

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-AutoSensitivityLabelPolicy, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the OneDriveSharedBy parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfOneDriveSharedByMemberOf
{{ Fill ExceptIfOneDriveSharedByMemberOf Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAdaptiveScopes
{{ Fill ExchangeAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAdaptiveScopesException
{{ Fill ExchangeAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSender
The ExchangeSender parameter specifies the users whose email is included in the policy. You specify the users by email address. You can specify internal or external email addresses.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of the Get-AutoSensitivityLabelPolicy cmdlet, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSenderException or ExchangeSenderMemberOfException parameters.

```yaml
Type: SmtpAddress[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderException
The ExchangeSenderException parameter specifies the internal users whose email is excluded from the policy. You identify the users by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of Get-AutoSensitivityLabelPolicy, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSender or ExchangeSenderMemberOf parameters.

```yaml
Type: SmtpAddress[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOf
The ExchangeSenderMemberOf parameter specifies the distribution groups or mail-enabled security groups to include in the policy (email of the group members is included in the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of Get-AutoSensitivityLabelPolicy, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSenderException or ExchangeSenderMemberOfException parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: SmtpAddress[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeSenderMemberOfException
The ExchangeSenderMemberOfException parameter specifies the distribution groups or mail-enabled security groups to exclude from the policy (email of the group members is excluded from the policy). You identify the groups by email address.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

To use this parameter, one of the following statements must be true:

- The policy already includes email messages (in the output of Get-AutoSensitivityLabelPolicy, the ExchangeLocation property value is All).
- Use `-AddExchangeLocation All` in the same command with this parameter.

You can't use this parameter with the ExchangeSender or ExchangeSenderMemberOf parameters.

You can't use this parameter to specify Microsoft 365 Groups.

```yaml
Type: SmtpAddress[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailRightsManagementOwner
The ExternalMailRightsManagementOwner parameter specifies the email address of a user mailbox that's used to encrypt incoming email messages from external senders using RMS.

This parameter works only on Exchange locations, and the policy must apply a label that has an encryption action.

To clear an existing email address, use the value $null.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, TeamLocation
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locations
{{ Fill Locations Description }}

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies the action and notification level of the auto-labeling policy. Valid values are:

- Enable: The policy is enabled for actions and notifications.
- Disable: The policy is disabled.
- TestWithNotifications: Not supported.
- TestWithoutNotifications: An audit mode where no actions are taken, and no notifications are sent (Test mode).

```yaml
Type: PolicyMode
Parameter Sets: (All)
Aliases:
Accepted values: Enable, TestWithNotifications, TestWithoutNotifications, Disable, PendingDeletion
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAdaptiveScopes
{{ Fill OneDriveAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAdaptiveScopesException
{{ Fill OneDriveAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedBy
The OneDriveSharedBy parameter specifies the users to include in the policy (the sites of the OneDrive for Business user accounts are included in the policy). You identify the users by UPN (laura@contoso.onmicrosoft.com).

To use this parameter, one of the following statements must be true:

- The policy already includes OneDrive for Business sites (in the output of Get-AutoSensitivityLabelPolicy, the OneDriveLocation property value is All, which is the default value).
- Use `-AddOneDriveLocation All` in the same command with this parameter.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

You can't use this parameter with the ExceptIfOneDriveSharedBy parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveSharedByMemberOf
{{ Fill OneDriveSharedByMemberOf Description }}

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverwriteLabel
The OverwriteLabel parameter specifies whether to overwrite a manual label. Valid values are:

- $true: Overwrite the manual label.
- $false: Don't overwrite the manual label. This is the default value.

This parameter works only on Exchange locations.

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

### -PolicyRBACScopes
The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTemplateInfo
This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority value for the policy that determines the order of policy processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and policies can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing policies. For example, if there are 5 existing policies:

- Valid priority values for the existing 5 policies are from 0 through 4.
- Valid priority values for a new 6th policy are from 0 through 5.
- The default value for a new 6th policy is 5.

If you modify the priority value of a policy, the position of the policy in the list changes to match the priority value you specify. In other words, if you set the priority value of a policy to the same value as an existing policy, the priority value of the existing policy and all other lower priority policies after it is increased by 1.

```yaml
Type: System.Int32
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter removes email messages from the policy if they're already included. The valid value for this parameter is All.

If the policy already includes email messages (in the output of the Get-AutoSensitivityLabelPolicy cmdlet, the ExchangeLocation property value is All), you can use `-RemoveExchangeLocation All` to prevent the policy from applying to email messages.

You can't use this parameter if email (the value Exchange) is used by any of the associated rules.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation
The RemoveOneDriveLocation parameter specifies the OneDrive for Business sites to remove from the list of included sites when you aren't using the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationException
This RemoveOneDriveLocationException parameter specifies the OneDrive for Business sites to remove from the list of excluded sites when you use the value All for the OneDriveLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationException
The RemoveSharePointLocationException parameter specifies the SharePoint Online sites to remove from the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"<value1>","<value2>",..."<valueX>"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetryDistribution
The RetryDistribution switch redistributes the policy to all OneDrive for Business and SharePoint Online locations. You don't need to specify a value with this switch.

Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch.

**Note**: Because the process of retrying distribution is a significant operation, run it only if necessary and for one policy at a time. It is not intended to be run every time you update a policy. If you run a script to update multiple policies, wait until the policy distribution is successful before running the command again for the next policy.

```yaml
Type: SwitchParameter
Parameter Sets: RetryDistributionParameterSet
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointAdaptiveScopes
{{ Fill SharePointAdaptiveScopes Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointAdaptiveScopesException
{{ Fill SharePointAdaptiveScopesException Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpoAipIntegrationEnabled
The SpoAipIntegrationEnabled parameter enables or disables built-in labeling for supported Office files in SharePoint and OneDrive. Valid values are:

- $true: Users can apply your sensitivity labels in Office for the web. Users see the Sensitivity button on the ribbon so they can apply labels, and they see the name of any applied label on the status bar.
- $false: Users can't apply your sensitivity labels in Office for the web. Also, coauthoring, eDiscovery, Microsoft Purview data loss prevention, search, and other collaborative features don't work for encrypted files.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartSimulation
Use the StartSimulation parameter to restart the simulation for updated results. Valid values are:

- $true: Restart the simulation for updated results. **Any edits to an auto-labeling policy require restarting the simulation by using this value.**
- $false: This is the default value

```yaml
Type: Boolean
Parameter Sets: Identity
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
