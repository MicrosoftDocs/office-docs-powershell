---
title: "Get-PublicFolderMailboxDiagnostics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e780d809-a408-4799-8175-46946835bee4
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderMailboxDiagnostics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PublicFolderMailboxDiagnostics** cmdlet to view event-level information about a public folder mailbox. This information can be used to troubleshoot public folder issues.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMailboxDiagnostics -Identity <MailboxIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IncludeDumpsterInfo <SwitchParameter>] [-IncludeHierarchyInfo <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the diagnostic information for the public folder mailbox Customer Escalations.
  
```
Get-PublicFolderMailboxDiagnostics -Identity "Customer Escalations"
```

### Example 2

This example returns the diagnostic information for the public folder mailbox Sales Forecasts and exports the report to a CSV file.
  
```
Get-PublicFolderMailboxDiagnostics -Identity "Sales Forecasts" | Export-CSV C:\Diagnostics\SalesForecasts.csv
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Identity_ parameter specifies the identity of the public folder mailbox. The public folder mailbox is where the content of the public folder resides. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeDumpsterInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeDumpsterInfo_ parameter specifies that diagnostic information for the \NON_IPM_TREE\DUMPSTER_ROOT folder, which serves as the dumpster for public folder mailboxes, is included in the returned information. <br/> |
| _IncludeHierarchyInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IncludeHierarchyInfo_ switch specifies whether to include folder hierarchy information in the results. This includes the following information: <br/>  `TotalFolderCount`: The total number of public folders in the specified public folder mailbox.  <br/>  `MaxFolderChildCount`: The largest number of child folders in the public folder hierarchy.  <br/>  `HierarchyDepth`: The depth of the public folder hierarchy. The root folder is 0.  <br/>  `CalendarFolderCount`: The number of calendar public folders.  <br/>  `ContactFolderCount`: The number of calendar public folders.  <br/>  `MailPublicFolderCount`: The number of mail-enabled public folders.  <br/>  `NoteFolderCount`: The number of note public folders.  <br/>  `StickyNoteFolderCount`: The number of sticky note public folders.  <br/>  `TaskFolderCount`: The number of task public folders.  <br/>  `OtherFolderCount`: The number of public folders that don't match any of the previously defined public folder types.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

