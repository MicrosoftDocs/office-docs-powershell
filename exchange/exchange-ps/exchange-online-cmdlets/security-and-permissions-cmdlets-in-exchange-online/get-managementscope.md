---
title: "Get-ManagementScope"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a14e4ca3-2035-4959-a55f-efc50685a224
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ManagementScope

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ManagementScope** cmdlet to return a list of management scopes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ManagementScope [-Identity <ManagementScopeIdParameter>] [-DomainController <Fqdn>] [-Exclusive <$true | $false>] [-Orphan <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves all the management scopes that start with the string Redmond.
  
```
Get-ManagementScope Redmond*
```

### Example 2

This example retrieves the Redmond Servers Scope using the **Get-ManagementScope** cmdlet and pipes the output to the **Format-List** cmdlet. For more information about the **Format-List** cmdlet, see[Working with Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
```
Get-ManagementScope "Redmond Servers Scope" | Format-List
```

### Example 3

This example retrieves a list of management scopes that aren't associated with any role assignments.
  
```
Get-ManagementScope -Orphan
```

### Example 4

This example retrieves a list of exclusive scopes.
  
```
Get-ManagementScope -Exclusive $True
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can retrieve one scope or many, retrieve only scopes that aren't associated with management role assignments, or retrieve scopes that are exclusive or regular scopes.
  
For more information about regular and exclusive scopes, see [Understanding Management Scopes](http://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Exclusive_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Exclusive_ parameter specifies whether exclusive scopes should be returned. If the _Exclusive_ parameter isn't specified, regular scopes and exclusive scopes are returned. If the _Exclusive_ parameter is set to `$True`, only exclusive scopes are returned. If the  _Exclusive_ parameter is set to `$False`, only regular scopes are returned. The valid values are  `$True` and `$False`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The  _Identity_ parameter specifies the name of the management scope to return. If the management scope name contains spaces, enclose it in quotation marks ("). <br/> |
| _Orphan_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Orphan_ parameter returns only the management scopes that aren't associated with role assignments. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

