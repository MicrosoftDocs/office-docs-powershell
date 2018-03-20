---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-StoreMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-StoreMailbox cmdlet to purge the mailbox and all of its message content from the mailbox database. This results in permanent data loss for the mailbox being purged. You can only run this cmdlet against disconnected or soft-deleted mailboxes. Running this command against an active mailbox fails, and you receive an error.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-StoreMailbox -Database <DatabaseIdParameter> -Identity <StoreMailboxIdParameter>
 -MailboxState <Disabled | SoftDeleted> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When mailboxes are moved between databases, Exchange doesn't fully delete the mailbox from the source database immediately upon completion of the move. Instead, the mailbox in the source mailbox database is switched to a soft-deleted state, which allows mailbox data to be accessed during a mailbox restore operation by using the new MailboxRestoreRequest cmdlet set. The soft-deleted mailboxes are retained in the source database until the deleted mailbox retention period expires.

To view soft-deleted mailboxes, run the Get-MailboxStatistics cmdlet against a database using the property DisconnectReason with a value of SoftDeleted.

A mailbox is marked as Disabled immediately after the Disable-Mailbox or Remove-Mailbox command completes. Exchange retains disabled mailboxes in the mailbox database based on the deleted mailbox retention settings configured for that mailbox database. After the specified period of time, the mailbox is permanently deleted.

To view disabled mailboxes, run the Get-MailboxStatistics cmdlet against a database using the property DisconnectReason with a value of Disabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Remove-StoreMailbox -Database MBD01 -Identity Ayla -MailboxState SoftDeleted
```

This example purges the soft-deleted mailbox for Ayla Kol from mailbox database MBD01.

### Example 2
```
Remove-StoreMailbox -Database MBD01 -Identity "2ab32ce3-fae1-4402-9489-c67e3ae173d3" -MailboxState Disabled
```

This example permanently purges the disconnected mailbox with the GUID 2ab32ce3-fae1-4402-9489-c67e3ae173d3 from mailbox database MBD01.

### Example 3
```
Get-MailboxStatistics -Database MBD01 | where {$_.DisconnectReason -eq "SoftDeleted"} | foreach {Remove-StoreMailbox -Database $_.database -Identity $_.mailboxguid -MailboxState SoftDeleted}
```

This example permanently purges all soft-deleted mailboxes from mailbox database MBD01.

## PARAMETERS

### -Database
The Database parameter specifies the identity of the mailbox database on which the mailbox that you want to remove resides. This parameter accepts the following values:

- Database name

- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the mailbox that you want to remove. This parameter accepts the following values:

- GUID

- Distinguished name (DN)

- User principal name (UPN)

- LegacyExchangeDN

- Domain\\Account Name

- SMTP address

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxState
The MailboxState parameter specifies the mailbox state on the source mailbox database. This parameter accepts the following values:

- Disabled

- SoftDeleted

```yaml
Type: Disabled | SoftDeleted
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
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

[Online Version](https://technet.microsoft.com/library/d5cb00f2-f475-45cf-b72e-0962e5eed070.aspx)
