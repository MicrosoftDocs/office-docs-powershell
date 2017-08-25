---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsIssuedCertId

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to assign an existing certificate to a SipProxy.TLS object.
In turn, that object can be used configure a static route to use Transport Layer Security (TLS) as its transport protocol.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to assign an existing certificate to a SipProxy.TLS object.
In turn, that object can be used configure a static route to use Transport Layer Security (TLS) as its transport protocol.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsIssuedCertId -Issuer <String> -SerialNumber <Byte[]> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you send a Session Initiation Protocol (SIP) message to someone, that message might need to traverse multiple subnets and networks before it is delivered.
The path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address, and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routing is that messages are not dynamically rerouted in the event of a network failure.

Microsoft Lync Server 2010 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol when configuring a static route.
If you decide to use TLS as your protocol, you must first assign a certificate to be used for authentication.
In that case, you can use the default certificate configured for Lync Server 2010.
Alternatively, TLS certificates can be assigned by calling New-CsIssuedCertID to create a certificate object, and then assigning that object to a SipProxy.TLS object created by using the New-CsSipProxyTLS cmdlet.

When you run New-CsIssuedCertID you must provide the cmdlet with the issuer name and the serial number of an existing certificate.
That information can be obtained by running this command:

Get-CsCertificate | Select-Object Issuer, SerialNumber

Note that serial numbers must be passed as a byte array.
This means you must pass the serial number as an array of two-character values.
In addition, each two-character value must be prefaced with 0x.
For example, suppose you have a certificate with the serial number 1E225D3ZF66.
That data must be passed using this syntax:

-SerialNumber 0x1E,0x22,0x5D,0x3F,0x66

You do not need to use the New-CsIssuedCertId cmdlet if you create a static route by using the New-CsStaticRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsIssuedCertId cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsIssuedCertId"}

**Below Content Applies To:** Lync Server 2013

When you send a Session Initiation Protocol (SIP) message to someone, that message might need to traverse multiple subnets and networks before it is delivered.
The path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address, and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routing is that messages are not dynamically rerouted in the event of a network failure.

Lync Server allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol when configuring a static route.
If you decide to use TLS as your protocol, you must first assign a certificate to be used for authentication.
In that case, you can use the default certificate configured for Lync Server.
Alternatively, TLS certificates can be assigned by calling New-CsIssuedCertID to create a certificate object, and then assigning that object to a SipProxy.TLS object created by using the New-CsSipProxyTLS cmdlet.

When you run New-CsIssuedCertID you must provide the cmdlet with the issuer name and the serial number of an existing certificate.
That information can be obtained by running this command:

Get-CsCertificate | Select-Object Issuer, SerialNumber

Note that serial numbers must be passed as a byte array.
This means you must pass the serial number as an array of two-character values.
In addition, each two-character value must be prefaced with 0x.
For example, suppose you have a certificate with the serial number 1E225D3ZF66.
That data must be passed using this syntax:

-SerialNumber 0x1E,0x22,0x5D,0x3F,0x66

You do not need to use the New-CsIssuedCertId cmdlet if you create a static route by using the New-CsStaticRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsIssuedCertId cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsIssuedCertId"}

**Below Content Applies To:** Skype for Business Server 2015

When you send a Session Initiation Protocol (SIP) message to someone, that message might need to traverse multiple subnets and networks before it is delivered.
The path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address, and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routing is that messages are not dynamically rerouted in the event of a network failure.

Skype for Business Server 2015 allows you to specify either Transmission Control Protocol (TCP) or Transport Layer Security (TLS) as your transport protocol when configuring a static route.
If you decide to use TLS as your protocol, you must first assign a certificate to be used for authentication.
In that case, you can use the default certificate configured for Skype for Business Server 2015.
Alternatively, TLS certificates can be assigned by calling New-CsIssuedCertID to create a certificate object, and then assigning that object to a SipProxy.TLS object created by using the New-CsSipProxyTLS cmdlet.

When you run New-CsIssuedCertID you must provide the cmdlet with the issuer name and the serial number of an existing certificate.
That information can be obtained by running this command:

Get-CsCertificate | Select-Object Issuer, SerialNumber

Note that serial numbers must be passed as a byte array.
This means you must pass the serial number as an array of two-character values.
In addition, each two-character value must be prefaced with 0x.
For example, suppose you have a certificate with the serial number 1E225D3ZF66.
That data must be passed using this syntax:

-SerialNumber 0x1E,0x22,0x5D,0x3F,0x66

You do not need to use the New-CsIssuedCertId cmdlet if you create a static route by using the New-CsStaticRoute cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$cert = New-CsIssuedCertId -Issuer "Fabrikam" -SerialNumber 0x10,0x14,0x3A,0x1A

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com
```

The commands shown in Example 1 create a new certificate ID object and then assign that certificate to a SipProxy.TLS object.
In turn, that object can then be used to configure a static route to use the TLS transport protocol.
To do this, the first command in the example uses New-CsIssuedCertId to create a certificate ID object for a certificate issued by Fabrikam that has the serial number 10143A1A.
(Note that the serial number is specified as an array of two-character strings.) The resulting object is stored in a variable named $cert.

In the second command, New-CsSipProxyTLS is used to create a SIPProxy.TLS object.
To ensure that this object uses the Fabrikam-issued certificate for authentication, the variable $cert is used as the parameter value for the Certificate parameter.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new certificate ID object and then assign that certificate to a SipProxy.TLS object.
In turn, that object can then be used to configure a static route to use the TLS transport protocol.
To do this, the first command in the example uses New-CsIssuedCertId to create a certificate ID object for a certificate issued by Fabrikam that has the serial number 10143A1A.
(Note that the serial number is specified as an array of two-character strings.) The resulting object is stored in a variable named $cert.

In the second command, New-CsSipProxyTLS is used to create a SIPProxy.TLS object.
To ensure that this object uses the Fabrikam-issued certificate for authentication, the variable $cert is used as the parameter value for the Certificate parameter.

$cert = New-CsIssuedCertId -Issuer "Fabrikam" -SerialNumber 0x10,0x14,0x3A,0x1A

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new certificate ID object and then assign that certificate to a SipProxy.TLS object.
In turn, that object can then be used to configure a static route to use the TLS transport protocol.
To do this, the first command in the example uses New-CsIssuedCertId to create a certificate ID object for a certificate issued by Fabrikam that has the serial number 10143A1A.
(Note that the serial number is specified as an array of two-character strings.) The resulting object is stored in a variable named $cert.

In the second command, New-CsSipProxyTLS is used to create a SIPProxy.TLS object.
To ensure that this object uses the Fabrikam-issued certificate for authentication, the variable $cert is used as the parameter value for the Certificate parameter.

$cert = New-CsIssuedCertId -Issuer "Fabrikam" -SerialNumber 0x10,0x14,0x3A,0x1A

$tls = New-CsSipProxyTLS -Certificate $cert -Fqdn atl-proxy-001.litwareinc.com

## PARAMETERS

### -Issuer
Name of the certification authority (CA) that issued the certificate to be used in the static route.

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

### -SerialNumber
Serial number of the certificate to be used in the static route.
Serial numbers must be passed as a byte array.
This means you must pass the serial number as an array of two-character values, with each of these two-character values prefaced by 0x.
For example: -SerialNumber 0x01, 0x23, 0x45, 0x67, 0x89.

```yaml
Type: Byte[]
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
New-CsIssuedCertId does not accept pipelined input.

## OUTPUTS

###  
New-CsIssuedCertId creates instances of the Microsoft.Rtc.Management.WritableConfig.BaseTypes.IssuedCertId object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3158e26e-3fda-488b-a08d-5481e1abfc1d(OCS.14).aspx)

[New-CsSipProxyTLS]()

[Online Version](http://technet.microsoft.com/EN-US/library/3158e26e-3fda-488b-a08d-5481e1abfc1d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3158e26e-3fda-488b-a08d-5481e1abfc1d(OCS.16).aspx)

