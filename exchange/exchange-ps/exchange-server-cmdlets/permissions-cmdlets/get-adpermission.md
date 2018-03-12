---
title: "Get-ADPermission"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f20251dc-ab54-4dd5-b80c-de0808fd4dc2
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ADPermission

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ADPermission** cmdlet to get permissions on an Active Directory object.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ADPermission [-User <SecurityPrincipalIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the permissions that have been applied to the user Ed.
  
```
Get-ADPermission -Identity Ed
```

### Example 2

This example returns the permissions that have been granted to the user Chris on the Contoso.com Receive connector.
  
```
Get-ADPermission "Contoso.com" -User Chris
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **ADPermission** cmdlets can be used to directly modify Active Directory access control lists (ACLs). Although some Microsoft Exchange features may continue to use the **ADPermission** cmdlets to manage permissions (for example Send and Receive connectors) Exchange 2013 and later versions no longer use customized ACLs to manage administrative permissions. If you want to grant or deny administrative permissions in Exchange 2013 or later, you need to use Role Based Access Control (RBAC). For more information about RBAC, see **Permissions**. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ADRawEntryIdParameter  <br/> |The _Identity_ parameter specifies the identity of the object for which you're retrieving permissions. You can retrieve the permissions for any Active Directory object using its distinguished name (DN). If the object is an Exchange object, you might be able to use the object's name. If the DN or the object's name contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Owner_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Owner_ switch specifies that the owner of the object specified in the _Identity_ parameter should be returned. If the _Owner_ switch is used, the _User_ parameter can't be used. <br/> |
| _User_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |The _User_ parameter specifies that only the access control entries (ACEs) granted to the specified user on the object specified in the _Identity_ parameter should be returned. If the _User_ parameter is used, the _Owner_ switch can't be used. <br/> If the name of the user contains spaces, enclose the name in quotation marks (").  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

