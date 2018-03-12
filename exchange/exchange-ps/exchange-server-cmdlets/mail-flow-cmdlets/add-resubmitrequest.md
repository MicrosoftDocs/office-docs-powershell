---
title: "Add-ResubmitRequest"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7d6f8a28-2f23-4139-b44f-2a6d57ee912a
description: "This cmdlet is available only in on-premises Exchange."
---

# Add-ResubmitRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Add-ResubmitRequest** cmdlet to add requests to replay redundant copies of messages from Safety Net after a mailbox database recovery.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-ResubmitRequest [-Destination <Guid>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example replays the redundant copies of messages delivered from 6:00 PM June 1, 2012 to 5:00 AM June 2 2012 to the recovered mailbox database 5364aeea-6e6b-4055-8258-229b2c6ac9a2.
  
```
Add-ResubmitRequest -Destination 5364aeea-6e6b-4055-8258-229b2c6ac9a2 -StartTime "06/01/2012 6:00 PM" -EndTime "06/02/2012 5:00 AM"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EndTime_ <br/> |Required  <br/> |System.DateTime  <br/> |The _EndTime_ parameter specifies the delivery time of the latest messages that need to be resubmitted from Safety Net. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> The date and time specified by the _EndTime_ parameter must be later than the date and time specified by the _StartTime_ parameter. The date and time specified by both parameters must be in the past. <br/> |
| _StartTime_ <br/> |Required  <br/> |System.DateTime  <br/> |The _StartTime_ parameter specifies the delivery time of the oldest messages that need to be resubmitted from Safety Net. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> The date and time specified by the _StartTime_ parameter must be earlier than the date and time specified by the _EndTime_ parameter. The date and time specified by both parameters must be in the past. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CorrelationId_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Destination_ <br/> |Optional  <br/> |System.Guid  <br/> |The _Destination_ parameter specifies the GUID of the destination mailbox database. To find the GUID of the mailbox database, run the command: `Get-MailboxDatabase -Server <servername> | Format-List Name,GUID`.  <br/> You can't use this parameter with the _Recipient_, _ResubmitTo_, or _Sender_ parameters. <br/> |
| _MessageId_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageId_ parameter filters the results by the `Message-ID` header field of the message. This value is also known as the Client ID. The format of the `Message-ID` depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the `Message-ID` in the same way. Be sure to include the full Message ID string. This may include angle brackets. <br/> |
| _Recipient_ <br/> |Optional  <br/> |System.String  <br/> |The _Recipient_ parameter filters the messages to resubmit from Safety Net by the specified recipient's email address. <br/> You can't use this parameter with the _Destination_ parameter. <br/> |
| _ResubmitTo_ <br/> |Optional  <br/> |System.String  <br/> |The _ResubmitTo_ parameter specifies the recipient's email address for resubmitted messages that are identified by using the _Recipient_ or _Sender_ parameters. <br/> |
| _Sender_ <br/> |Optional  <br/> |System.String  <br/> |The _Sender_ parameter filters the messages to resubmit from Safety Net by the specified sender's email address. <br/> You can't use this parameter with the _Destination_ parameter. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _TestOnly_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UnresponsivePrimaryServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _UnresponsivePrimaryServers_ parameter identifies the primary servers that should resubmit the messages from Safety Net as being unavailable so other servers can resubmit the messages. If the primary servers are unavailable, you can designate other servers that hold redundant copies of the messages in Safety Net to resubmit their copies of the messages. However, you must identify the unresponsive primary servers to the other servers using this parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

