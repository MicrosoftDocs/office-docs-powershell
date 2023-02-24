---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/update-vivamodulefeaturepolicy
applicable: Exchange Online
title: Update-VivaModuleFeaturePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Update-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is part of a feature that's currently in Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Update-VivaModuleFeaturePolicy cmdlet to update a policy for a feature in a Viva module.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String> -PolicyId <String>
 [-Confirm]
 [-IsFeatureDisabled <Boolean>]
 [-GroupIds <String[]>] [-UserIds <String[]>]
 [-Everyone <Boolean>]
 [-Name <String>]
 [-ResultSize <Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the attributes of the policy that you specify in the cmdlet parameters. This includes:

- the policy name (Name parameter)
- whether or not the policy disables the feature (IsFeatureDisabled parameter)
- the users and/or groups the policy applies to (the GroupIds parameter, UserIds parameter, and Everyone switch)

The policy name, whether or not the policy disables the feature, and the users and/or groups that the policy applies to can be updated independently. For instance, if you specify the Name parameter but not the IsFeatureDisabled parameter, the name of the policy will be updated but whether or not the policy disables the feature would remain unchanged.

**Important**: Providing any of the three parameters related to setting the users and/or groups the policy applies to will overwrite the existing groups and/or users the policy applies to. If you want to add an additional user to the policy but still include existing users and groups, you must provide the existing users and groups in the cmdlet parameters as well.

For instance, say you currently have a policy that only applies to the user **user@contoso.com**. If you want to update the policy to **also** include the group **group@contoso.com**, you would run:
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -GroupIds group@contoso.com -UserIds user@contoso.com
```
If you want to update the policy to **only** apply to the aforementioned group and **not** the currently associated user, you would run:
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -GroupIds group@contoso.com
```
Notice that leaving out the existing user in the cmdlet effectively removes them from the policy.
You can provide up to 20 users and/or groups for the updated policy to apply to. To have the updated policy apply to all users in the tenant, use the Everyone switch.

You need to use the Connect-ExchangeOnline cmdlet to authenticate with the Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator

There may be other admin roles permissioned access based on the particular feature’s scope. More details will be provided soon.

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -Name NewPolicyName -IsFeatureDisabled $false
```

This example updates the specified policy’s name and whether or not the policy disables the feature. This example does not modify the users and/or groups that the policy applies to, and the existing values for the users and/or groups the policy applies to would persist.

### Example 2
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -GroupIds group@contoso.com
```

This example updates the users and groups that the specified policy applies to. The policy will now apply **only** to the **group@contoso.com** group. The specified group overwrites any existing users and/or groups that the policy applied to.

This example does not update the policy’s name or whether or not the policy disables the feature.

### Example 3
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -GroupIds group1@contoso.com, group2@contoso.com
```

This example updates the users and groups that the specified policy applies to. The policy will now apply **only** to the **group1@contoso.com** and **group2@contoso.com** groups. The specified groups overwrite any existing users and/or groups that the policy applied to. 

This example does not update the policy’s name or whether or not the policy disables the feature.

### Example 4
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -UserIds user@contoso.com
```

This example updates the users and groups that the specified policy applies to. The policy will now apply **only** to the **user@contoso.com** user. The specified user overwrites any existing users and/or groups that the policy applied to.

This example does not update the policy’s name or whether or not the policy disables the feature.

### Example 5
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -UserIds user1@contoso.com, user2@contoso.com
```

This example updates the users and groups that the specified policy applies to. The policy will now apply **only** to the **user1@contoso.com** and **user2@contoso.com** users. The specified users overwrite any existing users and/or groups that the policy applied to. 

This example does not update the policy’s name or whether or not the policy disables the feature.

### Example 6
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6 -Name NewPolicyName -IsFeatureDisabled $true -GroupIds group1@contoso.com, group2@contoso.com -UserIds user1@contoso.com, user2@contoso.com
```

This example updates the specified policy’s name, whether or not the policy disables the feature, and the users and groups that the policy applies to. The policy will now apply **only** to the **group1@contoso.com** and **group2@contoso.com** groups and the **user1@contoso.com** and **user2@contoso.com** users. The specified users and groups overwrite any existing users and/or groups that the policy applied to. 

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module of the policy that you want to update.

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

### -ModuleId
The ModuleId parameter specifies the Viva module of the policy that you want to update.

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

### -PolicyId
The PolicyId parameter specifies the policy for the feature in the Viva module that you want to update.

To view details about the policies for a feature in a Viva module, refer to the Get-VivaModuleFeaturePolicy cmdlet. The details provided by the Get-VivaModuleFeaturePolicy cmdlet include the policy identifier.

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
The Everyone switch specifies that the updated policy applies to all users in the tenant. You don't need to specify a value with this switch.

You must omit the GroupsIds parameter, UserIds parameter, and Everyone switch if you do not wish to update the users and groups the policy applies to.

Don't use this parameter with the GroupIds or UserIds parameters.

```yaml
Type: Boolean
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
The GroupIds parameter specifies the SMTP addresses (email addresses) of the groups the updated policy applies to. Viva feature access management supports [mail-enabled AAD groups]( https://docs.microsoft.com/en-us/graph/api/resources/groups-overview?context=graph%2Fcontext&view=graph-rest-1.0#group-types-in-azure-ad-and-microsoft-graph). You can enter multiple values separated by commas.

You must omit the GroupsIds parameter, UserIds parameter, and Everyone switch if you do not wish to update the users and groups the policy applies to.

Note that you can provide up to 20 users or groups for the updated policy to apply to. This limit applies to the total across the related parameters. To have the updated policy apply to all users in the tenant, use the Everyone switch.

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

### -IsFeatureDisabled
The IsFeatureDisabled parameter specifies whether or not the feature is disabled by the updated policy. Valid values are:

- $true: The feature is disabled by the policy.
- $false: The feature is not disabled by the policy.

You can omit this parameter if you do not wish to update whether or not the policy disables the feature.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the updated policy name. If the value contains spaces, enclose the value in quotation marks (").

You can omit this parameter if you do not wish to update the policy name.

```yaml
Type: String
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
Type: Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]
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
The UserIds parameter specifies the user principal names (UPNs) of the users the updated policy applies to. You can enter multiple values separated by commas.

You must omit the GroupIds parameter, UserIds parameter, and the Everyone switch if you do not wish to update the users and groups the policy applies to.

Note that you can provide up to 20 users and/or groups for the updated policy to apply to. This limit applies to the total across the related parameters. To have the updated policy apply to all users in the tenant, use the Everyone switch.

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
