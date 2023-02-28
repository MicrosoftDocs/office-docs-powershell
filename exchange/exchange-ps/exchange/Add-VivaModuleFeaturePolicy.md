---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
applicable: Exchange Online
title: Add-VivaModuleFeaturePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Add-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0-Preview2 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is part of a feature that's currently in a closed Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Add-VivaModuleFeaturePolicy cmdlet to add a new access policy for a specific feature in Viva. The attributes of the policy are defined using the various parameters of the cmdlet. Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant. Note that the most restrictive policy for a particular user or group will take priority when determining a feature's enablement.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureDisabled <Boolean> -ModuleId <String> -Name <String>
 [-Confirm]
 [-GroupIds <String[]>]
 [-UserIds <String[]>]
 [-Everyone]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Add-VivaModuleFeaturePolicy cmdlet to add a new access policy for a specific feature in Viva.

A policy applies to a set of users and/or groups within your tenant. You can specify the users and/or groups using the respective parameters of the cmdlet. Note that you can provide up to 20 users and/or groups for the policy to apply to. This limit applies to the total across the related parameters. To apply the policy to all users in your tenant, provide the Everyone switch.

You need to use the Connect-ExchangeOnline cmdlet to authenticate with the Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator

There may be other admin roles permissioned access based on the particular feature’s scope. More details will be provided soon.

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name DisableFeatureForAll -IsFeatureDisabled $true -Everyone
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for all users within the tenant.

### Example 2
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name Group -IsFeatureDisabled $true -GroupIds group@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for all users within the group **group@contoso.com**.

### Example 3
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name MultipleGroups -IsFeatureDisabled $true -GroupIds group1@contoso.com, group2@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for all users within either the **group1@contoso.com** or **group2@contoso.com** groups.

### Example 4
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name User -IsFeatureDisabled $true -UserIds user@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for the **user@contoso.com** user.

### Example 5
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name MultipleUsers -IsFeatureDisabled $true -UserIds user1@contoso.com, user2@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for the **user1@contoso.com** and **user2@contoso.com** users.

### Example 6
```powershell
Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -Name UsersAndGroups -IsFeatureDisabled $true -GroupIds group1@contoso.com, group2@contoso.com -UserIds user1@contoso.com, user2@contoso.com
```

This example adds a policy for the Reflection feature in Viva Insights. The policy will disable the feature for users within multiple groups and a list of specific users.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module that you want to add the policy for.

To view details about the features in a Viva module that have Viva feature access controls available, refer to the Get-VivaModuleFeature cmdlet. The details provided by the Get-VivaModuleFeature cmdlet include the feature identifier.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFeatureDisabled
The IsFeatureDisabled parameter specifies whether or not the feature is disabled by the policy. Valid values are:
 
- $true: The feature is disabled by the policy.
- $false: The feature is not disabled by the policy.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId
The ModuleId parameter specifies the Viva module that you want to add the feature policy for.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the policy. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

Valid characters are English letters, numbers, commas, periods, and spaces.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Everyone
The Everyone switch specifies that the policy applies to all users. You do not need to specify a value with this switch.
 
Do not use this parameter with the GroupIds or UserIds parameters.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupIds
The GroupIds parameter specifies the SMTP addresses (email addresses) of the groups that the  policy applies to. Viva feature access management supports [mail-enabled AAD groups]( https://docs.microsoft.com/en-us/graph/api/resources/groups-overview?context=graph%2Fcontext&view=graph-rest-1.0#group-types-in-azure-ad-and-microsoft-graph). You can enter multiple values separated by commas.

Note that you can provide up to 20 users and/or groups for the policy to apply to. This limit applies to the total across the related parameters. To have the policy apply to all users in the tenant, use the Everyone switch.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIds
The UserIds parameter specifies the user principal names (UPNs) of the users that the policy applies to. You can enter multiple values separated by commas.
 
Note that you can provide up to 20 users and/or groups for the policy to apply to. This limit applies to the total across the related parameters. To have the policy apply to all users in the tenant, use the Everyone switch.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#updates-for-the-exo-v3-module)

[Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids)
