---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-vivamodulefeaturepolicy
schema: 2.0.0
title: Get-VivaModuleFeaturePolicy
---

# Get-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-VivaModuleFeaturePolicy cmdlet to view the access policies for a specified feature in a Viva module in Viva. Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant. This cmdlet provides details about the policies, including the policy's identifier, name, and creation date. The cmdlet can filter policies based on MemberIds, allowing admins to view policies specific to certain users or groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### FeaturePolicy
```
Get-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String> [[-PolicyId] <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### FeaturePolicyWithMembers
```
Get-VivaModuleFeaturePolicy -ModuleId <String> [[-FeatureId] <String>] [[-MemberIds] <String[]>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaModuleFeaturePolicy cmdlet to view the access policies for a specified feature in a Viva module in Viva.

You can view all policies for a specified feature in a Viva module in Viva. To view a specific policy, you can include the PolicyId parameter.

The cmdlet can filter policies based on MemberIds, allowing admins to view policies specific to certain users or groups.

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
Get-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection
```

This example returns details about all the policies added for the Reflection feature in Viva Insights.

### Example 2
```powershell
Get-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b
```

This example returns details about a specific policy added for the Reflection feature in Viva Insights.

### Example 3
```powershell
Get-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -MemberIds user1@contoso.com
```

This example returns details about the policies for the Reflection feature in Viva Insights that apply to the user with the email user1@contoso.com.

### Example 4
```powershell
Get-VivaModuleFeaturePolicy -ModuleId * -FeatureId * -MemberIds user1@contoso.com,group1@contoso.com
```

This example returns details about the policies for all features across all Viva modules that apply to the user with the email user1@contoso.com and the group with the email group1@contoso.com.

## PARAMETERS

### -FeatureId

> Applicable: Exchange Online

The FeatureId parameter specifies the feature in the Viva module that you want to view the policies for.

To view details about the features in a Viva module that support feature access controls, refer to the Get-VivaModuleFeature cmdlet. The details provided by the Get-VivaModuleFeature cmdlet include the feature identifier.

```yaml
Type: String
Parameter Sets: FeaturePolicy, FeaturePolicyWithMembers
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId

> Applicable: Exchange Online

The ModuleId parameter specifies the Viva module of the feature policies that you want to view.

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

The PolicyId parameter specifies the specific policy for the feature in the Viva module that you want to view.

To view details about all policies for a feature in a Viva module, run this cmdlet without the PolicyId parameter. These details include the identifiers of all the policies for a feature in a Viva module.

```yaml
Type: String
Parameter Sets: FeaturePolicy
Aliases:

Required: False
Position: Positional
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberIds

> Applicable: Exchange Online

The MemberIds parameter specifies the specific users or groups for which you want to view the policies for the feature in the Viva module.

You can provide up to three member IDs. Use the \* character to specify all modules or features.

```yaml
Type: String[]
Parameter Sets: FeaturePolicyWithMembers
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
Type: Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases:

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
