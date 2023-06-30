---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeature
applicable: Exchange Online
title: Get-VivaModuleFeature
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---


# Get-VivaModuleFeature

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is part of a feature that's currently in a closed Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Get-VivaModuleFeature cmdlet to view the features in a Viva module that support feature access controls. This cmdlet provides details about the features, including the feature identifiers and descriptions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeature -ModuleId <String>
 [[-FeatureId] <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaModuleFeature cmdlet to view the features in a Viva module that support feature access controls.

You can view all features in a particular Viva module that support feature access controls. To view a specific feature, you can include the FeatureId parameter.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

## EXAMPLES

### Example 1
```powershell
Get-VivaModuleFeature -ModuleId VivaInsights
```

This example returns all features in Viva Insights that support feature access controls.

### Example 2
```powershell
Get-VivaModuleFeature -ModuleId VivaInsights -FeatureId Reflection
```

This example returns the details of the Reflection feature in Viva Insights.

## PARAMETERS

### -ModuleId
The ModuleId parameter specifies the Viva module of the features that you want to view.

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

### -FeatureId
The FeatureId parameter specifies the specific feature in the Viva module that you want to view.

You can view details about all the features in a Viva module that support feature access controls by running the cmdlet without the FeatureId parameter. These details include the identifiers of all features in a Viva module that support feature access controls.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#updates-for-the-exo-v3-module)

[Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids)
