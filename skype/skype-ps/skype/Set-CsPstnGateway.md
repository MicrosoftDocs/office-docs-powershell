---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsPstnGateway
schema: 2.0.0
---

# Set-CsPstnGateway

## SYNOPSIS
Modifies the properties of a public switched telephone network (PSTN) gateway.
PSTN gateways help route calls between devices on the external PSTN network and devices on your internal Enterprise Voice network.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsPstnGateway [[-Identity] <XdsGlobalRelativeIdentity>] [-Default <Boolean>]
 [-GatewaySipClientTcpPort <UInt16>] [-GatewaySipClientTlsPort <UInt16>] [-MediationServer <String>]
 [-RepresentativeMediaIP <String>] [-Routable <Boolean>] [-WhatIf] [-Confirm] [-AlternateByPassId <String>]
 [-Force] [<CommonParameters>]
```

## DESCRIPTION
PSTN gateways enable your Enterprise Voice users to make phone calls to and receive phone calls from, people on the PSTN network.
These gateways act as a bridge between the Mediation Server and the PSTN network.

PSTN gateways are typically required when you are using a Time Division Multiplex Public Branch Exchange (PBX) phone system; in that case, you will typically need to employ both a PSTN gateway and a Mediation Server in order to route Enterprise Voice calls to the PSTN network.
By contrast, if you are using an IP-PBX system you can create a direct SIP connection between the PBX and the Mediation Server, eliminating the need for a PSTN gateway.

After your PSTN gateways have been installed and configured, they can be managed by using the `Set-CsPstnGateway` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsPstnGateway -Identity "PstnGateway:192.168.0.240" -Default $True
```

The command shown in Example 1 configures the gateway PstnGateway:192.168.0.240 to be the default gateway.
That means that PstnGateway:192.168.0.240 can be used to handle calls originating from Office Communications Server 2007 R2.


### -------------------------- Example 2 ------------------------
```
Get-CsService -PstnGateway | ForEach-Object {Set-CsPstnGateway -Identity $_.Identity -Routable $True}
```

Example 2 configures all the PSTN gateways in the organization, ensuring that each of these gateways can be used in outbound routing.
To do this, the command first uses the `Get-CsService` cmdlet and the PstnGateway parameter to return a collection of all the PSTN gateways currently in use.
This collection is then piped to the `ForEach-Object` cmdlet.
The `ForEach-Object` cmdlet runs the `Set-CsPstnGateway` cmdlet against each gateway in the collection, setting the Routable property of each one to True.


## PARAMETERS

### -Identity
Service identity of the PSTN gateway to be modified.
For example:

`-Identity "PstnGateway:192.168.0.240"`

Note that you can leave off the prefix "PstnGatewayServer:" when specifying a PSTN gateway.
For example:

`-Identity "atl-cs-001.litwareinc.com"`


```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default
If set to True, this gateway will handle calls sent from Office Communications Server 2007 R2.
There can only be one default gateway in the collection of gateways managed by a single Mediation Server.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySipClientTcpPort
Listening port used for communicating with Mediation Servers by using Transmission Control Protocol (TCP).
The default value is 5066.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySipClientTlsPort
Listening port used for communicating with Mediation Servers by using the Transport Layer Security (TLS) protocol.
The default value is 5067.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediationServer
Service identity of the Mediation Server to be associated with the PSTN gateway.
For example:

`-MediationServer "MediationServer:atl-cs-001.litwareinc.com"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RepresentativeMediaIP
IP address of the media processor associated with the gateway, provided that the processor location is different from the signaling address.
Both media bypass and call admission control (CAC) are based on the location of the gateway's media processor; by default, this is the same location as the signaling address.
If the two locations differ (for example, with the media processor in a remote site and the signaling peer in the central site) then RepresentativeMediaIP must be configured with the IP address of the media processor.

If you have deployed multiple media processors in the same site, each with its own IP addresses, then you can use any of these IP addresses when configuring the RepresentativeMediaIP property.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Routable
If set to True, the gateway can be used in outbound routing routes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateByPassId
Globally unique identifier (GUID) representing the alternate bypass ID.
This ID is automatically generated by Skype for Business Server and is used to help eliminate hairpin calls.
Depending on the way you have configured your system, this allows hairpin calls to automatically bypass the Mediation Server without you having to define and associate individual subnets with all your sites and regions.

To do this, you typically need to globally enable bypass to use network configuration sites and regions, then enable bypass on the trunk configuration for your PSTN gateway.

A hairpin call occurs when an inbound call from the PSTN network is routed back to that network through call forwarding or simultaneous ringing.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
The `Get-CsPstnGateway` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsPstnGateway` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayPstnGateway object.

## NOTES

## RELATED LINKS

[Get-CsService](Get-CsService.md)
