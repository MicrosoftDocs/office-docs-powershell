---
title: "Get-TransportPipeline"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b5741539-21d0-475d-b4a7-c6355d7b1c0b
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-TransportPipeline

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-TransportPipeline** cmdlet to view transport agents and the SMTP event where the transport agent is registered.
  
```
Get-TransportPipeline [-DomainController <Fqdn>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all agents in the transport pipeline that were involved in processing email messages since the last server or service restart.
  
```
Get-TransportPipeline
```

### Example 2

This example returns a list of agents registered in the transport pipeline, with full details for each transport event.
  
```
Get-TransportPipeline | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-TransportPipeline** cmdlet enables you to view all the transport agents that are configured in the following locations:
  
- In the Transport service on Mailbox servers.
    
- In the Front End Transport service on Mailbox servers.
    
- On Edge Transport server in the perimeter network.
    
> [!NOTE]
> The associated transport service must be started, and at least one email message must be sent through the server since the last service restart before the transport pipeline can be viewed. Only the transport events and agents that were involved in the processing of email messages since the associated service was last started are returned. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

