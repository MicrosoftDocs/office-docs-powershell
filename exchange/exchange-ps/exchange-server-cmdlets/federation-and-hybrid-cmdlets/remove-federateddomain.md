---
title: "Remove-FederatedDomain"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8cd3096e-79ca-4af8-bfb2-48bb8cee5208
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-FederatedDomain

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-FederatedDomain** cmdlet to remove a federated domain from the federated organization identifier in the federation trust for the Exchange organization.
  
> [!CAUTION]
> If you remove a domain configured for federated sharing, federated sharing for that domain is disabled. 
  
For more information, see [Understanding Federation Trusts](https://technet.microsoft.com/library/0046e2eb-6940-4941-bd5b-cbe6bffa3b94.aspx).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-FederatedDomain -DomainName <SmtpDomain> [-Identity <OrganizationIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the federated domain contoso.co.uk from the federated organization identifier.
  
```
Remove-FederatedDomain -DomainName contoso.co.uk
```

## Detailed Description
<a name="DetailedDescription"> </a>

An Exchange organization's federated organization identifier is generally created using the organization's primary domain name. Additional domain names can be added and removed. The **Remove-FederatedDomain** cmdlet removes a federated domain from the federated organization identifier.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _DomainName_ parameter specifies the federated domain name to be removed from the federated organization identifier. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages when removing a federated domain. This parameter can be used when the removal of the federated domain from Windows Live fails, but the configuration of this domain as a federated domain in Exchange should be removed regardless. The result of running this task with the _Force_ switch is that the Exchange configuration is removed but the domain may not be released in Windows Live. We recommend that you not use the _Force_ switch unless the release of the domain from Windows Live continues to fail. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

