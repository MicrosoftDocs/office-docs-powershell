---
title: "Set-UMDialplan"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: bf6cbfde-35aa-4a03-86b0-50e2c3664eeb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UMDialplan

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-UMDialplan** cmdlet to set various properties on a Unified Messaging (UM) dial plan.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMDialPlan -Identity <UMDialPlanIdParameter> [-AccessTelephoneNumbers <MultiValuedProperty>] [-AllowDialPlanSubscribers <$true | $false>] [-AllowedInCountryOrRegionGroups <MultiValuedProperty>] [-AllowedInternationalGroups <MultiValuedProperty>] [-AllowExtensions <$true | $false>] [-AllowHeuristicADCallingLineIdResolution <$true | $false>] [-AudioCodec <G711 | Wma | Gsm | Mp3>] [-AutomaticSpeechRecognitionEnabled <$true | $false>] [-CallAnsweringRulesEnabled <$true | $false>] [-CallSomeoneEnabled <$true | $false>] [-ConfiguredInCountryOrRegionGroups <MultiValuedProperty>] [-ConfiguredInternationalGroups <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-ContactAddressList <AddressListIdParameter>] [-ContactRecipientContainer <OrganizationalUnitIdParameter>] [-ContactScope <DialPlan | GlobalAddressList | Extension | AutoAttendantLink | AddressList>] [-CountryOrRegionCode <String>] [-DefaultLanguage <UMLanguage>] [-DialByNamePrimary <LastFirst | FirstLast | SMTPAddress>] [-DialByNameSecondary <LastFirst | FirstLast | SMTPAddress | None>] [-DomainController <Fqdn>] [-EquivalentDialPlanPhoneContexts <MultiValuedProperty>] [-Extension <String>] [-FaxEnabled <$true | $false>] [-ForceUpgrade <SwitchParameter>] [-InCountryOrRegionNumberFormat <NumberFormat>] [-InfoAnnouncementEnabled <True | False | Uninterruptible>] [-InfoAnnouncementFilename <String>] [-InputFailuresBeforeDisconnect <Int32>] [-InternationalAccessCode <String>] [-InternationalNumberFormat <NumberFormat>] [-LegacyPromptPublishingPoint <String>] [-LogonFailuresBeforeDisconnect <Int32>] [-MatchedNameSelectionMethod <Title | Department | Location | None | PromptForAlias>] [-MaxCallDuration <Int32>] [-MaxRecordingDuration <Int32>] [-Name <String>] [-NationalNumberPrefix <String>] [-NumberingPlanFormats <MultiValuedProperty>] [-OperatorExtension <String>] [-OutsideLineAccessCode <String>] [-PilotIdentifierList <MultiValuedProperty>] [-RecordingIdleTimeout <Int32>] [-SendVoiceMsgEnabled <$true | $false>] [-TUIPromptEditingEnabled <$true | $false>] [-UMAutoAttendant <UMAutoAttendantIdParameter>] [-VoIPSecurity <SIPSecured | Unsecured | Secured>] [-WelcomeGreetingEnabled <$true | $false>] [-WelcomeGreetingFilename <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the UM dial plan MyDialPlan to use 9 for the outside line access code.
  
```
Set-UMDialplan -Identity MyDialPlan -OutsideLineAccessCode 9
```

### Example 2

This example configures the UM dial plan MyDialPlan to use a welcome greeting.
  
```
Set-UMDialplan -Identity MyDialPlan -WelcomeGreetingEnabled $true -WelcomeGreetingFilename welcome.wav
```

### Example 3

This example configures the UM dial plan MyDialPlan with dialing rules.
  
```
$csv=import-csv "C:\MyInCountryGroups.csv"; Set-UMDialPlan -Identity MyDialPlan -ConfiguredInCountryOrRegionGroups $csv; Set-UMDialPlan -Identity MyDialPlan -AllowedInCountryOrRegionGroups "local, long distance"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-UMDialplan** cmdlet changes or modifies the properties of an existing UM dial plan. Some UM dial plan properties are required and are created by default. However, in some cases, after the UM dial plan is created, not all properties for the UM dial plan are writable. Therefore, some of the properties can't be changed unless the existing UM dial plan is deleted and a new one is created.
  
> [!IMPORTANT]
> UM dial plans are important to the operation of Unified Messaging. Modifications to an existing UM dial plan should be performed by an administrator who understands the implications of changes to UM dial plans. 
  
After this task is completed, the parameters and values specified are configured on the UM dial plan.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The  _Identity_ parameter specifies the UM dial plan ID. This parameter is the directory object identifier for the UM dial plan. This parameter is used to link mailboxes and Mailbox and Client Access servers to dial plans. <br/> |
| _AccessTelephoneNumbers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AccessTelephoneNumbers_ parameter specifies a single valid voice mail pilot number or a list of valid voice mail pilot numbers. This list is presented to you when a user is being enabled for Unified Messaging. <br/> |
| _AllowDialPlanSubscribers_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowDialPlanSubscribers_ parameter specifies whether to allow subscribers dial numbers that resolve to a subscriber within the same dial plan. The default value is `$true`.  <br/> |
| _AllowedInCountryOrRegionGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AllowedInCountryOrRegionGroups_ parameter specifies the list of in-country/region names from the same dial group that can be dialed. The name of the allowed in-country/region group must match the group name specified in the UM dial plan. <br/> |
| _AllowedInternationalGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AllowedInternationalGroups_ parameter specifies the list of international dial group names allowed. The international dial group name must match the group name specified in the dial plan. <br/> |
| _AllowExtensions_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowExtensions_ parameter specifies whether to allow calls to dial plan extensions. The default value is `$false`.  <br/> |
| _AllowHeuristicADCallingLineIdResolution_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowHeuristicADCallingLineIdResolution_ parameter specifies whether to allow calling line ID resolution using telephone number fields that may be configured in Active Directory. When this parameter is set to `$true`, the telephone numbers such as those defined in the **Mobile** or **Home** telephone number fields in Active Directory are used. Setting this parameter to `$true` allows for resolution of calling IDs for both UM-enabled and non-UM-enabled users. The default is `$true`. You may want to set this parameter to  `$false` if the telephone numbers for users aren't in a standard format. If the telephone numbers aren't in a standard format, the Mailbox server may not be able to correctly resolve the caller ID to a name of a user in a consistent manner. <br/> |
| _AudioCodec_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AudioCodecEnum  <br/> |The  _AudioCodec_ parameter specifies the audio codec used for recording. `Mp3` is the default setting. <br/> |
| _AutomaticSpeechRecognitionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AutomaticSpeechRecognitionEnabled_ parameter specifies whether Automatic Speech Recognition (ASR) is enabled for users who are members of the dial plan. <br/> |
| _CallAnsweringRulesEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _CallAnsweringRulesEnabled_ parameter specifies whether Call Answering Rules are enabled for UM-enabled users associated with the UM dial plan. <br/> |
| _CallSomeoneEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _CallSomeoneEnabled_ parameter specifies whether the Call Someone feature is enabled. <br/> |
| _ConfiguredInCountryOrRegionGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ConfiguredInCountryOrRegionGroups_ parameter specifies the in-country groups that can be used. Each string consists of four parts: <br/>  Group name (up to 32 characters) <br/>  AllowedNumberString <br/>  DialNumberString <br/>  TextComment <br/> |
| _ConfiguredInternationalGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ConfiguredInternationalGroups_ parameter specifies the international groups that can be used. Each string consists of four parts: <br/>  Group name (up to 32 characters) <br/>  AllowedNumberString <br/>  DialNumberString <br/>  TextComment <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContactAddressList_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> |The  _ContactAddressList_ parameter specifies the identity of the address list. If the _ContactScope_ parameter is set to `AddressList`, this parameter defines the scope for directory searches.  <br/> |
| _ContactRecipientContainer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The  _ContactRecipientContainer_ parameter specifies the name or identity of the container used for directory searches. <br/> |
| _ContactScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.CallSomeoneScopeEnum  <br/> |The  _ContactScope_ parameter specifies the scope of the directory search provided to callers when they access the UM dial plan and specify a user's name. <br/> |
| _CountryOrRegionCode_ <br/> |Optional  <br/> |System.String  <br/> |The  _CountryOrRegionCode_ parameter specifies the country or region code that precedes a telephone number used to place calls from other countries or regions to the country or region in which the UM dial plan is located. For example, 1 is the code used for North America, and 44 is the code used for the United Kingdom. <br/> |
| _DefaultLanguage_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.UMLanguage  <br/> |The  _DefaultLanguage_ parameter specifies the default language of the system. This default language is selected from the list of available languages. The default value is `U.S. English`.  <br/> |
| _DialByNamePrimary_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DialByNamePrimaryEnum  <br/> |The  _DialByNamePrimary_ parameter specifies that the Dial by Name lookup key is to be created from the specified source. The default value is `LastFirst`.  <br/> |
| _DialByNameSecondary_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DialByNameSecondaryEnum  <br/> |The  _DialByNameSecondary_ parameter specifies that the secondary Dial by Name lookup key is to be created from the specified source. The default value is `SMTPAddress`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EquivalentDialPlanPhoneContexts_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _EquivalentDialPlanPhoneContexts_ parameter specifies the name of an equivalency dial plan. This parameter can be used when two UM dial plans exist but are in different forests or when a Private Branch eXchange (PBX) numbering plan spans two UM dial plans. Adding the name of the equivalency dial plan allows name lookups using a caller ID to search in the user's dial plan but then also search for a name for the calling line ID in any equivalent dial plans that are configured. <br/> |
| _Extension_ <br/> |Optional  <br/> |System.String  <br/> |The  _Extension_ parameter specifies the extension number used by the Call Someone feature when a call is transferred. <br/> |
| _FaxEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _FaxEnabled_ parameter specifies whether the Mailbox servers associated with the UM dial plan answers and processes incoming fax calls. The default value is `$true`.  <br/> |
| _ForceUpgrade_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ForceUpgrade_ switch specifies whether you're prompted for confirmation before a UM dial plan object is upgraded. <br/> |
| _InCountryOrRegionNumberFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NumberFormat  <br/> |The  _InCountryOrRegionNumberFormat_ parameter specifies the prefix string to use and the number of digits to take from the directory. This number is used when dialing into this dial plan from inside the same country or region code. <br/> |
| _InfoAnnouncementEnabled_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.InfoAnnouncementEnabledEnum  <br/> |The  _InfoAnnouncementEnabled_ parameter specifies whether an informational announcement is enabled. This parameter can be set to `True`,  `False`, or  `Uninterruptible`. The default value is  `False`.  <br/> |
| _InfoAnnouncementFilename_ <br/> |Optional  <br/> |System.String  <br/> |The  _InfoAnnouncementFilename_ parameter specifies the audio file name for an informational announcement. <br/> |
| _InputFailuresBeforeDisconnect_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _InputFailuresBeforeDisconnect_ parameter specifies the number of sequential user input errors allowed before the call is disconnected. The default value is `3`.  <br/> |
| _InternationalAccessCode_ <br/> |Optional  <br/> |System.String  <br/> |The  _InternationalAccessCode_ parameter specifies the code that precedes a telephone number to dial international calls. For example, 011 is the code used to call the United States. <br/> |
| _InternationalNumberFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NumberFormat  <br/> |The  _InternationalNumberFormat_ parameter specifies the prefix string to use and the number of digits to take from the directory, when dialing into this dial plan from a different country code. <br/> |
| _LegacyPromptPublishingPoint_ <br/> |Optional  <br/> |System.String  <br/> |The  _LegacyPromptPublishingPoint_ parameter was used to specify the location of the prompt publishing point for Exchange Server 2007 Unified Messaging servers. This parameter was used in coexistence scenarios when Exchange 2007 Unified Messaging servers were also included in the UM dial plan. <br/> |
| _LogonFailuresBeforeDisconnect_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _LogonFailuresBeforeDisconnect_ parameter specifies the number of sequential unsuccessful logon attempts that can be made before the call is disconnected. The default value is `3`.  <br/> |
| _MatchedNameSelectionMethod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DisambiguationFieldEnum  <br/> | The _MatchedNameSelectionMethod_ parameter specifies the selection to use to differentiate between users who have names that match the touchtone or speech input. This setting can be set to the following: <br/>  `Title` <br/>  `Department` <br/>  `Location` <br/>  `None` <br/>  `PromptForAlias` <br/> |
| _MaxCallDuration_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaxCallDuration_ parameter specifies the maximum length of time that a call can last before it's interrupted and the call is dropped. The default value is `30` minutes. <br/> |
| _MaxRecordingDuration_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaxRecordingDuration_ parameter specifies the maximum length of time that messages can be recorded. This includes all kinds of calls. The default is `20` minutes. The value of this setting can be from 1 through 100. Setting this value too low can cause long voice messages to be disconnected before they are completed. Setting this value too high lets users save lengthy voice messages in their Inboxes. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the display name to use for the UM dial plan. This name is limited to 64 characters. <br/> |
| _NationalNumberPrefix_ <br/> |Optional  <br/> |System.String  <br/> |The  _NationalNumberPrefix_ parameter specifies the dialing code that precedes a telephone number when placing calls from one local area to another within a specific country or region. For example, 1 is the code used within North America, and 0 is the code used within the United Kingdom. <br/> |
| _NumberingPlanFormats_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NumberingPlanFormats_ parameter specifies one or more phone number masks that can be used for resolving caller ID to names of users in Active Directory. <br/> |
| _OperatorExtension_ <br/> |Optional  <br/> |System.String  <br/> |The  _OperatorExtension_ parameter specifies the extension number of the operator. If this parameter isn't specified, the Do Not Allow Transfer to the Operator feature is unavailable. <br/> |
| _OutsideLineAccessCode_ <br/> |Optional  <br/> |System.String  <br/> |The  _OutsideLineAccessCode_ parameter specifies the code that precedes a telephone number to dial an external in-country telephone number. This code is also referred to as a trunk access code. The default value is `9`.  <br/> |
| _PilotIdentifierList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _PilotIdentifierList_ parameter specifies the pilot numbers configured on the dial plan. A single dial plan can have multiple pilot numbers. The pilot numbers must be in the E.164 format. <br/> |
| _RecordingIdleTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _RecordingIdleTimeout_ parameter specifies the length of time that a caller can be silent when recording a voice message before the recording is ended. The default value is `5` seconds. <br/> |
| _SendVoiceMsgEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _SendVoiceMsgEnabled_ parameter specifies whether the Send Message feature is enabled. <br/> |
| _TUIPromptEditingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _TUIPromptEditingEnabled_ parameter specifies whether authorized users are permitted to record UM dial plan or automated attendant prompts by using the Telephone User Interface (TUI). The default setting is `$false`.  <br/> |
| _UMAutoAttendant_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The  _UMAutoAttendant_ parameter specifies the auto attendant run when the caller presses the star (*) key. If this parameter is specified, it overrides the Call Someone feature. <br/> |
| _VoIPSecurity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMVoIPSecurityType  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _VoIPSecurity_ parameter specifies whether the Voice over IP (VoIP) traffic is encrypted or that the signaling channel or the signaling and the media channels are encrypted by using mutual Transport Layer Security (TLS). The default setting is `Unsecured`.  <br/> |
| _WelcomeGreetingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _WelcomeGreetingEnabled_ parameter specifies whether a custom welcome greeting is enabled. The default value is `$false`.  <br/> |
| _WelcomeGreetingFilename_ <br/> |Optional  <br/> |System.String  <br/> |The  _WelcomeGreetingFilename_ parameter specifies the audio file name for the welcome greeting. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

