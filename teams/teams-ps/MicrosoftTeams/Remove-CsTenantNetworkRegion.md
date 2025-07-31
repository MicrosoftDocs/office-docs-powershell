---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworkregion
schema: 2.0.0
title: Remove-CsTenantNetworkRegion
---

# Remove-CsTenantNetworkRegion

## SYNOPSIS
Use the `Remove-CsTenantNetworkRegion` cmdlet to remove a tenant network region.

## SYNTAX
```
Remove-CsTenantNetworkRegion [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantNetworkRegion` cmdlet removes an existing tenant network region.

A network region contains a collection of network sites.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTenantNetworkRegion -Identity "RedmondRegion"
```

The command shown in Example 1 removes 'RedmondRegion'.

## PARAMETERS

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

### -Identity
Unique identifier for the network region to be removed.

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

### System.Object

## NOTES

## RELATED LINKS
[New-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworkregion)

[Get-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworkregion)

[Set-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworkregion)
