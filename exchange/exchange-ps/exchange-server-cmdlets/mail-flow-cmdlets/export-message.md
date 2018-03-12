---
title: "Export-Message"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 34036966-9014-4096-9e2d-82a01889dbe4
description: "This cmdlet is available only in on-premises Exchange."
---

# Export-Message

This cmdlet is available only in on-premises Exchange.
  
Use the **Export-Message** cmdlet to copy a message from a queue on a Mailbox server or an Edge Transport server to a specified file path in your organization.
  
```
Export-Message -Identity <MessageIdentity> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example exports a single message to the specified file path. Because the **Export-Message** cmdlet returns a binary object, you must use the **AssembleMessage** filter to be able to save the message content into a specified location.
  
```
Export-Message ExchSrv1\contoso.com\1234 | AssembleMessage -Path "c:\exportfolder\filename.eml"
```

### Example 2

This example retrieves all messages from the specified queue. The query results are then piped to the **Export-Message** command, and all the messages are copied to individual .eml files. The Internet Message IDs of each message are used as the file names. To accomplish this, the command does the following:
  
- Retrieves all messages in a specific queue using the **Get-Message** cmdlet.
    
- The result is pipelined into the **ForEach-Object** cmdlet, which prepares a file name including full path using the temporary variable `$Temp` that consists of the Internet Message ID with .eml extension. The Internet Message ID field contains angled brackets (">" and "<") which need to be removed as they are invalid file names. This is done using the **Replace** method of the temporary variable.
    
- The **ForEach-Object** cmdlet also exports the message using the file name prepared.
    
```
Get-Message -Queue "Server1\contoso.com" -ResultSize Unlimited | ForEach-Object {Suspend-Message $_.Identity -Confirm:$False; $Temp="C:\ExportFolder\"+$_.InternetMessageID+".eml"; $Temp=$Temp.Replace("<","_"); $Temp=$Temp.Replace(">","_"); Export-Message $_.Identity | AssembleMessage -Path $Temp}
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Export-Message** cmdlet copies messages from the Delivery queue, the Unreachable queue, or the poison message queue on Mailbox server or an Edge Transport server to a specified file path. Before you export a message, you must first suspend the message. Messages in the poison message queue are already suspended. You can use the **Export-Message** cmdlet to copy messages to the Replay directory of another Mailbox server for delivery.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Data.QueueViewer.MessageIdentity  <br/> |The _Identity_ parameter specifies the message. Valid input for this parameter uses the syntax _Server_\ _Queue_\ _MessageInteger_ or _Queue_\ _MessageInteger_ or _MessageInteger_, for example,  `Mailbox01\contoso.com\5` or `10`. For details about message identity, see the "Message identity" section in [Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

