---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Resume-MailboxDatabaseCopy

## SYNOPSIS
!!! Exchange Server 2010

Use the Resume-MailboxDatabaseCopy cmdlet to resume activation, replication and replay activities (log copying and replay) for a mailbox database.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Resume-MailboxDatabaseCopy cmdlet to unblock activation or resume log copying and replay for a passive mailbox database copy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Resume-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-ReplicationOnly] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Resume-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-DisableReplayLag] [-Confirm]
 [-DisableReplayLagReason <String>] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Resume-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-ReplicationOnly] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Resume-MailboxDatabaseCopy cmdlet resumes replication and replay from a suspended state. If a database copy was suspended without administrator intervention, it is because the database copy is in a bad state. You can use the Get-MailboxDatabaseCopyStatus cmdlet to see if there are any messages indicating a failure. If the copy of the database is in a bad state, resuming the copy causes replication to fail and the mailbox database copy to return to a suspended state.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the"mailbox database copy" entry in the High Availability Permissions topic.

!!! Exchange Server 2013

The Resume-MailboxDatabaseCopy cmdlet resumes replication and replay from a suspended state. If a database copy was suspended without administrator intervention, it's because the database copy is in a bad state. You can use the Get-MailboxDatabaseCopyStatus cmdlet to see if there are any messages indicating a failure. If the copy of the database is in a bad state, resuming the copy causes replication to fail and the mailbox database copy to return to a suspended state.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Database availability groups" entry in the High availability and site resilience permissions topic.

!!! Exchange Server 2016

The Resume-MailboxDatabaseCopy cmdlet resumes replication and replay from a suspended state. If a database copy was suspended without administrator intervention, it's because the database copy is in a bad state. You can use the Get-MailboxDatabaseCopyStatus cmdlet to see if there are any messages indicating a failure. If the copy of the database is in a bad state, resuming the copy causes replication to fail and the mailbox database copy to return to a suspended state.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Resume-MailboxDatabaseCopy -Identity DB1\MBX3
```

This example resumes replication and replay activity for the copy of a database named DB1 that is hosted on a Mailbox server named MBX3.

### Example 1 -------------------------- (Exchange Server 2013)
```
Resume-MailboxDatabaseCopy -Identity DB1\MBX3
```

This example resumes replication and replay activity for the copy of the database DB1 hosted on the Mailbox server MBX3.

### Example 1 -------------------------- (Exchange Server 2016)
```
Resume-MailboxDatabaseCopy -Identity DB1\MBX3
```

This example resumes replication and replay activity for the copy of the database DB1 hosted on the Mailbox server MBX3.

### Example 2 -------------------------- (Exchange Server 2010)
```
Resume-MailboxDatabaseCopy -Identity DB2\MBX4 -ReplicationOnly
```

This example resumes replication and replay activity for the copy of a database named DB2 that is hosted on a Mailbox server named MBX4. After the copy is resumed, it remains administratively blocked for activation.

### Example 2 -------------------------- (Exchange Server 2013)
```
Resume-MailboxDatabaseCopy -Identity DB2\MBX4 -ReplicationOnly
```

This example resumes replication and replay activity for the copy of the database DB2 hosted on the Mailbox server MBX4. After the copy is resumed, it remains administratively blocked for activation.

### Example 2 -------------------------- (Exchange Server 2016)
```
Resume-MailboxDatabaseCopy -Identity DB2\MBX4 -ReplicationOnly
```

This example resumes replication and replay activity for the copy of the database DB2 hosted on the Mailbox server MBX4. After the copy is resumed, it remains administratively blocked for activation.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the database whose copying is being resumed.

```yaml
Type: DatabaseCopyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -ReplicationOnly
!!! Exchange Server 2010

The ReplicationOnly parameter is used resume replication without affecting the activation setting (for example, the ActivationSuspended property for the database copy remains set to True).



!!! Exchange Server 2013, Exchange Server 2016

The ReplicationOnly switch specifies whether to resume replication without affecting the activation setting (for example, the ActivationSuspended property for the database copy remains set to True).



```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1
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

### -DisableReplayLag
The DisableReplayLag parameter specifies that any configured replay lag time for the database copy should be disabled when the passive copy is resumed.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableReplayLagReason
The DisableReplayLagReason parameter is used with the DisableReplayLag parameter to specify an administrative reason for disabling replay lag time for a passive copy.

```yaml
Type: String
Parameter Sets: Set2
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

[Online Version](https://technet.microsoft.com/library/3d90b006-9914-415b-9a1f-730bd91c8548.aspx)

