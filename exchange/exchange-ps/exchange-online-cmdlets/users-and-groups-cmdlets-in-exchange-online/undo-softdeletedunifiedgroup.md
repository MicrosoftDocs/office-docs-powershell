---
title: "Undo-SoftDeletedUnifiedGroup"
ms.author: chrisda
author: chrisda
ms.date: 7/12/2017
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 89f09bfc-43d6-457c-978f-b699c27ea325
description: "This cmdlet is available only in the cloud-based service."
---

# Undo-SoftDeletedUnifiedGroup

This cmdlet is available only in the cloud-based service. 
  
Use the **Undo-SoftDeletedUnifiedGroup** cmdlet to restore soft-deleted Office 365 groups in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Undo-SoftDeletedUnifiedGroup -SoftDeletedObject <UnifiedGroupIdParameter> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples

### Example 1

This example restores the soft-deleted Office 365 Group named Marketing Department.
  
```
Undo-SoftDeletedUnifiedGroup -SoftDeletedObject "Marketing Department"
```

## Detailed Description

Office 365 groups are group objects that are available across Office 365 services. 
  
Soft-deleted Office 365 groups are groups that have been deleted, but can be restored within 30 days of being deleted. All of the group contents can be restored within this period. After 30 days, soft-deleted Office 365 groups are marked for permanent deletion and can't be restored.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _SoftDeletedObject_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UnifiedGroupIdParameter  <br/> | The _SoftDeletedObject_parameter specifies the soft-deleted Office 365 Group that you want to restore. You can use any value that uniquely identifies the Office 365 Group.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> **Note**: You might need to use the **DistinguishedName** or **ExchangeGuid** property to identify the soft-deleted Office 365 Group, because it's possible for an active Office 365 Group and a soft-deleted Office 365 Group to have the same primary SMTP address. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

