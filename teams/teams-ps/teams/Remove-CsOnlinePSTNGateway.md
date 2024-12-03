---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinepstngateway
applicable: Microsoft Teams
title: Remove-CsOnlinePSTNGateway
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Remove-CsOnlinePSTNGateway

## SYNOPSIS
Removes the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX
```
Remove-CsOnlinePSTNGateway [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration. Note the SBC must be removed from all voice routes before executing this cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsOnlinePSTNGateway -Identity sbc.contoso.com
```

This example removes SBC with Identity (and FQDN) sbc.contoso.com.

## PARAMETERS

### -Identity
The parameter is mandatory for the cmdlet. The Identity is the same as the SBC FQDN.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: ByPropertyName
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/set-csonlinepstngateway)

[New-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/new-csonlinepstngateway)

[Get-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/get-csonlinepstngateway)
