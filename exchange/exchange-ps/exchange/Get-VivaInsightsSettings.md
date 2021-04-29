---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-vivainsightssettings
applicable: Exchange Online
title: Get-VivaInsightsSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Get-VivaInsightsSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Get-VivaInsightsSettings cmdlet to view the Microsoft Viva Insights in Microsoft Teams settings for users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaInsightsSettings -Identity <String>
 [-BatchRequests]
 [-ResultSize <Unlimited>]
 [-UseMultithreading]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later. To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://docs.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Get-VivaInsightsSettings -Identity roy@contoso.onmicrosoft.com
```

This example returns the Microsoft Viva Insights in Microsoft Teams settings for the specified user.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to view. You identify the user by their account name (for example, roy@contoso.onmicrosoft.com).

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

### -BatchRequests
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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

### -UseMultithreading
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
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
