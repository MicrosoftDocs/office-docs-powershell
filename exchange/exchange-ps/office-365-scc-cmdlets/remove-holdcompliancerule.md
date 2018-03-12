---
title: "Remove-HoldComplianceRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: eb136136-3334-4e2b-b442-5664e22c1dbf
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Remove-HoldComplianceRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Remove-HoldComplianceRule** cmdlet to remove preservation rules from the Security &amp; Compliance Center.
  
> [!NOTE]
> The **Remove-HoldComplianceRule** cmdlet has been replaced by the **Remove-RetentionComplianceRule** cmdlet. If you have any scripts that use the **Remove-HoldComplianceRule** cmdlet, update them to use the **Remove-RetentionComplianceRule** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-HoldComplianceRule -Identity <PolicyIdParameter> [-Confirm [<SwitchParameter>]] [-ForceDeletion <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the preservation rule named "One Year Standard".
  
```
Remove-HoldComplianceRule -Identity "One Year Standard"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Removing a preservation rule causes the release of all Exchange mailbox and SharePoint site preservations that are associated with the rule. Removing a preservation rule also causes the corresponding preservation policy to become invalid, so you should remove it by using the **Remove-HoldCompliancePolicy** cmdlet.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_ parameter specifies the preservation rule to remove. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ForceDeletion_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ForceDeletion_ switch forces the removal of the rule. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

