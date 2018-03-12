---
title: "Get-HostedContentFilterPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: d510471a-dda5-4df7-b3f8-2ee7a1948436
description: "This cmdlet is available only in the cloud-based service."
---

# Get-HostedContentFilterPolicy

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-HostedContentFilterPolicy** cmdlet to view the settings of content filter policies in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-HostedContentFilterPolicy [-Identity <HostedContentFilterPolicyIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows a summary list of all the content filter policies in your cloud-based organization.
  
```
Get-HostedContentFilterPolicy
```

### Example 2

This example retrieves details about the content filter policy named Default.
  
```
Get-HostedContentFilterPolicy Default | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.HostedContentFilterPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the content filter policy that you want to view. You can use any value that uniquely identifies the policy. For example, you can use the name, GUID or distinguished name (DN) of the content filter policy. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

