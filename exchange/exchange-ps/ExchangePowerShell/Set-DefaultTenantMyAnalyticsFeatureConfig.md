---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-defaulttenantmyanalyticsfeatureconfig
schema: 2.0.0
title: Set-DefaultTenantMyAnalyticsFeatureConfig
---

# Set-DefaultTenantMyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Set-DefaultTenantMyAnalyticsFeatureConfig cmdlet to update the availability and status of Viva Insights features for the cloud-based organization: digest email, add-in, dashboard, meeting effectiveness survey, and schedule send suggestions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DefaultTenantMyAnalyticsFeatureConfig
 [-Feature <String>]
 [-IsEnabled <Boolean>]
 [-ResultSize <Unlimited>]
 [-SamplingRate <Double>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

For more information, see [Microsoft Entra built-in roles](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference).

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -Feature All -IsEnabled $true
```

This example enables all available Viva Insights features for the organization: add-in, dashboard, digest email, meeting effectiveness survey, schedule send suggestions.

### Example 2
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -Feature Add-in -IsEnabled $false
```

This example disables Viva Insight add-in feature for the organization.

### Example 3
```powershell
Set-DefaultTenantMyAnalyticsFeatureConfig -Feature Meeting-Effectiveness-Survey-Sampling-Rate -SamplingRate 0.2
```

This example sets the meeting effectiveness survey sampling rate to 20%.

## PARAMETERS

### -Feature

> Applicable: Exchange Online

The Feature parameter specifies the Viva Insights feature to enable or disable. Valid values are:

- Add-in
- Dashboard
- Digest-email
- Meeting-effectiveness-survey
- Meeting-effectiveness-survey-sampling-rate
- Schedule-send
- All (all features)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: Dashboard, Add-in, Digest-email, Meeting-effectiveness-survey, Scheduled-send, All

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEnabled

> Applicable: Exchange Online

The IsEnabled parameter enables or disables the Viva Insights feature specified by the Feature parameter. Valid values are:

- $true: The feature is enabled.
- $false: The feature is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
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
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamplingRate

> Applicable: Exchange Online

This parameter is available only in version 3.2.0 or later.

The SamplingRate parameter specifies the meeting effectiveness survey sampling rate. The percentage value is expressed a a decimal (for example, 0.1 indicates 10%). A valid value is from 0.1 to 0.7.

```yaml
Type: Double
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

[Deploy personal insights](https://learn.microsoft.com/viva/insights/personal/setup/deployment-guide)
