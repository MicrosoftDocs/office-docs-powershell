---
title: "Enable-ComplianceTagStorage"
ms.author: chrisda
author: chrisda
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: c85eeadf-7d63-4e23-b1ff-07af5811b703
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Enable-ComplianceTagStorage

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Enable-ComplianceTagStorage** cmdlet to create the label policy in the Security &amp; Compliance Center. This is a one-time operation. Labels apply retention settings to content.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-ComplianceTagStorage [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the label policy in the Security &amp; Compliance Center.
  
```
Enable-ComplianceTagStorage
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you run this cmdlet more than once, you'll get an error that says a policy already exists.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

