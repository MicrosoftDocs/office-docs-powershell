---
title: "Set-FocusedInbox"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 29f40631-f393-47ec-8081-464aacb1eb14
description: "This cmdlet is available only in the cloud-based service."
---

# Set-FocusedInbox

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-FocusedInbox** cmdlet to enable or disable Focused Inbox for mailboxes in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-FocusedInbox -Identity <MailboxIdParameter> [-FocusedInboxCapable <$true | $false>] [-FocusedInboxMigrationState <String>] [-FocusedInboxOn <$true | $false>] [-InferenceUserCapabilityFlags <Int32>] [-UserCohort <Int32>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables Focused Inbox for the mailbox of laura@contoso.com.
  
```
Set-FocusedInbox -Identity laura@contoso.com -FocusedInboxOn $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

Focused Inbox is a replacement for Clutter that separates the Inbox into the Focused and Other tabs in Outlook on the web and newer versions of Outlook. Important emails are on the Focused tab while the rest are on the Other tab.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _FocusedInboxCapable_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _FocusedInboxMigrationState_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _FocusedInboxOn_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _FocusedInboxOn_ parameter enables or disables Focused Inbox for the mailbox. Valid values are: <br/>  `$true`: Focused Inbox is enabled. This is the default value.  <br/>  `$false`: Focused Inbox is disabled.  <br/> |
| _InferenceUserCapabilityFlags_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UserCohort_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

