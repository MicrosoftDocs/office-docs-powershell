---
title: "Get-NetworkConnectionInfo"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 72b8e608-1c1a-4e6f-a2db-27a812f185f3
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-NetworkConnectionInfo

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-NetworkConnectionInfo** cmdlet to view the network configuration information for all network adapters configured on the local server.
  
```
Get-NetworkConnectionInfo [-Identity <ServerIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves network configuration information for all network adapters on the server named  `Mailbox01`.
  
```
Get-NetworkConnectionInfo Mailbox01
```

## Detailed Description
<a name="DetailedDescription"> </a>

This cmdlet retrieves the following configuration information for each network adapter configured on the server:
  
- **Name**: This field displays the name of the network adapter. This name indicates the manufacturer and model of the network adapter, or the administrator-specified name of the network adapter.
    
- **DnsServers**: This field displays the DNS servers used by the network adapter. The server names are separated by commas.
    
- **IPAddresses**: This field displays the IP addresses used by the network adapter. The IP addresses are separated by commas.
    
- **AdapterGuid**: This field displays the GUID assigned to the network adapter by Windows.
    
- **MacAddress**: This field displays the media access control (MAC) address of the network adapter.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the server you want to query. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use the _Identity_ parameter, the command is run on the local server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

