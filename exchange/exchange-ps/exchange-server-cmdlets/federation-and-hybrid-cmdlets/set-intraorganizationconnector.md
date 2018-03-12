---
title: "Set-IntraOrganizationConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2f8176a8-c685-4be1-a2f3-b5e4ee4ae55c
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-IntraOrganizationConnector

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-IntraOrganizationConnector** cmdlet to modify an existing Intra-Organization connector between two on-premises Exchange forests in an organization, between an on-premises Exchange organization and an Exchange Online organization, or between two Exchange Online organizations.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-IntraOrganizationConnector -Identity <IntraOrganizationConnectorIdParameter> [-Confirm [<SwitchParameter>]] [-DiscoveryEndpoint <Uri>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-TargetAddressDomains <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables the Intra-Organization connector named "MainCloudConnector".
  
```
Set-IntraOrganizationConnector "MainCloudConnector" -Enabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

Intra-Organizational connectors enable features and services between divisions in your Exchange organization. It allows for the expansion of organizational boundaries for features and services across different hosts and network boundaries, such as between Active Directory forests, between on-premises and cloud-based organizations, or between tenants hosted in the same or different datacenters.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.IntraOrganizationConnectorIdParameter  <br/> | The _Identity_ parameter specifies the Intra-Organization connector that you want to modify. You can use any value that uniquely identifies the connector. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DiscoveryEndpoint_ <br/> |Optional  <br/> |System.Uri  <br/> |The _DiscoveryEndpoint_ parameter specifies the externally accessible URL used for the Autodiscover service for the domain configured in the IntraOrganization Connector. This parameter is automatically populated with the _TargetAutodiscoverEpr_ value from the **Get-FederationInformation** cmdlet for the defined domain. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter enables or disabled the Intra-organization connector. The valid values for this parameter are `$true` or `$false`. The default value is  `$true`.  <br/> When you set the value to  `$false`, you completely stop connectivity for the specific connection.  <br/> |
| _TargetAddressDomains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _TargetAddressDomains_ parameter specifies the domain namespaces that will be used in the Intra-Organization connector. The domains must have valid Autodiscover endpoints defined in their organizations. The domains and their associated Autodiscover endpoints are used by the Intra-Organization connector for feature and service connectivity. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

