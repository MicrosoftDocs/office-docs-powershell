---
title: "Export-ActiveSyncLog"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 96488cda-9d33-4b67-9e86-2d03e89b1a20
description: "This cmdlet is available only in on-premises Exchange."
---

# Export-ActiveSyncLog

This cmdlet is available only in on-premises Exchange. 
  
Use the **Export-ActiveSyncLog** cmdlet to parse the Internet Information Services (IIS) logs and return information about Microsoft Exchange ActiveSync usage, either on the screen or in an output file.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Export-ActiveSyncLog -Filename <String> [-Confirm [<SwitchParameter>]] [-EndDate <DateTime>] [-Force <SwitchParameter>] [-OutputPath <String>] [-OutputPrefix <String>] [-StartDate <DateTime>] [-UseGMT <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example exports the Exchange ActiveSync log for the date range 06/08/12 to 06/09/12. The times on the report are in Coordinated Universal Time (UTC), and the report is saved in c:\exreports\easreports.
  
```
Export-ActiveSyncLog -Filename:"c:\Windows\System32\LogFiles\W2SVC1\ex060812.log" -StartDate:"06/08/12" -EndDate:"06/09/12" -UseGMT:$true -OutputPath:"c:\exreports\easreports"
```

### Example 2

This example exports the Exchange ActiveSync log for the date range 06/20/12 to 07/20/12 by reading all log files in the D:\logs directory. All prompts are suppressed while running the report, and a confirmation message is displayed. The times on the report are in UTC, and the report is saved in c:\exreports\easreports.
  
```
Dir D:\Logs\*.log | Export-ActiveSyncLog -Filename:"c:\Windows\System32\LogFiles\W2SVC1\ex072012.log" -StartDate:"06/20/12" -EndDate:"07/20/12" -UseGMT:$true -Force $true -Confirm -OutputPath:"c:\exreports\easreports"
```

### Example 3

This example exports the Exchange ActiveSync log for the date range 02/01/12 to 02/09/12. The times on the report are in UTC, and the report is saved in c:\exreports\easreports.
  
```
Export-ActiveSyncLog -Filename: "c:\Windows\System32\LogFiles\W2SVC1\ex020912.log" -StartDate:"02/01/12" -EndDate:"02/09/12" -UseGMT:$true -OutputPath:"c:\exreports\easreports"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Export-ActiveSyncLog** cmdlet parses the IIS log files and returns information about Exchange ActiveSync usage. This cmdlet can export the output to a file or display it in the Exchange Management Shell.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Filename_ <br/> |Required  <br/> |System.String  <br/> |The _Filename_ parameter specifies the name of the input file. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _EndDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range of the report. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _OutputPath_ <br/> |Optional  <br/> |System.String  <br/> |The _OutputPath_ parameter specifies the name and location for the output file. <br/> |
| _OutputPrefix_ <br/> |Optional  <br/> |System.String  <br/> |The _OutputPrefix_ parameter specifies a prefix to append to the name of the output file. <br/> |
| _StartDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range for the report. <br/> |
| _UseGMT_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UseGMT_ switch specifies that Coordinated Universal Time (Greenwich Mean Time) is used for the time in the report output. By default, if this parameter isn't specified, local time is used. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

