---
title: "Get-MailTrafficPolicyReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 1f26abdf-ac82-4792-965c-9b839d7e2231
description: "This cmdlet is available only in the cloud-based service."
---

# Get-MailTrafficPolicyReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-MailTrafficPolicyReport** cmdlet to view statistics about messages that were affected by data loss prevention (DLP) policies and transport rules.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailTrafficPolicyReport [-Action <MultiValuedProperty>] [-AggregateBy <String>] [-Direction <MultiValuedProperty>] [-DlpPolicy <MultiValuedProperty>] [-Domain <MultiValuedProperty>] [-EndDate <DateTime>] [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>] [-ProbeTag <String>] [-StartDate <DateTime>] [-SummarizeBy <MultiValuedProperty>] [-TransportRule <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the statics for outgoing messages between June 13, 2015 and June 15, 2015 that were affected by DLP policies and transport rules.
  
```
Get-MailTrafficPolicyReport -Direction Outbound -StartDate 06/13/2015 -EndDate 06/15/2015
```

### Example 2

This example retrieves the statics for outgoing messages on December 12, 2015, and displays the results in a table. Every unique combination of **EventType** and **Action** is displayed on a separate row in the table.
  
```
Get-MailTrafficPolicyReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

### Example 3

This example is similar to the previous example, but now the results are summarized. Because the **EventType** is one of the summarized values, the rows in the table now contain the unique values of **Action**. The total number of rows in the report is reduced, and values of **MessageCount** are correspondingly larger on each row.
  
```
Get-MailTrafficPolicyReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound -SummarizeBy Domain,DlpPolicy,TransportRule,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Action_ parameter filters the report by the action taken by DLP policies, transport rules, malware filtering, or spam filtering. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _AggregateBy_ <br/> |Optional  <br/> |System.String  <br/> |The  _AggregateBy_ parameter specifies the reporting period. Valid values are `Hour`,  `Day`, or  `Summary`. The default value is  `Day`.  <br/> |
| _Direction_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Direction_ parameter filters the results by incoming or outgoing messages. Valid values for this parameter are `Inbound` and `Outbound`.  <br/> |
| _DlpPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DlpPolicy_ parameter filters the report by the name of the DLP policy. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Domain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Domain_ parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value `All`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _EventType_ parameter filters the report by the event type. To view the complete list of valid values for this parameter, run the command `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify malware filter events for malware reports.  <br/> You can specify multiple values separated by commas.  <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Page_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Page_ parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1. <br/> |
| _PageSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PageSize_ parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000. <br/> |
| _ProbeTag_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _SummarizeBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SummarizeBy_ parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the _SummarizeBy_ parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the _SummarizeBy_ parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of `EventType` on an individual row in the report, you can use the _SummarizeBy_ parameter to see the total number of instances of that value of `EventType` on one row in the report. <br/> For the **Get-MailTrafficPolicyReport** cmdlet, the _SummarizeBy_ parameter accepts the values `Action`,  `DLPPolicy`,  `Domain`,  `EventType`, and  `TransportRule`. You can specify multiple values separated by commas.  <br/> |
| _TransportRule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _TransportRule_ parameter filters the report by the name of the transport rule. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

