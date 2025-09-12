---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangeOnlineManagement
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-myanalyticsfeatureconfig
schema: 2.0.0
title: Get-MyAnalyticsFeatureConfig
---

# Get-MyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-MyAnalyticsFeatureConfig cmdlet to view the availability and feature status of MyAnalytics for the specified user.

**Note**: This cmdlet replaces the Get-UserAnalyticsConfig cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MyAnalyticsFeatureConfig -Identity <String>
 [-ResultSize <unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft strongly advocates for the principle of least privilege. Assigning accounts only the minimum permissions necessary to perform their tasks helps reduce security risks and strengthens your organization's overall protection. Global Administrator is a highly privileged role that you typically limit to emergency scenarios or when you can't use a different role.

## EXAMPLES

### Example 1
```powershell
c:\users\vikram Get-MyAnalyticsFeatureConfig -Identity vikram@contoso.com

UserId : vikram@contoso.com
PrivacyMode : opt-in
IsDashboardEnabled : true
IsAddInEnabled : true
IsDigestEmailEnabled : false
```

This example and the corresponding output shows the MyAnalytics configuration for the user vikram@contoso.com. MyAnalytics is available to Vikram (the PrivacyMode property value is opt-in). The only feature that's disabled is digest email messages.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the user you want to view. You identify the user by their email address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
