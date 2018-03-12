---
title: "Test-ExchangeSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d50b8f0b-7b79-45d5-b1a4-8a5bc84d0724
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-ExchangeSearch

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-ExchangeSearch** cmdlet to test that Exchange Search is currently enabled and is indexing new email messages in a timely manner.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-ExchangeSearch [-Archive <SwitchParameter>] [-Identity <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides.
  
```
Test-ExchangeSearch -Identity john@contoso.com
```

### Example 2

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides. The _Verbose_ switch is used to display detailed information.
  
```
Test-ExchangeSearch -Identity john@contoso.com -Verbose
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-ExchangeSearch** cmdlet creates a hidden message and an attachment in the specified mailbox that's visible only to Exchange Search. The command waits for the message to be indexed and then searches for the content. It reports success or failure depending on whether the message is found after the interval set in the _IndexingTimeoutInSeconds_ parameter has elapsed.
  
You can use the _Verbose_ switch to get detailed information about each step performed by the cmdlet as part of the test.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch specifies that the test be run against the archive mailbox for the mailbox user specified in the _Identity_ parameter. When the _Archive_ switch is used, you must also use the _Identity_ parameter to specify the mailbox. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Identity_ parameter specifies the mailbox that you want to test Exchange Search against. <br/> |
| _IndexingTimeoutInSeconds_ <br/> |Optional  <br/> |System.Int32  <br/> |The _IndexingTimeoutInSeconds_ parameter specifies, in seconds, the maximum amount of time to wait between adding the new email message to the test mailbox and waiting for it to be returned in a search result. The default value is `120` seconds. If this parameter isn't specified, the default interval is used. <br/> |
| _MailboxDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter has been deprecated and is no longer used.  <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter has been deprecated and is no longer used.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

