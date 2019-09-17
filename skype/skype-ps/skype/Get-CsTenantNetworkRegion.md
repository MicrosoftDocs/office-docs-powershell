---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTenantNetworkRegion
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsTenantNetworkRegion

## SYNOPSIS
Returns information about the network region setting in the tenant. Tenant network region is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
Get-CsTenantNetworkRegion [-Tenant <System.Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTenantNetworkRegion [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
A network region interconnects various parts of a network across multiple geographic areas. 

A network region contains a collection of network sites. For example, if your organization has many sites located in India, then you may choose to designate “India” as a network region.

Location Based Routing is a feature which allows PSTN toll bypass to be restricted for users based upon policy and the user’s geographic location at the time of an incoming or outgoing PSTN call. 

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. It is now available in O365 for Teams clients. For toll bypass restricted locations, each IP subnet and PSTN gateway for that location are associated to a network site by the administrator. A user’s location is determined by the IP subnet which the user’s Teams endpoint(s) is connected to at the time of a PSTN call. A user may have multiple Teams clients located at different sites, in which case Location-Based Routing will enforce each client’s routing separately depending on the location of its endpoint.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Get-CsTenantNetworkRegion
```

The command shown in Example 1 returns the list of network regions for the current tenant.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> Get-CsTenantNetworkRegion -Identity RedmondRegion
```

The command shown in Example 2 returns the network region within the scope of RedmondRegion.

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
The Identity parameter is a unique identifier that designates the scope. It specifies the collection of tenant network region to be returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose network regions are being returned.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
