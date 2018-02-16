---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Suspend-MailboxImportRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Suspend-MailboxImportRequest cmdlet to suspend an import request any time after the request was created, but before the request reaches the status of Completed. You can resume the move request by using the Resume-MailboxImportRequest cmdlet.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Suspend-MailboxImportRequest cmdlet to suspend an import request any time after the request was created, but before the request reaches the status of Completed. You can resume the move request by using the Resume-MailboxImportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Suspend-MailboxImportRequest cmdlet to suspend an import request any time after the request was created, but before the request reaches the status of Completed. You can resume the move request by using the Resume-MailboxImportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Suspend-MailboxImportRequest [-Identity] <MailboxImportRequestIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-SuspendComment <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Suspend-MailboxImportRequest -Identity "Ayla\MailboxImport1"
```

This example suspends the second import request for Ayla's mailbox with the identity Ayla\\MailboxImport1.

### Example 1 -------------------------- (Exchange Server 2013)
```
Suspend-MailboxImportRequest -Identity "Ayla\MailboxImport1"
```

This example suspends the second import request for Ayla's mailbox with the identity Ayla\\MailboxImport1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Suspend-MailboxImportRequest -Identity "Ayla\MailboxImport1"
```

This example suspends the second import request for Ayla's mailbox with the identity Ayla\\MailboxImport1.

### Example 1 -------------------------- (Exchange Online)
```
Suspend-MailboxImportRequest -Identity "Ayla\MailboxImport1"
```

This example suspends the second import request for Ayla's mailbox with the identity Ayla\\MailboxImport1.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequest -Status InProgress | Suspend-MailboxImportRequest -SuspendComment "Resume after 10 p.m."
```

This example suspends all import requests that are in progress by using the Get-MailboxImportRequest cmdlet to retrieve all requests with a Status of InProgress, and then pipelining the output to the Suspend-MailboxImportRequest cmdlet with the suspend comment "Resume after 10 p.m.".

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxImportRequest -Status InProgress | Suspend-MailboxImportRequest -SuspendComment "Resume after 22:00 (10 P.M.)"
```

This example suspends all import requests that are in progress by using the Get-MailboxImportRequest cmdlet to retrieve all requests with a Status of InProgress, and then pipelining the output to the Suspend-MailboxImportRequest cmdlet with the suspend comment "Resume after 22:00 (10 P.M.)".

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxImportRequest -Status InProgress | Suspend-MailboxImportRequest -SuspendComment "Resume after 22:00 (10 P.M.)"
```

This example suspends all import requests that are in progress by using the Get-MailboxImportRequest cmdlet to retrieve all requests with a Status of InProgress, and then pipelining the output to the Suspend-MailboxImportRequest cmdlet with the suspend comment "Resume after 22:00 (10 P.M.)".

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxImportRequest -Status InProgress | Suspend-MailboxImportRequest -SuspendComment "Resume after 22:00 (10 P.M.)"
```

This example suspends all import requests that are in progress by using the Get-MailboxImportRequest cmdlet to retrieve all requests with a Status of InProgress, and then pipelining the output to the Suspend-MailboxImportRequest cmdlet with the suspend comment "Resume after 22:00 (10 P.M.)".

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the import request. By default, import requests are named \<alias\>\\MailboxImportX (where X = 0-9). If you created the request by using the Name parameter, use the following syntax: \<alias\>\\\<name\>.

```yaml
Type: MailboxImportRequestIdParameter
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
The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

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

[Online Version](https://technet.microsoft.com/library/49836c94-b353-49e8-a1f1-ca59e4a37443.aspx)

