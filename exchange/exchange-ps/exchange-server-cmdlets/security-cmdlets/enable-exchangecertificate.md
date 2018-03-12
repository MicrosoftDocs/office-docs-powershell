---
title: "Enable-ExchangeCertificate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3536f005-d0c4-4745-aec2-55836d86f5a0

description: "This cmdlet is available only in on-premises Exchange."
---

# Enable-ExchangeCertificate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Enable-ExchangeCertificate** cmdlet to enable an existing certificate on the Exchange server for Exchange services such as Internet Information Services (IIS), SMTP, POP, IMAP, and Unified Messaging (UM). Once you enable a certificate for a service, you can't disable it.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-ExchangeCertificate -Thumbprint <String> [-Server <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables a certificate for POP, IMAP, SMTP, and IIS services.
  
```
Enable-ExchangeCertificate -Thumbprint 5113ae0233a72fccb75b1d0198628675333d010e -Services POP,IMAP,SMTP,IIS
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Enable-ExchangeCertificate** cmdlet enables certificates by updating the metadata that's stored with the certificate. To enable an existing certificate to work with additional Exchange services, use this cmdlet to specify the services.
  
> [!IMPORTANT]
> After you run the **Enable-ExchangeCertificate** cmdlet, you might need to restart Internet Information Services (IIS). In some scenarios, Exchange might continue to use the previous certificate for encrypting and decrypting the cookie that's used for Outlook on the web (formerly known as Outlook Web App) authentication. We recommend restarting IIS in environments that use Layer 4 load balancing.> There are many factors to consider when you configure certificates for Transport Layer Security (TLS) and Secure Sockets Layer (SSL) services. You need to understand how these factors might affect your overall configuration. For more information, see **Digital certificates and encryption in Exchange 2016**. > Secure Sockets Layer (SSL) is being replaced by Transport Layer Security (TLS) as the protocol that's used to encrypt data sent between computer systems. They're so closely related that the terms "SSL" and "TLS" (without versions) are often used interchangeably. Because of this similarity, references to "SSL" in Exchange topics, the Exchange admin center, and the Exchange Management Shell have often been used to encompass both the SSL and TLS protocols. Typically, "SSL" refers to the actual SSL protocol only when a version is also provided (for example, SSL 3.0). To find out why you should disable the SSL protocol and switch to TLS, check out [Protecting you against the SSL 3.0 vulnerability](https://blogs.office.com/2014/10/29/protecting-ssl-3-0-vulnerability/). 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Services_ <br/> |Required  <br/> |Microsoft.Exchange.Management.SystemConfigurationTasks.AllowedServices  <br/> | The _Services_ parameter specifies the Exchange services that the certificate is enabled for. Valid values are: <br/>  `Federation`: Don't use this command to enable a certificate for federation. Creating or modifying a federation trust enables or modifies how certificates are used for federation. You manage the certificates that used for federation trusts with the **New-FederationTrust** and **Set-FederationTrust** cmdlets. <br/>  `IIS`: By default, when you enable a certificate for IIS, the "require SSL" setting is configured on the default web site in IIS. To prevent this change, use the _DoNotRequireSsl_ switch. <br/>  `IMAP`: Don't enable a wildcard certificate for the IMAP4 service. Instead, use the **Set-ImapSettings** cmdlet to configure the FQDN that clients use to connect to the IMAP4 service. <br/>  `POP`: Don't enable a wildcard certificate for the POP3 service. Instead, use the **Set-PopSettings** cmdlet to configure the FQDN that clients use to connect to the POP3 service. <br/>  `SMTP`: When you enable a certificate for SMTP, you're prompted to replace the default Exchange self-signed certificate that's used to encrypt SMTP traffic between internal Exchange. Typically, you don't need to replace the default certificate with a certificate from a commercial CA for the purpose of encrypting internal SMTP traffic. If you want to replace the default certificate without the confirmation prompt, use the  `Force` switch. <br/>  `UM`: You can only enable a certificate for the UM service when the _UMStartupMode_ parameter on the **Set-UMService** cmdlet is set to `TLS` or `Dual`. If the _UMStartupMode_ parameter is set to the default value `TCP`, you can't enable the certificate for the UM service.  <br/>  `UMCallRouter`: You can only enable a certificate for the UM Call Router service when the _UMStartupMode_ parameter on the **Set-UMCallRouterService** cmdlet is set to `TLS` or `Dual`. If the _UMStartupMode_ parameter is set to the default value `TCP`, you can't enable the certificate for the UM Call Router service.  <br/>  You can specify multiple values separated by commas. <br/> > [!NOTE]>  The values that you specify with this parameter are additive. When you enable a certificate for one or more services, any existing services remain in the **Services** property, and you can't remove the existing services. Instead, configure another certificate for the services, and then remove the certificate that you don't want to use.>  Different services have different certificate requirements. For example, some services may require a server name in the certificate's **Subject Name** or **Subject Alternative Name** fields, but other services may require an FQDN. Verify that the certificate supports the services that you want to configure.          |
| _Thumbprint_ <br/> |Required  <br/> |System.String  <br/> |The _Thumbprint_ parameter specifies the certificate that you want to configure. You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/> The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _DoNotRequireSsl_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DoNotRequireSsl_ switch prevents the command from enabling the "require SSL" setting on the default web site when you enable the certificate for IIS. You don't need to specify a value with this switch. <br/> If you don't use this switch, and you use the _Services_ parameter to enable the certificate for IIS, the command enables the "require SSL" setting for the default web site in IIS. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> By default, when you enable a certificate for SMTP, the command prompts you to replace the existing certificate that's enabled for SMTP, which is likely the default Exchange self-signed certificate.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExchangeCertificateIdParameter  <br/> | The _Identity_ parameter specifies the certificate that you want to configure. Valid values are: <br/>  `<ServerNameorFQDN>\<Thumbprint>` <br/>  `<Thumbprint>` <br/>  You can find the thumbprint value by using the **Get-ExchangeCertificate** cmdlet. <br/>  You can't use this parameter with the _Server_ parameter. <br/>  The _Thumbprint_ parameter, not the _Identity_ parameter, is the positional parameter for this cmdlet. Therefore, when you specify a thumbprint value by itself, the command uses that value for the _Thumbprint_ parameter. <br/> |
| _NetworkServiceAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _NetworkServiceAllowed_ switch gives the built-in Network Service account permission to read the certificate's private key without enabling the certificate for SMTP. You don't need to specify a value with this switch. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can't use this parameter with the _Identity_ parameter, but you can use it with the _Thumbprint_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

