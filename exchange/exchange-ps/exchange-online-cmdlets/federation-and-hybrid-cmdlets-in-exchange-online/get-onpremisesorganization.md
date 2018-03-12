---
title: "Get-OnPremisesOrganization"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: c58eedcf-2b80-4022-971d-fce6365b6e75
description: "This cmdlet is available only in the cloud-based service."
---

# Get-OnPremisesOrganization

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-OnPremisesOrganization** cmdlet to retrieve settings for the OnPremisesOrganization object that has been created for a hybrid deployment.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-OnPremisesOrganization [-Identity <OnPremisesOrganizationIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the on-premises organization settings for ExchangeMail using the  _Identity_ parameter.
  
```
Get-OnPremisesOrganization -Identity ExchangeMail | Format-List
```

### Example 2

This example retrieves the on-premises organization settings by using the FQDN of the domain controller.
  
```
Get-OnPremisesOrganization -DomainController 'mail.contoso.com' | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The OnPremisesOrganization object represents an on-premises Exchange organization configured for hybrid deployment with a Microsoft Office 365 tenant organization. It's used with the Hybrid Configuration wizard and is typically created automatically when the hybrid deployment is initially configured by the wizard. You can use the **Get-OnPremisesOrganization** cmdlet to view the properties of the OnPremisesOrganization object in the Office 365 tenant.
  
> [!CAUTION]
> Manual modification of this object may result in hybrid deployment misconfiguration. We strongly recommend that you use the Hybrid Configuration wizard to modify this object in the Office 365 tenant. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OnPremisesOrganizationIdParameter  <br/> | The _Identity_ parameter specifies the identity of the on-premises organization object. You can use the following values: <br/>  Canonical name <br/>  GUID <br/>  Name <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

