---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsXmppAllowedPartner
schema: 2.0.0
---

# Set-CsXmppAllowedPartner

## SYNOPSIS
Modifies an existing XMPP allowed partner.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Skype for Business Server users.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsXmppAllowedPartner [[-Identity] <XdsGlobalRelativeIdentity>] [-AdditionalDomains <PSListModifier>]
 [-Confirm] [-ConnectionLimit <UInt32>] [-Description <String>] [-EnableKeepAlive <Boolean>] [-Force]
 [-PartnerType <PartnerType>] [-ProxyFqdn <String>] [-SaslNegotiation <SaslNegotiation>]
 [-SupportDialbackNegotiation <Boolean>] [-TlsNegotiation <TlsNegotiation>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsXmppAllowedPartner [-AdditionalDomains <PSListModifier>] [-Confirm] [-ConnectionLimit <UInt32>]
 [-Description <String>] [-EnableKeepAlive <Boolean>] [-Force] [-Instance <PSObject>]
 [-PartnerType <PartnerType>] [-ProxyFqdn <String>] [-SaslNegotiation <SaslNegotiation>]
 [-SupportDialbackNegotiation <Boolean>] [-TlsNegotiation <TlsNegotiation>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

Skype for Business Server Control Panel: To edit the property values for an existing XMPP allowed partner using the Skype for Business Server Control Panel, click External User Access, click XMPP Federated Partners and then double-click the partner to be modified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsXmppAllowedPartner -Identity "contoso.com" -SupportDialbackNegotiation $False
```

The command shown in Example 1 disables dialback negotiation for the XMPP allowed partner contoso.com.
This is done by including the SupportDialbackNegotiation parameter and setting the parameter value to False ($False).


### -------------------------- Example 2 --------------------------
```
Get-CsXmppAllowedPartner | Set-CsXmppAllowedPartner -SaslNegotiation "Required"
```

In the preceding example, Simple Authentication and Security Layer negotiation is enabled (and required) for all the XMPP allowed partners in the organization.
To carry out this task, the command first uses the `Get-CsXmppAllowedPartner` cmdlet to return a collection of all the XMPP allowed partners.
That collection is then piped to the `Set-CsXmppAllowedPartner` cmdlet, which sets the value of the SaslNegotiation property for each partner in the collection to Required.


### -------------------------- Example 3 --------------------------
```
Set-CsXmppAllowedPartner -Identity "contoso.com" -AdditionalDomains @{Add="na.contoso.com"}
```

In Example 3, a new child domain - na.contoso.com - is added to the XMPP allowed partner contoso.com.
To do this, the AdditionalDomains parameter is included, along with the syntax @{Add="na.contoso.com"}.
That syntax adds na.contoso.com to any other domains currently found in the AdditionalDomains property.


### -------------------------- Example 4 --------------------------
```
Set-CsXmppAllowedPartner -Identity "contoso.com" -AdditionalDomains @{Remove="europe.contoso.com"}
```

Example 4 removes the domain europe.contoso.com from the collection of additional domains assigned to the XMPP allowed partner contoso.com.
To remove this domain, the AdditionalDomains parameter is included along with the parameter value @{Remove="europe.contoso.com"}.
That syntax removes Europe.contoso.com from the AdditionalDomains property without affecting any other domains that might also be stored in AdditionalDomains.


### -------------------------- Example 5 --------------------------
```
Set-CsXmppAllowedPartner -Identity "contoso.com" -AdditionalDomains $Null
```

The command shown in Example 5 removes child domain support for the XMPP allowed partner contoso.com.
This is done by including the AdditionalDomains parameter and the parameter value $Null; that deletes any domains currently included in the AdditionalDomains property.


## PARAMETERS

### -AdditionalDomains
Additional XMPP domains belonging to the allowed partner.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionLimit
Specifies the maximum number of simultaneous connections to a specific partner.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional text regarding the XMPP allowed partner.
For example, the Description might include contact information for the partner.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableKeepAlive
Indicates whether or not the XMPP partner should periodically transmit "keep alive" packets in order to verify that the connection is still active. The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Fully qualified domain name (FQDN) of the XMPP allowed partner to be modified (for example, fabrikam.com).

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PartnerType
Specifies the relationship between Skype for Business Server and the XMPP partner.
Allowed values are:

* Federated (the XMPP partner is from a federated domain)
* PublicVerified
* PublicUnverified

The default value is PublicUnverified.


```yaml
Type: PartnerType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyFqdn
Full qualified domain name of the proxy server used by the XMPP partner.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaslNegotiation
Indicates support for the Simple Authentication and Security Layer protocol, a protocol used for server authentication.

Allowed values are:

* Required (SASL negotiation must be supported)
* Optional (SASL will be used
* NotSupported (SASL negotiation will not be supported) if available)

The default value is Required.

```yaml
Type: SaslNegotiation
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportDialbackNegotiation
Indicates whether dialback negotiation will be supported.
With dialback negotiation, when Server A contacts Server B communication is not immediately established.
Instead, Server B first attempts to verify the identity if Server A by contacting the authoritative DNS server for the domain that Server A claims to be from.

Note that dialback negotiation is not as secure as SASL or TLS.
Instead, it is primarily used in situations where certificates cannot be used to verify a server's identity.

The default value is True.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsNegotiation
Indicates support for the Transport Layer Security protocol, a protocol used to encrypt server-to-server data streams.

Allowed values are:

* Required (TLS negotiation must be supported)
* Optional (TLS will be used if available)
* NotSupported (TLS negotiation will not be supported)

The default value is Required.


```yaml
Type: TlsNegotiation
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsXmppAllowedPartner` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsXmppAllowedPartner` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsXmppAllowedPartner](Get-CsXmppAllowedPartner.md)

[New-CsXmppAllowedPartner](New-CsXmppAllowedPartner.md)

[Remove-CsXmppAllowedPartner](Remove-CsXmppAllowedPartner.md)

