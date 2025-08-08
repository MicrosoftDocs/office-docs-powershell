---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-transportservice
schema: 2.0.0
title: Set-TransportService
---

# Set-TransportService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-TransportService cmdlet to modify the settings of the Transport service on Exchange 2013 or later Mailbox servers or Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-TransportService [-Identity] <ServerIdParameter>
 [-ActiveUserStatisticsLogMaxAge <EnhancedTimeSpan>]
 [-ActiveUserStatisticsLogMaxDirectorySize <ByteQuantifiedSize>]
 [-ActiveUserStatisticsLogMaxFileSize <ByteQuantifiedSize>]
 [-ActiveUserStatisticsLogPath <LocalLongFullPath>]
 [-AgentLogEnabled <Boolean>]
 [-AgentLogMaxAge <EnhancedTimeSpan>]
 [-AgentLogMaxDirectorySize <Unlimited>]
 [-AgentLogMaxFileSize <Unlimited>]
 [-AgentLogPath <LocalLongFullPath>]
 [-AntispamAgentsEnabled <Boolean>]
 [-Confirm]
 [-ConnectivityLogEnabled <Boolean>]
 [-ConnectivityLogMaxAge <EnhancedTimeSpan>]
 [-ConnectivityLogMaxDirectorySize <Unlimited>]
 [-ConnectivityLogMaxFileSize <Unlimited>]
 [-ConnectivityLogPath <LocalLongFullPath>]
 [-ContentConversionTracingEnabled <Boolean>]
 [-DelayNotificationTimeout <EnhancedTimeSpan>]
 [-DnsLogEnabled <Boolean>]
 [-DnsLogMaxAge <EnhancedTimeSpan>]
 [-DnsLogMaxDirectorySize <Unlimited>]
 [-DnsLogMaxFileSize <Unlimited>]
 [-DnsLogPath <LocalLongFullPath>]
 [-DomainController <Fqdn>]
 [-ExternalDNSAdapterEnabled <Boolean>]
 [-ExternalDNSAdapterGuid <Guid>]
 [-ExternalDNSProtocolOption <ProtocolOption>]
 [-ExternalDNSServers <MultiValuedProperty>]
 [-ExternalIPAddress <IPAddress>]
 [-InternalDNSAdapterEnabled <Boolean>]
 [-InternalDNSAdapterGuid <Guid>]
 [-InternalDNSProtocolOption <ProtocolOption>]
 [-InternalDNSServers <MultiValuedProperty>]
 [-IntraOrgConnectorProtocolLoggingLevel <ProtocolLoggingLevel>]
 [-IntraOrgConnectorSmtpMaxMessagesPerConnection <Int32>]
 [-IrmLogEnabled <Boolean>]
 [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>]
 [-MaxConcurrentMailboxDeliveries <Int32>]
 [-MaxConcurrentMailboxSubmissions <Int32>]
 [-MaxConnectionRatePerMinute <Int32>]
 [-MaxOutboundConnections <Unlimited>]
 [-MaxPerDomainOutboundConnections <Unlimited>]
 [-MessageExpirationTimeout <EnhancedTimeSpan>]
 [-MessageRetryInterval <EnhancedTimeSpan>]
 [-MessageTrackingLogEnabled <Boolean>]
 [-MessageTrackingLogMaxAge <EnhancedTimeSpan>]
 [-MessageTrackingLogMaxDirectorySize <Unlimited>]
 [-MessageTrackingLogMaxFileSize <ByteQuantifiedSize>]
 [-MessageTrackingLogPath <LocalLongFullPath>]
 [-MessageTrackingLogSubjectLoggingEnabled <Boolean>]
 [-OutboundConnectionFailureRetryInterval <EnhancedTimeSpan>]
 [-PickupDirectoryMaxHeaderSize <ByteQuantifiedSize>]
 [-PickupDirectoryMaxMessagesPerMinute <Int32>]
 [-PickupDirectoryMaxRecipientsPerMessage <Int32>]
 [-PickupDirectoryPath <LocalLongFullPath>]
 [-PipelineTracingEnabled <Boolean>]
 [-PipelineTracingPath <LocalLongFullPath>]
 [-PipelineTracingSenderAddress <SmtpAddress>]
 [-PoisonMessageDetectionEnabled <Boolean>]
 [-PoisonThreshold <Int32>]
 [-QueueLogMaxAge <EnhancedTimeSpan>]
 [-QueueLogMaxDirectorySize <Unlimited>]
 [-QueueLogMaxFileSize <Unlimited>]
 [-QueueLogPath <LocalLongFullPath>]
 [-QueueMaxIdleTime <EnhancedTimeSpan>]
 [-ReceiveProtocolLogMaxAge <EnhancedTimeSpan>]
 [-ReceiveProtocolLogMaxDirectorySize <Unlimited>]
 [-ReceiveProtocolLogMaxFileSize <Unlimited>]
 [-ReceiveProtocolLogPath <LocalLongFullPath>]
 [-RecipientValidationCacheEnabled <Boolean>]
 [-ReplayDirectoryPath <LocalLongFullPath>]
 [-RequestBrokerLogEnabled <Boolean>]
 [-RequestBrokerLogMaxAge <EnhancedTimeSpan>]
 [-RequestBrokerLogMaxDirectorySize <Unlimited>]
 [-RequestBrokerLogMaxFileSize <Unlimited>]
 [-RequestBrokerLogPath <LocalLongFullPath>]
 [-ResourceLogEnabled <Boolean>]
 [-ResourceLogMaxAge <EnhancedTimeSpan>]
 [-ResourceLogMaxDirectorySize <Unlimited>]
 [-ResourceLogMaxFileSize <Unlimited>]
 [-ResourceLogPath <LocalLongFullPath>]
 [-RootDropDirectoryPath <String>]
 [-RoutingTableLogMaxAge <EnhancedTimeSpan>]
 [-RoutingTableLogMaxDirectorySize <Unlimited>]
 [-RoutingTableLogPath <LocalLongFullPath>]
 [-SendProtocolLogMaxAge <EnhancedTimeSpan>]
 [-SendProtocolLogMaxDirectorySize <Unlimited>]
 [-SendProtocolLogMaxFileSize <Unlimited>]
 [-SendProtocolLogPath <LocalLongFullPath>]
 [-ServerStatisticsLogMaxAge <EnhancedTimeSpan>]
 [-ServerStatisticsLogMaxDirectorySize <ByteQuantifiedSize>]
 [-ServerStatisticsLogMaxFileSize <ByteQuantifiedSize>]
 [-ServerStatisticsLogPath <LocalLongFullPath>]
 [-TransientFailureRetryCount <Int32>]
 [-TransientFailureRetryInterval <EnhancedTimeSpan>]
 [-TransportHttpLogEnabled <Boolean>]
 [-TransportHttpLogMaxAge <EnhancedTimeSpan>]
 [-TransportHttpLogMaxDirectorySize <Unlimited>]
 [-TransportHttpLogMaxFileSize <Unlimited>]
 [-TransportHttpLogPath <LocalLongFullPath>]
 [-TransportMaintenanceLogEnabled <Boolean>]
 [-TransportMaintenanceLogMaxAge <EnhancedTimeSpan>]
 [-TransportMaintenanceLogMaxDirectorySize <Unlimited>]
 [-TransportMaintenanceLogMaxFileSize <Unlimited>]
 [-TransportMaintenanceLogPath <LocalLongFullPath>]
 [-TransportSyncAccountsPoisonAccountThreshold <Int32>]
 [-TransportSyncAccountsPoisonDetectionEnabled <Boolean>]
 [-TransportSyncAccountsPoisonItemThreshold <Int32>]
 [-TransportSyncAccountsSuccessivePoisonItemThreshold <Int32>]
 [-TransportSyncEnabled <Boolean>]
 [-TransportSyncExchangeEnabled <Boolean>]
 [-TransportSyncHubHealthLogEnabled <Boolean>]
 [-TransportSyncHubHealthLogFilePath <LocalLongFullPath>]
 [-TransportSyncHubHealthLogMaxAge <EnhancedTimeSpan>]
 [-TransportSyncHubHealthLogMaxDirectorySize <ByteQuantifiedSize>]
 [-TransportSyncHubHealthLogMaxFileSize <ByteQuantifiedSize>]
 [-TransportSyncImapEnabled <Boolean>]
 [-TransportSyncLogEnabled <Boolean>]
 [-TransportSyncLogFilePath <LocalLongFullPath>]
 [-TransportSyncLogLoggingLevel <SyncLogLoggingLevel>]
 [-TransportSyncLogMaxAge <EnhancedTimeSpan>]
 [-TransportSyncLogMaxDirectorySize <ByteQuantifiedSize>]
 [-TransportSyncLogMaxFileSize <ByteQuantifiedSize>]
 [-TransportSyncMaxDownloadItemsPerConnection <Int32>]
 [-TransportSyncMaxDownloadSizePerConnection <ByteQuantifiedSize>]
 [-TransportSyncMaxDownloadSizePerItem <ByteQuantifiedSize>]
 [-TransportSyncPopEnabled <Boolean>]
 [-TransportSyncRemoteConnectionTimeout <EnhancedTimeSpan>]
 [-UseDowngradedExchangeServerAuth <Boolean>]
 [-WhatIf]
 [-WindowsLiveHotmailTransportSyncEnabled <Boolean>]
 [-WlmLogMaxAge <EnhancedTimeSpan>]
 [-WlmLogMaxDirectorySize <Unlimited>]
 [-WlmLogMaxFileSize <Unlimited>]
 [-WlmLogPath <LocalLongFullPath>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-TransportService Mailbox01 -DelayNotificationTimeout 13:00:00
```

This example sets the DelayNotificationTimeout parameter to 13 hours for the Transport service on a Mailbox server named Mailbox01.

### Example 2
```powershell
Set-TransportService Mailbox01 -TransientFailureRetryCount 3 -TransientFailureRetryInterval 00:00:30
```

This example sets the TransientFailureRetryCount parameter to 3 and sets the TransientFailureRetryInterval parameter to 30 seconds for the Transport service on a Mailbox server named Mailbox01.

### Example 3
```powershell
Set-TransportService Mailbox01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\\SMTP Protocol Logs\\Receive.log for the Transport service on a Mailbox server named Mailbox01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the Mailbox server that hosts the Transport service configuration you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- GUID
- Distinguished name (DN)
- ExchangeLegacyDN

You can't use this parameter on an Edge Transport server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveUserStatisticsLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActiveUserStatisticsLogMaxAge parameter specifies the maximum duration that the per user activity statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.

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

### -ActiveUserStatisticsLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActiveUserStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the per user activity statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 megabyte (MB). The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.

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

### -ActiveUserStatisticsLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActiveUserStatisticsLogMaxFileSize parameter specifies the maximum file size for the per user activity statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the ActiveUserStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ActiveUserStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.

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

### -ActiveUserStatisticsLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActiveUserStatisticsLogPath parameter specifies the location of per user activity statistics log storage. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ActiveUsersStats. Setting the value of this parameter to $null disables server statistics logging.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AgentLogEnabled parameter specifies whether the agent log is enabled. The default value is $true.

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

### -AgentLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AgentLogMaxAge parameter specifies the maximum age for the agent log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the AgentLogMaxAge parameter to 00:00:00 prevents the automatic removal of agent log files because of their age.

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

### -AgentLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AgentLogMaxDirectorySize parameter specifies the maximum size of all agent logs in the agent log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log directory.

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

### -AgentLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AgentLogMaxFileSize parameter specifies the maximum size of each agent log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the AgentLogMaxFileSize parameter must be less than or equal to the value of the AgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log files.

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

### -AgentLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AgentLogPath parameter specifies the default agent log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\AgentLog. Setting the value of this parameter to $null disables agent logging. However, setting this parameter to $null when the value of the AgentLogEnabled attribute is $true generates event log errors.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntispamAgentsEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AntispamAgentsEnabled parameter specifies whether anti-spam agents are installed on the server specified with the Identity parameter. The default value is $false for the Transport service on Mailbox servers and $true on Edge Transport servers.

You set this parameter by using a script. You shouldn't modify this parameter manually.

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

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ConnectivityLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ConnectivityLogEnabled parameter specifies whether the connectivity log is enabled. The default value is $true.

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

### -ConnectivityLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ConnectivityLogMaxAge parameter specifies the maximum age for the connectivity log file. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 25 days for this parameter, use 25.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the ConnectivityLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.

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

### -ConnectivityLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ConnectivityLogMaxDirectorySize parameter specifies the maximum size of all connectivity logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.

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

### -ConnectivityLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ConnectivityLogMaxFileSize parameter specifies the maximum size of each connectivity log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the ConnectivityLogMaxFileSize parameter must be less than or equal to the value of the ConnectivityLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log files.

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

### -ConnectivityLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ConnectivityLogPath parameter specifies the default connectivity log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\Connectivity. Setting the value of this parameter to $null disables connectivity logging. However, setting this parameter to $null when the value of the ConnectivityLogEnabled attribute is $true generates event log errors.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentConversionTracingEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ContentConversionTracingEnabled parameter specifies whether content conversion tracing is enabled. Content conversion tracing captures content conversion failures that occur in the Transport service on a Mailbox server or on the Edge Transport server. The default value is $false. Content conversion tracing captures a maximum of 128 MB of content conversion failures. When the 128 MB limit is reached, no more content conversion failures are captured. Content conversion tracing captures the complete contents of email messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control
- Network Service: Full Control
- System: Full Control

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

### -DelayNotificationTimeout

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DelayNotificationTimeout parameter specifies how long the server waits before it generates a delayed delivery status notification (DSN) message. The default value is 4 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 3.5 hours for this parameter, use 03:30:00. The valid input range for this parameter is from 00:00:01 through 30.00:00:00. The value of the DelayNotificationTimeout parameter should always be greater than the value of the TransientFailureRetryCount parameter multiplied by the value of the TransientFailureRetryInterval parameter.

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

### -DnsLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DnsLogEnabled parameter specifies whether the DNS log is enabled. The default value is $false.

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

### -DnsLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DnsLogMaxAge parameter specifies the maximum age for the DNS log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the DnsLogMaxAge parameter to 00:00:00 prevents the automatic removal of DNS log files because of their age.

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

### -DnsLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DnsLogMaxDirectorySize parameter specifies the maximum size of all DNS logs in the DNS log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 100 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log directory.

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

### -DnsLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DnsLogMaxFileSize parameter specifies the maximum size of each DNS log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the DnsLogMaxFileSize parameter must be less than or equal to the value of the DnsLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the DNS log files.

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

### -DnsLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DnsLogPath parameter specifies the DNS log directory location. The default value is blank ($null), which indicates no location is configured. If you enable DNS logging, you need to specify a local file path for the DNS log files by using this parameter. If the path contains spaces, enclose the entire path value in quotation marks (").

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ExternalDNSAdapterEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalDNSAdapterEnabled parameter specifies one or more Domain Name System (DNS) servers that Exchange uses for external DNS lookups. When the ExternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations outside the Exchange organization are performed by using the DNS settings of the external network adapter specified by the value of the ExternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for external Exchange DNS lookups only, you must specify the DNS servers by using the ExternalDNSServers parameter, and you must also set the value of the ExternalDNSAdapterEnabled parameter to $false. The default value of the ExternalDNSAdapterEnabled parameter is $true.

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

### -ExternalDNSAdapterGuid

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of destinations that exist outside the Exchange organization. The concept of an external network adapter and an internal network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and external DNS lookups are performed by using the DNS settings of any available network adapter. You might enter the GUID of a specific network adapter to use for external DNS lookups. The default value of the ExternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the ExternalDNSAdapterEnabled parameter is set to $false, the value of the ExternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the ExternalDNSServers parameter is used.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSProtocolOption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalDNSProtocolOption parameter specifies which protocol to use when querying external DNS servers. The valid options for this parameter are Any, UseTcpOnly, and UseUdpOnly. The default value is Any.

```yaml
Type: ProtocolOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDNSServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalDNSServers parameter specifies the list of external DNS servers that the server queries when resolving a remote domain. DNS servers are specified by IP address. The default value is an empty list ({}).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the value of the ExternalDNSAdapterEnabled parameter is set to $true, the ExternalDNSServers parameter and its list of DNS servers isn't used.

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

### -ExternalIPAddress

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalIPAddress parameter specifies the IP address used in the Received message header field for every message that travels through the Edge Transport server or the Transport service on a Mailbox server. The IP address in the Received header field is used for hop count and routing loop detection. The IP address specified by the ExternalIPAddress parameter overrides the external network adapter's actual IP address. Typically, you would want to set the value of the ExternalIPAddress parameter to match the value of your domain's public MX record. The default value of the ExternalIPAddress parameter is blank. This means the actual IP address of the external network adapter is used in the Received header field.

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSAdapterEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalDNSAdapterEnabled parameter specifies one or more DNS servers that Exchange uses for internal DNS lookups. When the InternalDNSAdapterEnabled parameter is set to $true, DNS lookups of destinations inside the Exchange organization are performed by using the DNS settings of the internal network adapter specified by the value of the InternalDNSAdapterGuid parameter. If you want to specify a custom list of DNS servers used for internal Exchange DNS lookups only, you must specify the DNS servers by using the InternalDNSServers parameter, and you must also set the value of the InternalDNSAdapterEnabled parameter to $false. The default value of the InternalDNSAdapterEnabled parameter is $true.

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

### -InternalDNSAdapterGuid

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalDNSAdapterGuid parameter specifies the network adapter that has the DNS settings used for DNS lookups of servers that exist inside the Exchange organization. The concept of an internal network adapter and an external network adapter is only applicable in a multi-homed Exchange server environment. When no particular network adapter is specified as the network adapter for external DNS lookups, the value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000, and internal DNS lookups are performed by using the DNS settings of any available network adapter. You might enter the GUID of a specific network adapter to use for internal DNS lookups. The default value of the InternalDNSAdapterGuid parameter is 00000000-0000-0000-0000-000000000000.

If the value of the InternalDNSAdapterEnabled parameter is set to $false, the value of the InternalDNSAdapterGuid parameter is ignored, and the list of DNS servers from the InternalDNSServers parameter is used.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSProtocolOption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalDNSProtocolOption parameter specifies which protocol to use when you query internal DNS servers. Valid options for this parameter are Any, UseTcpOnly, or UseUdpOnly.The default value is Any.

```yaml
Type: ProtocolOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDNSServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalDNSServers parameter specifies the list of DNS servers that should be used when resolving a domain name. DNS servers are specified by IP address. The default value is any empty list ({}).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the InternalDNSAdapterGuid parameter is set, and the value of the InternalDNSAdapterEnabled parameter is set to $true, the InternalDNSServers parameter and its list of DNS servers isn't used.

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

### -IntraOrgConnectorProtocolLoggingLevel

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IntraOrgConnectorProtocolLoggingLevel parameter enables or disables SMTP protocol logging for the implicit and invisible intra-organization Send connector in the following transport services on the server:

- The Transport service.
- The Mailbox Transport Submission service.

Valid values are:

- None: Protocol logging is disabled for the intra-organization Send connector in the Transport service and in the Mailbox Transport Submission service. This value is the default.
- Verbose: Protocol logging is enabled for the intra-organization Send connector in the Transport service and in the Mailbox Transport Submission service. The location of the log files is controlled by the SendProtocolLogPath parameter.

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

### -IntraOrgConnectorSmtpMaxMessagesPerConnection

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IntraOrgConnectorSmtpMaxMessagesPerConnection parameter specifies the maximum number of messages per connection that are allowed on the implicit and invisible intra-organization Send connector in the Transport service on the server.

A valid value is an integer from 0 to 2147483647. The default value is 20.

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

### -IrmLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IrmLogEnabled parameter enables logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true: Enable IRM logging
- $false: Disable IRM logging

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

### -IrmLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The valid input range for this parameter is 00:00:00 to 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.

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

### -IrmLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log directory.

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

### -IrmLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.

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

### -IrmLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IrmLogPath parameter specifies the default IRM log directory location. The default value is %ExchangeInstallPath%IRMLogs.

If you set the value of this parameter to $null, you effectively disable IRM logging. However, if the value of the IrmLogEnabled parameter is $true, Exchange adds errors to the Application event log. The preferred way to disable IRM logging is to set the IrmLogEnabled parameter to $false.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMailboxDeliveries

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxConcurrentMailboxDeliveries parameter specifies the maximum number of delivery threads that the transport service can have open at the same time to deliver messages to mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256. We recommend that you don't modify the default value unless Microsoft Customer Service and Support advises you to do this.

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

### -MaxConcurrentMailboxSubmissions

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxConcurrentMailboxSubmissions parameter specifies the maximum number of submission threads that the transport service can have open at the same time to send messages from mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256.

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

### -MaxConnectionRatePerMinute

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxConnectionRatePerMinute parameter specifies the maximum rate that connections are allowed to be opened with the transport service. If many connections are attempted with the transport service at the same time, the MaxConnectionRatePerMinute parameter limits the rate that the connections are opened so that the server's resources aren't overwhelmed. The default value is 1200 connections per minute. The valid input range for this parameter is from 1 through 2147483647.

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

### -MaxOutboundConnections

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxOutboundConnections parameter specifies the maximum number of outbound connections that can be open at a time. The default value is 1000. The valid input range for this parameter is from 1 through 2147483647. If you enter a value of unlimited, no limit is imposed on the number of outbound connections. The value of the MaxOutboundConnections parameter must be greater than or equal to the value of the MaxPerDomainOutboundConnections parameter.

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

### -MaxPerDomainOutboundConnections

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MaxPerDomainOutboundConnections parameter specifies the maximum number of concurrent connections to any single domain. The default value is 40. The valid input range for this parameter is from 1 through 2147483647. If you enter a value of unlimited, no limit is imposed on the number of outbound connections per domain. The value of the MaxPerDomainOutboundConnections parameter must be less than or equal to the value of the MaxOutboundConnections parameter.

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

### -MessageExpirationTimeout

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageExpirationTimeout parameter specifies the maximum time that a particular message can remain in a queue. If a message remains in the queue for longer than this period of time, the message is returned to the sender as a permanent failure. The default value is 2 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 3 days for this parameter, use 3.00:00:00. The valid input range for this parameter is from 00:00:05 through 90.00:00:00.

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

### -MessageRetryInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageRetryInterval parameter specifies the retry interval for individual messages after a connection failure with a remote server. The default value is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 20 minutes for this parameter, use 00:20:00. The valid input range for this parameter is from 00:00:01 through 1.00:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.

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

### -MessageTrackingLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogEnabled parameter specifies whether message tracking is enabled. The default value is $true.

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

### -MessageTrackingLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogMaxAge parameter specifies the message tracking log maximum file age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 20 days for this parameter, use 20.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the MessageTrackingLogMaxAge parameter to 00:00:00 prevents the automatic removal of message tracking log files because of their age.

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

### -MessageTrackingLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogMaxDirectorySize parameter specifies the maximum size of the message tracking log directory. When the maximum directory size is reached, the server deletes the oldest log files first.

The maximum size of the message tracking log directory is calculated as the total size of all log files that have the same name prefix. Other files that don't follow the name prefix convention aren't counted in the total directory size calculation. Renaming old log files or copying other files into the message tracking log directory could cause the directory to exceed its specified maximum size.

For Mailbox servers, the maximum size of the message tracking log directory isn't the specified maximum size because the message tracking log files generated by the Transport service and the Mailbox Transport service have different name prefixes. Message tracking log files for the Transport service or for Edge Transport servers begin with the name prefix MSGTRK. Message tracking log files for the Mailbox Transport service begin with the name prefix MSGTRKM. For Mailbox servers, the maximum size of the message tracking log directory is two times the specified value.

The default value is 1000 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the message tracking log directory.

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

### -MessageTrackingLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogMaxFileSize parameter specifies the maximum size of the message tracking log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 4294967296 bytes (4 GB). If you enter a value of unlimited, no size limit is imposed on the message tracking log files.

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

### -MessageTrackingLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogPath parameter specifies the location of the message tracking logs. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\MessageTracking. Setting the value of this parameter to $null disables message tracking. However, setting this parameter to $null when the value of the MessageTrackingLogEnabled attribute is $true generates event log errors. The preferred method to disable message tracking is to use the MessageTrackingLogEnabled parameter.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTrackingLogSubjectLoggingEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageTrackingLogSubjectLoggingEnabled parameter specifies whether the message subject should be included in the message tracking log. The default value is $true.

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

### -OutboundConnectionFailureRetryInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The OutboundConnectionFailureRetryInterval parameter specifies the retry interval for subsequent connection attempts to a remote server where previous connection attempts have failed. The previously failed connection attempts are controlled by the TransientFailureRetryCount and TransientFailureRetryInterval parameters. For the Transport service on a Mailbox server, the default value of the OutboundConnectionFailureRetryInterval parameter is 10 minutes. On an Edge Transport server, the default value is 30 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 15 minutes for this parameter, use 00:15:00. The valid input range for this parameter is from 00:00:01 through 20.00:00:00.

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

### -PickupDirectoryMaxHeaderSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PickupDirectoryMaxHeaderSize parameter specifies the maximum message header size that can be submitted to the Pickup directory. The default value is 64 KB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 32768 through 2147483647 bytes.

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

### -PickupDirectoryMaxMessagesPerMinute

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PickupDirectoryMaxMessagesPerMinute parameter specifies the maximum number of messages processed per minute by the Pickup directory and by the Replay directory. Each directory can independently process message files at the rate specified by the PickupDirectoryMaxMessagesPerMinute parameter. The default value is 100. The valid input range for this parameter is from 1 through 20000.

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

### -PickupDirectoryMaxRecipientsPerMessage

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PickupDirectoryMaxRecipientsPerMessage parameter specifies the maximum number of recipients that can be included on an email message. The default value is 100. The valid input range for this parameter is from 1 through 10000.

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

### -PickupDirectoryPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PickupDirectoryPath parameter specifies the location of the Pickup directory. The Pickup directory is used by administrators and non-Microsoft applications to create and submit messages. The default location is %ExchangeInstallPath%TransportRoles\\Pickup. If the value of the PickupDirectoryPath parameter is set to $null, the Pickup directory is disabled.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipelineTracingEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PipelineTracingEnabled parameter specifies whether to enable pipeline tracing. Pipeline tracing captures message snapshot files that record the changes made to the message by each transport agent configured in the transport service on the server. Pipeline tracing creates verbose log files that accumulate quickly. Pipeline tracing should only be enabled for a short time to provide in-depth diagnostic information that enables you to troubleshoot problems. In addition to troubleshooting, you can use pipeline tracing to validate changes that you make to the configuration of the transport service where you enable pipeline tracing. The default value is $false.

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

### -PipelineTracingPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PipelineTracingPath parameter specifies the location of the pipeline tracing logs. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\PipelineTracing. The path must be local to the Exchange server.

Setting the value of this parameter to $null disables pipeline tracing. However, setting this parameter to $null when the value of the PipelineTracingEnabled attribute is $true generates event log errors. The preferred method to disable pipeline tracing is to use the PipelineTracingEnabled parameter.

Pipeline tracing captures the complete contents of email messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control
- Network Service: Full Control
- System: Full Control

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PipelineTracingSenderAddress

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PipelineTracingSenderAddress parameter specifies the sender email address that invokes pipeline tracing. Only messages from this address generate pipeline tracing output. The address can be either inside or outside the Exchange organization. Depending on your requirements, you might have to set this parameter to different sender addresses and send new messages to start the transport agents or routes that you want to test. The default value of this parameter is $null.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoisonMessageDetectionEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PoisonMessageDetectionEnabled parameter specifies whether poison messages should be detected. The default value is $true. Poison messages are messages determined to be potentially harmful to the Exchange system after a server failure. Poison messages are put in the poison message queue. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.

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

### -PoisonThreshold

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PoisonThreshold parameter specifies the number of times a message can be rejected before it's classified as a poison message. The default value is 2. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this. The valid input range for this parameter is from 1 through 10.

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

### -QueueLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The QueueLogMaxAge parameter specifies the maximum age of the queue log files. Log files that are older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 10 days for this parameter, use 10.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the QueueLogMaxAge parameter to 00:00:00 prevents the automatic removal of queue log files because of their age.

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

### -QueueLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The QueueLogMaxDirectorySize parameter specifies the maximum size of the queue log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 200 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log directory.

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

### -QueueLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The QueueLogMaxFileSize parameter specifies the maximum size of the queue log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of the QueueLogMaxFileSize parameter must be less than or equal to the value of the QueueLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the queue log files.

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

### -QueueLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The QueueLogPath parameter specifies the path of the queue log directory. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\QueueViewer. Setting the value of this parameter to $null disables queue logging.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueMaxIdleTime

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The QueueMaxIdleTime parameter specifies the period of time an empty delivery queue can exist before the queue is removed. The default value is 3 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 5 minutes for this parameter, use 00:05:00. The valid input range for this parameter is from 00:00:05 through 01:00:00. We recommend that you don't modify the default value unless Customer Service and Support advises you to do this.

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

### -ReceiveProtocolLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReceiveProtocolLogMaxAge parameter specifies the maximum age of a protocol log file that's shared by all Receive connectors in the Transport service on the server. Log files that are older than the specified value are automatically deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days). The value 00:00:00 prevents the automatic removal of Receive connector protocol log files in the Transport service because of their age.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Transport service on the server.

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

### -ReceiveProtocolLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory that's shared by all Receive connectors in the Transport service on the server. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of this parameter must be greater than or equal to the value of the ReceiveProtocolLogMaxFileSize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Transport service on the server.

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

### -ReceiveProtocolLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file that's shared by all Receive connectors in the Transport on the server. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Receive connector in the Transport service on the server.

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

### -ReceiveProtocolLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReceiveProtocolLogPath parameter specifies the location of the protocol log directory for all Receive connectors in the Transport service on the server. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ProtocolLog\\SmtpReceive.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for any Receive connector in the Transport service. To disable protocol logging for these Receive connectors, use the value None for the ProtocolLoggingLevel parameter on the Set-ReceiveConnector cmdlet for each Receive connector in the Transport service.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientValidationCacheEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RecipientValidationCacheEnabled parameter specifies whether the recipient addresses used by transport agents, such as the Recipient Filtering agent, are cached. The default value is $true on Edge Transport servers and $false for the Transport service on Mailbox servers.

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

### -ReplayDirectoryPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReplayDirectoryPath parameter specifies the path of the Replay directory. The Replay directory is used to resubmit exported messages and to receive messages from foreign gateway servers. The default location is %ExchangeInstallPath%TransportRoles\\Replay. If the value of the ReplayDirectoryPath parameter is set to $null, the Replay directory is disabled.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestBrokerLogEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -RequestBrokerLogMaxAge

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -RequestBrokerLogMaxDirectorySize

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -RequestBrokerLogMaxFileSize

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -RequestBrokerLogPath

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ResourceLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -ResourceLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -ResourceLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -ResourceLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RootDropDirectoryPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RootDropDirectoryPath parameter specifies the top-level location of the Drop directory used by all Foreign connectors defined in the Transport service on a Mailbox server. The value of the RootDropDirectoryPath parameter might be a local path, or a Universal Naming Convention (UNC) path to a remote server. By default, the RootDropDirectoryPath parameter is blank. This indicates the value of RootDropDirectoryPath is the Exchange installation folder. The RootDropDirectoryPath parameter is used with the DropDirectory parameter in the Set-ForeignConnector cmdlet to specify the location for outgoing messages going to the address spaces defined on the Foreign connector.

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

### -RoutingTableLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RoutingTableLogMaxAge parameter specifies the maximum routing table log age. Log files older than the specified value are deleted. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 5 days for this parameter, use 5.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the RoutingTableLogMaxAge parameter to 00:00:00 prevents the automatic removal of routing table log files because of their age.

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

### -RoutingTableLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RoutingTableLogMaxDirectorySize parameter specifies the maximum size of the routing table log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The default value is 50 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the routing table log directory.

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

### -RoutingTableLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RoutingTableLogPath parameter specifies the directory location where routing table log files should be stored. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\Routing. Setting the value of the RoutingTableLogPath parameter to $null disables routing table logging.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendProtocolLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendProtocolLogMaxAge parameter specifies the maximum age of a protocol log file that's shared by all Send connectors in the Transport service that have this server configured as a source server. Log files that are older than the specified value are automatically deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days). The value 00:00:00 prevents the automatic removal of Send connector protocol log files in the Transport service because of their age.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Transport service on the server.

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

### -SendProtocolLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory that's shared by all Send connectors in the Transport service that have this server configured as a source server. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of this parameter must be greater than or equal to the value of the SendProtocolLogMaxFileSize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Transport service on the server.

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

### -SendProtocolLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file that's shared by all Send connectors in the Transport service that have this server configured as a source server. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when protocol logging is enabled for at least one Send connector in the Transport service on the server.

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

### -SendProtocolLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendProtocolLogPath parameter specifies the location of the protocol log directory for all Send connectors in the Transport service on the server. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ProtocolLog\\SmtpSend.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for any Send connector in the Transport service that has this server configured as a source server. To disable protocol logging for these Send connectors, use the value None for the following parameters:

- The IntraOrgConnectorProtocolLoggingLevel parameter.
- The ProtocolLoggingLevel parameter on the Set-SendConnector cmdlet for each Send connector in the Transport service.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerStatisticsLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is functional only in Exchange Server 2013 CU6 or earlier.

The ServerStatisticsLogMaxAge parameter specifies the maximum duration that the server statistics log files are kept. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of this parameter to 00:00:00 prevents the automatic removal of server statistics log files.

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

### -ServerStatisticsLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is functional only in Exchange Server 2013 CU6 or earlier.

The ServerStatisticsLogMaxDirectorySize parameter specifies the cap on the size of the server statistics log directory. When the maximum directory size is reached, the server deletes the oldest log files first. The minimum value is 1 MB. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log directory.

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

### -ServerStatisticsLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is functional only in Exchange Server 2013 CU6 or earlier.

The ServerStatisticsLogMaxFileSize parameter specifies the maximum file size for the server statistics log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are treated as bytes.

The value of the ServerStatisticsLogMaxFileSize parameter must be less than or equal to the value of the ServerStatisticsLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the server statistics log files.

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

### -ServerStatisticsLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is functional only in Exchange Server 2013 CU6 or earlier.

The ServerStatisticsLogPath parameter specifies the location of server statistics log storage. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Hub\\ServerStats. Setting the value of this parameter to $null disables server statistics logging.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransientFailureRetryCount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TransientFailureRetryCount parameter specifies the maximum number of immediate connection retries attempted when the server encounters a connection failure with a remote server. The default value is 6. The valid input range for this parameter is from 0 through 15. When the value of this parameter is set to 0, the server doesn't immediately attempt to retry an unsuccessful connection, and the next connection attempt is controlled by the OutboundConnectionFailureRetryInterval parameter.

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

### -TransientFailureRetryInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TransientFailureRetryInterval parameter controls the connection interval between each connection attempt specified by the TransientFailureRetryCount parameter. For the Transport service on a Mailbox server, the default value of the TransientFailureRetryInterval parameter is 5 minutes. On an Edge Transport server, the default value is 10 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 8 minutes for this parameter, use 00:08:00. The valid input range for this parameter is from 00:00:01 through 12:00:00.

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

### -TransportHttpLogEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportHttpLogMaxAge

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportHttpLogMaxDirectorySize

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportHttpLogMaxFileSize

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportHttpLogPath

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportMaintenanceLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportMaintenanceLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportMaintenanceLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportMaintenanceLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportMaintenanceLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncAccountsPoisonAccountThreshold

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncAccountsPoisonDetectionEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncAccountsPoisonItemThreshold

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncAccountsSuccessivePoisonItemThreshold

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncExchangeEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncHubHealthLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncHubHealthLogFilePath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncHubHealthLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncHubHealthLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncHubHealthLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncImapEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncLogEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncLogFilePath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogLoggingLevel

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: SyncLogLoggingLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportSyncLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncMaxDownloadItemsPerConnection

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncMaxDownloadSizePerConnection

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncMaxDownloadSizePerItem

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -TransportSyncPopEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -TransportSyncRemoteConnectionTimeout

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -UseDowngradedExchangeServerAuth

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The UseDowngradedExchangeServerAuth parameter specifies whether the Generic Security Services application programming interface (GSSAPI) authentication method is used on connections where Transport Layer Security (TLS) is disabled.

Normally, TLS is required for connections between the Transport services on Mailbox servers in your organization. On TLS secured connections, Kerberos authentication is used by default. However, there might be scenarios where you need to disable TLS between specific Transport services in your organization. When you do that, you need to set this parameter to $true to provide an alternative authentication method. The default value is $false. You shouldn't set this value to $true unless it's absolutely required.

If you set this parameter to $true, you also need to create a specific Receive connector to service the non-TLS connections. This Receive connector must have remote IP address ranges specified to ensure that it's only used for non-TLS connections. You also must set the SuppressXAnonymousTls attribute of the Receive connector to $true.

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

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -WindowsLiveHotmailTransportSyncEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -WlmLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -WlmLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -WlmLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -WlmLogPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
