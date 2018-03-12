---
title: "Get-DlpDetectionsReport"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 063edb32-476f-41e7-a232-2b08276eb331
description: "This cmdlet is available only in the cloud-based service."
---

# Get-DlpDetectionsReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-DlpDetectionsReport** cmdlet to list a summary of Data Loss Prevention (DLP) rule matches for SharePoint Online and OneDrive for Business in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DlpDetectionsReport [-Action <MultiValuedProperty>] [-AggregateBy <String>] [-DlpCompliancePolicy <MultiValuedProperty>] [-DlpComplianceRule <MultiValuedProperty>] [-EndDate <DateTime>] [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>] [-Source <MultiValuedProperty>] [-StartDate <DateTime>] [-SummarizeBy <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists the DLP activities for November, 2015.
  
```
 Get-DlpDetectionsReport -StartDate 11/01/2015 -EndDate 11/30/2015
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-DlpDetectionsReport** cmdlet returns general DLP detection data that's aggregated per day. The properties returned include:
  
-  `Date`
    
-  `DlpPolicy`
    
-  `TransportRule`
    
-  `Action`
    
-  `EventType`
    
-  `MessageCount`
    
-  `Source`
    
-  `StartDate`
    
-  `EndDate`
    
To see detailed information about each DLP rule match, use the **Get-DlpDetailReport** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Action_ parameter filters the report by the action taken by DLP policies. Valid values are: <br/>  `BlockAccess` <br/>  `GenerateIncidentReport` <br/>  `NotifyUser` <br/>  You can specify multiple values separated by commas. <br/> |
| _AggregateBy_ <br/> |Optional  <br/> |System.String  <br/> |The  _AggregateBy_ parameter specifies the reporting period. Valid values are `Hour`,  `Day`, or  `Summary`. The default value is  `Day`.  <br/> |
| _DlpCompliancePolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DlpCompliancePolicy_ parameter filters the report by the name of the DLP compliance policy. You can specify multiple policies separated by commas. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _DlpComplianceRule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DlpComplianceRule_ parameter filters the report by the name of the DLP compliance rule. You can specify multiple rules separated by commas. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _EventType_ parameter filters the report by the event type. Valid values are: <br/>  `DLPActionHits` <br/>  `DLPPolicyFalsePositive` <br/>  `DLPPolicyHits` <br/>  `DLPPolicyOverride` <br/>  `DLPRuleHits` <br/>  You can specify multiple values separated by commas. <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Page_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Page_ parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1. <br/> |
| _PageSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PageSize_ parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000. <br/> |
| _Source_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Source_ parameter filters the report by workload. Valid values are: <br/>  `EXCH`: Exchange Online  <br/>  `ODB`: OneDrive for Business  <br/>  `SPO`: SharePoint Online  <br/>  You can specify multiple values separated by commas. <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _SummarizeBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _SummarizeBy_ parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the _SummarizeBy_ parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the _SummarizeBy_ parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of `EventType` on an individual row in the report, you can use the _SummarizeBy_ parameter to see the total number of instances of that value of `EventType` on one row in the report. <br/>  For the **Get-DLPDetectionsReport** cmdlet, the _SummarizeBy_ parameter accepts the following values: <br/>  `Action` <br/>  `DLPPolicy` <br/>  `Domain` <br/>  `EventType` <br/>  You can specify multiple values separated by commas. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

