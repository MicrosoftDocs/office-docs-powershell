---
title: "Import-DlpPolicyTemplate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/17/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1e508447-a322-4a31-a80c-ab0471422fe2
description: "This cmdlet is available only in on-premises Exchange."
---

# Import-DlpPolicyTemplate

This cmdlet is available only in on-premises Exchange. 
  
Use the **Import-DlpPolicyTemplate** cmdlet to import a data loss prevention (DLP) policy template file into your Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Import-DlpPolicyTemplate -FileData <Byte[]> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports the DLP policy template file C:\My Documents\External DLP Policy Template.xml.
  
```
Import-DlpPolicyTemplate -FileData ([Byte[]]$(Get-Content -Path "C:\My Documents\External DLP Policy Template.xml" -Encoding Byte -ReadCount 0))
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The _FileData_ parameter specifies the DLP policy template file you want to import. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

