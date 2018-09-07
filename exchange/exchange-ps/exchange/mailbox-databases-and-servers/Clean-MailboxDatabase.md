---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010
title: Clean-MailboxDatabase
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Clean-MailboxDatabase

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Clean-MailboxDatabase cmdlet to scan Active Directory for disconnected mailboxes that aren't yet marked as disconnected in the Microsoft Exchange store and update the status of those mailboxes in the Exchange store. This cmdlet isn't able to update the Exchange store unless the Microsoft Exchange Information Store service is running and the database is mounted.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Clean-MailboxDatabase [-Identity] <DatabaseIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
A connected mailbox has two parts: the mailbox object in the Exchange store and the user object with Exchange properties in Active Directory. A disconnected mailbox is the mailbox object in the Exchange store, but it isn't connected to a user object in Active Directory. To disconnect a mailbox, use the Disable-Mailbox cmdlet. To disconnect a mailbox and remove the user object from Active Directory, use the Remove-Mailbox cmdlet. If you want to permanently remove a mailbox object from the Exchange store, use the Remove-Mailbox cmdlet.

If you want to reconnect a disconnected mailbox to an Active Directory user account, use the Connect-Mailbox cmdlet.

Under normal circumstances, it isn't necessary to run the Clean-MailboxDatabase cmdlet because a mailbox is marked as disconnected immediately after the Disable-Mailbox or Remove-Mailbox command completes. If you used the Disable-Mailbox cmdlet or the Remove-Mailbox cmdlet while the Microsoft Exchange Information Store service was stopped, or if a mailbox was disabled by an external means other than the Disable-Mailbox cmdlet or Remove-Mailbox cmdlet, you may want to use the Clean-MailboxDatabase cmdlet to scan for disconnected mailboxes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Clean-MailboxDatabase MBD01
```

This example cleans the mailbox database MBD01.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox database that you want to update. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Name of the mailbox database

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
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
Aliases: wi
Applicable: Exchange Server 2010
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

[Online Version](https://technet.microsoft.com/library/a68d31b6-4f32-4a73-b9d9-5d5a6fc1c2f0.aspx)
