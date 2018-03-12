---
title: "Search-MessageTrackingReport"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c7f17296-5489-4e93-ae15-743ba4644efd
description: "This cmdlet is available only in on-premises Exchange."
---

# Search-MessageTrackingReport

This cmdlet is available only in on-premises Exchange.
  
Use the **Search-MessageTrackingReport** cmdlet to find the unique message tracking report based on the search criteria provided. You can then pass this message tracking report ID to the **Get-MessageTrackingReport** cmdlet to get full message tracking information. For more information, see[Get-MessageTrackingReport](get-messagetrackingreport.md). The message tracking report cmdlets are used by the delivery reports feature.
  
> [!NOTE]
> In Exchange Online, delivery reports has been replaced by message trace (the **Get-MessageTrace** and **Get-MessageTraceDetail** cmdlets).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Search-MessageTrackingReport -Identity <MailboxIdParameter> -Sender <SmtpAddress> [-BypassDelegateChecking <SwitchParameter>] [-DoNotResolve <SwitchParameter>] [-MessageEntryId <String>] [-MessageId <String>] [-ResultSize <Unlimited>] [-Subject <String>] [-TraceLevel <Low | Medium | High>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example searches the message tracking report for messages sent from one user to another. This example returns the message tracking report for a message that David Jones sent to Wendy Richardson.
  
```
Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"
```

### Example 2

This example searches the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.
  
This example returns the message tracking reports that the Help desk can analyze to resolve the issue.
  
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -BypassDelegateChecking -DoNotResolve
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter scopes the search to the specified mailbox. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  When you use this parameter without the _Sender_ parameter, the specified mailbox is the message sender that's used in the search. You can specify the recipients by using the _Recipients_ parameter. <br/>  When you use this parameter with the _Sender_ parameter, the specified mailbox is message recipient that's used in the search. <br/> |
| _Sender_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _Sender_ parameter specifies the email address of the message sender for messages that are sent to the mailbox that's specified by the _Identity_ parameter. <br/> You need to use this parameter with the _Identity_ parameter. <br/> |
| _BypassDelegateChecking_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BypassDelegateChecking_ switch allows Help desk staff and administrators to track messages for any user. You don't need to specify a value with this switch. <br/> By default, users can only track messages that they send or receive from their own mailbox.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DoNotResolve_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DoNotResolve_ switch specifies whether to prevent the resolution of email addresses to display names. You don't need to specify a value with this switch. <br/>  Using this switch improves performance, but the lack of display names might make the results more difficult to interpret. <br/> |
| _MessageEntryId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MessageId_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageId_ parameter filters the results by the `Message-ID` header field of the message. This value is also known as the Client ID. The format of the `Message-ID` depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the `Message-ID` in the same way. Be sure to include the full Message ID string. This may include angle brackets. <br/> |
| _Recipients_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |The _Recipients_ parameter filters the results by the email addresses of the specified recipients. You can specify multiple email addresses separated by commas. <br/> You can't use this parameter with the _Sender_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Subject_ <br/> |Optional  <br/> |System.String  <br/> |The _Subject_ parameter searches for messages with the specified **Subject** field value. If the value contains spaces, enclosed the value in quotation marks. <br/> |
| _TraceLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Tracking.TraceLevel  <br/> | The _TraceLevel_ parameter specifies the details to include in the results. Valid values are: <br/>  `Low`: Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts, and any error information.  <br/>  `Medium`: In addition to all the data returned for the  `Low` setting, the actual message tracking search results are also returned. <br/>  `High`: Full diagnostic data is returned.  <br/>  You only need to use this parameter for troubleshooting message tracking issues. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

