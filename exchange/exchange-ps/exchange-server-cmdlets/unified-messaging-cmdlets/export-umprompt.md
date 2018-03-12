---
title: "Export-UMPrompt"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4bf35665-1643-4fec-bdb5-3aa27ff9984f
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Export-UMPrompt

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Export-UMPrompt** cmdlet to export an audio file being used as a greeting prompt for Unified Messaging (UM) dial plans and auto attendants.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Export-UMPrompt -UMAutoAttendant <UMAutoAttendantIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example exports the welcome greeting for the UM dial plan MyUMDialPlan and saves it as the file welcomegreeting.mp3.
  
```
$prompt = Export-UMPrompt -PromptFileName "customgreeting.mp3" -UMDialPlan MyUMDialPlan; Set-Content -Path "d:\DialPlanPrompts\welcomegreeting.mp3" -Value $prompt.AudioData -Encoding Byte
```

### Example 2

This example exports a custom greeting for the UM auto attendant MyUMAutoAttendant and saves it to the file welcomegreetingbackup.mp3.
  
```
Export-UMPrompt -PromptFileName "welcomegreeting.mp3" -UMAutoAttendant MyUMAutoAttendant; Set-Content -Path "e:\UMPromptsBackup\welcomegreetingbackup.mp3" -Value $prompt.AudioData -Encoding Byte
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Export-UMPrompt** cmdlet exports prompts that belong to existing UM dial plan and UM auto attendant objects. After the **Export-UMPrompt** cmdlet exports a prompt, you can save a copy of the prompt to a local drive as an audio file. You can then play the audio file using a media player.
  
After this task is completed, the UM prompts are displayed or saved.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _PromptFileName_ <br/> |Required  <br/> |System.String  <br/> |The _PromptFileName_ parameter specifies the name of the custom prompt to export. <br/> |
| _UMAutoAttendant_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The _UMAutoAttendant_ parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant. <br/> |
| _UMDialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExportAsWav_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

