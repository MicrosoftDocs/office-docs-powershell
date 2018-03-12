---
title: "Get-OrganizationConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3e07e5cc-5066-40e7-8642-845ad080f9a9
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-OrganizationConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-OrganizationConfig** cmdlet to get configuration data for an Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-OrganizationConfig [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example gets the organization configuration information for the domain controller ContosoDC.
  
```
Get-OrganizationConfig -DomainController ContosoDC
```

### Example 2

This example gets the configuration information for the tenant organization.
  
```
Get-OrganizationConfig Export-Cli c:\myFile.xml
```

For more information, see [Scenario: Troubleshooting Hybrid Deployments](http://technet.microsoft.com/library/bbae72f3-6a1e-4cbf-80da-d8f73d969c6b.aspx).
  
### Example 3

This example shows the applications that are allowed access to EWS and REST.
  
- If the value of **EwsApplicationAccessPolicy** is `EnforceAllowList`, only the applications specified in **EwsAllowList** are allowed to access EWS and REST.
    
- If the value of **EwsApplicationAccessPolicy** is `EnforceBlockList`, all applications are allowed to access EWS and REST, except those specified in **EwsBlockList**.
    
```
Get-OrganizationConfig | Format-List EwsApplicationAccessPolicy,Ews*List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

