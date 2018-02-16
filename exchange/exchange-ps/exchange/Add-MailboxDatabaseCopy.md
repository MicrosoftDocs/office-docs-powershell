---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Add-MailboxDatabaseCopy

## SYNOPSIS
!!! Exchange Server 2010

Use the Add-MailboxDatabaseCopy cmdlet to add a new mailbox database copy to an existing database.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Add-MailboxDatabaseCopy cmdlet to create a passive copy of an existing active mailbox database.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Add-MailboxDatabaseCopy [-Identity] <DatabaseIdParameter> [-MailboxServer] <MailboxServerIdParameter>
 [-ActivationPreference <UInt32>] [-Confirm] [-DomainController <Fqdn>] [-ReplayLagTime <EnhancedTimeSpan>]
 [-SeedingPostponed] [-TruncationLagTime <EnhancedTimeSpan>] [-WhatIf] [-ConfigurationOnly]
 [-ReplayLagMaxDelay <EnhancedTimeSpan>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To use the Add-MailboxDatabaseCopy cmdlet to add a mailbox database copy, the following criteria must be met:

- The specified database must be a mailbox database. The Add-MailboxDatabaseCopy cmdlet can't be used to create copies of public folder databases. Use public folder replication for public folder data redundancy.

- The specified Mailbox server must be in the same database availability group (DAG), and the DAG must have quorum and be healthy.

- The specified Mailbox server must not already host a copy of the specified mailbox database.

- The database path used by the specified database must also be available on the specified Mailbox server, because all copies of a database must use the same path.

- If you're adding the second copy of a database (for example, adding the first passive copy of the database), circular logging must not be enabled for the specified mailbox database. If circular logging is enabled, you must first disable it. After the mailbox database copy has been added, circular logging can be enabled. After enabling circular logging for a replicated mailbox database, continuous replication circular logging (CRCL) is used instead of JET circular logging. If you're adding the third or subsequent copy of a database, CRCL can remain enabled.

After running the Add-MailboxDatabaseCopy cmdlet, the new copy will remain in a Suspended state if the SeedingPostponed parameter is specified. When the database copy status is set to Suspended, the SuspendMessage is set to "Replication is suspended for database copy '{0}' because database needs to be seeded."

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox database copies" entry in the High Availability Permissions topic.

!!! Exchange Server 2013

To use the Add-MailboxDatabaseCopy cmdlet to add a mailbox database copy, the following criteria must be met:

- The specified Mailbox server must be in the same database availability group (DAG), and the DAG must have quorum and be healthy.

- The specified Mailbox server must not already host a copy of the specified mailbox database.

- The database path used by the specified database must also be available on the specified Mailbox server, because all copies of a database must use the same path.

- If you're adding the second copy of a database (for example, adding the first passive copy of the database), circular logging must not be enabled for the specified mailbox database. If circular logging is enabled, you must first disable it. After the mailbox database copy has been added, circular logging can be enabled. After enabling circular logging for a replicated mailbox database, continuous replication circular logging (CRCL) is used instead of JET circular logging. If you're adding the third or subsequent copy of a database, CRCL can remain enabled.

After running the Add-MailboxDatabaseCopy cmdlet, the new copy remains in a Suspended state if the SeedingPostponed parameter is specified. When the database copy status is set to Suspended, the SuspendMessage is set to "Replication is suspended for database copy '{0}' because database needs to be seeded."

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Database availability groups" entry in the High availability and site resilience permissions topic.

!!! Exchange Server 2016

To use the Add-MailboxDatabaseCopy cmdlet to add a mailbox database copy, the following criteria must be met:

- The specified Mailbox server must be in the same database availability group (DAG), and the DAG must have quorum and be healthy.

- The specified Mailbox server must not already host a copy of the specified mailbox database.

- The database path used by the specified database must also be available on the specified Mailbox server, because all copies of a database must use the same path.

- If you're adding the second copy of a database (for example, adding the first passive copy of the database), circular logging must not be enabled for the specified mailbox database. If circular logging is enabled, you must first disable it. After the mailbox database copy has been added, circular logging can be enabled. After enabling circular logging for a replicated mailbox database, continuous replication circular logging (CRCL) is used instead of JET circular logging. If you're adding the third or subsequent copy of a database, CRCL can remain enabled.

After running the Add-MailboxDatabaseCopy cmdlet, the new copy remains in a Suspended state if the SeedingPostponed parameter is specified. When the database copy status is set to Suspended, the SuspendMessage is set to "Replication is suspended for database copy '{0}' because database needs to be seeded."

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Add-MailboxDatabaseCopy -Identity DB1 -MailboxServer MBX3 -ReplayLagTime 00:10:00 -TruncationLagTime 00:15:00 -ActivationPreference 2
```

This example adds a copy of mailbox database DB1 to the Mailbox server MBX3. Replay lag time and truncation lag time are configured with values of 10 minutes and 15 minutes, respectively. The activation preference is configured with a value of 2.

### Example 1 -------------------------- (Exchange Server 2013)
```
Add-MailboxDatabaseCopy -Identity DB1 -MailboxServer MBX3 -ReplayLagTime 00:10:00 -TruncationLagTime 00:15:00 -ActivationPreference 2
```

This example adds a copy of mailbox database DB1 to the Mailbox server MBX3. Replay lag time and truncation lag time are configured with values of 10 minutes and 15 minutes, respectively. The activation preference is configured with a value of 2.

### Example 1 -------------------------- (Exchange Server 2016)
```
Add-MailboxDatabaseCopy -Identity DB1 -MailboxServer MBX3 -ReplayLagTime 00:10:00 -TruncationLagTime 00:15:00 -ActivationPreference 2
```

This example adds a copy of mailbox database DB1 to the Mailbox server MBX3. Replay lag time and truncation lag time are configured with values of 10 minutes and 15 minutes, respectively. The activation preference is configured with a value of 2.

### Example 2 -------------------------- (Exchange Server 2010)
```
Add-MailboxDatabaseCopy -Identity DB2 -MailboxServer MBX1 -ActivationPreference 3
```

This example adds a copy of mailbox database DB2 to the Mailbox server MBX1. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 3.

### Example 2 -------------------------- (Exchange Server 2013)
```
Add-MailboxDatabaseCopy -Identity DB2 -MailboxServer MBX1 -ActivationPreference 3
```

This example adds a copy of mailbox database DB2 to the Mailbox server MBX1. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 3.

### Example 2 -------------------------- (Exchange Server 2016)
```
Add-MailboxDatabaseCopy -Identity DB2 -MailboxServer MBX1 -ActivationPreference 3
```

This example adds a copy of mailbox database DB2 to the Mailbox server MBX1. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 3.

### Example 3 -------------------------- (Exchange Server 2010)
```
Add-MailboxDatabaseCopy -Identity DB3 -MailboxServer MBX4 -ActivationPreference 5 -SeedingPostponed
```

This example adds a copy of mailbox database DB3 to the Mailbox server MBX4. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 5. In addition, seeding is being postponed for this copy so that it can be seeded using a local source server instead of the current active database copy, which is geographically distant from MBX4.

### Example 3 -------------------------- (Exchange Server 2013)
```
Add-MailboxDatabaseCopy -Identity DB3 -MailboxServer MBX4 -ActivationPreference 5 -SeedingPostponed
```

This example adds a copy of mailbox database DB3 to the Mailbox server MBX4. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 5. In addition, seeding is being postponed for this copy so that it can be seeded using a local source server instead of the current active database copy, which is geographically distant from MBX4.

### Example 3 -------------------------- (Exchange Server 2016)
```
Add-MailboxDatabaseCopy -Identity DB3 -MailboxServer MBX4 -ActivationPreference 5 -SeedingPostponed
```

This example adds a copy of mailbox database DB3 to the Mailbox server MBX4. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 5. In addition, seeding is being postponed for this copy so that it can be seeded using a local source server instead of the current active database copy, which is geographically distant from MBX4.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the mailbox database being copied. Database names must be unique within the Exchange organization.

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

### -MailboxServer
The MailboxServer parameter specifies the name of the server that will host the database copy. This server must be a member of the same DAG and must not already host a copy of the database.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivationPreference
!!! Exchange Server 2010

The value of the ActivationPreference parameter is used as part of Active Manager's best copy selection process and to redistribute active mailbox databases throughout the DAG when using the RedistributeActiveDatabases.ps1 script. The value for the activation preference is a number equal to or greater than 1, where 1 is at the top of the preference order. The preference number can't be larger than the number of copies of the mailbox database.



!!! Exchange Server 2013, Exchange Server 2016

The ActivationPreference parameter value is used as part of Active Manager's best copy selection process and to redistribute active mailbox databases throughout the DAG when using the RedistributeActiveDatabases.ps1 script. The value for the activation preference is a number equal to or greater than 1, where 1 is at the top of the preference order. The preference number can't be larger than the number of copies of the mailbox database.



```yaml
Type: UInt32
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

### -ReplayLagTime
!!! Exchange Server 2010

The ReplayLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before replaying log files that have been copied to the database copy. The format for this parameter is (Days.Hours:Minutes:Seconds). The default setting for this value is 0 seconds. The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log replay activity.



!!! Exchange Server 2013

The ReplayLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service waits before replaying log files that have been copied to the database copy.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log replay activity.

For example, to specify a 14-day replay lag period, enter 14.00:00:00. The default value is 00.00:00:00, which specifies that there's no replay lag.



!!! Exchange Server 2016

The ReplayLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service waits before replaying log files that have been copied to the database copy.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 00.00:00:00, which specifies that there's no truncation lag. The maximum value is 14.00:00:00 (14 days).



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

### -SeedingPostponed
!!! Exchange Server 2010

The SeedingPostponed parameter specifies that the task not seed the database copy. You must then explicitly seed the database copy.



!!! Exchange Server 2013

The SeedingPostponed parameter specifies that the task doesn't seed the database copy. You must then explicitly seed the database copy.



!!! Exchange Server 2016

The SeedingPostponed switch specifies that the task doesn't seed the database copy, so you need to explicitly seed the database copy. You don't need to specify a value with this switch.



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

### -TruncationLagTime
!!! Exchange Server 2010

The TruncationLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before truncating log files that have replayed into a copy of the database. The time period begins after the log has been successfully replayed into the copy of the database. The format for this parameter is (Days.Hours:Minutes:Seconds). The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log truncation activity.



!!! Exchange Server 2013

The TruncationLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service waits before truncating log files that have replayed into a copy of the database. The time period begins after the log has been successfully replayed into the copy of the database.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log truncation activity.

For example, to specify a 14-day truncation lag period, enter 14.00:00:00. The default value is 00.00:00:00, which specifies that there's no truncation lag.



!!! Exchange Server 2016

The TruncationLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service waits before truncating log files that have replayed into a copy of the database. The time period begins after the log has been successfully replayed into the copy of the database.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 00.00:00:00, which specifies that there's no truncation lag. The maximum value is 14.00:00:00 (14 days).



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

### -ConfigurationOnly
!!! Exchange Server 2013

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2016

The ConfigurationOnly switch allows database copies to be added without invoking automatic seeding. You don't need to specify a value with this switch.

The source database does not need to be online or present when using this parameter. It will create a new database in Active Directory without contacting the target server. This parameter may be useful in situations where the target server is down for maintenance and the new database copy does not yet exist on the target server.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayLagMaxDelay
The ReplayLagMaxDelay parameter specifies the maximum delay for lagged database copy play down (also known as deferred lagged copy play down). If the disk read IO latency is greater than 25 ms, lagged copy play down is delayed up to the value of this parameter.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 24:00:00 (24 hours). To disable deferred lagged copy play down, specify the value 00:00:00.

Note that when the disk is running out of space, the value of this parameter is ignored, and lagged copy play down occurs without delay.

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

[Online Version](https://technet.microsoft.com/library/84198fa9-ac8e-44ea-bd7b-64fe1e83e709.aspx)

