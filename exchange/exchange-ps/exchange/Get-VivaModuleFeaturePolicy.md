---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeaturepolicy
applicable: Exchange Online
title: Get-VivaModuleFeaturePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-VivaModuleFeaturePolicy cmdlet to view the access policies for a specified feature in a Viva module. Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant. This cmdlet provides details about the policies, including the policy's identifier, name, and creation date.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String>
 [[-PolicyId] <String>]
 [-ResultSize <Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaModuleFeaturePolicy cmdlet to view the access policies for a specified feature in a Viva module.

You can view all policies for a specified feature in a Viva module. To view a specific policy, you can include the PolicyId parameter.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

Currently, you need to be a member of the Global administrators role to run this cmdlet.

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

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

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module that you want to view the policies for.

To view details about the features in a Viva module that support feature access controls, refer to the Get-VivaModuleFeature cmdlet. The details provided by the Get-VivaModuleFeature cmdlet include the feature identifier.

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
The ModuleId parameter specifies the Viva module of the feature policies that you want to view.

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
The PolicyId parameter specifies the specific policy for the feature in the Viva module that you want to view.

To view details about all policies for a feature in a Viva module, run this cmdlet without the PolicyId parameter. These details include the identifiers of all the policies for a feature in a Viva module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Positional
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
