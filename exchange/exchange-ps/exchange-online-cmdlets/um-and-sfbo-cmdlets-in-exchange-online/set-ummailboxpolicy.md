---
title: "Set-UMMailboxPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: df67ae65-cfae-4f52-9d12-19f863808705

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UMMailboxPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-UMMailboxPolicy** cmdlet to modify a Unified Messaging (UM) mailbox policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMMailboxPolicy -Identity <MailboxPolicyIdParameter> [-AllowAutomaticSpeechRecognition <$true | $false>] [-AllowCallAnsweringRules <$true | $false>] [-AllowCommonPatterns <$true | $false>] [-AllowDialPlanSubscribers <$true | $false>] [-AllowedInCountryOrRegionGroups <MultiValuedProperty>] [-AllowedInternationalGroups <MultiValuedProperty>] [-AllowExtensions <$true | $false>] [-AllowFax <$true | $false>] [-AllowMessageWaitingIndicator <$true | $false>] [-AllowMissedCallNotifications <$true | $false>] [-AllowPinlessVoiceMailAccess <$true | $false>] [-AllowPlayOnPhone <$true | $false>] [-AllowSMSNotification <$true | $false>] [-AllowSubscriberAccess <$true | $false>] [-AllowTUIAccessToCalendar <$true | $false>] [-AllowTUIAccessToDirectory <$true | $false>] [-AllowTUIAccessToEmail <$true | $false>] [-AllowTUIAccessToPersonalContacts <$true | $false>] [-AllowVoiceMailAnalysis <$true | $false>] [-AllowVoiceMailPreview <$true | $false>] [-AllowVoiceResponseToOtherMessageTypes <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-FaxMessageText <String>] [-FaxServerURI <String>] [-ForceUpgrade <SwitchParameter>] [-InformCallerOfVoiceMailAnalysis <$true | $false>] [-LogonFailuresBeforePINReset <Unlimited>] [-MaxGreetingDuration <Int32>] [-MaxLogonAttempts <Unlimited>] [-MinPINLength <Int32>] [-Name <String>] [-PINHistoryCount <Int32>] [-PINLifetime <Unlimited>] [-ProtectAuthenticatedVoiceMail <None | Private | All>] [-ProtectedVoiceMailText <String>] [-ProtectUnauthenticatedVoiceMail <None | Private | All>] [-RequireProtectedPlayOnPhone <$true | $false>] [-ResetPINText <String>] [-SourceForestPolicyNames <MultiValuedProperty>] [-UMDialPlan <UMDialPlanIdParameter>] [-UMEnabledText <String>] [-VoiceMailPreviewPartnerAddress <SmtpAddress>] [-VoiceMailPreviewPartnerAssignedID <String>] [-VoiceMailPreviewPartnerMaxDeliveryDelay <Int32>] [-VoiceMailPreviewPartnerMaxMessageDuration <Int32>] [-VoiceMailText <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the PIN settings for users associated with the UM mailbox policy MyUMMailboxPolicy.
  
```
Set-UMMailboxPolicy -Identity MyUMMailboxPolicy -LogonFailuresBeforePINReset 8 -MaxLogonAttempts 12 -MinPINLength 8 -PINHistoryCount 10 -PINLifetime 60 -ResetPINText "The PIN used to allow you access to your mailbox using Outlook Voice Access has been reset."
```

### Example 2

This example selects the in-country or region groups and international groups from those configured on the UM dial plan associated with the UM mailbox policy. UM-enabled users associated with this UM mailbox policy can place outbound calls according to the rules defined on these groups.
  
```
Set-UMMailboxPolicy -Identity MyUMMailboxPolicy -AllowDialPlanSubscribers $true -AllowedInCountryOrRegionGroups InCountry/RegionGroup1,InCountry/RegionGroup2 -AllowedInternationalGroups InternationalGroup1,InternationalGroup2 -AllowExtensions $true
```

### Example 3

This example configures the text of voice mail messages sent to UM-enabled users and the text included in an email message sent to a user who is UM-enabled.
  
```
Set-UMMailboxPolicy -Identity MyUMMailboxPolicy -UMEnabledText "You have been enabled for Unified Messaging." -VoiceMailText "You have received a voice mail message from Microsoft Exchange Unified Messaging."
```

## Detailed Description
<a name="DetailedDescription"> </a>

When the **Set-UMMailboxPolicy** cmdlet is used to modify UM mailbox policy objects, you can change settings such as PIN policies, message text settings, and dialing restrictions for a single UM-enabled recipient or multiple UM-enabled recipients. UM mailbox policies are associated with UM-enabled mailboxes and can be configured to increase the level of security for UM-enabled users.
  
After this task is completed, the parameters and values specified are configured on the UM mailbox policy.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the identifier for the UM mailbox policy being modified. This is the directory object ID for the UM mailbox policy. <br/> |
| _AllowAutomaticSpeechRecognition_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowAutomaticSpeechRecognition_ parameter specifies whether users associated with the UM mailbox policy can use Automatic Speech Recognition (ASR). The default value is `$true`.  <br/> |
| _AllowCallAnsweringRules_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowCallAnsweringRules_ parameter specifies whether users associated with the UM mailbox policy are allowed to configure or set up Call Answering Rules for their accounts. The default value is `$true`.  <br/> |
| _AllowCommonPatterns_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowCommonPatterns_ parameter specifies whether to allow obvious PINs. Examples of obvious PINs include subsets of the telephone number, sequential numbers, or repeated numbers. If set to `$false`, sequential and repeated numbers and the suffix of the mailbox extension are rejected. If set to  `$true`, only the suffix of the mailbox extension is rejected.  <br/> |
| _AllowDialPlanSubscribers_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowDialPlanSubscribers_ parameter specifies whether to let subscribers in a dial plan dial a number that resolves to another subscriber within the same dial plan. The default value is `$true`.  <br/> |
| _AllowedInCountryOrRegionGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AllowedInCountryOrRegionGroups_ parameter specifies whether to let subscribers dial the list of in-country/region dial group names. The names that subscribers are allowed to dial must match the group names defined in the UM dial plan. The string is limited to 128 characters. <br/> |
| _AllowedInternationalGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AllowedInternationalGroups_ parameter specifies whether to let subscribers dial the list of international dial group names. The names that subscribers dial must match the group names defined in the dial plan. <br/> |
| _AllowExtensions_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowExtensions_ parameter specifies whether to let subscribers dial calls to the number of digits specified on the UM dial plan. The default value is `$true`.  <br/> |
| _AllowFax_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowFax_ parameter specifies whether users associated with the UM mailbox policy are allowed to receive incoming faxes. The default value is `$true`.  <br/> |
| _AllowMessageWaitingIndicator_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowMessageWaitingIndicator_ parameter specifies whether users associated with the UM mailbox policy can receive notifications that they've received a new voice mail message. The default value is `$true`.  <br/> |
| _AllowMissedCallNotifications_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowMissedCallNotifications_ parameter specifies whether missed call notifications are enabled for users associated with the UM mailbox policy. The default value is `$true`.  <br/> > [!CAUTION]> When you're integrating Unified Messaging and Lync Server or Skype for Business Server, missed call notifications aren't available to users who have mailboxes located on Exchange 2010 Mailbox servers. A missed call notification is generated when a user disconnects before the call is sent to a Mailbox server.           |
| _AllowPinlessVoiceMailAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowPinlessVoiceMailAccess_ parameter specifies whether users associated with the UM mailbox policy are required to use a PIN to access their voice mail. A PIN is still required to access their email and calendar. The default value is `$false`.  <br/> |
| _AllowPlayOnPhone_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowPlayOnPhone_ parameter specifies whether users associated with the UM mailbox policy can use the Play on Phone feature to listen to voice mail messages. The default value is `$true`.  <br/> |
| _AllowSMSNotification_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowSMSNotification_ parameter specifies whether UM-enabled users associated with the UM mailbox policy are allowed to get SMS or text messages sent to their mobile phones. If this parameter is set to `$true`, you also want to set the **Set-UMMailbox** cmdlet _UMSMSNotificationOption_ parameter for the UM-enabled user to either `VoiceMail` or `VoiceMailAndMissedCalls`. The default value is  `$true`.  <br/> |
| _AllowSubscriberAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowSubscriberAccess_ parameter specifies whether users associated with the UM mailbox policy are allowed subscriber access to their individual mailboxes. If this parameter is set to `$true`, after users are authenticated, they're able to retrieve voice mail over the telephone. The default value is  `$true`.  <br/> |
| _AllowTUIAccessToCalendar_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowTUIAccessToCalendar_ parameter specifies whether users associated with the UM mailbox policy can access their individual calendars over the telephone. The default value is `$true`.  <br/> |
| _AllowTUIAccessToDirectory_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowTUIAccessToDirectory_ parameter specifies whether users associated with the UM mailbox policy can access the directory over the telephone. The default value is `$true`.  <br/> |
| _AllowTUIAccessToEmail_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowTUIAccessToEmail_ parameter specifies whether users associated with the UM mailbox policy can access their individual email messages over the telephone. The default value is `$true`.  <br/> |
| _AllowTUIAccessToPersonalContacts_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowTUIAccessToPersonalContacts_ parameter specifies whether users associated with the UM mailbox policy can access their personal contacts over the telephone. The default value is `$true`.  <br/> |
| _AllowVoiceMailAnalysis_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowVoiceMailAnalysis_ parameter specifies whether a copy of each voice mail left for the users associated with the UM mailbox policy will be forwarded to Microsoft for analysis and improvement of our speech recognition features. <br/> |
| _AllowVoiceMailPreview_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowVoiceMailPreview_ parameter specifies whether users associated with the UM mailbox policy are able to receive Voice Mail Previews for call-answered messages, or have Voice Mail Previews provided for voice mail messages that they send to other users in their mailbox. The default value is `$true`.  <br/> |
| _AllowVoiceResponseToOtherMessageTypes_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowVoiceResponseToOtherMessageTypes_ parameter specifies whether UM-enabled users associated with the UM mailbox policy can record and attach a voice mail message when replying to email messages and calendar items. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FaxMessageText_ <br/> |Optional  <br/> |System.String  <br/> |The  _FaxMessageText_ parameter specifies the text included in the body part of fax messages. This text is limited to 512 characters. <br/> |
| _FaxServerURI_ <br/> |Optional  <br/> |System.String  <br/> |The  _FaxServerURI_ parameter specifies the Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) for the fax solution that serves the UM-enabled users associated with the UM mailbox policy. This fax product or fax service accepts incoming fax calls that were redirected from Exchange Server 2016 Mailbox servers and creates inbound fax messages for the UM-enabled users associated with the UM mailbox policy. Although you can enter more than one fax server URI, only one URI will be used by Mailbox servers running UM services. <br/> |
| _ForceUpgrade_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ForceUpgrade_ switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch. <br/> |
| _InformCallerOfVoiceMailAnalysis_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _InformCallerOfVoiceMailAnalysis_ parameter specifies whether the callers leaving the voice mails will be informed about the possibility of their voice mails being forwarded to Microsoft for analysis. <br/> |
| _LogonFailuresBeforePINReset_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _LogonFailuresBeforePINReset_ parameter specifies the number of sequential unsuccessful logon attempts before the mailbox PIN is automatically reset. To disable this feature, set this parameter to `Unlimited`. If this parameter isn't set to  `Unlimited`, it must be set to less than the value of the  _MaxLogonAttempts_ parameter. The range is from 0 through 999. The default setting is 5. <br/> |
| _MaxGreetingDuration_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaxGreetingDuration_ parameter specifies the maximum greeting length. The range is from 1 through 10 minutes. The default value is 5 minutes. <br/> |
| _MaxLogonAttempts_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxLogonAttempts_ parameter specifies the number of times users can try unsuccessfully to log on, in sequence, before the UM mailboxes are locked. The range is from 1 through 999. The default value is 15. <br/> |
| _MinPINLength_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MinPINLength_ parameter specifies the minimum number of digits required in a PIN for UM-enabled users. The range is from 4 through 24. The default value is 6. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the display name for the UM mailbox policy. This setting is limited to 64 characters. <br/> |
| _PINHistoryCount_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _PINHistoryCount_ parameter specifies the number of previous PINs that are remembered and aren't allowed during a PIN reset. This number includes the first time that the PIN was set. The range is from 1 through 20. The default value is 5. <br/> |
| _PINLifetime_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _PINLifetime_ parameter specifies the number of days until a new password is required. The range is from 1 through 999. The default value is 60. If you specify `Unlimited`, the users' PINs won't expire.  <br/> |
| _ProtectAuthenticatedVoiceMail_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DRMProtectionOptions  <br/> |The  _ProtectAuthenticatedVoiceMail_ parameter specifies whether Mailbox servers that answer Outlook Voice Access calls for UM-enabled users associated with the UM mailbox policy create protected voice mail messages. The default setting is `None`. This means that no protection is applied to voice mail messages. If the value is set to  `Private`, only messages marked as private are protected. If the value is set to  `All`, every voice mail message is protected.  <br/> |
| _ProtectedVoiceMailText_ <br/> |Optional  <br/> |System.String  <br/> |The  _ProtectedVoiceMailText_ parameter specifies the text included in the body part of the protected voice mail messages for UM-enabled users associated with the UM mailbox policy. This text can contain up to 512 characters. <br/> |
| _ProtectUnauthenticatedVoiceMail_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DRMProtectionOptions  <br/> |The  _ProtectUnauthenticatedVoiceMail_ parameter specifies whether the Mailbox servers that answer calls for UM-enabled users associated with the UM mailbox policy create protected voice mail messages. This also applies when a message is sent from a UM auto attendant to a UM-enabled user associated with the UM mailbox policy. The default setting is `None`. This means that no protection is applied to voice mail messages. If the value is set to  `Private`, only messages marked as private are protected. If the value is set to  `All`, every voice mail message is protected.  <br/> |
| _RequireProtectedPlayOnPhone_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireProtectedPlayOnPhone_ parameter specifies whether users associated with the UM mailbox policy can only use Play on Phone for protected voice mail messages or whether users can use multimedia software to play the protected message. The default value is `$false`. When set to  `$false`, users are able to use both methods to listen to protected voice mail messages.  <br/> |
| _ResetPINText_ <br/> |Optional  <br/> |System.String  <br/> |The  _ResetPINText_ parameter specifies the text to be included in the PIN reset email message. This text is limited to 512 characters. <br/> |
| _SourceForestPolicyNames_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SourceForestPolicyNames_ parameter specifies the name or names of the corresponding UM mailbox policy objects located in the source forest during a cross-forest migration. <br/> |
| _UMDialPlan_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The  _UMDialPlan_ parameter specifies the UM dial plan associated with the UM mailbox policy. <br/> |
| _UMEnabledText_ <br/> |Optional  <br/> |System.String  <br/> |The  _UMEnabledText_ parameter specifies the text to be included when a user is enabled for Unified Messaging. This text is limited to 512 characters. <br/> |
| _VoiceMailPreviewPartnerAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _VoiceMailPreviewPartnerAddress_ parameter specifies the SMTP address of a Voice Mail Preview partner that's contracted to provide transcription services for UM-enabled users in this UM mailbox policy. The default value is `$null`.  <br/> |
| _VoiceMailPreviewPartnerAssignedID_ <br/> |Optional  <br/> |System.String  <br/> |The  _VoiceMailPreviewPartnerAssignedID_ parameter specifies the identification string, if any, provided to the organization by the Voice Mail Preview partner that's contracted to provide transcription services for UM-enabled users in this UM mailbox policy. The default value is `$null`.  <br/> |
| _VoiceMailPreviewPartnerMaxDeliveryDelay_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _VoiceMailPreviewPartnerMaxDeliveryDelay_ parameter specifies the number of seconds that a Mailbox server waits for a Voice Mail Preview partner system to return a message with a Voice Mail Preview. If this time is exceeded, the Mailbox server delivers the voice mail message without a preview. The default value is 1200. The minimum value for this parameter is 300. <br/> |
| _VoiceMailPreviewPartnerMaxMessageDuration_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _VoiceMailPreviewPartnerMaxMessageDuration_ parameter specifies the maximum duration, in seconds, of voice mail messages sent to the Voice Mail Preview partner that's contracted to provide transcription services for UM-enabled users in this UM mailbox policy. The default value is 180. The minimum number for this parameter is 60. This setting should be set equal to the maximum value allowed by the Voice Mail Preview partner. <br/> |
| _VoiceMailText_ <br/> |Optional  <br/> |System.String  <br/> |The  _VoiceMailText_ parameter specifies the text to be included in the body part of voice mail messages. The parameter applies to call answering messages in addition to messages originated by an authenticated subscriber. This text is limited to 512 characters. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

