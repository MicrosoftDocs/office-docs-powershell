---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworkregion
schema: 2.0.0
title: New-CsTenantNetworkRegion
---

# New-CsTenantNetworkRegion

## SYNOPSIS
Creates a new network region.

## SYNTAX

### Identity (Default)
```
New-CsTenantNetworkRegion [-Identity] <string> [-BypassID <string>] [-CentralSite <string>]
 [-Description <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantNetworkRegion -NetworkRegionID <string> [-BypassID <string>] [-CentralSite <string>]
[-Description <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A network region interconnects various parts of a network across multiple geographic areas. The RegionID parameter is a logical name that represents the geography of the region and has no dependencies or restrictions. The organization's network region is used for Location-Based Routing.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. A network region contains a collection of network sites. For example, if your organization has many sites located in Redmond, then you may choose to designate "Redmond" as a network region.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTenantNetworkRegion -NetworkRegionID "RegionA"
```

The command shown in Example 1 creates the network region 'RegionA' with no description. Identity and CentralSite will both be set identically to NetworkRegionID.

## PARAMETERS

### -BypassID
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
Provide a description of the network region to identify purpose of creating it.

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
Unique identifier for the network region to be created.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID
The name of the network region. This must be a string that is unique. You cannot specify an NetworkRegionID and an Identity at the same time.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworkregion)

[Remove-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworkregion)

[Set-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworkregion)
