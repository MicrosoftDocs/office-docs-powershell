---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-PopSettings

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-PopSettings cmdlet to set specific POP3 settings for the server running Microsoft Exchange Server 2010 that has the Client Access server role installed and that's running the Microsoft Exchange POP3 service.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-PopSettings cmdlet to set specific POP3 settings for the server running Microsoft Exchange Server 2013 that has the Client Access server role installed and that's running the Microsoft Exchange POP3 service.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-PopSettings cmdlet to modify the configuration of the Microsoft Exchange POP3 service. This service exists on Exchange servers that have the Client Access server role installed, and is used by POP3 clients to connect to Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-PopSettings [-AuthenticatedConnectionTimeout <EnhancedTimeSpan>] [-Banner <String>]
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
 [-MessageRetrievalSortOrder <Ascending | Descending>] [-OwaServerUrl <Uri>]
 [-PreAuthenticatedConnectionTimeout <EnhancedTimeSpan>] [-ProtocolLogEnabled <$true | $false>]
 [-ProxyTargetPort <Int32>] [-Server <ServerIdParameter>] [-SSLBindings <MultiValuedProperty>]
 [-SuppressReadReceipt <$true | $false>] [-UnencryptedOrTLSBindings <MultiValuedProperty>] [-WhatIf]
 [-X509CertificateName <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can run the Set-PopSettings cmdlet for a single Client Access server that has the Microsoft Exchange POP3 service installed, or for all Exchange Client Access servers that have the Microsoft Exchange POP3 service installed.

For more information, see Configure IP Addresses and Ports for POP3 and IMAP4 Access.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "POP3 settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can run the Set-PopSettings cmdlet for a single Client Access server that has the Microsoft Exchange POP3 service installed, or for all Exchange Client Access servers that have the Microsoft Exchange POP3 service installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "POP3 settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-PopSettings -Server "CAS01" -UnencryptedOrTLSBindings 10.0.0.0:993
```

This example sets the plain text or TLS connection to the Client Access server CAS01. In this example, the connection uses an IP address of 10.0.0.0 and a port number of 993.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-PopSettings -Server "CAS01" -UnencryptedOrTLSBindings 10.0.0.0:993
```

This example sets the plain text or TLS connection to the Client Access server CAS01. In this example, the connection uses an IP address of 10.0.0.0 and a port number of 993.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-PopSettings -Server "MBX01" -UnencryptedOrTLSBindings 10.0.0.0:110
```

This example configures the unencrypted or STARTTLS encrypted POP3 connection to the server named MBX01 by using the local IP address 10.0.0.0 on TCP port 110.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-PopSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Pop3Logging"
```

This example turns on POP3 protocol logging. It also changes the POP3 protocol logging directory to C:\\Pop3Logging.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-PopSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Pop3Logging"
```

This example turns on POP3 protocol logging. It also changes the POP3 protocol logging directory to C:\\Pop3Logging.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-PopSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Pop3Logging"
```

This example turns on POP3 protocol logging. It also changes the POP3 protocol logging directory to C:\\Pop3Logging.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-PopSettings -LogPerFileSizeQuota 2000000
```

This example changes the POP3 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-PopSettings -LogPerFileSizeQuota 2000000
```

This example changes the POP3 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-PopSettings -LogPerFileSizeQuota 2MB
```

This example changes the POP3 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 4 -------------------------- (Exchange Server 2010)
```
Set-PopSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the POP3 protocol logging to create a new log file every hour.

### Example 4 -------------------------- (Exchange Server 2013)
```
Set-PopSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the POP3 protocol logging to create a new log file every hour.

### Example 4 -------------------------- (Exchange Server 2016)
```
Set-PopSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the POP3 protocol logging to create a new log file every hour.

## PARAMETERS

### -AuthenticatedConnectionTimeout
!!! Exchange Server 2010

The AuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle authenticated connection. The default setting is 1800 seconds. The possible values are from 30 through 86400 seconds.



!!! Exchange Server 2013

The AuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle authenticated connection.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Valid input for this parameter is 00:00:30 to 1:00:00. The default setting is 00:30:00 or 30 minutes.



!!! Exchange Server 2016

The AuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle authenticated connection.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:30 to 1:00:00. The default value is 00:30:00 (30 minutes).



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

The Banner parameter specifies the text string that's displayed to connecting POP3 clients. The default value is: The Microsoft Exchange POP3 service is ready.



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

The CalendarItemRetrievalOption parameter specifies the type of calendar item returned when the calendar is accessed by using POP3. The following values are available:

- 0:iCalendar

- 1:intranetUrl

- 2:InternetUrl

- 3:Custom

If you're using 3:Custom, you must specify the OWAServerUrl parameter setting.



!!! Exchange Server 2013

The CalendarItemRetrievalOption parameter specifies the type of calendar item returned when the calendar is accessed by using POP3. The default value is iCalendar. You can specify the value for this parameter by using a numerical value or text string. The following values are available:

- 0 or iCalendar

- 1 or intranetUrl

- 2 or InternetUrl

- 3 or Custom

If you're using 3 or Custom, you must specify the OwaServerUrl parameter setting.



!!! Exchange Server 2016

The CalendarItemRetrievalOption parameter specifies how calendar items are presented to POP3 clients.. Valid values are:

- 0 or iCalendar. This is the default value.

- 1 or IntranetUrl.

- 2 or InternetUrl.

- 3 or Custom.

If you specify 3 or Custom, you need to specify a value for the OwaServerUrl parameter.



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

The EnableExactRFC822Size parameter specifies how message sizes are presented to POP3 clients. Valid values are:

- $true: Calculate the exact message size. Because this setting can negatively affect performance, you should configure it only if it's required by your POP3 clients.

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

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) by using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. By default, this parameter is set to $true. You can disable NTLM for POP3 connections by setting the value to $false. NTLM authentication is not supported for POP3 connections in Exchange 2010 RTM. Support for NTLM authentication for POP3 connections was brought back in Exchange 2010 SP1. For more information, see Discontinued Features.



!!! Exchange Server 2013

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) by using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. By default, this parameter is set to $true. You can disable NTLM for POP3 connections by setting the value to $false. NTLM authentication isn't supported for POP3 connections in Microsoft Exchange Server 2010 release to manufacturing (RTM). Support for NTLM authentication for POP3 connections was brought back in Exchange 2010 Service Pack 1 (SP1).



!!! Exchange Server 2016

The EnableGSSAPIAndNTLMAuth parameter specifies whether connections can use Integrated Windows authentication (NTLM) by using the Generic Security Services application programming interface (GSSAPI). This setting applies to connections where Transport Layer Security (TLS) is disabled. Valid values are:

- $true: NTLM for POP3 connections is enabled. This is the default value.

- $false: NTLM for POP3 connections is disabled.



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

The EnforceCertificateErrors parameter specifies whether to enforce Secure Sockets Layer (SSL) certificate validation failures. Valid values are:

- $true: If the certificate isn't valid or doesn't match the target POP3 server's FQDN, the connection attempt fails.

- $false: The server doesn't deny POP3 connections based on certificate errors. This is the default value.



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

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication for POP3 connections. By default, this parameter is set to None. The possible values are:

- None Extended Protection for Authentication won't be used.

- Allow Extended Protection for Authentication will be used only if the connecting POP3 connection supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require Extended Protection for Authentication will be required for all POP3 connections. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you're using Integrated Windows authentication. To use Extended Protection for Authentication, the client and server computers must meet the specific requirements. These include operating system requirements and security update requirements. In addition, the POP3 client program must support the use of Extended Protection for Authentication. For more information about Extended Protection for Authentication and the requirements to use it, see Understanding Extended Protection for Authentication.



!!! Exchange Server 2013

The ExtendedProtectionPolicy parameter specifies how you want to use Extended Protection for Authentication for POP3 connections. By default, this parameter is set to None. The possible values are:

- None Extended Protection for Authentication won't be used.

- Allow Extended Protection for Authentication will be used only if the connecting POP3 connection supports it. Otherwise, the connections will be established without Extended Protection for Authentication.

- Require Extended Protection for Authentication will be required for all POP3 connections. If the connecting host doesn't support Extended Protection for Authentication, the connection will be rejected.

Extended Protection for Authentication enhances the protection and handling of credentials when authenticating network connections using Integrated Windows authentication. Integrated Windows authentication is also known as NTLM. We strongly recommend that you use Extended Protection for Authentication if you're using Integrated Windows authentication. To use Extended Protection for Authentication, the client and server computers must meet the specific requirements. These include operating system requirements and security update requirements. In addition, the POP3 client program must support the use of Extended Protection for Authentication.



!!! Exchange Server 2016

The ExtendedProtectionPolicy parameter specifies how Extended Protection for Authentication is used for POP3 connections. Valid values are:

- None: Extended Protection for Authentication isn't used. This is the default value.

- Allow: Extended Protection for Authentication is used only if it's supported by the incoming POP3 connection. If it's not, Extended Protection for Authentication isn't used.

- Require: Extended Protection for Authentication is required for all POP3 connections. If the incoming POP3 connection doesn't support it, the connection is rejected.

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

The ExternalConnectionSettings parameter specifies the host name, port, and encryption type that Exchange uses when POP3 clients connect to their e-mail from outside your corporate network.

Enter a value using the format: \<HostName\>:\<Port\>:\<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS (Transport Layer Security) or SSL.



!!! Exchange Server 2013

The ExternalConnectionSettings parameter specifies the host name, port, and encryption type that Exchange uses when POP3 clients connect to their email from outside your corporate network.

Enter a value using the format: \<HostName\>:\<Port\>:\<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS or SSL.



!!! Exchange Server 2016

The ExternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by external POP3 clients (POP3 connections from outside your corporate network).

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is blank ($null), which means no external POP3 connection settings are configured.

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

The InternalConnectionSettings parameter specifies the host name, port, and encryption type used when POP3 clients connect to their e-mail from inside your corporate network. This setting is also used to specify the host name, port, and encryption type used when a user connection is forwarded to another Client Access server.

Enter a value using the format: \<HostName\>:\<Port\>: \<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS or SSL.



!!! Exchange Server 2013

The InternalConnectionSettings parameter specifies the host name, port, and encryption type used when POP3 clients connect to their email from inside your corporate network. This setting is also used to specify the host name, port, and encryption type used when a user connection is forwarded to another Client Access server.

Enter a value using the format: \<HostName\>:\<Port\>:\<Encryption Type\>. The \<Encryption Type\> part of the multivalued value is optional. Valid values for \<Encryption Type\> are either TLS or SSL. If your server name is Server01 and your domain is Contoso.com, the default value is Server01.Contoso.com:995:SSL, Server01.Contoso.com:110:TLS.



!!! Exchange Server 2016

The InternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by internal POP3 clients (POP3 connections from inside your corporate network). This setting is also used when a POP3 connection is forwarded to another Exchange server that's running the Microsoft Exchange POP3 service.

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is \<ServerFQDN\>:995:SSL,\<ServerFQDN\>:110:TLS.

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

The LogFileLocation parameter specifies the location for the POP3 protocol log files. By default, POP3 protocol log files are located in the C:\\Program Files\\Microsoft\\Exchange Server\\V14\\Logging\\Pop3 directory.



!!! Exchange Server 2013

The LogFileLocation parameter specifies the location for the POP3 protocol log files. By default, POP3 protocol log files are located in the C:\\Program Files\\Microsoft\\Exchange Server\\V15\\Logging\\Pop3 directory.



!!! Exchange Server 2016

The LogFileLocation parameter specifies the location for the POP3 protocol log files. The default location is%ExchangeInstallPath%Logging\\Pop3.

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

The LogFileRollOverSettings parameter defines how frequently POP3 protocol logging creates a new log file. By default, a new log file is created hourly. The possible values are:

- 1:Hourly

- 2:Daily

- 3:Weekly

- 4:Monthly

This setting only applies when the value for the LogPerFileSizeQuota parameter is set to 0.



!!! Exchange Server 2013

The LogFileRollOverSettings parameter defines how frequently POP3 protocol logging creates a new log file. By default, a new log file is created daily. You can specify the value for this parameter by using a numerical value or text string. The possible values are:

- 1 or Hourly

- 2 or Daily

- 3 or Weekly

- 4 or Monthly

This setting only applies when the value for the LogPerFileSizeQuota parameter is set to 0.



!!! Exchange Server 2016

The LogFileRollOverSettings parameter defines how frequently POP3 protocol logging creates a new log file. Valid values are:

- 1 or Hourly.

- 2 or Daily. This is the default value.

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

The LoginType parameter specifies the authentication setting used for the Client Access server running the Microsoft Exchange POP3 service. The possible values are:

- 1:PlainTextLogin

- 2:PlainTextAuthentication

- 3:SecureLogin



!!! Exchange Server 2013

The LoginType parameter specifies the authentication setting used for the Client Access server running the Microsoft Exchange POP3 service. You can specify the value for this parameter by using a numerical value or text string. The possible values are:

- 1 or PlainTextLogin

- 2 or PlainTextAuthentication

- 3 or SecureLogin

The default value is SecureLogin.



!!! Exchange Server 2016

The LoginType parameter specifies the authentication method for POP3 connections. Valid values are:

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
!!! Exchange Server 2010, Exchange Server 2013

The LogPerFileSizeQuota parameter defines the maximum size of a POP3 protocol log file in bytes. By default, this value is set to 0. When this value is set to 0, a new protocol log file is created at the frequency specified by the LogFileRollOverSettings parameter.



!!! Exchange Server 2016

The LogPerFileSizeQuota parameter specifies the maximum size of a POP3 protocol log file.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The default value is 0, which means a new POP3 protocol log file is created at the frequency that's specified by the LogFileRollOverSettings parameter.

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

The MaxCommandSize parameter specifies the maximum size of a single command. The default size is 512 bytes. The possible values are from 40 through 1024 bytes.



!!! Exchange Server 2016

The MaxCommandSize parameter specifies the maximum size in bytes of a single POP3 command. Valid values are from 40 through 1024. The default value is 512.



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

The MaxConnectionFromSingleIP parameter specifies the number of connections that the specified server accepts from a single IP address. The default value is 2000. The possible values are from 1 through 25000.



!!! Exchange Server 2013

The MaxConnectionFromSingleIP parameter specifies the number of connections that the specified server accepts from a single IP address. The default value is 2147483647. The possible values are from 1 through 2147483647.



!!! Exchange Server 2016

The MaxConnectionFromSingleIP parameter specifies the maximum number of POP3 connections that are accepted by the Exchange server from a single IP address. Valid values are from 1 through 2147483647. The default value is 2147483647.



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

The MaxConnections parameter specifies the maximum number of POP3 connections that are accepted by the Exchange server. Valid values are from 1 through 2147483647. The default value is 2147483647.



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

The MaxConnectionsPerUser parameter specifies the maximum number of POP3 connections that are allowed for each user. Valid values are from 1 through 2147483647. The default value is 16.



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

### -MessageRetrievalSortOrder
!!! Exchange Server 2010

The MessageRetrievalSortOrder parameter specifies the order in which the retrieved messages are sorted. This value can be either 0 (Ascending) or 1 (Descending).



!!! Exchange Server 2013

The MessageRetrievalSortOrder parameter specifies the order in which the retrieved messages are sorted. This value can be either 0 (Ascending) or 1 (Descending). The default value is Ascending.



!!! Exchange Server 2016

The MessageRetrievalSortOrder parameter specifies how retrieved messages are sorted. Valid values are:

- 0 or Ascending. This is the default value.

- 1 or Descending.



```yaml
Type: Ascending | Descending
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

The PreAuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle connection that isn't authenticated. The default setting is 60 seconds. The possible values are from 10 through 3600 seconds.



!!! Exchange Server 2013

The PreAuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle connection that isn't authenticated.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Valid input for this parameter is 00:00:30 to 1:00:00.The default value is 00:1:00 or one minute.



!!! Exchange Server 2016

The PreAuthenticatedConnectionTimeout parameter specifies the time to wait before closing an idle POP3 connection that isn't authenticated.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are from00:00:30 to 1:00:00. The default value is 00:01:00 (one minute).



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

The ProtocolLogEnabled parameter specifies whether to enable protocol logging. The default setting is $false. For more information, see Configure protocol logging for POP3 and IMAP4.



!!! Exchange Server 2016

The ProtocolLogEnabled parameter specifies whether to enable protocol logging for POP3. Valid values are:

- $true: POP3 protocol logging is enabled.

- $false: POP3 protocol logging is disabled. This is the default value.



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

The ProxyTargetPort parameter specifies the port on the Exchange Server 2003 back-end server to which the Microsoft Exchange POP3 service on a Client Access server relays commands.



!!! Exchange Server 2013

The ProxyTargetPort parameter specifies the port on the Exchange Server 2003 back-end server to which the Microsoft Exchange POP3 service on a Client Access server relays commands. The default port is 9955.



!!! Exchange Server 2016

The ProxyTargetPort parameter specifies the port on the Microsoft Exchange POP3 Backend service that listens for client connections that are proxied from the Microsoft Exchange POP3 service. The default value is 1995.



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

The Server parameter specifies an individual Client Access server in your organization for which you're specifying POP3 settings.



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

### -SSLBindings
!!! Exchange Server 2010

The SSLBindings parameter specifies whether the command sets the IP address and port number to use for an SSL session. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>.



!!! Exchange Server 2013

The SSLBindings parameter specifies whether the command sets the IP address and port number to use for an SSL session. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>.

The default value is 0.0.0.0:995.



!!! Exchange Server 2016

The SSLBindings parameter specifies the IP address and TCP port that's used for an POP3 connection that's always encrypted by SSL/TLS. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:995,0.0.0.0:995.

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

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to POP3 senders that are using the Send read receipts for messages I send option in their POP3 e-mail program. By default, this option is set to $false. By default, POP3 senders that use the Send read receipts for messages I send option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The valid values and descriptions for this parameter are:

- $false POP3 users are sent a read receipt each time a recipient downloads a message. POP3 users are also sent a read receipt when the user opens the message.

- $true POP3 users that use the Send read receipts for messages I send option in their e-mail client programs only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2013

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to POP3 senders that are using the Send read receipts for messages I send option in their POP3 email program. By default, this option is set to $false. By default, POP3 senders that use the Send read receipts for messages I send option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The valid values and descriptions for this parameter are:

- $false POP3 users are sent a read receipt each time a recipient downloads a message. POP3 users are also sent a read receipt when the user opens the message.

- $true POP3 users that use the Send read receipts for messages I send option in their email client programs only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2016

The SuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to POP3 clients that have the Send read receipts for messages I send setting configured in their POP3 email program. Valid values are:

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

The UnencryptedOrTLSBindings parameter specifies the IP address and port number for communication over the TLS-encrypted connection or the connection that isn't encrypted. This is a multivalued property. Enter a value using the format: \<IP address\>:\<Port number\>.

The default value is 0.0.0.0:110.



!!! Exchange Server 2016

The UnencryptedOrTLSBindings parameter specifies the IP address and TCP port that's used for unencrypted POP3 connections, or POP3 connections that are encrypted by using opportunistic TLS (STARTTLS) after the initial unencrypted protocol handshake. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:110, 0.0.0.0:110.

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
!!! Exchange Server 2010

The X509CertificateName parameter specifies the host name in the SSL certificate from the Associated Subject field. This is a multivalued property that contains both the IP address and the port setting. Enter a value using the format: \<IP address\>:\<Port number\>.



!!! Exchange Server 2013

The X509CertificateName parameter specifies the host name in the SSL certificate from the Associated Subject field.





!!! Exchange Server 2016

The X509CertificateName parameter specifies the certificate that's used for encrypting POP3 client connections.

A valid value for this parameter is the FQDN from the ExternalConnectionSettings or InternalConnectionSettings parameters (for example, mail.contoso.com or mailbox01.contoso.com).

If you use a single subject certificate or a subject alternative name (SAN) certificate, you also need to assign the certificate to the Exchange POP service by using the Enable-ExchangeCertificate cmdlet.

If you use a wildcard certificate, you don't need to assign the certificate to the Exchange POP service.



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

[Online Version](https://technet.microsoft.com/library/307a1dd0-3a4c-4431-bd9f-35aa5cb57aad.aspx)

