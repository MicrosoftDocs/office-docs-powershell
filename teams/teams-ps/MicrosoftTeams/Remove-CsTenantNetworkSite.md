---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworksite
schema: 2.0.0
title: Remove-CsTenantNetworkSite
---

# Remove-CsTenantNetworkSite

## SYNOPSIS
Use the `Remove-CsTenantNetworkSite` cmdlet to remove a tenant network site.

## SYNTAX

```
Remove-CsTenantNetworkSite [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantNetworkSite` cmdlet removes an existing tenant network site.

A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTenantNetworkSite -Identity "site1"
```

The command shown in Example 1 removes 'site1'.

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
Unique identifier for the network site to be removed.

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
[New-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworksite)

[Get-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite)

[Set-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworksite)
