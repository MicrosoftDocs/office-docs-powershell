---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-myanalyticsfeatureconfig
applicable: Exchange Online
title: Set-MyAnalyticsFeatureConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Set-MyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Set-MyAnalyticsFeatureConfig cmdlet to configure the availability and features of MyAnalytics for the specified user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MyAnalyticsFeatureConfig -Identity <String>
 [-Feature <String>]
 [-IsEnabled <Boolean>]
 [-PrivacyMode <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
To run this cmdlet, you need to be a member of the 'Global Administrator' or the 'Exchange Administrator' directory role group in the destination organization. To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://docs.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Set-MyAnalyticsFeatureConfig -Identity vikram@contoso.com -PrivacyMode opt-in
```

This example makes MyAnalytics and all features available to Vikram.

### Example 2
```powershell
Set-MyAnalyticsFeatureConfig -Identity swathy@contoso.com -PrivacyMode opt-in -Feature digest-email -IsEnabled $false
```

This example makes MyAnalytics available to Swathy, but disables the digest email feature.

### Example 3
```powershell
Set-MyAnalyticsFeatureConfig -Identity akshath@contoso.com -Feature digest-email -IsEnabled $false
```

This example disables the digest email feature for Akshath.

## PARAMETERS

### -Identity
The Identity parameter specifies the user you want to view. You identify the user by their email address.

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

### -Feature
The Feature parameter specifies the MyAnalytics features to enable or disable for the user. Valid values are:

- all (this is the default value)
- add-in
- dashboard
- digest-email

To actually enable or disable a feature that's specified by this parameter, use the IsEnabled parameter in the same command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: dashboard, add-in, digest-email, all
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEnabled
The IsEnabled parameter specifies whether to enable or disable the feature that's specified by the Feature parameter. Valid values are:

- $true: The specified feature is enabled.
- $false: The specified feature is disabled.

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
The PrivacyMode parameter specifies whether to enable or disable MyAnalytics for the specified user. Valid values are:

-opt-in: MyAnalytics is enabled for the user. Use the Feature and IsEnabled parameters to enable or disable specific MyAnalytics features.
-opt-out: MyAnalytics is disabled for the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: opt-in, opt-out
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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
