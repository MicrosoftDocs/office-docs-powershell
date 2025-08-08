---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/move-activemailboxdatabase
schema: 2.0.0
title: Move-ActiveMailboxDatabase
---

# Move-ActiveMailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Move-ActiveMailboxDatabase cmdlet to perform a database or server switchover.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ActivatePreferred
```
Move-ActiveMailboxDatabase [-ActivatePreferredOnServer] <MailboxServerIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <DatabaseMountDialOverride>]
 [-MoveComment <String>]
 [-SkipActiveCopyChecks]
 [-SkipClientExperienceChecks]
 [-SkipCpuChecks]
 [-SkipHealthChecks]
 [-SkipLagChecks]
 [-SkipMaximumActiveDatabasesChecks]
 [-SkipMoveSuppressionChecks]
 [-TerminateOnWarning]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Move-ActiveMailboxDatabase [-Identity] <DatabaseIdParameter> [[-ActivateOnServer] <MailboxServerIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <DatabaseMountDialOverride>]
 [-MoveComment <String>]
 [-SkipActiveCopyChecks]
 [-SkipClientExperienceChecks]
 [-SkipCpuChecks]
 [-SkipHealthChecks]
 [-SkipLagChecks]
 [-SkipMaximumActiveDatabasesChecks]
 [-SkipMoveSuppressionChecks]
 [-TerminateOnWarning]
 [-WhatIf]
 [<CommonParameters>]
```

### Server
```
Move-ActiveMailboxDatabase [-Server] <MailboxServerIdParameter> [[-ActivateOnServer] <MailboxServerIdParameter>]
 [-MoveAllDatabasesOrNone]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <DatabaseMountDialOverride>]
 [-MoveComment <String>]
 [-SkipActiveCopyChecks]
 [-SkipClientExperienceChecks]
 [-SkipCpuChecks]
 [-SkipHealthChecks]
 [-SkipLagChecks]
 [-SkipMaximumActiveDatabasesChecks]
 [-SkipMoveSuppressionChecks]
 [-TerminateOnWarning]
 [-WhatIf]
 [<CommonParameters>]
```

### SkipAllChecks
```
Move-ActiveMailboxDatabase [-Identity] <DatabaseIdParameter> [-ActivateOnServer] <MailboxServerIdParameter>
 [-SkipAllChecks]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MountDialOverride <DatabaseMountDialOverride>]
 [-MoveComment <String>]
 [-SkipActiveCopyChecks]
 [-SkipClientExperienceChecks]
 [-SkipCpuChecks]
 [-SkipHealthChecks]
 [-SkipLagChecks]
 [-SkipMaximumActiveDatabasesChecks]
 [-SkipMoveSuppressionChecks]
 [-TerminateOnWarning]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Move-ActiveMailboxDatabase DB2 -ActivateOnServer MBX1 -MountDialOverride:None
```

This example performs a switchover of the database DB2 to the Mailbox server MBX1. When the command completes, MBX1 hosts the active copy of DB2. Because the MountDialOverride parameter is set to None, MBX1 mounts the database using its own defined database auto mount dial settings.

### Example 2
```powershell
Move-ActiveMailboxDatabase DB1 -ActivateOnServer MBX3 -MountDialOverride:GoodAvailability
```

This example performs a switchover of the database DB1 to the Mailbox server MBX3. When the command completes, MBX3 hosts the active copy of DB1. Because the MountDialOverride parameter is specified with a value of Good Availability, MBX3 mounts the database using a database auto mount dial setting of GoodAvailability.

### Example 3
```powershell
Move-ActiveMailboxDatabase DB3 -ActivateOnServer MBX4
```

This example performs a switchover of the database DB3 to the Mailbox server MBX4. When the command completes, MBX4 hosts the active copy of DB3. Because the MountDialOverride parameter isn't specified, MBX4 mounts the database using a database auto mount dial setting of Lossless.

### Example 4
```powershell
Move-ActiveMailboxDatabase -Server MBX1
```

This example performs a server switchover for the Mailbox server MBX1. All active mailbox database copies on MBX1 are activated on one or more other Mailbox servers with healthy copies of the active databases on MBX1.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the mailbox database that you want to activate. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Server parameter

```yaml
Type: DatabaseIdParameter
Parameter Sets: Identity, SkipAllChecks
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Server parameter specifies the server that you want to move all active mailbox databases from. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

You can't use this parameter with the Identity parameter

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Server
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivatePreferredOnServer

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActivatePreferredOnServer parameter specifies the Mailbox server where you want to activate all mailbox databases that have copies with an ActivationPreference value of 1. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

You can use this parameter as part of ending maintenance mode on a Mailbox server.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: ActivatePreferred
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivateOnServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActivateOnServer parameter specifies the name of the Mailbox server on which the mailbox database copy should be activated.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Identity, Server
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SkipAllChecks

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipAllChecks switch specifies whether to skip all checks. You don't need to specify a value with this switch.

This switch is equivalent to specifying all of the individual skip parameters that are available on this cmdlet.

You can only use this switch with the ActivateOnServer parameter.

```yaml
Type: SwitchParameter
Parameter Sets: SkipAllChecks
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -MountDialOverride

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MountDialOverride parameter is used to override the auto database mount dial (AutoDatabaseMountDial) setting for the target server and specify an alternate setting. Valid value are:

- None: The currently configured auto database mount dial setting on the target server is used.
- Lossless: This value is the default. The database doesn't automatically mount until all log files that were generated on the original active copy have been copied to the passive copy.
- GoodAvailability: The database automatically mounts immediately after a failover if the copy queue length is less than or equal to 6. If the copy queue length is greater than 6, the database doesn't automatically mount. When the copy queue length is less than or equal to 6, Microsoft Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.
- BestEffort: The database automatically mounts regardless of the size of the copy queue length. Because the database mounts with any amount of log loss, using this value could result in a large amount of data loss.
- BestAvailability: The database automatically mounts immediately after a failover if the copy queue length is less than or equal to 12. The copy queue length is the number of logs recognized by the passive copy that needs to be replicated. If the copy queue length is more than 12, the database doesn't automatically mount. When the copy queue length is less than or equal to 12, Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.

```yaml
Type: DatabaseMountDialOverride
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveAllDatabasesOrNone

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MoveAllDatabasesOrNone switch specifies whether to prevent any databases from moving if a single active database on the server can't be moved. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveComment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MoveComment parameter specifies an optional administrative reason for the move operation. The comment is recorded in the Event log.

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

### -SkipActiveCopyChecks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipActiveCopyChecks switch specifies whether to skip checking the current active copy to see if it's currently a seeding source for any passive databases. You don't need to specify a value with this switch.

**Note**: When you use this switch, you can move a database that's currently a seeding source, which cancels the seed operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipClientExperienceChecks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipClientExperienceChecks switch specifies whether to skip the search catalog (content index) state check to see if the search catalog is healthy and up to date. You don't need to specify a value with this switch.

If the search catalog for the database copy you're activating is in an unhealthy or unusable state and you use this parameter to skip the search catalog health check and activate the database copy, you need to either re-crawl or reseed the search catalog.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCpuChecks

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipCpuChecks switch specifies whether to skip the high CPU utilization checks. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipHealthChecks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipHealthChecks switch specifies whether to bypass passive copy health checks. You don't need to specify a value with this switch.

When you use this switch, you can move the active copy to a database copy that's in the Failed state. You should only use this switch if the initial attempt to move the active database has failed. This is because the SkipHealthChecks switch performs additional validation to ensure that the log files are consistent, which can take a considerable amount of time.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipLagChecks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipLagChecks switch specifies whether to allow a copy to be activated that has replay and copy queues outside of the configured criteria. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMaximumActiveDatabasesChecks

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipMaximumActiveDatabasesChecks switch specifies whether to skip checking the value of MaximumPreferredActiveDatabases during the best copy and server selection (BCSS) process. You don't need to specify a value with this switch.

Any configured value for MaximumActiveDatabases is honored during the BCSS process and by the Information Store.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMoveSuppressionChecks

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SkipMoveSuppressionChecks switch specifies whether to skip the move suppression checks. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TerminateOnWarning

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TerminateOnWarning switch specifies whether to terminate the task and output an error message if a warning is encountered during the switchover operation. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
