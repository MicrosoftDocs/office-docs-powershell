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

Use the Get-UserBriefingConfig cmdlet to get the current state of the Briefing email flag for the specified user. For more details about configuring the Briefing email, see [Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UserBriefingConfig -Identity <string> [-ResultSize <Unlimited>] [<CommonParameters>]
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
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.	

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

### CommonParameters	
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## Related links

[Configure Briefing email](https://docs.microsoft.com/Briefing/be-admin)
