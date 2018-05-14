---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsVideoTrunkConfiguration
schema: 2.0.0
---

# Get-CsVideoTrunkConfiguration

## SYNOPSIS
Use the Get-CsVideoTrunkConfiguration to retrieve Video Trunk configuration settings.
Video trunk settings define the Session Initiation Protocol (SIP) trunk between the Video Interoperability Server (VIS) and a Video Gateway.

## SYNTAX

### Filter
```
Get-CsVideoTrunkConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsVideoTrunkConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Video Trunk configuration settings are scoped to appropriate Video Gateway instances, and will govern the behavior of the SIP Trunk between each Video Gateway instance and the paired Video Interop Server instance that together define the Video Trunk.
The Video Interop Server in Skype for Business Server 2015 enables you to incorporate 3rd party video teleconferencing systems (VTCs) into your Skype for Business Server infrastructure.
The Video Interop Server is a Skype service that runs on a standalone pool and cannot be co-located on an FE pool.

To enable the Video Interop Server, you must use Topology Builder to define at least one VIS instance.
Each VIS instance will typically be associated with one or more Video Gateways.
Video Gateways route traffic between internal and third party video devices such as an internal Skype endpoint receiving video from an third party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a Video Interop Server (VIS) use a Session Initiation Protocol (SIP) trunk to connect video calls between third party VTCs and internal endpoints.

Video Trunks settings can be managed by using the CsVideoTrunkConfiguration cmdlets.
These settings are used to manage the following Video Trunk characteristics.

RTCP for active calls for active calls

RTCP for calls on hold

Secure Real-time Transport Protocol (SRTP) use when Transport Layer Security (TLS) is used for the SIP signaling

Session timers usage on the Video Interop Server (VIS) for dialogs associated with a Video Trunk

By default, Skype for Business Server 2015 ships with a single, global collection of Video Trunk configuration settings.
However, administrators can use the New-CsVideoTrunkConfiguration cmdlet to create additional settings at the site or the service scope (for the Video Gateway service only).

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsVideoTrunkConfiguration
```

This example returns information about all the Video Trunk configurations in the organization.


### -------------------------- Example 2 -------------------------- 
```
Get-CsVideoTrunkConfiguration -Identity "site:Seattle"
```

This example returns information for a collection of Video Trunk configuration settings scoped to the Seattle site.


### -------------------------- Example 3 -------------------------- 
```
Get-CsVideoTrunkConfiguration -Filter "site:*"
```

This example returns all the Video Trunk configurations configured at the site scope.
This is done by including the Filter parameter and the filter value "site:*".

### -------------------------- Example 4 -------------------------- 
```
Get-CsVideoTrunkConfiguration | Where-Object {$_.EnableSessionTimer -eq $True}
```

This example returns information about all the Video Trunk configurations for which session timers have been enabled.
This is done by first using Get-CsVideoTrunkConfiguration to return a collection of all the available configurations.
That collection is then piped to the Where-Object cmdlet, which filters the output by the EnableSessionTimer property setting.


## PARAMETERS

### -Filter
The Filter parameter enables you to use wildcard characters in order to return one or more collections of Video Interop Server configuration settings.
For example, to return all the settings that have been configured at the site scope use the following syntax: -Filter "site:*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the Video Trunk configuration to retrieve.
Video Trunk configuration settings can be configured at the global, site, or service scope (for the VideoGateway service only).
To refer to the global instance, use this syntax: -Identity "global"

To refer to a collection at the site scope: -Identity "site:Redmond"

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is specified then the Get-CsVideoTrunkConfiguration cmdlet returns information about all the Video Trunk configurations in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the Video Trunk configuration data from the local copy of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The Get-CsVideoTrunkConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsVideoTrunkConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoTrunkConfiguration object.

## NOTES

## RELATED LINKS

[New-CsVideoTrunkConfiguration](New-CsVideoTrunkConfiguration.md)

[Set-CsVideoTrunkConfiguration](Set-CsVideoTrunkConfiguration.md)

[Remove-CsVideoTrunkConfiguration](Remove-CsVideoTrunkConfiguration.md)
