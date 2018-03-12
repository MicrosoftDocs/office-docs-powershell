---
title: "Get-PublicFolder"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 409711bc-6249-41d4-bf86-50e01240e69f
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolder

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PublicFolder** cmdlet to retrieve the attributes of a public folder or a set of public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolder [-Identity <PublicFolderIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the **Get-PublicFolder** command without parameters to return the root public folder object (IPM_SUBTREE).
  
```
Get-PublicFolder
```

### Example 2

This example returns the names of all the system folders (which aren't shown by default), starting at the system folder root (\NON_IPM_SUBTREE).
  
```
Get-PublicFolder -Identity \NON_IPM_SUBTREE -Recurse | Format-List Name
```

### Example 3

This example returns the Pending Litigation public folder from \Legal\Documents\.
  
```
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation"
```

### Example 4

This example returns the Pending Litigation public folder from \Legal\Documents\ and all the public folders under the Pending Litigation public folder. Because the result size isn't specified, the command returns up to the maximum number of public folders, which is 10,000.
  
```
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation" -Recurse
```

### Example 5

This example returns the Pending Litigation public folder from \Legal\Documents\ and all the public folders under the Pending Litigation public folder, without a limit on the number returned.
  
```
Get-PublicFolder -Identity "\Legal\Documents\Pending Litigation" -Recurse -ResultSize Unlimited
```

### Example 6

This example returns the public folders that reside in the public folder content mailbox Legal Department.
  
```
Get-PublicFolder -Mailbox "Legal Department" -ResidentFolders
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _GetChildren_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GetChildren_ switch specifies whether to return only the children of the folder specified by the _Identity_ parameter. You don't need to specify a value with this switch. <br/>  You can't use this switch with the _Recurse_ or _LostAndFound_ switches. <br/> |
| _LostAndFound_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _LostAndFound_switch specifies whether to return only orphaned folders that are located in  `\NON_IPM_SUBTREE\LOST_AND_FOUND`. You don't need to specify a value with this switch.  <br/> The  `LOST_AND_FOUND` folder holds missing folders that are recreated by the public folder hierarchy reconciliation process when the folder exists in a secondary public folder mailbox, but not in the primary. <br/> You can't use this switch with the _Identity_ parameter or the _Recurse_ or _LostAndFound_ switches. <br/> |
| _Recurse_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Recurse_ switch specifies whether to return the specified public folder and all its children. You don't need to specify a value with this switch. <br/> You can't use this switch with the _GetChildren_ or _LostAndFound_ switches. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The _Identity_ parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format \ _TopLevelPublicFolder\PublicFolder_.  <br/> You can omit the parameter label _Identity_ so that only the public folder name or GUID is supplied. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the identity of the hierarchy public folder mailbox. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResidentFolders_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ResidentFolders_ specifies whether to return public folders that reside in a specific content public folder mailbox. If this parameter isn't specified, the command will only return public folders whose contents reside in the primary hierarchy public folder mailbox. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. The default maximum is 10,000. For no limit on the returned results, set this parameter to `Unlimited`. This parameter can only be passed in combination with the _Recurse_ or _GetChildren_ parameters. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

