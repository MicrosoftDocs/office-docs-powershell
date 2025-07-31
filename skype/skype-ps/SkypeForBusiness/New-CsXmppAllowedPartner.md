---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csxmppallowedpartner
schema: 2.0.0
title: New-CsXmppAllowedPartner
---

# New-CsXmppAllowedPartner

## SYNOPSIS
Creates a new XMPP allowed partner.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users have been authorized to exchange instant messages and presence information with your Skype for Business Server users.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ParentAndRelativeKey
```
New-CsXmppAllowedPartner -Domain <String> [-AdditionalDomains <PSListModifier>] [-Confirm]
 [-ConnectionLimit <UInt32>] [-Description <String>] [-EnableKeepAlive <Boolean>] [-Force] [-InMemory]
 [-PartnerType <PartnerType>] [-ProxyFqdn <String>] [-SaslNegotiation <SaslNegotiation>]
 [-SupportDialbackNegotiation <Boolean>] [-TlsNegotiation <TlsNegotiation>] [-WhatIf] [<CommonParameters>]
```

### Identity
```
New-CsXmppAllowedPartner [-Identity] <XdsGlobalRelativeIdentity> [-AdditionalDomains <PSListModifier>]
 [-Confirm] [-ConnectionLimit <UInt32>] [-Description <String>] [-EnableKeepAlive <Boolean>] [-Force]
 [-InMemory] [-PartnerType <PartnerType>] [-ProxyFqdn <String>] [-SaslNegotiation <SaslNegotiation>]
 [-SupportDialbackNegotiation <Boolean>] [-TlsNegotiation <TlsNegotiation>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

Skype for Business Server Control Panel: To create a new XMPP allowed partner using Skype for Business Server Control Panel, click External User Access, click XMPP Federated Partners and then click New.


## EXAMPLES

### Example 1
```
New-CsXmppAllowedPartner -Identity "contoso.com" -PartnerType "PublicVerified"
```

The command shown in Example 1 creates a new XMPP allowed partner: contoso.com.
In this example, the PartnerType property is set to "PublicVerified".


### Example 2
```
New-CsXmppAllowedPartner -Identity "fabrikam.com" -AdditionalDomains "research.fabrikam2.com"
```

Example 2 creates a new XMPP allowed partner with the Identity fabrikam.com.
In addition to the root domain (fabrikam.com), the AdditionalDomains property is included to allow support for the child domain research.fabrikam2.com.


## PARAMETERS

### -AdditionalDomains

> Applicable: Lync Server 2013, Skype for Business Server 2015

Additional XMPP domains belonging to the allowed partner.
Multiple domains can be specified by separated domain names by using commas; for example:

`-AdditionalDomains "fabrikam2.com","fabrikam3.com"`

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionLimit

> Applicable: Lync Server 2013, Skype for Business Server 2015

Specifies the maximum number of simultaneous connections allowed to a specific partner.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide additional text regarding the XMPP allowed partner.
For example, the Description might include contact information for the partner.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Lync Server 2013, Skype for Business Server 2015

Primary domain of the XMPP allowed partner; for example:

`-Domain "fabrikam.com"`

You can specify the primary domain by using either the Domain parameter or the Identity parameter.
However, you cannot use both parameters in the same command.

Additional domains can be specified by using the AdditionalDomains parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableKeepAlive

> Applicable: Lync Server 2013, Skype for Business Server 2015

Indicates whether or not the XMPP partner should periodically transmit "keep alive" packets in order to verify that the connection is still active.

The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015

Primary domain of the XMPP allowed partner; for example:

``-Identity "fabrikam.com"`

You can specify the primary domain by using either the Identity parameter or the Domain parameter.
However, you cannot use both parameters in the same command.

Additional domains can be specified by using the AdditionalDomains parameter.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2013, Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartnerType

> Applicable: Lync Server 2013, Skype for Business Server 2015

Specifies the relationship between Skype for Business Server and the XMPP partner.
Allowed values are:

Federated (the XMPP partner is from a federated domain)

PublicVerified

PublicUnverified

The default value is PublicUnverified.


```yaml
Type: PartnerType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015

Full qualified domain name of the proxy server used by the XMPP partner.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaslNegotiation

> Applicable: Lync Server 2013, Skype for Business Server 2015

Indicates support for the Simple Authentication and Security Layer protocol, a protocol used for server authentication.

Allowed values are:

Required (SASL negotiation must be supported)

Optional (SASL will be used if available)

NotSupported (SASL negotiation will not be supported)

The default value is Required.


```yaml
Type: SaslNegotiation
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportDialbackNegotiation

> Applicable: Lync Server 2013, Skype for Business Server 2015

Indicates whether dialback negotiation will be supported.
With dialback negotiation, when Server A contacts Server B communication is not immediately established.
Instead, Server B first attempts to verify the identity of Server A by contacting the authoritative DNS server for the domain that Server A claims to be from.

Note that dialback negotiation is not as secure as SASL or TLS.
Instead, it is primarily used in situations where certificates cannot be used to verify a server's identity.

The default value is True.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsNegotiation

> Applicable: Lync Server 2013, Skype for Business Server 2015

Indicates support for the Transport Layer Security protocol, a protocol used to encrypt server-to-server data streams.

Allowed values are:

Required (TLS negotiation must be supported)

Optional (TLS will be used if available)

NotSupported (TLS negotiation will not be support The default value is Required.)


```yaml
Type: TlsNegotiation
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The `New-CsXmppAllowedPartner` cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner
The `New-CsXmppAllowedPartner` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsXmppAllowedPartner](Get-CsXmppAllowedPartner.md)

[Remove-CsXmppAllowedPartner](Remove-CsXmppAllowedPartner.md)

[Set-CsXmppAllowedPartner](Set-CsXmppAllowedPartner.md)
