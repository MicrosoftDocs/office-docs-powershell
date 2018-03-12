---
title: "Update-DatabaseSchema"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2759a44b-d7ae-4ac3-8c79-6f019cecca45
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-DatabaseSchema

This cmdlet is available only in on-premises Exchange. 
  
Use the **Update-DatabaseSchema** cmdlet to upgrade the database schema for one or more databases after an Exchange software update that includes database schema updates has been installed on Mailbox servers in a database availability group (DAG). Some software updates for Exchange may include database schema updates. After such an update has been installed on all members of a DAG, the administrator must run the **Update-DatabaseSchema** cmdlet for each database in the DAG to trigger the database schema update. The in-place database schema upgrade engine ensures that no schema updates occur until all members of the DAG have compatible versions of the software.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-DatabaseSchema -Identity <DatabaseIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example updates the database schema for database DB1.
  
```
Update-DatabaseSchema DB1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Identity_ parameter specifies the mailbox database for which you want to set one or more attributes. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  Name of the mailbox database <br/> |
| _MajorVersion_ <br/> |Required  <br/> |System.UInt16  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MinorVersion_ <br/> |Required  <br/> |System.UInt16  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

