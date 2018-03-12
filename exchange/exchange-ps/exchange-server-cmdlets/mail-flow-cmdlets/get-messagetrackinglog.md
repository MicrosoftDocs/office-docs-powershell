---
title: "Get-MessageTrackingLog"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3e0e270a-ba0b-4231-a289-9a940bb63761
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MessageTrackingLog

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MessageTrackingLog** cmdlet to search for message delivery information stored in the message tracking log.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MessageTrackingLog [-EventId <String>] [-InternalMessageId <String>] [-MessageId <String>] [-MessageSubject <String>] [-NetworkMessageId <String>] [-Recipients <String[]>] [-Reference <String>] [-Sender <String>] [-Source <String>] [-DomainController <Fqdn>] [-End <DateTime>] [-ResultSize <Unlimited>] [-Server <ServerIdParameter>] [-Start <DateTime>]
[-TransportTrafficType <String>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example searches the message tracking logs on the Mailbox server named Mailbox01 for information about all messages sent from March 13, 2015, 09:00 to March 15, 2015, 17:00 by the sender john@contoso.com.
  
```
Get-MessageTrackingLog -Server Mailbox01 -Start "03/13/2015 09:00:00" -End "03/15/2015 17:00:00" -Sender "john@contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

A unique message tracking log exists for the Transport service on a Mailbox server, for the Mailbox Transport service on a Mailbox server, and on an Edge Transport server. The message tracking log is a comma-separated value (CSV) file that contains detailed information about the history of each email message as it travels through an Exchange server.
  
The field names displayed in the results from the **Get-MessageTrackingLog** cmdlet are similar to the actual field names used in the message tracking logs. The differences are:
  
- The dashes are removed from the field names. For example **internal-message-id** is displayed as `InternalMessageId`.
    
- The **date-time** field is displayed as `Timestamp`.
    
- The **recipient-address** field is displayed as `Recipients`.
    
- The **sender-address** field is displayed as `Sender`.
    
For more information about the message tracking log files, see [Message Tracking](https://technet.microsoft.com/library/bada2ea7-6d7c-4630-b7f1-67f56818f0ff.aspx).
  
The **Get-MessageTrackingLog** results are displayed on-screen. You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding "> <filename>" to the command. For example:
  
```
Get-MessageTrackingLog -Start "03/13/2014 09:00:00" -End "03/13/2014 09:10:00" | ConvertTo-Html > "C:\My Documents\message track.html"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _End_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _End_ parameter specifies the end date and time of the date range. Message delivery information is returned up to, but not including, the specified date and time. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventId_ <br/> |Optional  <br/> |System.String  <br/> |The _EventId_ parameter filters the message tracking log entries by the value of the **EventId** field. The **EventId** value classifies classify each message event. Example values include `DSN`,  `Defer`,  `Deliver`,  `Send`, or  `Receive`.  <br/> |
| _InternalMessageId_ <br/> |Optional  <br/> |System.String  <br/> |The _InternalMessageId_ parameter filters the message tracking log entries by the value of the **InternalMessageId** field. The **InternalMessageId** value is a message identifier that's assigned by the Exchange server that's currently processing the message. <br/> The value of the **internal-message-id** for a specific message is different in the message tracking log of every Exchange server that's involved in the delivery of the message. <br/> |
| _MessageId_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageId_ parameter filters the message tracking log entries by the value of the **MessageId** field. The value of **MessageId** corresponds to the value of the `Message-Id:` header field in the message. If the `Message-ID` header field is blank or doesn't exist, an arbitrary value is assigned. <br/> |
| _MessageSubject_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageSubject_ parameter filters the message tracking log entries by the value of the message subject. The value of the _MessageSubject_ parameter automatically supports partial matches without using wildcards or special characters. For example, if you specify the _MessageSubject_ value `sea`, the results include messages with  `Seattle` in the subject. By default, message subjects are stored in the message tracking logs. <br/> |
| _NetworkMessageId_ <br/> |Optional  <br/> |System.String  <br/> |The _NetworkMessageId_ parameter filters the message tracking log entries by the value of the **NetworkMessageId** field. This field contains a unique message ID value that persists across copies of the message that may be created due to bifurcation or distribution group expansion. An example value is `1341ac7b13fb42ab4d4408cf7f55890f`.  <br/> |
| _Recipients_ <br/> |Optional  <br/> |System.String[]  <br/> |The _Recipients_ parameter filters the message tracking log entries by the SMTP email address of the message recipients. Multiple recipients in a single message are logged in a single message tracking log entry. Unexpanded distribution group recipients are logged by using the group's SMTP email address. You can specify multiple recipient email addresses separated by commas. <br/> |
| _Reference_ <br/> |Optional  <br/> |System.String  <br/> |The _Reference_ parameter filters the message tracking log entries by the value of the **Reference** field. The **Reference** field contains additional information for specific types of events. For example, the **Reference** field value for a DSN message tracking entry contains the **InternalMessageId** value of the message that caused the DSN. For many types of events, the value of **Reference** is blank. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Sender_ <br/> |Optional  <br/> |System.String  <br/> |The _Sender_ parameter filters the message tracking log entries by the sender's SMTP email address. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _Source_ <br/> |Optional  <br/> |System.String  <br/> |The _Source_ parameter filters the message tracking log entries by the value of the **Source** field. These values indicate the transport component that's responsible for the message tracking event. For more information, see[Source values in the message tracking log](https://technet.microsoft.com/library/bada2ea7-6d7c-4630-b7f1-67f56818f0ff.aspx#Source).  <br/> |
| _Start_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _Start_ parameter specifies the start date and time of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _TransportTrafficType_ <br/> |Optional  <br/> |System.String  <br/> |The _TransportTrafficType_ parameter filters the message tracking log entries by the value of the **TransportTrafficType** field. However, this field isn't interesting for on-premises Exchange organizations. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

