---
title: "Remove-MailboxRestoreRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/29/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a3d3327e-99b0-4d44-bd81-3e8f59eab41d
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-MailboxRestoreRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Remove-MailboxRestoreRequest** cmdlet to remove fully or partially completed restore requests.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Remove-MailboxRestoreRequest -Identity <MailboxRestoreRequestIdParameter> [-Force <SwitchParameter>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the second restore request Ayla\MailboxRestore1.
  
```
Remove-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

### Example 2

This example removes all restore requests that have the status of Completed.
  
```
Get-MailboxRestoreRequest -Status Completed | Remove-MailboxRestoreRequest
```

### Example 3

This example cancels the restore request by using the  _RequestGuid_ parameter for a request stored on MBXDB01. The parameter set that requires the _RequestGuid_ and _RequestQueue_ parameters is used for MRS debugging purposes only. You should only use this parameter set if instructed by Microsoft Customer Service and Support.
  
```
Remove-MailboxRestoreRequest -RequestQueue MBXDB01 -RequestGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

## Detailed Description
<a name="DetailedDescription"> </a>

The parameter set that requires the  _Identity_ parameter allows you to remove a fully or partially completed restore request.
  
The parameter set that requires the  _RequestGuid_ and _RequestQueue_ parameters is used for Microsoft Exchange Mailbox Replication service (MRS) debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxRestoreRequestIdParameter  <br/> |The  _Identity_ parameter specifies the identity of the restore request. The _Identity_ parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: < _alias_>\< _name_>.  <br/> If you didn't specify a name for the restore request when it was created, Exchange automatically generated a default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestore _X_ (where _X_ = 1-9). <br/> |
| _RequestGuid_ <br/> |Required  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _RequestGuid_ parameter specifies the unique identifier for the restore request. To find the GUID, use the[Get-MailboxRestoreRequest](get-mailboxrestorerequest.md) cmdlet. If you specify the _RequestGuid_ parameter, you must also specify the _RequestQueue_ parameter. <br/> This parameter can't be used in conjunction with the  _Identity_ parameter. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter specifies the target mailbox database on which the mailbox or archive of the request resides. You can use one of the following values: <br/>  GUID of the database <br/>  Database name <br/>  If you specify the _RequestQueue_ parameter, you must also specify the _RequestGuid_ parameter. This parameter can't be used in conjunction with the _Identity_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

