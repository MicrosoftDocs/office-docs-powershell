---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/resume-mailboxdatabasecopy
schema: 2.0.0
title: Resume-MailboxDatabaseCopy
---

# Resume-MailboxDatabaseCopy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Resume-MailboxDatabaseCopy cmdlet to unblock activation or resume log copying and replay for a passive mailbox database copy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Resume-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter>
 [-ReplicationOnly]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### DisableReplayLag
```
Resume-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter>
 [-DisableReplayLag]
 [-DisableReplayLagReason <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Resume-MailboxDatabaseCopy cmdlet resumes replication and replay from a suspended state. If a database copy was suspended without administrator intervention, it's because the database copy is in a bad state. You can use the Get-MailboxDatabaseCopyStatus cmdlet to see if there are any messages indicating a failure. If the copy of the database is in a bad state, resuming the copy causes replication to fail and the mailbox database copy to return to a suspended state.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Resume-MailboxDatabaseCopy -Identity DB1\MBX3
```

This example resumes replication and replay activity for the copy of the database DB1 hosted on the Mailbox server MBX3.

### Example 2
```powershell
Resume-MailboxDatabaseCopy -Identity DB2\MBX4 -ReplicationOnly
```

This example resumes replication and replay activity for the copy of the database DB2 hosted on the Mailbox server MBX4. After the copy is resumed, it remains administratively blocked for activation.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the name of the database whose copying is being resumed.

```yaml
Type: DatabaseCopyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

### -DisableReplayLag

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DisableReplayLag switch disables any configured replay lag time for the database copy when the passive copy is resumed. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: DisableReplayLag
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableReplayLagReason

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DisableReplayLagReason parameter is used with the DisableReplayLag parameter to specify an administrative reason for disabling replay lag time for a passive copy.

```yaml
Type: String
Parameter Sets: DisableReplayLag
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

### -ReplicationOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ReplicationOnly switch resumes replication without affecting the activation setting (for example, the ActivationSuspended property for the database copy remains set to True). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
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
