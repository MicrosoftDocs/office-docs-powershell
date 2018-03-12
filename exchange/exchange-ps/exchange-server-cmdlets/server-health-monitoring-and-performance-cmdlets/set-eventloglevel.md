---
title: "Set-EventLogLevel"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 797f1691-32b7-4752-bb01-fea54cc28e1c
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-EventLogLevel

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-EventLogLevel** cmdlet to set the event log level registry value for the specified category.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-Eventloglevel -Identity <ECIdParameter> -Level <Lowest | Low | Medium | High | Expert> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the event log level to High for the MSExchangeTransport\SmtpReceive event logging category on the Exchange server Exchange01.
  
 **Note**: Run the **Get-EventLogLevel** cmdlet to retrieve a list of the event categories on your server. For more information, see[Get-EventLogLevel](get-eventloglevel.md).
  
```
Set-EventLogLevel -Identity "Exchange01\MSExchangeTransport\SmtpReceive" -Level High
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ECIdParameter  <br/> |The _Identity_ parameter specifies the name of the event logging category for which you want to set the event logging level. <br/> |
| _Level_ <br/> |Required  <br/> |Microsoft.Exchange.Diagnostics.EventLevel  <br/> | The _Level_ parameter specifies the log level for the specific event logging category. The valid values are: <br/>  `Lowest` <br/>  `Low` <br/>  `Medium` <br/>  `High` <br/>  `Expert` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

