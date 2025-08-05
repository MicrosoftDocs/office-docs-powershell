---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/update-vivamodulefeaturepolicy
schema: 2.0.0
title: Update-VivaModuleFeaturePolicy
---

# Update-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Update-VivaModuleFeaturePolicy cmdlet to update an access policy for a feature in a Viva module in Viva.

- You can't update a policy for a particular user or group to include the entire tenant if a policy for the entire tenant already exists for the feature. Only one tenant-wide policy is supported.
- Policies assigned to a specific user or group take priority over the policy assigned to the entire tenant when determining whether a feature is enabled. If a user has multiple policies assigned for a feature (directly as a user or member of a group), the most restrictive policy applies.
- Some features only support policies that apply to the entire tenant, not specific users or groups. You can refer to supported policy scopes for a feature using the [Get-VivaModuleFeature](https://learn.microsoft.com/powershell/module/exchangepowershell/get-vivamodulefeature) cmdlet.

Some features include the option for user controls (user opt out). Refer to the feature documentation to see if user controls are available for the feature that you intend to set a policy for.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX
```
Update-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String> -PolicyId <String>
 [-Confirm]
 [-Everyone <Boolean>]
 [-IsFeatureEnabled <Boolean>]
 [-IsUserControlEnabled <Boolean>]
 [-IsUserOptedInByDefault <Boolean>]
 [-GroupIds <String[]>]
 [-Name <String>]
 [-ResultSize <Unlimited>]
 [-UserIds <String[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Update-VivaModuleFeaturePolicy cmdlet to update an access policy for a feature in a Viva module in Viva.

This cmdlet updates the attributes of the policy that you specify. These attributes include:

- The policy name (Name parameter).
- Whether or not the policy enables the feature (IsFeatureEnabled parameter).
- Whether or not the policy enables user controls (IsUserControlEnabled parameter, only applicable to a feature policy).
- Who the policy applies to (the UserIds and GroupIds parameters or the Everyone parameter).

You can update these attributes independently of each other. For example, if you specify the Name parameter but not the IsFeatureEnabled parameter, the name of the policy is updated but whether or not the policy enables the feature remains unchanged.

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
Update-VivaModuleFeaturePolicy -ModuleId PeopleSkills -FeatureId ShowAISkills -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b -IsFeatureEnabled $true -IsUserControlEnabled $true -IsUserOptedInByDefault $false
```

This example updates a policy for the ShowAISkills feature in Viva Skills. The policy enables the feature for the users previously added to the policy, allows user controls, and opted out users by default (Soft Disable policy).

## PARAMETERS

### -FeatureId

> Applicable: Exchange Online

The FeatureId parameter specifies the feature in the Viva module of the policy that you want to update.

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

### -ModuleId

> Applicable: Exchange Online

The ModuleId parameter specifies the Viva module of the policy that you want to update.

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

### -PolicyId

> Applicable: Exchange Online

The PolicyId parameter specifies the policy for the feature in the Viva module that you want to update.

To view details about the policies for a feature in a Viva module, use the Get-VivaModuleFeaturePolicy cmdlet. The PolicyId value is returned in the output of the cmdlet.

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

The Everyone parameter specifies that the updated policy applies to all users in the organization. Valid values are:

- $true: The policy applies to all users. This is the only useful value for this parameter.
- $false: Don't use this value.

If you don't want to update who the policy applies to, don't use this parameter.

Don't use this parameter with the GroupIds or UserIds parameters.

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

### -GroupIds

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -IsFeatureEnabled

> Applicable: Exchange Online

The IsFeatureEnabled parameter specifies whether the feature is enabled by the updated policy. Valid values are:

- $true: The feature is enabled by the policy.
- $false: The feature is not enabled by the policy.

If you don't want to update whether the feature is enabled by the policy, don't use this parameter.

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

### -IsUserControlEnabled

> Applicable: Exchange Online

**Note**: This parameter is available in version 3.3.0 or later of the module. If the feature supports user controls for opting out, make sure you set the *IsUserControlEnabled* parameter when you create the policy. Otherwise, user controls for the policy use the default state for the feature.

The IsUserControlEnabled parameter specifies whether user control is enabled by the policy. Valid values are:

- $true: User control is enabled by the policy. Users can opt out of the feature.
- $false: User control isn't enabled by the policy. Users can't opt of the feature.

Only features that allow admins to enable and disable user controls by policy can use this parameter. If the feature doesn't support admins toggling user controls, the default value applies. See the feature documentation for more information.

If you don't want to update whether the user control is enabled by the policy, don't use this parameter.

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

This parameter is available in version 3.8.0-Preview2 or later of the module.

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

### -Name

> Applicable: Exchange Online

The Name parameter specifies the updated name for the policy. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

Valid characters are English letters, numbers, commas, periods, and spaces.

If you don't want to update the name of the policy, don't use this parameter.

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

The UserIds parameter specifies the user principal names (UPNs) of users that the updated policy applies to. You can enter multiple values separated by commas.

If you don't want to update who the policy applies to, don't use this parameter.

The values that you specify for this parameter or the GroupIds parameter replace any existing users. To preserve the existing users, include them along with any new users or groups that you specify.

You can specify a maximum of 20 total users or groups (20 users and no groups, 10 users and 10 groups, etc.).

To have the updated policy apply to all users in the organization, use the Everyone parameter with the value $true.

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
