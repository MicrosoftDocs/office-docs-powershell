---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-userbriefingconfig
schema: 2.0.0
title: Set-UserBriefingConfig
---

# Set-UserBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Set-UserBriefingConfig cmdlet to enable or disable the Briefing email for a user. For more details about configuring the Briefing email, see [Configure Briefing email](https://learn.microsoft.com/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UserBriefingConfig -Identity <String> -Enabled <Boolean>
 [-ResultSize <Unlimited>]
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
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1

```powershell
Set-UserBriefingConfig -Identity lila@contoso.com -Enabled $true
```

This example enables the Briefing email for lila@contoso.com.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the user that you want to modify (for example, lila@contoso.onmicrosoft.com).

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

The Enabled parameter specifies whether to enable or disable the Briefing email for a specified user's mailbox. Valid values are:

- $true: The daily briefing message is enabled.
- $false: The daily briefing message is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: False
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

[Configure Briefing email](https://learn.microsoft.com/Briefing/be-admin)
