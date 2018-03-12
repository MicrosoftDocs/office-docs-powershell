---
title: "Remove-EOPDistributionGroup"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: a17b1307-3187-40b0-a438-c7b35a34c002
description: "This cmdlet is available only in Exchange Online Protection."
---

# Remove-EOPDistributionGroup

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Remove-EOPDistributionGroup** cmdlet to delete distribution groups or mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Remove-DistributionGroup** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-EOPDistributionGroup [-ExternalDirectoryObjectId <String>] [-Identity <DistributionGroupIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the existing Exchange Online Protection distribution group named Security Team.
  
```
Remove-EOPDistributionGroup -Identity "Security Team"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DistributionGroupIdParameter  <br/> | The _Identity_ parameter specifies the distribution group or mail-enabled security group that you want to remove. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

