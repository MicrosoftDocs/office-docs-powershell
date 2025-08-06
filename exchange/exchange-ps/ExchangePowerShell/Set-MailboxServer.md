---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxserver
schema: 2.0.0
title: Set-MailboxServer
---

# Set-MailboxServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxServer cmdlet to modify the mailbox configuration settings and attributes of Mailbox servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxServer [-Identity] <MailboxServerIdParameter>
 [-AutoDagServerConfigured <Boolean>]
 [-AutoDatabaseMountDial <AutoDatabaseMountDial>]
 [-CalendarRepairIntervalEndWindow <Int32>]
 [-CalendarRepairLogDirectorySizeLimit <Unlimited>]
 [-CalendarRepairLogEnabled <Boolean>]
 [-CalendarRepairLogFileAgeLimit <EnhancedTimeSpan>]
 [-CalendarRepairLogPath <LocalLongFullPath>]
 [-CalendarRepairLogSubjectLoggingEnabled <Boolean>]
 [-CalendarRepairMissingItemFixDisabled <Boolean>]
 [-CalendarRepairMode <CalendarRepairType>]
 [-CalendarRepairSchedule <ScheduleInterval[]>]
 [-CalendarRepairWorkCycle <EnhancedTimeSpan>]
 [-CalendarRepairWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-Confirm]
 [-DarTaskStoreTimeBasedAssistantWorkCycle <EnhancedTimeSpan>]
 [-DarTaskStoreTimeBasedAssistantWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-DatabaseCopyActivationDisabledAndMoveNow <Boolean>]
 [-DatabaseCopyAutoActivationPolicy <DatabaseCopyAutoActivationPolicyType>]
 [-DirectoryProcessorWorkCycle <EnhancedTimeSpan>]
 [-DirectoryProcessorWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-DomainController <Fqdn>]
 [-FaultZone <String>]
 [-FolderLogForManagedFoldersEnabled <Boolean>]
 [-ForceGroupMetricsGeneration <Boolean>]
 [-GroupMailboxWorkCycle <EnhancedTimeSpan>]
 [-GroupMailboxWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-GroupMetricsGenerationTime <String>]
 [-InferenceDataCollectionWorkCycle <EnhancedTimeSpan>]
 [-InferenceDataCollectionWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-InferenceTrainingWorkCycle <EnhancedTimeSpan>]
 [-InferenceTrainingWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-IrmLogEnabled <Boolean>]
 [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>]
 [-IsExcludedFromProvisioning <Boolean>]
 [-JournalingLogForManagedFoldersEnabled <Boolean>]
 [-JunkEmailOptionsCommitterWorkCycle <EnhancedTimeSpan>]
 [-Locale <MultiValuedProperty>]
 [-LogDirectorySizeLimitForManagedFolders <Unlimited>]
 [-LogFileAgeLimitForManagedFolders <EnhancedTimeSpan>]
 [-LogFileSizeLimitForManagedFolders <Unlimited>]
 [-LogPathForManagedFolders <LocalLongFullPath>]
 [-MailboxAssociationReplicationWorkCycle <EnhancedTimeSpan>]
 [-MailboxAssociationReplicationWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-MailboxProcessorWorkCycle <EnhancedTimeSpan>]
 [-ManagedFolderAssistantSchedule <ScheduleInterval[]>]
 [-ManagedFolderWorkCycle <EnhancedTimeSpan>]
 [-ManagedFolderWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-MAPIEncryptionRequired <Boolean>]
 [-MaximumActiveDatabases <Int32>]
 [-MaximumPreferredActiveDatabases <Int32>]
 [-MessageTrackingLogEnabled <Boolean>]
 [-MessageTrackingLogMaxAge <EnhancedTimeSpan>]
 [-MessageTrackingLogMaxDirectorySize <Unlimited>]
 [-MessageTrackingLogMaxFileSize <ByteQuantifiedSize>]
 [-MessageTrackingLogPath <LocalLongFullPath>]
 [-MessageTrackingLogSubjectLoggingEnabled <Boolean>]
 [-MigrationLogFilePath <LocalLongFullPath>]
 [-MigrationLogLoggingLevel <MigrationEventType>]
 [-MigrationLogMaxAge <EnhancedTimeSpan>]
 [-MigrationLogMaxDirectorySize <ByteQuantifiedSize>]
 [-MigrationLogMaxFileSize <ByteQuantifiedSize>]
 [-OABGeneratorWorkCycle <EnhancedTimeSpan>]
 [-OABGeneratorWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-PeopleCentricTriageWorkCycle <EnhancedTimeSpan>]
 [-PeopleCentricTriageWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-PeopleRelevanceWorkCycle <EnhancedTimeSpan>]
 [-PeopleRelevanceWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-ProbeTimeBasedAssistantWorkCycle <EnhancedTimeSpan>]
 [-ProbeTimeBasedAssistantWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-PublicFolderWorkCycle <EnhancedTimeSpan>]
 [-PublicFolderWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-RetentionLogForManagedFoldersEnabled <Boolean>]
 [-SearchIndexRepairTimeBasedAssistantWorkCycle <EnhancedTimeSpan>]
 [-SearchIndexRepairTimeBasedAssistantWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-SharePointSignalStoreWorkCycle <EnhancedTimeSpan>]
 [-SharePointSignalStoreWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-SharingPolicySchedule <ScheduleInterval[]>]
 [-SharingPolicyWorkCycle <EnhancedTimeSpan>]
 [-SharingPolicyWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-SharingSyncWorkCycle <EnhancedTimeSpan>]
 [-SharingSyncWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-SiteMailboxWorkCycle <EnhancedTimeSpan>]
 [-SiteMailboxWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-StoreDsMaintenanceWorkCycle <EnhancedTimeSpan>]
 [-StoreDsMaintenanceWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-StoreIntegrityCheckWorkCycle <EnhancedTimeSpan>]
 [-StoreIntegrityCheckWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-StoreMaintenanceWorkCycle <EnhancedTimeSpan>]
 [-StoreMaintenanceWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-StoreScheduledIntegrityCheckWorkCycle <EnhancedTimeSpan>]
 [-StoreScheduledIntegrityCheckWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-StoreUrgentMaintenanceWorkCycle <EnhancedTimeSpan>]
 [-StoreUrgentMaintenanceWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-SubjectLogForManagedFoldersEnabled <Boolean>]
 [-SubmissionServerOverrideList <MultiValuedProperty>]
 [-TopNWorkCycle <EnhancedTimeSpan>]
 [-TopNWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-UMReportingWorkCycle <EnhancedTimeSpan>]
 [-UMReportingWorkCycleCheckpoint <EnhancedTimeSpan>]
 [-WacDiscoveryEndpoint <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxServer -Identity MBX02 -CalendarRepairWorkCycle 7.00:00:00 -CalendarRepairWorkCycleCheckpoint 7.00:00:00
```

In Exchange 2013, this example throttles the Calendar Repair Assistant to detect and repair calendar inconsistencies for the Mailbox server MBX02 in a 7-day period. During that 7-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 2
```powershell
Set-MailboxServer -Identity MBX01 -CalendarRepairIntervalEndWindow 40 -CalendarRepairLogDirectorySizeLimit 750MB -CalendarRepairLogFileAgeLimit 15.00:00:00 -CalendarRepairLogPath "D:\Exchange Logs\Calendar Repair Assistant"
```

This example changes some of the default settings of the Calendar Repair Assistant on the server named MBX01.

### Example 3
```powershell
Set-MailboxServer -Identity MBX02 -CalendarRepairWorkCycle 7.00:00:00 -CalendarRepairWorkCycleCheckpoint 7.00:00:00
```

In Exchange 2010, this example throttles the Calendar Repair Assistant to detect and repair calendar inconsistencies for the Mailbox server MBX02 in a 7-day period. During that 7-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 4
```powershell
Set-MailboxServer -Identity MBX02 -ManagedFolderWorkCycle 10.00:00:00 -ManagedFolderWorkCycleCheckpoint 10.00:00:00
```

In Exchange 2013, this example throttles the Managed Folder Assistant, which applies message retention settings to all mailboxes for the Mailbox server MBX02 in a 10-day period. During that 10-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 5
```powershell
Set-MailboxServer -Identity MBX02 -ManagedFolderWorkCycle 10.00:00:00 -ManagedFolderWorkCycleCheckpoint 10.00:00:00
```

In Exchange 2010, this example throttles the Managed Folder Assistant, which applies message retention settings to all mailboxes for the Mailbox server MBX02 in a 10-day period. During that 10-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 6
```powershell
Set-MailboxServer -Identity MBX02 -SharingPolicyWorkCycle 7.00:00:00 -SharingPolicyWorkCycleCheckpoint 7.00:00:00 -SharingSyncWorkCycle 7.00:00:00 -SharingSyncWorkCycleCheckpoint 7.00:00:00
```

In Exchange 2013, this example throttles the Sharing Policy and Sharing Sync Assistants to apply sharing policies, sync shared calendars, and free/busy information for the mailboxes on server MBX02 in a 7-day period. During that 7-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 7
```powershell
Set-MailboxServer -Identity MBX02 -SharingPolicyWorkCycle 7.00:00:00 -SharingPolicyWorkCycleCheckpoint 7.00:00:00 -SharingSyncWorkCycle 7.00:00:00 -SharingSyncWorkCycleCheckpoint 7.00:00:00
```

In Exchange 2010, this example throttles the Sharing Policy and Sharing Sync Assistants to apply sharing policies, sync shared calendars, and free/busy information for the mailboxes on server MBX02 in a 7-day period. During that 7-day period, all mailboxes are scanned, and at the end of the period, the process starts over.

### Example 8
```powershell
Set-MailboxServer -Identity MBX02 -TopNWorkCycle 10.00:00:00 -TopNWorkCycleCheckpoint 10.00:00:00 -UMReportingWorkCycle 10.00:00:00 -UMReportingWorkCycleCheckpoint 10.00:00:00
```

In Exchange 2010, this example throttles the TopN Words Assistant and the Unified Messaging Reporting Assistant for mailboxes that reside on the Mailbox server MBX02 in a 10-day period. During that 10-day period, all mailboxes that have Unified Messaging enabled are scanned, and at the end of the period, the process starts over.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the Mailbox server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AutoDagServerConfigured

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -AutoDatabaseMountDial

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDatabaseMountDial parameter specifies the automatic database mount behavior for a continuous replication environment after a database failover on the Mailbox server. You can use the following values:

- BestAvailability: The database automatically mounts immediately after a failover if the copy queue length is less than or equal to 12. The copy queue length is the number of logs recognized by the passive copy that needs to be replicated. If the copy queue length is more than 12, the database doesn't automatically mount. When the copy queue length is less than or equal to 12, Exchange attempts to replicate the remaining logs to the passive copy and mounts the database.
- GoodAvailability: The database automatically mounts immediately after a failover if the copy queue length is less than or equal to six. The copy queue length is the number of logs recognized by the passive copy that needs to be replicated. If the copy queue length is more than six, the database doesn't automatically mount. When the copy queue length is less than or equal to six, Exchange attempts to replicate the remaining logs to the passive copy and mounts the database.
- Lossless: The database doesn't automatically mount until all logs that were generated on the active copy have been copied to the passive copy. This setting also causes Active Manager's best copy selection algorithm to sort potential candidates for activation based on the database copy's activation preference value and not its copy queue length.

The default value is GoodAvailability. If you specify either BestAvailability or GoodAvailability, and all of the logs from the active copy haven't been replicated to the passive copy, you might lose some mailbox data. However, the Safety Net feature, (which is enabled by default) helps protect against data loss by resubmitting messages that are in Safety Net.

```yaml
Type: AutoDatabaseMountDial
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarRepairIntervalEndWindow

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairIntervalEndWindow parameter specifies the number of days into the future to repair calendar items in mailboxes on the Mailbox server.

The default value in Exchange 2016 and Exchange 2019 is 7. This value means the Calendar Repair Assistant repairs meetings in calendars up to 7 days from now. Meetings that are scheduled to occur more than 7 days in the future aren't repaired.

The default value in Exchange 2013 and Exchange 2010 is 30. This value means the Calendar Repair Assistant repairs meetings in calendars up to 30 days from now. Meetings that are scheduled to occur more than 30 days in the future aren't repaired.

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

### -CalendarRepairLogDirectorySizeLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairLogDirectorySizeLimit parameter specifies the maximum size of calendar repair log directory on the Mailbox server. When the directory reaches its maximum size, the server deletes the oldest log files first.

Calendar repair log files begin with the name prefix CRA. The maximum size of the calendar repair log directory is calculated as the total size of all log files that have the CRA name prefix. Other files aren't counted in the total directory size calculation. Renaming old log files or copying other files into the calendar repair log directory could cause the directory to exceed its specified maximum size.

The default value is 500 megabytes (MB).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

If you enter the value unlimited, no size limit is imposed on the calendar repair log directory.

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

### -CalendarRepairLogEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairLogEnabled parameter specifies whether the Calendar Repair Attendant logs items that it repairs on the Mailbox server. The repair log doesn't contain failed repair attempts.

Valid input for this parameter is $true or $false. The default value is $true.

The value of this parameter affects the following parameters:

- CalendarRepairLogDirectorySizeLimit
- CalendarRepairLogFileAgeLimit
- CalendarRepairLogPath
- CalendarRepairLogSubjectLoggingEnabled

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

### -CalendarRepairLogFileAgeLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairLogFileAgeLimit parameter specifies the calendar repair log maximum file age on the Mailbox server. Log files older than the specified value are deleted. The default value is 10 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 30 days, enter 30.00:00:00. The value 00:00:00 prevents the automatic removal of calendar repair log files because of their age.

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

### -CalendarRepairLogPath

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairLogPath parameter specifies the location of the calendar repair log files on the Mailbox server. The default value is %ExchangeInstallPath%Logging\\Calendar Repair Assistant.

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

### -CalendarRepairLogSubjectLoggingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairLogSubjectLoggingEnabled parameter specifies whether to include the subject of repaired calendar items in the calendar repair log on the Mailbox server. Valid input for this parameter is $true or $false. The default value is $true.

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

### -CalendarRepairMissingItemFixDisabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairMissingItemFixDisabled parameter specifies whether the Calendar Repair Assistant fixes missing calendar items in mailboxes on the Mailbox server.Valid input for this parameter is $true or $false. The default value is $false.

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

### -CalendarRepairMode

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarRepairMode parameter specifies the Calendar Repair Assistant mode on the Mailbox server. Valid values for this parameter are ValidateOnly or RepairAndValidate. The default value is RepairAndValidate.

```yaml
Type: CalendarRepairType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarRepairSchedule

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The CalendarRepairSchedule parameter specifies the intervals each week during which the Calendar Repair Assistant applies checks for calendar failures.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`. You can specify multiple schedules separated by commas: `"Schedule1","Schedule2",..."ScheduleN"`.

You can use the following values for days:

- Full name of the day.
- Abbreviated name of the day.
- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"
- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)
- "Sun.1:15 AM-Monday.23:00"
- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Run on Monday and Wednesday mornings from 4:30 until 5:30.)

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarRepairWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The CalendarRepairWorkCycle parameter specifies the time span in which all mailboxes on the Mailbox server are scanned by the Calendar Repair Assistant. The default value is 1 day.

Calendars that have inconsistencies are flagged and repaired according to the interval specified by the CalendarRepairWorkCycleCheckpoint parameter.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Calendar Repair Assistant then processes all mailboxes on this server every 2 days.

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

### -CalendarRepairWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The CalendarRepairWorkCycleCheckpoint parameter specifies the time span at which all mailboxes on the Mailbox server are identified as needing work completed on them. The default value is 1 day.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Calendar Repair Assistant then processes all mailboxes on this server every 2 days.

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

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DarTaskStoreTimeBasedAssistantWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -DarTaskStoreTimeBasedAssistantWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -DatabaseCopyActivationDisabledAndMoveNow

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DatabaseCopyActivationDisabledAndMoveNow parameter specifies whether to prevent databases from being mounted on this Mailbox server if there are other healthy copies of the databases on other Mailbox servers. It also immediately moves any mounted databases on the server to other servers if copies exist and are healthy.

Valid input for this parameter is $true or $false. The default value is $false.

Setting this parameter to $true doesn't cause databases to move to a server that has the DatabaseCopyAutoActivationPolicy parameter set to Blocked.

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

### -DatabaseCopyAutoActivationPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DatabaseCopyAutoActivationPolicy parameter specifies the type of automatic activation available for mailbox database copies on the specified Mailbox server. Valid values for this parameter are:

- Blocked: Databases can't be automatically activated on the specified Mailbox server. In Exchange 2013 prior to Cumulative Update 7 (CU7), this setting stops server locator requests to the specified server, which prevents all client access to manually activated databases on the server if all DAG members are configured with a value of Blocked. In Exchange 2013 CU7 or later versions of Exchange, server locator requests are sent to a blocked server if no other Mailbox servers are available, thus client access isn't affected.
- IntrasiteOnly: The database copy is allowed to be activated only on Mailbox servers in the same Active Directory site. This prevents cross-site failover and activation.
- Unrestricted: There are no special restrictions on activating mailbox database copies on the specified Mailbox server. This value is the default.

```yaml
Type: DatabaseCopyAutoActivationPolicyType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectoryProcessorWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -DirectoryProcessorWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -FaultZone

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -FolderLogForManagedFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The FolderLogForManagedFoldersEnabled parameter specifies whether managed folder logging is enabled on the Mailbox server. Valid input for this parameter is$true or $false. The default value is $false.

If you specify $true, managed folder logging is enabled. Message activity in folders that have managed folder mailbox policies applied to them is logged.

The value of this parameter affects the following parameters:

- JournalingLogForManagedFoldersEnabled
- LogDirectorySizeLimitForManagedFolders
- LogFileAgeLimitForManagedFolders
- LogFileSizeLimitForManagedFolders
- LogPathForManagedFolders
- RetentionLogForManagedFoldersEnabled
- SubjectLogForManagedFoldersEnabled

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

### -ForceGroupMetricsGeneration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ForceGroupMetricsGeneration parameter specifies that group metrics information must be generated on the Mailbox server regardless of whether that server generates an offline address book (OAB). Valid input for this parameter is $true or $false. The default value is $false.

By default, group metrics are generated only on servers that generate OABs. Group metrics information is used by MailTips to inform senders about how many recipients their messages will be sent to. You need to set this parameter to $true if your organization doesn't generate OABs and you want the group metrics data to be available.

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

### -GroupMailboxWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -GroupMailboxWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -GroupMetricsGenerationTime

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The GroupMetricsGenerationTime parameter specifies the time of day when group metrics data is generated on a Mailbox server. You must use the 24-hour clock notation (HH:MM) when specifying the generation time.

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

### -InferenceDataCollectionWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -InferenceDataCollectionWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -InferenceTrainingWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -InferenceTrainingWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -IrmLogEnabled

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogEnabled parameter enables or disables logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true Enable IRM logging
- $false Disable IRM logging

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of connectivity log files because of their age.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 megabytes (MB). When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter.

The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogPath parameter specifies the default IRM log directory location. The default value is %ExchangeInstallPath%Logging\\IRMLogs.

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

### -IsExcludedFromProvisioning

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsExcludedFromProvisioning parameter specifies that the Mailbox server isn't considered by the OAB provisioning load balancer. Valid values are:

- $true: The server isn't used for provisioning new OABs or for moving existing OABs.
- $false: The server can be used for provisioning new OABs or for moving existing OABs. This value is the default.

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

### -JournalingLogForManagedFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The JournalingLogForManagedFoldersEnabled parameter specifies whether journaling activity is recorded in the managed folder log on the Mailbox server.Valid input for this parameter is$true or $false. The default value is $false.

If you specify $true, information about messages that were journaled in managed folders is logged. The managed folder log directory is specified by the LogPathForManagedFolders parameter.

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

### -JunkEmailOptionsCommitterWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -Locale

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Locale parameter specifies the locale of the Mailbox server. A locale is a collection of language-related user preferences such as writing system, calendar, and date format. The following are examples:

- en-US (English - United States)
- de-AT (German - Austria)
- es-CL (Spanish - Chile)

For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -LogDirectorySizeLimitForManagedFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The LogDirectorySizeLimitForManagedFolders parameter specifies the maximum size of all managed folder logs from a single mailbox database in the managed folder log directory on the Mailbox server. When a set of log files reaches its maximum size, the server deletes the oldest log files first.

Every mailbox database on the server uses a different log file name prefix (for example, `Managed_Folder_Assistant<Mailbox database name>`). Therefore, the maximum size of the managed folder log directory is the number of mailbox databases multiplied by the value of the LogDirectorySizeLimitForManagedFolders parameter. Other files aren't counted in the total size calculation. Renaming old log files or copying other files into the managed folder log directory could cause the directory to exceed its specified maximum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The default value is unlimited, which means no size limit is imposed on the managed folder log directory.

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

### -LogFileAgeLimitForManagedFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The LogFileAgeLimitForManagedFolders parameter specifies how long to retain managed folder logs on the Mailbox server. Log files older than the specified value are deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify a 30 days, enter 30.00:00:00. The default value is 00:00:00, which prevents the automatic removal of managed folder log files because of their age.

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

### -LogFileSizeLimitForManagedFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The LogFileSizeLimitForManagedFolders parameter specifies the maximum size for each managed folder log file on the Mailbox server. When a log file reaches its maximum size, a new log file is created. The default value is 10 megabytes (MB).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

If you enter the value unlimited, no size limit is imposed on a managed folder log file.

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

### -LogPathForManagedFolders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The LogPathForManagedFolders parameter specifies the location of the managed folder log files on the Mailbox server. The default value is %ExchangeInstallPath%Logging\\ Managed Folder Assistant.

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

### -MailboxAssociationReplicationWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -MailboxAssociationReplicationWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -MailboxProcessorWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The MailboxProcessorWorkCycle parameter specifies how often to scan for locked mailboxes on the Mailbox server. The default value is 1 day.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

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

### -ManagedFolderAssistantSchedule

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

**Note**: Although this parameter is available in Exchange 2016 and Exchange 2019, it's only used for coexistence with previous versions of Exchange. For more information, see [Configure and run the Managed Folder Assistant in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/mrm/configure-managed-folder-assistant).

The ManagedFolderAssistantSchedule parameter specifies the intervals each week during which the Managed Folder Assistant applies messaging records management (MRM) settings to managed folders in mailboxes on the Mailbox server.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`. You can specify multiple schedules separated by commas: `"Schedule1","Schedule2",..."ScheduleN"`.

You can use the following values for days:

- Full name of the day.
- Abbreviated name of the day.
- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"
- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)
- "Sun.1:15 AM-Monday.23:00"
- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Run on Monday and Wednesday mornings from 4:30 until 5:30.)

If the Managed Folder Assistant doesn't finish processing the mailboxes on the server during the time that you've scheduled, it automatically resumes processing where it left off the next time it runs.

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ManagedFolderWorkCycle parameter specifies the time span in which all mailboxes on the Mailbox server are processed by the Managed Folder Assistant. The default value is 1 day.

The Managed Folder Assistant applies retention policies according to the ManagedFolderWorkCycleCheckpoint interval.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Managed Folder Assistant then processes all mailboxes on this server every 2 days.

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

### -ManagedFolderWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ManagedFolderWorkCycleCheckpoint parameter specifies the time span at which to refresh the list of mailboxes on the Mailbox server so that new mailboxes that have been created or moved are part of the work queue. The default value is 1 day.

Also, as mailboxes are prioritized, existing mailboxes that haven't been successfully processed for a long time are placed higher in the queue and have a greater chance of being processed again in the same work cycle.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00.

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

### -MAPIEncryptionRequired

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MAPIEncryptionRequired parameter specifies whether Exchange blocks MAPI client connections to the Mailbox server that don't use encrypted remote procedure calls (RPCs). Valid input for this parameter is$true or $false. The default value is $false.

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

### -MaximumActiveDatabases

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaximumActiveDatabases parameter specifies the maximum number of databases that can be mounted on the Mailbox server.

When the maximum number is reached, the database copies on the server isn't activated if a failover or switchover occurs. If the copies are already active on a server, the Information Store on the server doesn't allow databases to be mounted.

The default value is blank ($null), which means no maximum value is configured.

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

### -MaximumPreferredActiveDatabases

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaximumPreferredActiveDatabases parameter specifies a preferred maximum number of databases that theMailbox server should have. This value is different from the actual maximum, which is configured using the MaximumActiveDatabases parameter. The value of MaximumPreferredActiveDatabases is only honored during best copy and server selection, database and server switchovers, and when rebalancing the DAG.

The default value is blank ($null), which means no maximum value is configured.

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

### -MessageTrackingLogEnabled

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MessageTrackingLogMaxAge parameter specifies the message tracking log maximum file age. Log files older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

The valid input range for this parameter is 00:00:00 to 24855.03:14:07. Setting the value of the MessageTrackingLogMaxAge parameter to 00:00:00 prevents the automatic removal of message tracking log files because of their age.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MessageTrackingLogMaxDirectorySize parameter specifies the maximum size of the message tracking log directory. When the maximum directory size is reached, the server deletes the oldest log files first.

The maximum size of the message tracking log directory is calculated as the total size of all log files that have the same name prefix. Other files that don't follow the name prefix convention aren't counted in the total directory size calculation. Renaming old log files or copying other files into the message tracking log directory could cause the directory to exceed its specified maximum size.

When the Hub Transport server role and the Mailbox server role are installed on the same server, the maximum size of the message tracking log directory isn't the specified maximum size because the message tracking log files generated by the different server roles have different name prefixes. Message tracking log files for the Hub Transport server role or Edge Transport server role begin with the name prefix MSGTRK. Message tracking log files for the Mailbox server role begin with the name prefix MSGTRKM. When the Hub Transport server role and the Mailbox server role are installed on the same server, the maximum size of the message tracking log directory is two times the specified value.

The default value is 250 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are treated as bytes. The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MessageTrackingLogMaxFileSize parameter specifies the maximum size of the message tracking log files. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are treated as bytes. The value of the MessageTrackingLogMaxFileSize parameter must be less than or equal to the value of the MessageTrackingLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 4294967296 bytes (4 GB).

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MessageTrackingLogPath parameter specifies the location of the message tracking logs. The default location is C:\\Program Files\\Microsoft\\Exchange Server TransportRoles\\Logs\\MessageTracking. If you set the value of the MessageTrackingLogPath parameter to $null, you effectively disable message tracking. However, if you set the value of the MessageTrackingLogPath parameter to $null when the value of the MessageTrackingLogEnabled attribute is $true, event log errors occur. The preferred method to disable message tracking is to use the MessageTrackingLogEnabled parameter.

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

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MessageTrackingLogSubjectLoggingEnabled parameter specifies if the message subject should be included in the message tracking log. The default value is $true.

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

### -MigrationLogFilePath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -MigrationLogLoggingLevel

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEventType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationLogMaxAge

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -MigrationLogMaxDirectorySize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -MigrationLogMaxFileSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -OABGeneratorWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The OABGeneratorWorkCycle parameter specifies the time span in which the OAB generation on the Mailbox server are processed. The default value is 8 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 16 hours for this parameter, use 16:00:00.

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

### -OABGeneratorWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The OABGeneratorWorkCycleCheckpoint parameter specifies the time span at which to run OAB generation on the Mailbox server. The default value is 1 hour.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 hours for this parameter, use 02:00:00.

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

### -PeopleCentricTriageWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -PeopleCentricTriageWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -PeopleRelevanceWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -PeopleRelevanceWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -ProbeTimeBasedAssistantWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -ProbeTimeBasedAssistantWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -PublicFolderWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The PublicFolderWorkCycle parameter is used by the public folder assistant to determine how often the mailboxes in a database are processed by the assistant on the Mailbox server. The default value is 1 day.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

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

### -PublicFolderWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The PublicFolderWorkCycleCheckpoint determines how often the mailbox list for a database is evaluated on the Mailbox server. The processing speed is also calculated. The default value is 1 day.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

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

### -RetentionLogForManagedFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The RetentionLogForManagedFoldersEnabled parameter specifies whether retention policy activity is recorded in the managed folder log on the Mailbox server. Valid input for this parameter is$true or $false. The default value is $false.

If you specify $true, information about messages in managed folders that have been processed because they have reached their retention limits is logged. The managed folder log directory is specified by the LogPathForManagedFolders parameter.

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

### -SearchIndexRepairTimeBasedAssistantWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -SearchIndexRepairTimeBasedAssistantWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -SharePointSignalStoreWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -SharePointSignalStoreWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -SharingPolicySchedule

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SharingPolicySchedule parameter specifies the intervals each week during which the sharing policy runs on the Mailbox server. The Sharing Policy Assistant checks permissions on shared calendar items and contact folders in users' mailboxes against the assigned sharing policy. The assistant lowers or removes permissions according to the policy.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`. You can specify multiple schedules separated by commas: `"Schedule1","Schedule2",..."ScheduleN"`.

You can use the following values for days:

- Full name of the day.
- Abbreviated name of the day.
- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"
- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)
- "Sun.1:15 AM-Monday.23:00"
- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Run on Monday and Wednesday mornings from 4:30 until 5:30.)

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingPolicyWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The SharingPolicyWorkCycle parameter specifies the time span in which all mailboxes on the Mailbox server are scanned by the Sharing Policy Assistant. The default value is 1 day.

The Sharing Policy Assistant scans all mailboxes and enables or disables sharing policies according to the interval specified by the SharingPolicyWorkCycle.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Sharing Policy Assistant then processes all mailboxes on this server every 2 days.

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

### -SharingPolicyWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The SharingPolicyWorkCycleCheckpoint parameter specifies the time span at which to refresh the list of mailboxes on the Mailbox server so that new mailboxes that have been created or moved are part of the work queue. The default value is 1 day.

Also, as mailboxes are prioritized, existing mailboxes that haven't been successfully processed for a long time are placed higher in the queue and have a greater chance of being processed again in the same work cycle.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Sharing Policy Assistant then processes all mailboxes on this server every 2 days.

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

### -SharingSyncWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The SharingSyncWorkCycle parameter specifies the time span in which all mailboxes on the Mailbox server are synced to the cloud-based service by the Sharing Sync Assistant. The default value is 3 hours.

Mailboxes that require syncing are synced according to the interval specified by the SharingSyncWorkCycleCheckpoint parameter.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 8 hours for this parameter, use 08:00:00. The Sharing Sync Assistant then processes all mailboxes on this server every 8 hours.

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

### -SharingSyncWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The SharingSyncWorkCycleCheckpoint parameter specifies the time span at which to refresh the list of mailboxes on the Mailbox server so that new mailboxes that have been created or moved are part of the work queue. The default value is 3 hours.

Also, as mailboxes are prioritized, existing mailboxes that haven't been successfully processed for a long time are placed higher in the queue and have a greater chance of being processed again in the same work cycle.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 8 hours for this parameter, use 08:00:00. The Sharing Sync Assistant then processes all mailboxes on this server every 8 hours.

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

### -SiteMailboxWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The SiteMailboxWorkCycle parameter specifies the time span in which the site mailbox information on the Mailbox server are processed. The default value is 6 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 8 hours for this parameter, use 08:00:00.

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

### -SiteMailboxWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

The SiteMailboxWorkCycleCheckpoint parameter specifies the time span at which to refresh the site mailbox workcycle on the Mailbox server. The default value is 6 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 8 hours for this parameter, use 08:00:00.

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

### -StoreDsMaintenanceWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreDsMaintenanceWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreIntegrityCheckWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreIntegrityCheckWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreMaintenanceWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreMaintenanceWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreScheduledIntegrityCheckWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreScheduledIntegrityCheckWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreUrgentMaintenanceWorkCycle

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -StoreUrgentMaintenanceWorkCycleCheckpoint

> Applicable: Exchange Server 2013

This parameter is available only in Exchange Server 2013.

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

### -SubjectLogForManagedFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is used for coexistence with Exchange 2010. Specifically, this parameter works with messaging records management (MRM) 1.0 (managed folders). This parameter doesn't work with MRM 2.0 (retention policies) that were introduced in Exchange 2010 Service Pack 1 (SP1).

The SubjectLogForManagedFoldersEnabled parameter specifies whether to include the subject of messages in the managed folder logs on the Mailbox server. Valid input for this parameter is$true or $false. The default value is $false.

By default, the subject of messages is blank in the managed folder log.

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

### -SubmissionServerOverrideList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -TopNWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The TopNWorkCycle parameter specifies the time span in which all mailboxes that have Unified Messaging on the Mailbox server are scanned by the TopN Words Assistant. The default value is 7 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

The TopN Words Assistant scans voice mail for the most frequently used words to aid in transcription. The most common words are then indexed according to the interval specified by the TopNWorkCycleCheckpoint parameter.

For example, to specify 10 days for this parameter, use 10.00:00:00. The TopN Words Assistant then processes all mailboxes on which Unified Messaging is enabled on this server every 10 days.

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

### -TopNWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The TopNWorkCycleCheckpoint parameter specifies the time span at which to refresh the list of mailboxes on the Mailbox server so that new mailboxes that have been created or moved are part of the work queue. The default value is 1 day.

Also, as mailboxes are prioritized, existing mailboxes that haven't been successfully processed for a long time are placed higher in the queue and have a greater chance of being processed again in the same work cycle.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The TopN Words Assistant then processes all mailboxes on this server every 2 days.

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

### -UMReportingWorkCycle

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The UMReportingWorkCycle parameter specifies the time span in which the arbitration mailbox named SystemMailbox{e0dc1c29-89c3-4034-b678-e6c29d823ed9} on the Mailbox server are scanned by the Unified Messaging Reporting Assistant. The default value is 1 day.

The Unified Messaging Reporting Assistant updates the Call Statistics reports by reading Unified Messaging call data records for an organization on a regular basis.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00. The Unified Messaging Reporting Assistant then processes all mailboxes that have Unified Messaging enabled on this server every 2 days.

Changing the default work cycle for this assistant might affect the performance of the Mailbox server.

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

### -UMReportingWorkCycleCheckpoint

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The UMReportingWorkCycleCheckpoint parameter specifies the time span at which the arbitration mailbox named SystemMailbox{e0dc1c29-89c3-4034-b678-e6c29d823ed9} on the Mailbox server are marked by processing. The default value is 1 day.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify 2 days for this parameter, use 2.00:00:00.

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

### -WacDiscoveryEndpoint

> Applicable: Exchange Server 2016, Exchange Server 2019

The WacDiscoveryEndpoint parameter specifies the discovery endpoint for Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server) for all mailboxes on the server. For example, `https://oos.internal.contoso.com/hosting/discovery`.

Office Online Server enables users to view supported file attachments in Outlook on the web (formerly known as Outlook Web App).

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
