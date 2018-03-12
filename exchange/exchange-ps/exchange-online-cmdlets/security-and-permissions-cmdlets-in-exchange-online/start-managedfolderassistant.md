---
title: "Start-ManagedFolderAssistant"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 75d840ea-5abc-44bb-b361-e81561fa1b04
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Start-ManagedFolderAssistant

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Start-ManagedFolderAssistant** cmdlet to immediately start messaging records management (MRM) processing of mailboxes that you specify.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Start-ManagedFolderAssistant -Identity <MailboxOrMailUserIdParameter> [-AggMailboxCleanup <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-HoldCleanup <SwitchParameter>] [-InactiveMailbox <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example processes the mailbox for a user with the alias Chris.
  
```
Start-ManagedFolderAssistant -Identity "Chris"
```

### Example 2

This example uses the **Get-Mailbox** command to retrieve all the mailboxes that resolve from the ambiguous name resolution (ANR) search on the string "Chr" in the domain DC01 (for example, users such as Chris Ashton, Christian Hess, and Christa Geller), and the results are piped to the **Start-ManagedFolderAssistant** cmdlet for processing.
  
```
Get-Mailbox -Anr Chr -DomainController DC01 | Start-ManagedFolderAssistant
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Managed Folder Assistant uses the retention policy settings of users' mailboxes to process retention of items. This mailbox processing occurs automatically. You can use the **Start-ManagedFolderAssistant** cmdlet to immediately start processing the specified mailbox.
  
> [!IMPORTANT]
> In Exchange Server 2010 release to manufacturing (RTM), the  _Identity_ parameter specifies the Mailbox server to start the assistant and process all mailboxes on that server, and the _Mailbox_ parameter specifies the mailbox to process. In Exchange 2010 Service Pack 1 (SP1) and later, the _Mailbox_ parameter has been removed, and the _Identity_ parameter accepts the mailbox or mail user to process.> If you use these parameters in scheduled commands or scripts, we recommend that you review them and make any necessary changes. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the mailbox to be processed. In cross-premises deployments, you can also specify a mail user who has a mailbox in the cloud. You can use any value that uniquely identifies the mailbox or mail user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _AggMailboxCleanup_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HoldCleanup_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _HoldCleanup_ switch instructs the Managed Folder Assistant to clean up duplicate versions of items in the Recoverable Items folder that may have been created when a mailbox is on In-Place Hold, Litigation Hold, or has Single Item Recovery enabled. You don't need to specify a value with this switch. <br/> Removing duplicate items from the Recoverable Items folder reduces the folder size and may help prevent reaching Recoverable Items quota limits. For more details about Recoverable Items quota limits, see [Recoverable Items Folder](http://technet.microsoft.com/library/efc48fb4-2ed8-4d05-93af-f3505fbc389d.aspx).  <br/> |
| _InactiveMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _InactiveMailbox_ specifies whether the command runs only on inactive mailboxes. You don't need to specify a value with this switch.. <br/> An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed  <br/> When you use this switch, items aren't moved from the inactive mailbox to the archive mailbox.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

