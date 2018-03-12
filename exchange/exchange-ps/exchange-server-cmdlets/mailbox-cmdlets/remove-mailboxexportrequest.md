---
title: "Remove-MailboxExportRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a5b99fcc-1f79-4a31-b04a-610ff020450d
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-MailboxExportRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-MailboxExportRequest** cmdlet to remove fully or partially completed export requests. You can create multiple export requests for a specified mailbox provided that you specify a distinct name. Completed export requests aren't cleared automatically; they need to be removed by using this cmdlet.
  
> [!NOTE]
> This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in [Manage role groups](https://technet.microsoft.com/library/jj657480.aspx). 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!NOTE]
> When a partially completed export request is removed, content already exported isn't removed from the PST file. If you want to start a new export request to the same file name and start with an empty PST file, you need to rename or delete the previous PST file. 
  
```
Remove-MailboxExportRequest -Identity <MailboxExportRequestIdParameter> [-Force <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the second export request Ayla\MailboxExport1.
  
```
Remove-MailboxExportRequest -Identity "Ayla\MailboxExport1"
```

### Example 2

This example removes all export requests that have the status of Completed.
  
```
Get-MailboxExportRequest -Status Completed | Remove-MailboxExportRequest
```

### Example 3

This example cancels the export request by using the _RequestGuid_ parameter for a mailbox or archive on MBXDB01.
  
```
Remove-MailboxExportRequest -RequestQueue MBXDB01 -RequestGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

## Detailed Description
<a name="DetailedDescription"> </a>

The parameter set that requires the _Identity_ parameter allows you to remove a fully or partially completed export request.
  
The parameter set that requires the _RequestGuid_ and _RequestQueue_ parameters is used for Microsoft Exchange Mailbox Replication service (MRS) debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxExportRequestIdParameter  <br/> |The _Identity_ parameter specifies the identity of the export request. By default, export requests are named < _alias_>\MailboxExport _X_ (where _X_ = 0-9). Use the following syntax: < _alias_>\< _name_>.  <br/> You can't use this parameter in conjunction with the _RequestGuid_ parameter. <br/> |
| _RequestGuid_ <br/> |Required  <br/> |System.Guid  <br/> |The _RequestGuid_ parameter specifies the unique identifier for the export request. To find the export request GUID, use the **Get-MailboxExportRequest** cmdlet. If you specify the _RequestGuid_ parameter, you must also specify the _RequestQueue_ parameter. You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

