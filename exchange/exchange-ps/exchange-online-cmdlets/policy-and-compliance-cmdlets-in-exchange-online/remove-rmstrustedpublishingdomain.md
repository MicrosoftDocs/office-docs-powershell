---
title: "Remove-RMSTrustedPublishingDomain"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 778b4b91-0079-462b-b58d-3b3507ed8f69
description: "This cmdlet is available only in the cloud-based service."
---

# Remove-RMSTrustedPublishingDomain

This cmdlet is available only in the cloud-based service. 
  
Use the **Remove-RMSTrustedPublishingDomain** cmdlet to remove an existing trusted publishing domain (TPD) from your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-RMSTrustedPublishingDomain -Identity <RmsTrustedPublishingDomainIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the trusted publishing domain Contoso TPD from your organization.
  
```
Remove-RMSTrustedPublishingDomain "Contoso TPD"
```

## Detailed Description
<a name="DetailedDescription"> </a>

A trusted publishing domain contains the settings needed to use Rights Management Services (RMS) features in your organization. When you delete a trusted publishing domain, all existing content that's protected by the RMS templates in the trusted publishing domain becomes unreadable. Instead of deleting the trusted publishing domain, you can archive the RMS templates using the **Set-RMSTemplate** cmdlet. Archiving the RMS template prevents future use for encryption, but allows access to existing rights-protected content.
  
If you delete the only trusted publishing domain, all RMS features are disabled in the organization. If multiple trusted publishing domains exist in your organization, you can't delete the default trusted publishing domain. You must first designate another trusted publishing domain as the default. You can change the default trusted publishing domain using the **Set-RMSTrustedPublishingDomain** cmdlet.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTrustedPublishingDomainIdParameter  <br/> | The _Identity_ parameter specifies the trusted publishing domain. You can use any value that uniquely identifies the trusted publishing domain, for example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ parameter forces the command to execute without asking for user confirmation. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

