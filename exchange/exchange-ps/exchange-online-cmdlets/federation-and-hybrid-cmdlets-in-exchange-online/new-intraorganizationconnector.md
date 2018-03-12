---
title: "New-IntraOrganizationConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 34af9609-b018-4eee-8c77-e1f0dcd5b4a7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-IntraOrganizationConnector

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-IntraOrganizationConnector** cmdlet to create an Intra-Organization connector between two on-premises Exchange forests in an organization, between an Exchange on-premises organization and an Exchange Online organization, or between two Exchange Online organizations. This connector enables feature availability and service connectivity across the organizations using a common connector and connection endpoints.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-IntraOrganizationConnector -DiscoveryEndpoint <Uri> -Name <String> -TargetAddressDomains <MultiValuedProperty> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an Intra-Organization connector named "MainCloudConnector" between an on-premises Exchange organization and an Exchange Online organization containing two domains, Cloud1.contoso.com and Cloud2.contoso.com.
  
```
New-IntraorganizationConnector -DiscoveryEndpoint http://ExternalDiscovery.Contoso.com -Name MainCloudConnector -TargetAddressDomains Cloud1.contoso.com,Cloud2.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-IntraOrganizationConnector** cmdlet is used to create a connection for features and services between divisions in your Exchange organization. It allows for the expansion of organizational boundaries for features and services across different hosts and network boundaries, such as between Active Directory forests, between on-premises and cloud-based organizations, or between tenants hosted in the same or different datacenters.
  
For hybrid deployments between on-premises Exchange and Exchange Online organizations, the **New-IntraOrganizationConnector** cmdlet is used by the Hybrid Configuration wizard. Typically, the Intra-Organization connector is configured when the hybrid deployment is initially created by the wizard. We strongly recommend that you use the Hybrid Configuration wizard to create the Intra-Organization connector when configuring a hybrid deployment with an Exchange Online organization.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DiscoveryEndpoint_ <br/> |Required  <br/> |System.Uri  <br/> |The  _DiscoveryEndpoint_ parameter specifies the externally-accessible URL that's used for the Autodiscover service for the domain that's configured in the Intra-Organization connector. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a friendly name for the Intra-Organization connector. If the value contains spaces, enclose the value in double quotation marks. <br/> |
| _TargetAddressDomains_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _TargetAddressDomains_ parameter specifies the domain namespaces that will be used in the Intra-organization connector. These domains must have valid Autodiscover endpoints defined in their organizations. The domains and their associated Autodiscover endpoints are used by the Intra-Organization connector for feature and service connectivity. <br/> You specify multiple domain values separated by commas.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter enables or disabled the Intra-organization connector. The valid values for this parameter are `$true` or `$false`. The default value is  `$true`.  <br/> When you set the value to  `$false`, you completely stop connectivity for the specific connection.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

