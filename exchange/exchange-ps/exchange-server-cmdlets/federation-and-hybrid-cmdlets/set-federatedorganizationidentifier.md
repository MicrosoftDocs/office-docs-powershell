---
title: "Set-FederatedOrganizationIdentifier"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a7b8c08e-8c8c-4566-b92a-2731cca66ada
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-FederatedOrganizationIdentifier

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-FederatedOrganizationIdentifier** cmdlet to configure the federated organization identifier for the Exchange organization.
  
For more details, see [Understanding Federation Trusts](https://technet.microsoft.com/library/0046e2eb-6940-4941-bd5b-cbe6bffa3b94.aspx).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-FederatedOrganizationIdentifier [-Identity <OrganizationIdParameter>] [-AccountNamespace <SmtpDomain>] [-Confirm [<SwitchParameter>]] [-DefaultDomain <SmtpDomain>] [-DelegationFederationTrust <FederationTrustIdParameter>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-OrganizationContact <SmtpAddress>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures a federated organization identifier for the Exchange organization.
  
```
Set-FederatedOrganizationIdentifier -DelegationFederationTrust "Microsoft Federation Gateway" -AccountNamespace "Contoso.com" -Enabled $true
```

### Example 2

This example temporarily disables federation for the Exchange organization.
  
```
Set-FederatedOrganizationIdentifier -Enabled $false
```

### Example 3

This example enables the organization identifier. This enables federation for the Exchange organization.
  
```
Set-FederatedOrganizationIdentifier -Enabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You must configure a federated organization identifier to create an account namespace for your Exchange organization with the Microsoft Federation Gateway and enable federation for the purpose of sharing calendars or contacts, accessing free/busy information across Exchange organizations, and securing cross-premises email delivery using federated delivery. When you create a federation trust, a value for the _AccountNamespace_ parameter is automatically created with the Microsoft Federation Gateway. The _AccountNamespace_ parameter is a combination of a pre-defined string and the domain specified. For example, if you specify the federated domain contoso.com as the domain, "FYDIBOHF25SPDLT.contoso.com" is automatically created as the value for the _AccountNamespace_ parameter. You can add and remove Additional domain names later by using the **Add-FederatedDomain** and **Remove-FederatedDomain** cmdlets.
  
You can temporarily disable federation by disabling the organization identifier.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccountNamespace_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _AccountNamespace_ parameter specifies the federated domain to be used to establish the organization identifier with the Microsoft Federation Gateway. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultDomain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _DefaultDomain_ parameter specifies the federated domain used for delegation tokens issued by the Microsoft Federation Gateway for user accounts in the Exchange organization. If the _DefaultDomain_ parameter isn't set, the primary SMTP domain for each user account is used in delegation tokens issued by the Microsoft Federation Gateway. Only a single domain or subdomain for the Exchange organization should be configured, and it applies to all delegation tokens issued for the Exchange organization, for example, contoso.com. <br/> |
| _DelegationFederationTrust_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.FederationTrustIdParameter  <br/> |The _DelegationFederationTrust_ parameter specifies the identity of the federation trust to be used by the organization identifier. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the organization identifier is enabled. Valid values include `$true` or `$false`.  <br/> Setting the parameter to  `$false` disables federation. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |The _Identity_ parameter specifies the federated organization identifier. <br/> |
| _OrganizationContact_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _OrganizationContact_ parameter specifies the SMTP address of the federation contact. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

