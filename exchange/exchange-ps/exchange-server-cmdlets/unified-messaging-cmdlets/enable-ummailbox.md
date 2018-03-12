---
title: "Enable-UMMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5391a63c-ca60-498c-8358-5f0667140738
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Enable-UMMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Enable-UMMailbox** cmdlet to enable Unified Messaging (UM) for existing mailbox users.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-UMMailbox -Identity <MailboxIdParameter> -UMMailboxPolicy <MailboxPolicyIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables Unified Messaging on the mailbox for tonysmith@contoso.com, sets the extension and PIN for the user that must be changed when the user logs on to Outlook Voice Access, assigns the UM mailbox policy MyUMMailboxPolicy to the user's mailbox, and then sends an email message that contains the Unified Messaging welcome information to administrator@contoso.com.
  
```
Enable-UMMailbox -Identity tonysmith@contoso.com -UMMailboxPolicy MyUMMailboxPolicy -Extensions 51234 -PIN 5643892 -NotifyEmail administrator@contoso.com -PINExpired $true
```

### Example 2

This example enables Unified Messaging on a SIP-enabled mailbox for tonysmith@contoso.com, associates the UM mailbox policy MyUMMailboxPolicy, and sets the extension number, SIP resource identifier, and PIN for the user that must be changed when the user logs on to Outlook Voice Access, and then sends an email message that contains the Unified Messaging welcome information to tonysmith@contoso.com.
  
```
Enable-UMMailbox -Identity tonysmith@contoso.com -UMMailboxPolicy MyUMMailboxPolicy -Extensions 51234 -PIN 5643892 -SIPResourceIdentifier "tonysmith@contoso.com" -PINExpired $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

When the mailbox is enabled for Unified Messaging, the settings from a UM mailbox policy are applied to the mailbox. After the mailbox is enabled for Unified Messaging, the user can use the UM features that are included in Microsoft Exchange.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EnableCloudVoiceMail_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _EnableCloudVoiceMail_switch specifies whether to enable the mailbox for UM in Skype for Business Online. You don't need to specify a value with this switch.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to enable for Unified Messaging. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _UMMailboxPolicy_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _UMMailboxPolicy_ parameter specifies the UM mailbox policy that you want to associate with the mailbox. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AutomaticSpeechRecognitionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AutomaticSpeechRecognitionEnabled_ parameter specifies whether to enable Automatic Speech Recognition (ASR) for the UM mailbox. Valid values are: <br/>  `$true`: ASR is enabled for the mailbox. This is the default value. ASR is available only if the user's specified preferred language is installed.  <br/>  `$false`: ASR is disabled for the mailbox.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Extensions_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Extensions_ parameter specifies the extension number for the user. Either a single extension number or an array of telephone number extensions can be specified. The user's extension must be unique to the UM dial plan. <br/>  If you don't use this parameter, the command attempts to use a default telephone number value for the user. If you're using a Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) or E.164 dial plan, you also need to use the _SIPResourceIdentifier_ parameter. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _NotifyEmail_ <br/> |Optional  <br/> |System.String  <br/> |The _NotifyEmail_ parameter specifies the email address where the Unified Messaging welcome message is sent. By default, the message is sent to the user's SMTP email address. <br/> |
| _PilotNumber_ <br/> |Optional  <br/> |System.String  <br/> |The _PilotNumber_ parameter specifies the subscriber access number users can dial to gain access to their mailboxes. The default value is the subscriber access number that's specified on the UM dial plan. <br/> |
| _Pin_ <br/> |Optional  <br/> |System.String  <br/> |The _PIN_ parameter specifies the value for the initial PIN that's used for the UM mailbox. The PIN is checked against the UM mailbox policy rules. The PIN value must be from 4 through 24 numeric characters. <br/>  If you don't use this parameter, a system-generated PIN is sent to the user. By default, the PIN generated by the system contains six numeric characters. <br/> |
| _PinExpired_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PINExpired_ parameter specifies whether the PIN is treated as expired. If the PIN isn't supplied, the PIN is treated as expired and users are prompted to reset their PIN the next time they log on. <br/>  `$true`: The user is required to reset their PIN the next time they log on.  <br/>  `$false`: The user isn't required to reset their PIN the next time they log on.  <br/> |
| _SendWelcomeMail_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _SendWelcomeMail_ parameter specifies whether you want to send a welcome message after the mailbox has been enabled for UM. Valid values are: <br/>  `$true`: Send the welcome to UM message.  <br/>  `$false`: Don't send the welcome to UM message.  <br/> |
| _SIPResourceIdentifier_ <br/> |Optional  <br/> |System.String  <br/> |The _SIPResourceIdentifier_ parameter specifies the SIP address or E.164 address for the user. This property is compared to the URI type defined on the UM dial plan. <br/> |
| _ValidateOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ValidateOnly_ switch tells the cmdlet to evaluate the conditions and requirements necessary to perform the operation and then reports whether the operation will succeed or fail. No changes are made when the _ValidateOnly_ switch is used. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

