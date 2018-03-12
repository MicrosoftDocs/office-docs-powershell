---
title: "Get-ExchangeCertificate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e368589a-6510-4209-9f10-171d1990cd7d
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ExchangeCertificate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ExchangeCertificate** cmdlet to view Exchange certificates that are installed on Exchange servers. This cmdlet returns Exchange self-signed certificates, certificates that were issued by a certification authority, and pending certificate requests (also known as certificate signing requests or CSRs).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ExchangeCertificate [-Server <ServerIdParameter>] [-Thumbprint <String>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Exchange certificates and pending certificate requests on the server named Mailbox01.
  
```
Get-ExchangeCertificate -Server Mailbox01
```

### Example 2

This example returns detailed information for the specified certificate.
  
```
Get-ExchangeCertificate -Thumbprint 0271A7F1CA9AD8A27152CCAE044F968F068B14B8 | Format-List
```

### Example 3

This example returns all available information for the specified certificate.
  
```
Get-ExchangeCertificate -Thumbprint 0271A7F1CA9AD8A27152CCAE044F968F068B14B8 | Format-List *
```

### Example 4

This example shows which certificate Exchange will select for the domain name mail.contoso.com. A Send connector or Receive connector selects the certificate to use based on the fully qualified domain name (FQDN) of the connector. If you have multiple certificates with the same FQDN, you can see which certificate Exchange will select by using the _DomainName_ parameter to specify the FQDN. The first certificate returned is the certificate that Exchange will select.
  
```
Get-ExchangeCertificate -DomainName mail.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

By default, this cmdlet returns the following certificate properties in the summary list view:
  
- **Thumbprint**: The unique digest of the certificate data. An example thumbprint value is  `78E1BE82F683EE6D8CB9B9266FC1185AE0890C41`.
    
- **Services**: The Exchange services that the certificate is assigned to by using the **Enable-ExchangeCertificate** cmdlet. Values are `None`,  `Federation`,  `IIS`,  `IMAP`,  `POP`,  `SMTP`,  `UM`, and  `UMCallRouter`. You'll see the value  `None` in certificates that aren't used with Exchange (for example, the `WMSvc-<ServerName>` certificate that's used for the IIS Web Management Service).
    
- **Subject**: Contains the X.500 value in the certificate's **Subject Name** field. The important part is the `CN=` value.
    
If you append  `| Format-List` to the command, the cmdlet returns these additional certificate properties:
  
- **AccessRules**: The host names or FQDNs in the certificate's **Subject Alternative Name** field.
    
- **CertificateDomains**: The host names or FQDNs in the certificate's **Subject Alternative Name** field.
    
- **HasPrivateKey**: Whether or not the certificate contains a private key.
    
- **IsSelfSigned**: Whether or not the certificate is self-signed (not issued by a certification authority).
    
- **Issuer**: Who issued the certificate.
    
- **NotAfter**: The certificate expiration date.
    
- **NotBefore**: The certificate issue date.
    
- **PublicKeySize**: The size of the public key in bytes.
    
- **RootCAType**: The type of CA that signed the certificate. Values are  `None` (this value is found on the Microsoft Exchange Server Auth Certificate, and also new self-signed certificates that you create), `ThirdParty`,  `Enterprise`,  `Registry` (this value is found on Exchange self-signed certificates), `GroupPolicy`, or  `Unknown` (this value is found on pending certificate requests).
    
- **SerialNumber**: The unique serial number of the certificate.
    
- **Status**: The status of the certificate. Values are  `DateInvalid`,  `Invalid`,  `PendingRequest`,  `RevocationCheckFailure`,  `Revoked`,  `Unknown`,  `Untrusted` or `Valid`
    
If you append  `| Format-List *` to the command, the cmdlet returns these additional certificate properties:
  
- **Archived**
    
- **CertificateRequest**: This property contains the hash value of the certificate request.
    
- **DnsNameList**
    
- **EnhancedKeyUsageList**: Typically, this value is  `Server Authentication (1.3.6.1.5.5.7.3.1)`.
    
- **Extensions**
    
- **FriendlyName**
    
- **Handle**
    
- **Identity**: This value is  `<ServerFQDN>\<Thumbprint>`
    
- **IISServices**
    
- **IssuerName**: Typically, this value is  `System.Security.Cryptography.X509Certificates.X500DistinguishedName`.
    
- **KeyIdentifier**
    
- **PrivateKey**: Typically, this value is  `System.Security.Cryptography.RSACryptoServiceProvider`.
    
- **PrivateKeyExportable**: If this value is  `True`, you can export the certificate from the server.
    
- **PublicKey**: Typically, this value is  `System.Security.Cryptography.RSACryptoServiceProvider`.
    
- **RawData**
    
- **SendAsTrustedIssuer**
    
- **ServicesStringForm**
    
- **SignatureAlgorithm**: Typically, this value is  `System.Security.Cryptography.Oid`.
    
- **SubjectKeyIdentifier**
    
- **SubjectName**: Typically, this value is  `System.Security.Cryptography.X509Certificates.X500DistinguishedName`.
    
- **Version**: Typically, this value is 3.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _DomainName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _DomainName_ parameter filters the results by the fully qualified domain name (FQDN) or server name values in the **Subject Name** or the **Subject Alternative Name** fields. You can specify multiple values separated by commas. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExchangeCertificateIdParameter  <br/> | The _Identity_ parameter specifies the certificate that you want to view. Valid values are: <br/>  `<ServerNameorFQDN>\<Thumbprint>` <br/>  `<Thumbprint>` <br/>  You can't use this parameter with the _Server_ parameter. <br/>  The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _Instance_ <br/> |Optional  <br/> |System.Security.Cryptography.X509Certificates.X509Certificate2  <br/> |The _Instance_ parameter is no longer used and will be deprecated. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can't use this parameter with the _Identity_ parameter, but you can use it with the _Thumbprint_ parameter, or by itself. <br/> |
| _Thumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the thumbprint value of the certificate that you want to view. <br/> The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

