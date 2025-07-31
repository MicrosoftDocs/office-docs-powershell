---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinepstnusage
schema: 2.0.0
title: Get-CsOnlinePstnUsage
---

# Get-CsOnlinePstnUsage

## SYNOPSIS
Returns information about online public switched telephone network (PSTN) usage records used in your tenant.

## SYNTAX

### Identity (Default)
```
Get-CsOnlinePstnUsage [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsOnlinePstnUsage [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Online PSTN usages are string values that are used for call authorization. An online PSTN usage links an online voice policy to a route. The `Get-CsOnlinePstnUsage` cmdlet retrieves the list of all online PSTN usages available within a tenant.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### Example 1
```
PS C:\> Get-CSOnlinePSTNUsage
```

This command returns the list of global PSTN usages available within the tenant.

## PARAMETERS

### -Filter
The Filter parameter allows you to retrieve only those PSTN usages with an Identity matching a particular wildcard string. However, the only Identity available to PSTN usages is Global, so this parameter is not useful for this cmdlet.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The level at which these settings are applied. The only identity that can be applied to PSTN usages is Global.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Set-CsOnlinePstnUsage](https://learn.microsoft.com/powershell/module/teams/set-csonlinepstnusage)
