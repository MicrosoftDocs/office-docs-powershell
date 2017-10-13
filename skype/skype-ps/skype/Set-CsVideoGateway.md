---
external help file: 
applicable: Skype for Business Server 2015
title: Set-CsVideoGateway
schema: 2.0.0
---

# Set-CsVideoGateway

## SYNOPSIS
Use the `Set-CsVideoGateway` cmdlet to modify the property values of one or more Video Gateways.
Video Gateways route traffic between internal and 3rd party video devices such as an internal Skype endpoint exchanging video with a 3rd party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a Video Interop Server (VIS) use a Session Initiation Protocol (SIP) trunk to connect video calls between 3rd party VTCs and internal endpoints.

## SYNTAX

```
Set-CsVideoGateway [[-Identity] <XdsGlobalRelativeIdentity>] [-Confirm] [-Force]
 [-VideoGatewaySipClientTcpPort <UInt16>] [-VideoGatewaySipClientTlsPort <UInt16>]
 [-VideoInteropServer <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Video Interop Server (VIS) in Skype for Business Server incorporates 3rd party video teleconferencing systems (VTCs) into your Skype for Business Server infrastructure.
The VIS is a service that runs on a standalone pool and cannot be co-located on an FE pool.

To enable the Video Interop Server, you must use Topology Builder to define at least one VIS instance.
Each VIS instance will typically be associated with one or more Video Gateways.
Video Gateways route traffic between internal and 3rd party video devices such as an internal Skype endpoint receiving video from a 3rd party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a Video Interop Server (VIS) use a Session Initiation Protocol (SIP) trunk to connect video calls between 3rd party VTCs and internal endpoints.
After a Video Gateway has been defined, you can then manage the properties of that gateway by using the `Set-CsVideoGateway` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsVideoGateway -Identity "VideoGateway:atl-cs-001.litwareinc.com" -VideoGatewaySipClientTcpPort 444
```

The command shown in Example 1 changes the TCP client port for the video gateway located on the pool `atl-cs-001.litwareinc.com`.
In this example, the port is set to 444.


### -------------------------- Example 2 --------------------------
```
Get-CsService -VideoGateway | Set-CsVideoGateway -VideoGatewaySipClientTcpPort 444
```

In Example 2, the TCP client ports for all the video gateways deployed in the organization are set to 444.
To do this, the command first uses the `Get-CsService` cmdlet and the -VideoGateway parameter to return a collection of all the video gateways, That collection is then piped to the `Set-CsVideoGateway` cmdlet, which sets the TCP client port for all the gateways in the collection to 444.


## PARAMETERS

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
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Identity
Service location of the video gateway being modified.
For example:

`-Identity "VideoGateway:atl-cs-001.litwareinc.com"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoGatewaySipClientTcpPort
TCP (Transmission Control Protocol) listening port on the Video Gateway used for SIP trunk communication with a Video Interop Server pool.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoGatewaySipClientTlsPort
TLS (Transport Layer Security) listening port on the Video Gateway used for SIP trunk communication with a Video Interop Server pool.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoInteropServer
Service location for the Video Interop Server associated with this Video Gateway.

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
The `Set-CsVideoGateway` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayVideoGateway object.

## OUTPUTS

###  
None.
The `Set-CsVideoGateway` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Get-CsVideoTrunk](Get-CsVideoTrunk.md)
