---
title: "Get-AddressBookPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a5ec362f-a941-454f-ba93-cecada3411db
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-AddressBookPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-AddressBookPolicy** cmdlet to return address book policies that match the specified conditions.
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
```
Get-AddressBookPolicy [-Identity <MailboxPolicyIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns detailed information about all address book policies in your organization by pipelining the **Format-List** cmdlet.
  
```
Get-AddressBookPolicy | Format-List
```

### Example 2

This example returns default information about the address book policy All Fabrikam
  
```
Get-AddressBookPolicy -Identity "All Fabrikam"
```

### Example 3

This example returns information about all address book policies for which the offline address book (OAB) that the address book policy uses is named Fabrikam All OAB.
  
```
Get-AddressBookPolicy | where {$_.OfflineAddressBook eq "\Fabrikam All OAB"}
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the identity of the address book policy. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

