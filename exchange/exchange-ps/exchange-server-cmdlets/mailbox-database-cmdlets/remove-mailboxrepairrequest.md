---
title: "Remove-MailboxRepairRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7f5e19bb-4d3e-4454-b4cf-b530c797cfa4
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-MailboxRepairRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-MailboxRepairRequest** cmdlet to remove mailbox repair requests from a mailbox database that were created using the **New-MailboxRepairRequest** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-MailboxRepairRequest -Identity <StoreIntegrityCheckJobIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes all mailbox repair requests for the mailbox database EXCH-MBX-01.
  
```
Get-MailboxDatabase -Identity "EXCH-MBX-01" | Get-MailboxRepairRequest | Remove-MailboxRepairRequest
```

### Example 2

This example removes all related mailbox repair requests that have the same  `<DatabaseGuid>\<RequestGuid>`. The example uses the **Get-MailboxRepairRequest** cmdlet to display the value of the _Identity_ parameter for all mailbox repair request for EXCH-MBX-02 mailbox database.
  
```
Get-MailboxDatabase -Identity "EXCH-MBX-02" | Get-MailboxRepairRequest | Format-List Identity; Remove-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\335c2b06-321d-4e73-b2f7-3dc2b02d0df5
```

### Example 3

This example deletes a specific mailbox repair request by specifying the unique < `DatabaseGuid>\<RequestGuid>\<JobGuid>` identity value. The example also uses the **Get-MailboxRepairRequest** cmdlet to display the identities of all mailbox repair request for the EXCH-MBX-02 mailbox database.
  
```
Get-MailboxDatabase -Identity "EXCH-MBX-02" | Get-MailboxRepairRequest | Format-List Identity; Remove-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\189c7852-49bd-4737-a53e-6e6caa5a183c\1d8ca58a-186f-4dc6-b481-f835b548a929
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can run the **Remove-MailboxRepairRequest** cmdlet to remove all mailbox repair requests for a specific database, for a group of related mailbox repair requests, or for a specific mailbox repair request. Mailbox repair requests are identified by a complex GUID with the following format: `<DatabaseGuid>\<RequestGuid>\<JobGuid>`. The  `DatabaseGuid` identifies the mailbox database where the mailbox being repaired is located. The `RequestGuid` identifies related requests that may contain more than one job if the request runs more than one task or targets more than one mailbox. The `JobGuid` identifies a unique job. See the examples to remove all requests on a mailbox database, remove a group of related requests that share the same `RequestGuid`, or remove a specific request by specifying the complete  `<DatabaseGuid>\<RequestGuid>\<JobGuid>` value.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Tasks.StoreIntegrityCheckJobIdParameter  <br/> |The _Identity_ parameter specifies the mailbox repair request to remove. Mailbox repair requests are identified by a complex GUID that is created when a new mailbox repair request is created. This GUID consists of a database ID, a Request ID, and a job ID. The format is `<DatabaseGuid>\<RequestGuid>\<JobGuid>`. Use the [Get-MailboxRepairRequest](get-mailboxrepairrequest.md) cmdlet to find the identity of a mailbox repair request. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

