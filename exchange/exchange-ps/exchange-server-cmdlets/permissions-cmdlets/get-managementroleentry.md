---
title: "Get-ManagementRoleEntry"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3b58e5dc-0e57-4998-82cb-94dc081f6420
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ManagementRoleEntry

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ManagementRoleEntry** cmdlet to retrieve management role entries that have been configured on management roles.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ManagementRoleEntry -Identity <RoleEntryIdParameter> [-DomainController <Fqdn>] [-Parameters <String[]>] [-PSSnapinName <String>] [-Type <ManagementRoleEntryType[]>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of all the role entries that exist on the Transport Rules management role.
  
```
Get-ManagementRoleEntry "Transport Rules\*"
```

### Example 2

This example retrieves a list of all the role entries that contain the **Get-Recipient** cmdlet.
  
```
Get-ManagementRoleEntry *\Get-Recipient
```

### Example 3

This example retrieves the Tier 2 Help Desk\Set-Mailbox role entry and pipes the output of the **Get-ManagementRoleEntry** cmdlet to the **Format-List** cmdlet. The **Format-List** cmdlet then outputs only the _Name_, _Parameters_, _Role_, and _Type_ properties from the role entry.
  
```
Get-ManagementRoleEntry "Tier 2 Help Desk\Set-Mailbox" | Format-List Name, Parameters, Role, Type
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-ManagementRoleEntry** cmdlet retrieves role entries that have been configured on roles. You can retrieve specific role entries that match specific criteria such as role name, cmdlet name, parameter name, or a combination of each, or role entry type or the associated Windows PowerShell snap-in.
  
For more information about management role entries, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleEntryIdParameter  <br/> |The _Identity_ parameter specifies the role entry to retrieve. You must specify the value of the _Identity_ parameter in the format, < _management role_>\< _role entry name_>, for example, _ExampleRole_\ _Set-Mailbox_.  <br/> For more information about how management role entries work, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).  <br/> You can use the wildcard character (\*) instead of the role, cmdlet name, or both.  <br/> If the role entry name contains spaces, enclose the name in quotation marks (").  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Parameters_ <br/> |Optional  <br/> |System.String[]  <br/> |The _Parameters_ parameter includes only the role entries that contain the parameters specified. You can specify multiple parameters, separated by commas. You can use the wildcard character (*) with partial parameter names to retrieve all parameters that match the value you specify. <br/> This parameter is useful when you use the wildcard character (*) with the value you specify in the _Identity_ parameter. <br/> |
| _PSSnapinName_ <br/> |Optional  <br/> |System.String  <br/> |The _PSSnapinName_ parameter specifies the Windows PowerShell snap-in that contains the role entry to return. Use the **Get-PSSnapin** cmdlet to retrieve a list of available Windows PowerShell snap-ins. <br/> |
| _Type_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Management.ManagementRoleEntryType[]  <br/> |The _Type_ parameter specifies the type of role entry to return. The valid values for the _Type_ parameter are any combination of the following parameters, separated by commas: `Cmdlet`,  `Script`, and  `ApplicationPermission`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

