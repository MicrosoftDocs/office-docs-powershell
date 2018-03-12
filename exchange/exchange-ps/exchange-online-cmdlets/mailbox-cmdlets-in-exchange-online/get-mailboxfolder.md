---
title: "Get-MailboxFolder"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: d519b3de-2118-4007-a556-51c01d1ba931
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxFolder

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxFolder** cmdlet to view folders in your own mailbox. Administrators can't use this cmdlet to view folders in other mailboxes (the cmdlet is available only from the MyBaseOptions user role).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxFolder [-Identity <MailboxFolderIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the Inbox folder in Tony's mailbox. The  _Identity_ parameter is supplied in the format of < _Mailbox Identity_>:< _Folder_>.
  
```
Get-MailboxFolder -Identity Tony:\Inbox
```

### Example 2

This example returns the root folders in Tony's mailbox. The  _Identity_ parameter is supplied in the format of < _Mailbox Identity_>.
  
```
Get-MailboxFolder -Identity Tony
```

### Example 3

This example returns the first level of mail folders in Tony's mailbox.
  
```
Get-MailboxFolder -Identity Tony -GetChildren -MailFolderOnly
```

### Example 4

This example returns information about all the subfolders under Inbox in Tony's mailbox.
  
```
Get-MailboxFolder -Identity Tony:\Inbox -GetChildren
```

### Example 5

This example returns all levels of folders under Inbox in Tony's mailbox.
  
```
Get-MailboxFolder -Identity Tony:\Inbox -Recurse
```

## Detailed Description
<a name="DetailedDescription"> </a>

This command checks that the mailbox specified in the  _Identity_ parameter is a valid Exchange mailbox before retrieving the requested folders. The cmdlet returns all folders if the _MailFolderOnly_ switch isn't specified.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _GetChildren_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _GetChildren_ switch specifies whether to return only the first level of subfolders under the specified parent folder. You don't need to specify a value with this switch. <br/> You can't use this switch with the  _Recurse_ switch. <br/> |
| _Recurse_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Recurse_ switch specifies whether to return the specified parent folder and all of its subfolders. You don't need to specify a value with this switch. <br/> You can't use this switch with the  _GetChildren_ switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> | The _Identity_ parameter specifies the mailbox and the folder that you want to view. If you don't specify the folder, the command returns information about folders in the root hierarchy of the specified mailbox. You specify values for this parameter by using the syntax: < _Mailbox Identity_>:< _Parent_>.  <br/>  Valid values for < _Mailbox Identity_> are unique identifiers for the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  Values for < _Parent_> can be both the store object ID and a path string such as \Inbox\Personal.  <br/> |
| _MailFolderOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _MailFolderOnly_ switch specifies whether to return only the mail folders in the specified mailbox. You don't need to specify a value with this switch. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

