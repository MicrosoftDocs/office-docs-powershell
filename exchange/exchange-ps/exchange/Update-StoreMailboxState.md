---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/update-storemailboxstate
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Update-StoreMailboxState
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Update-StoreMailboxState

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Update-StoreMailboxState cmdlet to synchronize the mailbox state for a mailbox in the Exchange mailbox store with the state of the corresponding Active Directory user account.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-StoreMailboxState -Database <DatabaseIdParameter> -Identity <StoreMailboxIdParameter> [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Update-StoreMailboxState cmdlet forces the mailbox store state in the Exchange store to be synchronized with Active Directory. In some cases, it's possible that the store state for a mailbox to become out-of-sync with the state of the corresponding Active Directory user account. This can result from Active Directory replication latency. For example, if a mailbox-enabled user account is disabled in Active Directory but isn't marked as disabled in the Exchange mailbox store. In this case, running the Update-StoreMailboxState will synchronize the mailbox store state with the state of the Active Directory user account and mark the mailbox as disabled in the mailbox store. You can use this command to troubleshoot issues that may be a result when the store state for a mailbox is unexpected or if you suspect that the store state is different than the state for the corresponding Active Directory account.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Update-StoreMailboxState -Database MDB01 -Identity 4a830e3f-fd07-4629-baa1-8bce16b86d88
```

This example updates the mailbox state for a mailbox located on the mailbox database MDB01 and whose GUID is 4a830e3f-fd07-4629-baa1-8bce16b86d88.

### Example 2
```powershell
Get-MailboxStatistics -Database MDB02 | ForEach { Update-StoreMailboxState -Database $_.Database -Identity $_.MailboxGuid -Confirm:$false }
```

This example updates the mailbox state for all mailboxes on the mailbox database MDB02.

### Example 3
```powershell
Get-MailboxStatistics -Database MDB03 | Where { $_.DisconnectReason -ne $null } | ForEach { Update-StoreMailboxState -Database $_.Database -Identity $_.MailboxGuid -Confirm:$false }
```

This example updates the mailbox state for all disconnected mailboxes on the mailbox database MDB03.

## PARAMETERS

### -Database
The Database parameter specifies the mailbox database that contains the mailbox. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox that you want to update. Use the mailbox GUID as the value for this parameter.

Run the following command to obtain the mailbox GUID and other information for all mailboxes in your organization: Get-MailboxDatabase | Get-MailboxStatistics | Format-List DisplayName,MailboxGuid,Database,DisconnectReason,DisconnectDate.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES
In a scenario where a mailbox is moved to another database, then the mailbox is immediately disabled, there is a 24-hour delay to allow for replication. 

In this scenario Update-StoreMailboxState may not immediately update DisconnectState and DisconnectReason when running Get-MailboxStatistics. The mailbox statistics will update approximately 24 hours after the move.

## RELATED LINKS
