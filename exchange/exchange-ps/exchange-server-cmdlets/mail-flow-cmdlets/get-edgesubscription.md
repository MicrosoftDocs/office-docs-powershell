---
title: "Get-EdgeSubscription"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: dc05b43c-ddc3-468b-97ff-5e915f56c751
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-EdgeSubscription

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-EdgeSubscription** cmdlet to retrieve information about Edge Subscriptions in your organization.
  
```
Get-EdgeSubscription [-Identity <TransportServerIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves detailed Edge Subscription information for all Edge Transport servers subscribed to your Exchange organization.
  
```
Get-EdgeSubscription | Format-List
```

### Example 2

This example retrieves the Edge Subscription information for the Edge Transport server name Edge1 from the domain controller named DC1.
  
```
Get-EdgeSubscription Edge1 -DomainController DC1.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Run the **Get-EdgeSubscription** cmdlet on an Exchange server in your organization. This cmdlet retrieves the list of Edge Subscriptions. Each Edge Transport server that's subscribed to the Exchange organization has a separate Edge Subscription. You can use this cmdlet to view the Edge Subscription information for a specific Edge Transport server. You can also use this cmdlet to view the Edge Subscription information for all Edge Transport servers subscribed to Active Directory sites.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.TransportServerIdParameter  <br/> |The _Identity_ parameter specifies the name of the Edge Transport server for which you want to retrieve Edge Subscription information. The identity is expressed as the host name of the Edge Transport server. If no identity is specified, all Edge Subscriptions are returned. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

