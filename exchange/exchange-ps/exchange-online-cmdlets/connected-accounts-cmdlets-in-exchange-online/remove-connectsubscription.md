---
title: "Remove-ConnectSubscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 6a4e7267-e3e9-42ec-b1be-7d1d9e2ea40c
description: "This cmdlet is available only in the cloud-based service."
---

# Remove-ConnectSubscription

This cmdlet is available only in the cloud-based service. 
  
Use the **Remove-ConnectSubscription** cmdlet to remove a previously configured contact aggregation subscription between a supported service (for example, Facebook or LinkedIn) and a cloud-based mailbox. An administrator can't use this cmdlet to remove subscriptions from another user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-ConnectSubscription -Identity <AggregationSubscriptionIdParameter> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the all previously configured contact aggregation subscriptions and removes all contacts that were aggregated from the previously configured contact aggregation subscription from Outlook on the web. You can find the subscription identity by using the **Get-ConnectSubscription** cmdlet.
  
```
Remove-ConnectSubscription -Identity <Aggregation subscription identity>
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you remove a contact aggregation subscription, all contacts from the supported services are removed from Outlook on the web. You can't delete a mailbox that has a subscription with a contact aggregation provider until the subscription is removed. If you try to delete a mailbox that has a subscription with a contact aggregation provider, an error message is displayed that the contact subscription must be removed before the mailbox can be deleted.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AggregationSubscriptionIdParameter  <br/> |The  _Identity_ parameter specifies the GUID of the contact aggregation subscription you want to remove. You can find the subscription identity by using the **Get-ConnectSubscription** cmdlet. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

