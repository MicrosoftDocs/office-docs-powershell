---
title: "Set-SystemMessage"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 53b76641-d341-42a8-b281-018a91af6a36
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-SystemMessage

This cmdlet is available only in on-premises Exchange.
  
Use the **Set-SystemMessage** cmdlet to modify custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.
  
```
Set-SystemMessage -Identity <SystemMessageIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Name <String>] [-Original <SwitchParameter>] [-Text <String>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the text of the custom English system message for the enhanced status code code 5.3.5 for internal senders.
  
```
Set-SystemMessage En\Internal\5.3.5 -Text "The recipient email system can't process this email message. Please contact your system administrator for more information."
```

### Example 2

This example modifies the text of the custom English  `WarningMailbox` quota message.
  
```
Set-SystemMessage En\WarningMailbox -Text "Your mailbox has exceeded the warning limit specified by your email administrator. Please reduce the size of your mailbox."
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SystemMessageIdParameter  <br/> | The _Identity_ parameter specifies the custom system message that you want to modify. You can use any value that uniquely identifies the system message. For example: <br/>  Identity <br/>  Distinguished name (DN) <br/>  GUID <br/>  The identity value of a system message uses one of these formats: <br/> **System messages for enhanced status codes**: _\<Language\>_&lt;Internal | External>\ _\<DSNcode\>_. For example,  `En\Internal\5.1.2` or `Ja\External\5.1.2`.  <br/> **System messages for quotas**: _\<Language\>_\ _\<QuotaMessageType\>_. For example,  `En\ProhibitSendReceiveMailBox`.  <br/> _\<Language\>_: For the list of supported language codes, see [Supported languages for NDRs and quota messages](https://technet.microsoft.com/library/23c9d844-6fc7-44c9-a308-587338281611.aspx#NDRLanguages).  <br/> _\<DSNcode\>_: Valid values are 4. _x_. _y_ or 5. _x_. _y_ where _x_ and _y_ are one to three digit numbers. To see the enhanced system codes that are currently used by custom system messages, run the command `Get-SystemMessage`. To generate a list of default enhanced status codes that are used by Exchange, run this command:  `Get-SystemMessage -Original | Select-Object -Property Identity,DsnCode,Language,Text | ConvertTo-Html > "C:\My Documents\Default DSNs.html"`.  <br/> _\<QuotaMessageType\>_: Valid value are:  <br/>  Mailbox size quotas: <br/> **ProhibitSendReceiveMailBox**: A mailbox exceeds its  `ProhibitSendReceiveQuota` limit. <br/> **ProhibitSendMailbox**: A mailbox exceeds its  `ProhibitSendQuota` limit. <br/> **WarningMailbox**: A mailbox exceeds its  `IssueWarningQuota` limit when it has a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/> **WarningMailboxUnlimitedSize**: A mailbox exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/>  Public folder size quotas: <br/> **ProhibitPostPublicFolder**: A public folder exceeds its  `ProhibitPostQuota` limit. <br/> **WarningPublicFolder**: A public folder exceeds its  `IssueWarningQuota` limit when it has a `ProhibitPostQuota` limit configured. <br/> **WarningPublicFolderUnlimitedSize**: A public folder exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitPostQuota` limit configured. <br/>  Maximum number of messages in a mailbox folder: <br/> **ProhibitReceiveMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountReceiveQuota` limit. <br/> **WarningMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it has a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/> **WarningMailboxMessagesPerFolderUnlimitedCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it doesn't have a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/>  Maximum number of subfolders in a mailbox folder: <br/> **ProhibitReceiveFolderHierarchyChildrenCountCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountReceiveQuota` limit. <br/> **WarningFolderHierarchyChildrenCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it has a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **WarningFolderHierarchyChildrenUnlimitedCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it doesn't have a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **ProhibitReceiveFoldersCount**: A mailbox exceeds its  `FoldersCountReceiveQuota` limit. <br/> **WarningFoldersCount**: A mailbox exceeds its  `FoldersCountWarningQuota` limit when it has a `FoldersCountReceiveQuota` limit configured. <br/> **WarningFoldersCountUnlimited** A mailbox exceeds its `FoldersCountWarningQuota` limit when it doesn't have a `FoldersCountReceiveQuota` limit configured. <br/>  Maximum number of levels (depth) in a mailbox folder: <br/> **ProhibitReceiveFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit. <br/> **WarningFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit when it has a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> **WarningFolderHierarchyDepthUnlimited:**: A mailbox exceeds its `FolderHierarchyDepthWarningQuota` limit when it doesn't have a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a descriptive name for the system message. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Original_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Original_ switch specifies whether to stop using the custom system message, and start using the default system message. You don't need to specify a value with this switch. <br/> This switch is useful when you want to preserve the custom system message without using it.  <br/> This switch only works on custom system messages for default (not new) enhanced status code values.  <br/> |
| _Text_ <br/> |Optional  <br/> |System.String  <br/> | The _Text_ parameter specifies the text in the custom system message. The text should explain why the system message was sent, and any actions that the user should take. <br/>  This parameter can contain text and HTML tags. The maximum length is 512 characters (which includes all text and HTML tags). <br/>  The following HTML tags are available: <br/>  `<B>` and `</B>` (bold) <br/>  `<EM>` and `</EM>` (italic) <br/>  `<BR>` (line break) <br/>  `<P>` and `</P>` (paragraph) <br/>  `<A HREF="url">` and `</A>` (hyperlink) <br/>  You need to use single quotation marks (not double quotation marks) around the complete text string if you use the hyperlink tag. Otherwise, you'll receive an error (because of the double quotation marks in the tag). <br/>  Use the following escape codes for these special characters: <br/>  `&amp;lt;` for \<. <br/>  `&amp;gt;` for \>. <br/>  `&amp;quot;` for ". <br/>  `&amp;amp;` for &amp;. <br/>  Here's an example value for this parameter that uses HTML tags and special characters: <br/>  `'You tried to send a message to a <B>disabled</B> mailbox. Please visit <A HREF="https://it.contoso.com">Internal Support</A> or contact &amp;quot;InfoSec&amp;quot; for more information.'` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

