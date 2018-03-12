---
title: "New-MailboxFolder"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1666ee72-6e8e-4d07-b71a-fe6ddbc0c2ef
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailboxFolder

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MailboxFolder** cmdlet to create folders in your own mailbox. Administrators can't use this cmdlet to create folders in other mailboxes (the cmdlet is available only from the MyBaseOptions user role).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxFolder -Name <String> -Parent <MailboxFolderIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the folder Personal under the Inbox folder of Tony's mailbox.
  
```
New-MailboxFolder -Parent Tony:\Inbox -Name Personal
```

### Example 2

This example creates the folder Personal in the root folder hierarchy of Tony's mailbox.
  
```
New-MailboxFolder -Parent Tony -Name Personal
```

### Example 3

This example creates the folder Personal under the Inbox folder in the mailbox for Tony who's running the command.
  
```
New-MailboxFolder -Parent :\Inbox -Name Personal
```

## Detailed Description
<a name="DetailedDescription"> </a>

If no parent folder is specified, the cmdlet creates a mail folder in the root folder hierarchy of the mailbox. If the mailbox isn't specified, the cmdlet creates the folder in the mailbox of the user currently running the task. When run, the cmdlet returns the new folder name and the folder path as the output.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). .
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the new folder. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Parent_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> | The _Parent_ parameter specifies values of the mailbox identity and the parent folder under which the new folder is to be created. If the parent folder isn't specified, the cmdlet creates the folder in the root folder hierarchy of the specified mailbox. You specify values for this parameter by using the syntax: < _Mailbox Identity_>:< _Parent_>  <br/>  Valid values for < _Mailbox Identity_> are unique identifiers for the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  Values for < _Parent_> can be both the store object ID and a path string such as "\Inbox\Personal".  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

