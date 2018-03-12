---
title: "Set-UMAutoAttendant"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7c7dbe5a-adc0-419a-89f7-7a0ef1482790
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UMAutoAttendant

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-UMAutoAttendant** cmdlet to modify an existing Unified Messaging (UM) auto attendant.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMAutoAttendant -Identity <UMAutoAttendantIdParameter> [-AfterHoursKeyMapping <MultiValuedProperty>] [-AfterHoursKeyMappingEnabled <$true | $false>] [-AfterHoursMainMenuCustomPromptEnabled <$true | $false>] [-AfterHoursMainMenuCustomPromptFilename <String>] [-AfterHoursTransferToOperatorEnabled <$true | $false>] [-AfterHoursWelcomeGreetingEnabled <$true | $false>] [-AfterHoursWelcomeGreetingFilename <String>] [-AllowDialPlanSubscribers <$true | $false>] [-AllowedInCountryOrRegionGroups <MultiValuedProperty>] [-AllowedInternationalGroups <MultiValuedProperty>] [-AllowExtensions <$true | $false>] [-BusinessHoursKeyMapping <MultiValuedProperty>] [-BusinessHoursKeyMappingEnabled <$true | $false>] [-BusinessHoursMainMenuCustomPromptEnabled <$true | $false>] [-BusinessHoursMainMenuCustomPromptFilename <String>] [-BusinessHoursSchedule <ScheduleInterval[]>] [-BusinessHoursTransferToOperatorEnabled <$true | $false>] [-BusinessHoursWelcomeGreetingEnabled <$true | $false>] [-BusinessHoursWelcomeGreetingFilename <String>] [-BusinessLocation <String>] [-BusinessName <String>] [-CallSomeoneEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-ContactAddressList <AddressListIdParameter>] [-ContactRecipientContainer <OrganizationalUnitIdParameter>] [-ContactScope <DialPlan | GlobalAddressList | AddressList>] [-DomainController <Fqdn>] [-DTMFFallbackAutoAttendant <UMAutoAttendantIdParameter>] [-ForceUpgrade <SwitchParameter>] [-HolidaySchedule <MultiValuedProperty>] [-InfoAnnouncementEnabled <True | False | Uninterruptible>] [-InfoAnnouncementFilename <String>] [-Language <UMLanguage>] [-MatchedNameSelectionMethod <Title | Department | Location | None | PromptForAlias | InheritFromDialPlan>] [-Name <String>] [-NameLookupEnabled <$true | $false>] [-OperatorExtension <String>] [-PilotIdentifierList <MultiValuedProperty>] [-SendVoiceMsgEnabled <$true | $false>] [-SpeechEnabled <$true | $false>] [-TimeZone <String>] [-TimeZoneName <UMTimeZone>] [-WeekStartDay <Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the UM auto attendant MySpeechEnabledAA to fall back to the MyDTMFAA, sets the operator's extension to 50100, enables transfers to this extension number after business hours and enables a caller to press the \* button on a telephone keypad to get to the Outlook Voice Access welcome greeting when a UM auto attendant menu is being played.
  
```
Set-UMAutoAttendant -Identity MySpeechEnabledAA -DTMFFallbackAutoAttendant MyDTMFAA -OperatorExtension 50100 -AfterHoursTransferToOperatorEnabled $true -StaroutToDialPlanEnabled $true
```

### Example 2

This example configures the UM auto attendant MyUMAutoAttendant that has business hours configured to be 10:45 to 13:15 (Sunday), 09:00 to 17:00 (Monday), and 09:00 to 16:30 (Saturday) and holiday times and their associated greetings configured to be " `New Year`" on January 2, 2013, and " `Building Closed for Construction`" from April 24, 2013 through April 28, 2013.
  
```
Set-UMAutoAttendant -Identity MyUMAutoAttendant -BusinessHoursSchedule 0.10:45-0.13:15,1.09:00-1.17:00,6.09:00-6.16:30 -HolidaySchedule "New Year,newyrgrt.wav,1/2/2013","Building Closed for Construction,construction.wav,4/24/2013,4/28/2013"
```

### Example 3

This example configures the UM auto attendant MyAutoAttendant and enables business hours key mappings so that when callers press 1, they're forwarded to another UM auto attendant named SalesAutoAttendant. When they press 2, they're forwarded to extension number 12345 for Support, and when they press 3, they're sent to another auto attendant that plays an audio file.
  
```
Set-UMAutoAttendant -Identity MyAutoAttendant -BusinessHoursKeyMappingEnabled $true -BusinessHoursKeyMapping "1,Sales,,SalesAutoAttendant","2,Support,12345","3,Directions,,,directions.wav"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-UMAutoAttendant** cmdlet changes or modifies the settings of an existing UM auto attendant. By default, some UM auto attendant parameters are required and are created. However, after a UM auto attendant is created, not all properties for the UM auto attendant are writable. Therefore, some values for the UM auto attendant can't be changed or modified unless the UM auto attendant is deleted and a new UM auto attendant is created.
  
After this task is completed, the parameters and values specified are configured on the UM auto attendant.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The _Identity_ parameter specifies the identifier for the UM auto attendant being viewed. This parameter is the directory object ID for the UM auto attendant. <br/> |
| _AfterHoursKeyMapping_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AfterHoursKeyMapping_ parameter specifies the key mappings to be used for after business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator. <br/> The following is an example for a custom table that has two entries:  <br/> "Sales, 77899","Service, 78990".  <br/> The default value is  `disabled`.  <br/> |
| _AfterHoursKeyMappingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AfterHoursKeyMappingEnabled_ parameter specifies whether to enable or disable key mappings for after business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator. <br/> The following is an example for a custom table that has two entries:  <br/> "Sales, 77899","Service, 78990".  <br/> |
| _AfterHoursMainMenuCustomPromptEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AfterHoursMainMenuCustomPromptEnabled_ parameter specifies whether the after business hours custom main menu is enabled. The default value is `disabled`.  <br/> |
| _AfterHoursMainMenuCustomPromptFilename_ <br/> |Optional  <br/> |System.String  <br/> |The _AfterHoursMainMenuCustomPromptFilename_ parameter specifies the .wav file to be used for the after business hours custom main menu prompt. <br/> |
| _AfterHoursTransferToOperatorEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AfterHoursTransferToOperatorEnabled_ parameter specifies whether to allow calls to be transferred to the operator's extension number after business hours. <br/> |
| _AfterHoursWelcomeGreetingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AfterHoursWelcomeGreetingEnabled_ parameter specifies whether the after hours greeting is enabled. The system default audio is used if this parameter is set to `disabled`. The default value is  `disabled`.  <br/> |
| _AfterHoursWelcomeGreetingFilename_ <br/> |Optional  <br/> |System.String  <br/> |The _AfterHoursWelcomeGreetingFilename_ parameter specifies the .wav file to be used for the after hours greeting message. <br/> |
| _AllowDialPlanSubscribers_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AllowDialPlanSubscribers_ parameter specifies whether to allow the dial plan subscribers to dial numbers that are resolved to a subscriber in the same dial plan. The default value is `$true`.  <br/> |
| _AllowedInCountryOrRegionGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AllowedInCountryOrRegionGroups_ parameter specifies the list of in-country/region dial group names allowed. The names must match group names defined in the dial plan. The string must have fewer than 128 characters. <br/> |
| _AllowedInternationalGroups_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AllowedInternationalGroups_ parameter specifies the list of international dial group names allowed. The names must match group names defined in the dial plan. The string must have fewer than 128 characters. <br/> |
| _AllowExtensions_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AllowExtensions_ parameter specifies whether callers can make calls to extensions that have the same number of digits as the number specified on the dial plan object. The default value is `$false`.  <br/> |
| _BusinessHoursKeyMapping_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _BusinessHoursKeyMapping_ parameter specifies the key mappings for business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator. <br/> The following is an example for a custom table that has two entries:  <br/> "Sales, 77899","Service, 78990".  <br/> The default is  `disabled`.  <br/> |
| _BusinessHoursKeyMappingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _BusinessHoursKeyMappingEnabled_ parameter specifies whether the custom menus for business hours are enabled or disabled. The default value is `disabled`.  <br/> |
| _BusinessHoursMainMenuCustomPromptEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _BusinessHoursMainMenuCustomPromptEnabled_ parameter specifies whether the business hours custom main menu prompt is enabled. The default value is `disabled`.  <br/> |
| _BusinessHoursMainMenuCustomPromptFilename_ <br/> |Optional  <br/> |System.String  <br/> |The _BusinessHoursMainMenuCustomPromptFilename_ parameter specifies the .wav file to be used for the business hours custom main menu prompt. <br/> |
| _BusinessHoursSchedule_ <br/> |Optional  <br/> |Microsoft.Exchange.Common.ScheduleInterval[]  <br/> |The _BusinessHoursSchedule_ parameter specifies the hours the business is open. <br/> |
| _BusinessHoursTransferToOperatorEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _BusinessHoursTransferToOperatorEnabled_ parameter specifies whether to allow call transfers to the operator's extension number during business hours. <br/> |
| _BusinessHoursWelcomeGreetingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _BusinessHoursWelcomeGreetingEnabled_ parameter specifies whether the custom business hours greeting is enabled. The system default audio is used if this parameter is set to `disabled`. The default value is  `disabled`.  <br/> |
| _BusinessHoursWelcomeGreetingFilename_ <br/> |Optional  <br/> |System.String  <br/> |The _BusinessHoursWelcomeGreetingFilename_ parameter specifies the .wav file to be used for the welcome message. <br/> |
| _BusinessLocation_ <br/> |Optional  <br/> |System.String  <br/> |The _BusinessLocation_ parameter specifies what the Mailbox server should read to the caller who selected the business location option on a UM auto attendant menu. <br/> |
| _BusinessName_ <br/> |Optional  <br/> |System.String  <br/> |The _BusinessName_ parameter specifies the name of the company or organization being used to generate the UM auto attendant welcome greeting for callers. <br/> |
| _CallSomeoneEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _CallSomeoneEnabled_ parameter specifies whether the Call Someone feature is enabled. The default value is `$true`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContactAddressList_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressListIdParameter  <br/> |The _ContactAddressList_ parameter specifies the identity of the address list. If the _ContactScope_ parameter is set to `AddressList`, this parameter defines the scope for directory searches.  <br/> |
| _ContactRecipientContainer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The _ContactRecipientContainer_ parameter specifies the name or identity of the container used for directory searches. <br/> |
| _ContactScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DialScopeEnum  <br/> |The _ContactScope_ parameter specifies the scope of the directory search given to callers when they access the UM auto attendant and specify a user's name. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DTMFFallbackAutoAttendant_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The _DTMFFallbackAutoAttendant_ parameter specifies the dual tone multi-frequency (DTMF) auto attendant used if the speech-enabled auto attendant is unavailable. If the _SpeechEnabled_ parameter is set to `$true`, this auto attendant must have an associated DTMF auto attendant to use as the fallback auto attendant.  <br/> |
| _ForceUpgrade_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ForceUpgrade_ switch specifies whether you're prompted for confirmation before a UM auto attendant object is upgraded. <br/> |
| _HolidaySchedule_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _HolidaySchedule_ parameter specifies the holiday schedule for the organization. The schedule is formatted as an array of strings. Each string contains three parts: <br/>  Name, which is limited to 64 characters <br/>  File name for the audio prompt, which is in the .wav format <br/>  Day (date) of the holiday <br/>  The following is an example: <br/>  "Christmas, Christmas.wav, 12/25/2013". <br/> |
| _InfoAnnouncementEnabled_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.InfoAnnouncementEnabledEnum  <br/> |The _InfoAnnouncementEnabled_ parameter specifies whether to enable the informational greeting. The default setting is `$true`.  <br/> |
| _InfoAnnouncementFilename_ <br/> |Optional  <br/> |System.String  <br/> |The _InfoAnnouncementFilename_ parameter specifies the .wav file to be used for the informational announcement. <br/> |
| _Language_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.UMLanguage  <br/> |The _Language_ parameter specifies the language used by the UM auto attendant. This language is selected from the list of available dial plan languages. <br/> |
| _MatchedNameSelectionMethod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AutoAttendantDisambiguationFieldEnum  <br/> | The _MatchedNameSelectionMethod_ parameter specifies the selection to use to differentiate between users who have names that match the touchtone or speech input. This setting can be set to the following: <br/>  Department <br/>  Title <br/>  Location <br/>  None <br/>  Prompt for alias <br/>  Inherited from UM dial plan <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the display name to be used for the UM auto attendant. This name is limited to 64 characters. <br/> |
| _NameLookupEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _NameLookupEnabled_ parameter specifies whether to allow callers to perform directory lookups by dialing the name or by speaking the name. This parameter can prevent callers from connecting to unknown extensions. <br/> |
| _OperatorExtension_ <br/> |Optional  <br/> |System.String  <br/> |The _OperatorExtension_ parameter specifies the extension number of the operator. If this parameter isn't specified, the dial plan operator is used. If the dial plan operator isn't specified, the feature isn't enabled. <br/> |
| _PilotIdentifierList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _PilotIdentifierList_ parameter specifies a list of one or more pilot numbers. Pilot numbers are used to route incoming calls to Mailbox servers. The calls are then answered by the UM auto attendant. <br/> |
| _SendVoiceMsgEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SendVoiceMsgEnabled_ parameter specifies whether to allow the Send Message feature. <br/> |
| _SpeechEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SpeechEnabled_ parameter specifies whether the auto attendant is speech-enabled. The default setting on the UM auto attendant is `$false`.  <br/> |
| _TimeZone_ <br/> |Optional  <br/> |System.String  <br/> |The _Timezone_ parameter specifies the time zone used with the auto attendant. The default time zone is the time zone setting on the server. <br/> |
| _TimeZoneName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMTimeZone  <br/> |The _TimeZoneName_ parameter specifies all or part of a Microsoft Windows time zone display name. The string is compared to the display names in the local system registry to determine a simplecontains match. An error is returned if the time zone name isn't correct. <br/> |
| _WeekStartDay_ <br/> |Optional  <br/> |System.DayOfWeek  <br/> |The _WeekStartDay_ parameter specifies the starting day of the week. The valid values for this parameter are `Sunday`,  `Monday`,  `Tuesday`,  `Wednesday`,  `Thursday`,  `Friday`, and  `Saturday`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

