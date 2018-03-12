---
title: "Set-AddressBookPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c0dc5fff-af06-4008-9173-629d1f901c69
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-AddressBookPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-AddressBookPolicy** cmdlet to change the settings of an address book policy.
  
By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, **Manage role groups**. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-AddressBookPolicy -Identity <MailboxPolicyIdParameter> [-AddressLists <AddressListIdParameter[]>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-GlobalAddressList <GlobalAddressListIdParameter>] [-Name <String>] [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-RoomList <AddressListIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the OAB that the address book policy All Fabrikam ABP uses to Fabrikam-OAB-2.
  
```
Set-AddressBookPolicy -Identity "All Fabrikam ABP" -OfflineAddressBook \Fabrikam-OAB-2 -GlobalAddressList "\All Fabrikam GAL"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Identity_ parameter specifies the identity of the address book policy that you want to modify. <br/> |
| _AddressLists_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter[]  <br/> |The _AddressLists_ parameter specifies the address lists that will be used by mailbox users who are assigned this address book policy. This parameter accepts multiple values, which should be separated by a comma. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _GlobalAddressList_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GlobalAddressListIdParameter  <br/> |The _GlobalAddressList_ parameter specifies the identity of the global address list (GAL) that will be used by mailbox users who are assigned this address book policy. You can specify only one GAL for each address book policy. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name that you want this address book policy to be called. Use this parameter to change the name of the address book policy. <br/> |
| _OfflineAddressBook_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OfflineAddressBookIdParameter  <br/> |The _OfflineAddressBook_ parameter specifies the identity of the offline address book (OAB) that will be used by mailbox users who are assigned this address book policy. You can specify only one OAB for each address book policy. <br/> |
| _RoomList_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> |The _RoomList_ parameter specifies the name of the room address list. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

