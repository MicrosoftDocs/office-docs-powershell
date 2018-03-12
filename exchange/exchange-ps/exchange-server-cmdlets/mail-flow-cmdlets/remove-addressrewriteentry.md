---
title: "Remove-AddressRewriteEntry"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a588e988-3f80-42c6-aae0-8efaf2f439b3
description: "This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange."
---

# Remove-AddressRewriteEntry

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.
  
Use the **Remove-AddressRewriteEntry** cmdlet to remove an existing address rewrite entry that's no longer needed on an Edge Transport server.
  
```
Remove-Addressrewriteentry -Identity <AddressRewriteEntryIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes a specific address rewrite entry.
  
```
Remove-AddressRewriteEntry "Address rewrite entry for contoso.com"
```

### Example 2

This example removes all address rewrite entries that include contoso.com in the domain name. It accomplishes the following:
  
- Retrieves all address rewrite entries.
    
- Filters the result for entries that have contoso.com or its subdomains as the internal address.
    
- Removes the filtered entries.
    
```
Get-AddressRewriteEntry | Where {$_.InternalAddress -like '*contoso.com'} | Remove-AddressRewriteEntry
```

## Detailed Description
<a name="DetailedDescription"> </a>

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.MessagingPolicies.AddressRewrite.AddressRewriteEntryIdParameter  <br/> |The _Identity_ parameter specifies the address rewrite entry you want to remove. The _Identity_ parameter accepts a GUID or the unique address rewrite name. You can omit the _Identity_ parameter label. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

