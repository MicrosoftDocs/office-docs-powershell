---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVideoTrunkConfiguration

## SYNOPSIS
Use the New-CsVideoTrunkConfiguration to create a new video trunk configuration containing settings to manage a video Session Initiation Protocol (SIP) trunk between the Video Interop Server (VIS) and a Video Gateway.

## SYNTAX

```
New-CsVideoTrunkConfiguration [-Identity] <XdsIdentity> [-Confirm]
 [-EnableMediaEncryptionForSipOverTls <Boolean>] [-EnableSessionTimer <Boolean>] [-Force]
 [-ForwardErrorCorrectionType <String>] [-GatewaySendsRtcpForActiveCalls <Boolean>]
 [-GatewaySendsRtcpForCallsOnHold <Boolean>] [-InMemory] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Video Interop Server in Skype for Business Server 2015 enables you to incorporate 3rd party video teleconferencing systems (VTCs) into your Skype for Business Server 2015 infrastructure.
The Video Interop Server is a Skype service that runs on a standalone pool and cannot be co-located on an FE pool.

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

By default, Skype for Business Server 2015 ships with a single, global collection of Video Trunk configuration settings.
However, administrators can use the New-CsVideoTrunkConfiguration cmdlet to create additional settings at the site or the service scope (for the Video Gateway service only).

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new collection of video trunk configuration settings that are assigned to the Redmond site.
Session timers are enabled on the new configuration by setting the EnableSessionTimer parameter to True ($True).

New-CsVideoTrunkConfiguration -Identity "site:Redmond" -EnableSessionTimer $True

## PARAMETERS

### -Identity
The Identity parameter specifies the unique identifier for the new collection of video trunk configuration settings.
New collections can be created at either the site scope or the service scope (for the Video Gateway service only).

For example, this syntax creates a new collection of settings assigned to the Redmond site: -Identity "site:Redmond".
And this syntax creates a new collection assigned to the Video Gateway "video-pbx-001.litwareinc.com": -Identity "service:VideoGateway:video-pbx-001.litwareinc.com"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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

### -EnableMediaEncryptionForSipOverTls
When set to True ($True) it is expected that the Video Gateway or third party video teleconferencing system (VTC) uses TLS to protect SIP signaling and uses SRTP to protect the media traffic.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSessionTimer
Specifies whether the session timer is enabled.
Session timers are used to determine whether a particular session is still active.
The default is false ($False).

Note that even if this parameter is set to False, session timers can be applicable if the remote connection has session timer enabled.
In such a case, the Video Interop Server will reply to session timer probes from the remote entity.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
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

### -ForwardErrorCorrectionType
Specifies the type of Forward Error Correction (FEC) to be used between the Video Interop Server (VIS) and a Video Gateway.
The valid settings are:

None: Turns off FEC between the VIS and the Video Gateway.

Cisco: Enables FEC compatible with Cisco Video Gateways, such as Cisco Unified Communications Manager (CUCM).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySendsRtcpForActiveCalls
When set to True ($True) it is expected that the Video Gateway or third party video teleconferencing system (VTC) sends RTCP for calls that are enabled for media sending from the Video Gateway or VTC.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySendsRtcpForCallsOnHold
When set to True ($True) it is expected that the Video Gateway or third party video teleconferencing system (VTC) sends RTCP for calls that are disabled for media sending from the Video Gateway or VTC.
The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by passing that object reference to the Set-CsVideoTrunkConfiguration cmdlet.

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
None.
The New-CsVideoTrunkConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsVideoTrunkConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoTrunkConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsVideoTrunkConfiguration]()

[Set-CsVideoTrunkConfiguration]()

[Remove-CsVideoTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/76503acf-f757-45e1-8881-b0fa2392844d(OCS.16).aspx)

