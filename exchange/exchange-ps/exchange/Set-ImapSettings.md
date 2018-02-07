---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-ImapSettings

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-ImapSettings cmdlet to set specific IMAP4 settings for the server running Microsoft Exchange Server 2010 that has the Client Access server role installed and that's running the Microsoft Exchange IMAP4 service.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-ImapSettings cmdlet to set specific IMAP4 settings for the server running Microsoft Exchange Server 2013 that has the Client Access server role installed and that's running the Microsoft Exchange IMAP4 service.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-ImapSettings cmdlet to modify the settings of the Microsoft Exchange IMAP4 service on Exchange servers. This service exists on Exchange servers that have the Client Access server role installed, and is used by IMAP4 clients to connect to Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ImapSettings [-AuthenticatedConnectionTimeout <EnhancedTimeSpan>] [-Banner <String>]
 [-CalendarItemRetrievalOption <iCalendar | intranetUrl | InternetUrl | Custom>] [-Confirm]
 [-DomainController <Fqdn>] [-EnableExactRFC822Size <$true | $false>]
 [-EnableGSSAPIAndNTLMAuth <$true | $false>] [-EnforceCertificateErrors <$true | $false>]
 [-ExtendedProtectionPolicy <None | Allow | Require>] [-ExternalConnectionSettings <MultiValuedProperty>]
 [-InternalConnectionSettings <MultiValuedProperty>] [-LogFileLocation <String>]
 [-LogFileRollOverSettings <Hourly | Daily | Weekly | Monthly>]
 [-LoginType <PlainTextLogin | PlainTextAuthentication | SecureLogin>] [-LogPerFileSizeQuota <Unlimited>]
 [-MaxCommandSize <Int32>] [-MaxConnectionFromSingleIP <Int32>] [-MaxConnections <Int32>]
 [-MaxConnectionsPerUser <Int32>]
 [-MessageRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>]
 [-OwaServerUrl <Uri>] [-PreAuthenticatedConnectionTimeout <EnhancedTimeSpan>]
 [-ProtocolLogEnabled <$true | $false>] [-ProxyTargetPort <Int32>] [-Server <ServerIdParameter>]
 [-ShowHiddenFoldersEnabled <$true | $false>] [-SSLBindings <MultiValuedProperty>]
 [-SuppressReadReceipt <$true | $false>] [-UnencryptedOrTLSBindings <MultiValuedProperty>] [-WhatIf]
 [-X509CertificateName <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can run the Set-ImapSettings cmdlet for a single Client Access server that has the Microsoft Exchange IMAP4 service installed, or for all Exchange Client Access servers that have the Microsoft Exchange IMAP4 service installed.

For more information, see Configure IP Addresses and Ports for POP3 and IMAP4 Access.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "IMAP4 settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can run the Set-ImapSettings cmdlet for a single Client Access server that has the Microsoft Exchange IMAP4 service installed, or for all Exchange Client Access servers that have the Microsoft Exchange IMAP4 service installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "IMAP4 settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

You can run the Set-ImapSettings cmdlet for a single Exchange server that's running the Microsoft Exchange IMAP4 service, or for all Exchange servers that are running the Microsoft Exchange IMAP4 service.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ImapSettings -Server "CAS01" -UnencryptedOrTLSBindings 10.0.0.0:995
```

This example sets the plain text or TLS connection to the Client Access server CAS01. In this example, the connection uses an IP address of 10.0.0.0 and a port number of 995.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-ImapSettings -Server "CAS01" -UnencryptedOrTLSBindings 10.0.0.0:995
```

This example sets the plain text or TLS connection to the Client Access server CAS01. In this example, the connection uses an IP address of 10.0.0.0 and a port number of 995.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-ImapSettings -Server "MBX01" -UnencryptedOrTLSBindings 10.0.0.0:143
```

This example configures the unencrypted or STARTTLS encrypted IMAP4 connection to the server named MBX01 by using the local IP address 10.0.0.0 on TCP port 143.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-ImapSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Imap4Logging"
```

This example turns on IMAP4 protocol logging. It also changes the IMAP4 protocol logging directory to C:\\Imap4Logging.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-ImapSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Imap4Logging"
```

This example turns on IMAP4 protocol logging. It also changes the IMAP4 protocol logging directory to C:\\Imap4Logging.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-ImapSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Imap4Logging"
```

This example turns on IMAP4 protocol logging. It also changes the IMAP4 protocol logging directory to C:\\Imap4Logging.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-ImapSettings -LogPerFileSizeQuota 2000000
```

This example changes the IMAP4 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-ImapSettings -LogPerFileSizeQuota 2000000
```

This example changes the IMAP4 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-ImapSettings -LogPerFileSizeQuota 2MB
```

This example changes the IMAP4 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 4 -------------------------- (Exchange Server 2010)
```
Set-ImapSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the IMAP4 protocol logging to create a new log file every hour.

### Example 4 -------------------------- (Exchange Server 2013)
```
Set-ImapSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the IMAP4 protocol logging to create a new log file every hour.

### Example 4 -------------------------- (Exchange Server 2016)
```
Set-ImapSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the IMAP4 protocol logging to create a new log file every hour.

## PARAMETERS

### -AuthenticatedConnectionTimeout
!!! Exchange Server 2010

The AuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle authenticated connection. The default setting is 1800 seconds. The possible values are from 30 through 86400 seconds.



!!! Exchange Server 2013

The AuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle authenticated connection.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Valid input for this parameter is 00:00:30 to 1:00:00. The default setting is 00:30:00 or 30 minutes.



!!! Exchange Server 2016

The AuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle authenticated connection.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:30 to 1:00:00. The default setting is 00:30:00 (30 minutes).



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

### -Banner
!!! Exchange Server 2010, Exchange Server 2013

The Banner parameter specifies the banner string displayed after a connection to a Client Access server has been established.



!!! Exchange Server 2016

The Banner parameter specifies the text string that's displayed to connecting IMAP4 clients. The default value is: The Microsoft Exchange IMAP4 service is ready..



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

### -CalendarItemRetrievalOption
!!! Exchange Server 2010

The CalendarItemRetrievalOption parameter specifies the type of calendar item returned when the calendar is accessed by using IMAP4. The following values are available:

- 0:iCalendar

- 1:intranetUrl

- 2:InternetUrl

- 3:Custom

If you're using 3:Custom, you must specify the OWAServerUrl parameter setting.



!!! Exchange Server 2013

The CalendarItemRetrievalOption parameter specifies the type of calendar item returned when the calendar is accessed by using IMAP4. The default value is iCalendar. You can specify the value for this parameter by using a numerical value or text string. The following values are available:

- 0 or iCalendar

- 1 or intranetUrl

- 2 or InternetUrl

- 3 or Custom

If you're using 3 or Custom, you must specify the OwaServerUrl parameter setting.



!!! Exchange Server 2016

The CalendarItemRetrievalOption parameter specifies how calendar items are presented to IMAP4 clients. Valid values are:

- 0 or iCalendar. This is the default value.

- 1 or IntranetUrl

- 2 or InternetUrl

- 3 or Custom

If you specify 3 or Custom, you need to specify a value for the OwaServerUrl parameter setting.



```yaml
Type: iCalendar | intranetUrl | InternetUrl | Custom
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

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -EnableExactRFC822Size
!!! Exchange Server 2010, Exchange Server 2013

The EnableExactRFC822Size parameter calculates the exact size of each MIME message that can be retrieved from the server. When you set this parameter to $true, the exact size of MIME messages stored on the Exchange server is available to POP3 or IMAP4 client programs that rely on knowing the exact size of each MIME message.

This parameter is set to $false by default. If you don't set this option to $true, the size of each MIME message that the Exchange server returns to POP3 and IMAP4 client programs may be slightly different than the exact size of the message. Because setting this option to $true can negatively affect performance, you should only use this option if many of your users are using a client that requires knowing the exact size of MIME messages.



!!! Exchange Server 2016

The EnableExactRFC822Size parameter specifies how message sizes are presented to IMAP4 clients. Valid values are:

- $true: Calculate the exact message size. Because this setting can negatively affect performance, you should configure it only if it's required by your IMAP4 clients.

- $false: Use an estimated message size. This is the default value.



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

### -EnableGSSAPIAndNTLMAuth
!!! Exchange Server 2010

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. This parameter is set to $true by default. You can disable NTLM for IMAP4 connections by setting the parameter value to $false. NTLM authentication is not supported for IMAP4 connections in Exchange 2010 RTM. Support for NTLM authentication for IMAP4 connections was brought back in Exchange 2010 SP1. For more information, see Discontinued Features.



!!! Exchange Server 2013

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. This parameter is set to $true by default. You can disable NTLM for IMAP4 connections by setting the parameter value to $false. NTLM authentication isn't supported for IMAP4 connections in Microsoft Exchange Server 2010 release to manufacturing (RTM). Support for NTLM authentication for IMAP4 connections was brought back in Exchange 2010 Service Pack 1 (SP1).



!!! Exchange Server 2016

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. Valid values are:

- $true: NTLM for IMAP4 connections is enabled. This is the default value.

- $false: NTLM for IMAP4 connections is disabled.



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

### -EnforceCertificateErrors
!!! Exchange Server 2010, Exchange Server 2013

The EnforceCertificateErrors parameter specifies whether to enforce valid Secure Sockets Layer (SSL) certificates. To use this parameter, specify the destination Client Access server for which you want to enforce valid SSL certificates. If the EnforceCertificateErrors parameter is set to $true and the proxy's target certificate isn't valid, the proxy logon attempt fails.

The default setting is $false.



!!! Exchange Server 2016

The EnforceCertificateErrors parameter specifies whether to enforce valid Secure Sockets Layer (SSL) certificate validation failures. Valid values are:

The default setting is $false.

- $true: If the certificate isn't valid or doesn't match the target IMAP4 server's FQDN, the connection attempt fails.

- $false: The server doesn't deny IMAP4 connections based on certificate errors. This is the default value.



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
!!! Exchange Server 2010

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication for IMAP4 connections. By default, this parameter is set to None. The possible values are:

- None Extended Protection for Authentication won't be used.

- Allow Extended Protection for Authentication will be used only if the connecting IMAP4 connection supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require Extended Protection for Authentication will be required for all IMAP4 connections. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you're using Integrated Windows authentication. To use Extended Protection for Authentication, the client and server computers must meet the specific requirements. These include operating system requirements and security update requirements. In addition, the IMAP4 client program must support the use of Extended Protection for Authentication. For more information about Extended Protection for Authentication and the requirements to use it, see Understanding Extended Protection for Authentication.



!!! Exchange Server 2013

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication for IMAP4 connections. By default, this parameter is set to None. The possible values are:

- None Extended Protection for Authentication won't be used.

- Allow Extended Protection for Authentication will be used only if the connecting IMAP4 connection supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require Extended Protection for Authentication will be required for all IMAP4 connections. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you're using Integrated Windows authentication. To use Extended Protection for Authentication, the client and server computers must meet specific requirements. These include operating system requirements and security update requirements. In addition, the IMAP4 client program must support the use of Extended Protection for Authentication.



!!! Exchange Server 2016

The ExtendedProtectionPolicy parameter specifies how Extended Protection for Authentication is used. Valid values are:

- None: Extended Protection for Authentication isn't used. This is the default value.

- Allow: Extended Protection for Authentication is used only if it's supported by the incoming IMAP4 connection. If it's not, Extended Protection for Authentication isn't used.

- Require: Extended Protection for Authentication is required for all IMAP4 connections. If the incoming IMAP4 connection doesn't support it, the connection is rejected.

Extended Protection for Authentication enhances the protection and handling of credentials by Integrated Windows authentication (also known as NTLM), so we strongly recommend that you use it if it's supported by your clients (default installations of Windows 7 or later and Windows Server 2008 R2 or later support it).



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

### -ExternalConnectionSettings
!!! Exchange Server 2010

The ExternalConnectionSettings parameter specifies the host name, port, and encryption type that Exchange uses when IMAP4 clients connect to their e-mail from outside your corporate network.

Enter a value using the format: \<HostName\>:\<Port\>:\<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS (Transport Layer Security) or SSL.



!!! Exchange Server 2013

The ExternalConnectionSettings parameter specifies the host name, port, and encryption type that Exchange uses when IMAP4 clients connect to their email from outside the corporate network.

Enter a value using the format: \<HostName\>:\<Port\>:\<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS (Transport Layer Security) or SSL.



!!! Exchange Server 2016

The ExternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by external IMAP4 clients (IMAP4 connections from outside your corporate network).

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is blank ($null), which means no external IMAP4 connection settings are configured.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The combination of encryption methods and ports that are specified for this parameter need to match the corresponding encryption methods and ports that are specified by the SSLBindings and UnencryptedOrTLSBindings parameters.



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

### -InternalConnectionSettings
!!! Exchange Server 2010

The InternalConnectionSettings parameter specifies the host name, port, and encryption type used when IMAP4 clients connect to their e-mail from inside your corporate network. This setting is also used to specify the host name, port, and encryption type used when a user connection is forwarded to another Client Access server.

Enter a value using the format: \<HostName\>:\<Port\>: \<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS or SSL.



!!! Exchange Server 2013

The InternalConnectionSettings parameter specifies the host name, port, and encryption type used when IMAP4 clients connect to their email from inside the corporate network. This setting is also used to specify the host name, port, and encryption type used when a user connection is forwarded to another Client Access server.

Enter a value using the format: \<HostName\>:\<Port\>: \<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS or SSL. If the server name is Server01 and the domain is Contoso.com, the default value is Server01.Contoso.com:993:SSL, Server01.Contoso.com:143:TLS.



!!! Exchange Server 2016

The InternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by internal IMAP4 clients (IMAP4 connections from inside your corporate network). This setting is also used when a IMAP4 connection is forwarded to another Exchange server that's running the Microsoft Exchange IMAP4 service.

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is \<ServerFQDN\>:993:SSL,\<ServerFQDN\>:143:TLS.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The combination of encryption methods and ports that are specified for this parameter need to match the corresponding encryption methods and ports that are specified by the SSLBindings and UnencryptedOrTLSBindings parameters.



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

### -LogFileLocation
!!! Exchange Server 2010

The LogFileLocation parameter specifies the location for the IMAP4 protocol log files. By default, IMAP4 protocol log files are located in the C:\\Program Files\\Microsoft\\Exchange Server\\V14\\Logging\\Imap4 directory.



!!! Exchange Server 2013

The LogFileLocation parameter specifies the location for the IMAP4 protocol log files. By default, IMAP4 protocol log files are located in the C:\\Program Files\\Microsoft\\Exchange Server\\V15\\Logging\\Imap4 directory.



!!! Exchange Server 2016

The LogFileLocation parameter specifies the location for the IMAP4 protocol log files. The default location is %ExchangeInstallPath%Logging\\Imap4.

This parameter is only meaningful when the ProtocolLogEnabled parameter value is $true.



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

### -LogFileRollOverSettings
!!! Exchange Server 2010

The LogFileRollOverSettings parameter defines how frequently IMAP4 protocol logging creates a new log file. By default, a new log file is created hourly. The possible values are:

- 1:Hourly

- 2:Daily

- 3:Weekly

- 4:Monthly

This setting only applies when the value for the LogPerFileSizeQuota parameter is set to 0.



!!! Exchange Server 2013

The LogFileRollOverSettings parameter specifies how frequently IMAP4 protocol logging creates a new log file. By default, a new log file is created daily. You can specify the value for this parameter by using a numerical value or text string. The possible values are:

- 1 or Hourly

- 2 or Daily

- 3 or Weekly

- 4 or Monthly

This setting only applies when the value for the LogPerFileSizeQuota parameter is set to 0.



!!! Exchange Server 2016

The LogFileRollOverSettings parameter specifies how frequently IMAP4 protocol logging creates a new log file. Valid values are:

- 1 or Hourly.

- 2 or Daily. This is the default value

- 3 or Weekly.

- 4 or Monthly.

This parameter is only meaningful when the LogPerFileSizeQuota parameter value is 0, and the ProtocolLogEnabled parameter value is $true.



```yaml
Type: Hourly | Daily | Weekly | Monthly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginType
!!! Exchange Server 2010

The LoginType parameter specifies the authentication setting used for the Client Access server running the Microsoft Exchange IMAP4 service. The possible values are:

- 1:PlainTextLogin

- 2:PlainTextAuthentication

- 3:SecureLogin



!!! Exchange Server 2013

The LoginType parameter specifies the authentication setting used for the Client Access server running the Microsoft Exchange IMAP4 service. The default value is SecureLogin. You can specify the value for this parameter by using a numerical value or text string. The possible values are:

- 1 or PlainTextLogin

- 2 or PlainTextAuthentication

- 3 or SecureLogin



!!! Exchange Server 2016

The LoginType parameter specifies the authentication method for IMAP4 connections. Valid values are:

- 1 or PlainTextLogin.

- 2 or PlainTextAuthentication.

- 3 or SecureLogin. This is the default value.



```yaml
Type: PlainTextLogin | PlainTextAuthentication | SecureLogin
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogPerFileSizeQuota
!!! Exchange Server 2010

The LogPerFileSizeQuota parameter defines the maximum size of an IMAP4 protocol log file in bytes. By default, this value is set to 0. When this value is set to 0, a new protocol log file is created at the frequency specified by the LogFileRollOverSettings parameter.



!!! Exchange Server 2013

The LogPerFileSizeQuota parameter specifies the maximum size of an IMAP4 protocol log file in bytes. By default, this value is set to 0. When this value is set to 0, a new protocol log file is created at the frequency specified by the LogFileRollOverSettings parameter.



!!! Exchange Server 2016

The LogPerFileSizeQuota parameter specifies the maximum size of a IMAP4 protocol log file.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The default value is 0, which means a new IMAP4 protocol log file is created at the frequency that's specified by the LogFileRollOverSettings parameter.

This parameter is only meaningful when the ProtocolLogEnabled parameter value is $true.



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

### -MaxCommandSize
!!! Exchange Server 2010

The MaxCommandSize parameter specifies the maximum size of a single command. The default size is 40 bytes. The possible values are from 40 through 1024 bytes.



!!! Exchange Server 2013

The MaxCommandSize parameter specifies the maximum size of a single command. The default size is 10240 bytes. The possible values are from 1024 through 16384 bytes.



!!! Exchange Server 2016

The MaxCommandSize parameter specifies the maximum size in bytes of a single IMAP4 command. Valid values are from 40 through 1024. The default value is 512.



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

### -MaxConnectionFromSingleIP
!!! Exchange Server 2010

The MaxConnectionFromSingleIP parameter specifies the number of connections that the specified server accepts from a single IP address. The default value is 2000. The possible values are 1 through 25000.



!!! Exchange Server 2013

The MaxConnectionFromSingleIP parameter specifies the number of connections that the specified server accepts from a single IP address. The default value is 2147483647. The possible values are from 1 through 2147483647.



!!! Exchange Server 2016

The MaxConnectionFromSingleIP parameter specifies the maximum number of IMAP4 connections that are accepted by the Exchange server from a single IP address. Valid values are from 1 through 2147483647. The default value is 2147483647.



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

### -MaxConnections
!!! Exchange Server 2010

The MaxConnections parameter specifies the total number of connections that the specified server accepts. This includes authenticated and unauthenticated connections. The default size is 2147483647. The possible values are from 1 through 2147483647.



!!! Exchange Server 2013

The MaxConnections parameter specifies the total number of connections that the specified server accepts. This includes authenticated and unauthenticated connections. The default value is 2147483647. The possible values are from 1 through 2147483647.



!!! Exchange Server 2016

The MaxConnections parameter specifies the maximum number of IMAP4 connections that are accepted by the Exchange server. Valid values are from 1 through 2147483647. The default value is 2147483647.



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

### -MaxConnectionsPerUser
!!! Exchange Server 2010

The MaxConnectionsPerUser parameter specifies the maximum number of connections that the Client Access server accepts from a particular user. The default value is 16. The possible values are from 1 through 25000.



!!! Exchange Server 2013

The MaxConnectionsPerUser parameter specifies the maximum number of connections that the Client Access server accepts from a particular user. The default value is 16. The possible values are from 1 through 2147483647.



!!! Exchange Server 2016

The MaxConnectionsPerUser parameter specifies the maximum number of IMAP4 connections that are allowed for each user. Valid values are from 1 through 2147483647. The default value is 16.



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

### -MessageRetrievalMimeFormat
!!! Exchange Server 2010

The MessageRetrievalMimeFormat parameter specifies the format of the messages retrieved from the server. The possible values are:

- 0:TextOnly

- 1:HtmlOnly

- 2:HtmlAndTextAlternative

- 3:TextEnrichedOnly

- 4:TextEnrichedAndTextAlternative

- 5:BestBodyFormat

- 6:Tnef



!!! Exchange Server 2013

The MessageRetrievalMimeFormat parameter specifies the format of the messages retrieved from the server. The default value is BestBodyFormat. You can specify the value for this parameter by using a numerical value or text string. The possible values are:

- 0 or TextOnly

- 1 or HtmlOnly

- 2 or HtmlAndTextAlternative

- 3 or TextEnrichedOnly

- 4 or TextEnrichedAndTextAlternative

- 5 or BestBodyFormat

- 6 or Tnef

For more information, see Configure POP3 and IMAP4 message retrieval format options.



!!! Exchange Server 2016

The MessageRetrievalMimeFormat parameter specifies the MIME encoding of messages. Valid values are:

- 0 or TextOnly.

- 1 or HtmlOnly.

- 2 or HtmlAndTextAlternative.

- 3 or TextEnrichedOnly.

- 4 or TextEnrichedAndTextAlternative.

- 5 or BestBodyFormat. This is the default value.

- 6 or Tnef.



```yaml
Type: TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaServerUrl
!!! Exchange Server 2010

The OwaServerUrl parameter specifies the Client Access server from which to retrieve calendar information for instances of custom Microsoft Office Outlook Web App calendar items.



!!! Exchange Server 2013

The OwaServerUrl parameter specifies the Client Access server from which to retrieve calendar information for instances of custom Microsoft OfficeOutlook Web App calendar items.



!!! Exchange Server 2016

The OwaServerUrl parameter specifies the URL that's used to retrieve calendar information for instances of custom Outlook on the web calendar items.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreAuthenticatedConnectionTimeout
!!! Exchange Server 2010

The PreAuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle connection that isn't authenticated. The default setting is 60 seconds. The possible values are from 10 through 3600 seconds.



!!! Exchange Server 2013

The PreAuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle connection that isn't authenticated.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Valid input for this parameter is 00:00:30 to 1:00:00.The default value is 00:01:00 or one minute.



!!! Exchange Server 2016

The PreAuthenticatedConnectionTimeout parameter specifies the period of time to wait before closing an idle IMAP4 connection that isn't authenticated.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are00:00:30 to 1:00:00. The default value is 00:01:00 (one minute).



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

### -ProtocolLogEnabled
!!! Exchange Server 2010

The ProtocolLogEnabled parameter specifies whether to enable protocol logging. For more information, see Configure Protocol Logging for POP3 and IMAP4.



!!! Exchange Server 2013

The ProtocolLogEnabled parameter specifies whether to enable protocol logging. For more information, see Configure protocol logging for POP3 and IMAP4.



!!! Exchange Server 2016

The ProtocolLogEnabled parameter specifies whether to enable protocol logging for IMAP4. Valid values are:

- $true: IMAP4 protocol logging is enabled.

- $false: IMAP4 protocol logging is disabled. This is the default value.



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

### -ProxyTargetPort
!!! Exchange Server 2010

The ProxyTargetPort parameter specifies the port on the Exchange Server 2003 back-end server to which the Microsoft Exchange IMAP4 service on a Client Access server relays commands.



!!! Exchange Server 2013

The ProxyTargetPort parameter specifies the port on the Exchange Server 2003 back-end server to which the Microsoft Exchange IMAP4 service on a Client Access server relays commands. The default port is 1993.



!!! Exchange Server 2016

The ProxyTargetPort parameter specifies the port on the Microsoft Exchange IMAP4 Backend service that listens for client connections that are proxied from the Microsoft Exchange IMAP4 service. The default value is 1993.



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

### -Server
!!! Exchange Server 2010, Exchange Server 2013

The Server parameter specifies an individual Client Access server in your organization for which you're specifying IMAP4 settings.



!!! Exchange Server 2016

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

### -ShowHiddenFoldersEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ShowHiddenFoldersEnabled parameter specifies whether hidden folders are visible. If the value is set to $true, hidden folders are visible. The default value is $false.



!!! Exchange Server 2016

The ShowHiddenFoldersEnabled parameter specifies whether hidden mailbox folders are visible. Valid values are:

- $true: Hidden folders are visible.

- $false: Hidden folders aren't visible. This is the default value.



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

### -SSLBindings
!!! Exchange Server 2010

The SSLBindings parameter specifies whether the command sets the IP address and port number to use for communication for an SSL session. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>.



!!! Exchange Server 2013

The SSLBindings parameter specifies whether the command sets the IP address and port number to use for communication for an SSL session. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>. The default value is 0.0.0.0:993.



!!! Exchange Server 2016

The SSLBindings parameter specifies the IP address and TCP port that's used for IMAP4 connection that's always encrypted by SSL/TLS. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:993,0.0.0.0:993.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



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

### -SuppressReadReceipt
!!! Exchange Server 2010

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to IMAP4 senders that are using the Send read receipts for messages I send option in their IMAP4 e-mail program. By default, this option is set to $false. By default, IMAP4 senders that use the Send read receipts for messages I send option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The valid values and descriptions for this parameter are:

- $false IMAP4 users are sent a read receipt each time a recipient downloads a message. IMAP4 users are also sent a read receipt when the user opens the message.

- $true IMAP4 users that use the Send read receipts for messages I send option in their e-mail client programs only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2013

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to IMAP4 senders that are using the Send read receipts for messages I send option in their IMAP4 email program. By default, this option is set to $false. By default, IMAP4 senders that use the Send read receipts for messages I send option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The following are valid values and descriptions for this parameter:

- $false IMAP4 users are sent a read receipt each time a recipient downloads a message. IMAP4 users are also sent a read receipt when the user opens the message.

- $true IMAP4 users that use the Send read receipts for messages I send option in their email client programs only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2016

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to IMAP4 clients that have the Send read receipts for messages I send setting configured in their IMAP4 email program. Valid values are:

- $true: The sender receives a read receipt only when the recipient opens the message.

- $false: The sender receives a read receipt when the recipient downloads the message, and when the recipient opens the message. This is the default value.



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

### -UnencryptedOrTLSBindings
!!! Exchange Server 2010

The UnencryptedOrTLSBindings parameter specifies the IP address and port number for communication over the TLS-encrypted connection or the connection that isn't encrypted. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>.



!!! Exchange Server 2013

The UnencryptedOrTLSBindings parameter specifies the IP address and port number for communication over the TLS-encrypted connection or the connection that isn't encrypted. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>. The default value is 0.0.0.0:143.



!!! Exchange Server 2016

The UnencryptedOrTLSBindings parameter specifies the IP address and TCP port that's used for unencrypted IMAP4 connections, or IMAP4 connections that are encrypted by using opportunistic TLS (STARTTLS) after the initial unencrypted protocol handshake. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:143,0.0.0.0:143.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



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

### -X509CertificateName
!!! Exchange Server 2010, Exchange Server 2013

The X509CertificateName parameter specifies the host name in the SSL certificate from the Associated Subject field. This is a multivalued property that contains both the IP address and the port setting. Enter a value using the format: \<IP address\>:\<Port number\>.



!!! Exchange Server 2016

The X509CertificateName parameter specifies the certificate that's used for encrypting IMAP4 client connections.

A valid value for this parameter is the FQDN from the ExternalConnectionSettings or InternalConnectionSettings parameters (for example, mail.contoso.com or mailbox01.contoso.com).

If you use a single subject certificate or a subject alternative name (SAN) certificate, you also need to assign the certificate to the Exchange IMAP service by using the Enable-ExchangeCertificate cmdlet.

If you use a wildcard certificate, you don't need to assign the certificate to the Exchange IMAP service.



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

[Online Version](https://technet.microsoft.com/library/58e51734-83bd-4e71-bd13-9960efaa80c3.aspx)

