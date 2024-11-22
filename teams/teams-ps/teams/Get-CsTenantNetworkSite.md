---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksite
applicable: Microsoft Teams
title: Get-CsTenantNetworkSite
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsTenantNetworkSite

## SYNOPSIS
Returns information about the network site setting in the tenant. Tenant network site is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
Get-CsTenantNetworkSite [[-Identity] <string>] [-IncludePhoneNumbers <bool>] [<CommonParameters>]
```

### QueryParameter
```
Get-CsTenantNetworkSite [-IncludePhoneNumbers <bool>] [-Filter <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTenantNetworkSite [-IncludePhoneNumbers <bool>] [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets.

A best practice for Location Bsed Routing (LBR) is to create a separate site for each location which has unique PSTN connectivity.  Each network site must be associated with a network region. Sites may be created as LBR or non-LBR enabled. A non-LBR enabled site may be created to allow LBR enabled users to make PSTN calls when they roam to that site. Note that network sites may also be used for emergency calling enablement and configuration.

Location Based Routing is a feature which allows PSTN toll bypass to be restricted for users based upon policy and the user's geographic location at the time of an incoming or outgoing PSTN call.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. It is now available in O365 for Teams clients. For toll bypass restricted locations, each IP subnet and PSTN gateway for that location are associated to a network site by the administrator. A user's location is determined by the IP subnet which the user's Teams endpoint(s) is connected to at the time of a PSTN call. A user may have multiple Teams clients located at different sites, in which case Location-Based Routing will enforce each client's routing separately depending on the location of its endpoint.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTenantNetworkSite
```
The command shown in Example 1 returns the list of network sites for the current tenant.

### Example 2
```powershell
PS C:\> Get-CsTenantNetworkSite -Identity siteA
```
The command shown in Example 2 returns the network site within the scope of siteA.

### Example 3
```powershell
PS C:\> Get-CsTenantNetworkSite -Filter "Los Angeles"
```
The command shown in Example 3 returns the network site that matches the specified filter.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the site (or sites) to be returned.

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
The Identity parameter is a unique identifier for the site.

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

### -IncludePhoneNumbers
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: All
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
The Identity of the site.

### Description
The description of the site.

### NetworkRegionID
The network region ID of the site.

### LocationPolicyID
The ID of the location policy assigned to the site.

### SiteAddress
This parameter is reserved for internal Microsoft use.

### NetworkSiteID
The ID of the network site.

### OnlineVoiceRoutingPolicyTagID
The ID of the online voice routing policy assigned to the site.

### EnableLocationBasedRouting
Boolean stating whether Location-Based Routing is enabled on the site.

### EmergencyCallRoutingPolicyTagID
The ID of the Teams emergency call routing policy assigned to the site.

### EmergencyCallingPolicyTagID
The ID of the Teams emergency calling policy assigned to the site.

### NetworkRoamingPolicyTagID
The ID of the Teams network roaming policy assigned to the site.

### EmergencyCallRoutingPolicyName
The name of the Teams emergency call routing policy assigned to the site.

### EmergencyCallingPolicyName
The name of the Teams emergency calling policy assigned to the site.

### NetworkRoamingPolicyName
The name of the Teams network roaming policy assigned to the site.

### PhoneNumbers
This parameter is reserved for internal Microsoft use.

## NOTES
The parameter IncludePhoneNumbers was introduced in Teams PowerShell Module 5.5.0.

## RELATED LINKS
[New-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworksite)

[Remove-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworksite)

[Set-CsTenantNetworkSite](https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworksite)
