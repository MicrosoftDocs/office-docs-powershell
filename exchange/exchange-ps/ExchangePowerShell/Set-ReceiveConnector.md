---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-receiveconnector
schema: 2.0.0
title: Set-ReceiveConnector
---

# Set-ReceiveConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ReceiveConnector cmdlet to modify Receive connectors on Mailbox servers and Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ReceiveConnector [-Identity] <ReceiveConnectorIdParameter>
 [-AdvertiseClientSettings <Boolean>]
 [-AuthMechanism <AuthMechanisms>]
 [-AuthTarpitInterval <EnhancedTimeSpan>]
 [-Banner <String>]
 [-BareLinefeedRejectionEnabled <Boolean>]
 [-BinaryMimeEnabled <Boolean>]
 [-Bindings <MultiValuedProperty>]
 [-ChunkingEnabled <Boolean>]
 [-Comment <String>]
 [-Confirm]
 [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>]
 [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <Boolean>]
 [-DomainController <Fqdn>]
 [-DomainSecureEnabled <Boolean>]
 [-EightBitMimeEnabled <Boolean>]
 [-EnableAuthGSSAPI <Boolean>]
 [-Enabled <Boolean>]
 [-EnhancedStatusCodesEnabled <Boolean>]
 [-ExtendedProtectionPolicy <ExtendedProtectionPolicySetting>]
 [-Fqdn <Fqdn>]
 [-LongAddressesEnabled <Boolean>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>]
 [-MaxHeaderSize <ByteQuantifiedSize>]
 [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>]
 [-MaxInboundConnectionPerSource <Unlimited>]
 [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxLocalHopCount <Int32>]
 [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>]
 [-MaxProtocolErrors <Unlimited>]
 [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>]
 [-MessageRateSource <MessageRateSourceFlags>]
 [-Name <String>]
 [-OrarEnabled <Boolean>]
 [-PermissionGroups <PermissionGroups>]
 [-PipeliningEnabled <Boolean>]
 [-ProtocolLoggingLevel <ProtocolLoggingLevel>]
 [-RejectReservedSecondLevelRecipientDomains <Boolean>]
 [-RejectReservedTopLevelRecipientDomains <Boolean>]
 [-RejectSingleLabelRecipientDomains <Boolean>]
 [-RemoteIPRanges <MultiValuedProperty>]
 [-RequireEHLODomain <Boolean>]
 [-RequireTLS <Boolean>]
 [-ServiceDiscoveryFqdn <Fqdn>]
 [-SizeEnabled <SizeMode>]
 [-SmtpUtf8Enabled <Boolean>]
 [-SuppressXAnonymousTls <Boolean>]
 [-TarpitInterval <EnhancedTimeSpan>]
 [-TlsCertificateName <SmtpX509Identifier>]
 [-TlsDomainCapabilities <MultiValuedProperty>]
 [-TransportRole <ServerRole>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ReceiveConnector -Identity "Internet Receive Connector" -Banner "220 SMTP OK" -ConnectionTimeout 00:15:00
```

This example makes the following configuration changes to the Receive connector Internet Receive Connector:

Sets the Banner to 220 SMTP OK.

Configures the Receive connector to time out connections after 15 minutes.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the Receive connector that you want to modify. You can use any value that uniquely identifies the Receive connector. For example:

- Name
- Distinguished name (DN)
- GUID
- ServerName\\Name

```yaml
Type: ReceiveConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdvertiseClientSettings

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AdvertiseClientSettings parameter specifies whether the SMTP server name, port number, and authentication settings for the Receive connector are displayed to users in the options of Outlook on the web. Valid values are:

- $true: The SMTP values are displayed in Outlook on the web. Typically, you would only use this setting for a Receive connector with the usage type Client (authenticated SMTP connections on TCP port 587 for POP3 and IMAP4 clients).
- $false: The SMTP values are displayed in Outlook on the web. This is the default value.

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

### -AuthMechanism

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AuthMechanism parameter specifies the advertised and accepted authentication mechanisms for the Receive connector. Valid values are:

- None
- Tls
- Integrated
- BasicAuth
- BasicAuthRequireTLS
- ExchangeServer
- ExternalAuthoritative

You can specify multiple values separated by commas, but some values have dependencies and exclusions:

- You can only use the value None by itself.
- The value BasicAuthRequireTLS also requires the values BasicAuth and Tls.
- The only other value that you can use with ExternalAuthoritative is Tls.
- The value Tls is required when the value of the RequireTLS parameter is $true.
- The value ExternalAuthoritative, requires you to set the value of the PermissionGroups parameter to ExchangeServers.

```yaml
Type: AuthMechanisms
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthTarpitInterval

> Applicable: Exchange Server 2016, Exchange Server 2019

The AuthTarpitInterval parameter specifies the period of time to delay responses to failed authentication attempts from remote servers that may be abusing the connection. The default value is 5 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

When you set the value to 00:00:00, you disable the authentication tarpit interval. Setting the value to more than a few seconds can cause timeouts and mail flow issues.

You can configure the delay for other SMTP failure responses by using the TarpitInterval parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Banner

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Banner parameter specifies a custom SMTP 220 banner that's displayed to remote messaging servers that connect to the Receive connector. When you specify a value, enclose the value in quotation marks, and start the value with 220 (the default "Service ready" SMTP response code).

The default value of this parameter is blank ($null), which uses the following SMTP banner:

`220 <ServerName> Microsoft ESMTP MAIL service ready at <RegionalDay-Date-24HourTimeFormat><RegionalTimeZoneOffset>`

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

### -BareLinefeedRejectionEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BareLinefeedRejectionEnabled parameter specifies whether this Receive connector rejects messages that contain line feed (LF) characters without immediately preceding carriage return characters (CR) in the SMTP DATA stream. This condition is known as bare line feeds. Valid values are:

- $true: Messages that contain bare line feeds are rejected.
- $false: Messages that contain bare line feeds aren't rejected. This is the default value.

Although message that contain bare line feeds might be delivered successfully, these messages don't follow SMTP protocol standards and might cause problems on messaging servers.

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

### -BinaryMimeEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BinaryMimeEnabled parameter specifies whether the BINARYMIME Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: BINARYMIME is enabled and is advertised in the EHLO response. This setting requires that the ChunkingEnabled parameter is also set to the value $true. This is the default value.
- $false: BINARYMIME is disabled and isn't advertised in the EHLO response.

The binary MIME extension is defined in RFC 3030.

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

### -Bindings

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Bindings parameter specifies the local IP address and TCP port number that's used by the Receive connector. This parameter uses the syntax `"IPv4Address:TCPPort","IPv6Address:TCPPort"`. You can specify an IPv4 address and port, an IPv6 address and port, or both. The IP address values 0.0.0.0 or `[::]` indicate that the Receive connector uses all available local IPv4 or all IPv6 addresses.

You need to specify a valid local IP address from the network adapters of the Exchange server. If you specify an invalid local IP address, the Microsoft Exchange Transport service might fail to start when the service is restarted.

The values for this parameter must satisfy one of the following uniqueness requirements:

- The combination of IP address and TCP port doesn't conflict with the IP address and TCP port that's used on another Receive connector on the server.
- You use an existing combination of IP address and TCP port that's configured on another Receive connector on the server, but you restrict the remote IP addresses by using the RemoteIPRanges parameter. When you create a Receive connector, you can only use the RemoteIPRanges and Bindings parameters together with the Custom or Partner switches (or the Usage parameter with the values Custom or Partner.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChunkingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ChunkingEnabled parameter specifies whether the CHUNKING Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: CHUNKING is enabled and is advertised in the EHLO response. This is the default value.
- $false: CHUNKING is disabled and isn't advertised in the EHLO response.

Chunking is defined in RFC 3030.

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

### -Comment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ConnectionInactivityTimeout

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ConnectionInactivityTimeout parameter specifies the maximum amount of idle time before a connection to the Receive connector is closed.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

A valid value for this parameter is 00:00:01 (one second) to 1.00:00:00 (one day).

The default value for Receive connectors on Mailbox servers is 00:05:00 (5 minutes). The default value for Receive connectors on Edge Transport servers is 00:01:00 (1 minute).

The value of this parameter must be less than the value of the ConnectionTimeout parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionTimeout

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ConnectionTimeout parameter specifies the maximum time that the connection to the Receive connector can remain open, even if the connection is actively transmitting data.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

A valid value for this parameter is 00:00:01 (one second) to 1.00:00:00 (one day).

The default value for Receive connectors on Mailbox servers is 00:10:00 (10 minutes). The default value for Receive connectors on Edge Transport servers is 00:05:00 (5 minutes).

The value of this parameter must be greater than the value of the ConnectionInactivityTimeout parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DefaultDomain parameter specifies the default accepted domain to use for the Exchange organization. You can use any value that uniquely identifies the accepted domain. For example:

- Name
- Distinguished name (DN)
- GUID

Although you can configure any accepted domain as the default domain, you typically specify an authoritative domain. The default domain is used by:

- The external postmaster address: `postmaster@<default domain>`.
- Encapsulated non-SMTP email addresses (Internet Mail Connector Encapsulated Address or IMCEA encapsulation).
- The primary address for all recipients in the default email address policy. If you configure another accepted domain as the default domain, the default email address policy isn't automatically updated.

```yaml
Type: AcceptedDomainIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliveryStatusNotificationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DeliveryStatusNotificationEnabled parameter specifies whether the DSN (delivery status notification) Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: DSN is enabled and is advertised in the EHLO response. This is the default value.
- $false: DSN is disabled and isn't advertised in the EHLO response.

Delivery status notifications are defined in RFC 3461.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainSecureEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainSecureEnabled parameter specifies whether to enable or disable mutual Transport Layer Security (TLS) authentication (also known as Domain Secure) for the domains that are serviced by the Receive connector. Valid values are:

- $true: Mutual TLS authentication is enabled.
- $false: Mutual TLS authentication is disabled.

Note that setting this parameter to the value $true is only part of the requirements for enabling mutual TLS authentication:

- The AuthMechanism parameter must contain the value Tls, and can't contain the value ExternalAuthoritative.
- The domain that's used for mutual TLS authentication must be configured in the following locations:
- The TLSReceiveDomainSecureList parameter on the Set-TransportConfig cmdlet.
- The AddressSpaces parameter on the Set-SendConnector cmdlet for the corresponding Send connector.
- The TLSSendDomainSecureList parameter on the Set-TransportConfig cmdlet.

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

### -EightBitMimeEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EightBitMimeEnabled parameter specifies whether the 8BITMIME Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: 8BITMIME is enabled and is advertised in the EHLO response. This is the default value.
- $false: 8BITMIME is disabled and isn't advertised in the EHLO response.

8-bit data transmission is defined in RFC 6152.

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

### -EnableAuthGSSAPI

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EnableAuthGSSAPI parameter enables or disables Kerberos when Integrated Windows authentication is available on the Receive connector (the AuthMechanism parameter contains the value Integrated). Valid values are:

- $true: Kerberos is enabled. The Extended SMTP keyword AUTH GSSAPI NTLM is advertised in the EHLO response. Clients can use Kerberos or NTLM for Integrated Windows authentication.
- $false: Kerberos is disabled. The Extended SMTP keyword AUTH NTLM is advertised in the EHLO response. Clients can only use NTLM for Integrated Windows authentication.

The Generic Security Services application programming interface (GSSAPI) is an IETF standard for accessing security services.

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

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Enabled parameter specifies whether to enable or disable the Receive connector. Valid values are:

- $true: The Receive connector is enabled. This is the default value.
- $false: The Receive connector is disabled.

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

### -EnhancedStatusCodesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EnhancedStatusCodesEnabled parameter specifies whether the ENHANCEDSTATUSCODES Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: ENHANCEDSTATUSCODES is enabled and is advertised in the EHLO response. This is the default value.
- $false: ENHANCEDSTATUSCODES is disabled and isn't advertised in the EHLO response.

Enhanced status codes are defined in RFC 2034.

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

### -ExtendedProtectionPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication on the Receive connector.Valid values are:

- None: Extended Protection for Authentication won't be used. This is the default value.
- Allow: Extended Protection for Authentication will be used only if the connecting host supports it. Otherwise, the connections will be established without Extended Protection for Authentication.
- Require: Extended Protection for Authentication will be required for all incoming connections to this Receive connector. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you are using Integrated Windows authentication.

```yaml
Type: ExtendedProtectionPolicySetting
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Fqdn parameter specifies the destination FQDN that's shown to connected messaging servers. This value is used in the following locations:

- In the default SMTP banner of the Receive connector
- In the EHLO/HELO response of the Receive connector
- In the most recent Received header field in the incoming message when the message enters the Transport service on a Mailbox server or an Edge server
- During TLS authentication

The default value is the FQDN of theExchange server that contains the Receive connector (for example edge01.contoso.com). You can specify a different FQDN (for example, mail.contoso.com).

Don't modify this value on the default Receive connector named `Default <Server Name>` on Mailbox servers. If you have multiple Mailbox servers in your organization, internal mail flow between Mailbox servers fails if you change the FQDN value on this Receive connector.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LongAddressesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LongAddressesEnabled parameter specifies whether the Receive connector accepts long X.400 email addresses. The X.400 email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method. Valid values are:

- $true: X.400 email addresses can be up to 1,860 characters long after IMCEA encapsulation.
- $false: The maximum length of a complete SMTP email address is 571 characters. This is the default value.

When you set this parameter to the value $true the following changes are made to the Receive connector:

- The XLONGADDR Extended SMTP extension is enabled and is advertised in the EHLO response.
- The accepted line length of an SMTP session is increased to 8,000 characters.
- Valid long addresses are accepted by the MAIL FROM and RCPT TO SMTP commands.

You can only configure this parameter on Receive connectors in the Transport service on Mailbox servers.

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

### -MaxAcknowledgementDelay

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter isn't used by Exchange Server 2016. It's used only by Exchange 2010 servers in coexistence environments.

The MaxAcknowledgementDelay parameter specifies the period the transport server delays acknowledgement when receiving messages from a host that doesn't support shadow redundancy. When receiving messages from a host that doesn't support shadow redundancy, a Microsoft Exchange Server 2010 transport server delays issuing an acknowledgement until it verifies that the message has been successfully delivered to all recipients. However, if it takes too long to verify successful delivery, the transport server times out and issues an acknowledgement anyway. The default value is 30 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHeaderSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxHeaderSize parameter specifies the maximum size of the SMTP message header before the Receive connector closes the connection. The default value is 256 kilobytes (262144 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is from 1 to 2147483647 bytes.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHopCount

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxHopCount parameter specifies the maximum number of hops that a message can take before the message is rejected by the Receive connector. The maximum number of hops is determined by the number of Received header fields that exist in a submitted message.

A valid value is from 1 to 500. The default value is 30.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnection

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxInboundConnection parameter specifies the maximum number of inbound connections that this Receive connector serves at the same time.

A valid value is from 1 to 2147483647, or the value unlimited. The default value is 5000.

To disable the inbound connection limit on a Receive connector, enter a value of unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnectionPercentagePerSource

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxInboundConnectionPercentagePerSource parameter specifies the maximum number of connections that a Receive connector serves at the same time from a single IP address, expressed as the percentage of available remaining connections on a Receive connector.

A valid value is from 1 to 100 without the percent sign (%). The default value is 2 percent.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnectionPerSource

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxInboundConnectionPerSource parameter specifies the maximum number of connections that this Receive connector serves at the same time from a single IP address.

A valid value is from 1 to 10000, or the value unlimited. The default value is 20.

To disable the inbound connection per source limit on a Receive connector, enter a value of unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLocalHopCount

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxLocalHopCount parameter specifies the maximum number of local hops that a message can take before the message is rejected by the Receive connector. The maximum number of local hops is determined by the number of Received headers with local server addresses in a submitted message.

A valid value is from 0 to 50. The default value is 8.

When you specify the value 0, the message is never rejected based on the number of local hops.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogonFailures

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxLogonFailures parameter specifies the number of logon failures that the Receive connector retries before it closes the connection.

A valid value is from 0 to 10. The default value is 3.

When you specify the value 0, the connection is never closed because of logon failures.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMessageSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxMessageSize parameter specifies the maximum size of a message that's allowed through the Receive connector. The default value is 36 MB, which results in a realistic maximum message size of 25 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value for this parameter is from 65536 to 2147483647 bytes.

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxProtocolErrors

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxProtocolErrors parameter specifies the maximum number of SMTP protocol errors that the Receive connector accepts before closing the connection.

A valid value is from 0 to 2147483647, or the value unlimited. The default value is 5.

When you specify the value unlimited, a connection is never closed because of protocol errors.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecipientsPerMessage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxRecipientsPerMessage parameter specifies the maximum number of recipients per message that the Receive connector accepts before closing the connection.

A valid value is from 1 to 512000. The default value is 200.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRateLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MessageRateLimit parameter specifies the maximum number of messages that can be sent by a single client IP address per minute.

A valid value is from 1 to 2147483647, or the value unlimited.

To remove the message rate limit on a Receive connector, enter a value of unlimited.

The default value for Receive connectors on Mailbox servers is unlimited. The default value for Receive connectors on an Edge Transport servers is 600.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRateSource

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MessageRateSource parameter specifies how the message submission rate is calculated. Valid values are:

- None: No message submission rate is calculated.
- IPAddress: The message submission rate is calculated for sending hosts.
- User: The message submission rate is calculated for sending users (specified with the MAIL FROM SMTP command).
- All: The message submission rate is calculated for both the sending users and sending hosts.

```yaml
Type: MessageRateSourceFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Name parameter specifies the unique name for the Receive connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

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

### -OrarEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OrarEnabled parameter enables or disables Originator Requested Alternate Recipient (ORAR) on the Receive connector. Valid values are:

- $true: ORAR is enabled and is advertised in the XORAR keyword in the EHLO response. The actual ORAR information is transmitted in the RCPT TO SMTP command.
- $false: ORAR is disabled and is isn't advertised in the EHLO response. This is the default value.

If the email address specified in the ORAR information is a long X.400 email address, you need to set the LongAddressesEnabled parameter to the value $true.

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

### -PermissionGroups

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PermissionGroups parameter specifies the well-known security principals who are authorized to use the Receive connector and the permissions that are assigned to them. Valid values are:

- None
- AnonymousUsers
- ExchangeUsers
- ExchangeServers
- ExchangeLegacyServers
- Partners
- Custom

The default permission groups that are assigned to a Receive connector depend on the connector usage type parameter that was used when the connector was created (Client, Internal, Internet, Partner, or Usage).

When you use the value Custom, you need to configure individual permissions by using the Add-ADPermission cmdlet.

For more information about the default permissions and security principals for permission groups, see [Receive connector permission groups](https://learn.microsoft.com/Exchange/mail-flow/connectors/receive-connectors#receive-connector-permission-groups).

```yaml
Type: PermissionGroups
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipeliningEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PipeliningEnabled parameter specifies whether the PIPELINING Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: PIPELINING is enabled and is advertised in the EHLO response. This is the default value.
- $false: PIPELINING is disabled and isn't advertised in the EHLO response.

Pipelining is defined in RFC 2920.

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

### -ProtocolLoggingLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ProtocolLoggingLevel parameter specifies whether to enable or disable protocol logging for the Receive connector. Valid values are:

- None: Protocol logging is disabled on the Receive connector. This is the default value.
- Verbose: Protocol logging is enabled on the Receive connector.

For more information about protocol logging, see [Protocol logging](https://learn.microsoft.com/Exchange/mail-flow/connectors/protocol-logging).

```yaml
Type: ProtocolLoggingLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectReservedSecondLevelRecipientDomains

> Applicable: Exchange Server 2016, Exchange Server 2019

The RejectReservedSecondLevelRecipientDomains parameter specifies whether to reject connections that contain recipients in reserved second-level domains as specified in RFC 2606 (example.com, example.net, or example.org). Valid value are:

- $true: RCPT TO commands that contain reserved second-level domains are rejected.
- $false: RCPT TO commands that contain reserved second-level domains aren't rejected. This is the default value.

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

### -RejectReservedTopLevelRecipientDomains

> Applicable: Exchange Server 2016, Exchange Server 2019

The RejectReservedTopLevelRecipientDomains parameter specifies whether to reject connections that contain recipients in reserved top-level domains (TLDs) as specified in RFC 2606 (.test, .example, .invalid, or .localhost). Valid value are:

- $true: RCPT TO commands that contain reserved TLDs are rejected.
- $false: RCPT TO commands that contain reserved TLDs aren't rejected. This is the default value.

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

### -RejectSingleLabelRecipientDomains

> Applicable: Exchange Server 2016, Exchange Server 2019

The RejectSingleLabelRecipientDomains parameter specifies whether to reject connections that contain recipients in single-label domains (for example, chris@contoso instead of chris@contoso.com). Valid values are:

- $true: RCPT TO commands that contain single-label domains are rejected.
- $false: RCPT TO commands that contain single-label domains aren't rejected. This is the default value.

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

### -RemoteIPRanges

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RemoteIPRanges parameter specifies the remote IP addresses that the Receive connector accepts messages from. Valid values are:

- Single IP address: For example, 192.168.1.1 or fe80::39bd:88f7:6969:d223%11.
- IP address range: For example, 192.168.1.1-192.168.1.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.1.1/24 or 2001:0DB8::CD3/60.

You can specify multiple value separated by commas: `"Value1","Value2",..."ValueN"`.

Multiple Receive connectors on the same server can have overlapping remote IP address ranges as long as one IP address range is completely overlapped by another. For example, you can configure the following remote IP address ranges on different Receive connectors on the same server:

- 0.0.0.0
- 192.168.1.1/24
- 192.168.1.10

When remote IP address ranges overlap, the Receive connector with the most specific match to the IP address of the connecting server is used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEHLODomain

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RequireEHLODomain parameter specifies whether the client must provide a domain name in the EHLO handshake after the SMTP connection is established. Valid values are:

- $true: The client must provide a domain name in the EHLO handshake. If it doesn't, the SMTP connection is closed.
- $false: The client isn't required to provide a domain name in the EHLO handshake. This is the default value.

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

### -RequireTLS

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RequireTLS parameter specifies whether to require TLS transmission for inbound messages on the Receive connector. Valid values are:

- $true: Inbound messages on the Receive connector require TLS transmission.
- $false: Inbound messages on the Receive connector don't require TLS transmission. This is the default value.

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

### -ServiceDiscoveryFqdn

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ServiceDiscoveryFqdn parameter specifies the service discovery fully-qualified domain name (FQDN). for the Receive connector.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SizeEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SizeEnabled parameter specifies how the SIZE Extended SMTP extension is used on the Receive connector. Valid values are:

- Enabled: SIZE is enabled and is advertised in the EHLO response along with the value of the MaxMessageSize parameter. If the size of the inbound message exceeds the specified value, the Receive connector closes the connection with an error code. This is the default value.
- Disabled: SIZE is disabled and isn't advertised in the EHLO response.
- EnabledwithoutValue: SIZE is enabled and is advertised in the EHLO response, but the value of the MaxMessageSize parameter isn't disclosed in the EHLO response. This setting allows messages to bypass message size checks for authenticated connections between Mailbox servers.

SIZE is defined in RFC 1870.

```yaml
Type: SizeMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpUtf8Enabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -SuppressXAnonymousTls

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SuppressXAnonymousTls parameter specifies whether the X-ANONYMOUSTLS Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: X-ANONYMOUSTLS is disabled and isn't advertised in the EHLO response. This setting also requires that you set the UseDownGradedExchangeServerAuth parameter to the value $true on the Set-TransportService cmdlet on the server.
- $false: X-ANONYMOUSTLS is enabled and is advertised in the EHLO response. This is the default value.

The X-ANONYMOUSTLS extension is important when the AuthMechanism parameter contains the value ExchangeServer.

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

### -TarpitInterval

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TarpitInterval parameter specifies the period of time to delay an SMTP response to a remote server that may be abusing the connection. The default value is 00:00:05 (5 seconds).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you set the value to 00:00:00, you disable the tarpit interval. Setting this value to more than a few seconds can cause timeouts and mail flow issues.

You can configure the delay for authentication failure responses by using the AuthTarpitInterval parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsCertificateName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TlsCertificateName parameter specifies the X.509 certificate to use for TLS encryption. A valid value for this parameter is `"<I>X.500Issuer<S>X.500Subject"`. The X.500Issuer value is found in the certificate's Issuer field, and the X.500Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet. Or, after you run Get-ExchangeCertificate to find the thumbprint value of the certificate, run the command `$TLSCert = Get-ExchangeCertificate -Thumbprint <Thumbprint>`, run the command `$TLSCertName = "<I>$($TLSCert.Issuer)<S>$($TLSCert.Subject)"` and then use the value $TLSCertName for this parameter.

```yaml
Type: SmtpX509Identifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsDomainCapabilities

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TlsDomainCapabilities parameter specifies the capabilities that the Receive connector makes available to specific hosts outside of the organization. Remote hosts are authenticated with TLS with certificate validation before these capabilities are offered.

This parameter uses the following syntax:

`"Domain1:Capability1,Capability2,"...,"Domain2:Capability1,Capability2,...",...`

You can only use this parameter in Exchange hybrid deployments, and the valid Capability values are:

- AcceptCloudServicesMail (Exchange 2013 or later)
- AcceptOorgProtocol (Exchange 2010)

More Capability values are available, but there is no scenario to use them. For more information, see [Advanced Office 365 Routing](https://techcommunity.microsoft.com/t5/exchange-team-blog/advanced-office-365-routing-locking-down-exchange-on-premises/ba-p/609238).

The available Domain values are an SMTP domain (for example, contoso.com), or the value NO-TLS for non-TLS encrypted inbound connections.

For example, `"contoso.com:AcceptOorgProtocol","fabrikam.com:AcceptCloudServicesMail"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRole

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TransportRole parameter specifies the transport service on the Mailbox server where the Receive connector is created. Valid values are:

- FrontendTransport: The Front End Transport service where client or external SMTP connections occur.
- HubTransport: The Transport service where Exchange server and proxied client SMTP connections occur.

You can't use this parameter on Edge Transport servers.

```yaml
Type: ServerRole
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
