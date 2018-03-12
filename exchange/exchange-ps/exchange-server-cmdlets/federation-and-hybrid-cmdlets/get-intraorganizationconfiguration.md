---
title: "Get-IntraOrganizationConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 774d9f77-ecde-4c6f-ac4f-8068dcb4fb90
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-IntraOrganizationConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-IntraOrganizationConfiguration** cmdlet to view the component settings of a hybrid Exchange deployment.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-IntraOrganizationConfiguration [-OrganizationGuid <OnPremisesOrganizationIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the settings of the intra-organization configuration.
  
```
Get-IntraOrganizationConfiguration
```

## Detailed Description
<a name="DetailedDescription"> </a>

A hybrid Exchange deployment results in one logical organization made up of a number of physical Exchange instances. Hybrid Exchange environments contain more than one Exchange instance and support topologies like two on-premises Microsoft Exchange forests in an organization, an Exchange on-premises organization and an Exchange Online organization, or two Exchange Online organizations.
  
Hybrid environments are enabled by Intra-Organization connectors. The connectors can be created and managed by cmdlets like **New-IntraOrganizationConnector**, but we strongly recommend that you use the Hybrid Configuration wizard when configuring a hybrid deployment with an Exchange Online organization.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _OrganizationGuid_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OnPremisesOrganizationIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _OrganizationGuid_ parameter specifies the on-premises organization in a hybrid deployment that has multiple on-premises organizations defined. If you don't use the _OrganizationGuid_ parameter for these types of hybrid deployments, the **Get-IntraOrganizationConfiguration** cmdlet will generate errors. To view the on-premises organization GUID values that are required for this parameter, use the **Get-OnPremisesOrganization** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

