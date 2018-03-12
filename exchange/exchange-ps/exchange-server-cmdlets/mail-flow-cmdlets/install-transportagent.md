---
title: "Install-TransportAgent"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 520bfa38-f51a-400c-9ff3-46fa50222092
description: "This cmdlet is available only in on-premises Exchange."
---

# Install-TransportAgent

This cmdlet is available only in on-premises Exchange. 
  
Use the **Install-TransportAgent** cmdlet to register transport agents on Exchange servers.
  
```
Install-TransportAgent -AssemblyPath <String> -Name <String> -TransportAgentFactory <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-EscalationTeam <String>] [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows how a fictitious application named Test App is installed in the Transport service on a Mailbox server.
  
```
Install-TransportAgent -Name "Test App" -TransportAgentFactory "vendor.exchange.avTransportAgentfactory" -AssemblyPath "c:\Program Files\Vendor\TransportAgent\AvTransportAgentFactory.dll" -TransportService Hub
```

## Detailed Description
<a name="DetailedDescription"> </a>

> [!CAUTION]
> Transport agents have full access to all email messages that they encounter. Exchange puts no restrictions on a transport agent's behavior. Transport agents that are unstable or contain security flaws may affect the stability and security of Exchange. Therefore, you need to only install transport agents that you fully trust and that have been fully tested. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AssemblyPath_ <br/> |Required  <br/> |System.String  <br/> |The _AssemblyPath_ parameter specifies the location of the transport agent Microsoft.NET assembly. Universal Naming Convention (UNC) file paths can't be used. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the display name of the transport agent to be installed. The length of the name can't exceed 64 characters. <br/> |
| _TransportAgentFactory_ <br/> |Required  <br/> |System.String  <br/> |The _TransportAgentFactory_ parameter specifies the Microsoft.NET class type of the transport agent factory. The developer of the transport agent being installed provides the transport agent factory and related information. For more information, see the documentation provided by the developer of the transport agent. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _EscalationTeam_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _TransportService_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TransportService  <br/> | The _TransportService_ parameter specifies the transport service that you want to view or modify. Valid values for this parameter are: <br/>  `Hub` for the Transport service on Mailbox servers. <br/>  `MailboxSubmission` for the Mailbox Transport Submission service on Mailbox servers. <br/>  `MailboxDelivery` for the Mailbox Transport Delivery service on Mailbox servers. <br/>  `FrontEnd` for the Front End Transport service on Mailbox servers. <br/>  `Edge` on Edge Transport servers. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

