---
title: "New-AuthServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 67539efd-309f-4155-8b8f-c370fe7681b6
description: "This cmdlet is available only in on-premises Exchange."
---

# New-AuthServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-AuthServer** cmdlet to create an authorization server object in Microsoft Exchange and specify its _AuthMetadataUrl_. Exchange honors tokens issued by the authorization server for access by a partner application.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-AuthServer -AuthMetadataUrl <String> [-TrustAnySSLCertificate <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This command creates an authorization server.
  
```
New-AuthServer HRAppAuth -AuthMetadataUrl http://hrappauth.contoso.com/metadata/json/1
```

## Detailed Description
<a name="DetailedDescription"> </a>

Partner applications authorized by Exchange can access their resources after they're authenticated using server-to-server authentication. A partner application can authenticate by using self-issued tokens trusted by Exchange or by using an authorization server trusted by Exchange.
  
The **New-AuthServer** cmdlet creates a trusted authorization server object in Exchange, which allows it to trust tokens issued by the authorization server.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AuthMetadataUrl_ <br/> |Required  <br/> |System.String  <br/> |The _AuthMetadataUrl_ parameter specifies the URL for the Office 365 authorization server for your cloud-based organization. For details, see the Office 365 documentation. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the authorization server. <br/> |
| _Type_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuthServerType  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the authorization server is enabled. Set the parameter to `$false` to prevent authorization tokens issued by this authorization server from being accepted. <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

