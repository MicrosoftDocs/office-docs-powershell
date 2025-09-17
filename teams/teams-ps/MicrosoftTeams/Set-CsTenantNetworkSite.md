---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantnetworksite
schema: 2.0.0
title: Set-CsTenantNetworkSite
---

# Set-CsTenantNetworkSite

## SYNOPSIS
Changes the definition of network sites.

## SYNTAX

### Identity (Default)
```powershell
Set-CsTenantNetworkSite [[-Identity] <string>] [-Description <string>] [-EmergencyCallingPolicy <string>] [-EmergencyCallRoutingPolicy <string>]
 [-EnableLocationBasedRouting <bool>] [-LocationPolicy <string>] [-NetworkRegionID <string>] [-NetworkRoamingPolicy <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets. Each network site must be associated with a network region.

A best practice for Location Based Routing (LBR) is to create a separate site for each location which has unique PSTN connectivity. Sites may be created as LBR or non-LBR enabled. A non-LBR enabled site may be created to allow LBR enabled users to make PSTN calls when they roam to that site. Note that network sites may also be used for emergency calling enablement and configuration. In addition, network sites can also be used for configuring Network Roaming Policy capabilities.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTenantNetworkSite -Identity "MicrosoftSite1" -NetworkRegionID "RegionRedmond" -Description "Microsoft site 1"
```

The command shown in Example 1 set the network site 'MicrosoftSite1' with description 'Microsoft site 1'.

The network region 'RegionRedmond' is created beforehand and 'MicrosoftSite1' will be associated with 'RegionRedmond'.

### Example 2
```powershell
PS C:\> Set-CsTenantNetworkSite -Identity "site2" -Description "site 2" -NetworkRegionID "RedmondRegion" -EnableLocationBasedRouting $true
```

The command shown in Example 2 sets the network site 'site2' with description 'site 2'. This site is enabled for LBR. The example associates the site with network region 'RedmondRegion'.

### Example 3
```powershell
PS C:\> Set-CsTenantNetworkSite -Identity "site3" -Description "site 3" -NetworkRegionID "RedmondRegion" -NetworkRoamingPolicy "TestNetworkRoamingPolicy"
```

The command shown in Example 3 sets the network site 'site3' with description 'site 3'. This site is enabled for network roaming capabilities. The example associates the site with network region 'RedmondRegion' and network roaming policy 'TestNetworkRoamingPolicy'.

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

### -Description
Provide a description of the network site to identify purpose of setting it.

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

### -EmergencyCallingPolicy
This parameter is used to assign a custom emergency calling policy to a network site. For more information, see [Assign a custom emergency calling policy to a network site](https://learn.microsoft.com/microsoftteams/manage-emergency-calling-policies#assign-a-custom-emergency-calling-policy-to-a-network-site).

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

### -EmergencyCallRoutingPolicy
This parameter is used to assign a custom emergency call routing policy to a network site. For more information, see [Assign a custom emergency call routing policy to a network site](https://learn.microsoft.com/microsoftteams/manage-emergency-call-routing-policies#assign-a-custom-emergency-call-routing-policy-to-a-network-site).

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

### -EnableLocationBasedRouting
This parameter determines whether the current site is enabled for Location-Based Routing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the network site to be set.

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

### -LocationPolicy
This parameter is reserved for internal Microsoft use.

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

### -NetworkRegionID
NetworkRegionID is the identifier for the network region which the current network site is associating to.

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

### -NetworkRoamingPolicy
NetworkRoamingPolicy is the identifier for the network roaming policy to which the network site will associate to.

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
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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
[New-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/microsoftteams/new-cstenantnetworksite)

[Remove-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/microsoftteams/remove-cstenantnetworksite)

[Get-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/microsoftteams/get-cstenantnetworksite)
