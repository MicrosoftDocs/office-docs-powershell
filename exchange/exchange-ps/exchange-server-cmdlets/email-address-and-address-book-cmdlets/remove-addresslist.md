---
title: "Remove-AddressList"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b628738c-ebbf-4116-ba85-b1dbd273df40
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-AddressList

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-AddressList** cmdlet to remove existing address lists.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-AddressList -Identity <AddressListIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Recursive <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the address list named AddressList1 and all of its child address lists.
  
```
Remove-AddressList -Identity "AddressList1" -Recursive
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Remove-AddressList** cmdlet can be used in conjunction with the **Get-AddressList** cmdlet as follows:
  
- Use the **Get-AddressList** cmdlet to get address list information, and then pipe the output to the **Format-List** cmdlet to get the GUID, distinguished name (DN), or path and name of an existing address list.
    
- Use the **Get-AddressList** cmdlet to get a specific existing address list, and then pipe the output directly to the **Remove-AddressList** cmdlet.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> | The _Identity_ parameter specifies the address list that you want to remove. You can use any value that uniquely identifies the address list. For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Path: (\ _\<Name\>)_ or [ _\<Container\>_\ _\<Name\>_)  <br/>  If the address list has child address lists that you also want to remove, you need to use the _Recursive_ switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Recursive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Recursive_ switch specifies whether to remove all child address lists. You don't need to specify a value for this switch. <br/> If you don't use this switch, and the address list has child address lists, the command will fail.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

