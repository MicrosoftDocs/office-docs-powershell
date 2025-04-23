---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworksite
applicable: Microsoft Teams
title: New-CsTenantNetworkSite
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# New-CsTenantNetworkSite

## SYNOPSIS
As an admin, you can use the Teams PowerShell command, New-CsTenantNetworkSite to define network sites. Network sites are defined as a collection of IP subnets. Each network site must be associated with a network region. The organization's network site is used for Location-Based Routing.

## SYNTAX

### Identity (Default)
```
New-CsTenantNetworkSite [-Identity] <string> [-Description <string>] [-EmergencyCallingPolicy <string>]
 [-EmergencyCallRoutingPolicy <string>] [-EnableLocationBasedRouting <bool>] [-LocationPolicy <string>]
 [-NetworkRegionID <string>] [-NetworkRoamingPolicy <string>] [-SiteAddress <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantNetworkSite -NetworkSiteID <string> [-Description <string>] [-EmergencyCallingPolicy <string>]
 [-EmergencyCallRoutingPolicy <string>] [-EnableLocationBasedRouting <bool>] [-LocationPolicy <string>]
 [-NetworkRegionID <string>] [-NetworkRoamingPolicy <string>] [-SiteAddress <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets. Each network site must be associated with a network region.

A best practice for Location Based Routing (LBR) is to create a separate site for each location which has unique PSTN connectivity. Sites may be created as LBR or non-LBR enabled. A non-LBR enabled site may be created to allow LBR enabled users to make PSTN calls when they roam to that site. Note that network sites may also be used for emergency calling enablement and configuration. In addition, network sites can also be used for configuring Network Roaming Policy capabilities.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTenantNetworkSite -NetworkSiteID "MicrosoftSite1" -NetworkRegionID "RegionRedmond"
```

The command shown in Example 1 created the network site 'MicrosoftSite1' with no description. Identity will be set identical with NetworkSiteID.

The network region 'RegionRedmond' is created beforehand and 'MicrosoftSite1' will be associated with 'RegionRedmond'.

NetworkSites can exist without all parameters excepts NetworkSiteID. NetworkRegionID can be left blank.

### Example 2
```powershell
PS C:\> New-CsTenantNetworkSite -NetworkSiteID "site2" -Description "site 2" -NetworkRegionID "RedmondRegion" -LocationPolicy "TestLocationPolicy" -EnableLocationBasedRouting $true
```

The command shown in Example 2 creates the network site 'site2' with the description 'site 2'. This site is enabled for LBR, and associates with network region 'RedmondRegion' and with location policy 'TestLocationPolicy'.

### Example 3
```powershell
PS C:\> New-CsTenantNetworkSite -NetworkSiteID "site3" -Description "site 3" -NetworkRegionID "RedmondRegion" -NetworkRoamingPolicy "TestNetworkRoamingPolicy"
```

The command shown in Example 3 creates the network site 'site3' with the description 'site 3'. This site is enabled for network roaming capabilities. The example associates the site with network region 'RedmondRegion' and network roaming policy 'TestNetworkRoamingPolicy'.
## PARAMETERS

### -Identity
Unique identifier for the network site to be created.

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

### -Description
Provide a description of the network site to identify purpose of creating it.

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

### -EmergencyCallingPolicy
This parameter is used to assign a custom emergency calling policy to a network site. For more information see [Assign a custom emergency calling policy to a network site](https://learn.microsoft.com/microsoftteams/manage-emergency-calling-policies#assign-a-custom-emergency-calling-policy-to-a-network-site).

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

### -LocationPolicy
This parameter is reserved for Microsoft internal use.

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
NetworkRegionID is the identifier for the network region to which the current network site is associated to.

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

### -NetworkSiteID
The name of the network site. This must be a string that is unique. You cannot specify an NetworkSiteID and an Identity at the same time.

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

### -SiteAddress
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
[Get-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite)

[Remove-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworksite)

[Set-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworksite)
