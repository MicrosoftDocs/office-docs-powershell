---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsEdgeServer

## SYNOPSIS
Modifies the property values for one or more Edge Servers.
Edge Servers are used to provide connectivity between your internal network and the Internet.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsEdgeServer [[-Identity] <XdsGlobalRelativeIdentity>] [-AccessEdgeClientSipPort <UInt16>]
 [-AccessEdgeExternalSipPort <UInt16>] [-AccessEdgeInternalSipPort <UInt16>] [-DataPsomClientPort <UInt16>]
 [-DataPsomServerPort <UInt16>] [-MediaCommunicationPortCount <UInt16>] [-MediaCommunicationPortStart <UInt16>]
 [-MediaRelayAuthEdgePort <UInt16>] [-MediaRelayExternalTurnTcpPort <UInt16>]
 [-MediaRelayExternalTurnUdpPort <UInt16>] [-MediaRelayInternalTurnTcpPort <UInt16>]
 [-MediaRelayInternalTurnUdpPort <UInt16>] [-Registrar <String>] [-Force] [-WhatIf] [-Confirm]
 [-XmppInternalPort <UInt16>] [-XmppListeningPort <UInt16>] [-SkypeSearchProxyPort <UInt16>]
 [<CommonParameters>]
```

## DESCRIPTION
Connectivity with the outside world (that is, with the Internet) is an important aspect of Skype for Business Server.
Without this connectivity, users would have to log on to the internal network in order to access Skype for Business Server.
This would make it difficult for users working off-site to use the software and preclude the ability of users who do not have accounts in your domain from being able to participate in conferences.
Likewise, without connectivity outside of the organization users would be unable to exchange instant messages with federated partners or with people who have accounts on a public instant messaging system such as Yahoo!, AOL, or MSN.

Edge Servers are used to help provide connectivity between your internal network and the Internet.
The `Set-CsEdgeServer` cmdlet enables you to modify configuration settings for your Edge Servers, a task that primarily involves changing the port numbers used for transmitting network traffic.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsEdgeServer -Identity "EdgeServer:atl-edge-001.litwareinc.com" -AccessEdgeInternalSipPort 5062 -AccessEdgeExternalSipPort 5062
```

The command shown in Example 1 modifies the internal and external SIP ports for the Edge Server "EdgeServer:atl-edge-001.litwareinc.com".


### -------------------------- Example 2 ------------------------
```
Get-CsService -EdgeServer | Where-Object {$_.SiteId -eq "site:Redmond"} | ForEach-Object {Set-CsEdgeServer -Identity $_.Identity -AccessEdgeInternalSipPort 5062 -AccessEdgeExternalSipPort 5062}
```

Example 2 modifies the internal and external SIP ports for all the Edge Servers located in the Redmond site.
To do this, the command first uses the `Get-CsService` cmdlet and the EdgeServer parameter to return a collection of all the Edge Servers currently in use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which selects only those Edge servers from the Redmond site; that is, servers where the SiteId property is equal to site:Redmond.
This filtered collection is then piped to the `For-Each-Object` cmdlet.
That cmdlet runs the `Set-CsEdgeServer` cmdlet against each server in the collection, changing the values assigned to the AccessInternalSipPort and AccessExternalSipPort properties.


## PARAMETERS

### -Identity
Service location of the Edge Server to be modified.
For example: `-Identity "EdgeServer:atl-edge-001.litwareinc.com"`.

Note that you can leave off the prefix "EdgeServer:" when specifying an Edge server.
For example: `-Identity "atl-cs-001.litwareinc.com"`.

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

### -AccessEdgeClientSipPort
Port used for SIP communications between the Edge Server and client devices.
The initial value is set in Topology Builder but can be changed by specifying a new value for this parameter.


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

### -AccessEdgeExternalSipPort
Port used for external SIP traffic.
The default value is 5061.

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

### -AccessEdgeInternalSipPort
Port used for internal SIP traffic.
The default value is 5061.

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

### -DataPsomClientPort
Port used for Persistent Shared Object Model (PSOM) communications between the Edge Server and client devices.
The initial value is set in Topology Builder but can be changed by specifying a new value for this parameter.


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

### -DataPsomServerPort
Port used for PSOM communications between the Edge Server and other servers.

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

### -MediaCommunicationPortCount
Total number of ports allocated on the external Edge for media communications.
The default value is 10000.


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

### -MediaCommunicationPortStart
Starting port number on the external Edge for media communications.
The default value is 50000.


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

### -MediaRelayAuthEdgePort
Port used for media relay authentication.
The default value is 5062.

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

### -MediaRelayExternalTurnTcpPort
Port used for external media relay traffic using the Transmission Control Protocol (TCP).
The default value is 444 if your Edge server has a single IP address.
If your Edge server has multiple IP addresses then the default value is 443.
These values are initially set in Topology Builder but can be changed by specifying a new value for this parameter.


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

### -MediaRelayExternalTurnUdpPort
Port used for external media relay traffic using the User Datagram Protocol (UDP).
The default value is 3478.

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

### -MediaRelayInternalTurnTcpPort
Port used for internal media relay traffic using TCP.
The default value is 443.

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

### -MediaRelayInternalTurnUdpPort
Port used for internal media relay traffic using UDP.
The default value is 3478.

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

### -Registrar
Service location of the Registrar to be associated with the Edge Server.
For example: `-Registrar "Registrar:atl-cs-001.litwareinc.com"`.

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
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -XmppInternalPort
Port used for internal XMPP traffic.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Skype for Business Server users.
The default value is 5098.


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XmppListeningPort
Listening port for XMPP traffic.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkypeSearchProxyPort
PARAMVALUE: UInt16

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Set-CsEdgeServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsEdgeServer` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayEdgeServer object.

## NOTES

## RELATED LINKS

[Get-CsService]()
