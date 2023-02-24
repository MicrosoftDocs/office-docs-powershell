---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeatureenablement
applicable: Exchange Online
title: Get-VivaModuleFeatureEnablement
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-VivaModuleFeatureEnablement

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.2.0-Preview2 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is part of a feature that's currently in Private Preview. The cmdlet won't work unless your organization is a member of the Private Preview.

Use the Get-VivaModuleFeatureEnablement cmdlet to view the enablement state of features in a Viva module for specific users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaModuleFeatureEnablement -ModuleId <String> -FeatureId <String> -Identity <String>
 [-ResultSize <Unlimited>]
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
Get-VivaModuleFeatureEnablement -ModuleId test-module -FeatureId TestFeature -Identity admin@contoso.org
```

This example returns the enablement state for the specified module, feature, and user.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature within the Viva module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the user principal name (UPN) of the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases: UPN
Type: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId
The ModuleId parameter specifies the Viva module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Type: Exchange Online

Required: True
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
Type: Exchange Online

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
