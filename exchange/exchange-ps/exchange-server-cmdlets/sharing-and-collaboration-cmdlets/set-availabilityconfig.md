---
title: "Set-AvailabilityConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: aa3c55f3-d29a-443e-b248-e1779516dfe1
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-AvailabilityConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-AvailabilityConfig** cmdlet to set the access level for free/busy information.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-AvailabilityConfig [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-OrgWideAccount <SecurityPrincipalIdParameter>] [-PerUserAccount <SecurityPrincipalIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example is useful with a trusted cross-forest Availability service. If the remote forest is trusted, and a per-user free/busy proxy account or group in the remote forest is configured to use the service account, the configuration is added to the current forest to authorize the Microsoft ActiveSync request from the remote forest.
  
```
Set-AvailabilityConfig -PerUserAccount <domain name of servers group in remote forest>
```

### Example 2

This example is useful if the remote forest isn't trusted. Because this account is used for a cross-forest free/busy proxy account or group, minimize security vulnerabilities by using the credentials of a user who doesn't have an Exchange mailbox. When you're prompted, type the user name and password.
  
```
Set-AvailabilityConfig -OrgWideAccount <ExampleCredentials>
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-AvailabilityConfig** cmdlet defines two accounts or security groups: a per-user free/busy proxy account or group, and an organization-wide free/busy proxy account or group. These accounts and groups are trusted by all availability services in the current organization for availability proxy requests.
  
For cross-forest availability services to retrieve free/busy information in the current forest, they must be using one of the specified accounts, belong to one of the specified security groups, or have a user name and password for one of the specified accounts or security groups.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _OrgWideAccount_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |The _OrgWideAccount_ parameter specifies an account or security group that has permission to issue proxy Availability service requests on an organization-wide basis. <br/> |
| _PerUserAccount_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _PerUserAccount_ parameter specifies an account or security group that has permission to issue proxy Availability service requests on a per-user basis. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

