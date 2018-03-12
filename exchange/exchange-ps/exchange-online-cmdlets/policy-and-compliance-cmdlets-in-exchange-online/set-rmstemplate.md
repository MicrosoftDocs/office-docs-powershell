---
title: "Set-RMSTemplate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 4637f6b8-751a-4f5e-8869-428250230382
description: "This cmdlet is available only in the cloud-based service."
---

# Set-RMSTemplate

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-RMSTemplate** cmdlet to modify the properties of an existing Rights Management Services (RMS) template in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-RMSTemplate -Identity <RmsTemplateIdParameter> -Type <Archived | Distributed | All> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the RMS template Contoso Confidential from  `Distributed` to `Archived`. This prevents future use of Contoso Confidential for encryption, but allows access to existing content that's rights-protected by Contoso Confidential.
  
```
Set-RMSTemplate "Contoso Confidential" -Type Archived
```

## Detailed Description
<a name="DetailedDescription"> </a>

RMS templates exist in one or more trusted publishing domains (TPDs) that have been imported from an on-premises server running Active Directory Rights Management Services (AD RMS).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTemplateIdParameter  <br/> | The _Identity_ parameter specifies the RMS template. You can use any value that uniquely identifies the RMS template, for example: <br/>  Name <br/>  GUID <br/>  You can use the **Get-RMSTemplate** cmdlet to view the RMS templates in your organization. <br/> |
| _Type_ <br/> |Required  <br/> |Microsoft.Exchange.Security.RightsManagement.RmsTemplateType  <br/> | The _Type_ parameter specifies the type of RMS template. You can specify one of the following values: <br/>  `Archived` <br/>  `Distributed` <br/>  `All` <br/>  The default type for imported RMS templates is `Archived`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

