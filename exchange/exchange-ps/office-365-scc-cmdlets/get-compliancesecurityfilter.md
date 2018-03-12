---
title: "Get-ComplianceSecurityFilter"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 5e1f0433-c062-4c58-8832-0ff0021cdc99
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-ComplianceSecurityFilter

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-ComplianceSecurityFilter** cmdlet to view compliance security filters in the Security &amp; Compliance Center. These filters allow specified users to search only a subset of mailboxes and SharePoint Online or OneDrive for Business sites in your Office 365 organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ComplianceSecurityFilter [-Action <Unknown | Preview | Export | Purge | Search | All>] [-Confirm [<SwitchParameter>]] [-FilterName <String>] [-User <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all compliance security filters.
  
```
Get-ComplianceSecurityFilter | Format-Table -Auto FilterName,Action
```

### Example 2

This example returns detailed information about the compliance security filter named HR Filter.
  
```
Get-ComplianceSecurityFilter -FilterName "HR Filter"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Compliance security filters work with compliance searches in the Security &amp; Compliance Center ( **\*-ComplianceSearch** cmdlets), not In-Place eDiscovery searches in Exchange Online ( **\*-MailboxSearch** cmdlets).
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceSecurityFilterActionType  <br/> | The _Action_parameter filters the results by the type of search action that a filter is applied to. Valid values are:  <br/>  `All` <br/>  `Export` <br/>  `Preview` <br/>  `Purge` <br/>  `Search` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _FilterName_ <br/> |Optional  <br/> |System.String  <br/> |The  _FilterName_ parameter specifies the name of the compliance security filter that you want to view. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _User_ <br/> |Optional  <br/> |System.String  <br/> | The _User_parameter filters the results by the user who gets a filter applied to their searches. Valid values are:  <br/>  The alias or email address of a user. <br/>  The value `All`.  <br/>  The name of a role group. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

