---
title: "Get-AdServerSettings"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c09f17ff-7830-4a4e-a951-501bc44a26ab
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-AdServerSettings

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-AdServerSettings** cmdlet to view the Active Directory Domain Services (AD DS) environment settings in the current Exchange Management Shell session. The **Get-AdServerSettings** cmdlet replaces the `AdminSessionADSettings` session variable that was used in Exchange Server 2007.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-AdServerSettings

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the session settings for the current session.
  
```
Get-AdServerSettings | Format-List
```

For more information about pipelining and the **Format-List** cmdlet, see[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

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
  

