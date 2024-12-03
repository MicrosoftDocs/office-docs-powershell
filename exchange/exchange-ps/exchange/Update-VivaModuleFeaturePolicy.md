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
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: Support for categories is available in version 3.5.0-Preview2 or later of the module, but no categories are currently available in Viva. We'll update the documentation when categories are available.

Use the Update-VivaModuleFeaturePolicy cmdlet to update an access policy for a feature in a Viva module or a category in Viva.

- You can't update a policy for a particular user or group to include the entire tenant if a policy for the entire tenant already exists for the feature. Only one tenant-wide policy is supported.
- Policies assigned to a specific user or group take priority over the policy assigned to the entire tenant when determining whether a feature/category is enabled. If a user has multiple policies assigned for a feature/category (directly as a user or member of a group), the most restrictive policy applies.
- You can only update user controls at the feature policy level, not the category policy level.
- Some features only support policies that apply to the entire tenant, not specific users or groups. You can refer to supported policy scopes for a feature using the [Get-VivaModuleFeature](https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeature) cmdlet.

Some features include the option for user controls (user opt out). Refer to the feature documentation to see if user controls are available for the feature that you intend to set a policy for.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### FeaturePolicy
```
Update-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String> -PolicyId <String>
 [-Confirm]
 [-Everyone <Boolean>]
 [-IsFeatureEnabled <Boolean>]
 [-IsUserControlEnabled <Boolean>]
 [-GroupIds <String[]>]
 [-Name <String>]
 [-ResultSize <Unlimited>]
 [-UserIds <String[]>]
 [-WhatIf]
 [<CommonParameters>]
```

### CategoryPolicy
```
Update-VivaModuleFeaturePolicy> -CategoryId <String> -PolicyId <String>
 [-Confirm]
 [-Everyone <Boolean]
 [-IsCategoryEnabled <Boolean>]
 [-GroupIds <String[]>]
 [-Name <String>]
 [-ResultSize <Unlimited>]
 [-UserIds <String[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Update-VivaModuleFeaturePolicy cmdlet to update an access policy for a feature in a Viva module or a category in Viva.

Support for categories is available in version 3.5.0-Preview2 or later of the module.

This cmdlet updates the attributes of the policy that you specify. These attributes include:

- The policy name (Name parameter).
- Whether or not the policy enables the feature (IsFeatureEnabled parameter) or the category (IsCategoryEnabled parameter).
- Whether or not the policy enables user controls (IsUserControlEnabled parameter, only applicable to a feature policy).
- Who the policy applies to (the UserIds and GroupIds parameters or the Everyone parameter).

You can update these attributes independently of each other. For example, if you specify the Name parameter but not the IsFeatureEnabled/IsCategoryEnabled parameter, the name of the policy is updated but whether or not the policy enables the feature/category remains unchanged.

**Important**: Values that you specify for the UserIds and/or GroupIds parameters or the Everyone parameter **overwrite** any existing users or groups. To preserve the existing users and groups, you need to specify those existing users or groups **and** any additional users or groups that you want to add. Not including existing users or groups in the command effectively removes those specific users or groups from the policy. For more information, see the examples.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

Currently, you need to be a member of the Global Administrators role or the roles that have been assigned at the feature level to run this cmdlet.

To learn more about assigned roles at the feature level, see [Features Available for Feature Access Management](https://learn.microsoft.com/viva/feature-access-management#features-available-for-feature-access-management).

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b1 -Name NewPolicyName -IsFeatureEnabled $false
```

This example updates the name of the specified policy and makes it so the policy does not enable the feature.

### Example 2
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -GroupIds group1@contoso.com,group2@contoso.com
```

This example updates who the specified policy applies to. The policy now applies **only** to the specified groups, overwriting the users and groups the policy used to apply to.

### Example 3
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -UserIds user1@contoso.com,user2@contoso.com
```

This example updates who the specified policy applies to. The policy now applies **only** to the specified users, overwriting the users and groups the policy used to apply to.

### Example 4
```powershell
Update-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -Name NewPolicyName -IsFeatureEnabled $true -GroupIds group1@contoso.com,57680382-61a5-4378-85ad-f72095d4e9c3 -UserIds user1@contoso.com
```

This example updates the name of the specified policy, makes it so the policy enables the feature, and updates who the policy applies to. The policy now applies **only** to the specified users and groups, overwriting the users and groups the policy used to apply to.

### Example 5
```powershell
Update-VivaModuleFeaturePolicy -CategoryId <category_id> -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -Name NewPolicyName -IsCategoryEnabled $false
```

This example updates the name of the specified policy and makes it so the policy does not enable the category (effectively all features under the category).

### Example 6
```powershell
Update-VivaModuleFeaturePolicy -CategoryId <category_id> -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -GroupIds group1@contoso.com,group2@contoso.com,57680382-61a5-4378-85ad-f72095d4e9c3
```

This example updates who the specified policy applies to. The policy now applies **only** to the specified groups, overwriting the users and groups the policy used to apply to.

### Example 7
```powershell
Update-VivaModuleFeaturePolicy -CategoryId <category_id> -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -UserIds user1@contoso.com,user2@contoso.com
```

This example updates who the specified policy applies to. The policy now applies **only** to the specified users, overwriting the users and groups the policy used to apply to.

### Example 8
```powershell
Update-VivaModuleFeaturePolicy -CategoryId <category_id> -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -Name NewPolicyName -IsCategoryEnabled $true -GroupIds group1@contoso.com,57680382-61a5-4378-85ad-f72095d4e9c3 -UserIds user1@contoso.com
```

This example updates the name of the specified policy, makes it so the policy enables the category (effectively all features under the category), and updates who the policy applies to. The policy now applies **only** to the specified users and groups, overwriting the users and groups the policy used to apply to.

## PARAMETERS

### -CategoryId
This parameter is available in version 3.5.0-Preview2 or later of the module.

**Note**: Currently, no categories are available in Viva. We'll update the documentation when categories are available.

The CategoryId parameter specifies the category of the policy that you want to update.

To view details about the categories that support feature access controls, use the Get-FeatureCategory cmdlet. The CategoryId value is returned in the output of the cmdlet.

```yaml
Type: String
Parameter Sets: CategoryPolicy
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module of the policy that you want to update.

To view details about the features in a Viva module that support feature access controls, use the Get-VivaModuleFeature cmdlet. The FeatureId value is returned in the output of the cmdlet.

```yaml
Type: String
Parameter Sets: FeaturePolicy
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
Parameter Sets: FeaturePolicy
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

To view details about the policies for a feature in a Viva module, use the Get-VivaModuleFeaturePolicy cmdlet. The PolicyId value is returned in the output of the cmdlet.

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
The Everyone parameter specifies that the updated policy applies to all users in the organization. Valid values are:

- $true: The policy applies to all users. This is the only useful value for this parameter.
- $false: Don't use this value.

If you don't want to update who the policy applies to, don't use this parameter.

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
The GroupIds parameter specifies the email addresses or security group object IDs (GUIDs) of groups that the updated policy applies to. Both [Mail-enabled and non-mail-enabled Microsoft Entra groups](https://docs.microsoft.com/graph/api/resources/groups-overview#group-types-in-azure-ad-and-microsoft-graph) are supported. You can enter multiple values separated by commas.

If you don't want to update who the policy applies to, don't use this parameter.

The values that you specify for this parameter or the UserIds parameter replace any existing groups. To preserve the existing groups, include them along with any new users or groups that you specify.

You can specify a maximum of 20 total users or groups (20 users and no groups, 10 users and 10 groups, etc.).

To have the updated policy apply to all users in the organization, use the Everyone parameter with the value $true.

**Note**: In v3.5.1-Preview2 or later of the module, this parameter supports security group object IDs (GUIDs). Previous versions of the module accept only email addresses for this parameter.

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

### -IsCategoryEnabled
This parameter is available in version 3.5.0-Preview2 or later of the module.

**Note**: Currently, no categories are available in Viva. We'll update the documentation when categories are available.

The IsCategoryEnabled parameter specifies whether the category is enabled by the updated policy. Valid values are:

- $true: The category (effectively all features under the category) is enabled by the policy.
- $false: The category (effectively all features under the category) is not enabled by the policy.

If you don't want to update whether the category is enabled by the policy, don't use this parameter.

```yaml
Type: Boolean
Parameter Sets: CategoryPolicy
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFeatureEnabled
The IsFeatureEnabled parameter specifies whether the feature is enabled by the updated policy. Valid values are:

- $true: The feature is enabled by the policy.
- $false: The feature is not enabled by the policy.

If you don't want to update whether the feature is enabled by the policy, don't use this parameter.

```yaml
Type: Boolean
Parameter Sets: FeaturePolicy
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsUserControlEnabled
**Note**: This parameter is available in version 3.3.0 or later of the module. If the feature supports user controls for opting out, make sure you set the *IsUserControlEnabled* parameter when you create the policy. Otherwise, user controls for the policy use the default state for the feature.

The IsUserControlEnabled parameter specifies whether user control is enabled by the policy. Valid values are:

- $true: User control is enabled by the policy. Users can opt out of the feature.
- $false: User control isn't enabled by the policy. Users can't opt of the feature.

Only features that allow admins to enable and disable user controls by policy can use this parameter. If the feature doesn't support admins toggling user controls, the default value applies. See the feature documentation for more information.

If you don't want to update whether the user control is enabled by the policy, don't use this parameter.

```yaml
Type: Boolean
Parameter Sets: FeaturePolicy
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the updated name for the policy. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

Valid characters are English letters, numbers, commas, periods, and spaces.

If you don't want to update the name of the policy, don't use this parameter.

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
The UserIds parameter specifies the user principal names (UPNs) of users that the updated policy applies to. You can enter multiple values separated by commas.

If you don't want to update who the policy applies to, don't use this parameter.

The values that you specify for this parameter or the GroupIds parameter replace any existing users. To preserve the existing users, include them along with any new users or groups that you specify.

You can specify a maximum of 20 total users or groups (20 users and no groups, 10 users and 10 groups, etc.).

To have the updated policy apply to all users in the organization, use the Everyone parameter with the value $true.

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

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
