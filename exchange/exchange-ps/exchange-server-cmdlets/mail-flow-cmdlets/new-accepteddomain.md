---
title: "New-AcceptedDomain"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 08bcaaec-51e3-447d-b3bf-406a705c64b4
description: "This cmdlet is available only in on-premises Exchange."
---

# New-AcceptedDomain

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-AcceptedDomain** cmdlet to create an accepted domain in your organization. Anaccepted domain is any SMTP namespace for which an Exchange organization sends and receives email.
  
```
New-AcceptedDomain -DomainName <SmtpDomainWithSubdomains> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-DomainType <Authoritative | ExternalRelay | InternalRelay>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the new authoritative accepted domain Contoso.
  
```
New-AcceptedDomain -DomainName Contoso.com -DomainType Authoritative -Name Contoso
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpDomainWithSubdomains  <br/> |The _DomainName_ parameter specifies the SMTP domain that you want to establish as an accepted domain. Valid input for the _DomainName_ parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: `*.contoso.com`.  <br/> However, you can't embed a wildcard character, as shown in the following example:  `domain.*.contoso.com`. The domain name string may not contain more than 256 characters.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for the accepted domain object. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _DomainType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AcceptedDomainType  <br/> |The _DomainType_ parameter specifies the type of accepted domain that you want to configure. Valid values are `Authoritative`,  `InternalRelay`, or  `ExternalRelay`. You must set at least one value.  <br/> In an authoritative domain, messages are delivered to a recipient that has a domain account in your Exchange organization. In an internal relay domain, messages are relayed to a server outside your Exchange organization, but still under the authority of your company or IT department. Use the internal relay domain if you want to treat the messages to this domain as internal messages. In an external relay domain, messages are relayed to an email server, outside your organization, which you don't control.  <br/> The default value is  `Authoritative`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

