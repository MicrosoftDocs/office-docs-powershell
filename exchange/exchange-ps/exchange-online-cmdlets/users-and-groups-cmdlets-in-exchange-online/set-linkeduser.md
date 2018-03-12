---
title: "Set-LinkedUser"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 9252ba30-a3b3-484f-9750-6103f246cbbf
description: "This cmdlet is available only in the cloud-based service."
---

# Set-LinkedUser

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-LinkedUser** cmdlet to modify the properties of an existing linked user account. The Outlook Live Directory Sync (OLSync) service account is a linked user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-LinkedUser -Identity <UserIdParameter> [-CertificateSubject <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the certificate subject for the linked user "GALSync-ServiceAccount".
  
```
Set-LinkedUser "GALSync-ServiceAccount" -CertificateSubject "X509:<I>CN=3rdPartyCAExample.com<S>C=US,O=Contoso Corp, CN=contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The OLSync service account is the only linked user in your organization. By default, the account is named GALSync-ServiceAccount.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the linked user. You can use any value that uniquely identifies the linked user, for example: <br/>  Name <br/>  Distinguished name (DN) <br/> |
| _CertificateSubject_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _CertificateSubject_ parameter specifies the value of the subject field of the user's digital certificate. The syntax of the _CertificateSubject_ value is `X509:<I>` _Issuer_ `<S>` _Subject_. The values of  _Issuer_ and _Subject_ are required and must be in X.500 format. To remove the value of _CertificateSubject_, specify the value  `$null`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

