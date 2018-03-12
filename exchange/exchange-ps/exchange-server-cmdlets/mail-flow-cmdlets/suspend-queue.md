---
title: "Suspend-Queue"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7dca48c4-69a1-4157-a50e-88907dd32d04
description: "This cmdlet is available only in on-premises Exchange."
---

# Suspend-Queue

This cmdlet is available only in on-premises Exchange.
  
Use the **Suspend-Queue** cmdlet to stop processing for a queue on a Mailbox server or an Edge Transport server.
  
```
Suspend-Queue -Identity <QueueIdentity> <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example suspends processing on all queues holding messages for delivery to the domain contoso.com and that currently have a status of  `Retry`.
  
```
Suspend-Queue -Filter {NextHopDomain -eq "contoso.com" -and Status -eq "Retry"}
```

### Example 2

This example suspends processing on all queues on the server Server1.contoso.com that have more than 100 messages in the queue.
  
```
Suspend-Queue -Server Server1.contoso.com -Filter {MessageCount -gt 100}
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Suspend-Queue** cmdlet stops processing on a queue that has a status of Active or Retry. Messages being processed are delivered, but no additional messages leave the queue. When you use the _Identity_ parameter, the queue is suspended only if the identity matches a single queue. If the identity matches more than one queue, you receive an error. To suspend more than one queue in a single operation, you must use the _Filter_ parameter.
  
For instructions on how to resume suspended queues, see [Resume-Queue](resume-queue.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Filter_ <br/> |Required  <br/> |System.String  <br/> |The _Filter_ parameter specifies one or more queues by using OPath filter syntax. The OPath filter includes a queue property name followed by a comparison operator and value, for example, `{NextHopDomain -eq "contoso.com"}`. For details about filterable queue properties and comparison operators, see [Queue properties](https://technet.microsoft.com/library/bb125237.aspx) and[Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> You can specify multiple criteria by using the **and** comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks ("). <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Data.QueueViewer.QueueIdentity  <br/> |The _Identity_ parameter specifies the queue. Valid input for this parameter uses the syntax _Server_\ _Queue_ or _Queue_, for example,  `Mailbox01\contoso.com` or `Unreachable`. For details about queue identity, see the "Queue identity" section in [Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can use the _Server_ parameter and the _Filter_ parameter in the same command. You can't use the _Server_ parameter and the _Identity_ parameter in the same command. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

