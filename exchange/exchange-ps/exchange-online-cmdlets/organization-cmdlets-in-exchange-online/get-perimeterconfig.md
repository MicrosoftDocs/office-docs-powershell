---
title: "Get-PerimeterConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 34ef07d4-b055-4f33-bb88-15e41e0386db
description: "This cmdlet is available only in the cloud-based service."
---

# Get-PerimeterConfig

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-PerimeterConfig** cmdlet to view the list of gateway server and internal mail server IP addresses that have been added to the cloud-based safelists.
  
```
Get-PerimeterConfig [-Identity <OrganizationIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example

This example returns the list of gateway servers and internal mail servers in your organization that have been added to cloud-based safelists.
  
```
Get-PerimeterConfig
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you have an on-premises messaging system, you can add the IP addresses of your mail servers to cloud-based safelists. Safelists are also known as whitelists. You add IP addresses to cloud-based safelists to make sure that e-mail that originates in your on-premises messaging system isn't treated as spam.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

