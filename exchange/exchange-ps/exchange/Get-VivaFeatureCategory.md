---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivafeaturecategory
applicable: Exchange Online
title: Get-VivaFeatureCategory
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-VivaFeatureCategory

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.5.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: While we are adding support for category policies in the Exchange Online PowerShell module v3.5.0-Preview1 or later, we have not yet released any categories in Viva. We will update when there are categories available.

Use the Get-VivaFeatureCategory cmdlet to view all categories in Viva that support feature access controls. This cmdlet provides details about the categories, including the category identifiers, descriptions, and Viva module features that belong to the category. A category contains a group of features in the same or different Viva module.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaFeatureCategory
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaFeatureCategory cmdlet to view the categories in Viva that support feature access controls.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

## EXAMPLES

### Example 1
```powershell
Get-VivaFeatureCategory
```

This example returns all categories in Viva that support feature access controls.

## PARAMETERS

### -ResultSize
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
