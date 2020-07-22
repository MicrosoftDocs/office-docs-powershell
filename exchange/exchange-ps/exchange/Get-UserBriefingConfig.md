---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-userbriefingconfig
applicable: Exchange Online
title: Get-UserBriefingConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
monikerRange: "exchonline-ps"
---

# Get-UserBriefingConfig

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Get-UserBriefingConfig cmdlet to get the current state of the Briefing email flag for the specified user. For more details about configuring the Briefing email, see [Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UserBriefingConfig -Identity <string> [-ResultSize <Unlimited>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later. Also, you need to be a member of the Organization Management role group (Global admins).

## EXAMPLES

### Example 1
```powershell
Get-UserBriefingConfig -Identity lila@contoso.com
```

This example returns the Briefing configuration for the user lila@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to view (for example, lila@contoso.com).

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

## INPUTS

###  

## OUTPUTS

###  

## Related links

[Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin)
