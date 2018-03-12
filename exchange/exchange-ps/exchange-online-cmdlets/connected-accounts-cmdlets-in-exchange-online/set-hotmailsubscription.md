---
title: "Set-HotmailSubscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 6d9139ac-1e96-439d-86f3-7e2ea4d8d914
description: "This cmdlet is available only in the cloud-based service."
---

# Set-HotmailSubscription

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-HotmailSubscription** cmdlet to modify the properties of an existing Hotmail subscription configured in a user's cloud-based mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-HotmailSubscription -Identity <AggregationSubscriptionIdParameter> [-Mailbox <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the display name of the Hotmail subscription Contoso Hotmail that's configured in the cloud-based mailbox of the user Ayla Kol.
  
```
Set-HotmailSubscription "Contoso Hotmail" -Mailbox "Ayla Kol" -DisplayName "Ayla's Contoso Subscription"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can set properties for the Hotmail subscription, such as the display name and password.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AggregationSubscriptionIdParameter  <br/> | The _Identity_ parameter specifies the Hotmail subscription. You can identify the subscription by using one of the following methods: <br/>  Specify the globally unique identifier of the subscription, which is its canonical name (CN). <br/>  Use the _Mailbox_ parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription. <br/>  You can find the identifying values for a Hotmail subscription, such as _Identity_ and _Name_, by running this command:  `Get-HotmailSubscription -Mailbox <mailbox>`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the friendly name of the subscription. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the Hotmail subscription is enabled. This parameter accepts `$true` or `$false` values. The default value is `$true`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the Hotmail subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Password_ <br/> |Optional  <br/> |System.Security.SecureString  <br/> |The  _Password_ parameter specifies the password used to sign in to the Hotmail mailbox. You must specify the value for this parameter in a secure format, for example, `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

