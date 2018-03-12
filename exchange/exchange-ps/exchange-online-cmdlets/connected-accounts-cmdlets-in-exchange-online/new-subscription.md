---
title: "New-Subscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 25da87cf-f0bc-4de5-b03a-51bb77263c18
description: "This cmdlet is available only in the cloud-based service."
---

# New-Subscription

This cmdlet is available only in the cloud-based service. 
  
The **New-Subscription** cmdlet allows a user to create Hotmail, POP, or IMAP subscriptions in their own cloud-based mailbox. An administrator can't use this cmdlet to create subscriptions in another user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-Subscription -EmailAddress <SmtpAddress> -Name <String> -Password <SecureString> [-Confirm [<SwitchParameter>]] [-DisplayName <String>] [-Force <SwitchParameter>] [-Hotmail <SwitchParameter>] [-Imap <SwitchParameter>] [-Mailbox <MailboxIdParameter>] [-Pop <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the subscription Contoso in the mailbox of the user Brian Johnson. The remote mailbox has the following details:
  
- Email address: brian@contoso.com
    
- Password: Pa$$word1
    
```
New-Subscription -Name Contoso -EmailAddress brian@contoso.com -Password (ConvertTo-SecureString -String 'Pa$$word1' -AsPlainText -Force)
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-Subscription** cmdlet creates a connection between a user's cloud-based mailbox and a remote Hotmail, POP, or IMAP mailbox. The cloud-based mailbox periodically polls the remote mailbox for new messages. If you don't specify the type of remote mailbox, the cmdlet automatically tries to configure the subscription by using all of the available subscription types.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _EmailAddress_ parameter specifies the email address of the subscription. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the subscription. The name of the subscription doesn't have to be globally unique. The name must be unique compared to other subscriptions that exist in the same mailbox. <br/> |
| _Password_ <br/> |Required  <br/> |System.Security.SecureString  <br/> |The  _Password_ parameter specifies the password used to sign in to the mailbox. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the friendly name of the subscription. If you don't specify a value for the _DisplayName_ parameter, the value of the _EmailAddress_ parameter is used. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Hotmail_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Hotmail_ switch specifies the subscription is a Hotmail subscription. You don't need to specify a value with this switch. <br/> |
| _Imap_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Imap_ switch specifies the subscription is an IMAP subscription. You don't need to specify a value with this switch. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Pop_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Pop_ switch specifies the subscription is a POP subscription. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

