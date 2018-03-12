---
title: "Get-RpcClientAccess"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3462fe0b-929d-4106-840e-99d7d1e12f40
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-RpcClientAccess

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-RpcClientAccess** cmdlet to view the settings of the Microsoft Exchange RPC Client Access service on Exchange servers that have the Client Access server role installed. These settings affect Outlook clients that connect by using Outlook Anywhere (RPC over HTTP).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RpcClientAccess [-DomainController <Fqdn>] [-Server <ServerIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a summary list of the RPC Client Access service settings on all the servers in the organization.
  
```
Get-RpcClientAccess
```

### Example 2

This example returns detailed information for the RPC Client Access service on the server named ENT01.
  
```
Get-RpcClientAccess -Server ENT01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server that you want to view. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name (for example, Exchange01) <br/>  Distinguished name (DN) (for example, `CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`)  <br/>  Exchange Legacy DN (for example, `/o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01`)  <br/>  GUID (for example, `bc014a0d-1509-4ecc-b569-f077eec54942`)  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

