---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-PopSettings
schema: 2.0.0
---

# Set-PopSettings

## SYNOPSIS
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
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-PopSettings -Server "MBX01" -UnencryptedOrTLSBindings 10.0.0.0:110
```

This example configures the unencrypted or STARTTLS encrypted POP3 connection to the server named MBX01 by using the local IP address 10.0.0.0 on TCP port 110.

### Example 2
```
Set-PopSettings -ProtocolLogEnabled $true -LogFileLocation "C:\Pop3Logging"
```

This example turns on POP3 protocol logging. It also changes the POP3 protocol logging directory to C:\\Pop3Logging.

### Example 3
```
Set-PopSettings -LogPerFileSizeQuota 2MB
```

This example changes the POP3 protocol logging to create a new log file when a log file reaches 2 megabytes (MB).

### Example 4
```
Set-PopSettings -LogPerFileSizeQuota 0 -LogFileRollOverSettings Hourly
```

This example changes the POP3 protocol logging to create a new log file every hour.

## PARAMETERS

### -AuthenticatedConnectionTimeout
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
The ExternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by external POP3 clients (POP3 connections from outside your corporate network).

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is blank ($null), which means no external POP3 connection settings are configured.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

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
The InternalConnectionSettings parameter specifies the host name, port, and encryption method that's used by internal POP3 clients (POP3 connections from inside your corporate network). This setting is also used when a POP3 connection is forwarded to another Exchange server that's running the Microsoft Exchange POP3 service.

This parameter uses the syntax \<HostName\>:\<Port\>:[\<TLS | SSL\>]. The encryption method value is optional (blank indicates unencrypted connections).

The default value is \<ServerFQDN\>:995:SSL,\<ServerFQDN\>:110:TLS.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

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
The SSLBindings parameter specifies the IP address and TCP port that's used for an POP3 connection that's always encrypted by SSL/TLS. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:995,0.0.0.0:995.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

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
The UnencryptedOrTLSBindings parameter specifies the IP address and TCP port that's used for unencrypted POP3 connections, or POP3 connections that are encrypted by using opportunistic TLS (STARTTLS) after the initial unencrypted protocol handshake. This parameter uses the syntax \<IPv4OrIPv6Address\>:\<Port\>.

The default value is [::]:110, 0.0.0.0:110.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

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
