---
title: "Set-PolicyTipConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 1c643de6-e485-4f42-a202-40960764faeb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-PolicyTipConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-PolicyTipConfig** cmdlet to modify custom Policy Tips in your organization. You can't modify built-in Policy Tips.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-PolicyTipConfig -Identity <PolicyTipConfigIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Value <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the custom English Policy Tip with the action value  `NotifyOnly`. The text of this custom Policy Tip is changed to the following value: "This message contains content that is restricted by Contoso company policy."
  
```
Set-PolicyTipConfig en\NotifyOnly "This message contains content that is restricted by Contoso company policy."
```

### Example 2

This example replaces the text of all custom Spanish Policy Tips with the value, "Este mensaje contiene contenido que está restringida por la política de Contoso."
  
```
Get-PolicyTipConfig -Locale es | Set-PolicyTipConfig -Value "Este mensaje contiene contenido que está restringida por la política de Contoso."
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.PolicyNudges.PolicyTipConfigIdParameter  <br/> | The _Identity_ parameter specifies the custom Policy Tip you want to modify. You can use any value that uniquely identifies the custom Policy Tip. For example: <br/>  _\<Locale\>_\ _\<Action\>_: Locale is a supported locale code. For example,  `en` for English or `fr` for French. For more information about supported locales, see[Supported Locales for Use with System Messages](http://technet.microsoft.com/library/d8e315d5-af0e-4725-9770-7a22dffe5334.aspx). Action is one of the following Policy Tip actions:  `NotifyOnly`,  `RejectOverride` or `Reject`.  <br/>  The value `Url` <br/>  GUID <br/>  Distinguished name (DN) <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Value_ <br/> |Optional  <br/> |System.String  <br/> |The  _Value_ parameter specifies the text that's displayed by the Policy Tip. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

