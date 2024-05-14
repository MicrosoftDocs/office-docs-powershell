---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/get-vivainsightssettings
applicable: Exchange Online
title: Get-VivaInsightsSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Get-VivaInsightsSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is available only in version 2.0.5 or later of the module.

Use the Get-VivaInsightsSettings cmdlet to check whether a user has access to features in Microsoft Viva Insights in Microsoft Teams. Only users with provisioned Exchange Online mailboxes can access features within the Viva Insights app in Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaInsightsSettings -Identity <String>
 [-Feature <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later. To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Teams Administrator

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Get-VivaInsightsSettings -Identity roy@contoso.onmicrosoft.com

UserId : roy@contoso.onmicrosoft.com
IsInsightsHeadspaceEnabled : True
```

This example shows the configuration of Microsoft Viva Insights in Microsoft Teams for the user roy@contoso.onmicrosoft.com. The output of the command shows that the features of Headspace are available to Roy.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to view. You identify the user by their User Principal Name (UPN) (for example, roy@contoso.onmicrosoft.com).

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
The Feature parameter filters the results by the specified Microsoft Viva Insights feature. Valid values are:

- Headspace: Represents all features of Headspace.
- MeetingEffectivenessSurvey: This value is available only in version 2.0.6-Preview2 of the module as part of a Private Preview.

```yaml
Type: String
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
