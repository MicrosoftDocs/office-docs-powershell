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

Use the Get-VivaModuleFeaturePolicy cmdlet to view policies and policy details for features in Viva modules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String>
 [[-PolicyId] <String>]
 [-ResultSize <Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to use the Connect-ExchangeOnline cmdlet to authenticate with Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Get-VivaModuleFeaturePolicy -ModuleId TestModule -FeatureId TestFeature2
```

This example returns all policies for the specified feature in the specified Viva module.

### Example 2
```
Get-VivaModuleFeaturePolicy -ModuleId TestModule -FeatureId TestFeature2 -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6
```

This example returns detailed information for the specified feature in the specified Viva module.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature policy to view in the Viva module.

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
The ModuleId parameter specifies the Viva module that contains the feature policies that you want to view.

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
The PolicyId parameter specifies the feature policy in the Viva module that you want to view.

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
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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
