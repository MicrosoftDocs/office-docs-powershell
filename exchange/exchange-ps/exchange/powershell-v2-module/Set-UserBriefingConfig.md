---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/set-userbriefingconfig
applicable: Exchange Online
title: Set-UserBriefingConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
monikerRange: "exchonline-ps"
---

# Set-UserBriefingConfig

## SYNOPSIS

This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Set-UserBriefingConfig cmdlet to enable or disable the Briefing for a user. For more details about configuring the Briefing, see [Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin). 


## SYNTAX

```
Set-UserBriefingConfig -Identity <String> [-Enabled [<$true | $false>]
```

## DESCRIPTION

To enable or disable Briefing email for a specific user, use the Exchange Online PowerShell V2 module and this command line, where the string is the applicable username and organization.

## EXAMPLES

### Example 1

```powershell
Set-UserBriefingConfig -Enabled $true -Identity lila@contoso.com
```

This example enables the Briefing email for lila@contoso.com.

## PARAMETERS

### -Enabled
The Enabled parameter specifies whether to enable or disable the Briefing email for a specified user's mailbox. Valid values are:

- $true: The daily briefing message is enabled. This is the default value.

- $false: The daily briefing message is disabled.

```yaml
Type: Boolean
Parameter Sets: None
Aliases: None
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You identify the mailbox by its UPN (for example, lila@contoso.onmicrosoft.com).

```yaml
Type: String
Parameter Sets: None
Aliases: None
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

###  

## OUTPUTS

###  

## RELATED LINKS

[Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin)
