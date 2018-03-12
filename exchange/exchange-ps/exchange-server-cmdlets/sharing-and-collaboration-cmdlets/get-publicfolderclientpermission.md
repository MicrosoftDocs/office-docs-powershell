---
title: "Get-PublicFolderClientPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b991d477-e48c-4cf9-a4d0-6f1d5696991e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderClientPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PublicFolderClientPermission** cmdlet to retrieve the user permissions for a public folder.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderClientPermission -Identity <PublicFolderIdParameter> [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>] [-User <MailboxFolderUserIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the permissions for all users of \My Public Folder.
  
```
Get-PublicFolderClientPermission "\My Public Folder"
```

### Example 2

This example retrieves the permissions for the public folder My Public Folder, for the user Chris. In this example, the output of the **Get-PublicFolderClientPermission** command is piped to the **Format-List** command so that all available information is displayed in the result.
  
```
Get-PublicFolderClientPermission -Identity "\My Public Folder" -User Chris | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The _Identity_ parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format \ _TopLevelPublicFolder\PublicFolder_.  <br/> You can omit the parameter label so that only the public folder name or GUID is supplied.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies the identity of the public folder mailbox for which you want to view the permissions. By default, the permissions are returned for the primary public folder mailbox. Using the _Mailbox_ parameter allows you to specify a different public folder mailbox. <br/> |
| _User_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderUserIdParameter  <br/> |The _User_ parameter specifies the user principal name (UPN), _domain_\ _user_, or alias of a specific user for whom you want to view the permissions on the public folder.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

