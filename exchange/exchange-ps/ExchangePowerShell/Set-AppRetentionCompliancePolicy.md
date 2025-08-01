---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-appretentioncompliancepolicy
schema: 2.0.0
title: Set-AppRetentionCompliancePolicy
---

# Set-AppRetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-AppRetentionCompliancePolicy to modify app retention compliance policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-AddExchangeLocation <MultiValuedProperty>]
 [-AddExchangeLocationException <MultiValuedProperty>]
 [-AddModernGroupLocation <MultiValuedProperty>]
 [-AddModernGroupLocationException <MultiValuedProperty>]
 [-Applications <String[]>]
 [-Comment <String>]
 [-Confirm]
 [-DeletedResources <String>]
 [-Enabled <Boolean>]
 [-Force]
 [-PolicyRBACScopes <MultiValuedProperty>]
 [-RemoveExchangeLocation <MultiValuedProperty>]
 [-RemoveExchangeLocationException <MultiValuedProperty>]
 [-RemoveModernGroupLocation <MultiValuedProperty>]
 [-RemoveModernGroupLocationException <MultiValuedProperty>]
 [-RestrictiveRetention <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### AdaptiveScopeLocation
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-AddAdaptiveScopeLocation <MultiValuedProperty>]
 [-Applications <String[]>]
 [-Comment <String>]
 [-Confirm]
 [-DeletedResources <String>]
 [-Enabled <Boolean>]
 [-Force]
 [-RemoveAdaptiveScopeLocation <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

### DisableRestrictiveRetentionParameterSet
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-DeletedResources <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### InformationBarrierDefault
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-DeletedResources <String>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentsDefault
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-DeletedResources <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### RetryDistributionParameterSet
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-Confirm]
 [-RetryDistribution]
 [-WhatIf]
 [<CommonParameters>]
```

### TeamLocation
```
Set-AppRetentionCompliancePolicy [-Identity] <PolicyIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-DeletedResources <String>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
\*-AppRetentionCompliance\* cmdlets are used for policies with adaptive policy scopes and all static policies in the locations described in [Retention cmdlets for newer locations](https://learn.microsoft.com/purview/retention-cmdlets#retention-cmdlets-for-newer-locations). You can only set the list of included or excluded scopes for all included workloads, which means you likely need to create one policy per workload.

\*-RetentionCompliance\* cmdlets continue to primarily support the locations described in [Retention cmdlets for older locations](https://learn.microsoft.com/purview/retention-cmdlets#retention-cmdlets-for-older-locations).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AppRetentionCompliancePolicy -Identity "Regulation 563 Marketing" -Applications "User:MicrosoftTeams","Group:MicrosoftTeams,VivaEngage" -AddExchangeLocation "Scott Smith" -Comment "Added new counsel, 9/9/21"
```

This example adds a new user to the existing static scope retention policy named Regulation 563 Marketing that's set up for Teams private channels messages.

### Example 2
```powershell
$stringJson = @"
[{
     'EmailAddress': 'SalesUser@contoso.onmicrosoft.com'
}]
"@
Set-AppRetentionCompliancePolicy -Identity "Teams Private Channel Retention Policy" -AddExchangeLocationException "SalesUser@contoso.onmicrosoft.com" -DeletedResources $stringJson
```
This example excludes the specified soft-deleted mailbox or mail user from the retention policy configured for Teams private channel messages. You can identify the deleted resources using the mailbox or mail user's email address.

**IMPORTANT**: Before you run this command, make sure you read the Caution information for the [DeletedResources parameter](#-deletedresources) about duplicate SMTP addresses.

Policy exclusions must remain within the supported limits for retention policies. For more information, see [Limits for Microsoft 365 retention policies and retention label policies](https://learn.microsoft.com/purview/retention-limits#maximum-number-of-items-per-policy).

### Example 3
```powershell
$stringJson = @"
[{
     'EmailAddress': 'SalesUser1@contoso.onmicrosoft.com'
},
{
     'EmailAddress': 'SalesUser2@contoso.onmicrosoft.com'
}]
"@
Set-AppRetentionCompliancePolicy -Identity "Teams Private Chat Retention Policy" -AddExchangeLocationException "SalesUser1@contoso.onmicrosoft.com", "SalesUser2@contoso.onmicrosoft.com" -DeletedResources $stringJson
```

This example is similar to Example 2, except multiple deleted resources are specified.

**IMPORTANT**: Before you run this command, make sure you read the Caution information for the [DeletedResources parameter](#-deletedresources) about duplicate SMTP addresses.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the app retention compliance policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RetryDistribution

> Applicable: Security & Compliance

The RetryDistribution switch specifies whether to redistribute the policy to all locations. You don't need to specify a value with this switch.

Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch.

**Note**: Because the process of retrying distribution is a significant operation, run it only if necessary and for one policy at a time. It is not intended to be run every time you update a policy. If you run a script to update multiple policies, wait until the policy distribution is successful before running the command again for the next policy.

```yaml
Type: SwitchParameter
Parameter Sets: RetryDistributionParameterSet
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddAdaptiveScopeLocation

> Applicable: Security & Compliance

The AddAdaptiveScopeLocation parameter specifies the adaptive scope location to add to the policy. You create adaptive scopes by using the New-AdaptiveScope cmdlet. You can use any value that uniquely identifies the adaptive scope. For example:

- Name
- Distinguished name (DN)
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdaptiveScopeLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocation

> Applicable: Security & Compliance

The AddExchangeLocation parameter specifies the mailboxes to add to the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocationException

> Applicable: Security & Compliance

The AddExchangeLocationException parameter specifies the mailboxes to add to the list of excluded mailboxes when you're using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddModernGroupLocation

> Applicable: Security & Compliance

The AddModernGroupLocation parameter specifies the Microsoft 365 Groups to add to the list of included Microsoft 365 Groups when you aren't using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddModernGroupLocationException

> Applicable: Security & Compliance

The AddModernGroupLocationException parameter specifies the Microsoft 365 Groups to add to the list of excluded Microsoft 365 Groups when you're using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Applications

> Applicable: Security & Compliance

The Applications parameter specifies the applications to include in the policy.

This parameter uses the following syntax: `"LocationType:App1,LocationType:App2,...LocationType:AppN`:

`LocationType` is User or Group.

`App` is a supported value as shown in the following examples.

- **Microsoft 365 apps**: For example:

  `"User:Exchange,User:OneDriveForBusiness,Group:Exchange,Group:SharePoint"` or `"User:MicrosoftTeams","User:VivaEngage"`

- **Microsoft Copilot experiences**: Currently in Preview. You must use *all* of the following values at the same time:

  `"User:M365Copilot,CopilotForSecurity,CopilotinFabricPowerBI,CopilotStudio,CopilotinBusinessApplicationplatformsSales,SQLCopilot"`

  **Note**: Even though you must use `CopilotinBusinessApplicationplatformsSales` and `SQLCopilot`, those values are currently irrelevant.

- **Enterprise AI apps**: Currently in Preview. You must use *all* of the following values at the same time:

  `"User:Entrabased3PAIApps,ChatGPTEnterprise,AzureAIServices"`

- **Other AI apps**: Currently in Preview. You must use *all* of the following values at the same time:

  `"User:CloudAIAppChatGPTConsumer,CloudAIAppGoogleGemini,BingConsumer,DeepSeek"`

```yaml
Type: String[]
Parameter Sets: Identity, AdaptiveScopeLocation
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
Parameter Sets: Identity, AdaptiveScopeLocation, TeamLocation
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

### -DeletedResources

> Applicable: Security & Compliance

The DeletedResources parameter specifies the deleted mailbox or mail user to add as an exclusion to the respective location list. Use this parameter with the AddTeamsChatLocationException parameter for deleted mailboxes or mail users that need to be excluded from a Teams only retention policy.

A valid value is a JSON string. Refer to the Examples section for syntax and usage examples of this parameter.

For information about the inactive mailbox scenario, see [Learn about inactive mailboxes](https://learn.microsoft.com/purview/inactive-mailboxes-in-office-365).

**CAUTION**: This parameter uses the SMTP address of the deleted mailbox or mail user, which might also be specified for other mailboxes or mail users. If you use this parameter without first taking additional steps, other mailboxes and mail users with the same SMTP address in the retention policy will also be excluded. To check for additional mailboxes or mail users with the same SMTP address, use the following command and replace `user@contoso.com` with the SMTP address to check: `Get-Recipient -IncludeSoftDeletedRecipients user@contoso.com | Select-Object DisplayName, EmailAddresses, Description, Alias, RecipientTypeDetails, WhenSoftDeleted`

To prevent active mailboxes or mail users with the same SMTP address from being excluded, put the mailbox on [Litigation Hold](https://learn.microsoft.com/purview/ediscovery-create-a-litigation-hold) before you run the command with the DeletedResources parameter.

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

### -Enabled

> Applicable: Security & Compliance

The Enabled parameter enables or disables the policy. Valid values are:

- $true: The policy is enabled. This is the default value.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: Identity, AdaptiveScopeLocation, TeamLocation
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
Parameter Sets: Identity, AdaptiveScopeLocation, TeamLocation, InformationBarrierDefault
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyRBACScopes

> Applicable: Security & Compliance

**Note**: Admin units aren't currently supported, so this parameter isn't functional. The information presented here is for informational purposes when support for admin units is released.

The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. You can specify multiple values separated by commas.

Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAdaptiveScopeLocation

> Applicable: Security & Compliance

The RemoveAdaptiveScopeLocation parameter specifies the adaptive scope location to remove from the policy. You create adaptive scopes by using the New-AdaptiveScope cmdlet. You can use any value that uniquely identifies the adaptive scope. For example:

- Name
- Distinguished name (DN)
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdaptiveScopeLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation

> Applicable: Security & Compliance

The RemoveExchangeLocation parameter specifies the mailboxes to remove from the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocationException

> Applicable: Security & Compliance

The RemoveExchangeLocationException parameter specifies the mailboxes to remove from the list of excluded mailboxes when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox
- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveModernGroupLocation

> Applicable: Security & Compliance

The RemoveModernGroupLocation parameter specifies the Microsoft 365 Groups to remove from the list of included groups when you aren't using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveModernGroupLocationException

> Applicable: Security & Compliance

The RemoveModernGroupLocationException parameter specifies the Microsoft 365 Groups to remove from the list of excluded groups when you're using the value All for the ModernGroupLocation parameter.

You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Distinguished name (DN)
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictiveRetention

> Applicable: Security & Compliance

The RestrictiveRetention parameter specifies whether Preservation Lock is enabled for the policy. Valid values are:

- $true: Preservation Lock is enabled for the policy. No one -- including an administrator -- can turn off the policy or make it less restrictive.
- $false: Preservation Lock isn't enabled for the policy. This is the default value.

After a policy has been locked, no one can turn off or disable it, or remove apps from the policy. The only ways that you can modify the policy are by adding apps to it, or extending its duration. A locked policy can be increased or extended, but it can't be reduced, disabled, or turned off.

Therefore, before you lock a policy, it's critical that you understand your organization's compliance requirements, and that you don't lock a policy until you are certain that it's what you need.

```yaml
Type: Boolean
Parameter Sets: Identity
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
