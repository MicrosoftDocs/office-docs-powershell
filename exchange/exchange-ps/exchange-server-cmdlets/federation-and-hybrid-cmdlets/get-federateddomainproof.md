---
title: "Get-FederatedDomainProof"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ef27cb75-e894-46c7-8f31-cb6af04ab3f1
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-FederatedDomainProof

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-FederatedDomainProof** cmdlet to generate a cryptographically secure string for the domain used for federated sharing in your Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-FederatedDomainProof -DomainName <SmtpDomain> [-DomainController <Fqdn>] [-Thumbprint <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example generates a cryptographically secure string for the domain contoso.com.
  
```
Get-FederatedDomainProof -DomainName "contoso.com"
```

### Example 2

This example uses a specific certificate for the domain contoso.com.
  
```
Get-FederatedDomainProof -DomainName "contoso.com" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-FederatedDomainProof** cmdlet generates a cryptographically secure string for the domain used for federated sharing. The resulting string is used to manually configure a text (TXT) record in the Domain Name System (DNS) zone for the domain used by the administrator when running the cmdlet. A TXT record needs to be added to DNS for all accepted domains used for federated sharing. If the thumbprint of a certificate isn't provided, the task generates strings for all the certificates currently configured for the federation trust. Upon initial configuration of federated sharing, the proof string generated for the current certificate needs to be put into the TXT record for the federated domain in DNS. We recommend you update the TXT records whenever a new certificate is configured for the federation trust.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _DomainName_ parameter specifies the domain name for which the cryptographically secure string is generated. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Thumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the thumbprint of an existing certificate. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

