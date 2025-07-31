---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-vivainsightssettings
schema: 2.0.0
title: Set-VivaInsightsSettings
---

# Set-VivaInsightsSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

**Note**: This cmdlet is available only in version 2.0.5 or later of the module.

Use the Set-VivaInsightsSettings cmdlet to control user access to features in Viva Insights. Only users with provisioned Exchange Online mailboxes can access features within the Viva Insights app in Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-VivaInsightsSettings -Identity <String> -Enabled <Boolean> -Feature <String>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Teams Administrator

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Set-VivaInsightsSettings -Identity roy@contoso.onmicrosoft.com -Enabled $false -Feature headspace
```

This example disables access to all the Headspace features in Microsoft Viva Insights in Microsoft Teams for the specified user.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the user that you want to modify. You identify the user by their User Principal Name (UPN) (for example, roy@contoso.onmicrosoft.com).

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

### -Enabled

> Applicable: Exchange Online

The Enabled parameter enables or disables access to specific features of Microsoft Viva Insights in Microsoft Teams for the user. Valid values are:

- $true: The specified features in Microsoft Viva Insights in Microsoft Teams are enabled for the user.
- $false: The specified features in Microsoft Viva Insights in Microsoft Teams are disabled for the user.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Feature

> Applicable: Exchange Online

The Feature parameter specifies the feature of Microsoft Viva Insights in Microsoft Teams for the user. Valid values are:

- Headspace: Represents all features of Headspace.
- MeetingEffectivenessSurvey: This value is available only in version 2.0.6-Preview2 of the module as part of a Private Preview.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: headspace

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
