---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-ReceiveConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-ReceiveConnector cmdlet to create Receive connectors on Mailbox servers and Edge Transport servers. Receive connectors listen for inbound SMTP connections on the Exchange server.

## SYNTAX

### Set1
```
New-ReceiveConnector [-Name] <String> -Bindings <MultiValuedProperty> -RemoteIPRanges <MultiValuedProperty>
 [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-Custom] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

### Set2
```
New-ReceiveConnector [-Name] <String> -Bindings <MultiValuedProperty> [-Internet]
 [-RemoteIPRanges <MultiValuedProperty>] [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

### Set5
```
New-ReceiveConnector [-Name] <String> -Bindings <MultiValuedProperty> [-Partner]
 -RemoteIPRanges <MultiValuedProperty> [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

### Set3
```
New-ReceiveConnector [-Name] <String> [-Bindings <MultiValuedProperty>] [-Internal]
 -RemoteIPRanges <MultiValuedProperty> [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

### Set4
```
New-ReceiveConnector [-Name] <String> [-Bindings <MultiValuedProperty>] [-Client]
 -RemoteIPRanges <MultiValuedProperty> [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

### Set6
```
New-ReceiveConnector [-Name] <String> [-Bindings <MultiValuedProperty>] [-RemoteIPRanges <MultiValuedProperty>]
 -Usage <Custom | Internet | Internal | Client | Partner> [-AdvertiseClientSettings <$true | $false>]
 [-AuthMechanism <None | Tls | Integrated | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-Banner <String>] [-BinaryMimeEnabled <$true | $false>] [-ChunkingEnabled <$true | $false>]
 [-Comment <String>] [-Confirm] [-ConnectionInactivityTimeout <EnhancedTimeSpan>]
 [-ConnectionTimeout <EnhancedTimeSpan>] [-DefaultDomain <AcceptedDomainIdParameter>]
 [-DeliveryStatusNotificationEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-DomainSecureEnabled <$true | $false>] [-EightBitMimeEnabled <$true | $false>]
 [-EnableAuthGSSAPI <$true | $false>] [-Enabled <$true | $false>]
 [-EnhancedStatusCodesEnabled <$true | $false>] [-ExtendedProtectionPolicy <None | Allow | Require>]
 [-Fqdn <Fqdn>] [-LongAddressesEnabled <$true | $false>]
 [-MaxAcknowledgementDelay <EnhancedTimeSpan>] [-MaxHeaderSize <ByteQuantifiedSize>] [-MaxHopCount <Int32>]
 [-MaxInboundConnection <Unlimited>] [-MaxInboundConnectionPercentagePerSource <Int32>]
 [-MaxInboundConnectionPerSource <Unlimited>] [-MaxLocalHopCount <Int32>] [-MaxLogonFailures <Int32>]
 [-MaxMessageSize <ByteQuantifiedSize>] [-MaxProtocolErrors <Unlimited>] [-MaxRecipientsPerMessage <Int32>]
 [-MessageRateLimit <Unlimited>] [-MessageRateSource <None | IPAddress | User | All>]
 [-OrarEnabled <$true | $false>]
 [-PermissionGroups <None | AnonymousUsers | ExchangeUsers | ExchangeServers | ExchangeLegacyServers | Partners | Custom>]
 [-PipeliningEnabled <$true | $false>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireEHLODomain <$true | $false>] [-RequireTLS <$true | $false>] [-Server <ServerIdParameter>]
 [-SizeEnabled <Disabled | Enabled | EnabledWithoutValue>] [-SuppressXAnonymousTls <$true | $false>]
 [-TarpitInterval <EnhancedTimeSpan>] [-TlsDomainCapabilities <MultiValuedProperty>] [-WhatIf]
 [-ServiceDiscoveryFqdn <Fqdn>] [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportRole <None | Cafe | Mailbox | ClientAccess | UnifiedMessaging | HubTransport | Edge | All | Monitoring | CentralAdmin | CentralAdminDatabase | DomainController | WindowsDeploymentServer | ProvisionedServer | LanguagePacks | FrontendTransport | CafeArray | FfoWebService | OSP | ARR | ManagementFrontEnd | ManagementBackEnd | SCOM | CentralAdminFrontEnd | NAT | DHCP>]
 [-AuthTarpitInterval <EnhancedTimeSpan>] [-RejectReservedSecondLevelRecipientDomains <$true | $false>]
 [-RejectReservedTopLevelRecipientDomains <$true | $false>]
 [-RejectSingleLabelRecipientDomains <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
On Mailbox servers, you can create Receive connectors in the Front End Transport service, and the Transport (Hub) service. On Edge Transport servers, you can create Receive connectors in the Transport service.

For more information about Receive connector usage types, permission groups, and authentication methods, see Receive connectors.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-ReceiveConnector -Name Test -Usage Custom -Bindings 10.10.1.1:25 -RemoteIPRanges 192.168.0.1-192.168.0.24
```

This example creates the custom Receive connector Test with the following properties:

It listens for incoming SMTP connections on the IP address 10.10.1.1 and port 25.

It accepts incoming SMTP connections only from the IP range 192.168.0.1-192.168.0.24

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the Receive connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Bindings
The Bindings parameter specifies the local IP address and TCP port number that's used by the Receive connector. This parameter uses the syntax "\<IPv4 Address\>:\<TCP Port\>","\<IPv6 Address\>:\<TCP Port\>". You can specify an IPv4 address and port, and IPv6 address and port, or both. The IP address values 0.0.0.0 or [::]: indicate that the Receive connector uses all available local IPv4 or all IPv6 addresses.

You need to specify a valid local IP address from the network adapters of the Exchange server. If you specify an invalid local IP address, the Microsoft Exchange Transport service might fail to start when the service is restarted.

You need to use this parameter when you use these usage type parameters:

- The Internet switch (or the Usage parameter with the value Internet).

- The Partner switch (or the Usage parameter with the value Partner).

- The Custom switch (or the Usage parameter with the value Custom).

You can't use this parameter when you use the following usage type parameters:

- The Client switch (or the Usage parameter with the value Client. The default value is 0.0.0.0:587.

- The Internal switch (or Usage parameter with the value Internal). The default value is 0.0.0.0:25.

The values for this parameter must satisfy one of the following uniqueness requirements:

- The combination of IP address and TCP port doesn't conflict with the IP address and TCP port that's used on another Receive connector on the server.

- You use an existing combination of IP address and TCP port that's configured on another Receive connector on the server, but you restrict the remote IP addresses by using the RemoteIPRanges parameter. When you create a Receive connector, you can only use the RemoteIPRanges and Bindings parameters together with the Custom and Partner switches (or the Usage parameter with the value Custom or Partner).

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1, Set2, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MultiValuedProperty
Parameter Sets: Set3, Set4, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Client
The Client switch specifies the Client usage type for the Receive connector. You don't need to specify a value with this switch.

This usage type assigns the following default permission groups and authentication methods:

- Permission groups:ExchangeUsers

- Authentication methods:TLS, BasicAuth, BasicAuthRequireTLS, and Integrated.

When you use this switch, you also need to use the RemoteIPRanges parameter, and you can't use the Bindings parameter (the default value is 0.0.0.0:587).

You can't use this switch with any other usage type parameters (Internal, Internet, Partner, Custom, or Usage).

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Internal
The Internal switch specifies the Internal usage type for the Receive connector. You don't need to specify a value with this switch.

This usage type assigns the following default permission groups and authentication methods:

- Permission groups:ExchangeLegacyServers and ExchangeServers.

- Authentication methods:TLS and ExchangeServers.

When you use this switch, you also need to use the RemoteIPRanges parameter, and you can't use the Bindings parameter (the default value is 0.0.0.0:25).

You can't use this switch with any other usage type parameters (Client, Internet, Partner, Custom, or Usage).

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Internet
The Internet switch specifies the Internet usage type for the Receive connector. You don't need to specify a value with this switch.

This usage type assigns the following default permission groups and authentication methods:

- Permission groups:AnonymousUsers

- Authentication methods:TLS

When you use this switch, you also need to use the Bindings parameter, and you can't use the RemoteIPRanges parameter (the default value is 0.0.0.0-255.255.255.255).

You can't use this switch with any other usage type parameters (Client, Internal, Partner, Custom, or Usage).

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partner
The Partner switch specifies the Partner usage type for the Receive connector. You don't need to specify a value with this switch.

This usage type assigns the following default permission groups and authentication methods:

- Permission groups:Partners

- Authentication methods:TLS

When you use this switch, you also need to use the Bindings and RemoteIPRanges parameters.

You can't use this switch with any other usage type parameters (Client, Internal, Internet, Custom, or Usage).

```yaml
Type: SwitchParameter
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteIPRanges
The RemoteIPRanges parameter specifies the remote IP addresses that the Receive connector accepts messages from. Valid values are:

- Single IP address: For example, 192.168.1.1 or fe80::39bd:88f7:6969:d223%11.

- IP address range: For example, 192.168.1.1-192.168.1.254.

- Classless Inter-Domain Routing (CIDR) IP: For example, 192.168.1.1/24 or 2001:0DB8::CD3/60.

You can specify multiple value separated by commas ("\<value1\>","\<value2\>"...).

Multiple Receive connectors on the same server can have overlapping remote IP address ranges as long as one IP address range is completely overlapped by another. For example, you can configure the following remote IP address ranges on different Receive connectors on the same server:

- 0.0.0.0

- 192.168.1.1/24

- 192.168.1.10

When remote IP address ranges overlap, the Receive connector with the most specific match to the IP address of the connecting server is used.

You need to use this parameter with the following usage type parameters:

- The Client switch (or the Usage parameter with the value Client).

- The Internal switch (or the Usage parameter with the value Internal).

- The Partner switch (or the Usage parameter with the value Partner).

- The Custom switch (or the Usage parameter with the value Custom).

You can't use this parameter with the Internet usage type (the default value is 0.0.0.0-255.255.255.255).

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1, Set5, Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MultiValuedProperty
Parameter Sets: Set2, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Usage
The Usage parameter specifies the default permission groups and authentication methods that are assigned to the Receive connector. Valid values are:

- Client

- Custom

- Internal

- Internet

- Partner

The following values for this parameter also require the Bindings parameter:

- Internet

- Partner

- Custom

The following values for this parameter also require the RemoteIPRanges parameter:

- Client

- Internal

- Partner

- Custom

For a description of the default permission groups and authentication methods that are assigned for each value, see the corresponding usage type switch descriptions.

You can't use this parameter with any other usage type switches (Client, Internal, Internet, Custom, or Partner).

```yaml
Type: Custom | Internet | Internal | Client | Partner
Parameter Sets: Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdvertiseClientSettings
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

- The value ExternalAuthoritative requires you to set the value of the PermissionGroups parameter to ExchangeServers.

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

### -BinaryMimeEnabled
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

### -ChunkingEnabled
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

### -Custom
The Custom switch specifies the Custom usage type for the Receive connector. You don't need to specify a value with this switch.

This usage type assigns the following default permission groups and authentication methods:

- Permission groups:None

- Authentication methods:TLS

When you use this switch, you also need to use the Bindings and RemoteIPRanges parameters.

If you don't also use the PermissionGroups parameter to assign at least one permission group, you'll need to use the PermissionGroups parameter on the Set-ReceiveConnector cmdlet after you create the Receive connector (otherwise, the Receive connector can't accept inbound SMTP connections).

You can't use this switch with any other usage type parameters (Client, Internal, Internet, Partner, or Usage).

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain
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
The ExtendedProtectionPolicy parameter specifies how Extended Protection for Authentication is implemented on the Receive connector. Valid values are:

- None: Extended Protection for Authentication isn't used. This is the default value.

- Allow: Extended Protection for Authentication is used only if the connecting host supports it. Otherwise, connections are established without Extended Protection for Authentication.

- Require: Extended Protection for Authentication is required for all incoming connections to this Receive connector. If the connecting host doesn't support Extended Protection for Authentication, the connection is rejected.

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
The Fqdn parameter specifies the destination FQDN that's shown to connected messaging servers. This value is used in the following locations:

- In the default SMTP banner of the Receive connector.

- In the EHLO/HELO response of the Receive connector.

- In the most recent Received header field in the incoming message when.

- During TLS authentication.

The default value is the FQDN of theExchange server that contains the Receive connector (for example edge01.contoso.com). You can specify a different FQDN (for example, mail.contoso.com).

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

### -LongAddressesEnabled
The LongAddressesEnabled parameter specifies whether the Receive connector accepts long X.400 email addresses. The X.400 email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method. Valid values are

- $true: X.400 email addresses can be up to 1,860 characters long after IMCEA encapsulation.

- $false: The maximum length of a complete SMTP email address is 571 characters. This is the default value.

When you set this parameter to the value $true, the following changes are made to the Receive connector:

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
This parameter isn't used by Microsoft Exchange Server 2016. It's only used by Microsoft Exchange 2010 servers in a coexistence environment.

The MaxAcknowledgementDelay parameter specifies the maximum period the transport server delays acknowledgement until it verifies that the message has been successfully delivered to all recipients. When receiving messages from a host that doesn't support shadow redundancy, an Exchange Server 2010 transport server will delay issuing an acknowledgement until it verifies that the message has been successfully delivered to all recipients. However, if it takes too long to verify successful delivery, the transport server will time out and issue an acknowledgement anyway.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 30 seconds.

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
The MessageRateSource parameter specifies how the message submission rate is calculated. Valid values are:

- None: The message submission rate isn't calculated.

- User: The message submission rate is calculated for sending users (specified with the MAIL FROM SMTP command).

- IPAddress: The message submission rate is calculated for sending hosts.

- All: The message submission rate is calculated for both sending users and sending hosts.

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

### -OrarEnabled
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

For more information about the default permissions and security principals for permission groups, see https://technet.microsoft.com/library/17751a60-39fe-433f-84d2-bfc14ff4ba51#PermissionGroups.

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

### -RequireEHLODomain
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

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SizeEnabled
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
The TarpitInterval parameter specifies the amount of time to delay an SMTP response to a remote server that may be abusing the connection. The default value is 00:00:05 (5 seconds.).

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
The ServiceDiscoveryFqdn parameter specifies the service discovery fully-qualified domain name (FQDN) for the Receive connector.

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

### -TlsCertificateName
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
The TransportRole parameter specifies the transport service on the Mailbox server where the Receive connector is created.. Valid values are:

- FrontendTransport: The Front End Transport service where client or external SMTP connections occur.

- HubTransport: The Transport service where Exchange server and proxied client SMTP connections occur.

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

[Online Version](https://technet.microsoft.com/library/eb527447-ed68-4a55-943b-aad8c8a94d01.aspx)
