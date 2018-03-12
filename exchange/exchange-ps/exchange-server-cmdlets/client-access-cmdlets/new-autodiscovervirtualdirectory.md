---
title: "New-AutodiscoverVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a0e22a98-2cc1-460b-870e-bf492cda54b4
description: "This cmdlet is available only in on-premises Exchange."
---

# New-AutodiscoverVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-AutodiscoverVirtualDirectory** cmdlet to create Autodiscover virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-AutodiscoverVirtualDirectory [-ApplicationRoot <String>] [-AppPoolId <String>] [-BasicAuthentication <$true | $false>] [-Confirm [<SwitchParameter>]] [-DigestAuthentication <$true | $false>] [-DomainController <Fqdn>] [-ExtendedProtectionFlags <MultiValuedProperty>] [-ExtendedProtectionSPNList <MultiValuedProperty>] [-ExtendedProtectionTokenChecking <None | Allow | Require>] [-OAuthAuthentication <$true | $false>] [-Path <String>] [-Role <ClientAccess | Mailbox>] [-Server <ServerIdParameter>] [-WebSiteName <String>] [-WhatIf [<SwitchParameter>]] [-WindowsAuthentication <$true | $false>] [-WSSecurityAuthentication <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the virtual directory autodiscover under the website autodiscover.contoso.com and requires that the user connect using Integrated Windows authentication or Digest authentication.
  
```
New-AutodiscoverVirtualDirectory -WebSiteName "autodiscover.contoso.com" -WindowsAuthentication $true -DigestAuthentication $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

If your organization has multiple email domains and each requires its own Autodiscover site and corresponding virtual directory, use the **New-AutodiscoverVirtualDirectory** cmdlet to create an Autodiscover virtual directory under a new website.
  
> [!NOTE]
> When you're creating an Autodiscover virtual directory, we recommend that you enable Secure Sockets Layer (SSL) for the Autodiscover service. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplicationRoot_ <br/> |Optional  <br/> |System.String  <br/> |The _ApplicationRoot_ parameter specifies the metabase path of the virtual directory. By default, this path is the same as the website in which the virtual directory is created. <br/> |
| _AppPoolId_ <br/> |Optional  <br/> |System.String  <br/> |The _AppPoolId_ parameter specifies the IIS application pool in which the virtual directory runs. We recommend that you leave this parameter at its default setting. <br/> |
| _BasicAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _BasicAuthentication_ parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Basic authentication is enabled. This is the default value.  <br/>  `$false`: Basic authentication is disabled.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DigestAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DigestAuthentication_ parameter specifies whether Digest authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Digest authentication is enabled.  <br/>  `$false`: Digest authentication is disabled. This is the default value.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExtendedProtectionFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExtendedProtectionFlags_ parameter specifies custom settings for Extended Protection for Authentication on the virtual directory. Valid values are: <br/>  `None`: This is the default setting.  <br/>  `AllowDotlessSPN`: Required if you want to use Service Principal Name (SPN) values that don't contain FQDNs (for example,  `HTTP/ContosoMail` instead of `HTTP/mail.contoso.com`). You specify SPNs with the _ExtendedProtectionSPNList_ parameter. This setting makes Extended Protection for Authentication less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel. <br/>  `NoServiceNameCheck`: The SPN list isn't checked to validate a channel binding token. This setting makes Extended Protection for Authentication less secure. We generally don't recommend this setting.  <br/>  `Proxy`: A proxy server is responsible for terminating the SSL channel. To use this setting, you need to register an SPN by using the _ExtendedProtectionSPNList_ parameter. <br/>  `ProxyCoHosting`: HTTP and HTTPS traffic may be accessing the virtual directory, and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.  <br/> |
| _ExtendedProtectionSPNList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExtendedProtectionSPNList_ parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are: <br/>  `$null`: This is the default value.  <br/> **Single SPN or comma delimited list of valid SPNs**: The SPN value format is  `<protocol>/<FQDN>`. For example,  `HTTP/mail.contoso.com`. To add an SPN that's not an FQDN (for example,  `HTTP/ContosoMail`), you also need to use the  `AllowDotlessSPN` value for the _ExtendedProtectionFlags_ parameter. <br/> |
| _ExtendedProtectionTokenChecking_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ExtendedProtectionTokenCheckingMode  <br/> | The _ExtendedProtectionTokenChecking_ parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are: <br/>  `None`: Extended Protection for Authentication isn't be used on the virtual directory. This is the default value.  <br/>  `Allow`: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication will work, but may not be as secure as connections that use Extended Protection for Authentication.  <br/>  `Require`: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the _ExtendedProtectionSPNList_ parameter. <br/> **Note**:  <br/>  If you use the value `Allow` or `Require`, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the _ExtendedProtectionSPNList_ parameter. <br/> |
| _OAuthAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _OAuthAuthentication_ parameter specifies whether OAuth authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: OAuth authentication is enabled. This is the default value.  <br/>  `$false`: OAuth authentication is disabled.  <br/> |
| _Path_ <br/> |Optional  <br/> |System.String  <br/> |The _Path_ parameter specifies the file system path of the virtual directory. We recommend using this parameter only when you need to use a custom location for the virtual directory files. The default value is blank ( `$null`), which indicates the default location is used.  <br/> |
| _Role_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.SystemConfigurationTasks.VirtualDirectoryRole  <br/> | The _Role_ parameter species the configuration for the virtual directory. Valid values are: <br/>  `ClientAccess`: Configure the virtual directory for the Client Access (frontend) services on the Mailbox server.  <br/>  `Mailbox`: Configure the virtual directory for the backend services on the Mailbox server.  <br/>  Client connections are proxied from the Client Access services to the backend services on local or remote Mailbox servers. Clients don't connect directly to the backend services. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/> |
| _WebSiteName_ <br/> |Optional  <br/> |System.String  <br/> |The _WebSiteName_ parameter specifies the name of the IIS website under which the virtual directory is created. You don't need to use this parameter to create the virtual directory under the default website. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _WindowsAuthentication_ parameter specifies whether Integrated Windows authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Integrated Windows authentication is enabled. This is the default value.  <br/>  `$false`: Integrated Windows authentication is disabled.  <br/> |
| _WSSecurityAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _WSSecurityAuthentication_ parameter specifies whether WS-Security (Web Services Security) authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: WS-Security authentication is enabled. This is the default value.  <br/>  `$false`: WS-Security authentication is disabled.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

