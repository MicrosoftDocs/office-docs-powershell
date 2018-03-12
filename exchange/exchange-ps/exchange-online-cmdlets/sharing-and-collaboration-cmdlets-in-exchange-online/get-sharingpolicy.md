---
title: "Get-SharingPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0ad91f5b-aaf4-4df0-90a1-a00ac83546ac
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-SharingPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-SharingPolicy** cmdlet to view existing sharing policies that control how users inside your organization can share free/busy and contact information with users outside your organization..
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SharingPolicy [-Identity <SharingPolicyIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the default information for the sharing policy FourthCoffee.
  
```
Get-SharingPolicy -Identity FourthCoffee
```

### Example 2

This example retrieves the full information for the sharing policy Fabrikam.
  
```
Get-SharingPolicy Fabrikam | Format List
```

## Detailed Description
<a name="DetailedDescription"> </a>

 Users can only share free/busy and contact information after federation has been configured between Exchange organizations. After that, users can send sharing invitations to the external recipients as long as those invitations comply with the sharing policy. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the sharing settings for the mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SharingPolicyIdParameter  <br/> | The _Identity_ parameter specifies the sharing policy that you want to view. You can use one of the following values: <br/>  ADObjectID <br/>  Distinguished name (DN) <br/>  Legacy DN <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

