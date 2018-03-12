---
title: "Set-EcpVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5341a329-71db-4180-ac0e-83515035ae2f
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-EcpVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-EcpVirtualDirectory** cmdlet to modify Exchange Control Panel (ECP) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. The ECP virtual directory manages the Exchange admin center.
  
> [!NOTE]
> The ECP web management interface was introduced in MicrosoftExchange Server 2010. In Exchange Server 2013 and Exchange Server 2016, the EAC virtual directories and the corresponding management cmdlets still use ECP in the name. You can use these cmdlets to manage ECP virtual directories on Exchange 2010, Exchange 2013, and Exchange 2016 servers. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-EcpVirtualDirectory -Identity <VirtualDirectoryIdParameter> [-AdfsAuthentication <$true | $false>] [-AdminEnabled <$true | $false>] [-BasicAuthentication <$true | $false>] [-Confirm [<SwitchParameter>]] [-DigestAuthentication <$true | $false>] [-DomainController <Fqdn>] [-ExtendedProtectionFlags <MultiValuedProperty>] [-ExtendedProtectionSPNList <MultiValuedProperty>] [-ExtendedProtectionTokenChecking <None | Allow | Require>] [-ExternalAuthenticationMethods <MultiValuedProperty>] [-ExternalUrl <Uri>] [-FormsAuthentication <$true | $false>] [-GzipLevel <Off | Low | High | Error>] [-InternalUrl <Uri>] [-OwaOptionsEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]] [-WindowsAuthentication <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables Basic authentication on the default ECP virtual directory on the server named Server01.
  
```
Set-EcpVirtualDirectory -Identity "Server01\ecp (Default Web site)" -BasicAuthentication:$false
```

### Example 2

This example turns off the Internet access to the EAC on server named SErver01.
  
```
Set-EcpVirtualDirectory -Identity "Server01\ecp (Default Web site)" -AdminEnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter  <br/> | The _Identity_ parameter specifies the virtual directory that you want to modify. <br/>  You can use any value that uniquely identifies the virtual directory. For example: <br/>  Name or `<Server>\Name` <br/>  Distinguished name (DN) <br/>  GUID <br/>  The **Name** value uses the syntax " `<VirtualDirectoryName> (<WebsiteName>)`" from the properties of the virtual directory. You can specify the wildcard character (*) instead of the default website by using the syntax  `<VirtualDirectoryName>*`.  <br/>  To manage the first ECP virtual directory created in an Exchange organization, you need touse this cmdlet on the computer that includes the first ECP virtual directory. If you create additional ECP virtual directories, you can manage those remotely. <br/> |
| _AdfsAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AdfsAuthentication_ parameter specifies that the ECP virtual directory allows users to authenticate through Active Directory Federation Services (AD FS) authentication. This parameter accepts `$true` or `$false`. The default value is  `$false`.  <br/> The ADFS authentication settings for **Set-OwaVirtualDirectory** and **Set-EcpVirtualDirectory** are related. You need to set the _AdfsAuthentication_ parameter on **Set-EcpVirtualDirectory** to `$true` before you can set the _AdfsAuthentication_ parameter on **Set-OwaVirtualDirectory** to `$true`. Likewise, you need to set the _AdfsAuthentication_ parameter on **Set-OwaVirtualDirectory** to `$false` before you can set the _AdfsAuthentication_ parameter on **Set-EcpVirtualDirectory** to `$false`.  <br/> |
| _AdminEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AdminEnabled_ parameter specifies that the EAC isn't able to be accessed through the Internet. For more information, see[Turn off Internet Access to the Exchange Administration Center](https://technet.microsoft.com/library/49f4fa77-1722-4703-81c9-8724ae0334fb.aspx). This parameter accepts  `$true` or `$false`.  <br/> |
| _BasicAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _BasicAuthentication_ parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Basic authentication is enabled. This is the default value.  <br/>  `$false`: Basic authentication is disabled.  <br/>  This parameter can be used with the _FormsAuthentication_ parameter or with the _DigestAuthentication_ and _WindowsAuthentication_ parameters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DigestAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DigestAuthentication_ parameter specifies whether Digest authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Digest authentication is enabled.  <br/>  `$false`: Digest authentication is disabled. This is the default value.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExtendedProtectionFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExtendedProtectionFlags_ parameter specifies custom settings for Extended Protection for Authentication on the virtual directory. Valid values are: <br/>  `None`: This is the default setting.  <br/>  `AllowDotlessSPN`: Required if you want to use Service Principal Name (SPN) values that don't contain FQDNs (for example,  `HTTP/ContosoMail` instead of `HTTP/mail.contoso.com`). You specify SPNs with the _ExtendedProtectionSPNList_ parameter. This setting makes Extended Protection for Authentication less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel. <br/>  `NoServiceNameCheck`: The SPN list isn't checked to validate a channel binding token. This setting makes Extended Protection for Authentication less secure. We generally don't recommend this setting.  <br/>  `Proxy`: A proxy server is responsible for terminating the SSL channel. To use this setting, you need to register an SPN by using the _ExtendedProtectionSPNList_ parameter. <br/>  `ProxyCoHosting`: HTTP and HTTPS traffic may be accessing the virtual directory, and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.  <br/> |
| _ExtendedProtectionSPNList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExtendedProtectionSPNList_ parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are: <br/>  `$null`: This is the default value.  <br/> **Single SPN or comma delimited list of valid SPNs**: The SPN value format is  `<protocol>/<FQDN>`. For example,  `HTTP/mail.contoso.com`. To add an SPN that's not an FQDN (for example,  `HTTP/ContosoMail`), you also need to use the  `AllowDotlessSPN` value for the _ExtendedProtectionFlags_ parameter. <br/> |
| _ExtendedProtectionTokenChecking_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ExtendedProtectionTokenCheckingMode  <br/> | The _ExtendedProtectionTokenChecking_ parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are: <br/>  `None`: Extended Protection for Authentication isn't be used on the virtual directory. This is the default value.  <br/>  `Allow`: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication will work, but may not be as secure as connections that use Extended Protection for Authentication.  <br/>  `Require`: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the _ExtendedProtectionSPNList_ parameter. <br/> **Note**:  <br/>  If you use the value `Allow` or `Require`, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the _ExtendedProtectionSPNList_ parameter. <br/> |
| _ExternalAuthenticationMethods_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ExternalAuthenticationMethods_ parameter specifies the authentication methods supported on the Exchange server from outside the firewall. <br/> |
| _ExternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ExternalURL_ parameter specifies the URL that's used to connect to the virtual directory from outside the firewall. <br/> This setting is also important when Secure Sockets Layer (SSL) is used. You need to set this parameter to allow the Autodiscover service to return the URL for the ECP virtual directory.  <br/> |
| _FormsAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _FormsAuthentication_ parameter specifies whether forms-based authentication is enabled on the ECP virtual directory. Valid values are: <br/>  `$true`: Forms authentication is enabled. The _BasicAuthentication_ parameter is set to `$true`, and the _DigestAuthentication_ and _WindowsAuthentication_ parameters are set to `$false`.  <br/>  `$false`: Forms authentication is disabled.  <br/> |
| _GzipLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.GzipLevel  <br/> |The _GzipLevel_ parameter sets Gzip configuration information for the ECP virtual directory. <br/> |
| _InternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ExternalURL_ parameter specifies the URL that's used to connect to the virtual directory from outside the firewall. <br/> This setting is also important when SSL is used. You need to set this parameter to allow the Autodiscover service to return the URL for the ECP virtual directory.  <br/> |
| _OwaOptionsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _OwaOptionsEnabled_ parameter specifies that Outlook on the web Options is enabled for end users. If this parameter is set to `$false`, users aren't able to access Outlook on the web Options. You may want to disable access if your organization uses third-party provider tools. This parameter accepts  `$true` or `$false`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _WindowsAuthentication_ parameter specifies whether Integrated Windows authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Integrated Windows authentication is enabled. This is the default value.  <br/>  `$false`: Integrated Windows authentication is disabled.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

