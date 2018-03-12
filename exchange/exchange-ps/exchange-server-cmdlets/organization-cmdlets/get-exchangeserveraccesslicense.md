---
title: "Get-ExchangeServerAccessLicense"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fbe3cf4a-167c-47b4-9074-a4561711be6e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ExchangeServerAccessLicense

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ExchangeServerAccessLicense** cmdlet to return a list of licenses in use in your Exchange organization. This refers to the specific legal name of the license, as defined in the Microsoft Product List and is representative of your licenses when you run this cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ExchangeServerAccessLicense

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of Exchange 2016 licenses in your organization.
  
```
Get-ExchangeServerAccessLicense
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-ExchangeServerAccessLicense** cmdlet returns a collection of these license names:
  
- Exchange Server 2016 Standard CAL
    
- Exchange Server 2016 Enterprise CAL
    
- Exchange Server 2016 Standard Edition
    
- Exchange Server 2016 Enterprise Edition
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
|||||
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

