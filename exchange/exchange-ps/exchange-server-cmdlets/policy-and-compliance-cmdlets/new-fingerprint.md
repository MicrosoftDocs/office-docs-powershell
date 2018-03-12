---
title: "New-Fingerprint"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b579682a-9922-4db0-b524-bcea0d2cef9b
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-Fingerprint

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-Fingerprint** cmdlet to create document fingerprints that are used with data classification rules. Because the results of **New-Fingerprint** are not stored outside of the data classification rule, you always run **New-Fingerprint** and **New-DataClassification** or **Set-Dataclassification** in the same PowerShell session.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-Fingerprint -Description <String> [-Confirm [<SwitchParameter>]] [-FileData <Byte[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new document fingerprint based on the file C:\My Documents\Contoso Patent Template.docx. You store the new fingerprint as a variable so you can use it with the **New-DataClassification** cmdlet in the same PowerShell session.
  
```
$Patent_Template = Get-Content "C:\My Documents\Contoso Patent Template.docx" -Encoding byte; $Patent_Fingerprint = New-Fingerprint -FileData $Patent_Template -Description "Contoso Patent Template"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Description_ <br/> |Required  <br/> |System.String  <br/> |The _Description_ parameter specifies a description for the document fingerprint. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _FileData_ <br/> |Optional  <br/> |System.Byte[]  <br/> |The _FileData_ parameter specifies the file to use as a document fingerprint. <br/> You need to read the file to a byte-encoded object using the **Get-Content** cmdlet. For details, see the[Examples](new-fingerprint.md#Examples) section. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

