---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Move-ActiveMailboxDatabase
schema: 2.0.0
---

# Move-ActiveMailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Move-ActiveMailboxDatabase cmdlet to perform a database or server switchover.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Move-ActiveMailboxDatabase [-Identity] <DatabaseIdParameter> [[-ActivateOnServer] <MailboxServerIdParameter>]
 [-Confirm] [-DomainController <Fqdn>]
 [-MountDialOverride <None | Lossless | GoodAvailability | BestAvailability | BestEffort>]
 [-MoveComment <String>] [-SkipActiveCopyChecks] [-SkipClientExperienceChecks] [-SkipHealthChecks]
 [-SkipLagChecks] [-TerminateOnWarning] [-WhatIf] [-SkipMaximumActiveDatabasesChecks] [-SkipCpuChecks]
 [-SkipMoveSuppressionChecks] [<CommonParameters>]
```

### Set2
```
Move-ActiveMailboxDatabase [-Server] <MailboxServerIdParameter>
 [[-ActivateOnServer] <MailboxServerIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-MountDialOverride <None | Lossless | GoodAvailability | BestAvailability | BestEffort>]
 [-MoveComment <String>] [-TerminateOnWarning] [-WhatIf] [-SkipActiveCopyChecks] [-SkipClientExperienceChecks]
 [-SkipHealthChecks] [-SkipLagChecks] [-SkipMaximumActiveDatabasesChecks] [-Identity] <DatabaseIdParameter>
 [-SkipAllChecks] [-SkipCpuChecks] [-SkipMoveSuppressionChecks] [<CommonParameters>]
```

### Set3
```
Move-ActiveMailboxDatabase [-ActivatePreferredOnServer] <MailboxServerIdParameter> [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <None | Lossless | GoodAvailability | BestAvailability | BestEffort>]
 [-MoveComment <String>] [-SkipActiveCopyChecks] [-SkipClientExperienceChecks] [-SkipHealthChecks]
 [-SkipLagChecks] [-SkipMaximumActiveDatabasesChecks] [-TerminateOnWarning] [-WhatIf]
 [-Server] <MailboxServerIdParameter> [[-ActivateOnServer] <MailboxServerIdParameter>]
 [-MoveAllDatabasesOrNone] [-SkipCpuChecks] [-SkipMoveSuppressionChecks] [<CommonParameters>]
```

### Set4
```
Move-ActiveMailboxDatabase [-ActivatePreferredOnServer] <MailboxServerIdParameter> [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <None | Lossless | GoodAvailability | BestAvailability | BestEffort>]
 [-MoveComment <String>] [-SkipActiveCopyChecks] [-SkipClientExperienceChecks] [-SkipCpuChecks]
 [-SkipHealthChecks] [-SkipLagChecks] [-SkipMaximumActiveDatabasesChecks] [-SkipMoveSuppressionChecks]
 [-TerminateOnWarning] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Move-ActiveMailboxDatabase DB2 -ActivateOnServer MBX1 -MountDialOverride:None
```

This example performs a switchover of the database DB2 to the Mailbox server MBX1. When the command completes, MBX1 hosts the active copy of DB2. Because the MountDialOverride parameter is set to None, MBX1 mounts the database using its own defined database auto mount dial settings.

### Example 2
```
Move-ActiveMailboxDatabase DB1 -ActivateOnServer MBX3 -MountDialOverride:GoodAvailability
```

This example performs a switchover of the database DB1 to the Mailbox server MBX3. When the command completes, MBX3 hosts the active copy of DB1. Because the MountDialOverride parameter is specified with a value of Good Availability, MBX3 mounts the database using a database auto mount dial setting of GoodAvailability.

### Example 3
```
Move-ActiveMailboxDatabase DB3 -ActivateOnServer MBX4
```

This example performs a switchover of the database DB3 to the Mailbox server MBX4. When the command completes, MBX4 hosts the active copy of DB3. Because the MountDialOverride parameter isn't specified, MBX4 mounts the database using a database auto mount dial setting of Lossless.

### Example 4
```
Move-ActiveMailboxDatabase -Server MBX1
```

This example performs a server switchover for the Mailbox server MBX1. All active mailbox database copies on MBX1 will be activated on one or more other Mailbox servers with healthy copies of the active databases on MBX1.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox database that you want to activate. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Server parameter

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server that you want to move all active mailbox databases from. You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

You can't use this parameter with the Identity parameter

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivateOnServer
The ActivateOnServer parameter specifies the name of the Mailbox server on which the mailbox database copy should be activated.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set1, Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 2
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

### -MountDialOverride
The MountDialOverride parameter is used to override the auto database mount dial (AutoDatabaseMountDial) setting for the target server and specify an alternate setting. The following are possible values:

- None: When using this value, the currently configured auto database mount dial setting on the target server will be used.

- Lossless: This is the default value. When using this value, the database doesn't automatically mount until all log files that were generated on the original active copy have been copied to the passive copy.

- GoodAvailability: If you specify this value, the database automatically mounts immediately after a failover if the copy queue length is less than or equal to 6. If the copy queue length is greater than 6, the database doesn't automatically mount. When the copy queue length is less than or equal to 6, Microsoft Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.

- BestEffort: If you specify this value, the database automatically mounts regardless of the size of the copy queue length. Because the database will mount with any amount of log loss, using this value could result in a large amount of data loss.

- BestAvailability: If you specify this value, the database automatically mounts immediately after a failover if the copy queue length is less than or equal to 12. The copy queue length is the number of logs recognized by the passive copy that needs to be replicated. If the copy queue length is more than 12, the database doesn't automatically mount. When the copy queue length is less than or equal to 12, Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.

```yaml
Type: None | Lossless | GoodAvailability | BestAvailability | BestEffort
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveComment
The MoveComment parameter specifies an optional administrative reason for the move operation. The comment is recorded in the Event log.

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

### -SkipActiveCopyChecks
The SkipActiveCopyChecks switch specifies whether to skip checking the current active copy to see if it's currently a seeding source for any passive databases. You don't need to specify a value with this switch.

Note: When you use this switch, you can move a database that's currently a seeding source, which cancels the seed operation.

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

### -SkipClientExperienceChecks
The SkipClientExperienceChecks switch specifies whether to skip the search catalog (content index) state check to see if the search catalog is healthy and up to date. You don't need to specify a value with this switch.

If the search catalog for the database copy you're activating is in an unhealthy or unusable state and you use this parameter to skip the search catalog health check and activate the database copy, you will need to either re-crawl or reseed the search catalog.

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

### -SkipHealthChecks
The SkipHealthChecks switch specifies whether to bypass passive copy health checks. You don't need to specify a value with this switch.

When you use this switch, you can move the active copy to a database copy that's in the Failed state. You should only use this switch if the initial attempt to move the active database has failed. This is because the SkipHealthChecks switch performs additional validation to ensure that the log files are consistent, which can take a considerable amount of time.

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

### -SkipLagChecks
The SkipLagChecks switch specifies whether to allow a copy to be activated that has replay and copy queues outside of the configured criteria. You don't need to specify a value with this switch.

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

### -TerminateOnWarning
The TerminateOnWarning switch specifies whether to terminate the task and output an error message if a warning is encountered during the switchover operation. You don't need to specify a value with this switch.

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

### -ActivatePreferredOnServer
The ActivatePreferredOnServer parameter specifies the Mailbox server where you want to activate all mailbox databases that have copies with an ActivationPreference value of 1. You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

You can use this parameter as part of ending maintenance mode on a Mailbox server.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set3, Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SkipMaximumActiveDatabasesChecks
The SkipMaximumActiveDatabasesChecks switch specifies whether to skip checking the value of MaximumPreferredActiveDatabases during the best copy and server selection (BCSS) process. You don't need to specify a value with this switch.

Any configured value for MaximumActiveDatabases will still be honored during the BCSS process and by the Information Store.

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

### -SkipAllChecks
The SkipAllChecks switch specifies whether to skip all checks. You don't need to specify a value with this switch.

This switch is equivalent to specifying all of the individual skip parameters that are available on this cmdlet.

You can only use this switch with the ActivateOnServer parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveAllDatabasesOrNone
The MoveAllDatabasesOrNone switch specifies whether to prevent any databases from moving if a single active database on the server can't be moved. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCpuChecks
The SkipCpuChecks switch specifies whether to skip the high CPU utilization checks. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMoveSuppressionChecks
The SkipMoveSuppressionChecks switch specifies whether to skip the move suppression checks. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/755d1ecb-95d1-45e3-9a21-56df9f196f37.aspx)
