---
title: "Get-EmailAddressPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 9/21/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: ab3c08f2-31d7-4711-a1ec-6e7135c9fdfa
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-EmailAddressPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-EmailAddressPolicy** cmdlet to view email address policies.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-EmailAddressPolicy [-Identity <EmailAddressPolicyIdParameter>] [-DomainController <Fqdn>] [-IncludeMailboxSettingOnlyPolicy <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all email address policies in the organization.
  
```
Get-EmailAddressPolicy
```

### Example 2

This example returns detailed information for the email address policy named Contoso Employees.
  
```
Get-EmailAddressPolicy -Identity "Contoso Employees"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.EmailAddressPolicyIdParameter  <br/> | The _Identity_ parameter specifies the email address policy that you want to view. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _IncludeMailboxSettingOnlyPolicy_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

