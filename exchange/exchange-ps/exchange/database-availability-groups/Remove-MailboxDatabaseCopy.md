---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-MailboxDatabaseCopy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-MailboxDatabaseCopy cmdlet to remove a passive copy of a mailbox database.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To use the Remove-MailboxDatabaseCopy cmdlet to remove a mailbox database copy, the following criteria must be met:

- The database availability group (DAG) hosting the mailbox database must have quorum and all cluster and network functions must be healthy.

- If you're removing the last passive copy of the database, continuous replication circular logging (CRCL) must not be enabled for the specified mailbox database. If CRCL is enabled, you must first disable it. After the mailbox database copy has been removed, circular logging can be enabled. After enabling circular logging for a non-replicated mailbox database, JET circular logging is used instead of CRCL. If you aren't removing the last passive copy of a database, CRCL can remain enabled.

You can't use this cmdlet to remove the active copy of a mailbox database. To remove the active copy of a mailbox database, you must first remove all passive copies of the database and then use the Remove-MailboxDatabase cmdlet to remove the active copy.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

Running this cmdlet removes the mailbox database copy configuration, but doesn't delete the database copy's files. If necessary, you can manually delete those files.

## EXAMPLES

### Example 1
```
Remove-MailboxDatabaseCopy -Identity DB1\MBX3
```

This example removes a copy of mailbox database DB1 from the Mailbox server MBX3.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the mailbox database whose copy is being removed. When using this parameter, specify a format of DatabaseName\\ServerName.

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

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

[Online Version](https://technet.microsoft.com/library/18a41719-99dd-4bf7-97af-2e9b0e39ba2d.aspx)
