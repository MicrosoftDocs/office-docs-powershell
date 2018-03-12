---
title: "Export-AutoDiscoverConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 70733d70-7e35-4c60-b0f8-47a00b894fd1
description: "This cmdlet is available only in on-premises Exchange."
---

# Export-AutoDiscoverConfig

This cmdlet is available only in on-premises Exchange. 
  
Use the **Export-AutoDiscoverConfig** cmdlet to create or update a service connection point for an Autodiscover service pointer in a target Exchange forest on an Exchange Server 2016 server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Export-AutoDiscoverConfig -TargetForestDomainController <String> [-Confirm [<SwitchParameter>]] [-DeleteConfig <$true | $false>] [-DomainController <Fqdn>] [-MultipleExchangeDeployments <$true | $false>] [-PreferredSourceFqdn <Fqdn>] [-SourceForestCredential <PSCredential>] [-TargetForestCredential <PSCredential>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a service connection point object to connect to another Active Directory forest so that Outlook 2010 clients can automatically connect to their mailbox without having to set up a profile.
  
```
Export-AutoDiscoverConfig -TargetForestDomainController targetForestName
```

### Example 2

This example specifies that Exchange 2016 is deployed in more than one Active Directory forest while establishing an Autodiscover service connection point to the target domain controller in another Active Directory forest.
  
```
Export-AutoDiscoverConfig -TargetForestDomainController targetForestName -MultipleExchangeDeployments $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Autodiscover service connection point pointer resides in Active Directory and contains the names of the Exchange Web Services URLs.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _TargetForestDomainController_ <br/> |Required  <br/> |System.String  <br/> |The _TargetForestDomainController_ parameter specifies the domain controller that you want to export the Autodiscover configuration to. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DeleteConfig_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _DeleteConfig_ parameter causes the command to delete your configuration settings on the service connection point object. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MultipleExchangeDeployments_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MultipleExchangeDeployments_ parameter specifies whether multiple Exchange deployments exist. This setting should be set to `$true` only if Exchange 2016 is deployed in more than one Active Directory forest, and the forests are connected. If set to `$true`, the list of authoritative accepted domains for the source forest is written to the Autodiscover service connection point object. Outlook 2010 clients use this object to select the most appropriate forest to search for the Autodiscover service.  <br/> |
| _PreferredSourceFqdn_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _PreferredSourceFqdn_ parameter specifies the FQDN of the Active Directory domain for the Autodiscover pointer service connection point object. <br/> |
| _SourceForestCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _SourceForestCredential_ parameter specifies the credentials to use when connecting to the source forest. <br/> |
| _TargetForestCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _TargetForestCredential_ parameter specifies the credentials to use to connect to the target forest. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

