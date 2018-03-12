---
title: "Get-AdSite"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: af3b6cc3-eb86-41d9-a643-171e36a3482d
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-AdSite

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-AdSite** cmdlet to display configuration information about one or more Active Directory sites.
  
```
Get-AdSite [-Identity <AdSiteIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the configuration details for the Active Directory site named Default-First-Site-Name.
  
```
Get-AdSite Default-First-Site-Name
```

## Detailed Description
<a name="DetailedDescription"> </a>

Exchange uses Active Directory sites and the costs assigned to the Active Directory site links to make message routing decisions.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _Identity_ parameter specifies the identity of the Active Directory site for which you want to view configuration details. The identity can be expressed as a GUID or the Active Directory site name. If the Active Directory site name includes spaces, enclose the name in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

