---
title: "Get-MailTrafficReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 28988896-893c-46c9-a174-8ab6f834d0c9
description: "This cmdlet is available only in the cloud-based service."
---

# Get-MailTrafficReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-MailTrafficReport** cmdlet to view details about message traffic in your organization for the last 180 days.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailTrafficReport [-Action <MultiValuedProperty>] [-AggregateBy <String>] [-Direction <MultiValuedProperty>] [-Domain <MultiValuedProperty>] [-EndDate <DateTime>] [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>] [-ProbeTag <String>] [-StartDate <DateTime>] [-SummarizeBy <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves details for incoming messages between June 13, 2015 and June 15, 2015.
  
```
Get-MailTrafficReport -Direction Inbound -StartDate 06/13/2015 -EndDate 06/15/2015
```

### Example 2

This example retrieves the statistics for outgoing messages on December 12, 2015, and displays the results in a table. Every unique combination of **EventType** and **Action** is displayed on a separate row in the table.
  
```
Get-MailTrafficReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

### Example 3

This example is similar to the previous example, but now the results are summarized. Because the **EventType** is one of the summarized values, the rows in the table now contain the unique values of **Action**. The total number of rows in the report is reduced, and values of **MessageCount** are correspondingly larger on each row.
  
```
Get-MailTrafficReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound -SummarizeBy Domain,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **EventTypes** values from the **Get-MailTrafficReport** cmdlet to analyze what happened to messages when they were filtered by the service. The following list describes all possible event types for messages.
  
 **Mail traffic summary**
  
-  `GoodMail`: Messages that were delivered after passing through the malware and spam filters. This count shows the number of unique messages. If a message was delivered to multiple recipients, it would still count as a single message.
    
-  `Malware`: Messages that were marked as malware.
    
-  `TransportRuleHits`: Messages that matched a rule. If a message matched multiple rules, this event type would show each of the rule matches.
    
 **Spam detections**
  
-  `SpamIPBlock`: Messages that were blocked based on the sender IP.
    
-  `SpamDBEBFilter`: Messages that were blocked based on checking the recipient against the directory. This happens when a message is addressed to an unknown recipient.
    
-  `SpamEnvelopeBlock`: Messages that were blocked based on SMTP.
    
-  `SpamContentFiltered`: Messages that passed the initial IP and SMTP filters and were filtered based on content, rules or other spam configurations.
    
 **Spam analysis - content-filtered spam**
  
-  `Spam_AdditionalSpamFiltered`: Messages filtered based on advanced spam filters that have been enabled. For details about the advanced spam filter, see [Advanced Spam Filtering Options](http://technet.microsoft.com/library/b286f853-b484-4af0-b01f-281fffd85e7a.aspx).
    
-  `Spam_BlockList`: Messages that were filtered because the sender was on a spam filter block list. For more details on how to configure these lists, see [Configure your content filter policies](http://technet.microsoft.com/library/316544cb-db1d-4c25-a5b9-c73bbcf53047.aspx).
    
-  `Spam_BulkFiltered`: Messages that were filtered as bulk mail. See message volume breakdown by Bulk Complaint Level (BCL) for further analysis of bulk mail. For more information about bulk mail processing, see [What's the Difference Between Junk Email and Bulk Email?](http://technet.microsoft.com/library/8079f193-1b40-4081-9e5d-d0e50dfbcc59.aspx)
    
-  `Spam_ContentScanFiltered`: Messages that were filtered based on the message content.
    
-  `Spam_ETRFiltered`: Messages that were filtered due to a transport rule.
    
-  `Spam_SenderBlocked`: Messages that were filtered because the sender was on a block list.
    
 **Spam analysis - non-spam messages**
  
-  `NonSpam_AdditionalSpamFilterPassed`: Messages that were passed based on advanced spam filters that have been enabled. For details about the advanced spam filters, see [Advanced Spam Filtering Options](http://technet.microsoft.com/library/b286f853-b484-4af0-b01f-281fffd85e7a.aspx).
    
-  `NonSpam_AllowList`: Messages that were passed because the sender was on a spam filter allow list. For more details on how to configure these lists, see [Configure your content filter policies](http://technet.microsoft.com/library/316544cb-db1d-4c25-a5b9-c73bbcf53047.aspx).
    
-  `NonSpam_BulkPassed`: Messages that were determined not to be bulk mail.
    
-  `NonSpam_ContentScanPassed`: Messages that were passed by the content scan.
    
-  `NonSpam_ETRPassed`: Messages that passed based on a transport rule.
    
-  `NonSpam_IntraOrg`: Messages that were deemed as low risk of spam based on factors such as intra-organizational mail.
    
-  `NonSpam_IPAllowed`: Messages that were passed because the sending IP was on the IP allow list.
    
-  `NonSpam_SafeSender`: Messages that were passed because the sender was marked as safe.
    
 **Bulk mail**
  
-  `BCL0`: Messages that are not bulk mail are marked with Bulk Complaint Level (BCL) value of 0. For details on how to use BCL to mark messages as spam, see [Use transport rules to configure bulk email filtering](http://technet.microsoft.com/library/2889c82e-fab0-4e85-87b0-b001b2ccd4f7.aspx).
    
-  `BCL1` through `BCL9`: Messages with BCL rating of 1 through 9.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Action_ parameter filters the report by the action taken by DLP policies, transport rules, malware filtering, or spam filtering. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _AggregateBy_ <br/> |Optional  <br/> |System.String  <br/> |The  _AggregateBy_ parameter specifies the reporting period. Valid values are `Hour`,  `Day`, or  `Summary`. The default value is  `Day`.  <br/> |
| _Direction_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Direction_ parameter filters the results by incoming or outgoing messages. Valid values for this parameter are `Inbound` and `Outbound`.  <br/> |
| _Domain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Domain_ parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value `All`.  <br/>  If you don't use the _Domain_ parameter, the message count for your entire organization is returned. This includes messages that were sent from or to unregistered domains that are attributed to your organization. Unregistered domains can be attributed to your organization in hybrid or EOP standalone configurations. <br/> **Notes:**:  <br/>  Messages that are sent to recipients in multiple domains are counted differently at the domain level versus the organizational level. At the domain level, the message is counted for each different domain. At the organizational level, the message is counted only once. Therefore, if you add up the total number of received messages for each domain, the value might not match the total number of received messages for the organization. <br/>  The **Domain** value is `Others` for messages that were sent from or to unregistered domains that are attributed to your organization (messages in domains that aren't configured as accepted domains in your organization). <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _EventType_ parameter filters the report by the event type. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify malware filter events for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Page_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Page_ parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1. <br/> |
| _PageSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PageSize_ parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000. <br/> |
| _ProbeTag_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _SummarizeBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SummarizeBy_ parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the _SummarizeBy_ parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the _SummarizeBy_ parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of `EventType` on an individual row in the report, you can use the _SummarizeBy_ parameter to see the total number of instances of that value of `EventType` on one row in the report. <br/> For the **Get-MailTrafficReport** cmdlet, the _SummarizeBy_ parameter accepts the values `Action`,  `Domain`, and  `EventType`. You can specify multiple values separated by commas.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

