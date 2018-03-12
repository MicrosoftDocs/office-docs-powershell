---
title: "Add-ComplianceCaseMember"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ebb6a18d-6a8a-49ad-92b9-bdb582cd6fb0
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Add-ComplianceCaseMember

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Add-ComplianceCaseMember** cmdlet to add an individual member to an eDiscovery case in the Security &amp; Compliance Center. To replace all existing members, use the **Update-ComplianceCaseMember** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-ComplianceCaseMember -Case <String> -Member <String> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds John Evans to the eDiscovery case named Case 2112.
  
```
Add-ComplianceCaseMember -Case "Case 2112" -Member johnevans@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You use eDiscovery cases to control who can create, access, and manage compliance searches in your organization. You use the **New-ComplianceCase** cmdlet to create eDiscovery cases. The eDiscovery Manager who created the case is automatically added as a member of the case.
  
To add a member of an eDiscovery case, the user needs to be a member of the Reviewer or eDiscovery Manager role groups. When a member of the eDiscovery Manager role group is a member of an eDiscovery case, the user can:
  
- Add and remove case members.
    
- Create and edit compliance searches associated with a case.
    
- Perform compliance actions (for example, export) on the results of a compliance search.
    
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Case_ <br/> |Required  <br/> |System.String  <br/> |The  _Case_parameter specifies the name of the eDiscovery case that you want to modify. If the value contains spaces, enclose the value in quotation marks (").  <br/> To see the available eDiscovery cases, use the **Get-ComplianceCase** cmdlet. <br/> |
| _Member_ <br/> |Required  <br/> |System.String  <br/> | The _Member_ parameter specifies the user that you want to add to the eDiscovery case. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

