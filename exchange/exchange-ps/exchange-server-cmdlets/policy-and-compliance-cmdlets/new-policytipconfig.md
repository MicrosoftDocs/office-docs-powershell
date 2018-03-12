---
title: "New-PolicyTipConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/17/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0882bc55-0297-4d22-a141-1eb7187f5ea2
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-PolicyTipConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-PolicyTipConfig** cmdlet to create custom Policy Tips in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-PolicyTipConfig -Name <String> -Value <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a custom Policy Tip with the following settings:
  
- Locale: English
    
- Action:  `NotifyOnly`
    
- Policy Tip text: "This message contains content that is restricted by Contoso company policy."
    
```
New-PolicyTipConfig -Name en\NotifyOnly -Value "This message contains content that is restricted by Contoso company policy."
```

### Example 2

This example sets the informational URL in Policy Tips to the value http://www.contoso.com/PolicyTipInformation.
  
```
New-PolicyTipConfig Url -Value "http://www.contoso.com/PolicyTipInformation"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> | The _Name_ parameter specifies the custom Policy Tip you want to modify. Valid input for this parameter is one of the following values: <br/> _\<Locale\>_\ _\<Action\>_: Locale is a supported locale code. For example,  `en` for English or `fr` for French. For more information about supported locales, see[Supported languages for system messages](https://technet.microsoft.com/library/bb124759.aspx). Action is one of the following Policy Tip actions:  `NotifyOnly`,  `RejectOverride` or `Reject`.  <br/>  `Url` <br/>  There can be only one custom Policy Tip with the value `Url` for the _Name_ parameter. For the remaining Policy Tip actions, there can be only one custom Policy Tip for each combination of locale and action. For example, there can be only one custom Policy Tip with the _Name_ value `en\NotifyOnly`, but you can create additional custom Policy Tips with the values  `de\NotifyOnly` and `fr\NotifyOnly` for the _Name_ parameter. <br/> |
| _Value_ <br/> |Required  <br/> |System.String  <br/> |The _Value_ parameter specifies the text that's displayed by the Policy Tip. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

