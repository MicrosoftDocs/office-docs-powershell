---
title: "Reset-ProvisioningCache"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 687309c9-150e-4cdf-9639-3247eb6608a4
description: "This cmdlet is available only in on-premises Exchange."
---

# Reset-ProvisioningCache

This cmdlet is available only in on-premises Exchange. 
  
The **Reset-ProvisioningCache** cmdlet clears the Windows PowerShell provisioning cache of frequently used Active Directory objects. This cmdlet is only used for diagnostic purposes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Reset-ProvisioningCache -Application <String> -Server <Fqdn> [-CurrentOrganization <SwitchParameter>] [-Organizations <MultiValuedProperty>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example resets the provisioning cache for Windows PowerShell running on the server EXSRV1.contoso.com in an on-premises Exchange organization and specifies that all cache keys are cleared.
  
```
Reset-ProvisioningCache -Server EXSRV1.contoso.com -Application Powershell -GlobalCache
```

### Example 2

This example runs in a multi-tenant deployment by a data center administrator to reset the provisioning cache for Windows PowerShell for the adatum.com tenant and clear all cache keys.
  
```
Reset-ProvisioningCache -Application Powershell-Proxy -Server datacenter1.adatum.com -GlobalCache
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Reset-ProvisioningCache** cmdlet is for diagnostic purposes only and is rarely used. Exchange administrators need to run this cmdlet only if incorrect links or properties are stamped on newly provisioned recipients, which can be caused by stale data in the provisioning cache. This is a rare occurrence because the provisioning cache has invalidation notification logic.
  
The **Reset-ProvisioningCache** cmdlet clears the Windows PowerShell provisioning cache of frequently used Active Directory objects. To reduce Active Directory requests, a provisioning cache is initialized in each Windows PowerShell runspace and is used to cache common objects that are frequently used by cmdlets and provisioning handlers. During Exchange cmdlet execution, the provisioning cache loads configuration objects from Active Directory to help run a cmdlet. For example, when you create a mailbox, the **New-Mailbox** cmdlet obtains properties from Active Directory. When running cmdlets, configuration objects such as database containers, administrative role groups, and LegacyDNs are retrieved from Active Directory. Because these types of objects are stable and don't change for months or years after they're created, they're stored in the provisioning cache used by Windows PowerShell. This increases provisioning efficiency and significantly improves cmdlet performance.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Application_ <br/> |Required  <br/> |System.String  <br/> | The _Application_ parameter specifies the specific administrative application to reset the provisioning cache for. You can use the following values: <br/>  `Powershell` <br/>  `Powershell-LiveId` <br/>  `Powershell-Proxy` <br/>  `PowershellLiveId-Proxy` <br/>  `Ecp` <br/>  `Psws` <br/> |
| _GlobalCache_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GlobalCache_ switch specifies that all cache keys are cleared. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _Server_ parameter specifies the fully qualified domain name (FQDN) of the server that the application you want to reset is running on. <br/> |
| _CacheKeys_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _CacheKeys_ parameter specifies the value for the cache key that you want to clear. The format for the values should contain 32 digits separated by four dashes: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` <br/> Use the **Dump-ProvisioningCache** cmdlet to return a list of cache keys. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CurrentOrganization_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _CurrentOrganization_ switch specifies that the provision cache is reset for this organization. <br/> |
| _Organizations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Organizations_ parameter specifies the organizations that the provisioning cache will be reset. This parameter is used in multi-tenant deployments. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

