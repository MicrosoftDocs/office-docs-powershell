---
title: "Set-AdServerSettings"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 741b74a2-65ff-476f-aabf-1af42a3a2d6a
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-AdServerSettings

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-AdServerSettings** cmdlet to manage the Active Directory Domain Services (AD DS) environment in the current Exchange Management Shell session. The **Set-AdServerSettings** cmdlet replaces the _AdminSessionADSettings_ session variable that was used in Exchange Server 2007.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-AdServerSettings [-ConfigurationDomainController <Fqdn>] [-PreferredGlobalCatalog <Fqdn>] [-RecipientViewRoot <String>] [-SetPreferredDomainControllers <MultiValuedProperty>] [-ViewEntireForest <$true | $false>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the recipient scope to the Marketing Users OU in the contoso.com domain for the current session.
  
```
Set-AdServerSettings -RecipientViewRoot "contoso.com/Marketing Users"
```

### Example 2

This example sets the scope of the current session to the entire forest and designates gc1.contoso.com as the preferred global catalog server.
  
```
Set-AdServerSettings -ViewEntireForest $true -PreferredGlobalCatalog gc1.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _RunspaceServerSettings_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Directory.Management.RunspaceServerSettingsPresentationObject  <br/> |The _RunspaceServerSettings_ parameter specifies whether to pass an entire configuration object to the command to be processed. This parameter is useful in scripts where an entire object must be passed to the command. <br/> |
| _ConfigurationDomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _ConfigurationDomainController_ parameter specifies the fully qualified domain name (FQDN) of the configuration domain controller to be used for reading Exchange configuration information in this session. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _PreferredGlobalCatalog_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _PreferredGlobalCatalog_ parameter specifies the FQDN of the global catalog server to be used for reading recipient information in this session. <br/> |
| _PreferredServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _PreferredServer_ parameter specifies the FQDN of the domain controller to be used for this session. <br/> |
| _RecipientViewRoot_ <br/> |Optional  <br/> |System.String  <br/> |The _RecipientViewRoot_ parameter specifies the organizational unit (OU) to include in the recipient scope for this session. When you specify a recipient scope with this parameter, only the recipients included in the scope are returned. To specify an OU, use the syntax `<` _FQDN of domain_ `>/<` _OU tree_ `>`.  <br/> |
| _SetPreferredDomainControllers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SetPreferredDomainControllers_ parameter specifies the list of domain controllers used to read information from Active Directory in this session. You must specify the FQDN of the domain controllers. Separate multiple domain controllers using commas. <br/> |
| _ViewEntireForest_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ViewEntireForest_ parameter specifies whether all the objects in the forest are viewed and managed in this session. Valid values are `$true` and `$false`.  <br/> When you specify a value of  `$true`, the value stored in the _RecipientViewRoot_ parameter is removed and all of the recipients in the forest can be viewed and managed. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

