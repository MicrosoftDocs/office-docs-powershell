---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MigrationBatch cmdlet to delete a migration batch that either isn't running or has been completed. If necessary, you can run the Get-MigrationBatch cmdlet to determine the status of a migration batch before you remove it.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-MigrationBatch [[-Identity] <MigrationBatchIdParameter>] [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-WhatIf] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

The Remove-MigrationBatch cmdlet removes a migration batch. All subscriptions are deleted, and any object related to the migration batch is also deleted.

If you use the Force parameter with this cmdlet, the individual user requests and subscriptions that were part of the removed migration batch aren't removed. You have to remove the individual migration user requests with the Remove-MigrationUser \<Identity\> -Force command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox Move and Migration Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Remove-MigrationBatch cmdlet removes a migration batch. All subscriptions are deleted, and any object related to the migration batch is also deleted.

If you use the Force parameter with this cmdlet, the individual user requests and subscriptions that were part of the removed migration batch aren't removed. You have to remove the individual migration user requests with the Remove-MigrationUser \<Identity\> -Force command.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-MigrationBatch -Identity Cutover1
```

This example removes the migration batch Cutover1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-MigrationBatch -Identity Cutover1
```

This example removes the migration batch Cutover1.

### Example 1 -------------------------- (Exchange Online)
```
Remove-MigrationBatch -Identity Cutover1
```

This example removes the migration batch Cutover1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Remove-MigrationBatch -Identity LocalMove1 -Force
```

This example removes the corrupted migration batch LocalMove1.

### Example 2 -------------------------- (Exchange Server 2016)
```
Remove-MigrationBatch -Identity LocalMove1 -Force
```

This example removes the corrupted migration batch LocalMove1.

### Example 2 -------------------------- (Exchange Online)
```
Remove-MigrationBatch -Identity LocalMove1 -Force
```

This example removes the corrupted migration batch LocalMove1.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to remove a corrupted migration batch. Corrupted migration batches have a status of Corrupted. If you try to remove a corrupted migration batch without using this switch, you receive an error saying the migrated batch can't be found.

If you use this parameter to remove a corrupted migration batch, the individual user requests (also called job items) and subscriptions that were part of the removed migration batch aren't removed. You have to remove the individual migration user requests with the Remove-MigrationUser \<Identity\> -Force command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies the migration batch that you want to remove. The value for this parameter is the name that was specified when the migration batch was created.

```yaml
Type: MigrationBatchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/59eb82ed-8210-41c1-a74b-8d783af3c391.aspx)

