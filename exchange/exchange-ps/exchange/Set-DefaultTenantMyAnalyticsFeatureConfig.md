---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/set-defaulttenantmyanalyticsfeatureconfig
applicable: Exchange Online
title: Set-DefaultTenantMyAnalyticsFeatureConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-DefaultTenantMyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0-Preview1 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Set-DefaultTenantMyAnalyticsFeatureConfig cmdlet to update the availability and status of Viva Insights features for the cloud-based organization: digest email, add-in, dashboard, meeting effectiveness survey, and schedule send suggestions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DefaultTenantMyAnalyticsFeatureConfig
 [-PrivacyMode <String>]
 [-Feature <String>]
 [-IsEnabled <Boolean>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
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
Set-DefaultTenantMyAnalyticsFeatureConfig -PrivacyMode Opt-in
```

This example enables all available Viva Insights features for the organization: add-in, dashboard, digest email, meeting effectiveness survey, schedule send suggestions.

### Example 2
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -Feature All -IsEnabled $true
```

This example also enables all available Viva Insights features for the organization: add-in, dashboard, digest email, meeting effectiveness survey, schedule send suggestions.

### Example 3
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -Feature Add-in -IsEnabled $false
```

This example disables Viva Insight add-in feature for the organization.

### Example 4
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -PrivacyMode Opt-out -Feature Add-in -IsEnabled $true
```

This example enables the Viva Insight add-in feature for the organization while disabling the other features.

## PARAMETERS

### -Feature
The Feature parameter specifies the Viva Insights feature to enable or disable. Valid values are:

- Add-in
- Dashboard
- Digest-email
- Meeting-effectiveness-survey
- Schedule-send
- All (all features)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: Dashboard, Add-in, Digest-email, Meeting-effectiveness-survey, Scheduled-send, All
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEnabled
The IsEnabled parameter enables or disables the Viva Insights feature specified by the Feature parameter. Valid values are:

- $true: The feature is enabled.
- $false: The feature is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyMode
The PrivacyMode parameter enables or disables all of the available Viva Insights features in this cmdlet:

- Add-in
- Digest email
- Dashboard
- Meeting effectiveness survey
- Schedule send suggestions

Valid values for this parameter are:

- Opt-in: The features are enabled.
- Opt-out: The features are disabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: Opt-in, Opt-out
Applicable: Exchange Online

Required: False
Position: Named
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

We're in the process of verifying that this cmdlet works for guest user, DAP, and GDAP scenarios.

## RELATED LINKS

[Deploy personal insights](https://learn.microsoft.com/viva/insights/personal/setup/deployment-guide)
