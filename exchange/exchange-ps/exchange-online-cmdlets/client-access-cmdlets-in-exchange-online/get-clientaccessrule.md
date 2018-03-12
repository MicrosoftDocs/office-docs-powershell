---
title: "Get-ClientAccessRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 11/8/2017
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 4787d6dc-d38b-427a-83f8-7c57d604dff0
description: "Use the Get-ClientAccessRule cmdlet to view client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection."
---

# Get-ClientAccessRule

Use the **Get-ClientAccessRule** cmdlet to view client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ClientAccessRule [-Identity <ClientAccessRuleIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows a summary list of all client access rules.
  
```
Get-ClientAccessRule
```

### Example 2

This example retrieves details about the client access rule named "Block Client Connections from 192.168.1.0/24".
  
```
Get-ClientAccessRule "Block Client Connections from 192.168.1.0/24" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Client access rules are like transport rules for client connections to your organization. You use conditions and exceptions to identify the connections based on the user or properties of the client or the connection, and actions that define what to do with those connections.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessRuleIdParameter  <br/> | The _Identity_ parameter specifies the client access rule that you want to view. You can use any value that uniquely identifies the client access rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

