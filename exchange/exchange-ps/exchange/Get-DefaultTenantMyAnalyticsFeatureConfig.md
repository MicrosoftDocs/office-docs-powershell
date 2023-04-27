---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-defaulttenantmyanalyticsfeatureconfig
applicable: Exchange Online
title: Get-DefaultTenantMyAnalyticsFeatureConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DefaultTenantMyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0-Preview1 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-DefaultTenantMyAnalyticsFeatureConfig cmdlet to view the availability and status of Viva Insights features for the cloud-based organization: digest email, add-in, dashboard, meeting effectiveness survey, and schedule send suggestions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DefaultTenantMyAnalyticsFeatureConfig [-ResultSize <Unlimited]>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

For more information, see, see [Azure AD built-in roles](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference).

## EXAMPLES

### Example 1
```powershell
Get-DefaultTenantMyAnalyticsFeatureConfig
```

This example returns the default opt-in or opt-out information for the various Viva Insights settings.

## PARAMETERS

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

We're in the process of verifying that this cmdlet works for guest user, DAP, and GDAP scenarios.

## RELATED LINKS

[Deploy personal insights](https://learn.microsoft.com/viva/insights/personal/setup/deployment-guide)
