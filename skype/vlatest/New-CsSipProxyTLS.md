---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyTLS

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new SipProxy.TLS object, which can then be used to configure a static route to use Transport Layer Security (TLS) as its transport protocol.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new SipProxy.TLS object, which can then be used to configure a static route to use Transport Layer Security (TLS) as its transport protocol.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyTLS -Certificate <ITLSTLSChoice> -Fqdn <String> [<CommonParameters>]
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

Microsoft Lync Server 2010 enables you to set up static routes for proxy servers.
These routes are composed of two primary pieces: proxy configuration settings and SIP proxy routes.
In turn, SIP proxy routes have a number of properties; for example, each route must have a Transport, a property that defines the network protocol used for transmitting messages along the route.

Lync Server 2010 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TLS as your protocol, you must first create a TLS object  by using the New-CsSipProxyTLS cmdlet.
You can then use that object to specify the protocol for the Transport object created by New-CsSipProxyTransport.

Note that you must also specify a certificate (to be used for authentication purposes) if you choose to use TLS as your transport protocol.

The New-CsSipProxyTLS cmdlet is not required if you use New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTLS cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyTLS"}

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

Lync Server allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TLS as your protocol, you must first create a TLS object by using the New-CsSipProxyTLS cmdlet.
You can then use that object to specify the protocol for the Transport object created by New-CsSipProxyTransport.

Note that you must also specify a certificate (to be used for authentication purposes) if you choose to use TLS as your transport protocol.

The New-CsSipProxyTLS cmdlet is not required if you use New-CsStaticRoute to create your static route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyTLS cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyTLS"}

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

Skype for Business Server 2015 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol.
If you decide to use TLS as your protocol, you must first create a TLS object by using the New-CsSipProxyTLS cmdlet.
You can then use that object to specify the protocol for the Transport object created by the New-CsSipProxyTransport cmdlet.

Note that you must also specify a certificate (to be used for authentication purposes) if you choose to use TLS as your transport protocol.

The New-CsSipProxyTLS cmdlet is not required if you use the New-CsStaticRoute cmdlet to create your static route.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500
```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate to be used for authentication purposes, the first command in the example uses New-CsSipProxyUseDefaultCert to configure a new SipProxy.UseDefaultCert.
This object, stored in a variable named $cert, instructs Lync Server to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, New-CsSipProxyTLS can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the FQDN of the next hop server.

As soon as the TLS object exists, that object (and the TLS protocol) can be added to a Transport object, an object created by calling New-CsSipProxyTransport.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate to be used for authentication purposes, the first command in the example uses New-CsSipProxyUseDefaultCert to configure a new SipProxy.UseDefaultCert.
This object, stored in a variable named $cert, instructs Lync Server to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, New-CsSipProxyTLS can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the FQDN of the next hop server.

As soon as the TLS object exists, that object (and the TLS protocol) can be added to a Transport object, an object created by calling New-CsSipProxyTransport.

$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate to be used for authentication purposes, the first command in the example uses the New-CsSipProxyUseDefaultCert cmdlet to configure a new SipProxy.UseDefaultCert.
This object, stored in a variable named $cert, instructs Skype for Business Server 2015 to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, the New-CsSipProxyTLS cmdlet can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the FQDN of the next hop server.

As soon as the TLS object exists, that object (and the TLS protocol) can be added to a Transport object, an object created by calling the New-CsSipProxyTransport cmdlet.

$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500

## PARAMETERS

### -Certificate
Certificate to be used for TLS authentication.

```yaml
Type: ITLSTLSChoice
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of the next hop server.
For example: -Fqdn atl-proxy-001.litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of the next hop server.
For example:

-Fqdn atl-proxy-001.litwareinc.com



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
New-CsSipProxyTLS does not accept pipelined input.

###  
None.
The New-CsSipProxyTLS cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyTLS creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.TLS object.

###  
The New-CsSipProxyTLS cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.TLS object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7e04f7bb-c33f-49b4-9306-082b14d2a854(OCS.14).aspx)

[New-CsSipProxyTCP]()

[New-CsSipProxyTransport]()

[New-CsSipProxyUseDefaultCert]()

[Online Version](http://technet.microsoft.com/EN-US/library/7e04f7bb-c33f-49b4-9306-082b14d2a854(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7e04f7bb-c33f-49b4-9306-082b14d2a854(OCS.16).aspx)

