---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-myanalyticsfeatureconfig
applicable: Exchange Online
title: Get-MyAnalyticsFeatureConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Get-MyAnalyticsFeatureConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Get-MyAnalyticsFeatureConfig cmdlet to view the availability and feature status of MyAnalytics for the specified user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MyAnalyticsFeatureConfig -Identity <String>
 [-ResultSize <unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be a member of the Organization Management role group (Global admins) in the destination organization to run this cmdlet.

## EXAMPLES

### Example 1
```powershell
c:\users\vikram Get-MyAnalyticsFeatureConfig -Identity vikram@contoso.com

UserId : vikram@contoso.com
PrivacyMode : opt-in
IsDashboardEnabled : true
IsAddInEnabled  : true
IsDigestEmailEnabled : false
```

This example and the corresponding output shows the MyAnalytics configuration for the user vikram@contoso.com. MyAnalytics is available to Vikram (the PrivacyMode property value is opt-in). The only feature that's disabled is digest email messages.

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
