---
title: "Get-MailTrafficSummaryReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 58c279cd-d548-46b2-90b9-d7be69241421
description: "This cmdlet is available only in the cloud-based service."
---

# Get-MailTrafficSummaryReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-MailTrafficSummaryReport** cmdlet to view summary information about message traffic in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailTrafficSummaryReport [-Category <String>] [-DlpPolicy <MultiValuedProperty>] [-Domain <MultiValuedProperty>] [-EndDate <DateTime>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>] [-ProbeTag <String>] [-StartDate <DateTime>] [-TransportRule <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows the top spam recipient statistics between June 13, 2015 and June 15, 2015.
  
```
Get-MailTrafficSummaryReport -Category TopSpamRecipient -StartDate 06/13/2015 -EndDate 06/15/2015
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Category_ <br/> |Optional  <br/> |System.String  <br/> |The  _Category_ parameter filters the report by category. Value values for this parameter are: `InboundDLPHits`,  `OutboundDLPHits`,  `InboundTransportRuleHits`,  `OutboundTransportRuleHits`,  `InboundDLPPolicyRuleHits`,  `OutboundDLPPolicyRuleHits`,  `TopSpamRecipient`,  `TopMailSender`,  `TopMailRecipient`,  `TopMalwareRecipient`, or  `TopMalware`.  <br/> |
| _DlpPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DlpPolicy_ parameter filters the report by the name of the data loss prevention (DLP) policy. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Domain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Domain_ parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value `All`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Page_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Page_ parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1. <br/> |
| _PageSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PageSize_ parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000. <br/> |
| _ProbeTag_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _TransportRule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _TransportRule_ parameter filters the report by the name of the transport rule. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

