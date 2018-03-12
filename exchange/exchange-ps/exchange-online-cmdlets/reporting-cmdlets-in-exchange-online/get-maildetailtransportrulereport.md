---
title: "Get-MailDetailTransportRuleReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 26484f90-7063-4c95-a1c2-3792926b3e79
description: "This cmdlet is available only in the cloud-based service."
---

# Get-MailDetailTransportRuleReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-MailDetailTransportRuleReport** cmdlet to view the details of messages that matched the conditions defined by any transport rules.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailDetailTransportRuleReport [-Action <MultiValuedProperty>] [-Direction <MultiValuedProperty>] [-Domain <MultiValuedProperty>] [-EndDate <DateTime>] [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-MessageId <MultiValuedProperty>] [-MessageTraceId <MultiValuedProperty>] [-Page <Int32>] [-PageSize <Int32>] [-ProbeTag <String>] [-RecipientAddress <MultiValuedProperty>] [-SenderAddress <MultiValuedProperty>] [-StartDate <DateTime>] [-TransportRule <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the details of messages sent by john@contoso.com that matched the conditions defined by a transport rule between June 13, 2015 and June 15, 2015.
  
```
Get-MailDetailTransportRuleReport -StartDate 06/13/2015 -EndDate 06/15/2015 -SenderAddress john@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Action_ parameter filters the report by the action taken by DLP policies, transport rules, malware filtering, or spam filtering. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _Direction_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Direction_ parameter filters the results by incoming or outgoing messages. Valid values for this parameter are `Inbound` and `Outbound`.  <br/> |
| _Domain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Domain_ parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value `All`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _EventType_ parameter filters the report by the event type. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify malware filter events for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MessageId_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _MessageId_ parameter filters the results by the `Message-ID` header field of the message. This value is also known as the Client ID. The format of the `Message-ID` depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the `Message-ID` in the same way. Be sure to include the full Message ID string. This may include angle brackets. <br/> |
| _MessageTraceId_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _MessageTraceId_ parameter can be used with the recipient address to uniquely identify a message trace and obtain more details. A message trace ID is generated for every message that's processed by the system. <br/> |
| _Page_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Page_ parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1. <br/> |
| _PageSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PageSize_ parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000. <br/> |
| _ProbeTag_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RecipientAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _RecipientAddress_ parameter filters the results by the recipient's email address. You can specify multiple values separated by commas. <br/> |
| _SenderAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SenderAddress_ parameter filters the results by the sender's email address. You can specify multiple values separated by commas. <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _TransportRule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _TransportRule_ parameter filters the report by the name of the transport rule. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

