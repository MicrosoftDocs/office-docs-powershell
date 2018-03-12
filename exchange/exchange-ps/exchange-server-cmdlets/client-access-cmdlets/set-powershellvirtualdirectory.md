---
title: "Set-PowerShellVirtualDirectory"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8546bd54-892f-422e-9fc9-2c4293e2fd01
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-PowerShellVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-PowerShellVirtualDirectory** cmdlet to modify existing Windows PowerShell virtual directoriesthat are use in Internet Information Services (IIS) on Exchange servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-PowerShellVirtualDirectory -Identity <VirtualDirectoryIdParameter> [-BasicAuthentication <$true | $false>] [-CertificateAuthentication <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExternalUrl <Uri>] [-InternalUrl <Uri>] [-RequireSSL <$true | $false>] [-WhatIf [<SwitchParameter>]] [-WindowsAuthentication <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the external URL of the Contoso Windows PowerShell virtual directory.
  
```
Set-PowerShellVirtualDirectory "Contoso (default Web site)" -ExternalUrl "http://www.contoso.com/powershell"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Although it's possible to modify a Windows PowerShell virtual directory, we recommend that you only do so at the request of Microsoft Customer Service and Support.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter  <br/> |The _Identity_ parameter specifies the Windows PowerShell virtual directory that you want to modify. <br/> |
| _BasicAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _BasicAuthentication_ parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Basic authentication is enabled. This is the default value.  <br/>  `$false`: Basic authentication is disabled.  <br/> |
| _CertificateAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _CertificateAuthentication_ parameter specifies whether certificate authentication is enabled on the Windows PowerShell virtual directory. The valid values are `$true` and `$false`. The default value is  `$false`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ExternalURL_ parameter specifies the URL that's used to connect to the virtual directory from outside the firewall. <br/> |
| _InternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _InternalURL_ parameter specifies the URL that's used to connect to the virtual directory from inside the firewall. <br/> |
| _RequireSSL_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _RequireSSL_ parameter specifies whether the Windows PowerShell virtual directory should require that the client connection be made using Secure Sockets Layer (SSL). The valid values are `$true` and `$false`. The default value is  `$true`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsAuthentication_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _WindowsAuthentication_ parameter specifies whether Integrated Windows authentication is enabled on the virtual directory. Valid values are: <br/>  `$true`: Integrated Windows authentication is enabled. This is the default value.  <br/>  `$false`: Integrated Windows authentication is disabled.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

