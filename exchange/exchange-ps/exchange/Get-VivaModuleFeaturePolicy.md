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
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0-Preview2 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is part of a feature that's currently in Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Get-VivaModuleFeaturePolicy cmdlet to view the policies for a specified feature in a Viva module. Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant. This cmdlet provides details about the policies, including the policy’s identifier, name, and creation date.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String>
 [[-PolicyId] <String>]
 [-ResultSize <Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]>]
 [<CommonParameters>]
```

## DESCRIPTION
You can view all policies for a specified feature in a Viva module. To view a specific policy, you can include the PolicyId parameter. 

You need to use the Connect-ExchangeOnline cmdlet to authenticate with the Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator

There may be other admin roles permissioned access based on the particular feature’s scope. More details will be provided soon.

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Get-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection
```

This example returns details about all the policies added for the Reflection feature in Viva Insights.

### Example 2
```
Get-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6
```

This example returns details about a specific policy added for the Reflection feature in Viva Insights.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature in the Viva module that you want to view the policies for. 

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

You can view details about all the policies for a feature in a Viva module by running the cmdlet without the PolicyId parameter. These details include the identifiers of all the policies for a feature in a Viva module.


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

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#updates-for-the-exo-v3-module)

[Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids)