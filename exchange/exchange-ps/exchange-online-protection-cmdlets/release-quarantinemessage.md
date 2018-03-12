---
title: "Release-QuarantineMessage"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/23/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 4a3aa05c-238f-46f2-b8dd-b0e3c38eab3e
description: "This cmdlet is available only in the cloud-based service."
---

# Release-QuarantineMessage

This cmdlet is available only in the cloud-based service. 
  
Use the **Release-QuarantineMessage** cmdlet to release messages from quarantine in your cloud-based organization. You can release messages to all original recipients, or to specific recipients.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Release-QuarantineMessage -Identity <QuarantineMessageIdentity> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the **Get-QuarantineMessage** cmdlet to release the quarantined message with the **Message-ID** value `<5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com>` to an original recipient julia@contoso.com.
  
```
Get-QuarantineMessage -MessageID "<5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com>" | Release-QuarantineMessage -User julia@contoso.com
```

### Example 2

This example releases the quarantined message with the specified **Identity** value to all original recipients.
  
```
Release-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7 -ReleaseToAll
```

### Example 3

This example releases all messages to all original recipients, and deletes all released messages from quarantine.
  
```
Get-QuarantineMessage | Release-QuarantineMessage -ReleaseToAll -Delete
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identities_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageIdentity[]  <br/> |The  _Identities_ parameter identifies quarantined messages for bulk operations. You identify the messages by using the syntax: `value1,value2...`. The value is a unique quarantined message identifier in the format  `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`.  <br/> You can find the identity value for a quarantined message by using the **Get-QuarantineMessage** cmdlet. <br/> When you use this parameter, the  _Identity_ parameter is required, but the value is ignored. For example, use the value `000` for the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageIdentity  <br/> |The  _Identity_ parameter specifies the quarantined message that you want to release. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).  <br/> You can find the  _Identity_ value for a quarantined message by using the **Get-QuarantineMessage** cmdlet. <br/> |
| _ReleaseToAll_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReleaseToAll_ switch releases the quarantined message to all original recipients. You don't have to specify a value with this switch. <br/> If you previously used the  _User_ parameter or the _ReleaseToAll_ switch to release the quarantined message to some or all of the original recipients, those recipients are skipped when you use the _ReleaseToAll_ parameter again. You don't have to specify a value with the _ReleaseToAll_ switch. <br/> You can't use the  _ReleaseToAll_ switch and the _User_ parameter in the same command. <br/> |
| _User_ <br/> |Required  <br/> |System.String[]  <br/> |The  _User_ parameter specifies the email address of the user to whom you want to release the quarantined message. You can specify multiple email addresses separated by commas. <br/> You can use this parameter to release the message to recipients of the original message, or to any other email addresses in the organization.  <br/>  If you previously used the _ReleaseToAll_ switch to release the quarantined message to all original recipients, and you later release the message again with the _User_ parameter, any original recipients you specify with the _User_ parameter are skipped. <br/> |
| _AllowSender_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _AllowSender_ switch specifies that all future messages from the sender won't be quarantined. You don't need to specify a value with this switch. <br/> If the message was quarantined because of a transport rule or blocked sender, messages from the sender can still be blocked in the future.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Delete_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Delete_ switch specifies whether to delete a message from quarantine after it's been released to all original recipients. You don't need to specify a value with this switch. <br/> You can only use this switch with the  _ReleaseToAll_ parameter. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to attempt the re-release of previously released messages from quarantine. You don't need to specify a value with this switch. <br/> You need to use this switch whenever you attempt to re-release previously released messages from quarantine.  <br/> |
| _ReportFalsePositive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReportFalsePositive_ switch sends a notification message indicating the specified message was not spam. You don't need to specify a value with this switch. <br/> This switch is only available for quarantined spam messages.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

