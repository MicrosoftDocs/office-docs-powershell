---
title: "Export-ExchangeCertificate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.custom: httpsfix
ms.assetid: 0fffc597-7b46-4bc3-915c-f00c9eb56b40
description: "This cmdlet is available only in on-premises Exchange."
---

# Export-ExchangeCertificate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Export-ExchangeCertificate** cmdlet to export existing certificates and pending certificate requests (also known as certificate signing requests or CSRs) from Exchange servers.
  
```
Export-ExchangeCertificate -Thumbprint <String> [-Server <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example exports a certificate from the local Exchange server to a file with the following settings:
  
- The certificate that has the thumbprint value  `5113ae0233a72fccb75b1d0198628675333d010e` is exported to the file `C:\Data\HT cert.pfx`.
    
- The exported certificate file is encoded by DER (not Base64).
    
- The password for the certificate file is  `P@ssw0rd1`.
    
```
Export-ExchangeCertificate -Thumbprint 5113ae0233a72fccb75b1d0198628675333d010e -FileName "C:\Data\HT cert.pfx" -BinaryEncoded -Password (ConvertTo-SecureString -String 'P@ssw0rd1' -AsPlainText -Force)
```

### Example 2

This example exports a pending certificate request to a file with the following settings:
  
- The pending certificate request that has the thumbprint value  `72570529B260E556349F3403F5CF5819D19B3B58` on the Exchange server named Mailbox01 is exported to the file `\\FileServer01\Data\Fabrikam.req`.
    
- The exported certificate request file is Base64 encoded, so the information that's written to the file is also displayed onscreen.
    
```
Export-ExchangeCertificate -Thumbprint 72570529B260E556349F3403F5CF5819D19B3B58 -Server Mailbox01 -FileName "\\FileServer01\Data\Fabrikam.req"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Export-ExchangeCertificate** cmdlet creates the following types of files:
  
- **Certificate files**: When you export a certificate, the command creates a PKCS #12 file. PKCS #12 is the Personal Information Exchange Syntax standard specified by RSA Laboratories. For more information, see [PKCS #12: Personal Information Exchange Syntax Standard](https://www.emc.com/emc-plus/rsa-labs/standards-initiatives/pkcs12-personal-information-exchange-syntax-standard.md).
    
    To export a certificate from an Exchange server, the certificate's **PrivateKeyExportable** property needs to have the value `True`. To import an exported certificate on another Exchange server, you need to export the certificate by using the _Password_ parameter to include the private key or chain of trust in the certificate file. The default Microsoft Exchange self-signed certificate or new self-signed certificates that you create in the Exchange admin center or by using the default settings of the **New-ExchangeCertificate** cmdlet aren't exportable, because the private key isn't exportable (the default value of the _PrivateKeyExportable_ parameter is `$false`).
    
- **Certificate request files**: When you export a certificate request, the command creates a PKCS #10 file. PKCS #10 is the Certification Request Syntax standard specified by RFC 2314. For more information, see [PKCS #10: Certification Request Syntax](https://www.ietf.org/rfc/rfc2314.txt).
    
    Typically, you export a certificate request file if you need to resubmit the certificate request to the certification authority. You can't import an exported certificate request on another server.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Thumbprint_ <br/> |Required  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the certificate or certificate request that you want to export. You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/> The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _BinaryEncoded_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BinaryEncoded_ switch encodes the exported certificate or certificate request file by using Distinguished Encoding Rules (DER). You don't need to specify a value with this switch. <br/> Typically, you use this switch when you export a certificate, because you can store the certificate and its private key or chain of trust in a single binary file when you also use the _Password_ parameter. If you don't use this switch, the exported certificate file is Base64 encoded, and you'll need to export any intermediate or root certificates in the chain of trust separately. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _FileName_ <br/> |Optional  <br/> |System.String  <br/> |The _FileName_ parameter specifies the name and path of the exported certificate or certificate request file. You can use a local path if the certificate or certificate request is located on the same Exchange server where you're running the command. Otherwise, use a UNC path ( `\\<Server>\<Share>`). If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExchangeCertificateIdParameter  <br/> | The _Identity_ parameter specifies the certificate or certificate request that you want to export. Valid values are: <br/>  `<ServerNameorFQDN>\<Thumbprint>` <br/>  `<Thumbprint>` <br/>  You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/>  You can't use this parameter with the _Server_ parameter. <br/>  The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _Password_ <br/> |Optional  <br/> |System.Security.SecureString  <br/> |The _Password_ parameter specifies the password for the private key or chain of trust in the exported certificate file. To import the exported certificate file on another server, you need to know the password. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can't use this parameter with the _Identity_ parameter, but you can use it with the _Thumbprint_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

