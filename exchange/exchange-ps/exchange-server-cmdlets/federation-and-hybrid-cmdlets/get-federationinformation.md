---
title: "Get-FederationInformation"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e7e948c8-453d-49e2-97da-45fd2a7853ba
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-FederationInformation

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-FederationInformation** cmdlet to get federation information, including federated domain names and target URLs, from an external Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-FederationInformation -DomainName <SmtpDomain> [-BypassAdditionalDomainValidation <SwitchParameter>] [-Force <SwitchParameter>] [-TrustedHostnames <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example gets federation information from the domain contoso.com.
  
```
Get-FederationInformation -DomainName contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-FederationInformation** cmdlet retrieves federation information from the domain specified. Results from the cmdlet can be piped to the **New-OrganizationRelationship** cmdlet to establish an organization relationship with the Exchange organization being queried.
  
The domain specified should have federation enabled.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _DomainName_ parameter specifies the domain name for which federation information is to be retrieved. <br/> |
| _BypassAdditionalDomainValidation_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BypassAdditionalDomainValidation_ switch specifies that the command skip validation of domains from the external Exchange organization. You don't need to specify a value with this switch. <br/> We recommend that you only use this switch to retrieve federation information in a hybrid deployment between on-premises and Exchange Online organizations.. Don't use this switch to retrieve federation information for on-premises Exchange organizations in a cross-organization arrangement.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> A confirmation prompt warns you if the host name in the Autodiscover endpoint of the domain doesn't match the Secure Sockets Layer (SSL) certificate presented by the endpoint, and the host name isn't specified in the _TrustedHostnames_ parameter. <br/> |
| _TrustedHostnames_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _TrustedHostnames_ parameter specifies the fully qualified domain name (FQDN) of federation endpoints. Federation endpoints are the client access (frontend) services on Mailbox servers in an organization with federation enabled. Explicitly specifying the _TrustedHostnames_ parameter allows the cmdlet to bypass prompting if the certificate presented by the endpoint doesn't match the domain name specified in the _DomainName_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

