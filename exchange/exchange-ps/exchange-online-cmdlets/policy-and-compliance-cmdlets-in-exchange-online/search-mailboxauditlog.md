---
title: "Search-MailboxAuditLog"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 2cc4598a-8a8c-45a0-901c-73e1079d193e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Search-MailboxAuditLog

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Search-MailboxAuditLog** cmdlet to search mailbox audit log entries matching the specified search terms.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Search-MailboxAuditLog [-EndDate <ExDateTime>] [-ExternalAccess <$true | $false>] [-HasAttachments <$true | $false>] [-Identity <MailboxIdParameter>] [-LogonTypes <MultiValuedProperty>] [-Operations <MultiValuedProperty>] [-ResultSize <Int32>] [-ShowDetails <SwitchParameter>] [-StartDate <ExDateTime>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by  `Admin` and `Delegate` logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.
  
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

### Example 2

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by  `Admin` and `Delegate` logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.
  
```
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

### Example 3

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2016 and 3/1/2016. The results are piped to the **Where-Object** cmdlet and filtered to return only entries with the **HardDelete** action.
  
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2016 -EndDate 3/1/2016 | Where-Object {$_.Operation -eq "HardDelete"}
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Search-MailboxAuditLog** cmdlet performs a synchronous search of mailbox audit logs for one or more specified mailboxes and displays search results in the Exchange Management Shell window. To search mailbox audit logs for multiple mailboxes and have the results sent by email to specified recipients, use the **New-MailboxAuditLogSearch** cmdlet instead. To learn more about mailbox audit logging, see[Understanding Mailbox Audit Logging](http://technet.microsoft.com/library/29b67d58-eef9-4ad4-863f-562405ea8794.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _ExternalAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ExternalAccess_ parameter returns only mailbox audit log entries for mailbox access by users outside of your organization. In Exchange Online, use this parameter to return audit log entries for mailbox access by Microsoft datacenter administrators. <br/> |
| _HasAttachments_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _HasAttachments_ parameter filters the search by messages that have attachments. Valid values are: <br/>  `$true`: Only messages with attachments are included in the search.  <br/>  `$false`: Messages with and without attachments are included in the search.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The  _Identity_ parameter specifies the mailbox for which to retrieve mailbox audit log entries. You can use this parameter to search a single mailbox. <br/> |
| _LogonTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _LogonTypes_ parameter specifies the type of logons. Valid values include: <br/>  `Admin`: Audit log entries for mailbox access by administrator logons are returned.  <br/>  `Delegate`: Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.  <br/>  `External`: For Exchange Online mailboxes, audit log entries for mailbox access by Microsoft datacenter administrators are returned.  <br/>  `Owner`: Audit log entries for mailbox access by the primary mailbox owner are returned. This value is available only in Exchange 2016 and also requires the  _ShowDetails_ switch. <br/> |
| _Mailboxes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Mailboxes_ parameter specifies the mailboxes for which to retrieve mailbox audit log entries. You can use this parameter to search audit logs for multiple mailboxes. You can't use the _ShowDetails_ switch with the _Mailboxes_ parameter. <br/> |
| _Operations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Operations_ parameter filters the search results by the operations that are logged by mailbox audit logging. Valid values for this parameter are: <br/>  `Copy` <br/>  `Create` <br/>  `FolderBind` <br/>  `HardDelete` <br/>  `MailboxLogin` <br/>  `MessageBind` <br/>  `Move` <br/>  `MoveToDeletedItems` <br/>  `SendAs` <br/>  `SendOnBehalf` <br/>  `SoftDelete` <br/>  `Update` <br/>  You can enter multiple values separated by commas. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _ResultSize_ parameter specifies the maximum number of mailbox audit log entries to return. Valid values include an integer from 1 through 250000. By default, `1000` entries are returned. <br/> |
| _ShowDetails_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ShowDetails_ switch specifies that details of each log entry be retrieved. By default, all fields for each returned log entry are displayed in a list view. <br/> You can't use the  _Mailboxes_ parameter with the _ShowDetails_ switch. <br/> |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

