---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-MailboxDatabase

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-MailboxDatabase cmdlet to set the attributes of a mailbox database.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxDatabase cmdlet to configure a variety of properties for a mailbox database.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxDatabase [-Identity] <DatabaseIdParameter> [-AllowFileRestore <$true | $false>]
 [-BackgroundDatabaseMaintenance <$true | $false>] [-CircularLoggingEnabled <$true | $false>] [-Confirm]
 [-DataMoveReplicationConstraint <None | SecondCopy | SecondDatacenter | AllDatacenters | AllCopies>]
 [-DeletedItemRetention <EnhancedTimeSpan>] [-DomainController <Fqdn>]
 [-EventHistoryRetentionPeriod <EnhancedTimeSpan>] [-IndexEnabled <$true | $false>]
 [-IsExcludedFromProvisioning <$true | $false>] [-IssueWarningQuota <Unlimited>]
 [-IsSuspendedFromProvisioning <$true | $false>] [-JournalRecipient <RecipientIdParameter>]
 [-MailboxRetention <EnhancedTimeSpan>] [-MaintenanceSchedule <Schedule>] [-MountAtStartup <$true | $false>]
 [-Name <String>] [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>] [-PublicFolderDatabase <DatabaseIdParameter>]
 [-QuotaNotificationSchedule <Schedule>] [-RecoverableItemsQuota <Unlimited>]
 [-RecoverableItemsWarningQuota <Unlimited>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RpcClientAccessServer <ClientAccessServerOrArrayIdParameter>] [-WhatIf]
 [-AutoDagExcludeFromMonitoring <$true | $false>]
 [-AutoDatabaseMountDial <Lossless | GoodAvailability | BestAvailability>] [-CalendarLoggingQuota <Unlimited>]
 [-DatabaseGroup <String>] [-IsExcludedFromInitialProvisioning <$true | $false>]
 [-MailboxLoadBalanceEnabled <$true | $false>] [-MailboxLoadBalanceMaximumEdbFileSize <ByteQuantifiedSize>]
 [-MailboxLoadBalanceOverloadedThreshold <Int32>] [-MailboxLoadBalanceRelativeLoadCapacity <Int32>]
 [-MailboxLoadBalanceUnderloadedThreshold <Int32>]
 [-MailboxProvisioningAttributes <MailboxProvisioningAttributes>] [-BackgroundDatabaseMaintenanceDelay <Int32>]
 [-BackgroundDatabaseMaintenanceSerialization <$true | $false>] [-CachedClosedTables <Int32>]
 [-CachePriority <Int32>] [-CafeEndpoints <String[]>] [-DatabaseExtensionSize <Int32>]
 [-IsExcludedFromProvisioningByOperator <$true | $false>]
 [-IsExcludedFromProvisioningDueToLogicalCorruption <$true | $false>]
 [-IsExcludedFromProvisioningReason <String>] [-LogBuffers <Int32>] [-LogCheckpointDepth <Int32>]
 [-MasterDatabaseAvailabilityGroup <DatabaseAvailabilityGroupIdParameter>] [-MasterServer <ServerIdParameter>]
 [-MaximumBackgroundDatabaseMaintenanceInterval <Int32>] [-MaximumCursors <Int32>] [-MaximumOpenTables <Int32>]
 [-MaximumPreReadPages <Int32>] [-MaximumReplayPreReadPages <Int32>] [-MaximumSessions <Int32>]
 [-MaximumTemporaryTables <Int32>] [-MaximumVersionStorePages <Int32>]
 [-MetaCacheDatabaseMaxCapacityInBytes <Int64>] [-MimimumBackgroundDatabaseMaintenanceInterval <Int32>]
 [-PreferredVersionStorePages <Int32>] [-ReplayBackgroundDatabaseMaintenance <$true | $false>]
 [-ReplayBackgroundDatabaseMaintenanceDelay <Int32>] [-ReplayCachePriority <Int32>]
 [-ReplayCheckpointDepth <Int32>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

For more information about permissions, delegating roles, and the rights required to administer Microsoft Exchange Server 2010, see Permissions.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox Database permissions" section in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox Database Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-MailboxDatabase "Mailbox Database01" -DeletedItemRetention 7.00:00:00
```

This example sets the length of time that deleted items are retained. If a particular mailbox has its own item retention set, that value is used instead of this value, which is set on the mailbox database.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-MailboxDatabase "Mailbox Database01" -DeletedItemRetention 7.00:00:00
```

This example sets the length of time that deleted items are retained. If a specific mailbox has its own item retention set, that value is used instead of this value, which is set on the mailbox database.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-MailboxDatabase "Mailbox Database01" -DeletedItemRetention 7.00:00:00
```

This example sets the length of time that deleted items are retained. If a specific mailbox has its own item retention set, that value is used instead of this value, which is set on the mailbox database.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-MailboxDatabase <Mailbox Database Name> -RpcClientAccessServer <ClientAccessServer or ClientAccessServerArrayID>
```

This example updates a mailbox database so that all client connections for mailboxes on the database come through the Client Access server or Client Access server array. You can also use this command to change the Client Access server or Client Access server array through which the client is connecting to the Mailbox server.


For more information about RPC access through Client Access servers, see Set-RpcClientAccess and Set-ClientAccessArray.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the mailbox database for which you want to set one or more attributes. You can use the following values:

- GUID

- Distinguished name (DN)

- Name of the mailbox database

If you don't specify the server name, the command searches for the database on the local server.



!!! Exchange Server 2016

The Identity parameter specifies the mailbox database that you want to modify. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowFileRestore
!!! Exchange Server 2010, Exchange Server 2013

The AllowFileRestore parameter specifies whether to allow restoring a database from a backup. The two possible values are $true or $false. If you specify $true, the command allows a database that doesn't match the database entry in Active Directory to be mounted. If you specify $false, the command doesn't allow a database that doesn't match the database entry in Active Directory to be mounted, so you won't be able to replace an existing database with a newly created database.



!!! Exchange Server 2016

The AllowFileRestore parameter specifies whether to allow a database to be restored from a backup. Valid values are:

- $true: You can replace an existing database with a newly-created database. You can mount a database that doesn't match the database entry in Active Directory.

- $false: You can't replace an existing database with a newly-created database. You can't mount a database that doesn't match the database entry in Active Directory. This is the default value.



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

### -BackgroundDatabaseMaintenance
!!! Exchange Server 2010, Exchange Server 2013

The BackgroundDatabaseMaintenance parameter specifies whether the Extensible Storage Engine (ESE) performs database maintenance. The two possible values are $true or $false. If you specify $true, the mailbox database reads the object during database mount and initializes the database to perform the background database maintenance. If you specify $false, the mailbox database reads the object during database mount and initializes the database without the option to perform the background database maintenance.



!!! Exchange Server 2016

The BackgroundDatabaseMaintenance parameter specifies whether the Extensible Storage Engine (ESE) performs database maintenance. Valid values are:

- $true: The mailbox database reads the object during database mount and initializes the database to perform background maintenance. This is the default value.

- $false: The mailbox database reads the object during database mount and initializes the database without the option to perform background maintenance.



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

### -CircularLoggingEnabled
!!! Exchange Server 2010, Exchange Server 2013

The CircularLoggingEnabled parameter specifies whether circular logging is enabled. If this parameter is set to $true, circular logging is enabled. The default value is $false.



!!! Exchange Server 2016

The CircularLoggingEnabled parameter specifies whether circular logging is enabled for the database. Valid values are:

- $true: Circular logging is enabled.

- $false: Circular logging is disabled. This is the default value.

For more information about circular logging, see .



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

### -DataMoveReplicationConstraint
!!! Exchange Server 2010

The DataMoveReplicationConstraint parameter specifies the throttling behavior for high availability mailbox moves. The possible values include:

- None Moves shouldn't be throttled to ensure high availability. Use this setting if the database isn't part of a database availability group (DAG).

- SecondCopy At least one passive mailbox database copy must have the most recent changes synchronized. This is the default value. Use this setting to indicate that the database is replicated to one or more mailbox database copies.

- SecondDatacenter At least one passive mailbox database copy in another Active Directory site must have the most recent changes replicated. Use this setting to indicate that the database is replicated to database copies in multiple Active Directory sites.

- AllDatacenters At least one passive mailbox database copy in each Active Directory site must have the most recent changes replicated. Use this setting to indicate that the database is replicated to database copies in multiple Active Directory sites.

- AllCopies All copies of the database must have the most recent changes replicated. Use this setting to indicate that the database is replicated to one or more mailbox database copies.

Any value other than None enables the Microsoft Exchange Mailbox Replication service to coordinate with Active Manager. For more information, see Understanding Active Manager.



!!! Exchange Server 2013

The DataMoveReplicationConstraint parameter specifies the throttling behavior for high availability mailbox moves. The possible values include:

- None Moves shouldn't be throttled to ensure high availability. Use this setting if the database isn't part of a database availability group (DAG).

- SecondCopy At least one passive mailbox database copy must have the most recent changes synchronized. This is the default value. Use this setting to indicate that the database is replicated to one or more mailbox database copies.

- SecondDatacenter At least one passive mailbox database copy in another Active Directory site must have the most recent changes replicated. Use this setting to indicate that the database is replicated to database copies in multiple Active Directory sites.

Any value other than None enables the Microsoft Exchange Mailbox Replication service to coordinate with Active Manager. For more information, see Active Manager.



!!! Exchange Server 2016

The DataMoveReplicationConstraint parameter specifies the throttling behavior for high availability mailbox moves. Valid values are:

- None: Moves shouldn't be throttled to ensure high availability. Use this setting if the database isn't part of a database availability group (DAG).

- SecondCopy: At least one passive mailbox database copy must have the most recent changes synchronized. This is the default value. Use this setting to indicate that the database is replicated to one or more mailbox database copies.

- SecondDatacenter: At least one passive mailbox database copy in another Active Directory site must have the most recent changes replicated. Use this setting to indicate that the database is replicated to database copies in multiple Active Directory sites.

Any value other than None enables the Microsoft Exchange Mailbox Replication service to coordinate with Active Manager. For more information, see Active Manager.



```yaml
Type: None | SecondCopy | SecondDatacenter | AllDatacenters | AllCopies
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeletedItemRetention
!!! Exchange Server 2010, Exchange Server 2013

The DeletedItemRetention parameter specifies the length of time to keep deleted items.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a 15-hour interval, enter 15:00:00. The maximum length of time to retain deleted items is 24,855 days. By default, deleted items are retained for 14 days. This attribute applies to all mailboxes in this mailbox database that don't have their own item retention attribute set.



!!! Exchange Server 2016

The DeletedItemRetention parameter specifies the length of time to keep deleted items in the Recoverable Items\\Deletions folder in mailboxes. Items are moved to this folder when the user deletes items from the Deleted Items folder, empties the Deleted Items folder, or deletes items by using Shift+Delete.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 14.00:00:00 (14 days).

This setting applies to all mailboxes in the database that don't have their own deleted item retention value configured.

For more information, see Recoverable Items folder in Exchange 2016.



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

### -EventHistoryRetentionPeriod
!!! Exchange Server 2010, Exchange Server 2013

The EventHistoryRetentionPeriod parameter specifies the length of time to keep event data. This event data is stored in the event history table in the Exchange store. It includes information about changes to various objects in the mailbox database. You can use this parameter to prevent the event history table from becoming too large and using too much disk space.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a 15-hour interval, enter 15:00:00.



!!! Exchange Server 2016

The EventHistoryRetentionPeriod parameter specifies the length of time to keep event data. This event data is stored in the event history table in the Exchange store. It includes information about changes to various objects in the mailbox database. You can use this parameter to prevent the event history table from becoming too large and using too much disk space.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:01 to 30.00:00:00. The default value is 7.00:00:00 (7 days).



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

### -IndexEnabled
!!! Exchange Server 2010, Exchange Server 2013

The IndexEnabled parameter specifies whether Exchange Search indexes this mailbox database. The two possible values are $true or $false. The default value is $true.



!!! Exchange Server 2016

The IndexEnabled parameter specifies whether Exchange Search indexes the mailbox database. Valid values are:

- $true: Exchange Search indexes the mailbox database. This is the default value.

- $false: Exchange Search doesn't index the mailbox database.



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

### -IsExcludedFromProvisioning
!!! Exchange Server 2010, Exchange Server 2013

The IsExcludedFromProvisioning parameter specifies that this database is permanently not considered by the mailbox provisioning load balancer. If the IsExcludedFromProvisioning parameter is enabled, new mailboxes aren't added automatically to this database. You can manually add a mailbox if your role permits.



!!! Exchange Server 2016

The IsExcludedFromProvisioning parameter specifies whether to exclude the database from the mailbox provisioning load balancer that distributes new mailboxes randomly and evenly across the available databases. Valid values are:

- $true: The database is excluded from new or move mailbox operations when you don't specify the target mailbox database.

- $false: The database can be used in new or move mailbox operations when you don't specify the target mailbox database. This is the default value.

The value is automatically set to $true when you set the IsExcludedFromProvisioningDueToLogicalCorruption parameter to $true, and isn't changed back to $false when you set the IsExcludedFromProvisioningDueToLogicalCorruption parameter back to $false. In the case of database corruption, you should set the IsExcludedFromProvisioning parameter back to $false only after you fix the corruption issue or recreate the database.



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

### -IssueWarningQuota
!!! Exchange Server 2010, Exchange Server 2013

The IssueWarningQuota parameter specifies the mailbox size at which a warning message is sent to the user.

This attribute applies to all mailboxes in this mailbox database that don't have their own warning quota attribute set. You must specify either an integer or unlimited. The default value is 1.9 gigabytes (GB).



!!! Exchange Server 2016

The IssueWarningQuota parameter specifies the warning threshold for the size of the mailbox. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The IssueWarningQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

This setting applies to all mailboxes in the database that don't have their own warning quota configured. The default value is 1.899 gigabytes (2,039,480,320 bytes).



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

### -IsSuspendedFromProvisioning
!!! Exchange Server 2010, Exchange Server 2013

The IsSuspendedFromProvisioning parameter specifies that this database is temporarily not considered by the mailbox provisioning load balancer.



!!! Exchange Server 2016

The IsSuspendedFromProvisioning parameter specifies whether to exclude the database from the mailbox provisioning load balancer that distributes new mailboxes randomly and evenly across the available databases. Valid values are:

- $true: Indicates that you don't want the exclusion to be permanent. The database is excluded from new or move mailbox operations when you don't specify the target mailbox database.

- $false: The database can be used in new or move mailbox operations when you don't specify the target mailbox database. This is the default value.

Note that setting this parameter to the value $true has these additional effects on the database:

- The IsExcludedFromProvisioningReason parameter requires a value if it doesn't already have one.

- The unmodifiable IsExcludedFromProvisioningBy property is populated with your user account.



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

### -JournalRecipient
!!! Exchange Server 2010, Exchange Server 2013

The JournalRecipient parameter specifies the mailbox to which journal reports are sent.



!!! Exchange Server 2016

The JournalRecipient parameter specifies the journal recipient to use for per-database journaling for all mailboxes on the database. You can use any value that uniquely identifies the recipient. For example:

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID



```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRetention
!!! Exchange Server 2010, Exchange Server 2013

The MailboxRetention parameter specifies the length of time to keep deleted mailboxes.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a 15-hour interval, enter 15:00:00. The maximum length of time to retain mailboxes is 24,855 days. By default, deleted mailboxes are retained for 30 days. This attribute applies to all mailboxes in this mailbox database.



!!! Exchange Server 2016

The MailboxRetention parameter specifies the length of time to keep deleted mailboxes before they are permanently deleted or purged.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Valid values are 00:00:00 to 24855.03:14:07. The default value is 30.00:00:00 (30 days).



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

### -MaintenanceSchedule
!!! Exchange Server 2010

The MaintenanceSchedule parameter specifies when maintenance will be performed on the mailbox database. Maintenance includes online defragmentation, removing items that have passed their retention period, removing unused indexes, and other cleanup tasks.

The format is StartDay.Hour:Minute [AM/PM]-EndDay.Hour:Minute [AM/PM]. You can use the following values for the start and end days:

- Full name of the day

- Abbreviated name of the day

- Integer from 0 through 6, where 0 = Sunday

If you prefer to use a 24-hour clock, omit AM/PM. If you use AM/PM, you must include a space between the time and AM or PM.

Formats can be mixed.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

The following are examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- 6.22:00-6.22:15 (Maintenance will run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Maintenance will run on Monday and Wednesday mornings from 4:30 until 5:30.)

- "Sun.1:15 AM-Monday.23:00"



!!! Exchange Server 2013

This parameter has been deprecated in Exchange 2013. While it can be used to change the MaintenanceSchedule property of a database, that property is ignored in Exchange 2013 because scheduled maintenance no longer exists.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.

Although you can use this parameter to change the MaintenanceSchedule property of the database, the value is ignored.



```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MountAtStartup
!!! Exchange Server 2010

The MountAtStartup parameter specifies whether to mount this mailbox database when the Microsoft Exchange Information Store service starts. The two possible values for this parameter are $true or $false.



!!! Exchange Server 2013

The MountAtStartup parameter specifies whether to mount this mailbox database when the MicrosoftExchange Information Store service starts. The two possible values for this parameter are $true or $false.



!!! Exchange Server 2016

The MountAtStartup parameter specifies whether to mount the mailbox database when the Microsoft Exchange Information Store service starts. Valid values are:

- $true: The database is mounted when the service starts. This is the default value.

- $false: The database isn't mounted when the service starts.



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

### -Name
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies the name of the mailbox database.



!!! Exchange Server 2016

The Name parameter specifies the unique name of the mailbox database. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -OfflineAddressBook
!!! Exchange Server 2010, Exchange Server 2013

The OfflineAddressBook parameter specifies the associated address book for this mailbox database.



!!! Exchange Server 2016

The OfflineAddressBook parameter specifies the offline address book that's associated with the mailbox database. You can use any value that uniquely identifies the offline address book. For example:

- Name

- Distinguished name (DN)

- GUID

By default, this setting is blank ($null).



```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitSendQuota
!!! Exchange Server 2010, Exchange Server 2013

The ProhibitSendQuota parameter specifies the mailbox size at which users associated with mailboxes in this mailbox database can no longer send messages. This attribute applies to all mailboxes in this mailbox database that don't have their own prohibit send quota attributes set.

You must specify either an integer or unlimited.



!!! Exchange Server 2016

The ProhibitSendQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send new messages, and the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The ProhibitSendQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

This settings applies to all mailboxes in the database that don't have their own prohibit send quota configured. The default value is 2 gigabytes (2147483648 bytes).



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

### -ProhibitSendReceiveQuota
!!! Exchange Server 2010, Exchange Server 2013

The ProhibitSendReceiveQuota parameter specifies the mailbox size at which the user associated with this mailbox can no longer send or receive messages. This attribute applies to all mailboxes in this mailbox database that don't have their own prohibit send receive quota attributes set.

You must specify either an integer or unlimited.



!!! Exchange Server 2016

The ProhibitSendReceiveQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send or receive new messages. Messages sent to the mailbox are returned to the sender with a descriptive error message. This value effectively determines the maximum size of the mailbox.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value must be greater than or equal to the ProhibitSendQuota or IssueWarningQuota values.

This setting applies to all mailboxes in the database that don't have their own prohibit send receive quota configured. The default value is 2.99804 gigabytes (2469396480 bytes)



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

### -PublicFolderDatabase
!!! Exchange Server 2010

The PublicFolderDatabase parameter specifies the associated public folder database for this mailbox database. You can use the following values:

- GUID

- Distinguished name (DN)

- Name of the public folder database

- Database name



!!! Exchange Server 2013

This parameter has been deprecated in Exchange 2013 and it no longer does anything.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuotaNotificationSchedule
!!! Exchange Server 2010

The QuotaNotificationSchedule parameter specifies when quota messages are sent to mailboxes that have reached one of the quota values.

The format is StartDay.Hour:Minute [AM/PM]-EndDay.Hour:Minute [AM/PM]. You can use the following values for the start and end days:

- Full name of the day

- Abbreviated name of the day

- Integer from 0 through 6, where 0 = Sunday

If you prefer to use a 24-hour clock, omit AM/PM.

Formats can be mixed.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

The following are examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- 6.22:00-6.22:15 (Notification will run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Notification will run on Monday and Wednesday mornings from 4:30 until 5:30.)

- "Sun.1:15 AM-Monday.23:00"



!!! Exchange Server 2013

This parameter has been deprecated in Exchange 2013 and it no longer does anything.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverableItemsQuota
!!! Exchange Server 2010, Exchange Server 2013

The RecoverableItemsQuota parameter specifies the limit for the Recovery Items folder. When you reach the quota limit, you can't put any more items in the Recovery Items folder.



!!! Exchange Server 2016

The RecoverableItemsQuota parameter specifies the maximum size for the Recoverable Items folder of the mailbox. If the Recoverable Items folder reaches or exceeds this size, it no longer accepts messages.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 30 gigabytes (32212254720 bytes).

When you enter a number, you can qualify it with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The RecoverableItemsQuota value must be greater than or equal to the RecoverableItemsWarningQuota value.

This settings applies to all mailboxes in the database that don't have their own Recoverable Items quota configured.



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

### -RecoverableItemsWarningQuota
!!! Exchange Server 2010, Exchange Server 2013

The RecoverableItemsWarningQuota parameter specifies the quota for when a warning event is entered in Event Viewer.



!!! Exchange Server 2016

The RecoverableItemsWarningQuota parameter specifies the warning threshold for the size of the Recoverable Items folder for the mailbox. If the Recoverable Items folder reaches or exceeds this size, Exchange logs an event to the application event log.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 20 gigabytes (21474836480 bytes).

When you enter a number, you can qualify it with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The RecoverableItemsWarningQuota value must be less than or equal to the RecoverableItemsQuota value.

This settings applies to all mailboxes in the database that don't have their own Recoverable Items warning quota configured.



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

### -RetainDeletedItemsUntilBackup
!!! Exchange Server 2010, Exchange Server 2013

The RetainDeletedItemsUntilBackup parameter specifies whether to retain deleted items until the next backup occurs. The two possible values for this parameter are $true or $false.



!!! Exchange Server 2016

The RetainDeletedItemsUntilBackup parameter specifies whether to keep items in the Recoverable Items\\Deletions folder of the mailbox until the next database backup occurs. Valid values are:

- $true: Deleted items are kept until the next mailbox database backup. This value could effectively override the deleted item retention and recoverable items quota values.

- $false: Retention of deleted items doesn't depend on a backup of the mailbox database. This is the default value.

For more information, see Recoverable Items folder in Exchange 2016 (https://technet.microsoft.com/library/ee364755.aspx).

This settings applies to all mailboxes in the database that don't have this value specifically configured.



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

### -RpcClientAccessServer
The RpcClientAccessServer parameter specifies the Client Access server or Client Access server array through which RPC clients (for example, Microsoft Office Outlook 2007 clients) access their mailboxes. This feature is supported for all versions of Outlook.

When connecting with Outlook 2003 clients, RPC encryption is disabled by default. Unless RPC encryption is enabled on Outlook 2003 or disabled on the server, Outlook 2003 clients won't be able to connect. For more information, see Understanding RPC Client Access.

```yaml
Type: ClientAccessServerOrArrayIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

### -AutoDagExcludeFromMonitoring
!!! Exchange Server 2013

The AutoDagExcludedFromMonitoring is to exclude a mailbox database from the ServerOneCopyMonitor which alerts an administrator when a replicated database has only one healthy copy available. The default setting for this property is False. If this property is not set to True for a database and there is only one copy of the database, alerts will be issued.



!!! Exchange Server 2016

The AutoDagExcludedFromMonitoringparameter specifies whether to exclude the mailbox database from the ServerOneCopyMonitor, which alerts an administrator when a replicated database has only one healthy copy available. Valid values are:

- $true: No alert is issued when there's only one healthy copy of the replicated database.

- $false: An alert is issued when there's only one healthy copy of the replicated database. This is the default value.



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

### -AutoDatabaseMountDial
This parameter is reserved for internal Microsoft use.

```yaml
Type: Lossless | GoodAvailability | BestAvailability
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarLoggingQuota
!!! Exchange Server 2013

The CalendarLoggingQuota parameter specifies how much space to allocate for calendar logging information.



!!! Exchange Server 2016

The CalendarLoggingQuota parameter specifies the maximum size of the log in the Recoverable Items folder of the mailbox that stores changes to calendar items. When the log exceeds this size, calendar logging is disabled until messaging records management (MRM) removes older calendar logs to free up more space.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 6 gigabytes (6442450944 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the RecoverableItemsQuota parameter.

This setting applies to all mailboxes in the database that don't have their own calendar logging quota configured.



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

### -DatabaseGroup
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromInitialProvisioning
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

### -MailboxLoadBalanceEnabled
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

### -MailboxLoadBalanceMaximumEdbFileSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceOverloadedThreshold
This parameter is reserved for internal Microsoft use.

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

### -MailboxLoadBalanceRelativeLoadCapacity
This parameter is reserved for internal Microsoft use.

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

### -MailboxLoadBalanceUnderloadedThreshold
This parameter is reserved for internal Microsoft use.

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

### -MailboxProvisioningAttributes
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxProvisioningAttributes
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackgroundDatabaseMaintenanceDelay
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackgroundDatabaseMaintenanceSerialization
This parameter is reserved for internal Microsoft use.

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

### -CachedClosedTables
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CachePriority
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CafeEndpoints
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseExtensionSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromProvisioningByOperator
The IIsExcludedFromProvisioningByOperator parameter specifies whether to exclude the database from the mailbox provisioning load balancer that distributes new mailboxes randomly and evenly across the available databases.

Valid values are:

- $true: Indicates that you manually excluded the database. The database is excluded from new or move mailbox operations when you don't specify the target mailbox database.

- $false: The database can be used in new or move mailbox operations when you don't specify the target mailbox database. This is the default value.

Note that setting this parameter to the value $true has these additional effects on the database:

- The IsExcludedFromProvisioningReason parameter requires a value if it doesn't already have one.

- The unmodifiable IsExcludedFromProvisioningBy property is populated with your user account.

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

### -IsExcludedFromProvisioningDueToLogicalCorruption
The IsExcludedFromProvisioningDueToLogicalCorruption parameter specifies whether to exclude the database from the mailbox provisioning load balancer that distributes new mailboxes randomly and evenly across the available databases.

Valid values are:

- $true: Indicates that you excluded the database due to database corruption. The database is excluded from new or move mailbox operations when you don't specify the target mailbox database.

- $false: This is the default value. The database can be used in new or move mailbox operations when you don't specify the target mailbox database. You should manually configure this value only after the database corruption is fixed, or after the database is recreated.

Note that setting this parameter to the value $true has these additional effects on the database:

- The IsExcludedFromProvisioningReason parameter requires a value if it doesn't already have one.

- The unmodifiable IsExcludedFromProvisioningBy property is populated with your user account.

- The IsExcludedFromProvisioning property is automatically set to $true.

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

### -IsExcludedFromProvisioningReason
The IsExcludedFromProvisioningReason parameter specifies the reason why you excluded the mailbox database from the mailbox provisioning load balancer. If the value contains spaces, enclose the value in quotation marks ("). The value must contain at least 10 characters.

This parameter requires a value when you set any of the following parameters to $true:

- IsExcludedFromProvisioning

- IsExcludedFromProvisioningByOperator

- IsSuspendedFromProvisioning

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogBuffers
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogCheckpointDepth
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MasterDatabaseAvailabilityGroup
This parameter is reserved for internal Microsoft use.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MasterServer
This parameter is reserved for internal Microsoft use.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumBackgroundDatabaseMaintenanceInterval
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumCursors
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumOpenTables
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumPreReadPages
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumReplayPreReadPages
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumSessions
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumTemporaryTables
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumVersionStorePages
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetaCacheDatabaseMaxCapacityInBytes
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MimimumBackgroundDatabaseMaintenanceInterval
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredVersionStorePages
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayBackgroundDatabaseMaintenance
This parameter is reserved for internal Microsoft use.

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

### -ReplayBackgroundDatabaseMaintenanceDelay
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayCachePriority
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayCheckpointDepth
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
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

[Online Version](https://technet.microsoft.com/library/a01edc66-bc10-4f65-9df4-432cb9e88f58.aspx)

