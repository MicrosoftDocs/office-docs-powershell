---
title: "Set-UMMailboxPIN"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: bd068710-2375-4ce4-96ee-79e76608ebaa
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UMMailboxPIN

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-UMMailboxPIN** cmdlet to reset the PIN for a Unified Messaging (UM)-enabled mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMMailboxPIN -Identity <MailboxIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IgnoreDefaultScope <SwitchParameter>] [-LockedOut <$true | $false>] [-NotifyEmail <String>] [-Pin <String>] [-PinExpired <$true | $false>] [-SendEmail <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example resets the PIN on the UM-enabled mailbox for tonysmith@contoso.com.
  
```
Set-UMMailboxPIN -Identity tonysmith@contoso.com
```

### Example 2

This example resets the initial PIN to 1985848 on the UM-enabled mailbox for tonysmith@contoso.com, and then sets the PIN as expired so that the user will be asked to change the PIN the next time the user logs on.
  
```
Set-UMMailboxPIN -Identity tonysmith@contoso.com -PIN 1985848 -PinExpired $true
```

### Example 3

This example locks the UM-enabled mailbox for tonysmith@contoso.com to prevent the user from accessing the mailbox.
  
```
Set-UMMailboxPIN -Identity tonysmith@contoso.com -LockedOut $true
```

### Example 4

This example unlocks the UM-enabled mailbox for tonysmith@contoso.com and allows the user access to the mailbox.
  
```
Set-UMMailboxPIN -Identity tonysmith@contoso.com -LockedOut $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-UMMailboxPIN** cmdlet is used when a UM-enabled user has been locked out of a mailbox because either the user tried to log on by using an incorrect PIN multiple times or because the user has forgotten the PIN. You can use this cmdlet to set the user's PIN. The new PIN must comply with the PIN policy rules specified in the user's mailbox policy. The new PIN is sent to the user in an email message, or sent to an alternative email address. You can control whether the user must reset the PIN at logon and if the mailbox will continue to be locked.
  
After this task is completed, the PIN on a UM-enabled mailbox is set.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the UM-enabled user PIN being set. The values for this parameter include the following: <br/>  ADObjectID <br/>  GUID <br/>  Distinguished name (DN) <br/>  Domain\Account <br/>  user principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _LockedOut_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _LockedOut_ parameter specifies whether the mailbox will continue to be locked. If set to `$true`, the mailbox is marked as locked out. By default, if this parameter is omitted or set to  `$false`, the command clears the locked-out status on the mailbox.  <br/> |
| _NotifyEmail_ <br/> |Optional  <br/> |System.String  <br/> |The  _NotifyEmail_ parameter specifies the email address to which the server sends the email message that contains the PIN reset information. By default, the message is sent to the SMTP address of the enabled user. <br/> |
| _Pin_ <br/> |Optional  <br/> |System.String  <br/> |The  _Pin_ parameter specifies a new PIN for use with the mailbox. The PIN is checked against the PIN rules defined in the Unified Messaging mailbox policy. If the PIN isn't supplied, the command generates a new PIN for the mailbox and includes it in an email message sent to the user. <br/> |
| _PinExpired_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _PINExpired_ parameter specifies whether the PIN is treated as expired. If this parameter is supplied and is set to `$false`, the user isn't required to reset the PIN the next time that the user logs on. If the PIN isn't supplied, the PIN is treated as expired and the user is prompted to reset the PIN the next time that the user logs on.  <br/> |
| _SendEmail_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _SendEmail_ parameter specifies whether to send a PIN to the user in an email message. The default is `$true`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

