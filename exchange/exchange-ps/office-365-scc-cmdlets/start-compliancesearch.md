---
title: "Start-ComplianceSearch"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 17ef8cc9-d716-446c-a8b9-b9109a6cab5a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Start-ComplianceSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Start-ComplianceSearch** cmdlet to start stopped, completed or not started compliance searches in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Start-ComplianceSearch -Identity <ComplianceSearchIdParameter> [-Confirm [<SwitchParameter>]] [-Force <SwitchParameter>] [-RetryOnError <SwitchParameter>] [-UseBigFunnel <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example starts the compliance search named Case 1234
  
```
Start-ComplianceSearch -Identity "Case 1234"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.ComplianceJob.Tasks.ComplianceSearchIdParameter  <br/> | The _Identity_ parameter specifies the compliance search that you want to start. <br/>  You can use any value that uniquely identifies the compliance search. For example: <br/>  Name <br/>  `JobRunId` (GUID) <br/>  You can find these values by running the command `Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _RetryOnError_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RetryOnError_ switch specifies whether to retry the search on any items that failed without re-running the entire search all over again. You don't need to specify a value with this switch. <br/> |
| _UseBigFunnel_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

