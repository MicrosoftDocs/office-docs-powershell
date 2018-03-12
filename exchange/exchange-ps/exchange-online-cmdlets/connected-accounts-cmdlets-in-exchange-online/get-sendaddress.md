---
title: "Get-SendAddress"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b2c57a7e-bd6d-461d-8a9d-5384a715344b
description: "This cmdlet is available only in the cloud-based service."
---

# Get-SendAddress

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-SendAddress** cmdlet to view the email addresses on a user's mailbox that can be configured as the default From address. This cmdlet is primarily used by the Outlook on the web > Options > Connected Accounts user interface. Typically, you don't need to run this cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SendAddress [-Identity <SendAddressIdParameter>] [-Mailbox <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the email addresses of the user Diane Prescott that can be used as the default From address.
  
```
Get-SendAddress -Mailbox "Diane Prescott"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Configuring a default From address only makes sense if the user has POP, IMAP, or Hotmail subscriptions configured on the mailbox. If you don't specify a value for the default From address, the default behavior is:
  
- The primary email address on the user's mailbox is used for all new messages.
    
- The To address of the incoming message is used as the From address for all replies or forwarded messages.
    
The only email addresses that can be configured as the default From address are:
  
- The user's primary email address.
    
- The email addresses of a user's POP, IMAP, or Hotmail subscription.
    
You set the user's default From address in the  _SendAddressDefault_ parameter on the **Set-MailboxMessageConfiguration** cmdlet. Users can override the default From address when they create an email message in Outlook on the web.
  
> [!NOTE]
> The **Get-SendAddress** and **Set-MailboxMessageConfiguration** cmdlets represent the email addresses of POP, IMAP, or Hotmail subscriptions as a GUID. It's easier to configure a user's default From address in Outlook on the web > Options > Account > Connected Accounts.> You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AddressId_ <br/> |Optional  <br/> |System.String  <br/> | The _AddressId_ parameter specifies the email address. The value of _AddressId_ is in the following formats: <br/>  The user's primary email address is displayed as an email address, for example, bob@contoso.com. <br/>  The email address of a POP, IMAP, or Hotmail subscription is displayed as a GUID. <br/>  No default From address is set. This is represented by the value `$null`.  <br/>  You can find the values of the _AddressId_ parameter on a user's mailbox by running the command **Get-SendAddress -Mailbox \<mailbox\>**. <br/>  If you use the _AddressId_ parameter, you must also use the _Mailbox_ parameter. If you use the _AddressId_ parameter, you can't use the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SendAddressIdParameter  <br/> | The _Identity_ parameter specifies the mailbox and the email address. The value of the _Identity_ parameter is in the format _\<mailbox\>\\<address\>_. The  _\<mailbox\>_ part is any value that uniquely identifies the mailbox. The _\<address\>_ part is in one following formats: <br/>  The user's primary email address is displayed as an email address, for example, bob@contoso.com. <br/>  The email address of a POP, IMAP, or Hotmail subscription is displayed as a GUID. <br/>  No default From address is set. This is represented by a blank value. <br/>  You can find the values of the _Identity_ parameter on a user's mailbox by running the command **Get-SendAddress -Mailbox \<mailbox\>**. <br/>  If you use the _Identity_ parameter, you can't use the _AddressId_ parameter. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

