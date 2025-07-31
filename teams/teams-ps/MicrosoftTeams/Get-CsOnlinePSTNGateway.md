---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinepstngateway
schema: 2.0.0
title: Get-CsOnlinePSTNGateway
---

# Get-CsOnlinePSTNGateway

## SYNOPSIS
Shows the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

### Identity (Default)
```
Get-CsOnlinePSTNGateway [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsOnlinePSTNGateway [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to show the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state. When the Enabled parameter set to $false, the SBC will continue existing calls, bit all new calls routed to another SBC in a route (if exists).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsOnlinePSTNGateway
```

This example shows all SBCs paired with the tenant.

### Example 2
```powershell
PS C:\> Get-CsOnlinePSTNGateway -Filter "*.contoso.com"
```

This example selects all SBCs with identities matching the pattern *.contoso.com, such as sbc1.contoso.com and sbc2.contoso.com.

## PARAMETERS

### -Filter

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

The parameter is optional for the cmdlet. If not set all SBCs paired to the tenant are listed.

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

[Set-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/set-csonlinepstngateway)

[New-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/new-csonlinepstngateway)

[Remove-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/remove-csonlinepstngateway)
