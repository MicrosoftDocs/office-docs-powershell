---
title: "Set-MailboxFolderPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/23/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: ca5dc7ba-5aa7-4fbc-945a-c5d06b9a1065
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxFolderPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxFolderPermission** cmdlet to modify folder-level permissions for users in mailboxes. This cmdlet differs from the **Add-MailboxFolderPermission** cmdlet in that it modifies existing permission entries. To configure calendar publishing or sharing settings for a mailbox so calendar information is visible to external users, use the **Set-MailboxCalendarFolder** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxFolderPermission -Identity <MailboxFolderIdParameter> -AccessRights <MailboxFolderAccessRight[]> -User <MailboxFolderUserIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-SendNotificationToUser <$true | $false>] [-SharingPermissionFlags <None | Delegate | CanViewPrivateItems>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example overwrites Ed's existing permissions for the Marketing folder in Ayla's mailbox. Ed is now granted the Owner role on the folder.
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Marketing -User ed@contoso.com -AccessRights Owner
```

### Example 2

In Office 365, this example resends the sharing invitation to an existing delegate without changing their effective permissions (Ed is already a delegate with Editor permissions to Ayla's mailbox).
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags Delegate -SendNotificationToUser $true
```

### Example 3

In Office 365, this example removes access to private items for an existing delegate.
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags Delegate
```

### Example 4

In Office 365, this example changes an existing calendar delegate to Editor.
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags None
```

### Example 5

In Office 365, this example changes an existing user's permissions to Editor without changing their current delegate status.
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor
```

### Example 6

In Office 365, this example changes an existing user's permissions to Editor and removes their current delegate status.
  
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SendNotificationToUser $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

In Office 365, if you don't use the  _SendNotificationToUser_ or _SharingPermissionFlags_ parameters, there are no changes to the functionality of the cmdlet. For example, if the user is an existing delegate, and you change their permissions to Editor without using the _SendNotificationToUser_ or _SharingPermissionFlags_ parameters, the user remains a delegate. But, if you use the _SendNotificationToUser_ parameter ( `$true` or `$false`), the  _SharingPermissionFlags_ parameter has the default value `None`, which can affect delegate access for existing users. For example, you change an existing delegate's permission to Editor, and you use  _SendNotificationToUser_ with the value `$true`. The user will no longer be a delegate and will only have Editor permissions to the folder.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderAccessRight[]  <br/> | The _AccessRights_ parameter specifies the permissions that you want to modify for the user on the mailbox folder. The values that you specify replace the existing permissions for the user on the folder. <br/>  You can specify individual folder permissions or roles, which are combinations of permissions. You can specify multiple permissions and roles separated by commas. <br/>  The following individual permissions are available: <br/>  `CreateItems`: The user can create items in the specified folder.  <br/>  `CreateSubfolders`: The user can create subfolders in the specified folder.  <br/>  `DeleteAllItems`: The user can delete all items in the specified folder.  <br/>  `DeleteOwnedItems`: The user can only delete items that they created from the specified folder.  <br/>  `EditAllItems`: The user can edit all items in the specified folder.  <br/>  `EditOwnedItems`: The user can only edit items that they created in the specified folder.  <br/>  `FolderContact`: The user is the contact for the specified public folder.  <br/>  `FolderOwner`: The user is the owner of the specified folder. The user can view the folder, move the move the folder, and create subfolders. The user can't read items, edit items, delete items, or create items.  <br/>  `FolderVisible`: The user can view the specified folder, but can't read or edit items within the specified public folder.  <br/>  `ReadItems`: The user can read items within the specified folder.  <br/>  The roles that are available, along with the permissions that they assign, are described in the following list: <br/> **Author**:  `CreateItems`,  `DeleteOwnedItems`,  `EditOwnedItems`,  `FolderVisible`,  `ReadItems` <br/> **Contributor**:  `CreateItems`,  `FolderVisible` <br/> **Editor**:  `CreateItems`,  `DeleteAllItems`,  `DeleteOwnedItems`,  `EditAllItems`,  `EditOwnedItems`,  `FolderVisible`,  `ReadItems` <br/> **None**:  `FolderVisible` <br/> **NonEditingAuthor**:  `CreateItems`,  `FolderVisible`,  `ReadItems` <br/> **Owner**:  `CreateItems`,  `CreateSubfolders`,  `DeleteAllItems`,  `DeleteOwnedItems`,  `EditAllItems`,  `EditOwnedItems`,  `FolderContact`,  `FolderOwner`,  `FolderVisible`,  `ReadItems` <br/> **PublishingEditor**:  `CreateItems`,  `CreateSubfolders`,  `DeleteAllItems`,  `DeleteOwnedItems`,  `EditAllItems`,  `EditOwnedItems`,  `FolderVisible`,  `ReadItems` <br/> **PublishingAuthor**:  `CreateItems`,  `CreateSubfolders`,  `DeleteOwnedItems`,  `EditOwnedItems`,  `FolderVisible`,  `ReadItems` <br/> **Reviewer**:  `FolderVisible`,  `ReadItems` <br/>  The following roles apply specifically to calendar folders: <br/> **AvailabilityOnly**: View only availability data  <br/> **LimitedDetails**: View availability data with subject and location  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> | The _Identity_ parameter specifies the target mailbox and folder. The syntax is `<Mailbox>:\<Folder>`. For the value of  `<Mailbox>`, you can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  Example values for the _Identity_ parameter are `john@contoso.com:\Calendar` or `John:\Marketing\Reports`.  <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderUserIdParameter  <br/> | The _User_ parameter specifies the mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder. You can use any value that uniquely identifies the user or group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _SendNotificationToUser_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _SendNotificationToUser_ parameter specifies whether to send a sharing invitation to the user when you modify their calendar permissions. The message will be a normal calendar sharing invitation that can be accepted by the recipient. Valid values are: <br/>  `$true`: A sharing invitation is sent.  <br/>  `$false`: No sharing invitation is sent. This is the default value.  <br/>  This parameter only applies to calendar folders, and can only be used with the following _AccessRights_ parameter values: <br/> **AvailabilityOnly** <br/> **LimitedDetails** <br/> **Reviewer** <br/> **Editor** <br/> |
| _SharingPermissionFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderPermissionFlags  <br/> | This parameter is available only in the cloud-based service. <br/>  The _SharingPermissionFlags_ parameter assigns calendar delegate permissions. This parameter only applies to calendar folders and can only be used when the _AccessRights_ parameter value is **Editor**. Valid values are:  <br/>  `None`: Removes delegate permissions and updates the meeting message rule so the user stops receiving meeting invites and responses for the mailbox. This is the default value when you use the  _SendNotificationToUser_ parameter without specifying a value for the _SharingPermissionFlags_ parameter. <br/>  `Delegate`: The user is made a calendar delegate, which includes receiving meeting invites and responses. If there are no other delegates, this value will create the meeting message rule. If there are existing delegates, the user is added to the meeting message rule without changing how delegate messages are sent.  <br/>  `CanViewPrivateItems`: The user can access private items on the calendar. You must use this value with the  `Delegate` value. <br/>  You can specify multiple values separated by commas. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

