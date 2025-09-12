---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-defaulttenantbriefingconfig
schema: 2.0.0
title: Get-DefaultTenantBriefingConfig
---

# Get-DefaultTenantBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-DefaultTenantBriefingConfig cmdlet to view the default Briefing email configuration in cloud-based organizations. For details about configuring the Briefing email, see [Configure Briefing email](https://learn.microsoft.com/viva/insights/personal/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DefaultTenantBriefingConfig
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
The default Briefing email configuration for the organization affects only new users and existing users who haven't already updated their user settings to opt-in or opt-out of the Briefing email.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Exchange Administrator
- Insights Administrator

For more information, see [Microsoft Entra built-in roles](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference).

> [!IMPORTANT]
> Microsoft strongly advocates for the principle of least privilege. Assigning accounts only the minimum permissions necessary to perform their tasks helps reduce security risks and strengthens your organization's overall protection. Global Administrator is a highly privileged role that you typically limit to emergency scenarios or when you can't use a different role.

## EXAMPLES

### Example 1
```
Get-DefaultTenantBriefingConfig
```

This example returns the default Briefing email configuration for the organization.

## PARAMETERS

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

[Deploy personal insights](https://learn.microsoft.com/viva/insights/personal/setup/deployment-guide)
