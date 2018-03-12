---
title: "Set-AuthRedirect"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 73b1fd66-2783-4b8c-a704-9dc8ec810f29
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-AuthRedirect

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-AuthRedirect** cmdlet to modify existing OAuth redirection objects that are used for legacy Microsoft Exchange 2010 Client Access servers in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-AuthRedirect -Identity <AuthRedirectIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-TargetUrl <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the _TargetURL_ value to http://mbx01.contoso.com for the existing OAuth redirection object named `AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE`.
  
```
Set-AuthRedirect AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE -TargetUrl http://mbx01.contoso.com
```

### Example 2

This example sets the _TargetURL_ value for all existing OAuth redirection objects in your organization. However, if you have only one object in your organization, this example has the same result as the first example.
  
```
Get-AuthRedirect | Set-AuthRedirect -TargetUrl http://mbx01.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AuthRedirectIdParameter  <br/> |The _Identity_ parameter specifies the existing OAuth redirection object that you want to modify. The object name uses the syntax `AuthRedirect-Bearer-<GUID>`. The easiest way to find the name of the OAuth redirection object is to run **Get-AuthRedirect**. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _TargetUrl_ <br/> |Optional  <br/> |System.String  <br/> |The _TargetUrl_ parameter specifies the FQDN of the Exchange 2013 or later server that has the Client Access server role installed that'sresponsible for processing the redirected OAuth authentication requests. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

