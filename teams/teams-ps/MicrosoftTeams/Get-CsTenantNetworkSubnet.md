---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-cstenantnetworksubnet
schema: 2.0.0
title: Get-CsTenantNetworkSubnet
---

# Get-CsTenantNetworkSubnet

## SYNOPSIS
Returns information about the network subnet setting in the tenant. Tenant network subnet is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
Get-CsTenantNetworkSubnet [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTenantNetworkSubnet [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
IP subnets at the location where Teams endpoints can connect to the network must be defined and associated to a defined network in order to enforce toll bypass.

Multiple subnets may be associated with the same network site, but multiple sites may not be associated with a same subnet. This association of subnets enables Location-Based routing to locate the endpoints geographically to determine if a given PSTN call should be allowed. Both IPv4 and IPv6 subnets are supported. When determining if a Teams endpoint is located at a site an IPv6 address will be checked for a match first.

Location Based Routing is a feature which allows PSTN toll bypass to be restricted for users based upon policy and the user's geographic location at the time of an incoming or outgoing PSTN call.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. It is now available in O365 for Teams clients. For toll bypass restricted locations, each IP subnet and PSTN gateway for that location are associated to a network site by the administrator. A user's location is determined by the IP subnet which the user's Teams endpoint(s) is connected to at the time of a PSTN call. A user may have multiple Teams clients located at different sites, in which case Location-Based Routing will enforce each client's routing separately depending on the location of its endpoint.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTenantNetworkSubnet
```

The command shown in Example 1 returns the list of network subnets for the current tenant.

### Example 2
```powershell
PS C:\> Get-CsTenantNetworkSubnet -Identity '2001:4898:e8:25:844e:926f:85ad:dd70'
```

The command shown in Example 2 returns the IPv6 format network subnet within the scope of '2001:4898:e8:25:844e:926f:85ad:dd70'.

## PARAMETERS

### -Filter
The Filter parameter allows you to limit the number of results based on filters you specify.

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
The Identity parameter is a unique identifier that designates the scope. It specifies the collection of tenant network subnets to be returned.

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

## NOTES

## RELATED LINKS

[New-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/microsoftteams/new-cstenantnetworksubnet)

[Remove-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/microsoftteams/remove-cstenantnetworksubnet)

[Set-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantnetworksubnet)
