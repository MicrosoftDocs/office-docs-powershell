---
title: "Set-Clutter"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0c91b858-5bbe-4d2f-abff-d1503bcd6864
description: "This cmdlet is available only in the cloud-based service."
---

# Set-Clutter

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-Clutter** cmdlet to configure Clutter settings for mailboxes in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-Clutter -Identity <MailboxIdParameter> [-CleanUpClutter <SwitchParameter>] [-Enable <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables Clutter for the user Alexander Martinez.
  
```
Set-Clutter -Identity "Alexander Martinez" -Enable $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _CleanUpClutter_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _CleanUpClutter_switch specifies whether to move messages from the Clutter folder back to the Inbox. You don't need to specify a value with this switch.  <br/> This switch is useful for POP3 clients who can only retrieve messages from their Inbox.  <br/> |
| _Enable_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enable_parameter specifies whether to enable or disable Clutter for the mailbox. Valid values are:  <br/>  `$true`: Clutter is enabled for the mailbox. This is the default value.  <br/>  `$false`: Clutter is disabled for the mailbox.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

