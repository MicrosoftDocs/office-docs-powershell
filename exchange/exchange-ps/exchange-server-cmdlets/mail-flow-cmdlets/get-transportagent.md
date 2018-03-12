---
title: "Get-TransportAgent"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 83417504-5d52-43b2-8cf5-e48acae72e3a
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-TransportAgent

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-TransportAgent** cmdlet to view the configuration of a transport agent.
  
```
Get-TransportAgent [-Identity <TransportAgentObjectId>] [-DomainController <Fqdn>] [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a summary list of all transport agents installed on all Exchange servers in your organization.
  
```
Get-TransportAgent
```

### Example 2

This example displays detailed information about the Transport Rule agent that's installed in the Transport service on a Mailbox server. The output of the **Get-TransportAgent** command is piped to the **Format-List** command to display the detailed configuration of the transport agent.
  
```
Get-TransportAgent "Transport Rule Agent" -TransportService Hub | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.AgentTasks.TransportAgentObjectId  <br/> |The _Identity_ parameter specifies the display name of the transport agent to be displayed. The length of the name can't exceed 64 characters. <br/> |
| _TransportService_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TransportService  <br/> | The _TransportService_ parameter specifies the transport service that you want to view or modify. Valid values for this parameter are: <br/>  `Hub` for the Transport service on Mailbox servers. <br/>  `MailboxSubmission` for the Mailbox Transport Submission service on Mailbox servers. <br/>  `MailboxDelivery` for the Mailbox Transport Delivery service on Mailbox servers. <br/>  `FrontEnd` for the Front End Transport service on Mailbox servers. <br/>  `Edge` on Edge Transport servers. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

