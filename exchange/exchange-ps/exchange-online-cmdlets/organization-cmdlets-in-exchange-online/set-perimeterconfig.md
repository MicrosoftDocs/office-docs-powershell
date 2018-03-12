---
title: "Set-PerimeterConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 9/9/2015
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 4f40a5fc-3275-42a0-b12f-a199bd42c8d5
description: "This cmdlet is available only in the cloud-based service."
---

# Set-PerimeterConfig

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-PerimeterConfig** cmdlet to modify the list of gateway server IP addresses that have been added to the cloud-based safelists.
  
```
Set-PerimeterConfig [-Identity <OrganizationIdParameter>] [-Confirm [<SwitchParameter>]] [-GatewayIPAddresses <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows how to add an IP address to cloud-based safelists where the gateway server relays email to the cloud-based service from internal email servers only.
  
```
Set-PerimeterConfig -GatewayIPAddresses 123.0.0.1
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you have an on-premises messaging system, you can add the IP addresses of your gateway servers to cloud-based safelists. Safelists are also known as whitelists. You add IP addresses to cloud-based safelists to make sure that e-mail that originates in your on-premises messaging system isn't treated as spam.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _GatewayIPAddresses_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |Use the  _GatewayIPAddresses_ parameter to create or modify a list of gateway server IP addresses to add to IP safelists. IP addresses are specified in IPv4 format, for example, 10.1.1.1. If you list more than one IP address, separate each entry with a comma. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

