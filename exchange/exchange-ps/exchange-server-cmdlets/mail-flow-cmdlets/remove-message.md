---
title: "Remove-Message"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 15d5987b-bedd-437e-b86a-6b0e80619fde
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-Message

This cmdlet is available only in on-premises Exchange.
  
Use the **Remove-Message** cmdlet to delete a message from a queue on a Mailbox server or an Edge Transport server.
  
```
Remove-Message -Filter <String> [-Server <ServerIdParameter>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes all messages that meet the following criteria without generating NDRs:
  
- The messages are sent by the sender Kweku@contoso.com.
    
- The messages are queued on the server Server1.
    
```
Remove-Message -Server Server1 -Filter {FromAddress -eq "Kweku@contoso.com"} -WithNDR $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

A message being transmitted to multiple recipients might be located in multiple queues. If you specify an _Identity_ parameter, the message is removed from a single queue if that identity matches only a single message. If the identity matches more than one message, you receive an error. To remove a message from more than one queue in a single operation, you must use the _Filter_ parameter. If you try to remove a message currently being delivered, the message status changes to `PendingDelete`. Message delivery isn't interrupted, but if the delivery fails and causes the message to re-enter the queue, it's then removed.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Filter_ <br/> |Required  <br/> |System.String  <br/> |The _Filter_ parameter specifies one or more messages by using OPath filter syntax. The OPath filter includes a message property name followed by a comparison operator and value, for example, `{FromAddress -like "*@contoso.com"}`. For details about filterable message properties and comparison operators, see [Properties of messages in queues](https://technet.microsoft.com/library/bb123714.aspx) and[https://technet.microsoft.com/library/aa998047.aspx](Find queues and messages in queues in the Exchange Management Shell).  <br/> You can specify multiple criteria by using the **and** comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks ("). <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Data.QueueViewer.MessageIdentity  <br/> |The _Identity_ parameter specifies the message. Valid input for this parameter uses the syntax _Server_\ _Queue_\ _MessageInteger_ or _Queue_\ _MessageInteger_ or _MessageInteger_, for example,  `Mailbox01\contoso.com\5` or `10`. For details about message identity, see the "Message identity" section in [Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can use the _Server_ parameter and the _Filter_ parameter in the same command. You can't use the _Server_ parameter and the _Identity_ parameter in the same command. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WithNDR_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _WithNDR_ parameter specifies whether a non-delivery report (NDR) is returned to the sender of a message. The default value is `$true`. This parameter can be used with both the _Identity_ parameter and _Filter_ parameter sets. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

