---
title: "Import-UMPrompt"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 6a91a841-a054-4b30-a899-2c51c997f527
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Import-UMPrompt

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Import-UMPrompt** cmdlet to copy or upload a custom audio file to be used by Unified Messaging (UM) dial plans and auto attendants.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Import-UMPrompt -PromptFileData <Byte[]> -PromptFileName <String> -UMDialPlan <UMDialPlanIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports the welcome greeting file welcomegreeting.wav from d:\UMPrompts into the UM dial plan MyUMDialPlan.
  
```
[byte[]]$c = Get-content -Path "d:\UMPrompts\welcomegreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMDialPlan MyUMDialPlan -PromptFileName "welcomegreeting.wav" -PromptFileData $c
```

### Example 2

This example imports the welcome greeting file welcomegreeting.wav from d:\UMPrompts into the UM auto attendant MyUMAutoAttendant.
  
```
[byte[]]$c = Get-content -Path "d:\UMPrompts\welcomegreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "welcomegreeting.wav" -PromptFileData $c
```

### Example 3

This example imports the welcome greeting file AfterHoursWelcomeGreeting.wav from d:\UMPrompts into the UM auto attendant MyUMAutoAttendant.
  
```
[byte[]]$c = Get-content -Path "d:\UMPrompts\AfterHoursWelcomeGreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "AfterHoursWelcomeGreeting.wav" -PromptFileData $c
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Import-UMPrompt** cmdlet imports custom greeting audio files into UM dial plans and auto attendants. There are many custom greetings used by UM dial plans and auto attendants including welcome greetings for dial plans and after hours welcome greetings and menus, business hours and non-business hours welcome greetings and menus, and key mappings for UM auto attendants.
  
After this task is completed, the custom audio file can be used by a UM dial plan or auto attendant.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _PromptFileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The  _PromptFileData_ parameter specifies the byte array of the custom prompt. <br/> |
| _PromptFileName_ <br/> |Required  <br/> |System.String  <br/> |The  _PromptFileName_ parameter specifies the name of the custom prompt. <br/> |
| _PromptFileStream_ <br/> |Required  <br/> |System.IO.Stream  <br/> |The  _PromptFileStream_ parameter specifies whether the audio file will be uploaded or imported as an audio stream and not a byte array. The default setting is for the audio file to imported as a byte array. <br/> |
| _UMAutoAttendant_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The  _UMAutoAttendant_ parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant. <br/> |
| _UMDialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The  _UMDialPlan_ parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

