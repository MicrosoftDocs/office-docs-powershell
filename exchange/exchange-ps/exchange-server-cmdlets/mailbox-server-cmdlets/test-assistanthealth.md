---
title: "Test-AssistantHealth"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b220cb2b-2206-42c7-8699-1f93300c45a7
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-AssistantHealth

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-AssistantHealth** cmdlet to verify that the Microsoft Exchange Mailbox Assistants service (MSExchangeMailboxAssistants) is healthy, to recover from health issues, and to report the status of the diagnosis or recovery action.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-AssistantHealth [-IncludeCrashDump <SwitchParameter>] [-MaxProcessingTimeInMinutes <UInt32>] [-MonitoringContext <SwitchParameter>] [-ResolveProblems <SwitchParameter>] [-ServerName <ServerIdParameter>] [-WatermarkBehindWarningThreholdInMinutes <UInt32>] [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example detects and repairs the mailbox assistant's health on MBXSVR01, includes the error information, and formats the output to a list.
  
```
Test-AssistantHealth -ServerName MBXSVR01 -IncludeCrashDump -ResolveProblems | Format-List
```

### Example 2

This example detects the mailbox assistant's health on the local Mailbox server. The _MaxProcessingTimeInMinutes_ parameter specifies 30 minutes as the maximum amount of time the service is allowed to process an event without responding, and formats the output to a list.
  
```
Test-AssistantHealth -MaxProcessingTimeInMinutes 30 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Mailbox Assistants service runs on all servers that have the Mailbox server role installed. This service is responsible for scheduling and dispatching several assistants that ensure mailboxes function correctly.
  
By default, when you run this cmdlet, it returns the _RunspaceId_, events, and performance counters in a table format.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _IncludeCrashDump_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeCrashDump_ parameter specifies that the command should take an error report prior to taking any recovery actions. This parameter should only be used if running from a local computer. If you use the parameter while connected remotely, the command fails. <br/> The default value for this parameter is  `$false`.  <br/> You don't have to specify a value with this parameter.  <br/> |
| _MaxProcessingTimeInMinutes_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _MaxProcessingTimeInMinutes_ parameter specifies the maximum amount of time the MSExchangeMailboxAssistants service is allowed to process an event without responding. You can specify a value from 1 through 3600 minutes. The default value is 15 minutes. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _ResolveProblems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This _ResolveProblems_ parameter specifies that if the command detects an issue, it attempts to fix it. This command attempts to fix the following issues: <br/>  Starts the Mailbox Assistants service if it isn't running. <br/>  Restarts the Mailbox Assistants service if it detects that the service is hung or deadlocked for more than 15 minutes. <br/>  You don't have to specify a value with this parameter. <br/> |
| _ServerName_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _ServerName_ parameter specifies the identity of the Mailbox server on which the mailbox assistant that's being tested resides. <br/> If this parameter isn't specified, the command runs on the local server. If the local server isn't a Mailbox server, the command fails.  <br/> |
| _WatermarkBehindWarningThreholdInMinutes_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _WatermarkBehindWarningThreholdInMinutes_ parameter specifies the threshold for watermark age. Event watermarks indicate the last time that events were successfully processed by an assistant. An event watermark that hasn't been updated in a while may indicate a problem. For each Mailbox Assistant, the **Test-AssistantHealth** cmdlet compares the current time with the time stamp of the last event watermark to determine the watermark age. If that age exceeds the value set by the _WatermarkBehindWarningThreholdInMinutes_ parameter, a warning is generated. <br/> You can specify a value from 1 through 10080 minutes. The default value is 60 minutes.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

