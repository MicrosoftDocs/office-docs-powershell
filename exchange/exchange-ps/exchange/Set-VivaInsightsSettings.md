---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-vivainsightssettings
applicable: Exchange Online
title: Set-VivaInsightsSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Set-VivaInsightsSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

**Note**: This cmdlet is available only in version 2.0.5-Preview2 or later of the EXO V2 module.

Use the Set-VivaInsightsSettings cmdlet to control user access to features in Viva Insights. Only users with provisioned Exchange Online mailboxes can access features within the Viva Insights app in Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-VivaInsightsSettings -Identity <String> -Enabled <Boolean> -Feature <String>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later. To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Teams Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://docs.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Set-VivaInsightsSettings -Identity roy@contoso.onmicrosoft.com -Enabled $false -Feature headspace
```

This example disables access to all the Headspace features in Microsoft Viva Insights in Microsoft Teams for the specified user.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to modify. You identify the user by their User Principal Name (UPN) (for example, roy@contoso.onmicrosoft.com).

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

### -Enabled
The Enabled parameter enables or disables access to specific features of Microsoft Viva Insights in Microsoft Teams for the user. Valid values are:

- $true: The specified features in Microsoft Viva Insights in Microsoft Teams are enabled for the user.
- $false: The specified features in Microsoft Viva Insights in Microsoft Teams are disabled for the user.

```yaml
Type: Boolean
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
The Feature parameter specifies feature of Microsoft Viva Insights in Microsoft Teams for the user. Current valid values are:

- headspace: Represents all features of Headspace.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: headspace
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

## OUTPUTS

## NOTES

## RELATED LINKS
