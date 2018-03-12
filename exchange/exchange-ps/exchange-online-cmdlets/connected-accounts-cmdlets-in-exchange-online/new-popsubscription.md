---
title: "New-PopSubscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a8405b09-04aa-4b31-866a-3361bb1ad8b4
description: "This cmdlet is available only in the cloud-based service."
---

# New-PopSubscription

This cmdlet is available only in the cloud-based service. 
  
 The **New-PopSubscription** cmdlet allows a user to create POP subscriptions in their own cloud-based mailbox. An administrator can't use this cmdlet to create subscriptions in another user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-PopSubscription -EmailAddress <SmtpAddress> -IncomingPassword <SecureString> -IncomingServer <Fqdn> -IncomingUserName <String> -Name <String> [-Confirm [<SwitchParameter>]] [-DisplayName <String>] [-Force <SwitchParameter>] [-IncomingAuth <Basic | Spa>] [-IncomingPort <Int32>] [-IncomingSecurity <None | Ssl | Tls>] [-LeaveOnServer <$true | $false>] [-Mailbox <MailboxIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the POP subscription Contoso POP in the mailbox of the user Brian Johnson. The remote POP mailbox has the following details:
  
- Email address: bjohnson@contoso.com
    
- User name: bjohnson
    
- Password: Pa$$word1
    
- POP server: pop.contoso.com
    
- Authentication method: SSL
    
- TCP port: 995
    
```
New-PopSubscription -Name "Contoso POP" -EmailAddress bjohnson@contoso.com -IncomingUserName bjohnson -IncomingPassword (ConvertTo-SecureString -String 'Pa$$word1' -AsPlainText -Force) -IncomingServer pop.contoso.com  -IncomingSecurity Ssl -IncomingPort 995
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-PopSubscription** cmdlet creates a connection between a user's cloud-based mailbox and a remote POP mailbox. The cloud-based mailbox periodically polls the POP mailbox for new messages.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _EmailAddress_ parameter specifies the email address of the POP mailbox. <br/> |
| _IncomingPassword_ <br/> |Required  <br/> |System.Security.SecureString  <br/> |The  _IncomingPassword_ parameter specifies the password used to sign in to the POP mailbox. You must specify the value for this parameter in a secure format, for example, `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.  <br/> |
| _IncomingServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The  _IncomingServer_ parameter specifies the fully qualified domain name (FQDN) of the POP server, for example, `incoming.contoso.com`.  <br/> |
| _IncomingUserName_ <br/> |Required  <br/> |System.String  <br/> |The  _IncomingUserName_ parameter specifies the user name used to sign in to the POP mailbox. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the POP subscription. The name of the subscription doesn't have to be globally unique. The name must be unique compared to other subscriptions that exist in the same mailbox. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the friendly name of the POP subscription. If you don't specify a value for the _DisplayName_ parameter, the value of the _EmailAddress_ parameter is used. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ parameter instructs the command to create the subscription even if those settings can't be verified by the remote POP server. <br/> |
| _IncomingAuth_ <br/> |Optional  <br/> |Microsoft.Exchange.Transport.Sync.Common.Subscription.Pop.AuthenticationMechanism  <br/> |The  _IncomingAuth_ parameter sets the authentication method used by POP clients to access the POP server. Valid values are `Basic` or `Spa`, which is secure password authentication. If you don't specify a value for the  _IncomingAuth_ parameter, the value `Basic` is used. <br/> |
| _IncomingPort_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _IncomingPort_ parameter specifies the TCP port number used by POP clients to connect to the POP server. Typical values are `110` for unencrypted connections and `995` for encrypted connections. By default, the value of the _IncomingPort_ parameter is set to `110` if you don't set the _IncomingSecurity_ parameter to `Ssl` or `Tls`. If you set the  _IncomingSecurity_ parameter to `Ssl` or `Tls`, the value of the  _IncomingPort_ parameter is set to `995`. You can override the default values by specifying an integer for the  _IncomingPort_ parameter. <br/> |
| _IncomingSecurity_ <br/> |Optional  <br/> |Microsoft.Exchange.Transport.Sync.Common.Subscription.Pop.SecurityMechanism  <br/> |The  _IncomingSecurity_ parameter specifies the encryption method used by POP clients to connect to the POP server. Valid values are `None`,  `Ssl`, or  `Tls`. If you don't specify a value for the  _IncomingSecurity_ parameter, the value `None` is used. <br/> |
| _LeaveOnServer_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _LeaveOnServer_ parameter configures the behavior of retrieved messages in the POP mailbox. When the _LeaveOnServer_ parameter is set to the value `$true`, the retrieved messages are left in the POP mailbox. When it's set to the value  `$false`, retrieved messages are removed from the POP mailbox. The default value is  `$true`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the POP subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

