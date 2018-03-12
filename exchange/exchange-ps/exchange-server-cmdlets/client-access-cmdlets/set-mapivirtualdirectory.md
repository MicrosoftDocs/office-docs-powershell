---
title: "Set-MapiVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c9308fe6-3b61-4d99-a5f2-ef47abbc7656
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-MapiVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-MapiVirtualDirectory** cmdlet to modify Messaging Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.
  
```
Set-MapiVirtualDirectory -Identity <VirtualDirectoryIdParameter> [-ApplyDefaults <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExternalUrl <Uri>] [-IISAuthenticationMethods <MultiValuedProperty>] [-InternalUrl <Uri>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example makes the following configuration changes to the MAPI virtual directory on the default web site of the server named ContosoMail:
  
- **Internal URL**: https://contoso/mapi.
    
- **IIS authentication methods**: NTLM, Negotiate, and OAuth.
    
```
Set-MapiVirtualDirectory -Identity "ContosoMail\mapi (Default Web Site)" -InternalUrl https://contoso.com/mapi -IISAuthenticationMethods NTLM,Negotiate,OAuth
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter  <br/> | The _Identity_ parameter specifies the MAPI virtual directory that you want to configure. <br/>  You can use any value that uniquely identifies the virtual directory. For example: <br/>  Name or `<Server>\Name` <br/>  Distinguished name (DN) <br/>  GUID <br/>  The **Name** value uses the syntax " `<VirtualDirectoryName> (<WebsiteName>)`" from the properties of the virtual directory. You can specify the wildcard character (*) instead of the default website by using the syntax  `<VirtualDirectoryName>*`.  <br/> |
| _ApplyDefaults_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ApplyDefaults_ switch specifies whether to apply the correct defaults to the related internal IIS application settings. Typically, this switch is used only by Exchange setup during the installation of Exchange Cumulative Updates or Service Packs, and you shouldn't need to use it. <br/> This switch doesn't affect the values you configure by using the _IISAuthenticationMethods_, _InternalUrl_ or _ExternalUrl_ parameters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ExternalURL_ parameter specifies the URL that's used to connect to the virtual directory from outside the firewall. <br/> This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax  `https://<Domain Name>/mapi`.  <br/> When you use the _InternalUrl_ or _ExternalUrl_ parameters, you need to specify one or more authentication values by using the _IISAuthenticationMethods_ parameter. <br/> |
| _IISAuthenticationMethods_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _IISAuthenticationMethods_ parameter specifies the authentication methods that are enabled on the virtual directory in Internet Information Services (IIS). Valid values are: <br/>  `Basic` <br/>  `Negotiate` <br/>  `NTLM` <br/>  `OAuth` <br/>  You can specify multiple values separated by commas. <br/>  The default values are `NTLM`,  `OAuth`, and  `Negotiate`. We recommend that you always have the virtual directory configured for  `OAuth`.  <br/> |
| _InternalUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The _InternalURL_ parameter specifies the URL that's used to connect to the virtual directory from inside the firewall. <br/> This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax  `https://<Domain Name>/mapi`.  <br/> When you use the _InternalUrl_ or _ExternalUrl_ parameters, you need to specify one or more authentication values by using the _IISAuthenticationMethods_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

