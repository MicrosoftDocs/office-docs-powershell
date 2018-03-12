---
title: "Import-ExchangeCertificate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c1a98e97-e58a-49c8-a44d-948b2fc07876
description: "This cmdlet is available only in on-premises Exchange."
---

# Import-ExchangeCertificate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Import-ExchangeCertificate** cmdlet to import certificates on Exchange servers. You use this cmdlet to install certificates that were exported from other servers, and to complete pending certification requests (also known as certificate signing requests or CSRs) from certification authorities (CAs).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Import-ExchangeCertificate -FileData <Byte[]> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports the certificate from the PKCS #12 file from  `\\FileServer01\Data\Exported Fabrikam Cert.pfx` to the Exchange server named Mailbox01. This file requires the password `P@ssw0rd1`. This certificate could have been exported from another server, or issued by a certification authority.
  
```
Import-ExchangeCertificate -Server Mailbox01 -FileName" \\FileServer01\Data\Exported Fabrikam Cert.pfx" -Password (ConvertTo-SecureString -String 'P@ssw0rd1' -AsPlainText -Force)
```

### Example 2

This example imports a chain of certificates from the PKCS #7 file  `C:\Certificates\Fabrikam IssuedCert.p7b` on the local Exchange server.
  
```
Import-ExchangeCertificate -FileData ([Byte[]](Get-Content -Path "C:\Certificates\Fabrikam IssuedCert.p7b" -Encoding byte -ReadCount 0))
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **Import-ExchangeCertificate** cmdlet to import the following types of certificate files on an Exchange server:
  
- APKCS #7 certificate or chain of certificates file (.p7b or .p7c) that was issued by a certification authority (CA). PKCS #7 is the Cryptographic Message Syntax Standard, a syntax used for digitally signing or encrypting data using public key cryptography, including certificates. For more information, see [PKCS #7: Cryptographic Message Syntax Standard](https://go.microsoft.com/fwlink/p/?LinkID=510681).
    
- A PKCS #12 certificate file (.cer, .crt, .der, .p12, or .pfx) that contains the private key. PKCS #12 is the Personal Information Exchange Syntax Standard, a file format used to store certificates with corresponding private keys that are protected by a password. The standard is specified by RSA Laboratories. For more information, see the [PKCS #12: Personal Information Exchange Syntax Standard](http://go.microsoft.com/fwlink/p/?LinkID=90249) website.
    
After you import a certificate on an Exchange server, you need to assign the certificate to one or more Exchange services by using the **Enable-ExchangeCertificate** cmdlet.
  
> [!IMPORTANT]
> There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You need to understand how these factors might affect your overall configuration. For more information, see **Digital certificates and encryption in Exchange 2016**. > Secure Sockets Layer (SSL) is being replaced by Transport Layer Security (TLS) as the protocol that's used to encrypt data sent between computer systems. They're so closely related that the terms "SSL" and "TLS" (without versions) are often used interchangeably. Because of this similarity, references to "SSL" in Exchange topics, the Exchange admin center, and the Exchange Management Shell have often been used to encompass both the SSL and TLS protocols. Typically, "SSL" refers to the actual SSL protocol only when a version is also provided (for example, SSL 3.0). To find out why you should disable the SSL protocol and switch to TLS, check out [Protecting you against the SSL 3.0 vulnerability](https://blogs.office.com/2014/10/29/protecting-ssl-3-0-vulnerability/). 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The _FileData_ parameter specifies the contents of the certificate file that you want to import. Typically, you use this parameter for PKCS #7 text certificate files that have .p7b or .p7c filename extensions. These text files contain the text: `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` or `-----BEGIN PKCS7-----` and `-----END PKCS7-----`.  <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> You can use a local path if the certificate file is located on the Exchange server where you're running the command, and this is the same server where you want to install the certificate. Otherwise, use a UNC path ( `\\<Server>\<Share>`).  <br/> If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _FileName_ <br/> |Required  <br/> |System.String  <br/> |The _FileName_ parameter specifies the certificate file that you want to import. Typically, you use this parameter for PKCS #12 binary certificate files that have .cer, .crt, .der, .p12, or .pfx filename extensions. This type of binary certificate file is protected by a password when the file contains the private key or chain of trust. <br/> You can use a local path if the certificate file is located on the Exchange server where you're running the command, and this is the same server where you want to install the certificate. Otherwise, use a UNC path ( `\\<Server>\<Share>`).  <br/> If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _Instance_ <br/> |Required  <br/> |System.String[]  <br/> |The _Instance_ parameter is no longer used and will be deprecated. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _FriendlyName_ <br/> |Optional  <br/> |System.String  <br/> |The _FriendlyName_ parameter specifies a friendly name for the certificate. The value must be less than 64 characters. <br/> The friendly name value is descriptive text, and doesn't affect the functionality of the certificate.  <br/> |
| _Password_ <br/> |Optional  <br/> |System.Security.SecureString  <br/> |The _Password_ parameter specifies the password that's required to import the certificate. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> |
| _PrivateKeyExportable_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PrivateKeyExportable_ parameter specifies whether the certificate has an exportable private key, and controls whether you can export the certificate from this server. Valid values are: <br/>  `$true`: The private key is exportable, so you can export the certificate from this server.  <br/>  `$false`: The private key isn't exportable, so you can't export the certificate from this server. This is the default value.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

