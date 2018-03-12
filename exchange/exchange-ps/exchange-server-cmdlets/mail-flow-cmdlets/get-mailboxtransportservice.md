---
title: "Get-MailboxTransportService"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 54f1d3b1-a1d6-4438-900b-c77e94f1f6d7
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxTransportService

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxTransportService** cmdlet to view the transport configuration information for the Mailbox Transport service on Mailbox servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxTransportService [-Identity <MailboxTransportServerIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a list of all Mailbox servers in your organization.
  
```
Get-MailboxTransportService
```

### Example 2

This example retrieves the detailed transport configuration information for the Mailbox Transport service on the Mailbox server named Mailbox01.
  
```
Get-MailboxTransportService Mailbox01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Mailbox Transport service runs on all Mailbox servers and is responsible for delivering messages to and accepting messages from local mailbox databases using remote procedure calls (RPC). The Mailbox Transport service also uses SMTP to send messages to and from the Transport service that runs on all Mailbox servers for routing their ultimate destinations.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxTransportServerIdParameter  <br/> |The _Identity_ parameter specifies the server that you want to view. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

