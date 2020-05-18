---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-userbriefingconfig
applicable: Exchange Online
title: Get-UserBriefingConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
monikerRange: "exchonline-ps"
---

# Get-UserBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-UserBriefingConfig cmdlet to get the current state of the Briefing email flag for the specified user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UserBriefingConfig -Identity <string>
```

## DESCRIPTION
Gets the current state of the Briefing email flag (true or false) for the specified user.

## EXAMPLES

### Example 1
```powershell
Get-UserBriefingConfig -Identity lila@contoso.com
```

This example returns the Briefing configuration for the user lila@contoso.com.

## PARAMETERS

### -Identity

The Identity parameter specifies the mailbox that you want to view. You identify the mailbox by its UPN (for example, lila@contoso.com).

```yaml
Type: String
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
Applies to: Exchange Online
```

## INPUTS

Not applicable

## OUTPUTS

Not applicable
