---
title: "Add-RecipientPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0740023b-47df-4f36-bcb9-ce3b0707a6d4
description: "This cmdlet is available only in the cloud-based service."
---

# Add-RecipientPermission

This cmdlet is available only in the cloud-based service. 
  
Use the **Add-RecipientPermission** cmdlet to add SendAs permission to users in a cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-RecipientPermission -Identity <RecipientIdParameter> -AccessRights <MultiValuedProperty> -Trustee <SecurityPrincipalIdParameter> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example gives the user Ayla Kol SendAs permission for the mailbox Help Desk. Ayla can send messages that appear to come directly from the Help Desk mailbox.
  
```
Add-RecipientPermission "Help Desk" -AccessRights SendAs -Trustee "Ayla Kol"
```

## Detailed Description
<a name="DetailedDescription"> </a>

When a user is assigned SendAs permission to a user or group, the user can send messages that appear to come from the other user or group.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AccessRights_ parameter specifies the permission. <br/> Valid input for this parameter is  `SendAs`.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the target recipient. The user or group specified by the _Trustee_ parameter can operate on this recipient. <br/>  You can specify any type of recipient, for example: <br/>  Mailboxes <br/>  Mail users <br/>  External contacts <br/>  Distribution groups <br/>  Dynamic distribution groups <br/>  You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Trustee_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> | The _Trustee_ parameter specifies the user or group to whom you're granting the permission. This allows the user or group to operate on the recipient specified by the _Identity_ parameter. <br/>  You can specify the following types of users or groups: <br/>  Mailbox users <br/>  Mail users with a Microsoft account (formerly known as a Windows Live ID) <br/>  Security groups <br/>  You can use any value that uniquely identifies the user or group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

