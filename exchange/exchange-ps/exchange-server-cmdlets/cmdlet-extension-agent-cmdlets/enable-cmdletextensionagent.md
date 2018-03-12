---
title: "Enable-CmdletExtensionAgent"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 349823d2-55cb-46d5-b658-ea15d2bbebaa
description: "This cmdlet is available only in on-premises Exchange."
---

# Enable-CmdletExtensionAgent

This cmdlet is available only in on-premises Exchange. 
  
Use the **Enable-CmdletExtensionAgent** cmdlet to enable existing cmdlet extension agents.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-CmdletExtensionAgent -Identity <CmdletExtensionAgentIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables the cmdlet extension agent named Scripting Agent. Before you enable the Scripting Agent, you need to configure the  `%ExchangeInstallPath%Bin\CmdletExtensionAgents\ScriptingAgentConfig.xml.sample` file and rename it to `ScriptingAgentConfig.xml` on all the Exchange servers in your organization. If you don't, all non- **Get** cmdlets will fail.
  
```
Enable-CmdletExtensionAgent "Scripting Agent"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Cmdlet extension agents are used by Exchange cmdlets in Exchange Server 2010 and later. Cmdlets provided by other Microsoft or third-party products can't use cmdlet extension agents. 
  
When you enable a cmdlet extension agent, the agent is run on every Exchange server in the organization. When an agent is enabled, it's made available to cmdlets that can then use the agent to perform additional operations.
  
> [!CAUTION]
> Before you enable agents, be sure that you're aware of how the agent works and what impact the agent will have on your organization. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.CmdletExtensionAgentIdParameter  <br/> | The _Identity_ parameter specifies the disabled cmdlet extension agent that you want to enable. You can use any value that uniquely identifies the agent. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

