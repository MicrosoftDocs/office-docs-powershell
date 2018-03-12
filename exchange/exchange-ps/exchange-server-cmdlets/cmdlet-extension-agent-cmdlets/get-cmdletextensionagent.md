---
title: "Get-CmdletExtensionAgent"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 46cc31dd-3799-45e4-bcce-0d0699a61dd6
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-CmdletExtensionAgent

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-CmdletExtensionAgent** cmdlet to view cmdlet extension agents.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-CmdletExtensionAgent [-Identity <CmdletExtensionAgentIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a summary list of all the cmdlet extension agents in the organization.
  
```
Get-CmdletExtensionAgent | Format-Table -Auto Name,Enabled,Priority
```

### Example 1

This example displays detailed information for the Exchange cmdlet extension agent named Mailbox Creation Time Agent.
  
```
Get-CmdletExtensionAgent "Mailbox Creation Time Agent"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Cmdlet extension agents are used by Exchange cmdlets in Exchange Server 2010 and later. Cmdlets provided by other Microsoft or third-party products can't use cmdlet extension agents. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Assembly_ <br/> |Optional  <br/> |System.String  <br/> |The _Assembly_ parameter filters the results by the specified **Assembly** property value. The value for the built-in Exchange cmdlet extension agents is `Microsoft.Exchange.ProvisioningAgent.dll`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter filters the results by enabled or disabled cmdlet extension agents. Valid values are: <br/>  `$true`: Only enabled agents are included in the results.  <br/>  `$false`: Only disabled agents are included in the results.  <br/>  If you don't use this parameter, enabled and disabled agents are included in the results. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.CmdletExtensionAgentIdParameter  <br/> | The _Identity_ parameter specifies the name of the cmdlet extension agent that you want to view. You can use any value that uniquely identifies the agent. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

