---
title: "Set-FederationTrust"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 67b2ab23-e868-448f-b5c6-f73c2136223c

description: "This cmdlet is available only in on-premises Exchange."
---

# Set-FederationTrust

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-FederationTrust** cmdlet to modify an existing federation trust.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-FederationTrust -Identity <FederationTrustIdParameter> [-MetadataUrl <Uri>] [-RefreshMetadata <SwitchParameter>] [-Thumbprint <String>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the federation trust Microsoft Federation Gateway to use the certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17 as the next certificate.
  
```
Set-FederationTrust -Identity "Microsoft Federation Gateway" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

### Example 2

This example configures the federation trust Microsoft Federation Gateway to use the next certificate as the current certificate.
  
> [!IMPORTANT]
> Before you configure a federation trust to use the next certificate as the current certificate, you need to use the **Test-FederationTrust** cmdlet to verify that the certificate is available on all Exchange servers.
  
```
Set-FederationTrust -Identity "Microsoft Federation Gateway" -PublishFederationCertificate
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **Set-FederationTrust** cmdlet to manage the certificates used for the federation trust. You can also use the **Set-FederationTrust** cmdlet to refresh the metadata document from the Microsoft Federation Gateway and download its certificate.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplicationUri_ <br/> |Required  <br/> |System.String  <br/> |The _ApplicationUri_ parameter specifies the primary domain used for the federation organization identifier. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.FederationTrustIdParameter  <br/> |The _Identity_ parameter specifies the name of the federation trust being modified. <br/> |
| _PublishFederationCertificate_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublishFederationCertificate_ switch specifies the next certificate as the current certificate for the federation trust and publishes it to the Microsoft Federation Gateway. You don't need to specify a value with this switch. <br/> The certificate is used to encrypt tokens with the Microsoft Federation Gateway.  <br/> > [!CAUTION]> Before setting the next certificate to be used as the current certificate, ensure that the certificate is deployed on all Exchange servers. Use the **Test-FederationCertificate** cmdlet to check the deployment status of the certificate.          |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MetadataUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _MetadataUrl_ parameter specifies the URL where WS-FederationMetadata is published by the Microsoft Federation Gateway. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the federation trust. <br/> |
| _RefreshMetadata_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RefreshMetadata_ switch specifies that the metadata document and certificate is retrieved again from the Microsoft Federation Gateway. <br/> |
| _Thumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the thumbprint of the X.509 certificate to be configured as the next certificate for the federation trust. After the certificate is deployed on all Exchange servers in the organization, you can use the _PublishFederationCertificate_ switch to configure the trust to use this certificate. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

