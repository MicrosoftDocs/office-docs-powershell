---
title: "Start-HistoricalSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/12/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 9688689c-2953-49de-bb38-eeea10b7f08e
description: "This cmdlet is available only in the cloud-based service."
---

# Start-HistoricalSearch

This cmdlet is available only in the cloud-based service. 
  
Use the **Start-HistoricalSearch** cmdlet to start a new historical search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Start-HistoricalSearch -EndDate <DateTime> -ReportTitle <String> -ReportType <MessageTrace | MessageTraceDetail | DLP | TransportRule | SPAM | Malware | UnifiedDLP | ATPReport | Spoof | ATPV2> -StartDate <DateTime> [-DeliveryStatus <String>] [-Direction <All | Sent | Received>] [-DLPPolicy <MultiValuedProperty>] [-Locale <CultureInfo>] [-MessageID <MultiValuedProperty>] [-NotifyAddress <MultiValuedProperty>] [-OriginalClientIP <String>] [-RecipientAddress <MultiValuedProperty>] [-SenderAddress <MultiValuedProperty>] [-TransportRule <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example starts a new historical search named "Fabirkam Search" that has the following properties:
  
- **Date range**: January 1, 2016 to January 7, 2016
    
- **Report type**: Message trace
    
- **Sender address**: michelle@fabrikam.com
    
- **Internal notification email address**: chris@contoso.com
    
```
Start-HistoricalSearch -ReportTitle "Fabrikam Search" -StartDate 1/1/2016 -EndDate 1/7/2016 -ReportType MessageTrace -SenderAddress michelle@fabrikam.com -NotifyAddress chris@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are aged between 1-4 hours (depending on your environment) and ninety days old. There are limits to the number of historical searches you can perform in a 24 hour period; you'll be warned if you're nearing the daily quota. Cancelled searches count against the daily quota.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EndDate_ <br/> |Required  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _ReportTitle_ <br/> |Required  <br/> |System.String  <br/> |The  _ReportTitle_ parameter specifies a descriptive name for the historical search. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _ReportType_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoReporting.HistoricalSearchReportType  <br/> | The _ReportType_ parameter specifies the type of historical search that you want to perform. You can use one of the following values: <br/>  `DLP` <br/>  `Malware` <br/>  `MessageTrace` <br/>  `MessageTraceDetail` <br/>  `SPAM` <br/>  `TransportRule` <br/> |
| _StartDate_ <br/> |Required  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _DeliveryStatus_ <br/> |Optional  <br/> |System.String  <br/> | The _DeliveryStatus_ parameter filters the results by the delivery status of the message. You can use one of the following values: <br/>  `Delivered` <br/>  `Expanded` <br/>  `Failed` <br/> |
| _Direction_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.FfoReporting.MessageDirection  <br/> | The _Direction_ parameter filters the results by the direction of the message. Valid values are: <br/>  `All`: Incoming and outgoing messages.  <br/>  `Received`: Ingoing messages only.  <br/>  `Sent`: Outgoing messages only.  <br/> |
| _DLPPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DLPPolicy_ parameter filters the results by the name of the DLP policy that acted on the message. You can specify multiple DLP policies separated by commas. <br/> |
| _Locale_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Locale_ parameter filters the results by the locale of the message. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _MessageID_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _MessageId_ parameter filters the results by the `Message-ID` header field of the message. This value is also known as the Client ID. The format of the `Message-ID` depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the `Message-ID` in the same way. Be sure to include the full Message ID string. This may include angle brackets. <br/> |
| _NotifyAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NotifyAddress_ parameter specifies the email addresses of internal recipients to notify when the historical search is complete. The email address must be in an accepted domain that's configured for your organization. You can enter multiple email addresses separated by commas. <br/> To view the results of the historical search, you need to specify at least one email address for the  _NotifyAddress_ parameter. Otherwise, you need to click on the completed message trace in the Exchange admin center at **Mail flow** > **Message trace**.  <br/> |
| _OriginalClientIP_ <br/> |Optional  <br/> |System.String  <br/> |The  _OriginalClientIP_ parameter filters the results by the original IP address of the message. For incoming messages, the _OriginalClientIP_ value is the sender's IP address. For outgoing messages, the _OriginalClientIP_ value is the IP address of the external SMTP server that received the message. <br/> |
| _RecipientAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _RecipientAddress_ parameter filters the results by the recipient's email address. You can specify multiple values separated by commas. <br/> |
| _SenderAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SenderAddress_ parameter filters the results by the sender's email address. You can specify multiple values separated by commas. <br/> |
| _TransportRule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _TransportRule_ parameter filters the results by the name of the transport rule that acted on the message. You can specify multiple transport rules separated by commas. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

