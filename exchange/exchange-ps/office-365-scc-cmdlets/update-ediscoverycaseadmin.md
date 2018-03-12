---
title: "Update-eDiscoveryCaseAdmin"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 5c35b360-6438-4d4f-9e94-e7efa6838c5a
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Update-eDiscoveryCaseAdmin

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Update-eDiscoveryCaseAdmin** cmdlet to replace all existing eDiscovery Administrators in the Security &amp; Compliance Center. To add or remove individual eDiscovery Administrators, use the **Add-eDiscoveryCaseAdmin** and **Remove-eDiscoveryCaseAdmin** cmdlets.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-eDiscoveryCaseAdmin -Users <String[]> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example replaces the existing eDiscovery Administrators with new users.
  
```
Update-eDiscoveryCaseAdmin -Users laura@contoso.com,julia@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

An eDiscovery Administrator is member of the eDiscovery Manager role group who can also view and access all eDiscovery cases in your organization.
  
To make a user an eDiscovery Administrator, the user must be assigned the Case Management role. By default, this role is assigned to the Organization Management and eDiscovery Manager role groups.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Users_ <br/> |Required  <br/> |System.String[]  <br/> | The _Users_ parameter specifies the users that will replace the current eDiscovery Administrators. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

