---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyTCP

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new SipProxy.TCP object, which can then be used to configure a static route to use Transmission Control Protocol (TCP) as its transport protocol.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new SipProxy.TCP object, which can then be used to configure a static route to use Transmission Control Protocol (TCP) as its transport protocol.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyTCP -IPAddress <String> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overhead placed on servers.
The downside to static routes is the messages are not dynamically rerouted in the event of a network failure.

Microsoft Lync Server 2010 enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings (created using New-CsProxyConfiguration), and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.

Lync Server 2010 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TCP as your protocol, you must first create a TCP object by using the New-CsSipProxyTCP cmdlet.
You can then use that object to specify the protocol for the Transport object created by New-CsSipProxyTransport.

You do not need to use New-CsSipProxyTCP if you use New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTCP cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyTCP"}

**Below Content Applies To:** Lync Server 2013

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overhead placed on servers.
The downside to static routes is the messages are not dynamically rerouted in the event of a network failure.

Lync Server enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings (created using New-CsProxyConfiguration), and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.

Lync Server allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TCP as your protocol, you must first create a TCP object by using the New-CsSipProxyTCP cmdlet.
You can then use that object to specify the protocol for the Transport object created by New-CsSipProxyTransport.

You do not need to use New-CsSipProxyTCP if you use New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTCP cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyTCP"}

**Below Content Applies To:** Skype for Business Server 2015

When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overhead placed on servers.
The downside to static routes is the messages are not dynamically rerouted in the event of a network failure.

Skype for Business Server 2015 enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings (created using the New-CsProxyConfiguration cmdlet), and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.

Skype for Business Server 2015 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TCP as your protocol, you must first create a TCP object by using the New-CsSipProxyTCP cmdlet.
You can then use that object to specify the protocol for the Transport object created by the New-CsSipProxyTransport cmdlet.

You do not need to use the New-CsSipProxyTCP cmdlet if you use the New-CsStaticRoute cmdlet to create your static route.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500
```

The commands shown in Example 1 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses New-CsSipProxyTCP to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet creates a TCP transport object.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses New-CsSipProxyTCP to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet creates a TCP transport object.

$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TCP as its transport.
To do this, the first command in the example uses the New-CsSipProxyTCP cmdlet to create a new SipProxy.TCP object that points to the next hop server with the IP address 192.168.1.100; this TCP object is stored in a variable named $tcp.

After the SipProxy.TCP object has been created, the New-CsSipProxyTransport cmdlet creates a TCP transport object.

$tcp = New-CsSipProxyTCP -IPAddress 192.168.1.100

$transport = New-CsSipProxyTransport -TransportChoice $tcp -Port 7500

## PARAMETERS

### -IPAddress
IP address of the next hop router.
For example: -IPAddress 192.168.0.240.

```yaml
Type: String
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
New-CsSipProxyTCP does not accept pipelined input.

###  
None.
The New-CsSipProxyTCP cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyTCP creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.TCP object.

###  
The New-CsSipProxyTCP cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.TCP object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/27600a10-cc00-4be0-ab47-0bb06e65e4cd(OCS.14).aspx)

[New-CsSipProxyTLS]()

[New-CsSipProxyTransport]()

[Online Version](http://technet.microsoft.com/EN-US/library/27600a10-cc00-4be0-ab47-0bb06e65e4cd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/27600a10-cc00-4be0-ab47-0bb06e65e4cd(OCS.16).aspx)

