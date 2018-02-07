---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Suspend-MailboxRestoreRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Suspend-MailboxRestoreRequest cmdlet to suspend a restore request any time after the request was created, but before the request reaches the status of Completed. You can resume the restore request by using the Resume-MailboxRestoreRequest cmdlet.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Suspend-MailboxRestoreRequest cmdlet to suspend a restore request any time after the request was created, but before the request reaches the status of Completed. You can resume the restore request by using the Resume-MailboxRestoreRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Suspend-MailboxRestoreRequest cmdlet to suspend a restore request any time after the request was created, but before the request reaches the status of Completed. You can resume the restore request by using the Resume-MailboxRestoreRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Suspend-MailboxRestoreRequest [-Identity] <MailboxRestoreRequestIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-SuspendComment <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox restore request" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox restore request" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Suspend-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

This example suspends the second restore request for Ayla's mailbox with the identity Ayla\\MailboxRestore1.

### Example 1 -------------------------- (Exchange Server 2013)
```
Suspend-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

This example suspends the second restore request for Ayla's mailbox with the identity Ayla\\MailboxRestore1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Suspend-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

This example suspends the second restore request for Ayla's mailbox with the identity Ayla\\MailboxRestore1.

### Example 1 -------------------------- (Exchange Online)
```
Suspend-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

This example suspends the second restore request for Ayla's mailbox with the identity Ayla\\MailboxRestore1.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxRestoreRequest -Status InProgress | Suspend-MailboxRestoreRequest -SuspendComment "Resume after 10 PM"
```

This example suspends all restore requests that are in progress by using the Get-MailboxRestoreRequest cmdlet to retrieve all requests with a status of InProgress, and then pipelines the output to the Suspend-MailboxRestoreRequest cmdlet with the suspend comment "Resume after 10:00 PM."

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxRestoreRequest -Status InProgress | Suspend-MailboxRestoreRequest -SuspendComment "Resume after 10:00 PM"
```

This example suspends all restore requests that are in progress by using the Get-MailboxRestoreRequest cmdlet to retrieve all requests with a status of InProgress, and then pipelines the output to the Suspend-MailboxRestoreRequest cmdlet with the suspend comment "Resume after 10:00 PM."

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxRestoreRequest -Status InProgress | Suspend-MailboxRestoreRequest -SuspendComment "Resume after 10:00 PM"
```

This example suspends all restore requests that are in progress by using the Get-MailboxRestoreRequest cmdlet to retrieve all requests with a status of InProgress, and then pipelines the output to the Suspend-MailboxRestoreRequest cmdlet with the suspend comment "Resume after 10:00 PM."

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxRestoreRequest -Status InProgress | Suspend-MailboxRestoreRequest -SuspendComment "Resume after 10:00 PM"
```

This example suspends all restore requests that are in progress by using the Get-MailboxRestoreRequest cmdlet to retrieve all requests with a status of InProgress, and then pipelines the output to the Suspend-MailboxRestoreRequest cmdlet with the suspend comment "Resume after 10:00 PM."

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: \<alias\>\\\<name\>.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

```yaml
Type: MailboxRestoreRequestIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendComment
!!! Exchange Server 2010

The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The SuspendComment parameter specifies a description about why the request was suspended.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/620fd701-d7f8-444b-8c37-cabfcd5f0bb4.aspx)

