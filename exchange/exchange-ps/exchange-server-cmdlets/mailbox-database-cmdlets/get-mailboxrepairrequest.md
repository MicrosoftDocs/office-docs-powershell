---
title: "Get-MailboxRepairRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1b9d3047-8e4c-4847-af01-ce7513b7aa7b
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxRepairRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxRepairRequest** cmdlet to display information about current mailbox repair requests. Mailbox repair requests are created using the **New-MailboxRepairRequest** cmdlet to detect and fix mailbox corruptions.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxRepairRequest -Identity <StoreIntegrityCheckJobIdParameter> [-Detailed <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the value of the _Identity_ property for all mailbox repair requests for all mailbox servers in your organization; the second command displays information about a specific mailbox repair request that was returned by the first command.
  
```
Get-MailboxDatabase | Get-MailboxRepairRequest | Format-Table Identity; Get-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\335c2b06-321d-4e73-b2f7-3dc2b02d0df5\374289de-b899-42dc-8391-4f8579935f1f | Format-List
```

### Example 2

This example displays repair request information for the mailbox of Ann Beebe using the _Mailbox_ parameter.
  
```
Get-MailboxRepairRequest -Mailbox "Ann Beebe" | Format-List
```

### Example 3

This example uses the _Database_ and _StoreMailbox_ parameters to display the _Identity_ property of the repair request for the mailbox of Ann Beebe.
  
```
$MailboxGuid = Get-MailboxStatistics annb; Get-MailboxRepairRequest -Database $MailboxGuid.Database -StoreMailbox $MailboxGuid.MailboxGuid | Format-List Identity
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MailboxRepairRequest** cmdlet displays information about mailbox repair requests. This information includes:
  
- The mailbox GUID.
    
- The type of corruption that was specified when the mailbox repair request was created.
    
- The progress of the repair request in percentage of completion.
    
- The number of corruptions detected and fixed.
    
- The status of the repair request; values are  `Queued`,  `Running`,  `Succeeded` and `Failed`.
    
- The date and time when the mailbox repair request was created and when it finished.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the database on which you run this command. If you use this parameter, all mailboxes on the database are searched for corruptions. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter with the _Mailbox_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Tasks.StoreIntegrityCheckJobIdParameter  <br/> |The _Identity_ parameter specifies the mailbox repair request to display information about. Mailbox repair requests are identified by a complex GUID that is created when a new mailbox repair request is created. This GUID consists of a database ID, a Request ID, and a job ID. The format is `<DatabaseGuid>\<RequestGuid>\<JobGuid>`.  <br/> |
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox that you want to get mailbox repair request information about. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SMTP address <br/>  Alias <br/>  You can't use this parameter with the _Database_ parameter. <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |If the associated archive mailbox was included when the mailbox repair request was created, use the _Archive_ parameter to display information about the archive mailbox. If you don't specify this parameter, only information about the primary mailbox is returned. <br/> You can't use this parameter with the _Database_ parameter. <br/> |
| _Detailed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |Use the _Detailed_ parameter to display mailbox-level repair tasks associated with the repair request. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _StoreMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |The _StoreMailbox_ parameter specifies the mailbox GUID of the mailbox that you want to get mailbox repair request information about. Use this parameter with the _Database_ parameter. <br/> Use the [Get-MailboxStatistics](../../exchange-server-cmdlets/mailbox-cmdlets/get-mailboxstatistics.md) cmdlet to find the mailbox GUID for a mailbox. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

