---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy
schema: 2.0.0
title: Add-VivaModuleFeaturePolicy
---

# Add-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Add-VivaModuleFeaturePolicy cmdlet to add a new access policy for a specific feature in Viva. The attributes of the policy are defined using the cmdlet parameters. Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant.

- You can assign up to 10 policies per feature. An additional one policy per feature can be assigned to the entire tenant.
- Policies assigned to a specific user or group take priority over the policy assigned to the entire tenant when determining whether a feature is enabled. If a user has multiple policies assigned for a feature (directly as a user or member of a group), the most restrictive policy applies.
- Some features only support policies that apply to the entire tenant, not specific users or groups. You can refer to supported policy scopes for a feature using the [Get-VivaModuleFeature](https://learn.microsoft.com/powershell/module/exchangepowershell/get-vivamodulefeature) cmdlet.

Some features include the option for user controls (user opt out). Refer to the feature documentation to see if user controls are available for the feature that you intend to set a policy for.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX
```
Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String>
 [-Confirm]
 [-Everyone]
 [-GroupIds <String[]>]
 [-IsUserControlEnabled <Boolean>]
 [-IsUserOptedInByDefault <Boolean>]
 [-ResultSize <Unlimited>]
 [-UserIds <String[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Add-VivaModuleFeaturePolicy cmdlet to add a new access policy for a specific feature in Viva.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

Currently, you need to be a member of the Global Administrators role or the roles that have been assigned at the feature level to run this cmdlet.

To learn more about assigned roles at the feature level, see [Features Available for Feature Access Management](https://learn.microsoft.com/viva/feature-access-management#features-available-for-feature-access-management).

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft strongly advocates for the principle of least privilege. Assigning accounts only the minimum permissions necessary to perform their tasks helps reduce security risks and strengthens your organization's overall protection. Global Administrator is a highly privileged role that you typically limit to emergency scenarios or when you can't use a different role.

## EXAMPLES

### Example 1
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone
```

This example adds a policy for the Reflection feature in Viva Insights. The policy disables the feature for all users in the organization.

### Example 2
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name MultipleGroups -IsFeatureEnabled $false -GroupIds group1@contoso.com,group2@contoso.com,57680382-61a5-4378-85ad-f72095d4e9c3
```

This example adds a policy for the Reflection feature in Viva Insights. The policy disables the feature for all users in the specified groups.

### Example 3
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name MultipleUsers -IsFeatureEnabled $false -UserIds user1@contoso.com,user2@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy disables the feature for the specified users.

### Example 4
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name UsersAndGroups -IsFeatureEnabled $false -GroupIds group1@contoso.com,group2@contoso.com,57680382-61a5-4378-85ad-f72095d4e9c3 -UserIds user1@contoso.com,user2@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy disables the feature for the specified users and group members.

### Example 5
```powershell
Add-VivaModuleFeaturePolicy -ModuleId PeopleSkills -FeatureId ShowAISkills -Name SoftDisableShowAISkillsPolicy -IsFeatureEnabled $true -IsUserControlEnabled $true -IsUserOptedInByDefault $false -UserIds user1@contoso.com,user2@contoso.com
```

This example adds a policy for the ShowAISkills feature in Viva Skills. The policy enables the feature for the specified users, allows user controls, and opted out users by default (Soft Disable policy).

## PARAMETERS

### -FeatureId

> Applicable: Exchange Online

The FeatureId parameter specifies the feature in the Viva module that you want to add the policy for.

To view details about the features in a Viva module that support feature access controls, use the Get-VivaModuleFeature cmdlet. The FeatureId value is returned in the output of the cmdlet.

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

### -IsFeatureEnabled

> Applicable: Exchange Online

The IsFeatureEnabled parameter specifies whether or not the feature is enabled by the policy. Valid values are:

- $true: The feature is enabled by the policy.
- $false: The feature is not enabled by the policy.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId

> Applicable: Exchange Online

The ModuleId parameter specifies the Viva module that you want to add the feature policy for.

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

### -Name

> Applicable: Exchange Online

The Name parameter specifies the name of the policy. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

Valid characters are English letters, numbers, commas, periods, and spaces.

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

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

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

### -Everyone

> Applicable: Exchange Online

The Everyone switch specifies that the policy applies to all users in the organization. You don't need to specify a value with this switch.

Don't use this switch with the GroupIds or UserIds parameters.

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

### -GroupIds

> Applicable: Exchange Online

The GroupIds parameter specifies the email addresses or security group object IDs (GUIDs) of groups that the updated policy applies to. Both [Mail-enabled and non-mail-enabled Microsoft Entra groups](https://docs.microsoft.com/graph/api/resources/groups-overview#group-types-in-azure-ad-and-microsoft-graph) are supported. You can enter multiple values separated by commas.

You can specify a maximum of 20 total users or groups (20 users and no groups, 10 users and 10 groups, etc.).

To have the policy apply to all users in the organization, use the Everyone switch.

**Note**: In v3.5.1-Preview2 or later of the module, this parameter supports security group object IDs (GUIDs). Previous versions of the module accept only email addresses for this parameter.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsUserControlEnabled

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.3.0 or later.

The IsUserControlEnabled parameter specifies whether user control is enabled by the policy. Valid values are:

- $true: User control is enabled by the policy. Users can opt out of the feature.
- $false: User control isn't enabled by the policy. Users can't opt of the feature.

Only features that allow admins to enable and disable user controls by policy can use this parameter. If the feature doesn't support admins toggling user controls, the default value applies. See the feature documentation for more information.

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

### -IsUserOptedInByDefault

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.8.0-Preview2 or later.

The IsUserOptedInByDefault parameter specifies whether users are opted in by default by the policy. Valid values are:

- $true: By default, users are opted in by the policy if the user hasn't set a preference.
- $false: By default, users are opted out by the policy if the user hasn't set a preference.

This parameter is optional and can be used to override the default user opt-in value set in the feature metadata.

This parameter can be set only when the IsUserControlEnabled parameter is set to $true.

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

### -ResultSize

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIds

> Applicable: Exchange Online

The UserIds parameter specifies the user principal names (UPNs) of the users that the policy applies to. You can enter multiple values separated by commas.

You can specify a maximum of 20 total users or groups (20 users and no groups, 10 users and 10 groups, etc.).

To have the policy apply to all users in the organization, use the Everyone switch.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
