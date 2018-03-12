---
title: "Remove-ExchangeCertificate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3e007b40-1ef7-4105-ba1b-d2ad33f29cc2
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-ExchangeCertificate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-ExchangeCertificate** cmdlet to remove existing Exchange certificates or pending certificate requests (also known as certificate signing requests or CSRs) from Exchange servers.
  
```
Remove-ExchangeCertificate -Thumbprint <String> [-Server <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the certificate with the specified thumbprint from the local Exchange server.
  
```
Remove-ExchangeCertificate -Thumbprint 5113ae0233a72fccb75b1d0198628675333d010e
```

### Example 2

This example uses the same settings, but removes the certificate from the server named Mailbox01.
  
```
Remove-ExchangeCertificate -Server Mailbox01 -Thumbprint 5113ae0233a72fccb75b1d0198628675333d010e
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can't remove the certificate that's being used. If you want to replace the default certificate for the server with another certificate that has the same fully qualified domain name (FQDN), you must create the new certificate first, and then remove the old certificate.
  
> [!IMPORTANT]
> There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You need to understand how these factors might affect your overall configuration. For more information, see **Digital certificates and encryption in Exchange 2016**. > Secure Sockets Layer (SSL) is being replaced by Transport Layer Security (TLS) as the protocol that's used to encrypt data sent between computer systems. They're so closely related that the terms "SSL" and "TLS" (without versions) are often used interchangeably. Because of this similarity, references to "SSL" in Exchange topics, the Exchange admin center, and the Exchange Management Shell have often been used to encompass both the SSL and TLS protocols. Typically, "SSL" refers to the actual SSL protocol only when a version is also provided (for example, SSL 3.0). To find out why you should disable the SSL protocol and switch to TLS, check out [Protecting you against the SSL 3.0 vulnerability](https://blogs.office.com/2014/10/29/protecting-ssl-3-0-vulnerability/). 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Thumbprint_ <br/> |Required  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the certificate that you want to remove. You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/> The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExchangeCertificateIdParameter  <br/> | The _Identity_ parameter specifies the certificate that you want to remove. Valid values are: <br/>  `<ServerNameorFQDN>\<Thumbprint>` <br/>  `<Thumbprint>` <br/>  You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/>  You can't use this parameter with the _Server_ parameter. <br/>  The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can't use this parameter with the _Identity_ parameter, but you can use it with the _Thumbprint_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

