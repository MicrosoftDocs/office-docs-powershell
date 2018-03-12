---
title: "Get-MessageTrackingReport"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b949297c-843b-4eb6-9e5e-378c84b841a3
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MessageTrackingReport

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-MessageTrackingReport** cmdlet to return data for a specific message tracking report. This cmdlet is used by the delivery reports feature.
  
> [!NOTE]
> In Exchange Online, delivery reports has been replaced by message trace (the **Get-MessageTrace** and **Get-MessageTraceDetail** cmdlets).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-MessageTrackingReport -Identity <MessageTrackingReportId> [-BypassDelegateChecking <SwitchParameter>] [-DetailLevel <Basic | Verbose>] [-DomainController <Fqdn>] [-DoNotResolve <SwitchParameter>] [-RecipientPathFilter <SmtpAddress>] [-Recipients <String[]>] [-ReportTemplate <Summary | RecipientPath>] [-ResultSize <Unlimited>] [-Status <Unsuccessful | Pending | Delivered | Transferred | Read>] [-TraceLevel <Low | Medium | High>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example gets the message tracking report for messages sent from one user to another. This example returns the summary of the message tracking report for a message that David Jones sent to Wendy Richardson.
  
```
$Temp = Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"; Get-MessageTrackingReport -Identity $Temp.MessageTrackingReportID -ReportTemplate Summary
```

### Example 2

This example gets the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.
  
This example searches the message tracking data for the specific message tracking reports, and then returns detailed troubleshooting information for the specific recipient path.
  
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -ByPassDelegateChecking -DoNotResolve | ForEach-Object { Get-MessageTrackingReport -Identity $_.MessageTrackingReportID -DetailLevel Verbose -BypassDelegateChecking -DoNotResolve -RecipientPathFilter "cigdem@fabrikam.com" -ReportTemplate RecipientPath }
```

## Detailed Description
<a name="DetailedDescription"> </a>

This cmdlet requires the ID for the message tracking report that you want to view. Therefore, first you need to use the **Search-MessageTrackingReport** cmdlet to find the message tracking report ID for a specific message, and then pass the results to this cmdlet. For more information, see[Search-MessageTrackingReport](search-messagetrackingreport.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Tracking.MessageTrackingReportId  <br/> |The _Identity_ parameter specifies the message tracking report ID that you want to view. <br/> You need to run the **Search-MessageTrackingReport** cmdlet to find the message tracking report ID for the specific message that you're tracking, and then pass the value of the **MessageTrackingReportID** field to this parameter. <br/> |
| _BypassDelegateChecking_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BypassDelegateChecking_ switch allows Help desk staff and administrators to retrieve message tracking reports for any user. You don't need to specify a value with this switch. <br/> By default, each user can only see the message tracking reports for messages that they send or receive from their own mailbox. When you use this switch, you can view the message tracking reports for message exchanges among other users.  <br/> |
| _DetailLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.InfoWorker.Common.MessageTracking.MessageTrackingDetailLevel  <br/> | The _DetailLevel_ parameter specifies the amount of detail to return in the results. Valid values are: <br/>  `Basic`: Simple delivery report information is returned, which is more appropriate for users.  <br/>  `Verbose`: Full report information is returned, including server names and physical topology information.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DoNotResolve_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DoNotResolve_ switch specifies whether to prevent the resolution of email addresses to display names. You don't need to specify a value with this switch. <br/>  Using this switch improves performance, but the lack of display names might make the results more difficult to interpret. <br/> |
| _RecipientPathFilter_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _RecipientPathFilter_ parameter specifies the email address of the recipient when you use the _ReportTemplate_ parameter with the value `RecipientPath`.  <br/> |
| _Recipients_ <br/> |Optional  <br/> |System.String[]  <br/> |The _Recipients_ parameter specifies the email addresses of the recipients when you use the _ReportTemplate_ parameter with the value `Summary`. You can specify multiple email addresses separated by commas.  <br/> |
| _ReportTemplate_ <br/> |Optional  <br/> |Microsoft.Exchange.InfoWorker.Common.MessageTracking.ReportTemplate  <br/> | The _ReportTemplate_ parameter specifies a predefined format for the output. Valid values are: <br/>  `RecipientPath`: Returns a detailed tracking report for one recipient of the message. You specify the recipient by using the _RecipientPathFilter_ parameter. <br/>  `Summary`: Returns a summary for all recipients of the message. You specify the recipients by using the _Recipients_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Tracking._DeliveryStatus  <br/> | The _Status_ parameter filters the results by the specified delivery status codes. Valid values are: <br/>  `Delivered` <br/>  `Read` <br/>  `Pending` <br/>  `Transferred` <br/>  `Unsuccessful` <br/> |
| _TraceLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Tracking.TraceLevel  <br/> | The _TraceLevel_ parameter specifies the details to include in the results. Valid values are: <br/>  `Low`: Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts, and any error information.  <br/>  `Medium`: In addition to the data returned for the  `Low` setting, the actual message tracking search results are also returned. <br/>  `High`: Full diagnostic data is returned.  <br/>  You only need to use this parameter for troubleshooting message tracking issues. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

