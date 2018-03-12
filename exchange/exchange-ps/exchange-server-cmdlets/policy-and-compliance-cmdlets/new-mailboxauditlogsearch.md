---
title: "New-MailboxAuditLogSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 95365cab-bbb2-4a64-8e8f-1c89fa9e0352
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailboxAuditLogSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MailboxAuditLogSearch** cmdlet to search mailbox audit logs and have search results sent via email to specified recipients.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxAuditLogSearch -EndDate <ExDateTime> -StartDate <ExDateTime> -StatusMailRecipients <MultiValuedProperty> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExternalAccess <$true | $false>] [-HasAttachments <$true | $false>] [-LogonTypes <MultiValuedProperty>] [-Mailboxes <MultiValuedProperty>] [-Name <String>] [-Operations <MultiValuedProperty>] [-ShowDetails <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1
<a name="example1"> </a>

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2015 to 12/31/2015. Search results are sent to auditors@contoso.com by email.
  
```
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -StatusMailRecipients auditors@contoso.com
```

### Example 2
<a name="example1"> </a>

This example returns entries from the mailbox audit logs of all users in organization for any mailbox access by Microsoft datacenter administrators between September 1, 2015 and October 24, 2015. The search results are sent to admin@contoso.com.
  
```
New-MailboxAuditLogSearch -ExternalAccess $true -StartDate 09/01/2015 -EndDate 10/24/2015 -StatusMailRecipients admin@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-MailboxAuditLogSearch** cmdlet performs an asynchronous search of mailbox audit logs for the specified mailboxes and sends the search results by email to the specified recipients. The body of the email message contains search metadata such as search parameters and the time when the search request was submitted. The results are attached in an .xml file.
  
To search mailbox audit logs for a single mailbox and have the results displayed in the Exchange Management Shell window, use the [Search-MailboxAuditLog](search-mailboxauditlog.md) cmdlet instead. To learn more about mailbox audit logging, see[Understanding Mailbox Audit Logging](https://technet.microsoft.com/library/29b67d58-eef9-4ad4-863f-562405ea8794.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EndDate_ <br/> |Required  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StartDate_ <br/> |Required  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StatusMailRecipients_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _StatusMailRecipients_ parameter specifies the email address of one or more recipients to whom search results are sent by email. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExternalAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ExternalAccess_ parameter returns only audit log entries for mailbox access by a user outside of your organization. In Exchange Online, use this parameter to return audit log entries for access to a mailbox by Microsoft datacenter administrators. <br/> |
| _HasAttachments_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _HasAttachments_ parameter filters the search by messages that have attachments. Valid values are: <br/>  `$true`: Only messages with attachments are included in the search.  <br/>  `$false`: Messages with and without attachments are included in the search.  <br/> |
| _LogonTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _LogonTypes_ parameter specifies the type of logons. Valid values include: <br/>  `Admin`: Audit log entries for mailbox access by administrator logons are returned.  <br/>  `Delegate`: Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.  <br/>  `External`: For Exchange Online mailboxes, audit log entries for mailbox access by Microsoft datacenter administrators are returned.  <br/>  `Owner`: Audit log entries for mailbox access by the primary mailbox owner are returned. This value is available only in Exchange 2016 and also requires the _ShowDetails_ switch. <br/> |
| _Mailboxes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Mailboxes_ parameter specifies one or more mailboxes for which to retrieve mailbox audit log entries. If you don't specify a value, mailbox audit logs for all mailboxes in the Exchange organization are returned. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the search. <br/> |
| _Operations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Operations_ parameter filters the search results by the operations that are logged by mailbox audit logging. Valid values for this parameter are: <br/>  `Copy` <br/>  `Create` <br/>  `FolderBind` <br/>  `HardDelete` <br/>  `MailboxLogin` <br/>  `MessageBind` <br/>  `Move` <br/>  `MoveToDeletedItems` <br/>  `SendAs` <br/>  `SendOnBehalf` <br/>  `SoftDelete` <br/>  `Update` <br/>  You can enter multiple values separated by commas. <br/> |
| _ShowDetails_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ShowDetails_ switch specifies that details of each log entry be retrieved. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

