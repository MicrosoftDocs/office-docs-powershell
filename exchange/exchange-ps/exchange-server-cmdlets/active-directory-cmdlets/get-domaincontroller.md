---
title: "Get-DomainController"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c90cec1b-4aa4-4f94-b547-05af263417f1
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-DomainController

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-DomainController** cmdlet to view a list of domain controllers that exist in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DomainController [-DomainName <Fqdn>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of global catalog servers in the corp.contoso.com domain. Because a different set of credentials are required to access this domain, the **Get-Credential** cmdlet is used to obtain the user name and password from the user.
  
The first command displays a prompt to the user that accepts the user name and password. The credentials are then stored in the  `$UserCredentials` variable. The second command uses the `$UserCredentials` variable for the _Credential_ parameter value. To make the list more readable, the output is piped to the **Format-Table** cmdlet and only the `Name` and `ADSite` properties are displayed.
  
```
$UserCredentials = Get-Credential; Get-DomainController -DomainName corp.contoso.com -Credential $UserCredentials | Format-Table -AutoSize Name, ADSite
```

For more information about pipelining and the **Format-Table** cmdlet, see[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-DomainController** cmdlet is used by the Exchange admin center to populate fields that display domain controller information.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Credential_ <br/> |Optional  <br/> |System.Net.NetworkCredential  <br/> |The _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> If you use the _Forest_ parameter, the credentials are used to access the forest. <br/> |
| _DomainName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainName_ parameter specifies the fully qualified domain name (FQDN) of the domain for which you want to return a list of domain controllers. <br/> |
| _Forest_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _Forest_ parameter specifies the FQDN of the root domain of the forest for which you want to return a list of domain controllers. <br/> |
| _GlobalCatalog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GlobalCatalog_ switch specifies whether the command should return a list of global catalog servers. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

