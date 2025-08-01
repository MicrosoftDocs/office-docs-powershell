---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cstenanttrustedipaddress
applicable: Microsoft Teams
title: Get-CsTenantTrustedIPAddress
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsTenantTrustedIPAddress

## SYNOPSIS
Returns information about the external trusted IPs in the tenant. Trusted IP address from user's endpoint will be checked to determine which internal subnet the user's endpoint is located.

## SYNTAX

### Identity (Default)
```
Get-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
External trusted IPs are the Internet external IPs of the enterprise network and are used to determine if the user's endpoint is inside the corporate network before checking for a specific site match. Trusted IP addresses in both IPv4 and IPv6 formats are accepted.

If the user's external IP matches one defined in the trusted list, then Location-Based Routing will check to determine which internal subnet the user's endpoint is located. If the user's external IP doesn't match one defined in the trusted list, the endpoint will be classified as being at an unknown and any PSTN calls to/from an LBR enabled user are blocked.

Location Based Routing is a feature which allows PSTN toll bypass to be restricted for users based upon policy and the user's geographic location at the time of an incoming or outgoing PSTN call.

Location-Based Routing leverages the same network regions, sites, and subnets concept that is available in Skype for Business Server. It is now available in O365 for Teams clients. For toll bypass restricted locations, each IP subnet and PSTN gateway for that location are associated to a network site by the administrator. A user's location is determined by the IP subnet which the user's Teams endpoint(s) is connected to at the time of a PSTN call. A user may have multiple Teams clients located at different sites, in which case Location-Based Routing will enforce each client's routing separately depending on the location of its endpoint.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Get-CsTenantTrustedIPAddress
```

The command shown in Example 1 returns the list of trusted IP addresses for the current tenant.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> Get-CsTenantTrustedIPAddress -Identity '2001:4898:e8:25:8440::'
```

The command shown in Example 2 returns the IPv6 format trusted IP address detail of '2001:4898:e8:25:8440::'.

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
The Identity parameter is a unique identifier that designates the scope. It specifies the collection of trusted IP address to be returned.

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
Globally unique identifier (GUID) of the tenant account whose trusted IP addresses are being returned.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
