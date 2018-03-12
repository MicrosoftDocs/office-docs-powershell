---
title: "Set-UMMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: dd7b429d-53a8-46dd-b16b-3a8ca8424bbc

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UMMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-UMMailbox** cmdlet to set the Unified Messaging (UM) properties for a user who is currently UM-enabled.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMMailbox -Identity <MailboxIdParameter> [-AllowUMCallsFromNonUsers <None | SearchEnabled>] [-AnonymousCallersCanLeaveMessages <$true | $false>] [-AutomaticSpeechRecognitionEnabled <$true | $false>] [-CallAnsweringAudioCodec <G711 | Wma | Gsm | Mp3>] [-CallAnsweringRulesEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-FaxEnabled <$true | $false>] [-IgnoreDefaultScope <SwitchParameter>] [-ImListMigrationCompleted <$true | $false>] [-MissedCallNotificationEnabled <$true | $false>] [-Name <String>] [-OperatorNumber <String>] [-PhoneNumber <String>] [-PhoneProviderId <String>] [-PinlessAccessToVoiceMailEnabled <$true | $false>] [-PlayOnPhoneEnabled <$true | $false>] [-SubscriberAccessEnabled <$true | $false>] [-TUIAccessToCalendarEnabled <$true | $false>] [-TUIAccessToEmailEnabled <$true | $false>] [-UMMailboxPolicy <MailboxPolicyIdParameter>] [-UMSMSNotificationOption <None | VoiceMail | VoiceMailAndMissedCalls>] [-VerifyGlobalRoutingEntry <SwitchParameter>] [-VoiceMailAnalysisEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures a UM-enabled user, tony@contoso.com with the following settings:
  
- Changes the call answering audio codec to Wma
    
- Disables call answering rules
    
- Prevents him from receiving incoming faxes
    
- Enables voice mail notifications but not missed call notifications using text messaging
    
```
Set-UMMailbox -Identity tony@contoso.com -CallAnsweringAudioCodec Wma -CallAnsweringRulesEnabled $false -FaxEnabled $false -UMSMSNotificationOption VoiceMail
```

### Example 2

This example prevents the user tony@contoso.com from accessing his calendar and email when he's using Outlook Voice Access.
  
```
Set-UMMailbox -Identity tony@contoso.com -TUIAccessToCalendarEnabled $false -TUIAccessToEmailEnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-UMMailbox** cmdlet sets UM properties associated with a user who has been UM-enabled. Many of the UM properties for the user are stored on the user's mailbox, and other UM properties for the user are stored in Active Directory.
  
After this task is completed, the parameters and values specified are configured on the UM mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the user to enable for Unified Messaging. The values for this parameter include the following: <br/>  ADObjectID <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _AllowUMCallsFromNonUsers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.AllowUMCallsFromNonUsersFlags  <br/> |The _AllowUMCallsFromNonUsers_ parameter specifies whether to exclude the mailbox from directory searches. <br/> |
| _AnonymousCallersCanLeaveMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AnonymousCallersCanLeaveMessages_ parameter specifies whether diverted calls without a caller ID are allowed to leave a message. <br/> |
| _AutomaticSpeechRecognitionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AutomaticSpeechRecognitionEnabled_ parameter specifies whether users can use Automatic Speech Recognition (ASR) when they log on to their mailbox. This parameter can only be set to `$true` if there is ASR support for the language selected by the user in Microsoft Outlook on the web **Options**.  <br/> |
| _CallAnsweringAudioCodec_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AudioCodecEnum  <br/> |The _CallAnsweringAudioCodec_ parameter specifies the audio codec used to encode voice mail messages left for the user. The audio codec used is the audio codec set on the UM dial plan. The default value is Mp3. <br/> |
| _CallAnsweringRulesEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _CallAnsweringRulesEnabled_ parameter specifies whether users can configure or set up Call Answering Rules for their accounts. The default value is `$true`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FaxEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _FaxEnabled_ parameter specifies whether a user is allowed to receive incoming faxes. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _ImListMigrationCompleted_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ImListMigrationCompleted_ parameter specifies whether the UM-enabled user's Lync or Skype for Business contact list is stored in their mailbox. <br/>  Valid values are: <br/>  `$true`: The user's Lync or Skype for Business contact list is stored in their Exchange 2016 mailbox. This prevents you from migrating the mailbox back to an Exchange 2010 server.  <br/>  `$false`: The user's Lync or Skype for Business contact list is stored on a Lync or Skype for Business server. This doesn't prevent you from migrating the mailbox back to an Exchange 2010 server. This is the default value.  <br/>  Lync Server 2013 and Skype for Business Server 2015 support storing the user's contact list in their Exchange 2016 mailbox. This feature is known as theunified contact store (UCS), and it allows applications to show a consistent, up-to-date contact list. However, Exchange 2010 doesn't support the unified contact store. Therefore, before you migrate a user's Exchange 2016 mailbox back to Exchange 2010, you need to move the user's Lync or Skype for Business contact list from the unified contact store back to a Lync 2013 or Skype for Business server. For more information, see[Configuring Microsoft Lync Server 2013 to use the unified contact store](https://go.microsoft.com/fwlink/p/?LinkID=313550).  <br/> > [!NOTE]>  If you migrate an Exchange 2013 mailbox back to Exchange 2010 while the user's Lync or Skype for Business contact list is stored in the unified contact store, the user could permanently lose access to those contacts. After you verify the user's Lync or Skype for Business contact list has been moved back to a Lync 2013 or Skype for Business server, you should be able to complete the mailbox migration. If you need to migrate the mailbox despite the potential for data loss, you can manually set the _ImListMigrationCompleted_ parameter to `$false`.           |
| _MissedCallNotificationEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MissedCallNotificationEnabled_ parameter specifies whether to send missed call notifications. <br/> > [!CAUTION]> When you're integrating Unified Messaging and Lync Server or Skype for Business Server, missed call notifications aren't available to users who have mailboxes located on Exchange 2010 Mailbox servers. A missed call notification is generated when a user disconnects before the call is sent to a Mailbox server.           |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the display name for the user. The display name is limited to 64 characters. <br/> |
| _OperatorNumber_ <br/> |Optional  <br/> |System.String  <br/> |The _OperatorNumber_ parameter specifies the string of digits for the personal operator. <br/> |
| _PhoneNumber_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _PhoneNumber_ parameter specifies whether to assign a phone number to a UM-enabled user. This is only used for E.164 consumer dial plans. <br/> |
| _PhoneProviderId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _PhoneProviderId_ parameter specifies the user's phone number and mobile service provider. This information is used to provide custom call forwarding and cancelling voice mail setup instructions based on the mobile phone provider. <br/> |
| _PinlessAccessToVoiceMailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _PinlessAccessToVoiceMailEnabled_ parameter specifies whether UM-enabled users are required to use a PIN to access their voice mail. A PIN is still required to access email and the calendar. The default value is `$false`.  <br/> |
| _PlayOnPhoneEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _PlayOnPhoneEnabled_ parameter specifies whether a user can use the Play on Phone feature to listen to voice messages. The default value is `$true`.  <br/> |
| _SubscriberAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SubscriberAccessEnabled_ parameter specifies whether the users are allowed subscriber access to their individual mailboxes. If it's set to `$true`, after users are authenticated, they're able to retrieve voice mail over the telephone. The default value is  `$true`.  <br/> |
| _TUIAccessToCalendarEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _TUIAccessToCalendarEnabled_ parameter specifies whether UM-enabled users can access and manage their individual calendar using the Microsoft Outlook Voice Access telephone user interface (TUI) or touchtone interface. The default value is `$true`.  <br/> |
| _TUIAccessToEmailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _TUIAccessToEmailEnabled_ parameter specifies whether users can access their individual email messages over the telephone. The default value is `$true`.  <br/> |
| _UMMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _UMMailboxPolicy_ parameter specifies the UM mailbox policy associated with the UM-enabled user's mailbox. <br/> |
| _UMSMSNotificationOption_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.UMSMSNotificationOptions  <br/> |The _UMSMSNotificationOption_ parameter specifies whether a UM-enabled user gets SMS or text messaging notifications for voice mail only, voice mail and missed calls, or no notifications. The values for this parameter are: `VoiceMail`,  `VoiceMailAndMissedCalls`, and  `None`. The default value is  `None`.  <br/> |
| _VerifyGlobalRoutingEntry_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _VerifyGlobalRoutingEntry_ parameter specifies the phone number has been successfully registered in the global routing database. <br/> |
| _VoiceMailAnalysisEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _VoiceMailAnalysisEnabled_ parameter specifies whether a copy of each voice mail left for a UM-enabled user will be forwarded to Microsoft for analysis and improvement of speech recognition features. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

