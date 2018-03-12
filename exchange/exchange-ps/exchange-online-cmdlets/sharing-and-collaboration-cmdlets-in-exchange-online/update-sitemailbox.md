---
title: "Update-SiteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b0b73d6f-be39-4c36-8eeb-7774d08c19cb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Update-SiteMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Update-SiteMailbox** cmdlet to trigger a Microsoft SharePoint synchronization. This command synchronizes document content membership and permissions into Microsoft Exchange. You may need to perform this action when troubleshooting document or membership synchronization issues.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-SiteMailbox -Identity <RecipientIdParameter> [-BypassOwnerCheck <SwitchParameter>] [-FullSync <SwitchParameter>] [-Organization <OrganizationIdParameter>] [-Server <String>] [-Confirm [<SwitchParameter>]] [-Target <All | Document | Membership | Maintenance>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example updates the site mailbox MarketingEvents 2013. If you don't specify the target, this triggers both document and membership synchronization. Because the  _BypassOwnerCheck_ parameter is used, it isn't necessary to be an owner or member of the site mailbox to run this cmdlet.
  
```
Update-SiteMailbox -BypassOwnerCheck -Identity "MarketingEvents 2013"
```

### Example 2

This example updates the site mailbox WinterHoliday@tailspintoys.com and performs a full synchronization. By default, the update only occurs for synchronization from the last synchronization. This is only applicable to document synchronization
  
```
Update-SiteMailbox -BypassOwnerCheck -Identity WinterHoliday@tailspintoys.com -FullSync
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you are running this command against a site mailbox in which you aren't the owner, you need to use the  _BypassOwnerCheck_ parameter to run this cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the identity of the site mailbox. This parameter accepts the following values: <br/>  DisplayName <br/>  SMTP address <br/>  Name <br/>  GUID <br/> |
| _BypassOwnerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _BypassOwnerCheck_ parameter specifies that the user running the command in the Exchange Management Shell isn't a site mailbox owner or member. If you run the command without this parameter and you aren't the site mailbox owner or member, the command doesn't run or return any information. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _FullSync_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _FullSync_ parameter specifies full sync is expensive and will have a performance impact on the Exchange system. <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Server_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Server_ parameter specifies the fully qualified domain name (FQDN) or the Microsoft SharePoint server on which the site mailbox is located. <br/> |
| _Target_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.RecipientTasks.TeamMailboxDiagnosticsBase+TargetType  <br/> | The _Target_ parameter specifies whether to update the SharePoint documents, the site mailbox's membership list or both. This parameter accepts the following values: <br/>  `All` <br/>  `Document` <br/>  `Membership` <br/>  If you don't specify this parameter when you run the cmdlet, this parameter value defaults to `ALL`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

