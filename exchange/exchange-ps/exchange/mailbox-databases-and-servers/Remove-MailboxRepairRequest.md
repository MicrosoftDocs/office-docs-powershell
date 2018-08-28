---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Remove-MailboxRepairRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Remove-MailboxRepairRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-MailboxRepairRequest cmdlet to remove mailbox repair requests from a mailbox database that were created using the New-MailboxRepairRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-MailboxRepairRequest [-Identity] <StoreIntegrityCheckJobIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can run the Remove-MailboxRepairRequest cmdlet to remove all mailbox repair requests for a specific database, for a group of related mailbox repair requests, or for a specific mailbox repair request. Mailbox repair requests are identified by a complex GUID with the following format: \<DatabaseGuid\>\\\<RequestGuid\>\\\<JobGuid\>. The DatabaseGuid identifies the mailbox database where the mailbox being repaired is located. The RequestGuid identifies related requests that may contain more than one job if the request runs more than one task or targets more than one mailbox. The JobGuid identifies a unique job. See the examples to remove all requests on a mailbox database, remove a group of related requests that share the same RequestGuid, or remove a specific request by specifying the complete \<DatabaseGuid\>\\\<RequestGuid\>\\\<JobGuid\> value.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxDatabase -Identity "EXCH-MBX-01" | Get-MailboxRepairRequest | Remove-MailboxRepairRequest
```

This example removes all mailbox repair requests for the mailbox database EXCH-MBX-01.

### -------------------------- Example 2 --------------------------
```
Get-MailboxDatabase -Identity "EXCH-MBX-02" | Get-MailboxRepairRequest | Format-List Identity; Remove-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\335c2b06-321d-4e73-b2f7-3dc2b02d0df5
```

This example removes all related mailbox repair requests that have the same \<DatabaseGuid\>\\\<RequestGuid\>. The example uses the Get-MailboxRepairRequest cmdlet to display the value of the Identity parameter for all mailbox repair request for EXCH-MBX-02 mailbox database.

### -------------------------- Example 3 --------------------------
```
Get-MailboxDatabase -Identity "EXCH-MBX-02" | Get-MailboxRepairRequest | Format-List Identity; Remove-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\189c7852-49bd-4737-a53e-6e6caa5a183c\1d8ca58a-186f-4dc6-b481-f835b548a929
```

This example deletes a specific mailbox repair request by specifying the unique \<DatabaseGuid\>\\\<RequestGuid\>\\\<JobGuid\> identity value. The example also uses the Get-MailboxRepairRequest cmdlet to display the identities of all mailbox repair request for the EXCH-MBX-02 mailbox database.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox repair request to remove. Mailbox repair requests are identified by a complex GUID that is created when a new mailbox repair request is created. This GUID consists of a database ID, a Request ID and a job ID. The format is \<DatabaseGuid\>\\\<RequestGuid\>\\\<JobGuid\>. Use the Get-MailboxRepairRequest cmdlet to find the identity of a mailbox repair request.

```yaml
Type: StoreIntegrityCheckJobIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/7f5e19bb-4d3e-4454-b4cf-b530c797cfa4.aspx)
