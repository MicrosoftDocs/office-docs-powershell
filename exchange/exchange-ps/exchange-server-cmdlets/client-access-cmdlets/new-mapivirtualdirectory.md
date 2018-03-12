---
title: "New-MapiVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: acb5be3d-f42b-4685-ba2a-680731281edf
description: "This cmdlet is available only in on-premises Exchange."
---

# New-MapiVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-MapiVirtualDirectory** cmdlet to create Messaging Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MapiVirtualDirectory [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExternalUrl <Uri>] [-IISAuthenticationMethods <MultiValuedProperty>] [-InternalUrl <Uri>] [-Server <ServerIdParameter>] [-WebSiteName <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new MAPI virtual directory that has the following configuration:
  
- **Internal URL**: https://contoso.com/mapi
    
- **IIS authentication methods**: NTLM, Negotiate, and OAuth.
    
```
New-MapiVirtualDirectory -InternalUrl https://contoso.com/mapi -IISAuthenticationMethods NTLM,Negotiate,OAuth
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ExternalURL_ parameter specifies the URL that's used to connect to the virtual directory from outside the firewall. <br/> This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax  `https://<Domain Name>/mapi`.  <br/> When you use the _InternalUrl_ or _ExternalUrl_ parameters, you need to specify one or more authentication values by using the _IISAuthenticationMethods_ parameter. <br/> |
| _IISAuthenticationMethods_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _IISAuthenticationMethods_ parameter specifies the authentication methods that are enabled on the virtual directory in Internet Information Services (IIS). Valid values for this parameter are: <br/>  Basic <br/>  Negotiate <br/>  NTLM <br/>  `OAuth` <br/>  You can specify multiple values separated by commas. <br/>  The default values are `NTLM`,  `OAuth`, and  `Negotiate`. We recommend that you always have the virtual directory configured for  `OAuth`.  <br/> |
| _InternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _InternalURL_ parameter specifies the URL that's used to connect to the virtual directory from inside the firewall. <br/> This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax  `https://<Domain Name>/mapi`.  <br/> When you use the _InternalUrl_ or _ExternalUrl_ parameters, you need to specify one or more authentication values by using the _IISAuthenticationMethods_ parameter. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/> |
| _WebSiteName_ <br/> |Optional  <br/> |System.String  <br/> |The _WebSiteName_ parameter specifies the name of the IIS website under which the virtual directory is created. You don't need to use this parameter to create the virtual directory under the default website. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

