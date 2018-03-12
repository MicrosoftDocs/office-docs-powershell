---
title: "Get-PartnerApplication"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: e6ce8128-f174-4bca-91e6-004fc94cf0f8
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PartnerApplication

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PartnerApplication** cmdlet to retrieve settings for a partner application.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PartnerApplication [-Identity <PartnerApplicationIdParameter>] [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves settings for all partner applications configured in Exchange and pipes them to the **Format-List** cmdlet to display all properties in a list view.
  
```
Get-PartnerApplication | Format-List *
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can configure partner applications such as Microsoft SharePoint to access Exchange resources. For details, see [Integration with SharePoint and Lync](http://technet.microsoft.com/library/056b29f6-e0e9-4974-b763-002518857a93.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.PartnerApplicationIdParameter  <br/> |The  _Identity_ parameter specifies the identity of a partner application. <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

