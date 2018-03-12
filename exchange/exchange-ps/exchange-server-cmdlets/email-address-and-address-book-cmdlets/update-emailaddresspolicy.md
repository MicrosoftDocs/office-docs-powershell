---
title: "Update-EmailAddressPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 9/21/2016
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 283081a2-14bb-46cd-918e-e2dd168c43ab
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-EmailAddressPolicy

This cmdlet is available only in on-premises Exchange.
  
Use the **Update-EmailAddressPolicy** cmdlet to apply new or updated email address policies to the affected recipients in an on-premises Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Update-EmailAddressPolicy -Identity <EmailAddressPolicyIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-FixMissingAlias <SwitchParameter>] [-UpdateSecondaryAddressesOnly <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example applies the email address policy named Northwest Executives to all affected recipients.
  
```
Update-EmailAddressPolicy -Identity "Northwest Executives"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.EmailAddressPolicyIdParameter  <br/> | The _Identity_ parameter specifies the email address policy that you want to apply to recipients. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FixMissingAlias_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _FixMissingAlias_ switch repairs recipients that don't have an alias. The alias is generated based on the **Name** property of the recipient. You don't need to specify a value with this switch. <br/> You need to use this switch if you receive an error message when you attempt to update the email address policy, global address list, or address list.  <br/> |
| _UpdateSecondaryAddressesOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UpdateSecondaryAddressesOnly_ switch parameter specifies that only the proxy email addresses are updated for the recipients. The recipient's primary email address isn't updated. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

