---
title: "Get-TransportServer"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fd4f9f4a-338d-44de-b5e8-e91bae697d4f
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-TransportServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-TransportServer** cmdlet to view the transport configuration information for the Transport service on Mailbox servers or for Edge Transport servers.
  
```
Get-TransportServer [-Identity <TransportServerIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example provides different results depending on the server role on which it's run. When you run this command on an Edge Transport server, it provides a configuration summary for the local server. Otherwise, it displays a list of all Mailbox servers in your organization.
  
```
Get-TransportServer
```

### Example 2

This example retrieves the detailed transport configuration information for the Transport service on the Mailbox server named Mailbox01.
  
```
Get-TransportServer Mailbox01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-TransportServer** cmdlet will be removed in a future version of Exchange. You should use the **Get-TransportService** cmdlet instead.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.TransportServerIdParameter  <br/> |The _Identity_ parameter specifies the server you want to view. When you use this parameter on a Mailbox server, the parameter returns the transport configuration of the Transport service on specified server. You can't use this parameter on an Edge Transport server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

