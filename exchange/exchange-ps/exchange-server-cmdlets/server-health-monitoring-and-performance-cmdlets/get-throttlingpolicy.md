---
title: "Get-ThrottlingPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f7490b98-20e0-46ee-b369-6f77538da689
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ThrottlingPolicy

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ThrottlingPolicy** cmdlet to view the user throttling settings for one or more throttling policies.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ThrottlingPolicy [-Identity <ThrottlingPolicyIdParameter>] [-Diagnostics <SwitchParameter>] [-DomainController <Fqdn>] [-Explicit <SwitchParameter>] [-ThrottlingPolicyScope <Regular | Organization | Global>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the settings for all throttling policies.
  
```
Get-ThrottlingPolicy | Format-List
```

### Example 2

This example displays the parameters and values for throttling policy ThrottlingPolicy2.
  
```
Get-ThrottlingPolicy -Identity ThrottlingPolicy2 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-ThrottlingPolicy** cmdlet returns the client throttling settings for one or more throttling policies. If you use the _Identity_ parameter, the cmdlet returns the settings for the identified throttling policy. If you don't use the _Identity_ parameter, the cmdlet returns the settings for all throttling policies.
  
For more information about how to control the resources consumed by individual users, see [Exchange Workload Management](https://technet.microsoft.com/library/276740c4-bdb7-49f1-9470-ae6f2bfd65aa.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Diagnostics_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostics_ switch specifies whether you want the output to include the diagnostics string. To return diagnostics information, use the syntax `Get-ThrottlingPolicy -Diagnostics`. You don't specify a value for this switch.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Explicit_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Explicit_ switch specifies whether you only want to return the policy settings that have been directly assigned using this policy. By default, this parameter is set to `$false`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyIdParameter  <br/> |The _Identity_ parameter identifies the name of the throttling policy that you want to return settings for. <br/> |
| _ThrottlingPolicyScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ThrottlingPolicyScopeType  <br/> | The _ThrottlingPolicyScope_ parameter specifies the scope of the throttling policy. You can use the following values: <br/>  `Global` <br/>  `Organization` <br/>  `Regular` <br/>  For information about each of these policy scopes, see[Exchange Workload Management](https://technet.microsoft.com/library/276740c4-bdb7-49f1-9470-ae6f2bfd65aa.aspx).  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

