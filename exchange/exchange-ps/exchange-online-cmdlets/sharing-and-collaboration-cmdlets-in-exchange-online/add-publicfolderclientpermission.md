---
title: "Add-PublicFolderClientPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: d68ad7a9-daa0-4e6d-b819-5cca891c8fd9
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Add-PublicFolderClientPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Add-PublicFolderClientPermission** cmdlet to add permissions to public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-PublicFolderClientPermission -Identity <PublicFolderIdParameter> -AccessRights <MailboxFolderAccessRight[]> -User <MailboxFolderUserIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds permission for the user Chris to create items in the public folder My Public Folder.
  
```
Add-PublicFolderClientPermission -Identity "\My Public Folder" -User Chris -AccessRights CreateItems
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderAccessRight[]  <br/> | The _AccessRights_ parameter specifies the rights being added. This parameter accepts the following values: <br/>  `ReadItems`: The user has the right to read items within the specified public folder.  <br/>  `CreateItems`: The user has the right to create items within the specified public folder.  <br/>  `EditOwnedItems`: The user has the right to edit the items that the user owns in the specified public folder.  <br/>  `DeleteOwnedItems`: The user has the right to delete items that the user owns in the specified public folder.  <br/>  `EditAllItems`: The user has the right to edit all items in the specified public folder.  <br/>  `DeleteAllItems`: The user has the right to delete all items in the specified public folder.  <br/>  `CreateSubfolders`: The user has the right to create subfolders in the specified public folder.  <br/>  `FolderOwner`: The user is the owner of the specified public folder. The user has the right to view and move the public folder and create subfolders. The user can't read items, edit items, delete items, or create items.  <br/>  `FolderContact`: The user is the contact for the specified public folder.  <br/>  `FolderVisible`: The user can view the specified public folder, but can't read or edit items within the specified public folder.  <br/>  In addition to access rights, you can create rights based upon roles, which includes multiple access rights. This parameter accepts the following values for roles: <br/>  `None`: FolderVisible  <br/>  `Owner`: CreateItems, ReadItems, CreateSubfolders, FolderOwner, FolderContact, FolderVisible, EditOwnedItems, EditAllItems, DeleteOwnedItems, DeleteAllItems  <br/>  `PublishingEditor`: CreateItems, ReadItems, CreateSubfolders, FolderVisible, EditOwnedItems, EditAllItems, DeleteOwnedItems, DeleteAllItems  <br/>  `Editor`: CreateItems, ReadItems, FolderVisible, EditOwnedItems, EditAllItems, DeleteOwnedItems, DeleteAllItems  <br/>  `PublishingAuthor`: CreateItems, ReadItems, CreateSubfolders, FolderVisible, EditOwnedItems, DeleteOwnedItems  <br/>  `Author`: CreateItems, ReadItems, FolderVisible, EditOwnedItems, DeleteOwnedItems  <br/>  `NonEditingAuthor`: CreateItems, ReadItems, FolderVisible  <br/>  `Reviewer`: ReadItems, FolderVisible  <br/>  `Contributor`: CreateItems, FolderVisible  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The  _Identity_ parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format _TopLevelPublicFolder\PublicFolder_.  <br/> You can omit the parameter label so that only the public folder name or GUID is supplied.  <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderUserIdParameter  <br/> |The  _User_ parameter specifies the user principal name (UPN), _domain\user_, or alias of the user for whom rights are being added.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

