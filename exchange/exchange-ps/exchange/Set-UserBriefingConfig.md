---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-userbriefingconfig
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

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UserBriefingConfig -Identity <String> [-Enabled [<$true | $false>] [-ResultSize <Unlimited>]
```

## DESCRIPTION
To enable or disable Briefing email for a specific user, use the Exchange Online PowerShell V2 module and this command line, where the string is the applicable username.

## EXAMPLES

### Example 1

```powershell
Set-UserBriefingConfig -Identity lila@contoso.com -Enabled $true
```

This example enables the Briefing email for lila@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to modify (for example, lila@contoso.onmicrosoft.com).

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
The Enabled parameter specifies whether to enable or disable the Briefing email for a specified user's mailbox. Valid values are:

- $true: The daily briefing message is enabled.

- $false: The daily briefing message is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: False
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
Accept pipeline input: False	Accept pipeline input: False
Accept wildcard characters: False	Accept wildcard characters: False
```

## INPUTS

###  

## OUTPUTS

###  

## RELATED LINKS

[Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin)
