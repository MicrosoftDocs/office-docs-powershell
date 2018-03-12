---
title: "Set-AdSiteLink"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8c1853fd-e5d8-47d9-b603-33a6c7cec87c
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-AdSiteLink

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-AdSiteLink** cmdlet to assign an Exchange-specific cost to an Active Directory IP site link. You can also use this cmdlet to configure the maximum message size that can pass across an Active Directory IP site link.
  
```
Set-AdSiteLink -Identity <AdSiteLinkIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExchangeCost <Int32>] [-MaxMessageSize <Unlimited>] [-Name <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example assigns an Exchange-specific cost of 25 to the IP site link DEFAULT_IP_SITE_LINK and configures a maximum message size limit of 10 MB on the IP site link.
  
```
Set-AdSiteLink DEFAULT_IP_SITE_LINK -ExchangeCost 25 -MaxMessageSize 10MB
```

## Detailed Description
<a name="DetailedDescription"> </a>

By default, Microsoft Exchange determines the least cost routing path by using the cost assigned to the Active Directory IP site link. You can use the **Set-AdSiteLink** cmdlet to assign an Exchange-specific cost to the Active Directory IP site link. The Exchange-specific cost is a separate attribute used instead of the Active Directory-assigned cost to determine the least cost routing path.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteLinkIdParameter  <br/> |The _Identity_ parameter specifies the name or GUID of the IP site link you want to modify. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _ExchangeCost_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ExchangeCost_ parameter specifies an Exchange-specific cost for the IP site link. This cost is used instead of the Active Directory-assigned cost. To clear the value of the _ExchangeCost_ parameter and revert to using the cost of the IP site link specified in Active Directory, set the value of the _ExchangeCost_ parameter to `$null`.  <br/> |
| _MaxMessageSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxMessageSize_ parameter specifies the maximum size of a message that can pass across the Active Directory IP site link. The default value is `unlimited`.  <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The valid input range for this parameter is from `64 KB` through `Int64`. To remove the message size limit on an Active Directory IP site link, enter a value of  `unlimited`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for the IP site link. The name that you assign overwrites the current identity of the IP site link. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

