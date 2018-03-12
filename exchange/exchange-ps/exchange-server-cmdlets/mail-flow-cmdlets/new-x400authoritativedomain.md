---
title: "New-X400AuthoritativeDomain"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 999d149b-0e68-4f19-9d40-06d21b3fb1c0
description: "This cmdlet is available only in on-premises Exchange."
---

# New-X400AuthoritativeDomain

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-X400AuthoritativeDomain** cmdlet to create and specify the X.400 authoritative domain for the organization. The X.400 authoritative domain defines the standard fields for the namespace appended to the recipient identity for all mailboxes assigned an X.400 address.
  
```
New-X400AuthoritativeDomain -Name <String> -X400DomainName <X400Domain> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]] [-X400ExternalRelay <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the X.400 authoritative domain Sales in the private domain Contoso, which is under the administrative domain Fabrikam.
  
```
New-X400AuthoritativeDomain -Name Sales -X400DomainName "C=US;A=Fabrikam;P=Contoso;O=Sales"
```

### Example 2

This example creates an external relay domain for the X.400 namespace Europe organizational unit (OU) under the Sales organization in the private domain Contoso, which is under the administrative domain Fabrikam.
  
```
New-X400AuthoritativeDomain -Name "Sales Europe" -X400DomainName "C=US;A=Fabrikam;P=Contoso;O=Sales;OU1=Europe" -X400ExternalRelay: $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

X.400 domain names can only include the following ASCII characters:
  
- A to Z
    
- a to z
    
- 0-9 
    
- These punctuation and special characters: (space) ' () + , - . / : = ?
    
You can use the following X.400 attributes (one each per address):
  
 **country**
  
- Abbreviation: C
    
- Maximum character length: 2
    
 **administrative domain**
  
- Abbreviation: A
    
- Maximum character length: 16
    
 **private domain**
  
- Abbreviation: P
    
- Maximum character length: 16
    
 **organization name**
  
- Abbreviation: O
    
- Maximum character length: 64
    
 **organizational unit name**
  
- Abbreviation: OU1 to OU4
    
- Maximum character length: 32
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name for the X.400 authoritative domain. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _X400DomainName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.X400Domain  <br/> | The _X400DomainName_ parameter specifies the X.400 namespace, which can only include the X.400 organizational components. Specifically, only the following attribute types are supported: <br/> **C** (Country) <br/> **A** (ADMD) <br/> **P** (PRMD) <br/> **O** (Organization) <br/> **OU1** (Organization unit 1) <br/> **OU2** (Organization unit 2) <br/> **OU3** (Organization unit 3) <br/> **OU4** (Organization unit 4) <br/>  Separate the address attributes with semicolons and enclose the entire address in quotation marks (for example, `"C=US;A=att;P=Contoso;O=Sales"`).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _X400ExternalRelay_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _X400ExternalRelay_ parameter specifies authoritative domain an external relay domain. If you set the _X400ExternalRelay_ parameter to `$true`, Microsoft Exchange routes email to the external address and doesn't treat resolution failures to this subdomain as an error.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

