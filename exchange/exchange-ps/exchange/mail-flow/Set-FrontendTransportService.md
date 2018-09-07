---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Set-FrontendTransportService
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-FrontendTransportService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-FrontEndTransportService cmdlet to set the transport configuration options for the Front End Transport service on Mailbox servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-FrontendTransportService [-Identity] <FrontendTransportServerIdParameter>
 [-AgentLogEnabled <$true | $false>] [-AgentLogMaxAge <EnhancedTimeSpan>]
 [-AgentLogMaxDirectorySize <Unlimited>] [-AgentLogMaxFileSize <Unlimited>] [-AgentLogPath <LocalLongFullPath>]
 [-AntispamAgentsEnabled <$true | $false>] [-Confirm] [-ConnectivityLogEnabled <$true | $false>]
 [-ConnectivityLogMaxAge <EnhancedTimeSpan>] [-ConnectivityLogMaxDirectorySize <Unlimited>]
 [-ConnectivityLogMaxFileSize <Unlimited>] [-ConnectivityLogPath <LocalLongFullPath>]
 [-DnsLogEnabled <$true | $false>] [-DnsLogMaxAge <EnhancedTimeSpan>] [-DnsLogMaxDirectorySize <Unlimited>]
 [-DnsLogMaxFileSize <Unlimited>] [-DnsLogPath <LocalLongFullPath>] [-DomainController <Fqdn>]
 [-ExternalDNSAdapterEnabled <$true | $false>] [-ExternalDNSAdapterGuid <Guid>]
 [-ExternalDNSProtocolOption <Any | UseUdpOnly | UseTcpOnly>] [-ExternalDNSServers <MultiValuedProperty>]
 [-ExternalIPAddress <IPAddress>] [-InternalDNSAdapterEnabled <$true | $false>]
 [-InternalDNSAdapterGuid <Guid>] [-InternalDNSProtocolOption <Any | UseUdpOnly | UseTcpOnly>]
 [-InternalDNSServers <MultiValuedProperty>] [-IntraOrgConnectorProtocolLoggingLevel <None | Verbose>]
 [-MaxConnectionRatePerMinute <Int32>] [-ReceiveProtocolLogMaxAge <EnhancedTimeSpan>]
 [-ReceiveProtocolLogMaxDirectorySize <Unlimited>] [-ReceiveProtocolLogMaxFileSize <Unlimited>]
 [-ReceiveProtocolLogPath <LocalLongFullPath>] [-ResourceLogEnabled <$true | $false>]
 [-ResourceLogMaxAge <EnhancedTimeSpan>] [-ResourceLogMaxDirectorySize <Unlimited>]
 [-ResourceLogMaxFileSize <Unlimited>] [-ResourceLogPath <LocalLongFullPath>]
 [-SendProtocolLogMaxAge <EnhancedTimeSpan>] [-SendProtocolLogMaxDirectorySize <Unlimited>]
 [-SendProtocolLogMaxFileSize <Unlimited>] [-SendProtocolLogPath <LocalLongFullPath>]
 [-TransientFailureRetryCount <Int32>] [-TransientFailureRetryInterval <EnhancedTimeSpan>] [-WhatIf]
 [-RoutingTableLogMaxAge <EnhancedTimeSpan>] [-RoutingTableLogMaxDirectorySize <Unlimited>]
 [-RoutingTableLogPath <LocalLongFullPath>] [<CommonParameters>]
```

## DESCRIPTION
The Front End Transport service runs on all Mailbox servers and acts as a stateless proxy for all inbound and outbound external SMTP traffic for the Exchange organization. The Front End Transport service only communicates with the Transport service on a Mailbox server, and doesn't queue any messages locally.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-FrontEndTransportService MBX01 -TransientFailureRetryCount 3 -TransientFailureRetryInterval 00:00:30
```

This example sets the TransientFailureRetryCount parameter to 3 and sets the TransientFailureRetryInterval parameter to 30 seconds for the Front End Transport service on the Mailbox server named MBX01.

### -------------------------- Example 2 --------------------------
```
Set-FrontEndTransportService MBX01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\SMTP Protocol Logs\Receive.log for the Front End Transport service on the Mailbox server named MBX01.

## PARAMETERS

### -Identity
The Identity parameter specifies the server that you want to modify.

```yaml
Type: FrontendTransportServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AgentLogEnabled
The AgentLogEnabled parameter specifies whether the agent log is enabled. The default value is $true.

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

### -AgentLogMaxAge
The AgentLogMaxAge parameter specifies the maximum age for the agent log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the AgentLogMaxAge parameter to 00:00:00 prevents the automatic removal of agent log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentLogMaxDirectorySize
The AgentLogMaxDirectorySize parameter specifies the maximum size of all agent logs in the agent log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentLogMaxFileSize
The AgentLogMaxFileSize parameter specifies the maximum size of each agent log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log files.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentLogPath
The AgentLogPath parameter specifies the default agent log directory location. The default location is %ExchangeInstallPath%TransportRoles\Logs\FrontEnd\AgentLog. Setting the value of this parameter to $null disables agent logging. However, setting this parameter to $null when the value of the AgentLogEnabled attribute is $true generates event log errors.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntispamAgentsEnabled
The AntispamAgentsEnabled parameter specifies whether anti-spam agents are installed on the server specified with the Identity parameter. The default value is $false for the Front End Transport service.

You set this parameter by using a script. You shouldn't modify this parameter manually.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogEnabled
The ConnectivityLogEnabled parameter specifies whether the connectivity log is enabled. The default value is $true.

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

### -ConnectivityLogMaxAge
The ConnectivityLogMaxAge parameter specifies the maximum age for the connectivity log file. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ConnectivityLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogMaxDirectorySize
The ConnectivityLogMaxDirectorySize parameter specifies the maximum size of all connectivity logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogMaxFileSize
The ConnectivityLogMaxFileSize parameter specifies the maximum size of each connectivity log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log files.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogPath
The ConnectivityLogPath parameter specifies the default connectivity log directory location. The default location is %ExchangeInstallPath%TransportRoles\Logs\FrontEnd\Connectivity. Setting the value of this parameter to $null disables connectivity logging. However, setting this parameter to $null when the value of the ConnectivityLogEnabled attribute is $true generates event log errors.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsLogEnabled
The DnsLogEnabled parameter specifies whether the DNS log is enabled. The default value is $false.

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

### -DnsLogMaxAge
The DnsLogMaxAge parameter specifies the maximum age for the DNS log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the DnsLogMaxAge parameter to 00:00:00 prevents the automatic removal of DNS log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsLogMaxDirectorySize
The DnsLogMaxDirectorySize parameter specifies the maximum size of all DNS logs in the DNS log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 100 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsLogMaxFileSize
The DnsLogMaxFileSize parameter specifies the maximum size of each DNS log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log files.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsLogPath
The DnsLogPath parameter specifies the DNS log directory location. The default value is blank ($null), which indicates no location is configured. If you enable DNS logging, you need to specify a local file path for the DNS log files by using this parameter. If the path contains spaces, enclose the entire path value in quotation marks (").

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSAdapterEnabled
The ExternalDNSAdapterEnabled parameter specifies one or more Domain Name System (DNS) servers that Exchange uses for external DNS lookups. When the ExternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations outside the Exchange organization are performed by using the DNS settings of the external network adapter specified by the value of the ExternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for external Exchange DNS lookups only, you must specify the DNS servers by using the ExternalDNSServers parameter, and you must also set the value of the ExternalDNSAdapterEnabled parameter to $false. The default value of the ExternalDNSAdapterEnabled parameter is $true.

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

### -ExternalDNSAdapterGuid
The ExternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of destinations that exist outside the Exchange organization. The concept of an external network adapter and an internal network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and external DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for external DNS lookups. The default value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the ExternalDNSAdapterEnabled parameter is set to $false, the value of the ExternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the ExternalDNSServers parameter is used.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSProtocolOption
The ExternalDNSProtocolOption parameter specifies which protocol to use when querying external DNS servers. The valid options for this parameter are Any, UseTcpOnly, and UseUdpOnly. The default value is Any.

```yaml
Type: Any | UseUdpOnly | UseTcpOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSServers
The ExternalDNSServers parameter specifies the list of external DNS servers that the server queries when resolving a remote domain. You must separate IP addresses by using commas. The default value is an empty list ({}).

If the value of the ExternalDNSAdapterEnabled parameter is set to $true, the ExternalDNSServers parameter and its list of DNS servers isn't used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalIPAddress
The ExternalIPAddress parameter specifies the IP address used in the Received message header field for every message that travels through the Front End Transport service. The IP address in the Received header field is used for hop count and routing loop detection. The IP address specified by the ExternalIPAddress parameter overrides the external network adapter's actual IP address. Typically, you would want to set the value of the ExternalIPAddress parameter to match the value of your domain's public MX record. The default value of the ExternalIPAddress parameter is blank. This means the actual IP address of the external network adapter is used in the Received header field.

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSAdapterEnabled
The InternalDNSAdapterEnabled parameter specifies one or more DNS servers that Exchange uses for internal DNS lookups. When the InternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations inside the Exchange organization are performed by using the DNS settings of the internal network adapter specified by the value of the InternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for internal Exchange DNS lookups only, you must specify the DNS servers by using the InternalDNSServers parameter, and you must also set the value of the InternalDNSAdapterEnabled parameter to $false. The default value of the InternalDNSAdapterEnabled parameter is $true.

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

### -InternalDNSAdapterGuid
The InternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of servers that exist inside the Exchange organization. The concept of an internal network adapter and an external network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and internal DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for internal DNS lookups. The default value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the InternalDNSAdapterEnabled parameter is set to $false, the value of the InternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the InternalDNSServers parameter is used.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSProtocolOption
The InternalDNSProtocolOption parameter specifies which protocol to use when you query internal DNS servers. Valid options for this parameter are Any, UseTcpOnly, or UseUdpOnly.

The default value is Any.

```yaml
Type: Any | UseUdpOnly | UseTcpOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSServers
The InternalDNSServers parameter specifies the list of DNS servers that should be used when resolving a domain name. DNS servers are specified by IP address and are separated by commas. The default value is any empty list ({}).

If the InternalDNSAdapterGuid parameter is set, and the value of the InternalDNSAdapterEnabled parameter is set to $true, the InternalDNSServers parameter and its list of DNS servers isn't used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntraOrgConnectorProtocolLoggingLevel
The IntraOrgConnectorProtocolLoggingLevel parameter enables or disables SMTP protocol logging on the implicit and invisible intra-organization Send connector In the Front End Transport servicee. Valid values are:

- None: Protocol logging is disabled for the intra-organization Send connector in the Front End Transport service.

- Verbose: Protocol logging is enabled for the intra-organization Send connector in the Front End Transport service. This is the default value. The location of the log files is controlled by the SendProtocolLogPath parameter.

```yaml
Type: None | Verbose
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConnectionRatePerMinute
The MaxConnectionRatePerMinute parameter specifies the maximum rate that connections are allowed to be opened with the transport service. If many connections are attempted with the transport service at the same time, the MaxConnectionRatePerMinute parameter limits the rate that the connections are opened so that the server's resources aren't overwhelmed. The default value is 1200 connections per minute. The valid input range for this parameter is from 1 through 2147483647.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiveProtocolLogMaxAge
The ReceiveProtocolLogMaxAge parameter specifies the maximum age of a protocol log file that's shared by all Receive connectors in the Transport service on the server. Log files that are older than the specified value are automaticallydeleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days). The value 00:00:00 prevents the automatic removal of Receive connector protocol log files in the Front End Transport service because of their age.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Front End Transport service on the server.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiveProtocolLogMaxDirectorySize
The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory that's shared by all Receive connectors in the Front End Transport service on the server. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be greater than or equal to the value of the ReceiveProtocolLogMaxFileSize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Front End Transport service on the server.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiveProtocolLogMaxFileSize
The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file that's shared by all Receive connectors in the Front End Transport service on the server. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Front End Transport service on the server.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiveProtocolLogPath
The ReceiveProtocolLogPath parameter specifies the location of the protocol log directory for all Receive connectors in the Front End Transport service on the server. The default location is %ExchangeInstallPath%TransportRoles\Logs\FrontEnd\ProtocolLog\SmtpReceive.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for any Receive connector in the Front End Transport service. To disable protocol logging for Receive connectors, use the value None for the ProtocolLoggingLevel parameter on the Set-ReceiveConnector cmdlet for each Receive connector in the Front End Transport service.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceLogEnabled
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

### -ResourceLogMaxAge
This parameter is reserved for internal Microsoft use.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceLogMaxDirectorySize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceLogMaxFileSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceLogPath
This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogMaxAge
The SendProtocolLogMaxAge parameter specifies the maximum age of a protocol log file that's shared by all Send connectors in the Front End Transport service that have this server configured as a source server. Log files that are older than the specified value are deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days). The value 00:00:00 prevents the automatic removal of Send connector protocol log files in the Front End Transport service because of their age.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Front End Transport service on the server.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogMaxDirectorySize
The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory that's shared by all Send connectors in the Front End Transport service that have this server configured as a source server. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be greater than or equal to the value of the SendProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Front End Transport service on the server.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogMaxFileSize
The SendProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file that's shared by all the Send connectors in the Front End Transport service that have this server configured as a source server. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Front End Transport service on the server.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogPath
The SendProtocolLogPath parameter specifies the location of the protocol log directory for all Send connectors in the Front End Transport service that have this server configured as a source server. The default location is %ExchangeInstallPath%TransportRoles\Logs\FrontEnd\ProtocolLog\SmtpSend.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for any Send connector in the Front End Transport service that has this server configured as a source server. To disable protocol logging for these Send connectors, use the value None for the following parameters:

- The IntraOrgConnectorProtocolLoggingLevel parameter.

- The ProtocolLoggingLevel parameter on the Set-SendConnector cmdlet for each Send connector in the Front End Transport service.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransientFailureRetryCount
The TransientFailureRetryCount parameter specifies the maximum number of immediate connection retries attempted when the server encounters a connection failure with a remote server. The default value is 6. The valid input range for this parameter is from 0 through 15. When the value of this parameter is set to 0, the server doesn't immediately attempt to retry an unsuccessful connection.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransientFailureRetryInterval
The TransientFailureRetryInterval parameter controls the connection interval between each connection attempt specified by the TransientFailureRetryCount parameter. For the Front End Transport service, the default value of the TransientFailureRetryInterval parameter is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 8 minutes for this parameter, use 00:08:00. The valid input range for this parameter is from 00:00:01 through 12:00:00.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingTableLogMaxAge
The RoutingTableLogMaxAge parameter specifies the maximum routing table log age. Log files older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 5 days for this parameter, use 5.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting this parameter to 00:00:00 prevents the automatic removal of routing table log files because of their age.

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

### -RoutingTableLogMaxDirectorySize
The RoutingTableLogMaxDirectorySize parameter specifies the maximum size of the routing table log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the routing table log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingTableLogPath
The RoutingTableLogPath parameter specifies the directory location where routing table log files should be stored. The default location is %ExchangeInstallPath%TransportRoles\Logs\FrontEnd\Routing. Setting this parameter to $null disables routing table logging.

```yaml
Type: LocalLongFullPath
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/593be8fd-ae2d-4cd2-a98a-88c2e8c36ddd.aspx)
