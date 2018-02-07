---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-ReceiveConnector

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-ReceiveConnector cmdlet to modify an existing Receive connector on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-ReceiveConnector cmdlet to change an existing Receive connector.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-ReceiveConnector cmdlet to modify Receive connectors on Mailbox servers and Edge Transport servers.

## SYNTAX

```
Set-ReceiveConnector [-Identity] <ReceiveConnectorIdParameter> [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BareLinefeedRejectionEnabled <$true | $false>] [-BinaryMimeEnabled <$true | $false>]
 [-Bindings <MultiValuedProperty>] [-ChunkingEnabled <$true | $false>] [-Comment <String>] [-Confirm]
 [-ConnectionInactivityTimeout <EnhancedTimeSpan>] [-ConnectionTimeout <EnhancedTimeSpan>]
 [-DefaultDomain <AcceptedDomainIdParameter>] [-DeliveryStatusNotificationEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LiveCredentialEnabled <$true | $false>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>] [-Name <String>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RemoteIPRanges <MultiValuedProperty>] [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-SmtpUtf8Enabled <$true | $false>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ReceiveConnector -Identity "Internet Receive Connector" -Banner "220 SMTP OK" -ConnectionTimeout 00:15:00
```

This example makes the following configuration changes to the Receive connector Internet Receive Connector:


Sets the Banner to 220 SMTP OK.

Configures the Receive connector to time out connections after 15 minutes.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-ReceiveConnector -Identity "Internet Receive Connector" -Banner "220 SMTP OK" -ConnectionTimeout 00:15:00
```

This example makes the following configuration changes to the Receive connector Internet Receive Connector:


Sets the Banner to 220 SMTP OK.

Configures the Receive connector to time out connections after 15 minutes.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-ReceiveConnector -Identity "Internet Receive Connector" -Banner "220 SMTP OK" -ConnectionTimeout 00:15:00
```

This example makes the following configuration changes to the Receive connector Internet Receive Connector:


Sets the Banner to 220 SMTP OK.

Configures the Receive connector to time out connections after 15 minutes.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID or connector name that represents the Receive connector. The parameter label can be omitted.



!!! Exchange Server 2016

The Identity parameter specifies the Receive connector that you want to modify. You can use any value that uniquely identifies the Receive connector. For example:

- Name

- Distinguished name (DN)

- GUID

- \<ServerName\>\\\<Name\>



```yaml
Type: ReceiveConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdvertiseClientSettings
!!! Exchange Server 2010

The AdvertiseClientSettings parameter specifies whether the SMTP server name, port number, and authentication settings are displayed in Microsoft Office Outlook Web App About page, accessed from the Help menu.

The default value is $true.



!!! Exchange Server 2013

The AdvertiseClientSettings parameter specifies whether the SMTP server name, port number, and authentication settings are displayed in Microsoft OfficeOutlook Web App, accessed from Settings \> Options \> Account \> my Account \> Settings for POP or IMAP access.

The default value is $false.



!!! Exchange Server 2016

The AdvertiseClientSettings parameter specifies whether the SMTP server name, port number, and authentication settings for the Receive connector are displayed to users in the options of Outlook on the web. Valid values are:

- $true: The SMTP values are displayed in Outlook on the web. Typically, you would only use this setting for a Receive connector with the usage type Client (authenticated SMTP connections on TCP port 587 for POP3 and IMAP4 clients).

- $false: The SMTP values are displayed in Outlook on the web. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthMechanism
!!! Exchange Server 2010, Exchange Server 2013

The AuthMechanism parameter specifies the advertised and accepted authentication mechanisms. The authentication options are None, Tls, Integrated, BasicAuth, BasicAuthRequireTLS, ExchangeServer, and ExternalAuthoritative. You can enter multiple values for the AuthMechanism parameter by separating the values with commas. If the RequireTLS parameter is set to $true, the AuthMechanism parameter must be set to Tls (Transport Layer Security). If you set the AuthMechanism parameter to BasicAuthRequireTLS, you must also select BasicAuth and Tls. The AuthMechanism parameter value ExternalAuthoritative may only coexist with the value Tls. If you set the AuthMechanism parameter to ExternalAuthoritative, the PermissionGroups parameter must also have the value ExchangeServers.



!!! Exchange Server 2016

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
Type: None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Banner
!!! Exchange Server 2010

The Banner parameter specifies an override to the default SMTP 220 banner. When the value of the Banner parameter is blank, the default SMTP banner is the following: 220 \<Servername\> Microsoft ESMTP MAIL service ready at \<RegionalDay-Date-24HourTimeFormat\> \<RegionalTimeZoneOffset\>.

When you specify a value for the Banner parameter, you must use the following syntax: "220 \<RemainingBannerText\>".

220 is the default service ready SMTP response code as defined in RFC 2821.



!!! Exchange Server 2013

The Banner parameter specifies an override to the default SMTP 220 banner. When the value of the Banner parameter is blank, the default SMTP banner is the following:



220 \<Servername\> Microsoft ESMTP MAIL service ready at \<RegionalDay-Date-24HourTimeFormat\> \<RegionalTimeZoneOffset\>



When you specify a value for the Banner parameter, you must use the following syntax:



"220 \<RemainingBannerText\>".



220 is the default service ready SMTP response code as defined in RFC 2821.



!!! Exchange Server 2016

The Banner parameter specifies a custom SMTP 220 banner that's displayed to remote messaging servers that connect to the Receive connector. When you specify a value, enclose the value in quotation marks, and start the value with 220 (the default "Service ready" SMTP response code).

The default value of this parameter is blank ($null), which uses the following SMTP banner:

220 \<Servername\> Microsoft ESMTP MAIL service ready at \<RegionalDay-Date-24HourTimeFormat\>\<RegionalTimeZoneOffset\>



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BareLinefeedRejectionEnabled
!!! Exchange Server 2010

The BareLineFeedRejectionEnabled parameter specifies whether this Receive connector rejects messages that contain bare line feed (LF) characters in the SMTP DATA stream.

Line feed characters that aren't immediately preceded by carriage return (CR) characters are known as bare line feeds. Bare line feeds aren't allowed in SMTP communications. Although it may be possible for a message containing a bare line feed to be delivered successfully, such messages don't adhere to the SMTP protocol standards and may cause problems with messaging servers. If you set this parameter to $true, the Receive connector rejects any messages that contain bare line feeds.

The default value is $false.



!!! Exchange Server 2013

The BareLinefeedRejectionEnabled parameter specifies whether this Receive connector rejects messages that contain bare line feed (LF) characters in the SMTP DATA stream.

Line feed characters that aren't immediately preceded by carriage return (CR) characters are known as bare line feeds. Bare line feeds aren't allowed in SMTP communications. Although it may be possible for a message containing a bare line feed to be delivered successfully, such messages don't adhere to the SMTP protocol standards and may cause problems with messaging servers. If you set this parameter to $true, the Receive connector rejects any messages that contain bare line feeds.

The default value is $false.



!!! Exchange Server 2016

The BareLinefeedRejectionEnabled parameter specifies whether this Receive connector rejects messages that contain line feed (LF) characters without immediately preceding carriage return characters (CR) in the SMTP DATA stream. This condition is known as bare line feeds. Valid values are:

- $true: Messages that contain bare line feeds are rejected.

- $false: Messages that contain bare line feeds aren't rejected. This is the default value.

Although message that contain bare line feeds might be delivered successfully, these messages don't follow SMTP protocol standards, and might cause problems on messaging servers



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BinaryMimeEnabled
!!! Exchange Server 2010, Exchange Server 2013

The BinaryMimeEnabled parameter specifies whether the BINARYMIME EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the BinaryMimeEnabled parameter is set to $true, the BINARYMIME EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the BinaryMimeEnabled parameter is set to $false, the BINARYMIME EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled. The BINARYMIME extension enables remote computers to send binary message data to this Receive connector. The BINARYMIME extension requires the data-chunking service extension, CHUNKING, to be enabled. Therefore, if you set the BinaryMimeEnabled parameter to $true, you should also set the ChunkingEnabled parameter to $true.



!!! Exchange Server 2016

The BinaryMimeEnabled parameter specifies whether the BINARYMIME Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: BINARYMIME is enabled and is advertised in the EHLO response. This setting requires that the ChunkingEnabled parameter is also set to the value $true. This is the default value.

- $false: BINARYMIME is disabled and isn't advertised in the EHLO response.

The binary MIME extension is defined in RFC 3030.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Bindings
!!! Exchange Server 2010

The Bindings parameter specifies the local IP address and TCP port numbers used by the Receive connector to listen for inbound messages. Valid syntax for this parameter is \<IP Address\>:\<TCP Port\>, such as 192.168.1.1:25. The IP address 0.0.0.0 indicates that the Receive connector uses all IP addresses configured on all network adapters to listen for inbound messages.

You must specify a local IP address that's valid for the Hub Transport server or Edge Transport server on which the Receive connector is located. If you specify an invalid local IP address, the Microsoft Exchange Transport service may fail to start when the service is restarted. To specify all IP addresses configured on all network adapters, you can use the IP address 0.0.0.0.

The values that you specify by using the Bindings parameter must satisfy one of the following requirements for uniqueness:

- You can specify a unique combination of IP address and TCP port that doesn't conflict with the IP address or TCP port used in the Bindings parameter of another Receive connector on the server.

- You can use an existing combination of IP address and TCP port, but use the RemoteIPRanges parameter to restrict the remote servers serviced by the Receive connector.



!!! Exchange Server 2013

The Bindings parameter specifies the local IP address and TCP port numbers used by the Receive connector to listen for inbound messages. Valid syntax for this parameter is \<IP Address\>:\<TCP Port\>, such as 192.168.1.1:25. The IP address 0.0.0.0 indicates that the Receive connector uses all IP addresses configured on all network adapters to listen for inbound messages.

You must specify a local IP address that's valid for the Mailbox server or Edge server on which the Receive connector is located. If you specify an invalid local IP address, the Microsoft Exchange Transport service may fail to start when the service is restarted. To specify all IP addresses configured on all network adapters, you can use the IP address 0.0.0.0.

The values that you specify by using the Bindings parameter must satisfy one of the following requirements for uniqueness:

- You can specify a unique combination of IP address and TCP port that doesn't conflict with the IP address or TCP port used in the Bindings parameter of another Receive connector on the server.

- You can use an existing combination of IP address and TCP port, but use the RemoteIPRanges parameter to restrict the remote servers serviced by the Receive connector.



!!! Exchange Server 2016

The Bindings parameter specifies the local IP address and TCP port number that's used by the Receive connector. This parameter uses the syntax "\<IPv4 Address\>:\<TCP Port\>","\<IPv6 Address\>:\<TCP Port\>". You can specify an IPv4 address and port, and IPv6 address and port, or both. The IP address values 0.0.0.0 or [::]: indicate that the Receive connector uses all available local IPv4 or all IPv6 addresses.

You need to specify a valid local IP address from the network adapters of the Exchange server. If you specify an invalid local IP address, the Microsoft Exchange Transport service might fail to start when the service is restarted.

The values for this parameter must satisfy one of the following uniqueness requirements:

- The combination of IP address and TCP port doesn't conflict with the IP address and TCP port that's used on another Receive connector on the server.

- You use an existing combination of IP address and TCP port that's configured on another Receive connector on the server, but you restrict the remote IP addresses by using the RemoteIPRanges parameter. When you create a Receive connector, you can only use the RemoteIPRanges and Bindings parameters together with the Custom or Partner switches (or the Usage parameter with the values Custom or Partner.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChunkingEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ChunkingEnabled parameter specifies whether the CHUNKING EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the ChunkingEnabled parameter is set to $true, the CHUNKING EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the ChunkingEnabled parameter is set to $false, the CHUNKING EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled. The CHUNKING extension enables large message bodies to be relayed by the remote server to the Receive connector in multiple, smaller chunks.



!!! Exchange Server 2016

The ChunkingEnabled parameter specifies whether the CHUNKING Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: CHUNKING is enabled and is advertised in the EHLO response. This is the default value.

- $false: CHUNKING is disabled and isn't advertised in the EHLO response.

Chunking is defined in RFC 3030.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
!!! Exchange Server 2010

The Comment parameter specifies an optional comment. You must enclose the Comment parameter in quotation marks ("), for example: "this is an admin note".



!!! Exchange Server 2013, Exchange Server 2016

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionInactivityTimeout
!!! Exchange Server 2010

The ConnectionInactivityTimeout parameter specifies the maximum amount of idle time before a connection to a Receive connector is closed. The default value for a Receive connector configured on a Hub Transport server is 5 minutes. The default value for a Receive connector configured on an Edge Transport server is 1 minute.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a connection inactivity time-out of 5 minutes, enter 00:05:00.

The value specified by the ConnectionTimeout parameter must be greater than the value specified by the ConnectionInactivityTimeout parameter. The valid input range for either parameter is from 00:00:01 through 1.00:00:00.



!!! Exchange Server 2013

The ConnectionInactivityTimeout parameter specifies the maximum amount of idle time before a connection to a Receive connector is closed. The default value for a Receive connector configured in the Transport service of a Mailbox server is 5 minutes. The default value for a Receive connector configured on an Edge server is 1 minute.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a connection inactivity time-out of 5 minutes, enter 00:05:00.

The value specified by the ConnectionTimeout parameter must be greater than the value specified by the ConnectionInactivityTimeout parameter. The valid input range for either parameter is from 00:00:01 through 1.00:00:00.



!!! Exchange Server 2016

The ConnectionInactivityTimeout parameter specifies the maximum amount of idle time before a connection to the Receive connector is closed.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

A valid value for this parameter is 00:00:01 (one second) to 1.00:00:00 (one day).

The default value for Receive connectors on Mailbox servers is 00:05:00 (5 minutes). The default value for Receive connectors on Edge Transport servers is 00:01:00 (1 minute).

The value of this parameter must be less than the value of the ConnectionTimeout parameter.



```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionTimeout
!!! Exchange Server 2010

The ConnectionTimeout parameter specifies the maximum time that a connection can remain open, even if the connection is actively transmitting data. The default value for a Receive connector configured on a Hub Transport server is 10 minutes The default value for a Receive connector configured on an Edge Transport server is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a connection time-out of 5 minutes, enter 00:05:00.

The value specified by the ConnectionTimeout parameter must be greater than the value specified by the ConnectionInactivityTimeout parameter. The valid input range for either parameter is from 00:00:01 through 1.00:00:00.



!!! Exchange Server 2013

The ConnectionTimeout parameter specifies the maximum time that a connection can remain open, even if the connection is actively transmitting data. The default value for a Receive connector configured on a Mailbox server is 10 minutes The default value for a Receive connector configured on an Edge server is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a connection time-out of 5 minutes, enter 00:05:00.

The value specified by the ConnectionTimeout parameter must be greater than the value specified by the ConnectionInactivityTimeout parameter. The valid input range for either parameter is from 00:00:01 through 1.00:00:00.



!!! Exchange Server 2016

The ConnectionTimeout parameter specifies the maximum time that the connection to the Receive connector can remain open, even if the connection is actively transmitting data.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

A valid value for this parameter is 00:00:01 (one second) to 1.00:00:00 (one day).

The default value for Receive connectors on Mailbox servers is 00:10:00 (10 minutes). The default value for Receive connectors on Edge Transport servers is 00:05:00 (5 minutes).

The value of this parameter must be greater than the value of the ConnectionInactivityTimeout parameter.



```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain
!!! Exchange Server 2010, Exchange Server 2013

The DefaultDomain parameter specifies the domain name to append to values submitted to MAIL FROM or RCPT TO in the message envelope by a sending server if no domain name is provided.



!!! Exchange Server 2016

The DefaultDomain parameter specifies the default accepted domain to use for the Exchange organization. You can use any value that uniquely identifies the accepted domain. For example:

- Name

- Distinguished name (DN)

- GUID

Although you can configure any accepted domain as the default domain, you typically specify an authoritative domain. The default domain is used by:

- The external postmaster address: postmaster@\<default domain\>.

- Encapsulated non-SMTP email addresses (Internet Mail Connector Encapsulated Address or IMCEA encapsulation).

- The primary address for all recipients in the default email address policy. If you configure another accepted domain as the default domain, the default email address policy isn't automatically updated.



```yaml
Type: AcceptedDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliveryStatusNotificationEnabled
!!! Exchange Server 2010, Exchange Server 2013

The DeliveryStatusNotificationEnabled parameter specifies whether the delivery status notification (DSN) EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the DeliveryStatusNotificationEnabled parameter is set to $true, the DSN EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the DeliveryStatusNotificationEnabled parameter is set to $false, the DSN EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled. The DSN extension to extended SMTP (ESMTP) provides enhanced DSN functionality specified in RFC 1891.



!!! Exchange Server 2016

The DeliveryStatusNotificationEnabled parameter specifies whether the DSN (delivery status notification) Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: DSN is enabled and is advertised in the EHLO response. This is the default value.

- $false: DSN is disabled and isn't advertised in the EHLO response.

Delivery status notifications are defined in RFC 3461.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainSecureEnabled
!!! Exchange Server 2010

The DomainSecureEnabled parameter specifies the first part of the process to enable mutual Transport Layer Security (TLS) authentication for the domains serviced by this Receive connector. Mutual TLS authentication functions correctly only if the following conditions are true:

- The value of the DomainSecureEnabled parameter is $true.

- The value of the AuthMechanism parameter contains Tls and doesn't contain ExternalAuthoritative.

- The TLSReceiveDomainSecureList attribute of your transport configuration contains at least one domain serviced by this Receive connector. The wildcard character (\*) isn't supported in domains configured for mutual TLS authentication. The same domain must also be defined on the corresponding Send connector, and in the value of the TLSSendDomainSecureList attribute of your Transport configuration.

The default value for the DomainSecureEnabled parameter is $false for the following types of Receive connectors:

- All Receive connectors defined on a Hub Transport server.

- User-created Receive connectors defined on an Edge Transport server.

The default value for DomainSecureEnabled is $true for default Receive connectors defined on an Edge Transport server.



!!! Exchange Server 2013

The DomainSecureEnabled parameter specifies the first part of the process to enable mutual Transport Layer Security (TLS) authentication for the domains serviced by this Receive connector. Mutual TLS authentication functions correctly only if the following conditions are true:

- The value of the DomainSecureEnabled parameter is $true.

- The value of the AuthMechanism parameter contains Tls and doesn't contain ExternalAuthoritative.

- The TLSReceiveDomainSecureList attribute of your transport configuration contains at least one domain serviced by this Receive connector. The wildcard character (\*) isn't supported in domains configured for mutual TLS authentication. The same domain must also be defined on the corresponding Send connector, and in the value of the TLSSendDomainSecureList attribute of your Transport configuration.

The default value for the DomainSecureEnabled parameter is $false for the following types of Receive connectors:

- All Receive connectors defined on a Mailbox server.

- User-created Receive connectors defined on an Edge server.

The default value for DomainSecureEnabled is $true for default Receive connectors defined on an Edge server.



!!! Exchange Server 2016

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EightBitMimeEnabled
!!! Exchange Server 2010, Exchange Server 2013

The EightBitMimeEnabled parameter specifies whether the 8BITMIME EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the EightBitMimeEnabled parameter is set to $true, the 8BITMIME EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the EightBitMimeEnabled parameter is set to $false, the 8BITMIME EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled.



!!! Exchange Server 2016

The EightBitMimeEnabled parameter specifies whether the 8BITMIME Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: 8BITMIME is enabled and is advertised in the EHLO response. This is the default value.

- $false: 8BITMIME is disabled and isn't advertised in the EHLO response.

8-bit data transmission is defined in RFC 6152.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAuthGSSAPI
!!! Exchange Server 2010

The EnableAuthGSSAPI parameter specifies how to control the advertisement of the Generic Security Services application programming interface (GSSAPI) authentication method when Integrated Windows authentication is enabled on this connector. If the AuthMechanism parameter contains Integrated, and the EnableAuthGSSAPI parameter is set to $true, the AUTH GSSAPI NTLM keyword is advertised in the EHLO response of the Receive connector. Clients may use Kerberos or NTLM to authenticate with the Receive connector. If the AuthMechanism parameter contains Integrated, and the EnableAuthGSSAPI parameter is set to $false, the AUTH NTLM keyword is advertised in the EHLO response of the Receive connector. Clients may only use NTLM to authenticate with the Receive connector.

If you have Internet Information Services (IIS) messaging servers that authenticate with this Receive connector, you should set the value of the EnableAuthGSSAPI parameter to $false. Authentication with computers running Microsoft Exchange Server 2003 isn't affected by the value of the EnableAuthGSSAPI parameter. Exchange 2003 servers use the authentication methods advertised in the X-EXPS keyword. The X-EXPS keyword is advertised in the EHLO response of the Receive connector when the AuthMechanism parameter contains ExchangeServer.

Valid values for this parameter are $true or $false. The default value is $false. By default, the EnableAuthGSSAPI parameter is set to $true only on the default Receive connector Client \<Server Name\> that's created only on Hub Transport servers.



!!! Exchange Server 2013

The EnableAuthGSSAPI parameter specifies how to control the advertisement of the Generic Security Services application programming interface (GSSAPI) authentication method when Integrated Windows authentication is enabled on this connector. If the AuthMechanism parameter contains Integrated, and the EnableAuthGSSAPI parameter is set to $true, the AUTH GSSAPI NTLM keyword is advertised in the EHLO response of the Receive connector. Clients may use Kerberos or NTLM to authenticate with the Receive connector. If the AuthMechanism parameter contains Integrated, and the EnableAuthGSSAPI parameter is set to $false, the AUTH NTLM keyword is advertised in the EHLO response of the Receive connector. Clients may only use NTLM to authenticate with the Receive connector.

If you have Internet Information Services (IIS) messaging servers that authenticate with this Receive connector, you should set the value of the EnableAuthGSSAPI parameter to $false. Authentication with computers running Microsoft Exchange Server 2003 isn't affected by the value of the EnableAuthGSSAPI parameter. Exchange 2003 servers use the authentication methods advertised in the X-EXPS keyword. The X-EXPS keyword is advertised in the EHLO response of the Receive connector when the AuthMechanism parameter contains ExchangeServer.

Valid values for this parameter are $true or $false. The default value is $false. By default, the EnableAuthGSSAPI parameter is set to $true only on the default Receive connector Client \<Server Name\> that's created only in the Transport service on a Mailbox server.



!!! Exchange Server 2016

The EnableAuthGSSAPI parameter enables or disables Kerberos when Integrated Windows authentication is available on the Receive connector (the AuthMechanism parameter contains the value Integrated). Valid values are:

- $true: Kerberos is enabled. The Extended SMTP keyword AUTH GSSAPI NTLM is advertised in the EHLO response. Clients can use Kerberos or NTLM for Integrated Windows authentication.

- $false: Kerberos is disabled. The Extended SMTP keyword AUTH NTLM is advertised in the EHLO response. Clients can only use NTLM for Integrated Windows authentication.

The Generic Security Services application programming interface (GSSAPI) is an IETF standard for accessing security services.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
!!! Exchange Server 2010, Exchange Server 2013

The Enabled parameter specifies whether to enable the connector. Valid values for this parameter are $true or $false. The default value is $true. Use the Enabled parameter to enable or disable the connector.



!!! Exchange Server 2016

The Enabled parameter specifies whether to enable or disable the Receive connector. Valid values are:

- $true: The Receive connector is enabled. This is the default value.

- $false: The Receive connector is disabled.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnhancedStatusCodesEnabled
!!! Exchange Server 2010, Exchange Server 2013

The EnhancedStatusCodesEnabled parameter specifies whether the ENHANCEDSTATUSCODES EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the EnhancedStatusCodesEnabled parameter is set to $true, the ENHANCEDSTATUSCODES EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the EnhancedStatusCodesEnabled parameter is set to $false, the ENHANCEDSTATUSCODES EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled. The ENHANCEDSTATUSCODES extension provides enhanced error and status information in DSNs sent to remote servers.



!!! Exchange Server 2016

The EnhancedStatusCodesEnabled parameter specifies whether the ENHANCEDSTATUSCODES Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: ENHANCEDSTATUSCODES is enabled and is advertised in the EHLO response. This is the default value.

- $false: ENHANCEDSTATUSCODES is disabled and isn't advertised in the EHLO response.

Enhanced status codes are defined in RFC 2034.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionPolicy
!!! Exchange Server 2010, Exchange Server 2013

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication on this Receive connector. By default, this parameter is set to None. The following are the valid values of this parameter:

- None Extended Protection for Authentication won't be used.

- Allow Extended Protection for Authentication will be used only if the connecting host supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require Extended Protection for Authentication will be required for all incoming connections to this Receive connector. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you are using Integrated Windows authentication.



!!! Exchange Server 2016

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication on the Receive connector.Valid values are:

- None: Extended Protection for Authentication won't be used. This is the default value.

- Allow: Extended Protection for Authentication will be used only if the connecting host supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require: Extended Protection for Authentication will be required for all incoming connections to this Receive connector. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you are using Integrated Windows authentication.



```yaml
Type: None | Allow | Require
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
!!! Exchange Server 2010

The Fqdn parameter specifies the FQDN used as the destination server for connected messaging servers that use the Receive connector to send incoming messages. The value of this parameter is displayed to connected messaging servers whenever a destination server name is required, as in the following examples:

- In the default SMTP banner of the Receive connector

- In the EHLO/HELO response of the Receive connector

- In the most recent Received header field in the incoming message when the message enters the Hub Transport server or Edge Transport server

- During TLS authentication

The default value of the Fqdn parameter is the FQDN of the Hub Transport server or Edge Transport server that contains the Receive connector.

Don't modify the FQDN value on the default Receive connector Default \<Server Name\> that's automatically created on Hub Transport servers. If you have multiple Hub Transport servers in your Exchange organization and you change the FQDN value on the Default \<Server Name\> Receive connector, internal mail flow between Hub Transport servers fails.



!!! Exchange Server 2013

The Fqdn parameter specifies the FQDN used as the destination server for connected messaging servers that use the Receive connector to send incoming messages. The value of this parameter is displayed to connected messaging servers whenever a destination server name is required, as in the following examples:

- In the default SMTP banner of the Receive connector

- In the EHLO/HELO response of the Receive connector

- In the most recent Received header field in the incoming message when the message enters the Transport service on a Mailbox server or an Edge server

- During TLS authentication

The default value of the Fqdn parameter is the FQDN of the Mailbox server or Edge server that contains the Receive connector.

Don't modify the FQDN value on the default Receive connector Default \<Server Name\> that's automatically created on Mailbox servers. If you have multiple Mailbox servers in your Exchange organization and you change the FQDN value on the Default \<Server Name\> Receive connector, internal mail flow between Mailbox servers fails.



!!! Exchange Server 2016

The Fqdn parameter specifies the destination FQDN that's shown to connected messaging servers. This value is used in the following locations:

- In the default SMTP banner of the Receive connector

- In the EHLO/HELO response of the Receive connector

- In the most recent Received header field in the incoming message when the message enters the Transport service on a Mailbox server or an Edge server

- During TLS authentication

The default value is the FQDN of theExchange server that contains the Receive connector (for example edge01.contoso.com). You can specify a different FQDN (for example, mail.contoso.com).

Don't modify this value on the default Receive connector named Default \<Server Name\> on Mailbox servers. If you have multiple Mailbox servers in your organization, internal mail flow between Mailbox servers fails if you change the FQDN value on this Receive connector.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiveCredentialEnabled
The LiveCredentialEnabled parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LongAddressesEnabled
!!! Exchange Server 2010

The LongAddressesEnabled parameter enables the Receive connector to accept long X.400 e-mail addresses. The X.400 e-mail addresses are encapsulated in SMTP e-mail addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method.

When the value of this parameter is $false, the maximum length for a complete SMTP e-mail address is 571 characters.

When the value of this parameter is $true, the following changes are made:

- The XLONGADDR keyword is advertised in the EHLO response of the Receive connector.

- The accepted line length of an SMTP session is increased to 8,000 characters.

- Valid long addresses are accepted by the MAIL FROM and RCPT TO SMTP commands.

Therefore, X.400 e-mail addresses can be up to 1,860 characters long after IMCEA encapsulation.

Valid values for this parameter are $true or $false. The default value is $false. You can only modify this parameter on Receive connectors configured on Hub Transport servers.



!!! Exchange Server 2013

The LongAddressesEnabled parameter enables the Receive connector to accept long X.400 email addresses. The X.400 email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method.

When the value of this parameter is $false, the maximum length for a complete SMTP email address is 571 characters.

When the value of this parameter is $true, the following changes are made:

- The XLONGADDR keyword is advertised in the EHLO response of the Receive connector.

- The accepted line length of an SMTP session is increased to 8,000 characters.

- Valid long addresses are accepted by the MAIL FROM and RCPT TO SMTP commands.

Therefore, X.400 email addresses can be up to 1,860 characters long after IMCEA encapsulation.

Valid values for this parameter are $true or $false. The default value is $false. You can only modify this parameter on Receive connectors configured in the Transport service on a Mailbox server.



!!! Exchange Server 2016

The LongAddressesEnabled parameter specifies whether the Receive connector accepts long X.400 email addresses. The X.400 email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method. Valid values are:

- $true: X.400 email addresses can be up to 1,860 characters long after IMCEA encapsulation.

- $false: The maximum length of a complete SMTP email address is 571 characters. This is the default value.

When you set this parameter to the value $true the following changes are made to the Receive connector:

- The XLONGADDR Extended SMTP extension is enabled and is advertised in the EHLO response.

- The accepted line length of an SMTP session is increased to 8,000 characters.

- Valid long addresses are accepted by the MAIL FROM and RCPT TO SMTP commands.

You can only configure this parameter on Receive connectors in the Transport service on Mailbox servers.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAcknowledgementDelay
!!! Exchange Server 2010

The MaxAcknowledgementDelay parameter specifies the period the transport server delays acknowledgement when receiving messages from a host that doesn't support shadow redundancy. When receiving messages from a host that doesn't support shadow redundancy, a Microsoft Exchange Server 2010 transport server delays issuing an acknowledgement until it verifies that the message has been successfully delivered to all recipients. However, if it takes too long to verify successful delivery, the transport server times out and issues an acknowledgement anyway. The default value is 30 seconds.



!!! Exchange Server 2013

This parameter isn't used by Microsoft Exchange Server 2013. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The MaxAcknowledgementDelay parameter specifies the period the transport server delays acknowledgement when receiving messages from a host that doesn't support shadow redundancy. When receiving messages from a host that doesn't support shadow redundancy, a Microsoft Exchange Server 2010 transport server delays issuing an acknowledgement until it verifies that the message has been successfully delivered to all recipients. However, if it takes too long to verify successful delivery, the transport server times out and issues an acknowledgement anyway. The default value is 30 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.



!!! Exchange Server 2016

This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The MaxAcknowledgementDelay parameter specifies the period the transport server delays acknowledgement when receiving messages from a host that doesn't support shadow redundancy. When receiving messages from a host that doesn't support shadow redundancy, a Microsoft Exchange Server 2010 transport server delays issuing an acknowledgement until it verifies that the message has been successfully delivered to all recipients. However, if it takes too long to verify successful delivery, the transport server times out and issues an acknowledgement anyway. The default value is 30 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.



```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHeaderSize
!!! Exchange Server 2010

The MaxHeaderSize parameter specifies in bytes the maximum size of the SMTP message header that the Receive connector accepts before it closes the connection. The default value is 65536 bytes. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified values are treated as bytes. The valid input range for this parameter is from 1 through 2147483647 bytes.



!!! Exchange Server 2013

The MaxHeaderSize parameter specifies in bytes the maximum size of the SMTP message header that the Receive connector accepts before it closes the connection. The default value is 65536 bytes.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The valid input range for this parameter is from 1 through 2147483647 bytes.



!!! Exchange Server 2016

The MaxHeaderSize parameter specifies the maximum size of the SMTP message header before the Receive connector closes the connection. The default value is 256 kilobytes (262144 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is from 1 to 2147483647 bytes.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHopCount
!!! Exchange Server 2010, Exchange Server 2013

The MaxHopCount parameter specifies the maximum number of hops that a message can take before the message is rejected by the Receive connector. The maximum number of hops is determined by the number of Received headers in a submitted message. The default value is 60. The valid input range for this parameter is from 1 through 500.



!!! Exchange Server 2016

The MaxHopCount parameter specifies the maximum number of hops that a message can take before the message is rejected by the Receive connector. The maximum number of hops is determined by the number of Received header fields that exist in a submitted message.

A valid value is from 1 to 500. The default value is 30.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnection
!!! Exchange Server 2010, Exchange Server 2013

The MaxInboundConnection parameter specifies the maximum number of inbound connections that this Receive connector serves at the same time. The default value is 5000. The valid input range for this parameter is from 1 through 2147483647. To disable the inbound connection limit on a Receive connector, enter a value of unlimited.



!!! Exchange Server 2016

The MaxInboundConnection parameter specifies the maximum number of inbound connections that this Receive connector serves at the same time.

A valid value is from 1 to 2147483647, or the value unlimited. The default value is 5000.

To disable the inbound connection limit on a Receive connector, enter a value of unlimited.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnectionPercentagePerSource
!!! Exchange Server 2010, Exchange Server 2013

The MaxInboundConnectionPercentagePerSource parameter specifies the maximum number of connections that a Receive connector serves at the same time from a single IP address. The value is expressed as the percentage of available remaining connections on a Receive connector. Enter the value as an integer without the percent (%) character. The default value is 2 percent. The valid input range for this parameter is from 1 through 100.



!!! Exchange Server 2016

The MaxInboundConnectionPercentagePerSource parameter specifies the maximum number of connections that a Receive connector serves at the same time from a single IP address, expressed as the percentage of available remaining connections on a Receive connector.

A valid value is from 1 to 100 without the percent sign (%). The default value is 2 percent.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInboundConnectionPerSource
!!! Exchange Server 2010, Exchange Server 2013

The MaxInboundConnectionPerSource parameter specifies the maximum number of inbound connections that this Receive connector serves at the same time from a single IP address. The default value is 20. The valid input range for this parameter is from 1 through 10000. To disable the inbound connection per source limit on a Receive connector, enter a value of unlimited.



!!! Exchange Server 2016

The MaxInboundConnectionPerSource parameter specifies the maximum number of connections that this Receive connector serves at the same time from a single IP address.

A valid value is from 1 to 10000, or the value unlimited. The default value is 20.

To disable the inbound connection per source limit on a Receive connector, enter a value of unlimited.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLocalHopCount
!!! Exchange Server 2010, Exchange Server 2013

The MaxLocalHopCount parameter specifies the maximum number of local hops that a message can take before the message is rejected by the Receive connector. The maximum number of local hops is determined by the number of Received headers that have local server addresses in a submitted message. The default value is 8. The valid input range for this parameter is from 0 through 50. When you specify a value of 0, the message is never rejected based on the number of local hops.



!!! Exchange Server 2016

The MaxLocalHopCount parameter specifies the maximum number of local hops that a message can take before the message is rejected by the Receive connector. The maximum number of local hops is determined by the number of Received headers with local server addresses in a submitted message.

A valid value is from 0 to 50. The default value is 8.

When you specify the value 0, the message is never rejected based on the number of local hops.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogonFailures
!!! Exchange Server 2010, Exchange Server 2013

The MaxLogonFailures parameter specifies the number of logon failures that the Receive connector retries before closing the connection. The default value is 3. The valid input range for this parameter is from 0 through 10.



!!! Exchange Server 2016

The MaxLogonFailures parameter specifies the number of logon failures that the Receive connector retries before it closes the connection.

A valid value is from 0 to 10. The default value is 3.

When you specify the value 0, the connection is never closed because of logon failures.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMessageSize
!!! Exchange Server 2010

The MaxMessageSize parameter specifies the maximum size of a message. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified integers are treated as bytes. The valid input range for this parameter is from 65536 through 2147483647 bytes.



!!! Exchange Server 2013

The MaxMessageSize parameter specifies the maximum size of a message. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The valid input range for this parameter is from 65536 through 2147483647 bytes.



!!! Exchange Server 2016

The MaxMessageSize parameter specifies the maximum size of a message that's allowed through the Receive connector. The default value is 36 MB, which results in a realistic maximum message size of 25 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value for this parameter is from 65536 to 2147483647 bytes.

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxProtocolErrors
!!! Exchange Server 2010, Exchange Server 2013

The MaxProtocolErrors parameter specifies the maximum number of SMTP protocol errors that the Receive connector accepts before closing the connection. The default value is 5. The valid input range for this parameter is from 0 through 2147483647. When you specify a value of unlimited, a connection is never closed because of protocol errors.



!!! Exchange Server 2016

The MaxProtocolErrors parameter specifies the maximum number of SMTP protocol errors that the Receive connector accepts before closing the connection.

A valid value is from 0 to 2147483647, or the value unlimited. The default value is 5.

When you specify the value unlimited, a connection is never closed because of protocol errors.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecipientsPerMessage
!!! Exchange Server 2010, Exchange Server 2013

The MaxRecipientsPerMessage parameter specifies the maximum number of recipients per message that the Receive connector accepts before closing the connection. The default value is 200. The valid input range for this parameter is from 1 through 512000.



!!! Exchange Server 2016

The MaxRecipientsPerMessage parameter specifies the maximum number of recipients per message that the Receive connector accepts before closing the connection.

A valid value is from 1 to 512000. The default value is 200.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRateLimit
!!! Exchange Server 2010

The MessageRateLimit parameter specifies the maximum number of messages that can be sent by a single client IP address per minute. The default value for a Receive connector configured on a Hub Transport server is unlimited. The default value for a Receive connector configured on an Edge Transport server is 600 messages per minute. The valid input range for this parameter is from 1 through 2147483647. To remove the message rate limit on a Receive connector, enter a value of unlimited.



!!! Exchange Server 2013

The MessageRateLimit parameter specifies the maximum number of messages that can be sent by a single client IP address per minute. The default value for a Receive connector configured in the Transport service on a Mailbox server is unlimited. The default value for a Receive connector configured on an Edge server is 600 messages per minute. The valid input range for this parameter is 1 to 2147483647. To remove the message rate limit on a Receive connector, enter a value of unlimited.



!!! Exchange Server 2016

The MessageRateLimit parameter specifies the maximum number of messages that can be sent by a single client IP address per minute.

A valid value is from 1 to 2147483647, or the value unlimited.

To remove the message rate limit on a Receive connector, enter a value of unlimited.

The default value for Receive connectors on Mailbox servers is unlimited. The default value for Receive connectors on an Edge Transport servers is 600.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRateSource
!!! Exchange Server 2010, Exchange Server 2013

The MessageRateSource parameter specifies how the message submission rate is calculated. It can have one of the following values:

- None No message submission rate is calculated.

- IPAddress The message submission rate is calculated for sending hosts.

- User The message submission rate is calculated for sending users (specified with the MAIL FROM SMTP command).

- All The message submission rate is calculated for both the sending users and sending hosts.



!!! Exchange Server 2016

The MessageRateSource parameter specifies how the message submission rate is calculated. Valid values are:

- None: No message submission rate is calculated.

- IPAddress: The message submission rate is calculated for sending hosts.

- User: The message submission rate is calculated for sending users (specified with the MAIL FROM SMTP command).

- All: The message submission rate is calculated for both the sending users and sending hosts.



```yaml
Type: None | IPAddress | User | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies the administrator-supplied name of the connector. Enter the Name parameter as a string, for example: New Receive Connector.



!!! Exchange Server 2016

The Name parameter specifies the unique name for the Receive connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrarEnabled
!!! Exchange Server 2010

The OrarEnabled parameter specifies whether to enable the Originator Requested Alternate Recipient (ORAR). When the value of this parameter is $false, ORAR isn't supported. When the value of this parameter is $true, ORAR is supported by advertising the XORAR keyword in the EHLO response of the Receive connector. The actual ORAR information is transmitted in the RCPT TO SMTP command.

Valid values for this parameter are $true or $false. The default value is $false. If the e-mail address specified in the ORAR information is a long X.400 e-mail address, the LongAddressesEnabled parameter must be $true.



!!! Exchange Server 2013

The OrarEnabled parameter specifies whether to enable the Originator Requested Alternate Recipient (ORAR). When the value of this parameter is $false, ORAR isn't supported. When the value of this parameter is $true, ORAR is supported by advertising the XORAR keyword in the EHLO response of the Receive connector. The actual ORAR information is transmitted in the RCPT TO SMTP command.

Valid values for this parameter are $true or $false. The default value is $false. If the email address specified in the ORAR information is a long X.400 email address, the LongAddressesEnabled parameter must be $true.



!!! Exchange Server 2016

The OrarEnabled parameter enables or disables Originator Requested Alternate Recipient (ORAR) on the Receive connector. Valid values are:

- $true: ORAR is enabled and is advertised in the XORAR keyword in the EHLO response. The actual ORAR information is transmitted in the RCPT TO SMTP command.

- $false: ORAR is disabled and is isn't advertised in the EHLO response. This is the default value.

If the email address specified in the ORAR information is a long X.400 email address, you need to set the LongAddressesEnabled parameter to the value $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionGroups
!!! Exchange Server 2010

The PermissionGroups parameter specifies the groups or roles that can submit messages to the Receive connector and the permissions assigned to those groups. A permission group is a predefined set of permissions granted to well-known security principals. The valid values for this parameter are as follows: None, AnonymousUsers, Custom, ExchangeUsers, ExchangeServers, ExchangeLegacyServers, and Partners. The default permission groups assigned to a Receive connector depend on the connector usage type specified by the Usage parameter when the Receive connector was created. For more information about Receive connector usage types, see Understanding Receive Connectors.



!!! Exchange Server 2013

The PermissionGroups parameter specifies the groups or roles that can submit messages to the Receive connector and the permissions assigned to those groups. A permission group is a predefined set of permissions granted to well-known security principals. The valid values for this parameter are as follows: None, AnonymousUsers, Custom, ExchangeUsers, ExchangeServers, ExchangeLegacyServers, and Partners. The default permission groups assigned to a Receive connector depend on the connector usage type specified by the Usage parameter when the Receive connector was created. For more information about Receive connector usage types, see Receive connectors.



!!! Exchange Server 2016

The PermissionGroups parameter specifies the well-known security principals who are authorized to use the Receive connector, and the permissions that are assigned to them. Valid values are:

- None

- AnonymousUsers

- ExchangeUsers

- ExchangeServers

- ExchangeLegacyServers

- Partners

- Custom

The default permission groups that are assigned to a Receive connector depend on the connector usage type parameter that was used when the connector was created (Client, Internal, Internet, Partner, or Usage).

When you use the value Custom, you need to configure individual permissions by using the Add-ADPermission cmdlet.

For more information about the default permissions and security principals for permission groups, see .



```yaml
Type: None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipeliningEnabled
!!! Exchange Server 2010, Exchange Server 2013

The PipeliningEnabled parameter specifies whether the PIPELINING EHLO keyword is advertised in the EHLO response to the remote server and is available for use. Valid values for this parameter are $true or $false. The default value is $true. When the PipeliningEnabled parameter is set to $true, the PIPELINING EHLO keyword is advertised in the EHLO response to the remote server and is available for use. When the PipeliningEnabled parameter is set to $false, the PIPELINING EHLO keyword isn't advertised in the EHLO response to the remote server and is disabled. The PIPELINING extension enables the remote server to send requests without awaiting a response from this Receive connector.



!!! Exchange Server 2016

The PipeliningEnabled parameter specifies whether the PIPELINING Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: PIPELINING is enabled and is advertised in the EHLO response. This is the default value.

- $false: PIPELINING is disabled and isn't advertised in the EHLO response.

Pipelining is defined in RFC 2920.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProtocolLoggingLevel
!!! Exchange Server 2010

The ProtocolLoggingLevel parameter specifies whether to enable protocol logging for the specified Receive connector. A value of Verbose enables protocol logging for the connector. A value of None disables protocol logging for the connector. The default value is None. The location of the Receive connector protocol logs for all Receive connectors configured on a Hub Transport server or an Edge Transport server is specified by using the Set-TransportServer cmdlet with the ReceiveProtocolLogPath parameter.



!!! Exchange Server 2013

The ProtocolLoggingLevel parameter specifies whether to enable protocol logging for the specified Receive connector. A value of Verbose enables protocol logging for the connector. A value of None disables protocol logging for the connector. The default value is None. The location of the Receive connector protocol logs for all Receive connectors configured in the Transport service on a Mailbox server or an Edge server is specified by using the Set-TransportService cmdlet with the ReceiveProtocolLogPath parameter.



!!! Exchange Server 2016

The ProtocolLoggingLevel parameter specifies whether to enable or disable protocol logging for the Receive connector. Valid values are:

- None: Protocol logging is disabled on the Receive connector. This is the default value.

- Verbose: Protocol logging is enabled on the Receive connector.

For more information about protocol logging, see Protocol logging.



```yaml
Type: None | Verbose
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteIPRanges
!!! Exchange Server 2010

The RemoteIPRanges parameter specifies the remote IP addresses from which this connector accepts messages. Valid syntax for this parameter is \<Starting IP Address\>-\<Ending IP Address\>, such as 192.168.1.1-192.168.1.10. You can specify multiple IP address ranges separated by commas.

Multiple Receive connectors on the same server can have overlapping remote IP address ranges as long as one IP address range is completely overlapped by another IP address range. When remote IP address ranges overlap, the remote IP address range with the most specific match to the IP address of the connecting server is used.



!!! Exchange Server 2013

The RemoteIPRanges parameter specifies the remote IP addresses from which this connector accepts messages. Valid syntax for this parameter is \<Starting IP Address\>-\<Ending IP Address\>, such as 192.168.1.1-192.168.1.10.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

Multiple Receive connectors on the same server can have overlapping remote IP address ranges as long as one IP address range is completely overlapped by another IP address range. When remote IP address ranges overlap, the remote IP address range with the most specific match to the IP address of the connecting server is used.



!!! Exchange Server 2016

The RemoteIPRanges parameter specifies the remote IP addresses that the Receive connector accepts messages from. Valid values are:

- Single IP address: For example, 192.168.1.1 or fe80::39bd:88f7:6969:d223%11 .

- IP address range: For example, 192.168.1.1-192.168.1.254.

- Classless Inter-Domain Routing (CIDR) IP: For example, 192.168.1.1/24 or 2001:0DB8::CD3/60.

You can specify multiple value separated by commas ("\<value1\>","\<value2\>"...).

Multiple Receive connectors on the same server can have overlapping remote IP address ranges as long as one IP address range is completely overlapped by another. For example, you can configure the following remote IP address ranges on different Receive connectors on the same server:

- 0.0.0.0

- 192.168.1.1/24

- 192.168.1.10

When remote IP address ranges overlap, the Receive connector with the most specific match to the IP address of the connecting server is used.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEHLODomain
!!! Exchange Server 2010, Exchange Server 2013

The RequireEHLODomain parameter specifies whether the remote computer must provide a domain name in the EHLO handshake after the SMTP connection is established. Valid values for this parameter are $true or $false. The default value is $false. When the RequireEHLODomain parameter is set to $true, the remote computer must provide a domain name in the EHLO handshake after the SMTP connection is established. If the remote computer doesn't provide the domain name, the SMTP connection is closed.



!!! Exchange Server 2016

The RequireEHLODomain parameter specifies whether the client must provide a domain name in the EHLO handshake after the SMTP connection is established. Valid values are:

- $true: The client must provide a domain name in the EHLO handshake. If it doesn't, the SMTP connection is closed.

- $false: The client isn't required to provide a domain name in the EHLO handshake. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireTLS
!!! Exchange Server 2010, Exchange Server 2013

The RequireTLS parameter specifies whether all messages received by this connector require TLS transmission. Valid values for thisparameter are $true or $false. The default value is $false. When the RequireTLS parameter is set to $true, all messages received by this connector require TLS transmission.



!!! Exchange Server 2016

The RequireTLS parameter specifies whether to require TLS transmission for inbound messages on the Receive connector. Valid values are:

- $true: Inbound messages on the Receive connector require TLS transmission.

- $false: Inbound messages on the Receive connector don't require TLS transmission. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SizeEnabled
!!! Exchange Server 2010

The SizeEnabled parameter specifies whether the SIZE SMTP extension is enabled. Valid values for this parameter are Enabled, Disabled, or EnabledwithoutValue. The default value is Enabled. When the SizeEnabled parameter is set to Enabled, the SIZE SMTP extension is enabled, and the maximum allowable message size value from the MaxMessageSize parameter is advertised in the EHLO banner. When the SizeEnabled parameter is set to Disabled, the SIZE SMTP extension isn't used, and the maximum allowable message size value is never disclosed to the remote server. When the SizeEnabled parameter is set to EnabledWithoutValue, the SIZE SMTP extension is enabled, but the maximum allowable message size value from the MaxMessageSize parameter isn't advertised in the EHLO banner. This allows the message to bypass message size checks for authenticated connections between Hub Transport servers. The SIZE SMTP extension is defined in RFC 1870. SIZE enables the source server to declare the size of the inbound message to the target server. It also allows the target server to declare the maximum message size that it's allowed to accept to the sending server. If the advertised size of the inbound message exceeds the value in the MaxMessageSize parameter, the Receive connector responds to the remote server by using an error code and closes the connection.



!!! Exchange Server 2013

The SizeEnabled parameter specifies whether the SIZE SMTP extension is enabled. Valid values for this parameter are Enabled, Disabled, or EnabledwithoutValue. The default value is Enabled. When the SizeEnabled parameter is set to Enabled, the SIZE SMTP extension is enabled, and the maximum allowable message size value from the MaxMessageSize parameter is advertised in the EHLO banner. When the SizeEnabled parameter is set to Disabled, the SIZE SMTP extension isn't used, and the maximum allowable message size value is never disclosed to the remote server. When the SizeEnabled parameter is set to EnabledWithoutValue, the SIZE SMTP extension is enabled, but the maximum allowable message size value from the MaxMessageSize parameter isn't advertised in the EHLO banner. This allows the message to bypass message size checks for authenticated connections between Mailbox servers. The SIZE SMTP extension is defined in RFC 1870. SIZE enables the source server to declare the size of the inbound message to the target server. It also allows the target server to declare the maximum message size that it's allowed to accept to the sending server. If the advertised size of the inbound message exceeds the value in the MaxMessageSize parameter, the Receive connector responds to the remote server by using an error code and closes the connection.



!!! Exchange Server 2016

The SizeEnabled parameter specifies how the SIZE Extended SMTP extension is used on the Receive connector. Valid values are:

- Enabled: SIZE is enabled and is advertised in the EHLO response along with the value of the MaxMessageSize parameter. If the size of the inbound message exceeds the specified value, the Receive connector closes the connection with an error code. This is the default value.

- Disabled: SIZE is disabled and isn't advertised in the EHLO response.

- EnabledwithoutValue: SIZE is enabled and is advertised in the EHLO response, but the value of the MaxMessageSize parameter isn't disclosed in the EHLO response. This setting allows messages to bypass message size checks for authenticated connections between Mailbox servers.

SIZE is defined in RFC 1870.



```yaml
Type: Disabled | Enabled | EnabledWithoutValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressXAnonymousTls
!!! Exchange Server 2010

The SuppressXAnonymousTls parameter specifies whether this Receive connector supports the standard TLS encryption for incoming connections. By default, all communications between Exchange 2010 Hub Transport servers is protected with TLS. However, if you need to disable TLS on a specific connection in your organization, you can create a specific Receive connector and set the SuppressXAnonymousTls parameter to $true. The default value is $false.

Before you can set this parameter to $true, you must use the Set-TransportServer command to set the UseDownGradedExchangeServerAuth parameter to $true on the server that this Receive connector is configured on.



!!! Exchange Server 2013

The SuppressXAnonymousTls parameter specifies whether this Receive connector supports the standard TLS encryption for incoming connections. By default, all communications between Exchange 2010 Mailbox servers is protected with TLS. However, if you need to disable TLS on a specific connection in your organization, you can create a specific Receive connector and set the SuppressXAnonymousTls parameter to $true. The default value is $false.

Before you can set this parameter to $true, you must use the Set-TransportService command to set the UseDownGradedExchangeServerAuth parameter to $true on the server that this Receive connector is configured on.



!!! Exchange Server 2016

The SuppressXAnonymousTls parameter specifies whether the X-ANONYMOUSTLS Extended SMTP extension is enabled or disabled on the Receive connector. Valid values are:

- $true: X-ANONYMOUSTLS is disabled and isn't advertised in the EHLO response. This setting also requires that you set the UseDownGradedExchangeServerAuth parameter to the value $true on the Set-TransportService cmdlet on the server.

- $false: X-ANONYMOUSTLS is enabled and is advertised in the EHLO response. This is the default value.

The X-ANONYMOUSTLS extension is important when the AuthMechanism parameter contains the value ExchangeServer.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TarpitInterval
!!! Exchange Server 2010

The TarpitInterval parameter specifies the period of time to delay an SMTP response to a remote server that Exchange determines may be abusing the connection. Authenticated connections are never delayed in this manner. The default value is 5 seconds. To specify a value, enter the value as a time span: hh:mm:ss, where h = hours, m = minutes, and s = seconds. The valid input range for this parameter is from 00:00:00 through 00:10:00. When you set the value to 00:00:00, you disable the tarpitting interval.



!!! Exchange Server 2013

The TarpitInterval parameter specifies the period of time to delay an SMTP response to a remote server that may be abusing the connection. Authenticated connections are never delayed in this manner. The default value is 5 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

The valid input range for this parameter is from 00:00:00 through 00:10:00. When you set the value to 00:00:00, you disable the tarpit interval.



!!! Exchange Server 2016

The TarpitInterval parameter specifies the period of time to delay an SMTP response to a remote server that may be abusing the connection. The default value is 00:00:05 (5 seconds).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you set the value to 00:00:00, you disable the tarpit interval. Setting this value to more than a few seconds can cause timeouts and mail flow issues.

You can configure the delay for authentication failure responses by using the AuthTarpitInterval parameter.



```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsDomainCapabilities
!!! Exchange Server 2010, Exchange Server 2013

The TlsDomainCapabilities parameter specifies the different capabilities this Receive connector will make available to specific hosts outside your organization. TLS with certificate validation is used to authenticate remote hosts before these capabilities are offered.

To specify capabilities for a domain, use the following syntax:

\<domain name 1\>:\<capability 1, capability 2,…,capability N\>

If you're specifying capabilities for multiple domains, list the configuration for each domain in quotation marks, separated by commas. For example:

"contoso.com:AcceptOorgProtocol","fabrikam.com:AcceptOorgProtocol,AcceptOorgHeader"

You can configure the capabilities for non-TLS encrypted incoming connections using the special "NO-TLS" domain.

You can configure the following capabilities for a domain:

- AcceptOorgProtocol

- AcceptOorgHeader



!!! Exchange Server 2016

The TlsDomainCapabilities parameter specifies the capabilities that the Receive connector makes available to specific hosts outside of the organization. Remote hosts are authenticated with TLS with certificate validation before these capabilities are offered.

This parameter uses the following syntax:

"\<domain1\>:\<capability1\>,\<capability 2\>\>"...,"\<domain2\>:\<capability1\>,\<capability2\>..."...

The available \<capability\> values are:

- AcceptOorgProtocol

- AcceptOorgHeader

The available \<domainy\> values are an SMTP domain (for example, contoso.com), or the value NO-TLS for non-TLS encrypted inbound connections.

For example, "contoso.com:AcceptOorgProtocol","fabrikam.com:AcceptOorgProtocol,AcceptOorgHeader"



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceDiscoveryFqdn
!!! Exchange Server 2013

The service discovery fully-qualified domain name (FQDN).



!!! Exchange Server 2016

The ServiceDiscoveryFqdn parameter specifies the service discovery fully-qualified domain name (FQDN). for the Receive connector.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpUtf8Enabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsCertificateName
!!! Exchange Server 2013

The TlsCertificateName parameter specifies the X.509 certificate to use with TLS sessions and secure mail. Valid input for this parameter is [I]Issuer[S]Subject. The Issuer value is found in the certificate's Issuer field, and the Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet.



!!! Exchange Server 2016

The TlsCertificateName parameter specifies the X.509 certificate to use for TLS encryption. A valid value for this parameter is "\<I\>X.500Issuer\<S\>X.500Subject". The X.500Issuer value is found in the certificate's Issuer field, and the X.500Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet. Or, after you run Get-ExchangeCertificate to find the thumbprint value of the certificate, run the command $TLSCert = Get-ExchangeCertificate -Thumbprint \<Thumbprint\>, run the command $TLSCertName = "\<I\>$($TLSCert.Issuer)\<S\>$($TLSCert.Subject)", and then use the value $TLSCertName for this parameter.



```yaml
Type: SmtpX509Identifier
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRole
!!! Exchange Server 2013

The TransportRole parameter designates the server role associated with this connector. Types include FrontendTransport and HubTransport. Typically used to specify the server role when you host multiple server roles on a single computer.



!!! Exchange Server 2016

The TransportRole parameter specifies the transport service on the Mailbox server where the Receive connector is created.. Valid values are:

- FrontendTransport: The Front End Transport service where client or external SMTP connections occur.

- HubTransport: The Transport service where Exchange server and proxied client SMTP connections occur.

You can't use this parameter on Edge Transport servers.



```yaml
Type: None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthTarpitInterval
The AuthTarpitInterval parameter specifies the period of time to delay responses to failed authentication attempts from remote servers that may be abusing the connection. The default value is 5 seconds.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you set the value to 00:00:00, you disable the authentication tarpit interval. Setting the value to more than a few seconds can cause timeouts and mail flow issues.

You can configure the delay for other SMTP failure responses by using the TarpitInterval parameter.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectReservedSecondLevelRecipientDomains
The RejectReservedSecondLevelRecipientDomains parameter specifies whether to reject connections that contain recipients in reserved second-level domains as specified in RFC 2606 (example.com, example.net, or example.org). Valid value are:

- $true: RCPT TO commands that contain reserved second-level domains are rejected.

- $false: RCPT TO commands that contain reserved second-level domains aren't rejected. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectReservedTopLevelRecipientDomains
The RejectReservedTopLevelRecipientDomains parameter specifies whether to reject connections that contain recipients in reserved top-level domains (TLDs) as specified in RFC 2606 (.test, .example, .invalid, or .localhost). Valid value are:

- $true: RCPT TO commands that contain reserved TLDs are rejected.

- $false: RCPT TO commands that contain reserved TLDs aren't rejected. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectSingleLabelRecipientDomains
The RejectSingleLabelRecipientDomains parameter specifies whether to reject connections that contain recipients in single-label domains (for example, chris@contoso instead of chris@contoso.com). Valid values are:

- $true: RCPT TO commands that contain single-label domains are rejected.

- $false: RCPT TO commands that contain single-label domains aren't rejected. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/eb7f8960-e772-4312-9d3f-47dd27d9545c.aspx)

