---
title: "Get-Trust"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3261c1bd-bb8b-479d-af4d-48fee7b4b357
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-Trust

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-Trust** cmdlet to return external and forest trusts.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-Trust [-DomainName <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enumerates all trusts for the domain Contoso.com.
  
```
Get-Trust -DomainName Contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-Trust** cmdlet is used by the Exchange admin center in to populate fields that display recipient information.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainName_ parameter specifies that trusts returned are restricted to the domain name specified. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

