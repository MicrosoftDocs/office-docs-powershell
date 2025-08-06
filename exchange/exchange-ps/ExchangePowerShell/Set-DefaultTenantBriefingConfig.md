---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-defaulttenantbriefingconfig
schema: 2.0.0
title: Set-DefaultTenantBriefingConfig
---

# Set-DefaultTenantBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Set-DefaultTenantBriefingConfig cmdlet to modify the default Briefing email configuration in cloud-based organizations. For details about configuring the Briefing email, see [Configure Briefing email](https://learn.microsoft.com/viva/insights/personal/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DefaultTenantBriefingConfig -IsEnabledByDefault <String>
 [-ResultSize <Unlimited>]
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
```
Set-DefaultTenantBriefingConfig -IsEnabledByDefault Opt-in

This example sets the default Briefing email configuration for the organization to receive the Briefing email.
```

## PARAMETERS

### -IsEnabledByDefault

> Applicable: Exchange Online

The IsEnabledByDefault parameter specifies the default Briefing email configuration for the organization. Valid values are:

- Opt-in: By default, all users in the organization are subscribed to receive the Briefing email.
- Opt-out: By default, no users in the organization are subscribed to receive the Briefing email. This value is the default.

This setting affects the following users:

- Existing users who haven't already updated their user settings to opt-in or opt-out of the Briefing email.
- New users that you create.

This setting does not affect users who've already updated their user settings to opt-in or opt-out of the Briefing email.

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
Type: Microsoft.Exchange.Management.RestApiClient.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Deploy personal insights](https://learn.microsoft.com/viva/insights/personal/setup/deployment-guide)
