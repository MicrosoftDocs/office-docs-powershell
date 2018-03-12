---
title: "Get-PolicyTipConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 103ad92b-d56d-4568-9b30-35aea82cf0eb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PolicyTipConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PolicyTipConfig** cmdlet to view the data loss prevention (DLP) Policy Tips in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PolicyTipConfig [-Identity <PolicyTipConfigIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of the custom Policy Tips in all languages that have the action value  `NotifyOnly`.
  
```
Get-PolicyTipConfig -Action NotifyOnly
```

### Example 2

This example returns a summary list of all built-in French Policy Tips.
  
```
Get-PolicyTipConfig -Original -Locale fr
```

### Example 3

This example returns details about the custom English Policy Tip for the action value  `RejectOverride`.
  
```
Get-PolicyTipConfig en\RejectOverride | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.PolicyTipMessageConfigAction  <br/> | The _Action_ parameter filters the Policy Tips by action. Valid values for this parameter are: <br/>  NotifyOnly <br/>  RejectOverride <br/>  Reject <br/>  You can't use the value `Url` with the _Action_ parameter. Instead, use command: `Get-PolicyTipConfig Url`.  <br/>  You can't use the _Action_ parameter with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.PolicyNudges.PolicyTipConfigIdParameter  <br/> | The _Identity_ parameter specifies the custom Policy Tip you want to view. You can use any value that uniquely identifies the custom Policy Tip. For example: <br/> _\<Locale\>_\ _\<Action\>_: Locale is a supported locale code. For example,  `en` for English or `fr` for French. For more information about supported locales, see[Supported Locales for Use with System Messages](https://technet.microsoft.com/library/d8e315d5-af0e-4725-9770-7a22dffe5334.aspx). Action is one of the following Policy Tip actions:  `NotifyOnly`,  `RejectOverride` or `Reject`.  <br/>  The value `Url` <br/>  GUID <br/>  Distinguished name (DN) <br/>  You can't use the _Identity_ parameter with the _Action_, _Locale_, or _Original_ parameters. <br/> |
| _Locale_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The _Locale_ parameter specifies a locale-specific version of the Policy Tip. <br/> Valid values for this parameter are supported locale codes. For example,  `en` for English or `fr` for French. For more information about supported locales, see[Supported Locales for Use with System Messages](https://technet.microsoft.com/library/d8e315d5-af0e-4725-9770-7a22dffe5334.aspx).  <br/> You can't use the _Locale_ parameter with the _Identity_ parameter. <br/> |
| _Original_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Original_ switch includes built-in Policy Tips in the results. You don't specify a value with the _Original_ switch. You can't use the _Original_ switch with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

