---
title: "Set-AdSite"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c9bb1fab-4d0f-43e3-ad4a-36643baa6553
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-AdSite

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-AdSite** cmdlet to configure the Exchange settings of Active Directory sites.
  
```
Set-AdSite -Identity <AdSiteIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-HubSiteEnabled <$true | $false>] [-InboundMailEnabled <$true | $false>] [-PartnerId <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the Active Directory site named  `Default-First-Site-Name` as a hub site.
  
```
Set-AdSite Default-First-Site-Name -HubSiteEnabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _Identity_ parameter specifies the identity of the Active Directory site you want to modify. You can use any value that uniquely identifies the site. For example, you can use the name, GUID or distinguished name (DN) of the Active Directory site. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HubSiteEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _HubSiteEnabled_ parameter specifies whether this site acts as a hub site. The default value is `$false`.  <br/> |
| _InboundMailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _InboundMailEnabled_ parameter enables or disables receiving incoming messages for all the Exchange located in the Active Directory site. Typically, this parameter is used after Active Directory site failover or maintenance. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$true`. If you set the value to  `$false`, none of the Exchange servers in the Active Directory site will be able to receive incoming messages.  <br/> |
| _PartnerId_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

