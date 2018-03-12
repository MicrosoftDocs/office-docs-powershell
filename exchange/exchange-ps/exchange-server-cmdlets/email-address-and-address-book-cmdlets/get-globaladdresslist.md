---
title: "Get-GlobalAddressList"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1cf4684c-0347-488e-aa04-04d11dd5661c
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-GlobalAddressList

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-GlobalAddressList** cmdlet to view a global address list (GAL) or a set of GALs.
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-GlobalAddressList [-Identity <GlobalAddressListIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all GALs.
  
```
Get-GlobalAddressList
```

### Example 2

This example returns detailed information about the GAL named GAL_AgencyB.
  
```
Get-GlobalAddressList -Identity GAL_AgencyB | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-GlobalAddressList** cmdlet is mainly used to populate the GAL property pages in the Exchange admin center. This command doesn't provide a filtering capability. If filtering is required, you should use a WHERE clause with the command.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DefaultOnly_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DefaultOnly_ switch filters the results so only the default GAL is returned. You don't need to use a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GlobalAddressListIdParameter  <br/> | The _Identity_ parameter specifies the global address list that you want to view. You can use any value that uniquely identifies the GAL. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

