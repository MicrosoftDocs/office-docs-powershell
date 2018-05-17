---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsSipProxyUseDefaultCert
schema: 2.0.0
---

# New-CsSipProxyUseDefaultCert

## SYNOPSIS
Creates an object reference to the default certificate used by Skype for Business Server. This object reference can then be used to configure a static route to use Transport Layer Security (TLS) as its transport protocol.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsSipProxyUseDefaultCert [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
When you send a SIP message to someone, that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely and accurate, delivery of messages and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

Skype for Business Server enables you to set up static routes for proxy servers.
If you elect to use TLS (the recommended transport) you must also specify the certificate to be used for authentication purposes.
You can either obtain a certificate specifically for use on your static route, or you can configure TLS to use your default Skype for Business Server certificate.
If you decide to use the default certificate, you can create an object reference to that certificate by running the `New-CsSipProxyUseDefaultCert` cmdlet.
In turn, that certificate object reference can be used by the `New-CsSipProxyTLS` cmdlet to configure TLS as the transport protocol.

Note that the New-CsSipProxyUseDefaultCert cmdlet is not required if you use the `New-CsStaticRoute` cmdlet to create your static route.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$cert = New-CsSipProxyUseDefaultCert

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

$transport = New-CsSipProxyTransport -TransportChoice $tls -Port 7500
```

The commands shown in Example 1 create a new SIP proxy transport object that uses TLS as its transport.
Because TLS requires a certificate (to be used for authentication purposes), the first command in the example uses the `New-CsSipProxyUseDefaultCert` cmdlet to configure a new SipProxy.UseDefaultCert object.
This object, stored in a variable named $cert, instructs Skype for Business Server to use the default certificate for the TLS transport.
After the UseDefaultCert object has been created, the `New-CsSipProxyTLS` cmdlet can be called to create a new SipProxy.TLS object, one that uses the default certificate and points to atl-proxy-001.litwareinc.com as the fully qualified domain name (FQDN) of the next hop server.

As soon as the TLS object exists, that object (and the TLS protocol) can be added to a Transport object, an object created by calling the `New-CsSipProxyTransport` cmdlet.


## PARAMETERS

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

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
The `New-CsSipProxyUseDefaultCert` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsSipProxyUseDefaultCert` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.UseDefaultCert object.

## NOTES

## RELATED LINKS

[New-CsSipProxyTLS](New-CsSipProxyTLS.md)

