---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/en-us/viva/insights/personal/setup/deployment-guide
applicable: Exchange Online
title: Set-DefaultTenantBriefingConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-DefaultTenantBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0-Preview1 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Set-DefaultTenantBriefingConfig cmdlet to modify the default Briefing email configuration in cloud-based organizations. For details about configuring the Briefing email, see [Configure Briefing email](https://learn.microsoft.com/viva/insights/personal/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DefaultTenantBriefingConfig -PrivacyMode <String>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

For more information, see, see [Azure AD built-in roles](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference).

## EXAMPLES

### Example 1
```powershell
Set-DefaultTenantBriefingConfig -PrivacyMode Opt-in

This example sets the default Briefing email configuration for the organization to receive the Briefing email.
```

## PARAMETERS

### -PrivacyMode
The PrivacyMode parameter specifies the default Briefing email configuration for the organization. Valid values are:

- Opt-in: By default, all users in the organization are subscribed to receive the Briefing email.
- Opt-out: By default, no users in the organization are subscribed to receive the Briefing email. This is the default value.

This setting affects the following users:

- Existing users who haven't already updated their user settings to opt-in or opt-out of the Briefing email.
- New users that you create.

This setting does not affect users who've already updated their user settings to opt-in or opt-out of the Briefing email.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: Opt-in, Opt-out
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

We're in the process of verifying that this cmdlet works for guest user, DAP, and GDAP scenarios.

## RELATED LINKS
