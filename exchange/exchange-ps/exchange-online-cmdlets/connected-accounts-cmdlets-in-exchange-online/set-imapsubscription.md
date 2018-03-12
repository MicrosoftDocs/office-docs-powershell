---
title: "Set-ImapSubscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 2d7f36c8-38db-4318-879c-8f77cfd09b06
description: "This cmdlet is available only in the cloud-based service."
---

# Set-ImapSubscription

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-ImapSubscription** cmdlet to modify the properties of an existing IMAP subscription configured in a user's cloud-based mailbox.
  
```
Set-ImapSubscription -Identity <AggregationSubscriptionIdParameter> [-Mailbox <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the display name of the IMAP subscription Fabrikam IMAP that's configured in the cloud-based mailbox of the user Kim Akers.
  
```
Set-ImapSubscription "Fabrikam IMAP" -Mailbox "Kim Akers" -DisplayName "Kim's Fabrikam Mail"
```

### Example 2

This example changes the IMAP server value to imap.contoso.com for the IMAP subscription Brian Contoso Mail that's configured in the cloud-based mailbox of the user Brian Johnson".
  
```
Set-ImapSubscription "Brian Contoso Mail" -Mailbox "Brian Johnson" -IncomingServer imap.contoso.com -Force
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can set properties for the IMAP subscription, such as the IMAP server, TCP port number, encryption method, and authentication method.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AggregationSubscriptionIdParameter  <br/> | The _Identity_ parameter specifies the IMAP subscription. You can identify the subscription by using one of the following methods: <br/>  Specify the globally unique identifier of the subscription, which is its canonical name (CN). <br/>  Use the _Mailbox_ parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription. <br/>  You can find the identifying values for an IMAP subscription, such as _Identity_ and _Name_, by running this command:  `Get-ImapSubscription -Mailbox <mailbox>`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the friendly name of the subscription. <br/> |
| _EmailAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _EmailAddress_ parameter specifies the email address of the IMAP mailbox. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the IMAP subscription is enabled. This parameter accepts `$true` or `$false` values. The default is `$true`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ parameter instructs the command to modify the specified subscription settings even if those settings can't be verified by the remote IMAP server. <br/> |
| _IncomingAuth_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IMAPAuthenticationMechanism  <br/> |The  _IncomingAuth_ parameter sets the authentication method used by IMAP clients to access the IMAP server. The values are `Basic` or `Ntlm`. The default value is  `Basic`.  <br/> |
| _IncomingPassword_ <br/> |Optional  <br/> |System.Security.SecureString  <br/> |The  _IncomingPassword_ parameter specifies the password used to sign in to the IMAP mailbox. You must specify the value for this parameter in a secure format, for example, `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.  <br/> |
| _IncomingPort_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _IncomingPort_ parameter specifies the TCP port number used by IMAP clients to connect to the IMAP server. Typical values are `143` for unencrypted connections and `993` for encrypted connections. By default, the value of the _IncomingPort_ parameter is set to `143` if you don't set the _IncomingSecurity_ parameter to `Ssl` or `Tls`. If you set the  _IncomingSecurity_ parameter to `Ssl` or `Tls`, the value of the  _IncomingPort_ parameter is set to `993`. You can override the default values by specifying an integer for the  _IncomingPort_ parameter. <br/> |
| _IncomingSecurity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IMAPSecurityMechanism  <br/> |The  _IncomingSecurity_ parameter specifies the encryption method used by IMAP clients to connect to the IMAP server. The values are `None`,  `Ssl`, or  `Tls`. The default value is  `None`.  <br/> |
| _IncomingServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The  _IncomingServer_ parameter specifies the fully qualified domain name (FQDN) of the IMAP server, for example, `incoming.contoso.com`.  <br/> |
| _IncomingUserName_ <br/> |Optional  <br/> |System.String  <br/> |The  _IncomingUserName_ parameter specifies the user name used to sign in to the IMAP mailbox. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the IMAP subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _ResendVerification_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ResendVerification_ parameter generates verification data for the IMAP subscription. This test is part of the verification process that allows the user to send messages from their cloud-based mailbox using the From address of the subscribed IMAP mailbox. <br/> The  _ResendVerification_ parameter can't be specified with any other parameters that modify the settings of the subscription. Also, the _ResendVerification_ and _ValidateSecret_ parameters are mutually exclusive. <br/> |
| _ValidateSecret_ <br/> |Optional  <br/> |System.String  <br/> |The  _ValidateSecret_ parameter validates verification data for the IMAP subscription. This test is part of the verification process that allows the user to send messages from their cloud-based mailbox using the From address of the subscribed IMAP mailbox. <br/> The  _ValidateSecret_ parameter can't be specified with any other parameters that modify the settings of the subscription. Also, the _ResendVerification_ and _ValidateSecret_ parameters are mutually exclusive. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

