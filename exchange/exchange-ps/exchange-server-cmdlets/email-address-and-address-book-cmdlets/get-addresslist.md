---
title: "Get-AddressList"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 21eae768-0a94-4d55-809f-a9b7062092de
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-AddressList

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-AddressList** cmdlet to view address lists.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-AddressList [-Identity <AddressListIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all the address lists.
  
```
Get-AddressList
```

### Example 2

This example returns detailed information for the address list named building4that's located under the All Users\Sales\ address list.
  
```
Get-AddressList -Identity "All Users\Sales\building4" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can pipe the output from the **Get-AddressList** cmdlet to the **Remove-AddressList**, **Set-AddressList**, **Update-Addresslist**, and **Move-AddressList** cmdlets instead of using the _Identity_ parameter with each of those cmdlets.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Container_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> | The _Container_ parameter filters the results based on the location of the address list. Only address lists under the specified path are returned. Valid input for this parameter is the root "\" (also known as All Address Lists) or an existing address list. You can use any value that uniquely identifies the address list. For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Path: (\ _\<Name\>)_ or [ _\<Container\>_\ _\<Name\>_)  <br/>  You can't use this parameter with the _Identity_ or _SearchText_ parameters. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> | The _Identity_ parameter specifies the address list that you want to view. You can use any value that uniquely identifies the address list. For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Path: (\ _\<Name\>)_ or [ _\<Container\>_\ _\<Name\>_)  <br/>  You can't use this parameter with the _Container_ or _SearchText_ parameters. <br/> |
| _SearchText_ <br/> |Optional  <br/> |System.String  <br/> |The _SearchText_ parameter filters the results based on the name and display name of the address list. Only address lists whose names or display names that contain the specified text string are returned. If the value contains spaces, enclose the value in quotation marks ("). <br/> You can't use this parameter with the _Container_ or _Identity_ parameters. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

