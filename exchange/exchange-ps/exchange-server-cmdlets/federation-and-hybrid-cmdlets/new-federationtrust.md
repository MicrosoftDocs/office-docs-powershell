---
title: "New-FederationTrust"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ab3bb2d0-c346-480d-93b2-be563aebc261
description: "This cmdlet is available only in on-premises Exchange."
---

# New-FederationTrust

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-FederationTrust** cmdlet to set up a federation trust between your Exchange organization and the Microsoft Federation Gateway.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-FederationTrust -Thumbprint <String> [-MetadataUrl <Uri>] [-UseLegacyProvisioningService <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the federation trust Microsoft Federation Gateway with a certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17.
  
```
New-FederationTrust -Name "Microsoft Federation Gateway" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

## Detailed Description
<a name="DetailedDescription"> </a>

Federation trusts are trusts created between an Exchange organization and the Microsoft Federation Gateway. A federation trust is required to configure a federated organization identifier for federated sharing.
  
For more information, see [Understanding Federation Trusts](https://technet.microsoft.com/library/0046e2eb-6940-4941-bd5b-cbe6bffa3b94.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplicationUri_ <br/> |Required  <br/> |System.String  <br/> |The _ApplicationUri_ parameter specifies the primary domain used for the federated organization identifier. <br/> If you specify the _ApplicationUri_ parameter, you must use the _SkipNamespaceProviderProvisioning_ switch and also specify the _AdministratorProvisioningId_ and _ApplicationIdentifier_ parameters. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a friendly name for the federation trust. <br/> |
| _SkipNamespaceProviderProvisioning_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipNamespaceProviderProvisioning_ switch specifies that the trust and federated organization identifier are provisioned externally without using federation functionality in Microsoft Exchange. <br/> If you use this switch, you must specify the _ApplicationIdentifier_, _ApplicationUri_, and _AdministratorProvisioningId_ parameters. <br/> |
| _Thumbprint_ <br/> |Required  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the thumbprint of a certificate issued by a public certification authority (CA) trusted by the Microsoft Federation Gateway. For more details, see[Understanding Federation Trusts](https://technet.microsoft.com/library/0046e2eb-6940-4941-bd5b-cbe6bffa3b94.aspx).  <br/> |
| _AdministratorProvisioningId_ <br/> |Optional  <br/> |System.String  <br/> |The _AdministratorProvisioningId_ parameter specifies the provisioning key returned by the Microsoft Federation Gateway when an organization has already registered a **SiteID** or **ApplicationID**. <br/> If you specify the _AdministratorProvisioningId_ parameter, you must use the _SkipNamespaceProviderProvisioning_ switch and also specify the _ApplicationIdentifier_ and _ApplicationUri_ parameters. <br/> |
| _ApplicationIdentifier_ <br/> |Optional  <br/> |System.String  <br/> |The _ApplicationIdentifier_ parameter specifies the **SiteID** or **ApplicationID** when an organization has already registered a **SiteID** or **ApplicationID**. <br/> If you specify the _ApplicationIdentifier_ parameter, you must use the _SkipNamespaceProviderProvisioning_ switch and also specify the _AdministratorProvisioningId_ and _ApplicationUri_ parameters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MetadataUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _MetadataUrl_ parameter specifies the URL where WS-FederationMetadata is published by the Microsoft Federation Gateway. <br/> |
| _UseLegacyProvisioningService_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UseLegacyProvisioningService_ parameter specifies if the legacy interface on the Microsoft Federation Gateway will be used for managing the federation trust, including federated domains, certificates, and federation metadata. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`. When using a self-signed certificate for configuring a federation trust with the Microsoft Federation Gateway, the trust needs to be created with the parameter set to  `$true`. After the federation trust is created, this behavior can't be changed and requires the deletion and re-creation of the federation trust. We recommend you always use the default value of  `$false`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

