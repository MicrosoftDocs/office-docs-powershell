---
title: "Get-DataEncryptionPolicy"
ms.author: chrisda
author: chrisda
ms.date: 10/3/2017
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 198d07a9-6163-4230-9b34-523a6a2107ea
description: "This cmdlet is available only in the cloud-based service."
---

# Get-DataEncryptionPolicy

This cmdlet is available only in the cloud-based service.
  
Use the **Get-DataEncryptionPolicy** cmdlet to view data encryption policies in Exchange Online.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DataEncryptionPolicy [-Identity <DataEncryptionPolicyIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all data encryption policies in the organization.
  
```
Get-DataEncryptionPolicy
```

### Example 2

The example returns detailed information for the data encryption policy named Europe Mailboxes.
  
```
Get-DataEncryptionPolicy -Identity "Europe Mailboxes"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Data encryption policy cmdlets are the Exchange Online part of service encryption with Customer Key in Office 365. For more information, see [Controlling your data in Office 365 using Customer Key](https://aka.ms/customerkey).
  
You can assign a data encryption policy to a mailbox by using the  _DataEncryptionPolicy_ parameter on the **Set-Mailbox** cmdlet in Exchange Online PowerShell.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DataEncryptionPolicyIdParameter  <br/> | The _Identity_ parameter specifies the data encryption policy that you want to view. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

