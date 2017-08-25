---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyTransport

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Specifies the transmission protocol to be used in a static route.
Microsoft Lync Server 2010 enables you to choose either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as the transmission protocol for a route.

**Below Content Applies To:** Lync Server 2013

Specifies the transmission protocol to be used in a static route.
Lync Server enables you to choose either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as the transmission protocol for a route.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Specifies the transmission protocol to be used in a static route.
Skype for Business Server 2015 enables you to choose either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as the transmission protocol for a route.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyTransport -Port <UInt16> -TransportChoice <ITransportChoice> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

Lync Server 2010 enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.
The Transport property can be specified using the New-CsSipProxyTransport cmdlet.

New-CsSipProxyTransport has two required parameters: TransportChoice and Port.
The TransportChoice parameter is configured using another cmdlet, either New-CsSipProxyTCP (to assign the Transmission Control Protocol as the route transport) or New-CsSipProxyTLS (to assign the TLS as the route transport).
Any transport object created by using New-CsSipProxyTransport must be saved to a variable.
That variable will then be used to configure the Transport property of a SIP proxy route.

You do not need to use the New-CsSipProxyTransport cmdlet if you are using New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTransport cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyTransport"}

**Below Content Applies To:** Lync Server 2013

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

Lync Server enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.
The Transport property can be specified using the New-CsSipProxyTransport cmdlet.

New-CsSipProxyTransport has two required parameters: TransportChoice and Port.
The TransportChoice parameter is configured using another cmdlet, either New-CsSipProxyTCP (to assign the Transmission Control Protocol as the route transport) or New-CsSipProxyTLS (to assign the TLS as the route transport).
Any transport object created by using New-CsSipProxyTransport must be saved to a variable.
That variable will then be used to configure the Transport property of a SIP proxy route.

You do not need to use the New-CsSipProxyTransport cmdlet if you are using New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTransport cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyTransport"}

**Below Content Applies To:** Skype for Business Server 2015

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

Skype for Business Server 2015 enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.
The Transport property can be specified using the New-CsSipProxyTransport cmdlet.

The New-CsSipProxyTransport cmdlet has two required parameters: TransportChoice and Port.
The TransportChoice parameter is configured using another cmdlet, either the New-CsSipProxyTCP cmdlet (to assign the Transmission Control Protocol as the route transport) or the New-CsSipProxyTLS cmdlet (to assign the TLS as the route transport).
Any transport object created by using the New-CsSipProxyTransport cmdlet must be saved to a variable.
That variable will then be used to configure the Transport property of a SIP proxy route.

You do not need to use the New-CsSipProxyTransport cmdlet if you are using the New-CsStaticRoute cmdlet to create your static route.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500
```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate (to be used for authentication purposes), the first command in the example uses New-CsSipProxyUseDefaultCert to configure a new SipProxy.UseDefaultCert object.
This object, stored in a variable named $cert, instructs Lync Server to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, New-CsSipProxyTLS can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the fully qualified domain name (FQDN) of the next hop server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate (to be used for authentication purposes), the first command in the example uses New-CsSipProxyUseDefaultCert to configure a new SipProxy.UseDefaultCert object.
This object, stored in a variable named $cert, instructs Lync Server to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, New-CsSipProxyTLS can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the fully qualified domain name (FQDN) of the next hop server.

$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate (to be used for authentication purposes), the first command in the example uses the New-CsSipProxyUseDefaultCert cmdlet to configure a new SipProxy.UseDefaultCert object.
This object, stored in a variable named $cert, instructs Skype for Business Server 2015 to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, the New-CsSipProxyTLS cmdlet can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the fully qualified domain name (FQDN) of the next hop server.

$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500
```

The commands shown in Example 2 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses New-CsSipProxyTCP to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet can then be called to create a TCP transport object.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses New-CsSipProxyTCP to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet can then be called to create a TCP transport object.

$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses the New-CsSipProxyTCP cmdlet to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet can then be called to create a TCP transport object.

$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500

## PARAMETERS

### -Port
Port number used for SIP routing.
For example: -Port 7742.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportChoice
Indicates the transmission protocol (TCP or TLS) to be used on the static route.
To use the TCP protocol, create a transport object by using the New-CsSipProxyTCP cmdlet.
To use the TLS protocol, create a transport object by using the New-CsSipProxyTLS cmdlet.

```yaml
Type: ITransportChoice
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
New-CsSipProxyTransport does not accept pipelined input.

###  
None.
The New-CsSipProxyTransport cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyTransport creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Transport object.

###  
The New-CsSipProxyTransport cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Transport object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/68587257-d666-429a-bf2d-f8a2b46f1f09(OCS.14).aspx)

[New-CsSipProxyTCP]()

[New-CsSipProxyTLS]()

[Online Version](http://technet.microsoft.com/EN-US/library/68587257-d666-429a-bf2d-f8a2b46f1f09(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/68587257-d666-429a-bf2d-f8a2b46f1f09(OCS.16).aspx)

