---
title: "Get-DeliveryAgentConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c7b369b6-fce1-4e60-ba6b-183fec700660
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-DeliveryAgentConnector

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-DeliveryAgentConnector** cmdlet to retrieve information about a specific delivery agent connector in your organization.
  
```
Get-DeliveryAgentConnector [-Identity <DeliveryAgentConnectorIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example reads the configuration of the delivery agent connector named Contoso X.400 Connector from Active Directory and displays all of its properties in a list format.
  
```
Get-DeliveryAgentConnector "Contoso X.400 Connector" | Format-List
```

### Example 2

This example retrieves a list of all delivery agent connectors in your organization and displays their names and delivery protocols in a table format.
  
```
Get-DeliveryAgentConnector | Format-Table Name,DeliveryProtocol
```

## Detailed Description
<a name="DetailedDescription"> </a>

Delivery agent connectors are used to route messages addressed to foreign systems that don't use the SMTP protocol. When a message is routed to a delivery agent connector, the associated delivery agent performs the content conversion and message delivery. Delivery agent connectors allow queue management of foreign connectors, thereby eliminating the need for storing messages on the file system in Drop and Pickup directories. For more information, see [Understanding Delivery Agents](https://technet.microsoft.com/library/38c942ee-b59d-47ec-87eb-bebad441ada5.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DeliveryAgentConnectorIdParameter  <br/> |The _Identity_ parameter specifies the GUID or name of the delivery agent connector. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

