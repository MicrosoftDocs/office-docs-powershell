---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantnetworkregion
schema: 2.0.0
title: Set-CsTenantNetworkRegion
---

# Set-CsTenantNetworkRegion

## SYNOPSIS
Changes the definintion of network regions.

## SYNTAX

### Identity (Default)
```
Set-CsTenantNetworkRegion [[-Identity] <string>] [-CentralSite <string>] [-Description <string>]
 [-NetworkRegionID <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can use the Teams PowerShell command, Set-CsTenantNetworkRegion to define network regions. A network region interconnects various parts of a network across multiple geographic areas. The RegionID parameter is a logical name that represents the geography of the region and has no dependencies or restrictions. The organization's network region is used for Location-Based Routing.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. A network region contains a collection of network sites. For example, if your organization has many sites located in Redmond, then you may choose to designate "Redmond" as a network region.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTenantNetworkRegion -Identity "RegionA" -Description "Region A"
```

The command shown in Example 1 sets the network region 'RegionA' with the description 'Region A'.

## PARAMETERS

### -CentralSite
This parameter is not used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -Description
Provide a description of the network region to identify purpose of setting it.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the network region to be set.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID
The name of the network region. Not required in this PowerShell command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/microsoftteams/new-cstenantnetworkregion)

[Remove-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/microsoftteams/remove-cstenantnetworkregion)

[Get-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/microsoftteams/get-cstenantnetworkregion)
