---
title: "New-DeliveryAgentConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/6/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b09ac95b-ea07-41cf-9c69-95c215bfa02c
description: "This cmdlet is available only in on-premises Exchange."
---

# New-DeliveryAgentConnector

This cmdlet is available only in on-premises Exchange. 
  
The **New-DeliveryAgentConnector** cmdlet creates a delivery agent connector in your organization.
  
```
New-DeliveryAgentConnector -AddressSpaces <MultiValuedProperty> -DeliveryProtocol <String> -Name <String> [-Comment <String>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-IsScopedConnector <$true | $false>] [-MaxConcurrentConnections <Int32>] [-MaxMessageSize <Unlimited>] [-MaxMessagesPerConnection <Int32>] [-SourceTransportServers <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a delivery agent connector named Contoso X.400 Connector with the following configuration:
  
- The delivery agent connector is hosted on the following servers:
    
  - Hub01
    
  - Hub02
    
  - Hub05
    
- The delivery agent connector is designed to handle X.400 connections to a company called Contoso that uses the carrier Fabrikam.
    
- The address space for the connector is c=US;a=Fabrikam;p=Contoso.
    
```
New-DeliveryAgentConnector -Name "Contoso X.400 Connector" -AddressSpaces "X400:c=US;a=Fabrikam;p=Contoso;1" -DeliveryProtocol "X.400" -SourceTransportServers Hub01,Hub02,Hub05
```

## Detailed Description
<a name="DetailedDescription"> </a>

Delivery agent connectors are used to route messages addressed to foreign systems that don't utilize the SMTP protocol. When a message is routed to a delivery agent connector, the associated delivery agent performs the content conversion and message delivery. Delivery agent connectors allow queue management of foreign connectors, thereby eliminating the need for storing messages on the file system in the Drop and Pickup directories. For more information, see [Understanding Delivery Agents](https://technet.microsoft.com/library/38c942ee-b59d-47ec-87eb-bebad441ada5.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AddressSpaces_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AddressSpaces_ parameter specifies the domain names for which this delivery agent connector is responsible. The syntax for entering an address space is as follows: < _AddressSpaceType_>:< _AddressSpace_>;< _AddressSpaceCost_>. You must enclose each address space in quotation marks (").  <br/> |
| _DeliveryProtocol_ <br/> |Required  <br/> |System.String  <br/> |The _DeliveryProtocol_ parameter specifies the communication protocol that determines which delivery agents are responsible for servicing the connector. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of this delivery agent connector. The value for the _Name_ parameter can't exceed 64 characters. <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the delivery agent connector is enabled. <br/> The default value is  `$true`.  <br/> |
| _IsScopedConnector_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsScopedConnector_ parameter specifies the availability of the connector to other Mailbox servers. If the value of this parameter is `$false`, the connector can be used by all Mailbox servers in your organization. If the value of this parameter is  `$true`, the connector can only be used by Mailbox servers in the same Active Directory site. The default value is  `$false`.  <br/> |
| _MaxConcurrentConnections_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaxConcurrentConnections_ parameter specifies the maximum number of concurrent connections this connector accepts from a specific IP address. The default value is 5. <br/> |
| _MaxMessageSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxMessageSize_ parameter specifies the maximum size of a message that's allowed to pass through this connector. When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  Unqualified values are treated as bytes. The valid input range for this parameter is from 65536 through 2147483647 bytes. The default value is `unlimited`.  <br/> |
| _MaxMessagesPerConnection_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaxMessagesPerConnection_ parameter specifies the maximum number of messages this connector accepts per connection. The connector terminates the connection after this limit is reached, and the sending server has to initiate a new connection to send more messages. The default value is 20. <br/> |
| _SourceTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SourceTransportServers_ parameter specifies the list of Mailbox servers that host this connector. You can specify more than one server by separating their names with commas. <br/> By default, only the local server on which the command is executed is added to this parameter.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

