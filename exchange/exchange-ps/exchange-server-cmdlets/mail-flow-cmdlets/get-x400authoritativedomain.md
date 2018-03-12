---
title: "Get-X400AuthoritativeDomain"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a14fa481-2d32-4031-bc9b-098bd4108118
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-X400AuthoritativeDomain

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-X400AuthoritativeDomain** cmdlet to view the configuration information for the X.400 authoritative domains configured in your organization. For more information about how to configure an X.400 authoritative domain, see[Set-X400AuthoritativeDomain](set-x400authoritativedomain.md).
  
```
Get-X400AuthoritativeDomain [-Identity <X400AuthoritativeDomainIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information about the X.400 authoritative domain Europe Sales X.400 Domain.
  
```
Get-X400AuthoritativeDomain "Europe Sales X.400 Domain" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.X400AuthoritativeDomainIdParameter  <br/> |The _Identity_ parameter specifies a string value for the X.400 authoritative domain. Enter either the GUID or the name of the remote domain. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

