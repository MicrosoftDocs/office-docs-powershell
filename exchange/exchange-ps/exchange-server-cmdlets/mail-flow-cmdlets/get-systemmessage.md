---
title: "Get-SystemMessage"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 54d3650c-fd80-43c0-a64f-41d57673ff8b
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-SystemMessage

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-SystemMessage** cmdlet to view default or custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.
  
```
Get-SystemMessage [-Original <SwitchParameter>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a summary list of all custom system messages in your organization.
  
```
Get-SystemMessage
```

### Example 2

This example displays detailed information for the specified custom NDR (combination of language, audience, and enhanced status code values).
  
```
Get-SystemMessage En\Internal\5.3.2 | Format-List
```

### Example 3

This example displays detailed information for the specified custom quota message (combination of language and quota values).
  
```
Get-SystemMessage En\WarningMailbox | Format-List
```

### Example 4

This example outputs the list of all default system messages in all languages to an HTML file named C:\My Documents\Default System Messages.html.
  
```
Get-SystemMessage -Original | Select-Object -Property Identity,DsnCode,Language,Text | ConvertTo-Html > "C:\My Documents\Default System Messages.html"
```

You should output the list to a file, because the list is very long, and you'll receive errors if you don't have the required language packs installed.
  
## Detailed Description
<a name="DetailedDescription"> </a>

NDRs are issued to the senders of email messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Custom NDRs and quota messages replace the default messages that are included with Exchange.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SystemMessageIdParameter  <br/> | The _Identity_ parameter specifies the custom system message that you want to view. You can use any value that uniquely identifies the system message. For example: <br/>  Identity <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can't use this parameter with the _Original_ switch. <br/>  The identity value of a system message uses one of these formats: <br/> **System messages for enhanced status codes**: _\<Language\>_&lt;Internal | External>\ _\<DSNcode\>_. For example,  `En\Internal\5.1.2` or `Ja\External\5.1.2`.  <br/> **System messages for quotas**: _\<Language\>_\ _\<QuotaMessageType\>_. For example,  `En\ProhibitSendReceiveMailBox`.  <br/> _\<Language\>_: For the list of supported language codes, see [Supported languages for NDRs and quota messages](https://technet.microsoft.com/library/23c9d844-6fc7-44c9-a308-587338281611.aspx#NDRLanguages).  <br/> _\<DSNcode\>_: Valid values are 4. _x_. _y_ or 5. _x_. _y_ where _x_ and _y_ are one to three digit numbers. <br/> _\<QuotaMessageType\>_: Valid value are:  <br/>  Mailbox size quotas: <br/> **ProhibitSendReceiveMailBox**: A mailbox exceeds its  `ProhibitSendReceiveQuota` limit. <br/> **ProhibitSendMailbox**: A mailbox exceeds its  `ProhibitSendQuota` limit. <br/> **WarningMailbox**: A mailbox exceeds its  `IssueWarningQuota` limit when it has a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/> **WarningMailboxUnlimitedSize**: A mailbox exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/>  Public folder size quotas: <br/> **ProhibitPostPublicFolder**: A public folder exceeds its  `ProhibitPostQuota` limit. <br/> **WarningPublicFolder**: A public folder exceeds its  `IssueWarningQuota` limit when it has a `ProhibitPostQuota` limit configured. <br/> **WarningPublicFolderUnlimitedSize**: A public folder exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitPostQuota` limit configured. <br/>  Maximum number of messages in a mailbox folder: <br/> **ProhibitReceiveMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountReceiveQuota` limit. <br/> **WarningMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it has a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/> **WarningMailboxMessagesPerFolderUnlimitedCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it doesn't have a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/>  Maximum number of subfolders in a mailbox folder: <br/> **ProhibitReceiveFolderHierarchyChildrenCountCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountReceiveQuota` limit. <br/> **WarningFolderHierarchyChildrenCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it has a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **WarningFolderHierarchyChildrenUnlimitedCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it doesn't have a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **ProhibitReceiveFoldersCount**: A mailbox exceeds its  `FoldersCountReceiveQuota` limit. <br/> **WarningFoldersCount**: A mailbox exceeds its  `FoldersCountWarningQuota` limit when it has a `FoldersCountReceiveQuota` limit configured. <br/> **WarningFoldersCountUnlimited** A mailbox exceeds its `FoldersCountWarningQuota` limit when it doesn't have a `FoldersCountReceiveQuota` limit configured. <br/>  Maximum number of levels (depth) in a mailbox folder: <br/> **ProhibitReceiveFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit. <br/> **WarningFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit when it has a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> **WarningFolderHierarchyDepthUnlimited:**: A mailbox exceeds its `FolderHierarchyDepthWarningQuota` limit when it doesn't have a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> |
| _Original_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Original_ switch filters the results by the default system messages that are included with Exchange. You don't need to specify a value with this switch. <br/> You can't use this switch with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

