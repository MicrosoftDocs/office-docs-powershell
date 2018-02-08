---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-SendConnector

## SYNOPSIS
!!! Exchange Server 2010

Use the New-SendConnector cmdlet to create a new Send connector on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the New-SendConnector cmdlet to create a new Send connector.

## SYNTAX

### Set1
```
New-SendConnector [-Name] <String> -AddressSpaces <MultiValuedProperty>
 [-AuthenticationCredential <PSCredential>] [-Comment <String>] [-Confirm]
 [-ConnectionInactivityTimeOut <EnhancedTimeSpan>] [-Custom] [-DNSRoutingEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-DomainSecureEnabled <$true | $false>] [-Enabled <$true | $false>]
 [-ErrorPolicies <Default | DowngradeAuthFailures | DowngradeDnsFailures>] [-Force]
 [-ForceHELO <$true | $false>] [-Fqdn <Fqdn>] [-IgnoreSTARTTLS <$true | $false>] [-Internal] [-Internet]
 [-IsCoexistenceConnector <$true | $false>] [-IsScopedConnector <$true | $false>] [-MaxMessageSize <Unlimited>]
 [-Partner] [-Port <Int32>] [-ProtocolLoggingLevel <None | Verbose>] [-RequireOorg <$true | $false>]
 [-RequireTLS <$true | $false>]
 [-SmartHostAuthMechanism <None | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-SmartHosts <MultiValuedProperty>] [-SmtpMaxMessagesPerConnection <Int32>] [-SourceIPAddress <IPAddress>]
 [-SourceTransportServers <MultiValuedProperty>]
 [-TlsAuthLevel <EncryptionOnly | CertificateValidation | DomainValidation>]
 [-TlsDomain <SmtpDomainWithSubdomains>] [-Usage <Custom | Internal | Internet | Partner>]
 [-UseExternalDNSServersEnabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-SendConnector [-Name] <String> [-AuthenticationCredential <PSCredential>] [-Comment <String>] [-Confirm]
 [-ConnectionInactivityTimeOut <EnhancedTimeSpan>] [-Custom] [-DNSRoutingEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-DomainSecureEnabled <$true | $false>] [-Enabled <$true | $false>]
 [-ErrorPolicies <Default | DowngradeAuthFailures | DowngradeDnsFailures>] [-Force]
 [-ForceHELO <$true | $false>] [-Fqdn <Fqdn>] [-IgnoreSTARTTLS <$true | $false>] [-Internal] [-Internet]
 [-IsCoexistenceConnector <$true | $false>] [-LinkedReceiveConnector <ReceiveConnectorIdParameter>]
 [-MaxMessageSize <Unlimited>] [-Partner] [-Port <Int32>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireOorg <$true | $false>] [-RequireTLS <$true | $false>]
 [-SmartHostAuthMechanism <None | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-SmartHosts <MultiValuedProperty>] [-SmtpMaxMessagesPerConnection <Int32>] [-SourceIPAddress <IPAddress>]
 [-SourceTransportServers <MultiValuedProperty>]
 [-TlsAuthLevel <EncryptionOnly | CertificateValidation | DomainValidation>]
 [-TlsDomain <SmtpDomainWithSubdomains>] [-Usage <Custom | Internal | Internet | Partner>]
 [-UseExternalDNSServersEnabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

###  (Default)
```
New-SendConnector [-Name] <String> -AddressSpaces <MultiValuedProperty>
 [-AuthenticationCredential <PSCredential>] [-CloudServicesMailEnabled <$true | $false>] [-Comment <String>]
 [-Confirm] [-ConnectionInactivityTimeOut <EnhancedTimeSpan>] [-Custom] [-DNSRoutingEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-DomainSecureEnabled <$true | $false>] [-Enabled <$true | $false>]
 [-ErrorPolicies <Default | DowngradeDnsFailures | DowngradeCustomFailures | UpgradeCustomFailures>] [-Force]
 [-ForceHELO <$true | $false>] [-Fqdn <Fqdn>] [-FrontendProxyEnabled <$true | $false>]
 [-IgnoreSTARTTLS <$true | $false>] [-Internal] [-Internet] [-IsScopedConnector <$true | $false>]
 [-MaxMessageSize <Unlimited>] [-Partner] [-Port <Int32>] [-ProtocolLoggingLevel <None | Verbose>]
 [-RequireOorg <$true | $false>] [-RequireTLS <$true | $false>]
 [-SmartHostAuthMechanism <None | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative>]
 [-SmartHosts <MultiValuedProperty>] [-SmtpMaxMessagesPerConnection <Int32>] [-SourceIPAddress <IPAddress>]
 [-SourceTransportServers <MultiValuedProperty>]
 [-TlsAuthLevel <EncryptionOnly | CertificateValidation | DomainValidation>]
 [-TlsCertificateName <SmtpX509Identifier>] [-TlsDomain <SmtpDomainWithSubdomains>]
 [-Usage <Custom | Internal | Internet | Partner>] [-UseExternalDNSServersEnabled <$true | $false>] [-WhatIf]
 [-ConnectorType <Default | XPremises>] [-Region <NotSpecified | NAM | EUR | APC>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Send connectors" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Send connectors" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-SendConnector -Internet -Name MySendConnector -AddressSpaces contoso.com,fabrikam.com
```

This example creates the Send connector MySendConnector with the following properties:


It sends e-mail messages over the Internet.

It only processes messages addressed to Contoso.com and Fabrikam.com domains.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-SendConnector -Internet -Name MySendConnector -AddressSpaces contoso.com,fabrikam.com
```

This example creates the Send connector named MySendConnector with the following properties:


It sends email messages over the Internet.

It processes messages addressed only to Contoso.com and Fabrikam.com domains.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-SendConnector -Internet -Name MySendConnector -AddressSpaces contoso.com,fabrikam.com
```

This example creates the Send connector named MySendConnector with the following properties:


It sends email messages over the Internet.

It processes messages addressed only to Contoso.com and Fabrikam.com domains.

### Example 2 -------------------------- (Exchange Server 2010)
```
$CredentialObject = Get-Credential; New-SendConnector -Name "Secure E-Mail to Contoso.com" -AddressSpaces contoso.com -AuthenticationCredential $CredentialObject -SmartHostAuthMechanism BasicAuth
```

This example creates the Send connector Secure E-Mail to Contoso.com with the following properties:


It only processes messages for the Contoso.com domain.

It uses Basic authentication.

It uses a specific authentication credential.

To assign a specific authentication credential for the Send connector, you must first run the Get-Credential command and store the user input in a temporary variable. When you run the Get-Credential command, the command asks for the user name and password of the account used during authentication with the Contoso.com e-mail server. The temporary variable can then be used in the New-SendConnector cmdlet to create the new connector.

### Example 2 -------------------------- (Exchange Server 2013)
```
$CredentialObject = Get-Credential; New-SendConnector -Name "Secure Email to Contoso.com" -AddressSpaces contoso.com -AuthenticationCredential $CredentialObject -SmartHostAuthMechanism BasicAuth
```

This example creates the Send connector Secure Email to Contoso.com with the following properties:


It processes messages only for the Contoso.com domain.

It uses Basic authentication.

It uses a specific authentication credential.

To assign a specific authentication credential for the Send connector, you must first run the Get-Credential command and store the user input in a temporary variable. When you run the Get-Credential command, the command asks for the user name and password of the account used during authentication with the Contoso.com email server. The temporary variable can then be used in the New-SendConnector cmdlet to create the new connector.

### Example 2 -------------------------- (Exchange Server 2016)
```
$CredentialObject = Get-Credential; New-SendConnector -Name "Secure Email to Contoso.com" -AddressSpaces contoso.com -AuthenticationCredential $CredentialObject -SmartHostAuthMechanism BasicAuth
```

This example creates the Send connector Secure Email to Contoso.com with the following properties:


It processes messages only for the Contoso.com domain.

It uses Basic authentication.

It uses a specific authentication credential.

To assign a specific authentication credential for the Send connector, you must first run the Get-Credential command and store the user input in a temporary variable. When you run the Get-Credential command, the command asks for the user name and password of the account used during authentication with the Contoso.com email server. The temporary variable can then be used in the New-SendConnector cmdlet to create the new connector.

## PARAMETERS

### -Name
!!! Exchange Server 2010

The Name parameter is the administrator-supplied name of the connector. You must enclose the value of the Name parameter in quotation marks (") if the name contains spaces, for example: "New Send Connector".



!!! Exchange Server 2013, Exchange Server 2016

The Name parameter specifies a descriptive name for the connector.



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

### -AddressSpaces
!!! Exchange Server 2010

The AddressSpaces parameter specifies the domain names to which the Send connector routes mail. The AddressSpaces parameter is required unless this connector is linked to a Receive connector. If a linked Receive connector is specified by using the LinkedReceiveConnector parameter, the value of the AddressSpaces parameter must be $null. The complete syntax for entering each address space is as follows: \<AddressSpaceType\>:\<AddressSpace\>;\<AddressSpaceCost\>

- AddressSpaceType On an Edge Transport server, the address space type must be SMTP. On a Hub Transport server, the address space type may be SMTP, X400, or any other text string. If you omit the address space type, an SMTP address space type is assumed.

- AddressSpace For SMTP address space types, the address space that you enter must be RFC 1035-compliant, for example, \*, \*.com, and \*.contoso.com are permitted, but \*contoso.com isn't permitted. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such as o=MySite;p=MyOrg;a=adatum;c=us. For all other values of address space type, you can enter any text for the address space.

- AddressSpaceCost The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. This parameter is optional. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains the semicolon character (;), you must specify the address space cost.

If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent:

- "SMTP:contoso.com;1"

- "contoso.com;1"

- "SMTP:contoso.com"

- contoso.com

You may specify multiple address spaces by separating the address spaces with commas, for example: contoso.com,fabrikam.com. If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("), for example: "contoso.com;2","fabrikam.com;3".

If you specify a non-SMTP address space type on a Send connector configured on a Hub Transport server, the following settings are required on the Send connector:

- You must use a smart host to route e-mail by specifying a value for the SmartHosts parameter.

- You must set the DNSRoutingEnabled parameter to $false.

Although you can configure non-SMTP address spaces on a Send connector on a Hub Transport server, the Send connector uses SMTP as the transport mechanism to send messages to other messaging servers. Foreign connectors on Hub Transport servers are used to send messages to local messaging servers, such as third-party fax gateway servers, which don't use SMTP as their primary transport mechanism. For more information, see Understanding Foreign Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The AddressSpaces parameter specifies the domain names to which the Send connector routes mail. The complete syntax for entering each address space is as follows: \<AddressSpaceType\>:\<AddressSpace\>;\<AddressSpaceCost\>

- AddressSpaceType: On an Edge server, the address space type must be SMTP. In the Transport service on a Mailbox server, the address space type may be SMTP, X400, or any other text string. If you omit the address space type, SMTP is assumed.

- AddressSpace: For SMTP address space types, the address space that you enter must be RFC 1035-compliant. For example, \*, \*.com, and \*.contoso.com are permitted, but \*contoso.com is not. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such as o=MySite;p=MyOrg;a=adatum;c=us. For all other values of address space type, you can enter any text for the address space.

- AddressSpaceCost: The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. This parameter is optional. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains the semicolon character (;), you must specify the address space cost.

If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent:

- "SMTP:contoso.com;1"

- "contoso.com;1"

- "SMTP:contoso.com"

- contoso.com

You may specify multiple address spaces by separating the address spaces with commas, for example: contoso.com,fabrikam.com. If you specify the address space type or the address space cost, enclose the address space in quotation marks ("), for example: "contoso.com;2","fabrikam.com;3".

If you specify a non-SMTP address space type on a Send connector configured in the Transport service on a Mailbox server, you must configure the following parameters:

- The SmartHosts parameter must be set to a value that specifies a smart host.

- The DNSRoutingEnabled parameter must be set to $false.

Although you can configure non-SMTP address spaces on a Send connector in the Transport service on a Mailbox server, the Send connector uses SMTP as the transport mechanism to send messages to other messaging servers. Foreign connectors in the Transport service on a Mailbox server are used to send messages to local messaging servers, such as third-party fax gateway servers, which don't use SMTP as their primary transport mechanism. For more information, see Foreign connectors.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationCredential
!!! Exchange Server 2010

The AuthenticationCredential parameter specifies the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information about the Get-Credential cmdlet, type Get-Help Get-Credential in the Exchange Management Shell.



!!! Exchange Server 2013

The AuthenticationCredential parameter specifies a credential object. This credential object is created by using the Get-Credential cmdlet. For more information about the Get-Credential cmdlet, enter Get-Help Get-Credential in the Exchange Management Shell.



!!! Exchange Server 2016

The AuthenticationCredential parameter specifies a credential object.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
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

### -ConnectionInactivityTimeOut
!!! Exchange Server 2010

The ConnectionInactivityTimeOut parameter specifies the maximum time that an idle connection can remain open. The default value is 10 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 15 minutes for this parameter, use 00:15:00. The valid input range for this parameter is from 00:00:01 through 1.00:00:00.



!!! Exchange Server 2013

The ConnectionInactivityTimeOut parameter specifies the maximum time an idle connection can remain open. The default value is ten minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify fifteen minutes, set it to 00:15:00. The valid input range for this parameter is 00:00:01 to 1.00:00:00.



!!! Exchange Server 2016

The ConnectionInactivityTimeOut parameter specifies the maximum time an idle connection can remain open. The default value is ten minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify fifteen minutes, set it to 00:15:00. The valid input range for this parameter is 00:00:01 to 1.00:00:00.



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
!!! Exchange Server 2010

The Custom parameter specifies the Custom usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Custom parameter, you can't use any of the following parameters:

- Internal

- Internet

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Understanding Send Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The Custom parameter specifies the Custom usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Custom parameter, you can't use any of the following parameters:

- Internal

- Internet

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Send connectors.



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

### -DNSRoutingEnabled
!!! Exchange Server 2010

The DNSRoutingEnabled parameter specifies whether the Send connector uses Domain Name System (DNS) to route mail. Valid values for this parameter are $true or $false. The default value is $true. If you specify a SmartHosts parameter, the DNSRoutingEnabled parameter must be $false on the same command line.



!!! Exchange Server 2013, Exchange Server 2016

The DNSRoutingEnabled parameter specifies whether the Send connector uses Domain Name System (DNS) to route mail. Valid values for this parameter are $true or $false. The default value is $true. If you specify a SmartHosts parameter, the DNSRoutingEnabled parameter must be $false.



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

The DomainSecureEnabled parameter specifies part of the process to enable mutual Transport Layer Security (TLS) authentication for the domains serviced by this Send connector. Mutual TLS authentication functions correctly only if the following conditions are true:

- The value of the DomainSecureEnabled parameter is set to $true.

- The value of the DNSRoutingEnabled parameter is set to $true.

- The value of the IgnoreSTARTTLS parameter is set to $false.

The wildcard character (\*) isn't supported in domains configured for mutual TLS authentication. The same domain must also be defined on the corresponding Receive connector, and in the value of the TLSReceiveDomainSecureList attribute of the transport configuration.

The default value for the DomainSecureEnabled parameter is $false for the following types of Send connectors:

- All Send connectors defined on a Hub Transport server

- User-created Send connectors defined on an Edge Transport server

The default value for the DomainSecureEnabled parameter is $true for default Send connectors defined on an Edge Transport server.



!!! Exchange Server 2013, Exchange Server 2016

The DomainSecureEnabled parameter enables mutual Transport Layer Security (TLS) authentication for the domains serviced by the Send connector when set to $true. Mutual TLS authentication functions correctly only if the following conditions are met:

- DomainSecureEnabled is set to $true.

- DNSRoutingEnabled is set to $true.

- IgnoreSTARTTLS is set to $false.

The wildcard character (\*) isn't supported in domains configured for mutual TLS authentication. The same domain must also be defined on the corresponding Receive connector, and in the value of the TLSReceiveDomainSecureList attribute of the transport configuration.

The default value for the DomainSecureEnabled parameter is $false for the following types of Send connectors:

- Those defined in the Transport service on a Mailbox server.

- User-created Send connectors defined on an Edge server.

The default value is $true for a default Send connector defined on an Edge server.



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
!!! Exchange Server 2010

The Enabled parameter specifies whether to enable the connector to process e-mail messages. Valid values for this parameter are $true or $false. The default value is $true.



!!! Exchange Server 2013, Exchange Server 2016

The Enabled parameter specifies whether to enable the Send connector to process email messages. Valid values are $true or $false. The default value is $true.



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

### -ErrorPolicies
!!! Exchange Server 2010

The ErrorPolicies parameter specifies how communication errors encountered by this Send connector are treated. The possible values are:

- Default A non-delivery report (NDR) is generated for communication errors.

- DowngradeAuthFailures All authentication and TLS errors are treated as transient.

- DowngradeDnsFailures All DNS errors are treated as transient.

Multiple values can be specified for this parameter, separated by commas.

Specify a value other than Default for this parameter only if this Send connector is used to send messages over a reliable and well-defined communication channel where communication errors aren't expected. For example, you may want to consider specifying a value other than Default if this Send connector is used to send messages to a partner.



!!! Exchange Server 2013

The ErrorPolicies parameter specifies how communication errors are treated. Possible values are the following:

- Default A non-delivery report (NDR) is generated for communication errors.

- DowngradeDnsFailures All DNS errors are treated as transient.

- DowngradeCustomFailures Particular SMTP errors are treated as transient.

- UpgradeCustomFailures Custom transient failures are upgraded and treated as permanent failures.

Multiple values can be specified for this parameter, separated by commas.

Specify a value other than Default for this parameter only if this Send connector is used to send messages over a reliable and well-defined communication channel where communication errors aren't expected. For example, consider specifying a value other than Default if this Send connector is used to send messages to a partner.



!!! Exchange Server 2016

The ErrorPolicies parameter specifies how communication errors are treated. Possible values are the following:

- Default: A non-delivery report (NDR) is generated for communication errors.

- DowngradeDnsFailures: All DNS errors are treated as transient.

- DowngradeCustomFailures: Particular SMTP errors are treated as transient.

- UpgradeCustomFailures Custom transient failures are upgraded and treated as permanent failures.

Multiple values can be specified for this parameter, separated by commas.

Specify a value other than Default for this parameter only if this Send connector is used to send messages over a reliable and well-defined communication channel where communication errors aren't expected. For example, consider specifying a value other than Default if this Send connector is used to send messages to a partner.



```yaml
Type: Default | DowngradeAuthFailures | DowngradeDnsFailures
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
!!! Exchange Server 2010

The Force parameter specifies whether to suppress the warning or confirmation messages that appear during specific configuration changes.



!!! Exchange Server 2013

The Force switch specifies whether to suppress warning or confirmation messages. This switch can be used when the task is run programmatically and prompting for administrative input is inappropriate. If the Force switch isn't provided in the command, you're prompted for administrative input. You don't have to specify a value with this parameter.



!!! Exchange Server 2016

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.



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

### -ForceHELO
!!! Exchange Server 2010

The ForceHELO parameter specifies whether HELO is sent instead of EHLO. Valid values for this parameter are $true or $false. The default value is $false. By default, EHLO is used. If this parameter is set to $true, HELO is sent instead of EHLO.



!!! Exchange Server 2013, Exchange Server 2016

The ForceHELO parameter specifies whether HELO is sent instead of the default EHLO. Valid values are $true or $false. The default value is $false.



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

### -Fqdn
!!! Exchange Server 2010

The Fqdn parameter specifies the FQDN used as the source server for connected messaging servers that use the Send connector to receive outgoing messages. The value of this parameter is displayed to connected messaging servers whenever a source server name is required, as in the following examples:

- In the EHLO/HELO command when the Send connector communicates with the next hop messaging server

- In the most recent Received header field of the message added to the message by the next hop messaging server after the message leaves the Hub Transport server or Edge Transport server

- During TLS authentication

The default value of the Fqdn parameter is $null. This means the actual default FQDN value is the FQDN of the Hub Transport server or Edge Transport server that contains the Send connector.

If the Send connector is configured on a Hub Transport server that also has the Mailbox server role installed, any value that you specify for the Fqdn parameter isn't used. Instead, the FQDN of the server displayed by using the Get-ExchangeServer cmdlet is always used.

For servers that have both the Hub Transport server role and the Mailbox server role installed, the only way to remove the server name from the Received headers of the outgoing message is to use the Remove-ADPermission cmdlet to remove the Ms-Exch-Send-Headers-Routing permission from the security principals that use the connector. This action removes all the Received headers from the message as the message leaves the Hub Transport server. We recommend that you don't remove the Received headers for internal messages, because the Received headers are used for maximum hop count calculations. For more information about the Remove-ADPermission cmdlet and the Get-ExchangeServer cmdlet, see the following topics:

- Remove-ADPermission

- Get-ExchangeServer



!!! Exchange Server 2013, Exchange Server 2016

The Fqdn parameter specifies the FQDN used as the source server for connected messaging servers that use the Send connector to receive outgoing messages. The value of this parameter is displayed to connected messaging servers whenever a source server name is required, as in the following examples:

- In the EHLO/HELO command when the Send connector communicates with the next hop messaging server

- In the most recent Received header field added to the message by the next hop messaging server after the message leaves the Transport service on a Mailbox server or an Edge server

- During TLS authentication

The default value of the Fqdn parameter is $null. This means the default FQDN value is the FQDN of the Mailbox server or Edge server that contains the Send connector.



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

### -IgnoreSTARTTLS
!!! Exchange Server 2010

The IgnoreSTARTTLS parameter specifies whether to ignore the StartTLS option offered by a remote sending server. This parameter is used with remote domains. This parameter must be set to $false if the RequireTLS parameter is set to $true. The valid values for this parameter are $true or $false.



!!! Exchange Server 2013, Exchange Server 2016

The IgnoreSTARTTLS parameter specifies whether to ignore the StartTLS option offered by a remote sending server. This parameter is used with remote domains. This parameter must be set to $false if the RequireTLS parameter is set to $true. Valid values for this parameter are $true or $false.



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

### -Internal
!!! Exchange Server 2010

The Internal parameter specifies the Internal usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Internal parameter, you can't use any of the following parameters:

- Custom

- Internet

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Understanding Send Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The Internal parameter specifies the Internal usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Internal parameter, you can't use any of the following parameters:

- Custom

- Internet

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Send connectors.



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

### -Internet
!!! Exchange Server 2010

The Internet parameter specifies the Internet usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Internet parameter, you can't use any of the following parameters:

- Custom

- Internal

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Understanding Send Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The Internet parameter specifies the Internet usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Internet parameter, you can't use any of the following parameters:

- Custom

- Internal

- Partner

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Send connectors.



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

### -IsCoexistenceConnector
The IsCoexistenceConnector parameter specifies whether this Send connector is used for secure mail flow between your on-premises deployment and your Microsoft Office 365 organization. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsScopedConnector
!!! Exchange Server 2010

The IsScopedConnector parameter specifies the availability of the connector to other Hub Transport servers. When the value of this parameter is $false, the connector can be used by all Hub Transport servers in the Exchange organization. When the value of this parameter is $true, the connector can only be used by Hub Transport servers in the same Active Directory site. The default value is $false.



!!! Exchange Server 2013, Exchange Server 2016

The IsScopedConnector parameter specifies the availability of the connector to other Mailbox servers with the Transport service. When the value of this parameter is $false, the connector can be used by all Mailbox servers in the Exchange organization. When the value of this parameter is $true, the connector can only be used by Transport service on Mailbox servers in the same Active Directory site. The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: Set1, (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedReceiveConnector
The LinkedReceiveConnector parameter specifies whether to force all messages received by the specified Receive connector out through this Send connector. The value of LinkedReceivedConnector can use any of the following identifiers to specify the Receive connector:

- GUID

- Distinguished name (DN)

- Servername\\ConnectorName

When you use the LinkReceiveConnector parameter with this command, you must also use the following parameters with the specified values:

- DNSRoutingEnabled$false

- MaxMessageSizeunlimited

- Smarthosts \<SmarthostID\>

- SmarthostAuthMechanism \<AuthMechanism\>

When you use the LinkedReceiveConnector parameter, you can't use the AddressSpaces parameter.

```yaml
Type: ReceiveConnectorIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMessageSize
!!! Exchange Server 2010

The MaxMessageSize parameter specifies the maximum size of a message that can pass through a connector. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified values are treated as bytes. Values entered in bytes are rounded up to nearest kilobyte. For example, 1048575B is rounded up to 1MB, and 1048577 is rounded up to 1025KB. The valid input range for this parameter is from 0 through 2147483647 bytes. To remove the message size limit on a Send connector, enter a value of unlimited.



!!! Exchange Server 2013

The MaxMessageSize parameter specifies the maximum size of a message that can pass through a connector. The default value is 25 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

Values entered in bytes are rounded up to nearest kilobyte. The valid input range for this parameter is 0 to 2147483647 bytes. To remove the message size limit on a Send connector, enter a value of unlimited.



!!! Exchange Server 2016

The MaxMessageSize parameter specifies the maximum size of a message that can pass through a connector. The default value is 25 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

Values entered in bytes are rounded up to nearest kilobyte. The valid input range for this parameter is 0 to 2147483647 bytes. To remove the message size limit on a Send connector, enter a value of unlimited.



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

### -Partner
!!! Exchange Server 2010

The Partner parameter specifies the Partner usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Partner parameter, you can't use any of the following parameters:

- Custom

- Internal

- Internet

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Understanding Send Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The Partner parameter specifies the Partner usage type. The usage type specifies the permissions and authentication methods assigned to the Send connector. If you use the Partner parameter, you can't use any of the following parameters:

- Custom

- Internal

- Internet

- Usage

For more information about Send connector usage types, permissions, and authentication methods, see Send connectors.



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

### -Port
!!! Exchange Server 2010

The Port parameter specifies the port number used for smart host forwarding, if you specify a value in the SmartHosts parameter. The valid input range for this parameter is an integer from 0 through 65535. The default value is 25. In most organizations, the port number is set to 25.



!!! Exchange Server 2013, Exchange Server 2016

The Port parameter specifies the port number for smart host forwarding, if you specify a value in the SmartHosts parameter. The valid input range is an integer from 0 through 65535. The default value is 25. In most organizations, the port number is set to 25.



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

### -ProtocolLoggingLevel
!!! Exchange Server 2010

The ProtocolLoggingLevel parameter specifies whether to enable protocol logging for the specified Send connector. A value of Verbose enables protocol logging for the connector. A value of None disables protocol logging for the connector. The location of the Send connector protocol logs for all Send connectors configured on a Hub Transport server or an Edge Transport server is specified by using the Set-TransportServer cmdlet SendProtocolLogPath parameter.



!!! Exchange Server 2013, Exchange Server 2016

The ProtocolLoggingLevel parameter specifies whether to enable protocol logging. Verbose enables protocol logging. None disables protocol logging. The location of the Send connector protocol logs for all Send connectors configured in the Transport service on a Mailbox server or on an Edge server is specified with the SendProtocolLogPath parameter of the Set-TransportService cmdlet.



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

### -RequireOorg
!!! Exchange Server 2010

The RequireOorg parameter is reserved for internal Microsoft use.



!!! Exchange Server 2013, Exchange Server 2016

This parameter is reserved for internal Microsoft use.



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
!!! Exchange Server 2010

The RequireTLS parameter specifies whether all messages sent through this connector must be transmitted by using TLS. The default value is $false.



!!! Exchange Server 2013, Exchange Server 2016

The RequireTLS parameter specifies whether all messages sent through this connector must be transmitted using TLS. The default value is $false.



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

### -SmartHostAuthMechanism
!!! Exchange Server 2010

The SmartHostAuthMechanism parameter specifies the smart host authentication mechanism to use during authentication with a remote server. This parameter is used only when a smart host is configured and the DNSRoutingEnabled parameter is set to $false. Valid values are None, BasicAuth, BasicAuthRequireTLS, ExchangeServer, and ExternalAuthoritative. All values are mutually exclusive. If you select BasicAuth or BasicAuthRequireTLS, you must use the AuthenticationCredential parameter to specify the authentication credential.



!!! Exchange Server 2013, Exchange Server 2016

The SmartHostAuthMechanism parameter specifies the smart host authentication mechanism to use for authentication with a remote server. Use this parameter only when a smart host is configured and the DNSRoutingEnabled parameter is set to $false. Valid values are None, BasicAuth, BasicAuthRequireTLS, ExchangeServer, and ExternalAuthoritative. All values are mutually exclusive. If you select BasicAuth or BasicAuthRequireTLS, you must use the AuthenticationCredential parameter to specify the authentication credential.



```yaml
Type: None | BasicAuth | BasicAuthRequireTLS | ExchangeServer | ExternalAuthoritative
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmartHosts
!!! Exchange Server 2010

The SmartHosts parameter specifies the smart hosts the Send connector uses to route mail. This parameteris required if you set the DNSRoutingEnabled parameter to $false and must be specified on the same command line. The SmartHosts parameter takes one or more FQDNs, such as server.contoso.com, or one or more IP addresses, or a combination of both FQDNs and IP addresses. Separate each value by using a comma. If you enter an IP address, you must enter the IP address as a literal, for example: 10.10.1.1. The smart host identity can be the FQDN of a smart host server, a mail exchange (MX) record, or an address (A) record. If you configure an FQDN as the smart host identity, the source server for the Send connector must be able to use DNS name resolution to locate the smart host server.



!!! Exchange Server 2013, Exchange Server 2016

The SmartHosts parameter specifies the smart hosts the Send connector uses to route mail. This parameteris required if you set the DNSRoutingEnabled parameter to $false and it must be specified on the same command line. The SmartHosts parameter takes one or more FQDNs, such as server.contoso.com, or one or more IP addresses, or a combination of both FQDNs and IP addresses. If you enter an IP address, you must enter the IP address as a literal. For example, 10.10.1.1. The smart host identity can be the FQDN of a smart-host server, a mail exchanger (MX) record, or an address (A) record. If you configure an FQDN as the smart host identity, the source server for the Send connector must be able to use DNS name resolution to locate the smart-host server.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".



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

### -SmtpMaxMessagesPerConnection
!!! Exchange Server 2010

The SmtpMaxMessagesPerConnection parameter specifies the maximum number of messages this Send connector server can send per connection.



!!! Exchange Server 2013, Exchange Server 2016

The SmtpMaxMessagesPerConnection parameter specifies the maximum number of messages the server can send per connection.



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

### -SourceIPAddress
!!! Exchange Server 2010

The SourceIPAddress parameter specifies the local IP address to use as the endpoint for an SMTP connection to a remote messaging server. The default IP address is 0.0.0.0. This value means that the server can use any available local IP address. This parameter is only valid for Send connectors configured on Edge Transport servers.



!!! Exchange Server 2013, Exchange Server 2016

The SourceIPAddress parameter specifies the local IP address to use as the endpoint for an SMTP connection to a remote messaging server. The default IP address is 0.0.0.0. This value means that the server can use any available local IP address. This parameter is valid only for Send connectors configured on an Edge server.



```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceTransportServers
!!! Exchange Server 2010

The SourceTransportServers parameter specifies the names of the Hub Transport servers that can use this Send connector. You can specify the names of more than one Hub Transport server by separating the names with commas. This parameter isn't valid for Send connectors configured on Edge Transport servers.



!!! Exchange Server 2013, Exchange Server 2016

The SourceTransportServers parameter specifies the names of the Mailbox servers that can use this Send connector. This parameter isn't valid for Send connectors configured on an Edge server.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".



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

### -TlsAuthLevel
!!! Exchange Server 2010

The TlsAuthLevel parameter specifies the TLS authentication level that's used for outbound TLS connections established by this Send connector. Valid values are:

- EncryptionOnly TLS is used only to encrypt the communication channel. No certificate authentication is performed.

- CertificateValidation TLS is used to encrypt the channel and certificate chain validation and revocation lists checks are performed.

- DomainValidation In addition to channel encryption and certificate validation, the Send connector also verifies that the FQDN of the target certificate matches the domain specified in the TlsDomain parameter. If no domain is specified in the TlsDomain parameter, the FQDN on the certificate is compared with the recipient's domain.

You can't specify a value for this parameter if the IgnoreSTARTTLS parameter is set to $true, or the RequireTLS parameter is set to $false.



!!! Exchange Server 2013, Exchange Server 2016

The TlsAuthLevel parameter specifies the TLS authentication level that is used for outbound TLS connections established by this Send connector. Valid values are:

- EncryptionOnly: TLS is used only to encrypt the communication channel. No certificate authentication is performed.

- CertificateValidation: TLS is used to encrypt the channel and certificate chain validation and revocation lists checks are performed.

- DomainValidation: In addition to channel encryption and certificate validation, the Send connector also verifies that the FQDN of the target certificate matches the domain specified in the TlsDomain parameter. If no domain is specified in the TlsDomain parameter, the FQDN on the certificate is compared with the recipient's domain.

You can't specify a value for this parameter if the IgnoreSTARTTLS parameter is set to $true, or if the RequireTLS parameter is set to $false.



```yaml
Type: EncryptionOnly | CertificateValidation | DomainValidation
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TlsDomain
!!! Exchange Server 2010

The TlsDomain parameter specifies the domain name that the Send connector uses to verify the FQDN of the target certificate when establishing a TLS secured connection.

This parameter is only used if the TlsAuthLevel parameter is set to DomainValidation.

A value for this parameter is required if:

- The TLSAuthLevel parameter is set to DomainValidation.

- The DNSRoutingEnabled parameter is set to $false (smart host Send connector).



!!! Exchange Server 2013, Exchange Server 2016

The TlsDomain parameter specifies the domain name that the Send connector uses to verify the FQDN of the target certificate when establishing a TLS secured connection.

This parameter is used only if the TlsAuthLevel parameter is set to DomainValidation.

A value for this parameter is required if:

- The TLSAuthLevel parameter is set to DomainValidation.

- The DNSRoutingEnabled parameter is set to $false (smart host Send connector).



```yaml
Type: SmtpDomainWithSubdomains
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Usage
!!! Exchange Server 2010

The Usage parameter specifies the default permissions and authentication methods assigned to the Send connector. The valid values for this parameter are as follows: Custom, Internal, Internet, or Partner. If you don't specify a value for the Usage parameter, the usage type defaults to Custom.

If you use the Usage parameter, you can't use any of the following parameters:

- Custom

- Internal

- Internet

- Partner

For more information about Send connector usage types, permissions, and authentication methods, see Understanding Send Connectors.



!!! Exchange Server 2013, Exchange Server 2016

The Usage parameter specifies the default permissions and authentication methods assigned to the Send connector. The valid values are as follows: Custom, Internal, Internet, or Partner. The default is Custom.

If you use the Usage parameter, you can't use any of the following parameters:

- Custom

- Internal

- Internet

- Partner

For more information about Send connector usage types, permissions, and authentication methods, see Send connectors.



```yaml
Type: Custom | Internal | Internet | Partner
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseExternalDNSServersEnabled
!!! Exchange Server 2010

The UseExternalDNSServersEnabled parameter specifies whether this Send connector should use the external DNS list specified by using the Set-TransportServer cmdlet ExternalDNSServers parameter. The default value is $false. The valid values of this parameter are $true or $false.



!!! Exchange Server 2013, Exchange Server 2016

The UseExternalDNSServersEnabled parameter specifies whether this Send connector uses the external DNS list specified by the ExternalDNSServers parameter of the Set-TransportService cmdlet. The default value is $false.



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

### -CloudServicesMailEnabled
!!! Exchange Server 2013

Set to $true to enable this connector to send messages to the cloud service.



!!! Exchange Server 2016

Note: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see Hybrid Configuration wizard (https://technet.microsoft.com/library/hh529921.aspx).

The CloudServicesMailEnabled parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft Office 365. Specifically, this parameter controls how certain internal X-MS-Exchange-Organization-\* message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known as cross-premises headers.

Valid values are:

- $true: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain X-MS-Exchange-Organization-\* headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to X-MS-Exchange-CrossPremises-\* headers and are thereby preserved in messages. X-MS-Exchange-CrossPremises-\* headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to X-MS-Exchange-Organization-\* headers. These promoted headers replace any instances of the same X-MS-Exchange-Organization-\* headers that already exist in messages.

- $false: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.



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

### -FrontendProxyEnabled
The FrontendProxyEnabled parameter routes outbound messages through the CAS server, where destination specific routing, such as DNS or IP address, is set, when the parameter is set to $true.

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

### -ConnectorType
The ConnectorType parameter specifies whether the connector is used in hybrid deployments to send messages to Office 365. Valid values are:

- Default: The connector isn't used to send messages to Office 365. This is the default value.

- XPremises: The connector is used to send messages to Office 365.

```yaml
Type: Default | XPremises
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Region
This parameter is reserved for internal Microsoft use.

```yaml
Type: NotSpecified | NAM | EUR | APC
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

[Online Version](https://technet.microsoft.com/library/7b315ab0-8778-4835-a252-fb94129d7a8e.aspx)

