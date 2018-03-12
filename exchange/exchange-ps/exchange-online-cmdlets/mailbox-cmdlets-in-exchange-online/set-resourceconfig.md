---
title: "Set-ResourceConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/11/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7570aaf0-2cbe-46b6-92ea-cdd704f4eecc
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ResourceConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Set-ResourceConfig** cmdlet to create custom resource properties that you can add to room and equipment mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ResourceConfig [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ResourcePropertySchema <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the custom resource properties  `Room/Whiteboard` and `Equipment/Van`. These values replace any existing custom resource properties that are already configured.
  
```
Set-ResourceConfig -ResourcePropertySchema Room/Whiteboard,Equipment/Van
```

### Example 2

This example adds the custom resource property  `Room/TV` and removes `Equipment/Laptop` without affecting other custom resource properties that are already configured.
  
```
Set-ResourceConfig -ResourcePropertySchema @{Add="Room/TV"; Remove="Equipment/Laptop"}
```

## Detailed Description
<a name="DetailedDescription"> </a>

After you use this cmdlet to create custom resource properties, you use the  _ResourceCustom_ parameter on the **Set-Mailbox** cmdlet to add one or more of those properties to a room or equipment mailbox. For more information, see the _ResourceCustom_ parameter description in[Set-Mailbox](set-mailbox.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ResourcePropertySchema_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ResourcePropertySchema_ parameter specifies the custom resource property that you want to make available to room or equipment mailboxes. This parameter uses the syntax `Room/<Text>` or `Equipment/<Text>` where the `<Text>` value doesn't contain spaces. For example, `Room/Whiteboard` or `Equipment/Van`. You can specify multiple values separated by commas.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

