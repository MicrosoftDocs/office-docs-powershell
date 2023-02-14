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

**Note**: This cmdlet is part of a feature that's currently in Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Add-VivaModuleFeaturePolicy cmdlet to add new feature policies to existing Viva modules.

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
The access control list can contain a combined maximum of 20 user and group entries, or the value Everyone.

You need to use the Connect-ExchangeOnline cmdlet to authenticate with Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Add-VivaModuleFeaturePolicy -ModuleId TestModule -FeatureId TestFeature2 -Name NewTestPolicyName -IsFeatureDisabled $true -Everyone
```

This example adds the specified feature policy to the specified Viva module for all users.

### Example 2
```powershell
Add-VivaModuleFeaturePolicy -ModuleId test-module -FeatureId test-feature -Name new-test-policy-name -IsFeatureDisabled $true -GroupIds german-user-grp@contoso.org
```

This example adds the specified feature policy to the specified Viva module for the specified group.

### Example 3
```powershell
Add-VivaModuleFeaturePolicy -ModuleId test-module -FeatureId test-feature -Name new-test-policy-name -IsFeatureDisabled $true -GroupIds german-user-grp@contoso.org, us-user-grp@contoso.org
```

This example adds the specified feature policy to the specified Viva module for the specified groups.

### Example 4
```powershell
Add-VivaModuleFeaturePolicy -ModuleId test-module -FeatureId test-feature -Name new-test-policy-name -IsFeatureDisabled $true -UserIds admin@contoso.org
```

This example adds the specified feature policy to the specified Viva module for the specified user.

### Example 5
```powershell
Add-VivaModuleFeaturePolicy -ModuleId test-module -FeatureId test-feature -Name new-test-policy-name -IsFeatureDisabled $true -UserIds admin@contoso.org,admin2@contoso.org
```

This example adds the specified feature policy to the specified Viva module for the specified users.

### Example 6
```powershell
Add-VivaModuleFeaturePolicy -ModuleId test-module -FeatureId test-feature -Name new-test-policy-name -IsFeatureDisabled $true -GroupIds german-user-grp@contoso.org,us-user-grp@contoso.org -UserIds admin@contoso.org,admin2@contoso.org
```

This example adds the specified feature policy to the specified Viva module for the specified users and groups.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature policy to add to the Viva module.

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
The IsFeatureDisabled parameter specifies whether the feature policy in the Viva module is enabled or disabled. Valid values are:

- $true: The feature policy is disabled.
- $false: The feature policy is enabled.

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
The ModuleId parameter specifies the Viva module that you want to add the feature policy to.

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
The Name parameter specifies the unique name of the feature policy assignment. If the value contains spaces, enclose the value in quotation marks (").

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
The Everyone switch specifies that the feature policy in the Viva module applies to all users and groups. You don't need to specify a value with this switch.

Don't use this parameter with the GroupIds or UserIds parameters.

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
The GroupIds parameter specifies the group email addresses that the feature policy in the Viva module applies to. You can enter multiple values separated by commas.

To have the feature policy in the Viva module apply to all users and groups, use the Everyone switch.

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
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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
The UserIds parameter specifies the email address of users that the feature policy in the Viva module applies to. You can enter multiple values separated by commas.

To have the feature policy in the Viva module apply to all users and groups, use the Everyone switch.

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
