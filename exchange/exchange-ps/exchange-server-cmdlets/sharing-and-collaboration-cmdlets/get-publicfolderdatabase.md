---
title: "Get-PublicFolderDatabase"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e2c9e769-ddfb-4981-906f-085834bc790f
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-PublicFolderDatabase

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-PublicFolderDatabase** cmdlet to view public folder database settings for Microsoft Exchange Server 2010 or earlier public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderDatabase [-Identity <DatabaseIdParameter>] <COMMON PARAMETERS>

```

## Examples

### Example 1

This example returns all the attributes of all the public folder databases in the organization by piping the results of the **Get-PublicFolderDatabase** command to the **Format-List** command.
  
```
Get-PublicFolderDatabase | Format-List
```

### Example 2

This example returns information about the public folder database PFDatabase that resides on Server01.
  
```
Get-PublicFolderDatabase -Identity "Server01\PFDatabase"
```

### Example 3

This example returns information about all public folders on Server01.
  
```
Get-PublicFolderDatabase -Server Server01
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can specify either the _Server_ or _Identity_ parameter, but not both. Only the _Server_ and _Identity_ parameters can be piped.
  
> [!NOTE]
> When you run the **Get-PublicFolderDatabase** cmdlet with no parameters, it returns attributes of all of the public folder databases in the Exchange organization. To return specific database properties (including backup and mount status information) where the **Get-PublicFolderDatabase** cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the _Status_ parameter.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Server_ parameter specifies the name of a server that contains a public folder database. If specified, only the public folder database on the specified server is returned. This parameter can't be used with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Identity_ parameter specifies a public folder database. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  Database name <br/>  If you don't specify the server name, the cmdlet searches for databases on the local server. If you have multiple databases with the same name, the cmdlet retrieves all databases with the same name in the specified scope. This parameter can't be used with the _Server_ parameter. <br/> |
| _IncludeCorrupted_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Status_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Status_ parameter specifies whether additional backup and mount status information is included for servers running Exchange 2010. If the _Status_ parameter is included, additional backup and mount status information is included for Exchange 2010 servers. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

