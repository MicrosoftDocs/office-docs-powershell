---
title: "Get-UnifiedGroupLinks"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 11/9/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b7f00aad-61ae-4ca8-8a3d-9efd28bbbbd0
description: "This cmdlet is available only in the cloud-based service."
---

# Get-UnifiedGroupLinks

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-UnifiedGroupLinks** cmdlet to view membership and ownership information for Office 365 groups in your cloud-based organization. To view other properties for Office 365 groups, use the **Get-UnifiedGroup** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UnifiedGroupLinks -Identity <UnifiedGroupIdParameter> -LinkType <Members | Owners | Subscribers | Aggregators | EventSubscribers> [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example show the members of the Office 365 Group named Human Resources Department
  
```
Get-UnifiedGroupLinks -Identity "Human Resources Department" -LinkType Members
```

## Detailed Description
<a name="DetailedDescription"> </a>

Office 365 groups are group objects that are available across Office 365 services. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UnifiedGroupIdParameter  <br/> | The _Identity_ parameter specifies the Office 365 Group that you want to view. You can use any value that uniquely identifies the Office 365 Group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _LinkType_ <br/> |Required  <br/> |Microsoft.Exchange.Management.RecipientTasks.LinkType  <br/> | The _LinkType_ parameter specifies the Office 365 Group property that you want to view. Valid values are: <br/>  `EventSubscribers` <br/>  `Members` <br/>  `Owners` <br/>  `Subscribers` <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

