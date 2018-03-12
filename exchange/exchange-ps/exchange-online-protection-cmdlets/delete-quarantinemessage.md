---
title: "Delete-QuarantineMessage"
ms.author: chrisda
author: chrisda
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: article
ms.service: eop
localization_priority: Normal
ms.assetid: 9f54e202-2a8a-4e98-a7ab-a944d6dde6d5
description: "This cmdlet is available only in the cloud-based service."
---

# Delete-QuarantineMessage

This cmdlet is available only in the cloud-based service. 
  
Use the **Delete-QuarantineMessage** cmdlet to delete quarantine messages from your cloud-based organization
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Delete-QuarantineMessage -Identity <QuarantineMessageIdentity> <COMMON PARAMETERS>

```

## Examples

### Example 1

This example deletes the quarantined message with the specified **Identity** value.
  
```
Delete-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7
```

### Example 2

This example deletes the 5th quarantined message in the list of results from **Get-QuarantineMessage**. The first message has the index number 0, the second has the index number 1, and so on).
  
```
$ids = Get-QuarantineMessage | select -ExpandProperty Identity; Delete-QuarantineMessage -Identity $ids[4]
```

### Example 3

This example deletes all quarantined messages. The  _Identity_ parameter is required, but the value `000` is ignored.
  
```
$ids = Get-QuarantineMessage | select -ExpandProperty Identity; Delete-QuarantineMessage -Identities $ids -Identity 000
```

## Detailed Description

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identities_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageIdentity[]  <br/> |The  _Identities_ parameter identifies quarantined messages for bulk operations. You identify the messages by using the syntax: `value1,value2...`. The value is a unique quarantined message identifier in the format  `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`.  <br/> You can find the identity value for a quarantined message by using the **Get-QuarantineMessage** cmdlet. <br/> When you use this parameter, the  _Identity_ parameter is required, but the value is ignored. For example, use the value `000` for the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageIdentity  <br/> |The  _Identity_ parameter specifies the quarantined message that you want to delete. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`.  <br/> You can find the  _Identity_ value for a quarantined message by using the **Get-QuarantineMessage** cmdlet. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

