---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworkconfiguration
applicable: Microsoft Teams
title: Get-CsTenantNetworkConfiguration
schema: 2.0.0
ms.reviewer:
---

# Get-CsTenantNetworkConfiguration

## SYNOPSIS
Returns information about the network regions, sites and subnets in the tenant network configuration. Tenant network configuration is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
Get-CsTenantNetworkConfiguration [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTenantNetworkConfiguration [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Tenant Network Configuration contains the list of network sites, subnets and regions configured.

A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets.

A best practice for Location Based Routing (LBR) is to create a separate site for each location which has unique PSTN connectivity.  Each network site must be associated with a network region. Sites may be created as LBR or non-LBR enabled. A non-LBR enabled site may be created to allow LBR enabled users to make PSTN calls when they roam to that site. Note that network sites may also be used for emergency calling enablement and configuration.

IP subnets at the location where Teams endpoints can connect to the network must be defined and associated to a defined network in order to enforce toll bypass.

Multiple subnets may be associated with the same network site, but multiple sites may not be associated with a same subnet. This association of subnets enables Location-Based routing to locate the endpoints geographically to determine if a given PSTN call should be allowed. Both IPv4 and IPv6 subnets are supported. When determining if a Teams endpoint is located at a site an IPv6 address will be checked for a match first.

A network region interconnects various parts of a network across multiple geographic areas.

A network region contains a collection of network sites. For example, if your organization has many sites located in India, then you may choose to designate "India" as a network region.

Location-Based Routing is a feature that allows PSTN toll bypass to be restricted for users based on policy and the user's geographic location at the time of an incoming or outgoing PSTN call.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. It is now available in Microsoft 365 for Teams clients. For toll bypass restricted locations, each IP subnet and PSTN gateway for that location are associated to a network site by the administrator. A user's location is determined by the IP subnet which the user's Teams endpoint(s) is connected to at the time of a PSTN call. A user may have multiple Teams clients located at different sites, in which case Location-Based Routing will enforce each client's routing separately depending on the location of its endpoint.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTenantNetworkConfiguration
```
The command shown in Example 1 returns the list of network configuration for the current tenant.

### Example 2
```powershell
PS C:\> Get-CsTenantNetworkConfiguration -Identity Global
```
The command shown in Example 2 returns the network configuration within the scope of Global.

### Example 3
```powershell
PS C:\> Get-CsTenantNetworkConfiguration -Filter "global"
```
The command shown in Example 3 returns the network site that matches the specified filter.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the network configuration (or network configurations) to be returned.

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
The Identity parameter is a unique identifier for the network configuration.

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
### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Identity
The Identity of the network configuration.

### NetworkRegions
The list of network regions of the network configuration.

### NetworkSites
The list of network sites of the network configuration.

### Subnets
The list of network subnets of the network configuration.

### PostalCodes
This parameter is reserved for internal Microsoft use.

## NOTES

## RELATED LINKS
[Get-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite)
[Get-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite)
[Get-CsTenantNetworkRegion](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite)

