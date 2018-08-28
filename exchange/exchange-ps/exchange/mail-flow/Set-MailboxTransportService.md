---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-MailboxTransportService
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-MailboxTransportService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxTransportService cmdlet to view the transport configuration information for the Mailbox Transport service on Mailbox servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxTransportService [-Identity] <MailboxTransportServerIdParameter> [-Confirm]
 [-ConnectivityLogEnabled <$true | $false>] [-ConnectivityLogMaxAge <EnhancedTimeSpan>]
 [-ConnectivityLogMaxDirectorySize <Unlimited>] [-ConnectivityLogMaxFileSize <Unlimited>]
 [-ConnectivityLogPath <LocalLongFullPath>] [-ContentConversionTracingEnabled <$true | $false>]
 [-DomainController <Fqdn>] [-MailboxDeliveryAgentLogEnabled <$true | $false>]
 [-MailboxDeliveryAgentLogMaxAge <EnhancedTimeSpan>] [-MailboxDeliveryAgentLogMaxDirectorySize <Unlimited>]
 [-MailboxDeliveryAgentLogMaxFileSize <Unlimited>] [-MailboxDeliveryAgentLogPath <LocalLongFullPath>]
 [-MailboxDeliveryConnectorProtocolLoggingLevel <None | Verbose>]
 [-MailboxDeliveryThrottlingLogEnabled <$true | $false>]
 [-MailboxDeliveryThrottlingLogMaxAge <EnhancedTimeSpan>]
 [-MailboxDeliveryThrottlingLogMaxDirectorySize <Unlimited>]
 [-MailboxDeliveryThrottlingLogMaxFileSize <Unlimited>] [-MailboxDeliveryThrottlingLogPath <LocalLongFullPath>]
 [-MailboxSubmissionAgentLogEnabled <$true | $false>] [-MailboxSubmissionAgentLogMaxAge <EnhancedTimeSpan>]
 [-MailboxSubmissionAgentLogMaxDirectorySize <Unlimited>] [-MailboxSubmissionAgentLogMaxFileSize <Unlimited>]
 [-MailboxSubmissionAgentLogPath <LocalLongFullPath>] [-MaxConcurrentMailboxDeliveries <Int32>]
 [-MaxConcurrentMailboxSubmissions <Int32>] [-PipelineTracingEnabled <$true | $false>]
 [-PipelineTracingPath <LocalLongFullPath>] [-PipelineTracingSenderAddress <SmtpAddress>]
 [-ReceiveProtocolLogMaxAge <EnhancedTimeSpan>] [-ReceiveProtocolLogMaxDirectorySize <Unlimited>]
 [-ReceiveProtocolLogMaxFileSize <Unlimited>] [-ReceiveProtocolLogPath <LocalLongFullPath>]
 [-SendProtocolLogMaxAge <EnhancedTimeSpan>] [-SendProtocolLogMaxDirectorySize <Unlimited>]
 [-SendProtocolLogMaxFileSize <Unlimited>] [-SendProtocolLogPath <LocalLongFullPath>] [-WhatIf]
 [-MailboxDeliveryConnectorMaxInboundConnection <Unlimited>] [-RoutingTableLogMaxAge <EnhancedTimeSpan>]
 [-RoutingTableLogMaxDirectorySize <Unlimited>] [-RoutingTableLogPath <LocalLongFullPath>] [<CommonParameters>]
```

## DESCRIPTION
The Mailbox Transport service runs on all Mailbox servers and is responsible for delivering messages to and accepting messages from local mailbox databases using a remote procedure call (RPC). The Mailbox Transport service also uses SMTP to send messages to and from the Transport service that runs on all Mailbox servers for routing messages to their ultimate destinations.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxTransportService Mailbox01 -ReceiveProtocolLogPath "C:\SMTP Protocol Logs\Receive.log"
```

This example sets the ReceiveProtocolLogPath parameter to C:\\SMTP Protocol Logs\\Receive.log for the Mailbox Transport service on server Mailbox01.

## PARAMETERS

### -Identity
The Identity parameter specifies the server that you want to modify.

```yaml
Type: MailboxTransportServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
The ConnectivityLogPath parameter specifies the default connectivity log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\Connectivity. Setting the value of this parameter to $null disables connectivity logging. However, setting this parameter to $null when the value of the ConnectivityLogEnabled attribute is $true generates event log errors.

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

### -ContentConversionTracingEnabled
The ContentConversionTracingEnabled parameter specifies whether content conversion tracing is enabled. Content conversion tracing captures content conversion failures that occur in the Transport service or in the Mailbox Transport service on the Mailbox server. The default value is $false. Content conversion tracing captures a maximum of 128 MB of content conversion failures. When the 128 MB limit is reached, no more content conversion failures are captured. Content conversion tracing captures the complete contents of email messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control

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

### -MailboxDeliveryAgentLogEnabled
The MailboxDeliveryAgentLogEnabled parameter specifies whether the agent log for the Mailbox Transport Delivery service is enabled. The default value is $true.

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

### -MailboxDeliveryAgentLogMaxAge
The MailboxDeliveryAgentLogMaxAge parameter specifies the maximum age for the agent log file of the Mailbox Transport Delivery service. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the MailboxDeliveryAgentLogMaxAge parameter to 00:00:00 prevents the automatic removal of agent log files because of their age.

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

### -MailboxDeliveryAgentLogMaxDirectorySize
The MailboxDeliveryAgentLogMaxDirectorySize parameter specifies the maximum size of all Mailbox Transport Delivery service agent logs in the agent log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxDeliveryAgentLogMaxFileSize parameter must be less than or equal to the value of the MailboxDeliveryAgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log directory.

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

### -MailboxDeliveryAgentLogMaxFileSize
The MailboxDeliveryAgentLogMaxFileSize parameter specifies the maximum size of each agent log file for the Mailbox Transport Delivery service. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxDeliveryAgentLogMaxFileSize parameter must be less than or equal to the value of the MailboxDeliveryAgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log files.

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

### -MailboxDeliveryAgentLogPath
The MailboxDeliveryAgentLogPath parameter specifies the default agent log directory location for the Mailbox Transport Delivery service. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\AgentLog\\Delivery. Setting the value of this parameter to $null disables agent logging. However, setting this parameter to $null when the value of the MailboxDeliveryAgentLogEnabled attribute is $true generates event log errors.

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

### -MailboxDeliveryConnectorProtocolLoggingLevel
The MailboxDeliveryConnectorProtocolLoggingLevel parameter enables or disables SMTP protocol logging for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. Valid values are:

- None: Protocol logging is disabled for the mailbox delivery Receive connector. This is the default value.

- Verbose: Protocol logging is enabled for the mailbox delivery Receive connector. The location of the log files is controlled by the ReceiveProtocolLogPath parameter.

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

### -MailboxDeliveryThrottlingLogEnabled
The MailboxDeliveryThrottlingLogEnabled parameter specifies whether the mailbox delivery throttling log is enabled. The default value is $true.

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

### -MailboxDeliveryThrottlingLogMaxAge
The MailboxDeliveryThrottlingLogMaxAge parameter specifies the maximum age for the mailbox delivery throttling log file. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the MailboxDeliveryThrottlingLogMaxAge parameter to 00:00:00 prevents the automatic removal of mailbox delivery throttling log files because of their age.

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

### -MailboxDeliveryThrottlingLogMaxDirectorySize
The MailboxDeliveryThrottlingLogMaxDirectorySize parameter specifies the maximum size of all mailbox delivery throttling logs in the mailbox delivery throttling log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 200 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxDeliveryThrottlingLogMaxFileSize parameter must be less than or equal to the value of the MailboxDeliveryThrottlingLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the mailbox delivery throttling log directory.

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

### -MailboxDeliveryThrottlingLogMaxFileSize
The MailboxDeliveryThrottlingLogMaxFileSize parameter specifies the maximum size of each mailbox delivery throttling log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxDeliveryThrottlingLogMaxFileSize parameter must be less than or equal to the value of the MailboxDeliveryThrottlingLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the mailbox delivery throttling log files.

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

### -MailboxDeliveryThrottlingLogPath
The MailboxDeliveryThrottlingLogPath parameter specifies the default mailbox delivery throttling log directory location. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Throttling\\Delivery. Setting the value of this parameter to $null disables mailbox delivery throttling logging. However, setting this parameter to $null when the value of the MailboxDeliveryThrottlingLogEnabled attribute is $true generates event log errors.

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

### -MailboxSubmissionAgentLogEnabled
The MailboxSubmissionAgentLogEnabled parameter specifies whether the agent log is enabled for the Mailbox Transport Submission service. The default value is $true.

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

### -MailboxSubmissionAgentLogMaxAge
The MailboxSubmissionAgentLogMaxAge parameter specifies the maximum age for the agent log file of the Mailbox Transport Submission service. Log files older than the specified value are deleted. The default value is 7.00:00:00 or 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Setting the value of the MailboxSubmissionAgentLogMaxAge parameter to 00:00:00 prevents the automatic removal of agent log files because of their age.

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

### -MailboxSubmissionAgentLogMaxDirectorySize
The MailboxSubmissionAgentLogMaxDirectorySize parameter specifies the maximum size of all Mailbox Transport Submission service agent logs in the agent log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxSubmissionAgentLogMaxFileSize parameter must be less than or equal to the value of the MailboxSubmissionAgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log directory.

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

### -MailboxSubmissionAgentLogMaxFileSize
The MailboxSubmissionAgentLogMaxFileSize parameter specifies the maximum size of each agent log file for the Mailbox Transport Submission service. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the MailboxSubmissionAgentLogMaxFileSize parameter must be less than or equal to the value of the MailboxSubmissionAgentLogMaxDirectorySize parameter. If you enter a value of unlimited, no size limit is imposed on the agent log files.

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

### -MailboxSubmissionAgentLogPath
The MailboxSubmissionAgentLogPath parameter specifies the default agent log directory location for the Mailbox Transport Submission service. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\AgentLog\\Submission. Setting the value of this parameter to $null disables agent logging. However, setting this parameter to $null when the value of the MailboxSubmissionAgentLogEnabled attribute is $true generates event log errors.

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

### -MaxConcurrentMailboxDeliveries
The MaxConcurrentMailboxDeliveries parameter specifies the maximum number of delivery threads that the transport service can have open at the same time to deliver messages to mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256. We recommend that you don't modify the default value unless Microsoft Customer Service and Support advises you to do this.

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

### -MaxConcurrentMailboxSubmissions
The MaxConcurrentMailboxSubmissions parameter specifies the maximum number of submission threads that the transport service can have open at the same time to send messages from mailboxes. The default value is 20. The valid input range for this parameter is from 1 through 256.

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

### -PipelineTracingEnabled
The PipelineTracingEnabled parameter specifies whether to enable pipeline tracing. Pipeline tracing captures message snapshot files that record the changes made to the message by each transport agent configured in the transport service on the server. Pipeline tracing creates verbose log files that accumulate quickly. Pipeline tracing should only be enabled for a short time to provide in-depth diagnostic information that enables you to troubleshoot problems. In addition to troubleshooting, you can use pipeline tracing to validate changes that you make to the configuration of the transport service where you enable pipeline tracing. The default value is $false.

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

### -PipelineTracingPath
The PipelineTracingPath parameter specifies the location of the pipeline tracing logs. The default location is %ExchangeInstallPath%TransportRoles\\Mailbox\\Hub\\PipelineTracing. The path must be local to the Exchange computer. Setting the value of this parameter to $null disables pipeline tracing. However, setting this parameter to $null when the value of the PipelineTracingEnabled attribute is $true generates event log errors. The preferred method to disable pipeline tracing is to use the PipelineTracingEnabled parameter. Pipeline tracing captures the complete contents of email messages to the path specified by the PipelineTracingPath parameter. Make sure that you restrict access to this directory. The permissions required on the directory specified by the PipelineTracingPath parameter are as follows:

- Administrators: Full Control

- Network Service: Full Control

- System: Full Control

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

### -PipelineTracingSenderAddress
The PipelineTracingSenderAddress parameter specifies the sender email address that invokes pipeline tracing. Only messages from this address generate pipeline tracing output. The address can be either inside or outside the Exchange organization. Depending on your requirements, you may have to set this parameter to different sender addresses and send new messages to start the transport agents or routes that you want to test. The default value of this parameter is $null.

```yaml
Type: SmtpAddress
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
The ReceiveProtocolLogMaxAge parameter specifies the maximum age of a protocol log file for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. Log files that are older than the specified value are automatically deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days).

The value00:00:00 prevents the automatic removal of Receive connector protocol log files because of their age.

This parameter is only meaningful when the MailboxDeliveryConnectorProtocolLoggingLevel parameter is set to the value Verbose.

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
The ReceiveProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be greater than or equal to the value of the ReceiveProtocolLogMaxFileSize parameter.

This parameter is only meaningful when the MailboxDeliveryConnectorProtocolLoggingLevel parameter is set to the value Verbose.

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
The ReceiveProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when the MailboxDeliveryConnectorProtocolLoggingLevel parameter is set to the value Verbose.

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
The ReceiveProtocolLogPath parameter specifies the location of the protocol log directory for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\ProtocolLog\\SmtpReceive. The log files are automatically stored in the Delivery subdirectory.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for the mailbox delivery Receive connector. To disable protocol logging for this connector, use the value None for the MailboxDeliveryConnectorProtocolLoggingLevel parameter.

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
The SendProtocolLogMaxAge parameter specifies the maximum age of a protocol log file for the implicit and invisible intra-organization Send connector in the Mailbox Transport Submission service. Log files that are older than the specified value are automatically deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days). The value 00:00:00 prevents the automatic removal of Send connector protocol log files because of their age.

This parameter is only meaningful when the IntraOrgConnectorProtocolLoggingLevel parameter on the Set-TransportService cmdlet is set to the value Verbose.

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
The SendProtocolLogMaxDirectorySize parameter specifies the maximum size of the protocol log directory for the implicit and invisible intra-organization Send connector in the Mailbox Transport Submission service. When the maximum directory size is reached, the server deletes the oldest log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when the IntraOrgConnectorProtocolLoggingLevel parameter on the Set-TransportService cmdlet is set to the value Verbose.

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
The SendProtocolLogMaxFileSize parameter specifies the maximum size of a protocol log file for the implicit and invisible intra-organization Send connector in the Mailbox Transport Submission service. When a log file reaches its maximum file size, a new log file is created.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value this parameter must be less than or equal to the value of the SendProtocolLogMaxDirectorySize parameter.

This parameter is only meaningful when the IntraOrgConnectorProtocolLoggingLevel parameter on the Set-TransportService cmdlet is set to the value Verbose.

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
The SendProtocolLogPath parameter specifies the location of the protocol log directory for the implicit and invisible intra-organization Send connector in the Mailbox Transport Submission service. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\ProtocolLog\\SmtpSend. Log files are automatically stored in the following subdirectories:

- Submission: Protocol log files for the intra-organization Send connector in the Mailbox Transport Submission service.

- Delivery: Protocol log files for side effect messages that are submitted after messages are delivered to mailboxes. For example, a message delivered to a mailbox triggers an Inbox rule that redirects the message to another recipient.

Don't use the value $null for this parameter, because event log errors are generated if protocol logging is enabled for the intra-organization Send connector in the Mailbox Transport Submission service. To disable protocol logging for this connector, use the value None for the IntraOrgConnectorProtocolLoggingLevel parameter on the Set-TransportService cmdlet.

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

### -MailboxDeliveryConnectorMaxInboundConnection
The MailboxDeliveryConnectorMaxInboundConnection parameter specifies the maximum number of inbound connections for the implicit and invisible mailbox delivery Receive connector in the Mailbox Transport Delivery service. The default value is 5000. If you enter the value unlimited, no connection limit is imposed on the mailbox delivery Receive connector.

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
The RoutingTableLogPath parameter specifies the directory location where routing table log files should be stored. The default location is %ExchangeInstallPath%TransportRoles\\Logs\\Mailbox\\Routing. Setting this parameter to $null disables routing table logging.

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

[Online Version](https://technet.microsoft.com/library/72ed234d-cd25-4070-a5b2-ae5f056cc6a0.aspx)
