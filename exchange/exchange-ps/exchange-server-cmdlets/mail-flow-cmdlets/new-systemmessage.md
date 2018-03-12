---
title: "New-SystemMessage"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 77b06405-076d-43cf-89b1-aa62b6565d8d
description: "This cmdlet is available only in on-premises Exchange."
---

# New-SystemMessage

This cmdlet is available only in on-premises Exchange.
  
Use the **New-SystemMessage** cmdlet to create custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.
  
```
New-SystemMessage -DsnCode <EnhancedStatusCode> -Internal <$true | $false> -Language <CultureInfo> -Text <String> <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a custom English NDR for the enhanced status code 5.3.5 for external senders.
  
```
New-SystemMessage -DsnCode 5.3.5 -Language en -Internal $false -Text "The recipient email system can't process this email message. Please contact your system administrator for more information."
```

### Example 2

This example creates a custom English quota message for mailboxes that exceed their issue warning quota.
  
```
New-SystemMessage -QuotaMessageType WarningMailbox -Language en -Text "Your mailbox has exceeded the warning limit specified by your email administrator. Please reduce the size of your mailbox."
```

## Detailed Description
<a name="DetailedDescription"> </a>

NDRs are issued to the senders of email messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Custom NDRs and quota messages replace the default messages that are included with Exchange.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DsnCode_ <br/> |Required  <br/> |Microsoft.Exchange.Data.EnhancedStatusCode  <br/> |The _DsnCode_ parameter specifies the enhanced status code for the custom system message. <br/> Valid values are 4. _x_. _y_ or 5. _x_. _y_ where _x_ and _y_ are one to three digit numbers. You can specify a default code that's included with Exchange, or you can specify a custom code. <br/> To generate a list of default enhanced status codes that are used by Exchange, run this command:  `Get-SystemMessage -Original | Select-Object -Property Identity,DsnCode,Language,Text | ConvertTo-Html > "C:\My Documents\Default DSNs.html"`.  <br/> You need to use this parameter with the _Language_ and _Internal_ parameters. <br/> You can't use this parameter with the _QuotaMessageType_ parameter. <br/> |
| _Internal_ <br/> |Required  <br/> |System.Boolean  <br/> | The _Internal_ parameter specifies whether the system message is displayed to internal or external users. Valid values are: <br/>  `$true`: The NDR is displayed to internal senders.  <br/>  `$false`: The NDR is displayed to external senders.  <br/>  You need to use this parameter with the _DsnCode_ and _Language_ parameters. <br/>  You can't use this parameter with the _QuotaMessageType_ parameter. <br/> |
| _Language_ <br/> |Required  <br/> |System.Globalization.CultureInfo  <br/> |The _Language_ parameter specifies the language of the message. (for example, `en` for English or `ja` for Japanese). For the complete list of supported languages, see[Supported languages for NDRs and quota messages](https://technet.microsoft.com/library/23c9d844-6fc7-44c9-a308-587338281611.aspx#NDRLanguages).  <br/> You need to use this parameter with the _DsnCode_ or _QuotaMessageType_ parameters. <br/> |
| _QuotaMessageType_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.QuotaMessageType  <br/> |The _QuotaMessageType_ parameter specifies the quota for the custom system message. Valid values are: <br/> Mailbox size quotas:  <br/> **ProhibitSendReceiveMailBox**: A mailbox exceeds its  `ProhibitSendReceiveQuota` limit. <br/> **ProhibitSendMailbox**: A mailbox exceeds its  `ProhibitSendQuota` limit. <br/> **WarningMailbox**: A mailbox exceeds its  `IssueWarningQuota` limit when it has a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/> **WarningMailboxUnlimitedSize**: A mailbox exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitSendQuota` or `ProhibitSendReceiveQuota` limit configured. <br/> Public folder size quotas:  <br/> **ProhibitPostPublicFolder**: A public folder exceeds its  `ProhibitPostQuota` limit. <br/> **WarningPublicFolder**: A public folder exceeds its  `IssueWarningQuota` limit when it has a `ProhibitPostQuota` limit configured. <br/> **WarningPublicFolderUnlimitedSize**: A public folder exceeds its  `IssueWarningQuota` limit when it doesn't have a `ProhibitPostQuota` limit configured. <br/> Maximum number of messages in a mailbox folder:  <br/> **ProhibitReceiveMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountReceiveQuota` limit. <br/> **WarningMailboxMessagesPerFolderCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it has a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/> **WarningMailboxMessagesPerFolderUnlimitedCount**: A mailbox exceeds its  `MailboxMessagesPerFolderCountWarningQuota` limit when it doesn't have a `MailboxMessagesPerFolderCountReceiveQuota` limit configured. <br/> Maximum number of subfolders in a mailbox folder:  <br/> **ProhibitReceiveFolderHierarchyChildrenCountCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountReceiveQuota` limit. <br/> **WarningFolderHierarchyChildrenCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it has a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **WarningFolderHierarchyChildrenUnlimitedCount**: A mailbox exceeds its  `FolderHierarchyChildrenCountWarningQuota` limit when it doesn't have a `FolderHierarchyChildrenCountReceiveQuota` limit configured. <br/> **ProhibitReceiveFoldersCount**: A mailbox exceeds its  `FoldersCountReceiveQuota` limit. <br/> **WarningFoldersCount**: A mailbox exceeds its  `FoldersCountWarningQuota` limit when it has a `FoldersCountReceiveQuota` limit configured. <br/> **WarningFoldersCountUnlimited** A mailbox exceeds its `FoldersCountWarningQuota` limit when it doesn't have a `FoldersCountReceiveQuota` limit configured. <br/> Maximum number of levels (depth) in a mailbox folder:  <br/> **ProhibitReceiveFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit. <br/> **WarningFolderHierarchyDepth**: A mailbox exceeds its  `FolderHierarchyDepthWarningQuota` limit when it has a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> **WarningFolderHierarchyDepthUnlimited:**: A mailbox exceeds its `FolderHierarchyDepthWarningQuota` limit when it doesn't have a `FolderHierarchyDepthReceiveQuota` limit configured. <br/> You need to use this parameter with the _Language_ parameter. <br/> You can't use this parameter with the _DsnCode_ or _Internal_ parameters. <br/> |
| _Text_ <br/> |Required  <br/> |System.String  <br/> | The _Text_ parameter specifies the text in the custom system message. The text should explain why the system message was sent, and any actions that the user should take. <br/>  You need to use this parameter with the _DsnCode_ or _QuotaMessageType_ parameters. <br/>  This parameter can contain text and HTML tags. The maximum length is 512 characters (which includes all text and HTML tags). <br/>  The following HTML tags are available: <br/>  `<B>` and `</B>` (bold) <br/>  `<EM>` and `</EM>` (italic) <br/>  `<BR>` (line break) <br/>  `<P>` and `</P>` (paragraph) <br/>  `<A HREF="url">` and `</A>` (hyperlink). **Note**: You need to use single quotation marks (not double quotation marks) around the complete text string if you use this tag. Otherwise, you'll receive an error (because of the double quotation marks in the tag).  <br/>  Use the following escape codes for these special characters: <br/>  `&amp;lt;` for \<. <br/>  `&amp;gt;` for \>. <br/>  `&amp;quot;` for ". <br/>  `&amp;amp;` for &amp;. <br/>  Here's an example value for this parameter that uses HTML tags and special characters: <br/>  `'You tried to send a message to a <B>disabled</B> mailbox. Please visit <A HREF="https://it.contoso.com">Internal Support</A> or contact &amp;quot;InfoSec&amp;quot; for more information.'` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

