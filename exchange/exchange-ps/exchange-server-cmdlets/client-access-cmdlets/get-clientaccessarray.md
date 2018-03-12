---
title: "Get-ClientAccessArray"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4d366fb0-58b9-4730-9c67-8d4a0d47e19a
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ClientAccessArray

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ClientAccessArray** cmdlet to view legacy RPC Client Access arrays that exist in your Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ClientAccessArray [-Identity <ClientAccessArrayIdParameter>] [-DomainController <Fqdn>] [-Site <AdSiteIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Client Access arrays that exist in the local Active Directory site.
  
```
Get-ClientAccessArray
```

### Example 2

This example returns detailed information for the Client Access array named CASArray01.
  
```
Get-ClientAccessArray -Identity CASArray01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Client Access arrays were introduced in Exchange Server 2010 so Outlook clients in an Active Directory site could access the Client Access servers in the array by using RPC over TCP to a single, unified fully qualified domain name (FQDN). The **RpcClientAccessServer** property of new mailbox databases was automatically populated with the FQDN of the Client Access array, and this value was used during the creation of Outlook profiles for mailboxes in those databases.
  
Changes in the Exchange server architecture that were introduced in Exchange Server 2013 removed the need for RPC Client Access arrays:
  
- Outlook clients can't use RPC over TCP to access mailboxes on Exchange Server 2013 or later versions, and RPC Client Access arrays only work with RPC over TCP.
    
- Because the Client Access server role is now a stateless proxy, you use different and less complex methods to configure load balancing and high availability for internal and external client connections. For more information, see [Load Balancing](https://technet.microsoft.com/library/f572c193-6f3a-400e-9085-a9d3e5e18c59.aspx).
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessArrayIdParameter  <br/> | The _Identity_ parameter specifies the Client Access that you want to view. You can use any value that uniquely identifies the array. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Site_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> | The _Site_ parameter filters the results by Active Directory site. You can use any value that uniquely identifies the site. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

