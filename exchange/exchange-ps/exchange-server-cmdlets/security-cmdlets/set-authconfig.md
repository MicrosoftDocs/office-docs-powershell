---
title: "Set-AuthConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: dfc5be21-3a9c-4888-b1e9-8a308262eb67

description: "This cmdlet is available only in on-premises Exchange."
---

# Set-AuthConfig

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-AuthConfig** cmdlet to modify the authorization configuration for your Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-AuthConfig [-Realm <String>] [-ServiceName <String>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example specifies a new certificate and a date when the certificate will become effective.
  
```
Set-AuthConfig -NewCertificateThumbprint DB821B4FCA2A5DA9593B9DE00C86BC5EA35D0FC0 -NewCertificateEffectiveDate 4/17/2013
```

### Example 2

This example immediately rolls over the certificate configured as the next certificate and makes it the current certificate. You must have installed a certificate marked as the next certificate.
  
```
Set-AuthConfig -PublishCertificate
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-AuthConfig** parameter defines Microsoft Exchange as a partner application for server-to-server authentication with other partner applications such as Microsoft SharePoint 2013 and Microsoft Lync 2013 or Skype for Business Server 2015, including the certificate used for signing tokens. It's generally not required for this configuration to be modified except in some cases where you must use a different certificate instead of the self-signed certificate created by Exchange Setup or to use a new certificate after the old one has expired.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CertificateThumbprint_ <br/> |Required  <br/> |System.String  <br/> |The _CertificateThumbprint_ parameter specifies the thumbprint of the certificate to be used by Exchange for server-to-server authentication. <br/> |
| _ClearPreviousCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ClearPreviousCertificate_ switch clears the certificate saved as the previous certificate in the authorization configuration. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _NewCertificateEffectiveDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _NewCertificateEffectiveDate_ parameter specifies a date when the certificate configured as the next certificate should be used. <br/> |
| _NewCertificateThumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _NewCertificateThumbprint_ parameter specifies the thumbprint of the new certificate to be used as the next certificate in the authorization configuration. <br/> |
| _PublishCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublishCertificate_ switch specifies that the specified certificate be immediately rolled over as the current certificate. The certificate is immediately deployed to all Client Access servers. <br/> |
| _Realm_ <br/> |Optional  <br/> |System.String  <br/> |The _Realm_ parameter specifies a security realm for partner applications. If a service or user presents a token from a domain that's not an accepted domain in the Exchange organization, the token must contain the specified realm to gain access to resources. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Server_ parameter isn't available in this release. <br/> |
| _ServiceName_ <br/> |Optional  <br/> |System.String  <br/> |The _ServiceName_ parameter identifies Microsoft Exchange to other partner applications such as SharePoint 2013. <br/> > [!CAUTION]> Exchange Setup configures the _ServiceName_ parameter with a specific constant value. You shouldn't change this parameter. Changing the _ServiceName_ parameter can result in server-to-server authentication with partner applications not functioning.          |
| _SkipImmediateCertificateDeployment_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipImmediateCertificateDeployment_ switch specifies that the certificate shouldn't be used immediately. We recommend that you don't use this parameter in a production environment. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

