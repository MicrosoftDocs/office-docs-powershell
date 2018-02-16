---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-TransportServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-TransportServer cmdlet to set the transport configuration options for computers running Microsoft Exchange Server 2010 that have the Hub Transport server role or Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-TransportServer cmdlet to set the transport configuration options for the Transport service on Mailbox servers or for Edge Transport servers.

## SYNTAX

```
Set-TransportServer [-Identity] <ServerIdParameter> [-ActiveUserStatisticsLogMaxAge <EnhancedTimeSpan>]
 [-ActiveUserStatisticsLogMaxDirectorySize <ByteQuantifiedSize>]
 [-ActiveUserStatisticsLogMaxFileSize <ByteQuantifiedSize>] [-ActiveUserStatisticsLogPath <LocalLongFullPath>]
 [-AntispamAgentsEnabled <$true | $false>] [-Confirm] [-ConnectivityLogEnabled <$true | $false>]
 [-ConnectivityLogMaxAge <EnhancedTimeSpan>] [-ConnectivityLogMaxDirectorySize <Unlimited>]
 [-ConnectivityLogMaxFileSize <Unlimited>] [-ConnectivityLogPath <LocalLongFullPath>]
 [-ContentConversionTracingEnabled <$true | $false>] [-DelayNotificationTimeout <EnhancedTimeSpan>]
 [-DeltaSyncClientCertificateThumbprint <String>] [-DomainController <Fqdn>]
 [-ExternalDNSAdapterEnabled <$true | $false>] [-ExternalDNSAdapterGuid <Guid>]
 [-ExternalDNSProtocolOption <Any | UseUdpOnly | UseTcpOnly>] [-ExternalDNSServers <MultiValuedProperty>]
 [-ExternalIPAddress <IPAddress>] [-HttpProtocolLogEnabled <$true | $false>]
 [-HttpProtocolLogFilePath <LocalLongFullPath>] [-HttpProtocolLogLoggingLevel <None | Verbose>]
 [-HttpProtocolLogMaxAge <EnhancedTimeSpan>] [-HttpProtocolLogMaxDirectorySize <ByteQuantifiedSize>]
 [-HttpProtocolLogMaxFileSize <ByteQuantifiedSize>] [-HttpTransportSyncProxyServer <String>]
 [-InternalDNSAdapterEnabled <$true | $false>] [-InternalDNSAdapterGuid <Guid>]
 [-InternalDNSProtocolOption <Any | UseUdpOnly | UseTcpOnly>] [-InternalDNSServers <MultiValuedProperty>]
 [-IntraOrgConnectorProtocolLoggingLevel <None | Verbose>]
 [-IntraOrgConnectorSmtpMaxMessagesPerConnection <Int32>] [-IrmLogEnabled <$true | $false>]
 [-IrmLogMaxAge <EnhancedTimeSpan>] [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>] [-IrmLogPath <LocalLongFullPath>]
 [-MaxActiveTransportSyncJobsPerProcessor <Int32>] [-MaxConcurrentMailboxDeliveries <Int32>]
 [-MaxConcurrentMailboxSubmissions <Int32>] [-MaxConnectionRatePerMinute <Int32>]
 [-MaxNumberOfTransportSyncAttempts <Int32>] [-MaxOutboundConnections <Unlimited>]
 [-MaxPerDomainOutboundConnections <Unlimited>] [-MessageExpirationTimeout <EnhancedTimeSpan>]
 [-MessageRetryInterval <EnhancedTimeSpan>] [-MessageTrackingLogEnabled <$true | $false>]
 [-MessageTrackingLogMaxAge <EnhancedTimeSpan>] [-MessageTrackingLogMaxDirectorySize <Unlimited>]
 [-MessageTrackingLogMaxFileSize <ByteQuantifiedSize>] [-MessageTrackingLogPath <LocalLongFullPath>]
 [-MessageTrackingLogSubjectLoggingEnabled <$true | $false>]
 [-OutboundConnectionFailureRetryInterval <EnhancedTimeSpan>]
 [-PickupDirectoryMaxHeaderSize <ByteQuantifiedSize>] [-PickupDirectoryMaxMessagesPerMinute <Int32>]
 [-PickupDirectoryMaxRecipientsPerMessage <Int32>] [-PickupDirectoryPath <LocalLongFullPath>]
 [-PipelineTracingEnabled <$true | $false>] [-PipelineTracingPath <LocalLongFullPath>]
 [-PipelineTracingSenderAddress <SmtpAddress>] [-PoisonMessageDetectionEnabled <$true | $false>]
 [-PoisonThreshold <Int32>] [-QueueMaxIdleTime <EnhancedTimeSpan>]
 [-ReceiveProtocolLogMaxAge <EnhancedTimeSpan>] [-ReceiveProtocolLogMaxDirectorySize <Unlimited>]
 [-ReceiveProtocolLogMaxFileSize <Unlimited>] [-ReceiveProtocolLogPath <LocalLongFullPath>]
 [-RecipientValidationCacheEnabled <$true | $false>] [-ReplayDirectoryPath <LocalLongFullPath>]
 [-RootDropDirectoryPath <String>] [-RoutingTableLogMaxAge <EnhancedTimeSpan>]
 [-RoutingTableLogMaxDirectorySize <Unlimited>] [-RoutingTableLogPath <LocalLongFullPath>]
 [-SendProtocolLogMaxAge <EnhancedTimeSpan>] [-SendProtocolLogMaxDirectorySize <Unlimited>]
 [-SendProtocolLogMaxFileSize <Unlimited>] [-SendProtocolLogPath <LocalLongFullPath>]
 [-ServerStatisticsLogMaxAge <EnhancedTimeSpan>] [-ServerStatisticsLogMaxDirectorySize <ByteQuantifiedSize>]
 [-ServerStatisticsLogMaxFileSize <ByteQuantifiedSize>] [-ServerStatisticsLogPath <LocalLongFullPath>]
 [-TransientFailureRetryCount <Int32>] [-TransientFailureRetryInterval <EnhancedTimeSpan>]
 [-TransportSyncAccountsPoisonAccountThreshold <Int32>]
 [-TransportSyncAccountsPoisonDetectionEnabled <$true | $false>]
 [-TransportSyncAccountsPoisonItemThreshold <Int32>]
 [-TransportSyncAccountsSuccessivePoisonItemThreshold <Int32>] [-TransportSyncEnabled <$true | $false>]
 [-TransportSyncExchangeEnabled <$true | $false>] [-TransportSyncHubHealthLogEnabled <$true | $false>]
 [-TransportSyncHubHealthLogFilePath <LocalLongFullPath>] [-TransportSyncHubHealthLogMaxAge <EnhancedTimeSpan>]
 [-TransportSyncHubHealthLogMaxDirectorySize <ByteQuantifiedSize>]
 [-TransportSyncHubHealthLogMaxFileSize <ByteQuantifiedSize>] [-TransportSyncImapEnabled <$true | $false>]
 [-TransportSyncLogEnabled <$true | $false>] [-TransportSyncLogFilePath <LocalLongFullPath>]
 [-TransportSyncLogLoggingLevel <None | Error | Information | Verbose | RawData | Debugging>]
 [-TransportSyncLogMaxAge <EnhancedTimeSpan>] [-TransportSyncLogMaxDirectorySize <ByteQuantifiedSize>]
 [-TransportSyncLogMaxFileSize <ByteQuantifiedSize>] [-TransportSyncMaxDownloadItemsPerConnection <Int32>]
 [-TransportSyncMaxDownloadSizePerConnection <ByteQuantifiedSize>]
 [-TransportSyncMaxDownloadSizePerItem <ByteQuantifiedSize>] [-TransportSyncPopEnabled <$true | $false>]
 [-TransportSyncRemoteConnectionTimeout <EnhancedTimeSpan>] [-UseDowngradedExchangeServerAuth <$true | $false>]
 [-WhatIf] [-WindowsLiveContactTransportSyncEnabled <$true | $false>]
 [-WindowsLiveHotmailTransportSyncEnabled <$true | $false>] [-AgentLogEnabled <$true | $false>]
 [-AgentLogMaxAge <EnhancedTimeSpan>] [-AgentLogMaxDirectorySize <Unlimited>]
 [-AgentLogMaxFileSize <Unlimited>] [-AgentLogPath <LocalLongFullPath>] [-DnsLogEnabled <$true | $false>]
 [-DnsLogMaxAge <EnhancedTimeSpan>] [-DnsLogMaxDirectorySize <Unlimited>] [-DnsLogMaxFileSize <Unlimited>]
 [-DnsLogPath <LocalLongFullPath>] [-QueueLogMaxAge <EnhancedTimeSpan>] [-QueueLogMaxDirectorySize <Unlimited>]
 [-QueueLogMaxFileSize <Unlimited>] [-QueueLogPath <LocalLongFullPath>] [-WlmLogMaxAge <EnhancedTimeSpan>]
 [-WlmLogMaxDirectorySize <Unlimited>] [-WlmLogMaxFileSize <Unlimited>] [-WlmLogPath <LocalLongFullPath>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Hub Transport server" and "Edge Transport server" entries in the Transport Permissions topic.

!!! Exchange Server 2013

The Set-TransportServer cmdlet will be removed in a future version of Exchange. You should use the Set-TransportService cmdlet instead.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport service" and "Edge Transport server" entries in the Mail flow permissions topic.

!!! Exchange Server 2016

The Set-TransportServer cmdlet will be removed in a future version of Exchange. You should use the Set-TransportService cmdlet instead.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-TransportServer -Identity Hub01 -DelayNotificationTimeout 13:00:00
```

This example sets the DelayNotificationTimeout parameter to 13 hours on server Hub01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-TransportServer Mailbox01 -DelayNotificationTimeout 13:00:00
```

This example sets the DelayNotificationTimeout parameter to 13 hours on server named Mailbox01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-TransportServer Mailbox01 -DelayNotificationTimeout 13:00:00
```

This example sets the DelayNotificationTimeout parameter to 13 hours on server named Mailbox01.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-TransportServer -Identity Hub01 -TransientFailureRetryCount 3 -TransientFailureRetryInterval 00:00:30
```

This example sets the TransientFailureRetryCount parameter to 3 and sets the TransientFailureRetryInterval parameter to 30 seconds on server Hub01.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-TransportServer Mailbox01 -TransientFailureRetryCount 3 -TransientFailureRetryInterval 00:00:30
```

This example sets the TransientFailureRetryCount parameter to 3 and sets the TransientFailureRetryInterval parameter to 30 seconds on server named Mailbox01.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-TransportServer Mailbox01 -TransientFailureRetryCount 3 -TransientFailureRetryInterval 00:00:30
```

This example sets the TransientFailureRetryCount parameter to 3 and sets the TransientFailureRetryInterval parameter to 30 seconds on server named Mailbox01.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-TransportServer -Identity Hub01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\\SMTP Protocol Logs\\Receive.log on server Hub01.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-TransportServer Mailbox01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\\SMTP Protocol Logs\\Receive.log on server Mailbox01.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-TransportServer Mailbox01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\\SMTP Protocol Logs\\Receive.log on server Mailbox01.

## PARAMETERS

### -Identity
The Identity parameter specifies the server that you want to modify.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveUserStatisticsLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The ActiveUserStatisticsLogMaxAge parameter specifies the maximum duration that the per user activity statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.



!!! Exchange Server 2016

The ActiveUserStatisticsLogMaxAge parameter specifies the maximum duration that the per user activity statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.



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

### -ActiveUserStatisticsLogMaxDirectorySize
!!! Exchange Server 2010

The ActiveUserStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the per user activity statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 megabyte (MB). The default value is 250 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.



!!! Exchange Server 2013

The ActiveUserStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the per user activity statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 megabyte (MB). The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.



!!! Exchange Server 2016

The ActiveUserStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the per user activity statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 megabyte (MB). The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.



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

### -ActiveUserStatisticsLogMaxFileSize
!!! Exchange Server 2010

The ActiveUserStatisticsLogMaxFileSize parameter specifies the maximum file size for the per user activity statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.



!!! Exchange Server 2013

The ActiveUserStatisticsLogMaxFileSize parameter specifies the maximum file size for the per user activity statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.



!!! Exchange Server 2016

The ActiveUserStatisticsLogMaxFileSize parameter specifies the maximum file size for the per user activity statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.



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

### -ActiveUserStatisticsLogPath
!!! Exchange Server 2010

The ActiveUserStatisticsLogPath parameter specifies the location of per user activity statistics log storage. Setting the value of this parameter to $null disables server statistics logging.



!!! Exchange Server 2013, Exchange Server 2016

The ActiveUserStatisticsLogPath parameter specifies the location of per user activity statistics log storage. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ActiveUsersStats. Setting the value of this parameter to $null disables server statistics logging.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntispamAgentsEnabled
!!! Exchange Server 2010

The AntispamAgentsEnabled parameter specifies whether anti-spam agents are installed on the server specified with the Identity parameter. The default value is $false on Hub Transport servers and $true on Edge Transport servers.

You set this parameter by using a script. You shouldn't modify this parameter manually.



!!! Exchange Server 2013, Exchange Server 2016

The AntispamAgentsEnabled parameter specifies whether anti-spam agents are installed on the server specified with the Identity parameter. The default value is $false for the Transport service on Mailbox servers and $true on Edge servers.

You set this parameter by using a script. You shouldn't modify this parameter manually.



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

### -ConnectivityLogEnabled
!!! Exchange Server 2010

The ConnectivityLogEnabled parameter specifies whether the connectivity log is enabled. The default value is $false.



!!! Exchange Server 2013, Exchange Server 2016

The ConnectivityLogEnabled parameter specifies whether the connectivity log is enabled. The default value is $true.



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

### -ConnectivityLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The ConnectivityLogMaxAge parameter specifies the maximum age for the connectivity log file. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ConnectivityLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.



!!! Exchange Server 2016

The ConnectivityLogMaxAge parameter specifies the maximum age for the connectivity log file. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ConnectivityLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.



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

### -ConnectivityLogMaxDirectorySize
!!! Exchange Server 2010

The ConnectivityLogMaxDirectorySize parameter specifies the maximum size of all connectivity logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.



!!! Exchange Server 2013

The ConnectivityLogMaxDirectorySize parameter specifies the maximum size of all connectivity logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.



!!! Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogMaxFileSize
!!! Exchange Server 2010

The ConnectivityLogMaxFileSize parameter specifies the maximum size of each connectivity log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log files.



!!! Exchange Server 2013

The ConnectivityLogMaxFileSize parameter specifies the maximum size of each connectivity log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log files.



!!! Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectivityLogPath
!!! Exchange Server 2010

The ConnectivityLogPath parameter specifies the default connectivity log directory location. The default value is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\Connectivity. Setting the value of this parameter to $null disables connectivity logging. However, setting this parameter to $null when the value of the ConnectivityLogEnabled attribute is $true generates event log errors.



!!! Exchange Server 2013, Exchange Server 2016

The ConnectivityLogPath parameter specifies the default connectivity log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\Connectivity. Setting the value of this parameter to $null disables connectivity logging. However, setting this parameter to $null when the value of the ConnectivityLogEnabled attribute is $true generates event log errors.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentConversionTracingEnabled
!!! Exchange Server 2010

The ContentConversionTracingEnabled parameter specifies whether content conversion tracing is enabled. Content conversion tracing captures content conversion failures that occur on the Hub Transport server or the Edge Transport server. The default value is $false. Content conversion tracing captures a maximum of 128 MB of content conversion failures. When the 128 MB limit is reached, no more content conversion failures are captured. Content conversion tracing captures the complete contents of e-mail messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control



!!! Exchange Server 2013, Exchange Server 2016

The ContentConversionTracingEnabled parameter specifies whether content conversion tracing is enabled. Content conversion tracing captures content conversion failures that occur in the Transport service on a Mailbox server or on the Edge server. The default value is $false. Content conversion tracing captures a maximum of 128 MB of content conversion failures. When the 128 MB limit is reached, no more content conversion failures are captured. Content conversion tracing captures the complete contents of e-mail messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control



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

### -DelayNotificationTimeout
!!! Exchange Server 2010, Exchange Server 2013

The DelayNotificationTimeout parameter specifies how long the server waits before it generates a delayed delivery status notification (DSN) message. The default value is 4 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 3.5 hours for this parameter, use 03:30:00. The valid input range for this parameter is from 00:00:01 through 30.00:00:00. The value of the DelayNotificationTimeout parameter should always be greater than the value of the TransientFailureRetryCount parameter multiplied by the value of the TransientFailureRetryInterval parameter.



!!! Exchange Server 2016

The DelayNotificationTimeout parameter specifies how long the server waits before it generates a delayed delivery status notification (DSN) message. The default value is 4 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 3.5 hours for this parameter, use 03:30:00. The valid input range for this parameter is from 00:00:01 through 30.00:00:00. The value of the DelayNotificationTimeout parameter should always be greater than the value of the TransientFailureRetryCount parameter multiplied by the value of the TransientFailureRetryInterval parameter.



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

### -DeltaSyncClientCertificateThumbprint
The DeltaSyncClientCertificateThumbprint parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

### -ExternalDNSAdapterEnabled
!!! Exchange Server 2010

The ExternalDNSAdapterEnabled parameter specifies one or more Domain Name System (DNS) servers that Exchange 2010 uses for external DNS lookups. When the ExternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations outside the Exchange organization are performed by using the DNS settings of the external network adapter specified by the value of the ExternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for external Exchange 2010 DNS lookups only, you must specify the DNS servers by using the ExternalDNSServers parameter, and you must also set the value of the ExternalDNSAdapterEnabled parameter to $false. The default value of the ExternalDNSAdapterEnabled parameter is $true.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalDNSAdapterEnabled parameter specifies one or more Domain Name System (DNS) servers that Exchange uses for external DNS lookups. When the ExternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations outside the Exchange organization are performed by using the DNS settings of the external network adapter specified by the value of the ExternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for external Exchange DNS lookups only, you must specify the DNS servers by using the ExternalDNSServers parameter, and you must also set the value of the ExternalDNSAdapterEnabled parameter to $false. The default value of the ExternalDNSAdapterEnabled parameter is $true.



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

### -ExternalDNSAdapterGuid
!!! Exchange Server 2010

The ExternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of destinations that exist outside the Exchange organization. The concept of an external network adapter and an internal network adapter is only applicable in a multi-homed Exchange 2010 server environment. Typically, a multi-homed Exchange 2010 server is only used with the Edge Transport server role in a perimeter network. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and external DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for external DNS lookups. The default value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the ExternalDNSAdapterEnabled parameter is set to $false, the value of the ExternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the ExternalDNSServers parameter is used.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of destinations that exist outside the Exchange organization. The concept of an external network adapter and an internal network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and external DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for external DNS lookups. The default value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the ExternalDNSAdapterEnabled parameter is set to $false, the value of the ExternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the ExternalDNSServers parameter is used.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSServers
!!! Exchange Server 2010

The ExternalDNSServers parameter specifies the list of external DNS servers that the server queries when resolving a remote domain. You must separate IP addresses by using commas. The default value is an empty list ({}).

If the value of the ExternalDNSAdapterEnabled parameter is set to $true, the ExternalDNSServers parameter and its list of DNS servers isn't used.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalDNSServers parameter specifies the list of external DNS servers that the server queries when resolving a remote domain. DNS servers are specified by IP address. The default value is an empty list ({}).

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the value of the ExternalDNSAdapterEnabled parameter is set to $true, the ExternalDNSServers parameter and its list of DNS servers isn't used.



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

### -ExternalIPAddress
!!! Exchange Server 2010

The ExternalIPAddress parameter specifies the IP address used in the Received message header field for every message that travels through the Edge Transport server or Hub Transport server. The IP address in the Received header field is used for hop count and routing loop detection. When an Edge Transport server is protected by a router or firewall that uses Network Address Translation (NAT), NAT disrupts the Edge Transport server's hop count and routing loop calculations. When the Edge Transport server is protected by NAT, the RFC 1918 private, non-routable IP addresses typically used by the server's network adapters don't match the public, routable IP addresses defined in the domain's public DNS MX records. The IP addresses assigned to the internal or external network adapters of the Edge Transport server can be determined by using the Get-NetworkConnectionInfo cmdlet. The IP address specified by the ExternalIPAddress parameter overrides the external network adapter's actual IP address. Typically, you would want to set the value of the ExternalIPAddress parameter to match the value of your domain's public MX record. The default value of the ExternalIPAddress parameter is blank. This means the actual IP address of the external network adapter is used in the Received header field.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalIPAddress parameter specifies the IP address used in the Received message header field for every message that travels through the Edge server or the Transport service on a Mailbox server. The IP address in the Received header field is used for hop count and routing loop detection. The IP address specified by the ExternalIPAddress parameter overrides the external network adapter's actual IP address. Typically, you would want to set the value of the ExternalIPAddress parameter to match the value of your domain's public MX record. The default value of the ExternalIPAddress parameter is blank. This means the actual IP address of the external network adapter is used in the Received header field.



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

### -HttpProtocolLogEnabled
The HttpProtocolLogEnabled parameter is reserved for internal Microsoft use.

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

### -HttpProtocolLogFilePath
The HttpProtocolLogFilePath parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpProtocolLogLoggingLevel
The HttpProtocolLogLoggingLevel parameter is reserved for internal Microsoft use.

```yaml
Type: None | Verbose
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpProtocolLogMaxAge
The HttpProtocolLogMaxAge parameter is reserved for internal Microsoft use.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpProtocolLogMaxDirectorySize
The HttpProtocolLogMaxDirectorySize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpProtocolLogMaxFileSize
The HttpProtocolLogMaxFileSize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpTransportSyncProxyServer
The HttpTransportSyncProxyServer parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSAdapterEnabled
!!! Exchange Server 2010

The InternalDNSAdapterEnabled parameter specifies one or more DNS servers that Exchange 2010 uses for internal DNS lookups. When the InternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations inside the Exchange organization are performed by using the DNS settings of the internal network adapter specified by the value of the InternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for internal Exchange 2010 DNS lookups only, you must specify the DNS servers by using the InternalDNSServers parameter, and you must also set the value of the InternalDNSAdapterEnabled parameter to $false. The default value of the InternalDNSAdapterEnabled parameter is $true.



!!! Exchange Server 2013, Exchange Server 2016

The InternalDNSAdapterEnabled parameter specifies one or more DNS servers that Exchange uses for internal DNS lookups. When the InternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations inside the Exchange organization are performed by using the DNS settings of the internal network adapter specified by the value of the InternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for internal Exchange DNS lookups only, you must specify the DNS servers by using the InternalDNSServers parameter, and you must also set the value of the InternalDNSAdapterEnabled parameter to $false. The default value of the InternalDNSAdapterEnabled parameter is $true.



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

### -InternalDNSAdapterGuid
!!! Exchange Server 2010

The InternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of servers that exist inside the Exchange organization. The concept of an internal network adapter and an external network adapter is only applicable in a multi-homed Exchange 2010 server environment. Typically, a multi-homed Exchange 2010 server is only used with the Edge Transport server role in a perimeter network. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and internal DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for internal DNS lookups. The default value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the InternalDNSAdapterEnabled parameter is set to $false, the value of the InternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the InternalDNSServers parameter is used.



!!! Exchange Server 2013, Exchange Server 2016

The InternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of servers that exist inside the Exchange organization. The concept of an internal network adapter and an external network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and internal DNS lookups are performed by using the DNS settings of any available network adapter. You may enter the GUID of a specific network adapter to use for internal DNS lookups. The default value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the InternalDNSAdapterEnabled parameter is set to $false, the value of the InternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the InternalDNSServers parameter is used.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSServers
!!! Exchange Server 2010

The InternalDNSServers parameter specifies the list of DNS servers that should be used when resolving a domain name. DNS servers are specified by IP address and are separated by commas. The default value is any empty list ({}).

If the InternalDNSAdapterGuid parameter is set, and the value of the InternalDNSAdapterEnabled parameter is set to $true, the InternalDNSServers parameter and its list of DNS servers isn't used.



!!! Exchange Server 2013, Exchange Server 2016

The InternalDNSServers parameter specifies the list of DNS servers that should be used when resolving a domain name. DNS servers are specified by IP address. The default value is any empty list ({}).

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the InternalDNSAdapterGuid parameter is set, and the value of the InternalDNSAdapterEnabled parameter is set to $true, the InternalDNSServers parameter and its list of DNS servers isn't used.



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

### -IntraOrgConnectorProtocolLoggingLevel
!!! Exchange Server 2010

The IntraOrgConnectorProtocolLoggingLevel parameter specifies whether to enable SMTP protocol logging on the implicit and invisible intra-organization Send connector created on every Hub Transport server. This implicit Send connector is used to relay messages to the following destinations:

- To other Hub Transport servers within the Exchange organization

- To Exchange Server 2003 servers within the Exchange organization

- To Edge Transport servers within the Exchange organization

Valid values for this parameter are None or Verbose. The value Verbose enables protocol logging for the connector. The value None disables protocol logging for the connector. The default value is None. When the IntraOrgConnectorProtocolLoggingLevel parameter is set to Verbose, the information is written to the Send connector protocol log specified by the SendProtocolLog parameter.



!!! Exchange Server 2013, Exchange Server 2016

The IntraOrgConnectorProtocolLoggingLevel parameter enables or disables SMTP protocol logging on the implicit and invisible intra-organization Send connectors that are used to transmit messages between Exchange servers in the Exchange organization.

Valid values for this parameter are None or Verbose. The value Verbose enables protocol logging for the connector. The value None disables protocol logging for the connector. The default value is None. When the IntraOrgConnectorProtocolLoggingLevel parameter is set to Verbose, the information is written to the Send connector protocol log specified by the SendProtocolLog parameters.



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

### -IntraOrgConnectorSmtpMaxMessagesPerConnection
!!! Exchange Server 2010

The IntraOrgConnectorSmtpMaxMessagesPerConnection parameter specifies the maximum number of messages per connection limit on the implicit and invisible intra-organization Send connector created on every Hub Transport server.



!!! Exchange Server 2013, Exchange Server 2016

The IntraOrgConnectorSmtpMaxMessagesPerConnection parameter specifies the maximum number of messages per connection limit on the implicit and invisible intra-organization Send connectors that are used to transmit messages between Exchange servers in the Exchange organization.



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

### -IrmLogEnabled
!!! Exchange Server 2010, Exchange Server 2013

The IrmLogEnabled parameter enables logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true Enable IRM logging

- $false Disable IRM logging



!!! Exchange Server 2016

The IrmLogEnabled parameter enables logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true: Enable IRM logging

- $false: Disable IRM logging



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

### -IrmLogMaxAge
!!! Exchange Server 2010

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days. To specify a value, enter the value as a time span: dd.hh:mm:ss, where d = days, h = hours, m = minutes, and s = seconds. The valid input range for this parameter is 00:00:00 to 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.



!!! Exchange Server 2013

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

The valid input range for this parameter is 00:00:00 to 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.



!!! Exchange Server 2016

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The valid input range for this parameter is 00:00:00 to 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.



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

### -IrmLogMaxDirectorySize
!!! Exchange Server 2010

This IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log directory.



!!! Exchange Server 2013

This IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log directory.



!!! Exchange Server 2016

This IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log directory.



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

### -IrmLogMaxFileSize
!!! Exchange Server 2010

This IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.



!!! Exchange Server 2013

This IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.



!!! Exchange Server 2016

This IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.



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

### -IrmLogPath
!!! Exchange Server 2010

The IrmLogPath parameter specifies the default IRM log directory location. The default value is C:\\Program Files\\Microsoft\\Exchange Server\\ V14\\Logging\\IRMLogs. If you set the value of the IrmLogPath parameter to $null, you effectively disable IRM logging. However, if you set the value of the IrmLogPath parameter to $null when the value of the IrmLogEnabled attribute is $true, Exchange will log errors in the Application event log. The preferred way for disabling IRM logging is to set the IrmLogEnabled to $false.



!!! Exchange Server 2013, Exchange Server 2016

The IrmLogPath parameter specifies the default IRM log directory location. The default location is %ExchangeInstallPath%Logging\\IRMLogs. If you set the value of the IrmLogPath parameter to $null, you effectively disable IRM logging. However, if you set the value of the IrmLogPath parameter to $null when the value of the IrmLogEnabled attribute is $true, Exchange will log errors in the Application event log. The preferred way for disabling IRM logging is to set the IrmLogEnabled to $false.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxActiveTransportSyncJobsPerProcessor
The MaxActiveTransportSyncJobsPerProcessor parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMailboxDeliveries
!!! Exchange Server 2010

The MaxConcurrentMailboxDeliveries parameter specifies the maximum number of delivery threads that the server can have open at the same time to deliver messages to mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256. We recommend that you don't modify the default value unless Microsoft Customer Service and Support advises you to do this.



!!! Exchange Server 2013, Exchange Server 2016

The MaxConcurrentMailboxDeliveries parameter specifies the maximum number of delivery threads that the transport service can have open at the same time to deliver messages to mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256. We recommend that you don't modify the default value unless Microsoft Customer Service and Support advises you to do this.



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

### -MaxConcurrentMailboxSubmissions
!!! Exchange Server 2010

The MaxConcurrentMailboxSubmissions parameter specifies the maximum number of submission threads that the server can have open at the same time to send messages from mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256.



!!! Exchange Server 2013, Exchange Server 2016

The MaxConcurrentMailboxSubmissions parameter specifies the maximum number of submission threads that the transport service can have open at the same time to send messages from mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256.



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

### -MaxConnectionRatePerMinute
!!! Exchange Server 2010

The MaxConnectionRatePerMinute parameter specifies the maximum rate that connections are allowed to be opened with the server. If many connections are attempted with the server at the same time, the MaxConnectionRatePerMinute parameter limits the rate that the connections are opened so that the server's resources aren't overwhelmed. The default value is 1200 connections per minute. The valid input range for this parameter is from 1 through 2147483647.



!!! Exchange Server 2013, Exchange Server 2016

The MaxConnectionRatePerMinute parameter specifies the maximum rate that connections are allowed to be opened with the transport service. If many connections are attempted with the transport service at the same time, the MaxConnectionRatePerMinute parameter limits the rate that the connections are opened so that the server's resources aren't overwhelmed. The default value is 1200 connections per minute. The valid input range for this parameter is from 1 through 2147483647.



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

### -MaxNumberOfTransportSyncAttempts
The MaxNumberOfTransportSyncAttempts parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxOutboundConnections
The MaxOutboundConnections parameter specifies the maximum number of outbound connections that can be open at a time. The default value is 1000. The valid input range for this parameter is from 1 through 2147483647. If you enter a value of unlimited, no limit is imposed on the number of outbound connections. The value of the MaxOutboundConnections parameter must be greater than or equal to the value of the MaxPerDomainOutboundConnections parameter.

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

### -MaxPerDomainOutboundConnections
The MaxPerDomainOutboundConnections parameter specifies the maximum number of concurrent connections to any single domain. The default value is 20. The valid input range for this parameter is from 1 through 2147483647. If you enter a value of unlimited, no limit is imposed on the number of outbound connections per domain. The value of the MaxPerDomainOutboundConnections parameter must be less than or equal to the value of the MaxOutboundConnections parameter.

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

### -MessageExpirationTimeout
!!! Exchange Server 2010, Exchange Server 2013

The MessageExpirationTimeout parameter specifies the maximum time that a particular message can remain in a queue. If a message remains in the queue for longer than this period of time, the message is returned to the sender as a permanent failure. The default value is 2 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 3 days for this parameter, use 3.00:00:00. The valid input range for this parameter is from 00:00:05 through 90.00:00:00.



!!! Exchange Server 2016

The MessageExpirationTimeout parameter specifies the maximum time that a particular message can remain in a queue. If a message remains in the queue for longer than this period of time, the message is returned to the sender as a permanent failure. The default value is 2 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 3 days for this parameter, use 3.00:00:00. The valid input range for this parameter is from 00:00:05 through 90.00:00:00.



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

### -MessageRetryInterval
!!! Exchange Server 2010

The MessageRetryInterval parameter specifies the retry interval for individual messages after a connection failure with a remote server. The default value is 1 minute.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 2 minutes for this parameter, use 00:02:00. The valid input range for this parameter is from 00:00:01 through 1.00:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



!!! Exchange Server 2013

The MessageRetryInterval parameter specifies the retry interval for individual messages after a connection failure with a remote server. The default value is 15 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 20 minutes for this parameter, use 00:20:00. The valid input range for this parameter is from 00:00:01 through 1.00:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



!!! Exchange Server 2016

The MessageRetryInterval parameter specifies the retry interval for individual messages after a connection failure with a remote server. The default value is 15 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 20 minutes for this parameter, use 00:20:00. The valid input range for this parameter is from 00:00:01 through 1.00:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



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

### -MessageTrackingLogEnabled
The MessageTrackingLogEnabled parameter specifies whether message tracking is enabled. The default value is $true.

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

### -MessageTrackingLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The MessageTrackingLogMaxAge parameter specifies the message tracking log maximum file age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 20 days for this parameter, use 20.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the MessageTrackingLogMaxAge parameter to 00:00:00 prevents the automatic removal of message tracking log files because of their age.



!!! Exchange Server 2016

The MessageTrackingLogMaxAge parameter specifies the message tracking log maximum file age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 20 days for this parameter, use 20.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the MessageTrackingLogMaxAge parameter to 00:00:00 prevents the automatic removal of message tracking log files because of their age.



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

### -MessageTrackingLogMaxDirectorySize
!!! Exchange Server 2010

The MessageTrackingLogMaxDirectorySize parameter specifies the maximum size of the message tracking log directory. When the maximum directory size is reached, the server deletes the oldest log files first.

The maximum size of the message tracking log directory is calculated as the total size of all log files that have the same name prefix. Other files that don't follow the name prefix convention aren't counted in the total directory size calculation. Renaming old log files or copying other files into the message tracking log directory could cause the directory to exceed its specified maximum size.

When the Hub Transport server role and the Mailbox server role are installed on the same server, the maximum size of the message tracking log directory isn't the specified maximum size because the message tracking log files generated by the different server roles have different name prefixes. Message tracking log files for the Hub Transport server role or Edge Transport server role begin with the name prefix MSGTRK. Message tracking log files for the Mailbox server role begin with the name prefix MSGTRKM. When the Hub Transport server role and the Mailbox server role are installed on the same server, the maximum size of the message tracking log directory is two times the specified value.

The default value is 1 GB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the message tracking log directory.



!!! Exchange Server 2013

The MessageTrackingLogMaxDirectorySize parameter specifies the maximum size of the message tracking log directory. When the maximum directory size is reached, the server deletes the oldest log files first.

The maximum size of the message tracking log directory is calculated as the total size of all log files that have the same name prefix. Other files that don't follow the name prefix convention aren't counted in the total directory size calculation. Renaming old log files or copying other files into the message tracking log directory could cause the directory to exceed its specified maximum size.

For Mailbox servers, the maximum size of the message tracking log directory isn't the specified maximum size because the message tracking log files generated by the Transport service and the Mailbox Transport service have different name prefixes. Message tracking log files for the Transport service or for Edge servers begin with the name prefix MSGTRK. Message tracking log files for the Mailbox Transport service begin with the name prefix MSGTRKM. For Mailbox servers, the maximum size of the message tracking log directory is two times the specified value.

The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the message tracking log directory.



!!! Exchange Server 2016

The MessageTrackingLogMaxDirectorySize parameter specifies the maximum size of the message tracking log directory. When the maximum directory size is reached, the server deletes the oldest log files first.

The maximum size of the message tracking log directory is calculated as the total size of all log files that have the same name prefix. Other files that don't follow the name prefix convention aren't counted in the total directory size calculation. Renaming old log files or copying other files into the message tracking log directory could cause the directory to exceed its specified maximum size.

For Mailbox servers, the maximum size of the message tracking log directory isn't the specified maximum size because the message tracking log files generated by the Transport service and the Mailbox Transport service have different name prefixes. Message tracking log files for the Transport service or for Edge servers begin with the name prefix MSGTRK. Message tracking log files for the Mailbox Transport service begin with the name prefix MSGTRKM. For Mailbox servers, the maximum size of the message tracking log directory is two times the specified value.

The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the message tracking log directory.



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

### -MessageTrackingLogMaxFileSize
!!! Exchange Server 2010

The MessageTrackingLogMaxFileSize parameter specifies the maximum size of the message tracking log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 4294967296 bytes (4 GB).



!!! Exchange Server 2013

The MessageTrackingLogMaxFileSize parameter specifies the maximum size of the message tracking log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 4294967296 bytes (4 GB). If you enter a value of unlimited, no size limit is imposed on the message tracking log files.



!!! Exchange Server 2016

The MessageTrackingLogMaxFileSize parameter specifies the maximum size of the message tracking log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 4294967296 bytes (4 GB). If you enter a value of unlimited, no size limit is imposed on the message tracking log files.



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

### -MessageTrackingLogPath
!!! Exchange Server 2010

The MessageTrackingLogPath parameter specifies the location of the message tracking logs. The default location is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\MessageTracking. Setting the value of this parameter to $null disables message tracking. However, setting this parameter to $null when the value of the MessageTrackingLogEnabled attribute is $true generates event log errors. The preferred method to disable message tracking is to use the MessageTrackingLogEnabled parameter.



!!! Exchange Server 2013, Exchange Server 2016

The MessageTrackingLogPath parameter specifies the location of the message tracking logs. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\MessageTracking. Setting the value of this parameter to $null disables message tracking. However, setting this parameter to $null when the value of the MessageTrackingLogEnabled attribute is $true generates event log errors. The preferred method to disable message tracking is to use the MessageTrackingLogEnabled parameter.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTrackingLogSubjectLoggingEnabled
The MessageTrackingLogSubjectLoggingEnabled parameter specifies whether the message subject should be included in the message tracking log. The default value is $true.

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

### -OutboundConnectionFailureRetryInterval
!!! Exchange Server 2010

The OutboundConnectionFailureRetryInterval parameter specifies the retry interval for subsequent connection attempts to a remote server where previous connection attempts have failed. The previously failed connection attempts are controlled by the TransientFailureRetryCount and TransientFailureRetryInterval parameters. On a Hub Transport server, the default value of the OutboundConnectionFailureRetryInterval parameter is 10 minutes. On an Edge Transport server, the default value is 30 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 15 minutes for this parameter, use 00:15:00. The valid input range for this parameter is from 00:00:01 through 20.00:00:00.



!!! Exchange Server 2013

The OutboundConnectionFailureRetryInterval parameter specifies the retry interval for subsequent connection attempts to a remote server where previous connection attempts have failed. The previously failed connection attempts are controlled by the TransientFailureRetryCount and TransientFailureRetryInterval parameters. For the Transport service on a Mailbox server, the default value of the OutboundConnectionFailureRetryInterval parameter is 10 minutes. On an Edge server, the default value is 30 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 15 minutes for this parameter, use 00:15:00. The valid input range for this parameter is from 00:00:01 through 20.00:00:00.



!!! Exchange Server 2016

The OutboundConnectionFailureRetryInterval parameter specifies the retry interval for subsequent connection attempts to a remote server where previous connection attempts have failed. The previously failed connection attempts are controlled by the TransientFailureRetryCount and TransientFailureRetryInterval parameters. For the Transport service on a Mailbox server, the default value of the OutboundConnectionFailureRetryInterval parameter is 10 minutes. On an Edge server, the default value is 30 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 15 minutes for this parameter, use 00:15:00. The valid input range for this parameter is from 00:00:01 through 20.00:00:00.



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

### -PickupDirectoryMaxHeaderSize
!!! Exchange Server 2010

The PickupDirectoryMaxHeaderSize parameter specifies the maximum message header size that can be submitted to the Pickup directory. The default value is 64 KB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified values are treated as bytes. The valid input range for this parameter is from 32768 through 2147483647 bytes.



!!! Exchange Server 2013

The PickupDirectoryMaxHeaderSize parameter specifies the maximum message header size that can be submitted to the Pickup directory. The default value is 64 KB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The valid input range for this parameter is from 32768 through 2147483647 bytes.



!!! Exchange Server 2016

The PickupDirectoryMaxHeaderSize parameter specifies the maximum message header size that can be submitted to the Pickup directory. The default value is 64 KB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 32768 through 2147483647 bytes.



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

### -PickupDirectoryMaxMessagesPerMinute
The PickupDirectoryMaxMessagesPerMinute parameter specifies the maximum number of messages processed per minute by the Pickup directory and by the Replay directory. Each directory can independently process message files at the rate specified by the PickupDirectoryMaxMessagesPerMinute parameter. The default value is 100. The valid input range for this parameter is from 1 through 20000.

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

### -PickupDirectoryMaxRecipientsPerMessage
The PickupDirectoryMaxRecipientsPerMessage parameter specifies the maximum number of recipients that can be included on an e-mail message. The default value is 100. The valid input range for this parameter is from 1 through 10000.

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

### -PickupDirectoryPath
!!! Exchange Server 2010

The PickupDirectoryPath parameter specifies the location of the Pickup directory. The Pickup directory is used by administrators and third-party applications to create and submit messages. The default value is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Pickup. If the value of the PickupDirectoryPath parameter is set to $null, the Pickup directory is disabled.



!!! Exchange Server 2013, Exchange Server 2016

The PickupDirectoryPath parameter specifies the location of the Pickup directory. The Pickup directory is used by administrators and third-party applications to create and submit messages. The default location is %ExchangeInstallPath%TransportRoles\\Pickup. If the value of the PickupDirectoryPath parameter is set to $null, the Pickup directory is disabled.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipelineTracingEnabled
!!! Exchange Server 2010

The PipelineTracingEnabled parameter specifies whether to enable pipeline tracing. Pipeline tracing captures message snapshot files that record the changes made to the message by each transport agent configured on the Hub Transport server or Edge Transport server. Pipeline tracing creates verbose log files that accumulate quickly. Pipeline tracing should only be enabled for a short time to provide in-depth diagnostic information that enables you to troubleshoot problems. In addition to troubleshooting, you can use pipeline tracing to validate changes that you make to the configuration of the server on which you enable pipeline tracing. The default value is $false.



!!! Exchange Server 2013, Exchange Server 2016

The PipelineTracingEnabled parameter specifies whether to enable pipeline tracing. Pipeline tracing captures message snapshot files that record the changes made to the message by each transport agent configured in the transport service on the server. Pipeline tracing creates verbose log files that accumulate quickly. Pipeline tracing should only be enabled for a short time to provide in-depth diagnostic information that enables you to troubleshoot problems. In addition to troubleshooting, you can use pipeline tracing to validate changes that you make to the configuration of the transport service where you enable pipeline tracing. The default value is $false.



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

### -PipelineTracingPath
!!! Exchange Server 2010

The PipelineTracingPath parameter specifies the location of the pipeline tracing logs. The default path is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\PipelineTracing. The path must be local to the Exchange 2010 computer. Setting the value of this parameter to $null disables pipeline tracing. However, setting this parameter to $null when the value of the PipelineTracingEnabled attribute is $true generates event log errors. The preferred method to disable pipeline tracing is to use the PipelineTracingEnabled parameter. Pipeline tracing captures the complete contents of e-mail messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control



!!! Exchange Server 2013, Exchange Server 2016

The PipelineTracingPath parameter specifies the location of the pipeline tracing logs. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\PipelineTracing. The path must be local to the Exchange computer. Setting the value of this parameter to $null disables pipeline tracing. However, setting this parameter to $null when the value of the PipelineTracingEnabled attribute is $true generates event log errors. The preferred method to disable pipeline tracing is to use the PipelineTracingEnabled parameter. Pipeline tracing captures the complete contents of e-mail messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipelineTracingSenderAddress
The PipelineTracingSenderAddress parameter specifies the sender e-mail address that invokes pipeline tracing. Only messages from this address generate pipeline tracing output. The address can be either inside or outside the Exchange organization. Depending on your requirements, you may have to set this parameter to different sender addresses and send new messages to start the transport agents or routes that you want to test. The default value of this parameter is $null.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoisonMessageDetectionEnabled
!!! Exchange Server 2010

The PoisonMessageDetectionEnabled parameter specifies whether poison messages should be detected. The default value is $true. Poison messages are messages determined to be potentially harmful to the Exchange 2010 system after a server failure. Poison messages are put in the poison message queue. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



!!! Exchange Server 2013, Exchange Server 2016

The PoisonMessageDetectionEnabled parameter specifies whether poison messages should be detected. The default value is $true. Poison messages are messages determined to be potentially harmful to the Exchange system after a server failure. Poison messages are put in the poison message queue. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



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

### -PoisonThreshold
The PoisonThreshold parameter specifies the number of times a message can be rejected before it's classified as a poison message. The default value is 2. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this. The valid input range for this parameter is from 1 through 10.

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

### -QueueMaxIdleTime
!!! Exchange Server 2010

The QueueMaxIdleTime parameter specifies the period of time an empty mailbox delivery queue or remote delivery queue can exist before the queue is removed. The default value is 3 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 5 minutes for this parameter, use 00:05:00. The valid input range for this parameter is from 00:00:05 through 01:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



!!! Exchange Server 2013

The QueueMaxIdleTime parameter specifies the period of time an empty delivery queue can exist before the queue is removed. The default value is 3 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 5 minutes for this parameter, use 00:05:00. The valid input range for this parameter is from 00:00:05 through 01:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



!!! Exchange Server 2016

The QueueMaxIdleTime parameter specifies the period of time an empty delivery queue can exist before the queue is removed. The default value is 3 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 5 minutes for this parameter, use 00:05:00. The valid input range for this parameter is from 00:00:05 through 01:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.



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

### -ReceiveProtocolLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The ReceiveProtocolLogMaxAge parameter specifies the maximum age of the Receive connector protocol log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 20 days for this parameter, use 20.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ReceiveProtocolLogMaxAge parameter to 00:00:00 prevents the automatic removal of Receive connector protocol log files because of their age.



!!! Exchange Server 2016

The ReceiveProtocolLogMaxAge parameter specifies the maximum age of the Receive connector protocol log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 20 days for this parameter, use 20.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ReceiveProtocolLogMaxAge parameter to 00:00:00 prevents the automatic removal of Receive connector protocol log files because of their age.



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

### -ReceiveProtocolLogMaxDirectorySize
!!! Exchange Server 2010

The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the Receive connector protocol log directory shared by all the Receive connectors that exist on the server. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 250 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log directory.



!!! Exchange Server 2013

The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the Receive connector protocol log directory shared by all the Receive connectors that exist on the server. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log directory.



!!! Exchange Server 2016

The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the Receive connector protocol log directory shared by all the Receive connectors that exist on the server. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log directory.



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

### -ReceiveProtocolLogMaxFileSize
!!! Exchange Server 2010

The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of the Receive connector protocol log files shared by all the Receive connectors that exist on the server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log files.



!!! Exchange Server 2013

The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of the Receive connector protocol log files shared by all the Receive connectors that exist on the server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log files.



!!! Exchange Server 2016

The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of the Receive connector protocol log files shared by all the Receive connectors that exist on the server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the ReceiveProtocolLogMaxFileSize parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Receive connector protocol log files.



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

### -ReceiveProtocolLogPath
!!! Exchange Server 2010

The ReceiveProtocolLogPath parameter specifies the path of the protocol log directory for all the Receive connectors that exist on the server. The default location is C:\\Program Files\\Microsoft\\ Exchange Server\\V14\\TransportRoles\\Logs\\ProtocolLog\\SmtpReceive. Setting the value of this parameter to $null disables protocol logging for all Receive connectors on the server. However, setting this parameter to $null when the value of the ProtocolLoggingLevel attribute for any Receive connector on the server is Verbose generates event log errors. The preferred method of disabling protocol logging is to use the Set-ReceiveConnector cmdlet to set the ProtocolLoggingLevel to None on each Receive connector.



!!! Exchange Server 2013, Exchange Server 2016

The ReceiveProtocolLogPath parameter specifies the path of the protocol log directory for all the Receive connectors that exist on the server. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ProtocolLog\\SmtpReceive. Setting the value of this parameter to $null disables protocol logging for all Receive connectors on the server. However, setting this parameter to $null when the value of the ProtocolLoggingLevel attribute for any Receive connector on the server is Verbose generates event log errors. The preferred method of disabling protocol logging is to use the Set-ReceiveConnector cmdlet to set the ProtocolLoggingLevel to None on each Receive connector.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientValidationCacheEnabled
!!! Exchange Server 2010

The RecipientValidationCacheEnabled parameter specifies whether the recipient addresses used by transport agents, such as the Recipient Filtering agent, are cached. The default value is $true on Edge Transport servers and $false on Hub Transport servers.



!!! Exchange Server 2013, Exchange Server 2016

The RecipientValidationCacheEnabled parameter specifies whether the recipient addresses used by transport agents, such as the Recipient Filtering agent, are cached. The default value is $true on Edge servers and $false for the Transport service on Mailbox servers.



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

### -ReplayDirectoryPath
!!! Exchange Server 2010

The ReplayDirectoryPath parameter specifies the path of the Replay directory. The Replay directory is used to resubmit exported messages and to receive messages from foreign gateway servers. The default location is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Replay. If the value of the ReplayDirectoryPath parameter is set to $null, the Replay directory is disabled.



!!! Exchange Server 2013, Exchange Server 2016

The ReplayDirectoryPath parameter specifies the path of the Replay directory. The Replay directory is used to resubmit exported messages and to receive messages from foreign gateway servers. The default location is %ExchangeInstallPath%TransportRoles\\Replay. If the value of the ReplayDirectoryPath parameter is set to $null, the Replay directory is disabled.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RootDropDirectoryPath
!!! Exchange Server 2010

The RootDropDirectoryPath parameter specifies the top-level location of the Drop directory used by all Foreign connectors defined on a Hub Transport server. The value of the RootDropDirectoryPath parameter may be a local path, or a Universal Naming Convention (UNC) path to a remote server. By default, the RootDropDirectoryPath parameter is blank. This indicates the value of RootDropDirectoryPath is the Exchange 2010 installation folder. The default Exchange 2010 installation folder is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\. The RootDropDirectoryPath parameter is used with the DropDirectory parameter in the Set-ForeignConnector cmdlet to specify the location for outgoing messages going to the address spaces defined on the Foreign connector.



!!! Exchange Server 2013, Exchange Server 2016

The RootDropDirectoryPath parameter specifies the top-level location of the Drop directory used by all Foreign connectors defined in the Transport service on a Mailbox server. The value of the RootDropDirectoryPath parameter may be a local path, or a Universal Naming Convention (UNC) path to a remote server. By default, the RootDropDirectoryPath parameter is blank. This indicates the value of RootDropDirectoryPath is the Exchange installation folder. The RootDropDirectoryPath parameter is used with the DropDirectory parameter in the Set-ForeignConnector cmdlet to specify the location for outgoing messages going to the address spaces defined on the Foreign connector.



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

### -RoutingTableLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The RoutingTableLogMaxAge parameter specifies the maximum routing table log age. Log files older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 5 days for this parameter, use 5.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the RoutingTableLogMaxAge parameter to 00:00:00 prevents the automatic removal of routing table log files because of their age.



!!! Exchange Server 2016

The RoutingTableLogMaxAge parameter specifies the maximum routing table log age. Log files older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 5 days for this parameter, use 5.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the RoutingTableLogMaxAge parameter to 00:00:00 prevents the automatic removal of routing table log files because of their age.



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

### -RoutingTableLogMaxDirectorySize
!!! Exchange Server 2010

The RoutingTableLogMaxDirectorySize parameter specifies the maximum size of the routing table log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 50 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The valid input range for this parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the routing table log directory.



!!! Exchange Server 2013

The RoutingTableLogMaxDirectorySize parameter specifies the maximum size of the routing table log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 50 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The valid input range for this parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the routing table log directory.



!!! Exchange Server 2016

The RoutingTableLogMaxDirectorySize parameter specifies the maximum size of the routing table log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 50 MB.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingTableLogPath
!!! Exchange Server 2010

The RoutingTableLogPath parameter specifies the directory location where routing table log files should be stored. The default value is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\Routing. Setting the value of the RoutingTableLogPath parameter to $null disables routing table logging.



!!! Exchange Server 2013, Exchange Server 2016

The RoutingTableLogPath parameter specifies the directory location where routing table log files should be stored. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Routing. Setting the value of the RoutingTableLogPath parameter to $null disables routing table logging.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogMaxAge
!!! Exchange Server 2010, Exchange Server 2013

The SendProtocolLogMaxAge parameter specifies the Send connector protocol log file maximum age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the SendProtocolLogMaxAge parameter to 00:00:00 prevents the automatic removal of Send connector protocol log files because of their age.



!!! Exchange Server 2016

The SendProtocolLogMaxAge parameter specifies the Send connector protocol log file maximum age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the SendProtocolLogMaxAge parameter to 00:00:00 prevents the automatic removal of Send connector protocol log files because of their age.



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

### -SendProtocolLogMaxDirectorySize
!!! Exchange Server 2010

The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the Send connector protocol log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log directory.



!!! Exchange Server 2013

The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the Send connector protocol log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log directory.



!!! Exchange Server 2016

The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the Send connector protocol log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log directory.



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

### -SendProtocolLogMaxFileSize
!!! Exchange Server 2010

The SendProtocolLogMaxFileSize parameter specifies the maximum size of the Send connector protocol log files shared by all the Send connectors that exist on a server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log files.



!!! Exchange Server 2013

The SendProtocolLogMaxFileSize parameter specifies the maximum size of the Send connector protocol log files shared by all the Send connectors that exist on a server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log files.



!!! Exchange Server 2016

The SendProtocolLogMaxFileSize parameter specifies the maximum size of the Send connector protocol log files shared by all the Send connectors that exist on a server. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the SendProtocolLogMaxFileSize parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the Send connector protocol log files.



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

### -SendProtocolLogPath
!!! Exchange Server 2010

The SendProtocolLogPath parameter specifies the location of protocol log storage for the Send connectors. The default location is "C:\\Program Files\\Microsoft\\ Exchange Server\\V14\\TransportRoles\\Logs\\ProtocolLog\\SmtpSend". Setting the value of this parameter to $null disables protocol logging for all Send connectors on the server. However, setting this parameter to $null when the value of the ProtocolLoggingLevel or IntraOrgConnectorProtocolLoggingLevel attribute for any Send connector on the server is Verbose generates event log errors. The preferred method of disabling protocol logging is to use the Set-SendConnector cmdlet to set the ProtocolLoggingLevel parameter to None on each Send connector and to set the IntraOrgConnectorProtocolLoggingLevel parameter to None.



!!! Exchange Server 2013, Exchange Server 2016

The SendProtocolLogPath parameter specifies the location of protocol log storage for the Send connectors. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ProtocolLog\\SmtpSend. Setting the value of this parameter to $null disables protocol logging for all Send connectors on the server. However, setting this parameter to $null when the value of the ProtocolLoggingLevel or IntraOrgConnectorProtocolLoggingLevel attribute for any Send connector on the server is Verbose generates event log errors. The preferred method of disabling protocol logging is to use the Set-SendConnector cmdlet to set the ProtocolLoggingLevel parameter to None on each Send connector and to set the IntraOrgConnectorProtocolLoggingLevel parameter to None.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerStatisticsLogMaxAge
!!! Exchange Server 2010

The ServerStatisticsLogMaxAge parameter specifies the maximum duration that the server statistics log files are kept. Log files older than the specified value are deleted. The default value is 14 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 21 days for this parameter, use 21.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.



!!! Exchange Server 2013

Server statistics aren't available in Exchange 2013 CU7 or later, so this parameter has no effect in those versions of Exchange 2013.

The ServerStatisticsLogMaxAge parameter specifies the maximum duration that the server statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.

The ServerStatisticsLogMaxAge parameter specifies the maximum duration that the server statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.



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

### -ServerStatisticsLogMaxDirectorySize
!!! Exchange Server 2010

The ServerStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the server statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.



!!! Exchange Server 2013

Server statistics aren't available in Exchange 2013 CU7 or later, so this parameter has no effect in those versions of Exchange 2013.

The ServerStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the server statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



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

### -ServerStatisticsLogMaxFileSize
!!! Exchange Server 2010

The ServerStatisticsLogMaxFileSize parameter specifies the maximum file size for the server statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.



!!! Exchange Server 2013

Server statistics aren't available in Exchange 2013 CU7 or later, so this parameter has no effect in those versions of Exchange 2013.

The ServerStatisticsLogMaxFileSize parameter specifies the maximum file size for the server statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



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

### -ServerStatisticsLogPath
!!! Exchange Server 2010

The ServerStatisticsLogPath parameter specifies the location of server statistics log storage. Setting the value of this parameter to $null disables server statistics logging.



!!! Exchange Server 2013

Server statistics aren't available in Exchange 2013 CU7 or later, so this parameter has no effect in those versions of Exchange 2013.

The ServerStatisticsLogPath parameter specifies the location of server statistics log storage. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ServerStats. Setting the value of this parameter to $null disables server statistics logging.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransientFailureRetryCount
The TransientFailureRetryCount parameter specifies the maximum number of immediate connection retries attempted when the server encounters a connection failure with a remote server. The default value is 6. The valid input range for this parameter is from 0 through 15. When the value of this parameter is set to 0, the server doesn't immediately attempt to retry an unsuccessful connection, and the next connection attempt is controlled by the OutboundConnectionFailureRetryInterval parameter.

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

### -TransientFailureRetryInterval
!!! Exchange Server 2010

The TransientFailureRetryInterval parameter controls the connection interval between each connection attempt specified by the TransientFailureRetryCount parameter. On a Hub Transport server, the default value of the TransientFailureRetryInterval parameter is 5 minutes. On an Edge Transport server, the default value is 10 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 8 minutes for this parameter, use 00:08:00. The valid input range for this parameter is from 00:00:01 through 12:00:00.



!!! Exchange Server 2013

The TransientFailureRetryInterval parameter controls the connection interval between each connection attempt specified by the TransientFailureRetryCount parameter. For the Transport service on a Mailbox server, the default value of the TransientFailureRetryInterval parameter is 5 minutes. On an Edge server, the default value is 10 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 8 minutes for this parameter, use 00:08:00. The valid input range for this parameter is from 00:00:01 through 12:00:00.



!!! Exchange Server 2016

The TransientFailureRetryInterval parameter controls the connection interval between each connection attempt specified by the TransientFailureRetryCount parameter. For the Transport service on a Mailbox server, the default value of the TransientFailureRetryInterval parameter is 5 minutes. On an Edge server, the default value is 10 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 8 minutes for this parameter, use 00:08:00. The valid input range for this parameter is from 00:00:01 through 12:00:00.



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

### -TransportSyncAccountsPoisonAccountThreshold
The TransportSyncAccountsPoisonAccountThreshold parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncAccountsPoisonDetectionEnabled
The TransportSyncAccountsPoisonDetectionEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncAccountsPoisonItemThreshold
The TransportSyncAccountsPoisonItemThreshold parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncAccountsSuccessivePoisonItemThreshold
The TransportSyncAccountsSuccessivePoisonItemThreshold parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncEnabled
The TransportSyncEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncExchangeEnabled
The TransportSyncExchangeEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncHubHealthLogEnabled
The TransportSyncHubHealthLogEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncHubHealthLogFilePath
The TransportSyncHubHealthLogFilePath parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncHubHealthLogMaxAge
The TransportSyncHubHealthLogMaxAge parameter is reserved for internal Microsoft use.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncHubHealthLogMaxDirectorySize
The TransportSyncHubHealthLogMaxDirectorySize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncHubHealthLogMaxFileSize
The TransportSyncHubHealthLogMaxFileSize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncImapEnabled
The TransportSyncImapEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncLogEnabled
The TransportSyncLogEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncLogFilePath
The TransportSyncLogFilePath parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogLoggingLevel
The TransportSyncLogLoggingLevel parameter is reserved for internal Microsoft use.

```yaml
Type: None | Error | Information | Verbose | RawData | Debugging
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogMaxAge
The TransportSyncLogMaxAge parameter is reserved for internal Microsoft use.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogMaxDirectorySize
The TransportSyncLogMaxDirectorySize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogMaxFileSize
The TransportSyncLogMaxFileSize parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncMaxDownloadItemsPerConnection
The TransportSyncMaxDownloadItemsPerConnection parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncMaxDownloadSizePerConnection
The TransportSyncMaxDownloadSizePerConnection parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncMaxDownloadSizePerItem
The TransportSyncMaxDownloadSizePerItem parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncPopEnabled
The TransportSyncPopEnabled parameter is reserved for internal Microsoft use.

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

### -TransportSyncRemoteConnectionTimeout
The TransportSyncRemoteConnectionTimeout parameter is reserved for internal Microsoft use.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDowngradedExchangeServerAuth
!!! Exchange Server 2010

The UseDowngradedExchangeServerAuth parameter specifies whether the Generic Security Services application programming interface (GSSAPI) authentication method is used on connections where Transport Layer Security (TLS) is disabled.

Normally, TLS is required for connections between Hub Transport servers in your organization. On TLS secured connections, Kerberos authentication is used by default. However, there may be scenarios where you need to disable TLS between specific Hub Transport servers in your organization. When you do that, you need to set this parameter to $true to provide an alternative authentication method. The default value is $false. You shouldn't set this value to $true unless it's absolutely required.

If you set this parameter to $true, you also need to create a specific Receive connector to service the non-TLS connections. This Receive connector must have remote IP address ranges specified to ensure that it's only used for non-TLS connections. You also must set the SuppressXAnonymousTls attribute of the Receive connector to $true.



!!! Exchange Server 2013, Exchange Server 2016

The UseDowngradedExchangeServerAuth parameter specifies whether the Generic Security Services application programming interface (GSSAPI) authentication method is used on connections where Transport Layer Security (TLS) is disabled.

Normally, TLS is required for connections between the Transport services on Mailbox servers in your organization. On TLS secured connections, Kerberos authentication is used by default. However, there may be scenarios where you need to disable TLS between specific Transport services in your organization. When you do that, you need to set this parameter to $true to provide an alternative authentication method. The default value is $false. You shouldn't set this value to $true unless it's absolutely required.

If you set this parameter to $true, you also need to create a specific Receive connector to service the non-TLS connections. This Receive connector must have remote IP address ranges specified to ensure that it's only used for non-TLS connections. You also must set the SuppressXAnonymousTls attribute of the Receive connector to $true.



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

### -WindowsLiveContactTransportSyncEnabled
The WindowsLiveContactTransportSyncEnabled parameter is reserved for internal Microsoft use.

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

### -WindowsLiveHotmailTransportSyncEnabled
The WindowsLiveHotmailTransportSyncEnabled parameter is reserved for internal Microsoft use.

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
!!! Exchange Server 2013

The AgentLogMaxAge parameter specifies the maximum age for the agent log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Setting the value of the AgentLogMaxAge parameter to 00:00:00 prevents the automatic removal of agent log files because of their age.



!!! Exchange Server 2016

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
!!! Exchange Server 2013

The AgentLogMaxDirectorySize parameter specifies the maximum size of all agent logs in the agent log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log directory.



!!! Exchange Server 2016

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
!!! Exchange Server 2013

The AgentLogMaxFileSize parameter specifies the maximum size of each agent log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log files.



!!! Exchange Server 2016

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
The AgentLogPath parameter specifies the default agent log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\AgentLog. Setting the value of this parameter to $null disables agent logging. However, setting this parameter to $null when the value of the AgentLogEnabled attribute is $true generates event log errors.

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
!!! Exchange Server 2013

The DnsLogMaxAge parameter specifies the maximum age for the DNS log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

Setting the value of the DnsLogMaxAge parameter to 00:00:00 prevents the automatic removal of DNS log files because of their age.



!!! Exchange Server 2016

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
!!! Exchange Server 2013

The DnsLogMaxDirectorySize parameter specifies the maximum size of all DNS logs in the DNS log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 100 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log directory.



!!! Exchange Server 2016

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
!!! Exchange Server 2013

The DnsLogMaxFileSize parameter specifies the maximum size of each DNS log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log files.



!!! Exchange Server 2016

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

### -QueueLogMaxAge
!!! Exchange Server 2013

The QueueLogMaxAge parameter specifies the maximum age of the queue log files. Log files that are older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the QueueLogMaxAge parameter to 00:00:00 prevents the automatic removal of queue log files because of their age.



!!! Exchange Server 2016

The QueueLogMaxAge parameter specifies the maximum age of the queue log files. Log files that are older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the QueueLogMaxAge parameter to 00:00:00 prevents the automatic removal of queue log files because of their age.



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

### -QueueLogMaxDirectorySize
!!! Exchange Server 2013

The QueueLogMaxDirectorySize parameter specifies the maximum size of the queue log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 200 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log directory.



!!! Exchange Server 2016

The QueueLogMaxDirectorySize parameter specifies the maximum size of the queue log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 200 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log directory.



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

### -QueueLogMaxFileSize
!!! Exchange Server 2013

The QueueLogMaxFileSize parameter specifies the maximum size of the queue log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log files.



!!! Exchange Server 2016

The QueueLogMaxFileSize parameter specifies the maximum size of the queue log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log files.



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

### -QueueLogPath
The QueueLogPath parameter specifies the path of the queue log directory. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\QueueViewer. Setting the value of this parameter to $null disables queue logging.

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

### -WlmLogMaxAge
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

### -WlmLogMaxDirectorySize
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

### -WlmLogMaxFileSize
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

### -WlmLogPath
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

[Online Version](https://technet.microsoft.com/library/af25a915-79d7-4797-bac1-3ccd7f65129a.aspx)

