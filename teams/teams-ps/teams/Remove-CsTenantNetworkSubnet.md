---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworksubnet
applicable: Microsoft Teams
title: Remove-CsTenantNetworkSubnet
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Remove-CsTenantNetworkSubnet

## SYNOPSIS
Use the `Remove-CsTenantNetworkSubnet` cmdlet to remove a tenant network subnet.

## SYNTAX

```
Remove-CsTenantNetworkSubnet [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantNetworkSubnet` cmdlet removes an existing tenant network subnet.

IP subnets at the location where Teams endpoints can connect to the network must be defined and associated to a defined network in order to enforce toll bypass. Multiple subnets may be associated with the same network site, but multiple sites may not be associated with a same subnet. This association of subnets enables Location-Based routing to locate the endpoints geographically to determine if a given PSTN call should be allowed.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTenantNetworkSubnet -Identity "192.168.0.1"
```

The command shown in Example 1 removes '192.168.0.1'.

## PARAMETERS

### -Identity
Unique identifier for the network subnet to be removed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[New-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworksubnet)

[Get-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksubnet)

[Set-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworksubnet)
