---
title: "Start-MailboxSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: f0c4e047-7eca-4310-bfad-1ecfe1420ceb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Start-MailboxSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Start-MailboxSearch** cmdlet to restart or resume a mailbox search that's been stopped.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Start-MailboxSearch -Identity <EwsStoreObjectIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-Resume <SwitchParameter>] [-StatisticsStartIndex <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1
<a name="example1"> </a>

This example starts the mailbox search ProjectContoso.
  
```
Start-MailboxSearch -Identity "ProjectContoso"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use In-Place eDiscovery to search one or more specified mailboxes or all mailboxes across the Exchange organization. A search is created by using the Exchange admin center (EAC) or the **New-MailboxSearch** cmdlet.
  
> [!CAUTION]
> When restarting a search, any previous results returned by the same search and copied to a Discovery mailbox are removed. To preserve previous search results and resume the search from the point it was stopped, use the  _Resume_ switch.
  
In Exchange 2013 or later, mailbox searches are also used for In-Place Hold. However, you can't start or stop In-Place Hold using the **Start-MailboxSearch** and **Stop-MailboxSearch** cmdlets.
  
For more details, see [In-Place Hold](http://technet.microsoft.com/library/71031c06-852d-44d8-b558-dff444eaef8c.aspx) and[In-Place eDiscovery](http://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.EwsStoreObjectIdParameter  <br/> |The  _Identity_ parameter specifies the name of the search. The name is referenced when starting, stopping, or removing the search. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Resume_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Resume_ switch resumes a stopped, failed, or partially succeeded search from the point it stopped. You don't need to specify a value with this switch. <br/> If you use this switch to resume a search, previous search results aren't removed from the target mailbox.  <br/> |
| _StatisticsStartIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _StatisticsStartIndex_ parameter is used by the EAC to retrieve keyword statistics in a paged operation. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

