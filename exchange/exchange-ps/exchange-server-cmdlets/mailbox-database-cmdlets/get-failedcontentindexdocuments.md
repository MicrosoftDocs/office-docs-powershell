---
title: "Get-FailedContentIndexDocuments"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d128ec5f-f805-4bc0-982b-b9adceb8eca8
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-FailedContentIndexDocuments

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-FailedContentIndexDocuments** cmdlet to retrieve a list of documents for a mailbox, mailbox database, or Mailbox server that couldn't be indexed by Exchange Search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-FailedContentIndexDocuments -Identity <MailboxIdParameter> [-Archive <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox of user Terry Adams.
  
```
Get-FailedContentIndexDocuments -Identity "Terry Adams"
```

### Example 2

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox database Mailbox Database MDB2.
  
```
Get-FailedContentIndexDocuments -MailboxDatabase "Mailbox Database MDB2"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-FailedContentIndexDocuments** cmdlet returns a list of documents that couldn't be indexed. The most common reason is that there was no filter available for that document type or there was an attachment within the document. For example, the PDF filter isn't available by default. If an email message contains a PDF document, because there is no PDF filter, the document is marked as failed content indexing.
  
After a new filter is installed, only new messages with attachments of the type for which the filter is installed are indexed. If you want to index older messages for the document type, the mailbox has to be moved.
  
The cmdlet output provides details about items in a mailbox that couldn't be indexed, including an error code and the reason for failure.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox. You can use one of the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _MailboxDatabase_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _MailboxDatabase_ parameter specifies the database from which to get the mailbox. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  DN <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies a Mailbox server. You can use the following values: <br/>  Name <br/>  GUID <br/>  DN <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch restricts the scope of the cmdlet to the user's archive. When using the _Archive_ switch, you must also specify the _Identity_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _ErrorCode_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ErrorCode_ parameter allows you to retrieve documents that failed indexing with a specific error code. You can use the cmdlet without this parameter to list all failed documents for a mailbox, a mailbox database or a Mailbox server. The output includes the error codes and reason for failure. If required, you can then restrict the output to a specific error code from the results. <br/> |
| _FailureMode_ <br/> |Optional  <br/> |Microsoft.Exchange.Search.Core.Abstraction.FailureMode  <br/> | The _FailureMode_ parameter specifies the type of error. Use the following values. <br/>  `Transient`: Returns items that couldn't be indexed due to transient errors. Exchange Search attempts to index these items again.  <br/>  `Permanent`: Returns items that couldn't be indexed due to a permanent error. Exchange Search does not attempt to index these items again.  <br/>  `All`: Returns items that couldn't be indexed regardless of nature of failure.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

