---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsVideoTrunkConfiguration
schema: 2.0.0
---

# Remove-CsVideoTrunkConfiguration

## SYNOPSIS
Use the `Remove-CsVideoTrunkConfiguration` to remove one or more Video Trunk configurations.
Video Trunk configuration settings are scoped to Video Gateway instances and govern the behavior of the Session Initiation Protocol (SIP) trunk between each Video Gateway instance and the paired Video Interop Server instance that together define the Video Trunk.

## SYNTAX

```
Remove-CsVideoTrunkConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Video Interop Server (VIS) in Skype for Business Server incorporates 3rd party video teleconferencing systems (VTCs) into your Skype for Business Server 2015 infrastructure.
The VIS is a service that runs on a standalone pool and cannot be co-located on an FE pool.

To enable the Video Interop Server, you must use Topology Builder to define at least one VIS instance.
Each VIS instance will typically be associated with one or more Video Gateways.
Video Gateways route traffic between internal and third party video devices such as an internal Skype endpoint receiving video from an third party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a Video Interop Server (VIS) use a Session Initiation Protocol (SIP) trunk to connect video calls between third party VTCs and internal endpoints.

Video Trunks settings can be managed by using the CsVideoTrunkConfiguration cmdlets.
These settings are used to manage the following Video Trunk characteristics.

RTCP for active calls

RTCP for calls on hold

Secure Real-time Transport Protocol (SRTP) use when Transport Layer Security (TLS) is used for the SIP signaling

Session timers usage on the Video Interop Server (VIS) for dialogs associated with a Video Trunk

By default, Skype for Business Server ships with a single, global collection of Video Trunk configuration settings.
However, administrators can use the `New-CsVideoTrunkConfiguration` cmdlet to create additional settings at the site or the service scope (for the Video Gateway service only).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVideoTrunkConfiguration -Identity "site:Seattle"
```

This example removes the Video Trunk configuration settings scoped to the Seattle site.


### -------------------------- Example 2 --------------------------
```
Get-CsVideoTrunkConfiguration -Filter "site:*" | Remove-CsVideoTrunkConfiguration
```

This example removes all the configuration settings that have been scoped at the site level.
The command first calls the `Get-CsVideoTrunkConfiguration` cmdlet along with the Filter parameter that limits the returns to configurations scoped at the site level.
Those configuration objects are then piped to, and removed by, the `Remove-CsVideoTrunkConfiguration` cmdlet.


## PARAMETERS

### -Identity
The Identity parameter specifies the Video Trunk configuration to remove.
Video Trunk configuration settings can be configured at the global, site, or service scope (for the VideoGateway service only).
To refer to the global instance, use this syntax: `-Identity "global"` To refer to a collection at the site scope: `-Identity "site:Redmond"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.

The `Remove-CsVideoTrunkConfiguration` cmdlet can be run against the single global collection of settings.
However, that single global collection will not be deleted.
Instead, all the properties within the collection will be reset to their default values.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
The` Remove-CsVideoTrunkConfiguration` cmdlet accepts pipelined input of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoTrunkConfiguration object.

## OUTPUTS

###  
None.
The `Remove-CsVideoTrunkConfiguration` cmdlet removes specified Microsoft.Rtc.Management.WritableConfig.Settings.VideoTrunkConfiguration objects.

## NOTES

## RELATED LINKS

[Get-CsVideoTrunkConfiguration](Get-CsVideoTrunkConfiguration.md)

[New-CsVideoTrunkConfiguration](New-CsVideoTrunkConfiguration.md)

[Set-CsVideoTrunkConfiguration](Set-CsVideoTrunkConfiguration.md)
