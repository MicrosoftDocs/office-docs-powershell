---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVideoInteropServer

## SYNOPSIS
Use the `Set-CsVideoInteropServer` to modify the property values of one or more Video Interop Servers (VIS).
The Video Interop Server is a Skype service that is used to communicate with a Video Gateway via a Session Initiation Protocol (SIP) trunk.
Video Gateways route traffic between internal and 3rd party video devices such as an internal Skype endpoint exchanging video with a 3rd party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a Video Interop Server (VIS) use a Session Initiation Protocol (SIP) trunk to connect video calls between 3rd party VTCs and internal endpoints.

## SYNTAX

```
Set-CsVideoInteropServer [[-Identity] <XdsGlobalRelativeIdentity>] [-AudioPortCount <UInt16>]
 [-AudioPortStart <UInt16>] [-Confirm] [-Force] [-Registrar <String>] [-RegistrationTcpPort <UInt16>]
 [-RegistrationTlsPort <UInt16>] [-SipTrunkTcpPort <UInt16>] [-SipTrunkTlsPort <UInt16>]
 [-VideoPortCount <UInt16>] [-VideoPortStart <UInt16>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Video Interop Server (VIS) in Skype for Business Server incorporates 3rd party video teleconferencing systems (VTCs) into your Skype for Business Server infrastructure.
The VIS is a service that runs on a standalone pool and cannot be co-located on an FE pool.

To enable the Video Interop Server, you must use Topology Builder to define at least one VIS instance.
Each VIS instance will typically be associated with one or more Video Gateways.
Video Gateways route traffic between internal and 3rd party video devices such as an internal Skype endpoint receiving video from a 3rd party PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a VIS use a Session Initiation Protocol (SIP) trunk to connect video calls between 3rd party VTCs and internal endpoints.

After the Video Interop Server has been defined by using the Topology Builder, you can then modify the properties of that server by using the `Set-CsVideoInteropServer` cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "Set-CsVideoInteropServer"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsVideoInteropServer -Identity "VideoInteropServer:atl-cs-001.litwareinc.com" -SipTrunkTlsPort 444
```

This example sets the SIP trunk TLS port for the Video Interop server VideoInteropServer:atl-cs-001.litwareinc.com to port 444.


### -------------------------- Example 2 --------------------------
```
Get-CsService -VideoInteropServer | Set-CsVideoInteropServer -SipTrunkTlsPort 444
```

This example sets the SIP trunk TLS port for all the organization's Video Interop servers is set to port 444.
This the command first calls the `Get-CsService` cmdlet, along with the VideoInteropServer parameter, to return a collection of all the Video Interop servers configured for use in the organization.
That collection is then piped to the `Set-CsVideoInteropServer` cmdlet, which changes the TLS port for each server in the collection.


## PARAMETERS

### -AudioPortCount
Total number of ports allocated for sending and receiving audio traffic.
The actual ports to be opened will start with the value configured for AudioPortStart and continue through the number of ports specified for AudioPortCount.
For example, if the AudioPortStart is set to 60000 and the AudioPortCount is set to 100, then ports 60000 through 60099 will be used for audio traffic.

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

### -AudioPortStart
First port in the range of ports allocated for sending and receiving audio traffic.
For example: `-AudioPortStart 60000`.

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
Service location of the Video Interop Server to be modified.
For example: `-Identity "VideoInteropServer:atl-cs-001.litwareinc.com"`.

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

### -Registrar
Service identity of the Registrar associated with the Video Interop Server.
For example: `-Registrar "Registrar:atl-cs-001.litwareinc.com"`.

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

### -RegistrationTcpPort
This parameter is reserved for internal Microsoft use.

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

### -RegistrationTlsPort
This parameter is reserved for internal Microsoft use.

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

### -SipTrunkTcpPort
TCP (Transmission Control Protocol) listening port on the Video Interop Server used for SIP trunk communication with a Video Gateway.

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

### -SipTrunkTlsPort
TLS (Transport Layer Security) listening port on the Video Interop Server used for SIP trunk communication with a Video Gateway.

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

### -VideoPortCount
Total number of ports allocated for sending and receiving video traffic.
The actual ports to be opened will start with the value configured for VideoPortStart and continue through the number of ports specified for VideoPortCount.
For example, if the VideoPortStart is set to 60000 and the VideoPortCount is set to 100, then ports 60000 through 60099 will be used for video traffic.

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

### -VideoPortStart
First port in the range of ports allocated for sending and receiving video traffic.
For example: `-AudioPortStart 60000`.

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
The `Set-CsVideoInteropServer` accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayVideoInteropServer object.

## OUTPUTS

###  
None.
The `Set-CsVideoInteropServer` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Set-CsVideoGateway]()

[Get-CsVideoTrunk]()
