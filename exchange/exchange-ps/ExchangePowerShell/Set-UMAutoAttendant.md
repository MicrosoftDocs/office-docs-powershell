---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-umautoattendant
schema: 2.0.0
title: Set-UMAutoAttendant
---

# Set-UMAutoAttendant

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-UMAutoAttendant cmdlet to modify an existing Unified Messaging (UM) auto attendant.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UMAutoAttendant [-Identity] <UMAutoAttendantIdParameter>
 [-AfterHoursKeyMapping <MultiValuedProperty>]
 [-AfterHoursKeyMappingEnabled <Boolean>]
 [-AfterHoursMainMenuCustomPromptEnabled <Boolean>]
 [-AfterHoursMainMenuCustomPromptFilename <String>]
 [-AfterHoursTransferToOperatorEnabled <Boolean>]
 [-AfterHoursWelcomeGreetingEnabled <Boolean>]
 [-AfterHoursWelcomeGreetingFilename <String>]
 [-AllowDialPlanSubscribers <Boolean>]
 [-AllowedInCountryOrRegionGroups <MultiValuedProperty>]
 [-AllowedInternationalGroups <MultiValuedProperty>]
 [-AllowExtensions <Boolean>]
 [-BusinessHoursKeyMapping <MultiValuedProperty>]
 [-BusinessHoursKeyMappingEnabled <Boolean>]
 [-BusinessHoursMainMenuCustomPromptEnabled <Boolean>]
 [-BusinessHoursMainMenuCustomPromptFilename <String>]
 [-BusinessHoursSchedule <ScheduleInterval[]>]
 [-BusinessHoursTransferToOperatorEnabled <Boolean>]
 [-BusinessHoursWelcomeGreetingEnabled <Boolean>]
 [-BusinessHoursWelcomeGreetingFilename <String>]
 [-BusinessLocation <String>]
 [-BusinessName <String>]
 [-CallSomeoneEnabled <Boolean>]
 [-Confirm]
 [-ContactAddressList <AddressListIdParameter>]
 [-ContactRecipientContainer <OrganizationalUnitIdParameter>]
 [-ContactScope <DialScopeEnum>]
 [-DomainController <Fqdn>]
 [-DTMFFallbackAutoAttendant <UMAutoAttendantIdParameter>]
 [-ForceUpgrade]
 [-HolidaySchedule <MultiValuedProperty>]
 [-InfoAnnouncementEnabled <InfoAnnouncementEnabledEnum>]
 [-InfoAnnouncementFilename <String>]
 [-Language <UMLanguage>]
 [-MatchedNameSelectionMethod <AutoAttendantDisambiguationFieldEnum>]
 [-Name <String>]
 [-NameLookupEnabled <Boolean>]
 [-OperatorExtension <String>]
 [-PilotIdentifierList <MultiValuedProperty>]
 [-SendVoiceMsgEnabled <Boolean>]
 [-SpeechEnabled <Boolean>]
 [-Timezone <String>]
 [-TimeZoneName <UMTimeZone>]
 [-WeekStartDay <DayOfWeek>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-UMAutoAttendant cmdlet changes or modifies the settings of an existing UM auto attendant. By default, some UM auto attendant parameters are required and are created. However, after a UM auto attendant is created, not all properties for the UM auto attendant are writable. Therefore, some values for the UM auto attendant can't be changed or modified unless the UM auto attendant is deleted and a new UM auto attendant is created.

After this task is completed, the parameters and values specified are configured on the UM auto attendant.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UMAutoAttendant -Identity MySpeechEnabledAA -DTMFFallbackAutoAttendant MyDTMFAA -OperatorExtension 50100 -AfterHoursTransferToOperatorEnabled $true -StaroutToDialPlanEnabled $true
```

This example configures the UM auto attendant MySpeechEnabledAA to fall back to the MyDTMFAA, sets the operator's extension to 50100, enables transfers to this extension number after business hours and enables a caller to press the \* button on a telephone keypad to get to the Outlook Voice Access welcome greeting when a UM auto attendant menu is being played.

### Example 2
```powershell
Set-UMAutoAttendant -Identity MyUMAutoAttendant -BusinessHoursSchedule 0.10:45-0.13:15,1.09:00-1.17:00,6.09:00-6.16:30 -HolidaySchedule "New Year,newyrgrt.wav,1/2/2014","Building Closed for Construction,construction.wav,4/24/2014,4/28/2014"
```

This example configures the UM auto attendant MyUMAutoAttendant that has business hours configured to be 10:45 to 13:15 (Sunday), 09:00 to 17:00 (Monday), and 09:00 to 16:30 (Saturday) and holiday times and their associated greetings configured to be "New Year" on January 2, 2014, and "Building Closed for Construction" from April 24, 2014 through April 28, 2014.

### Example 3
```powershell
Set-UMAutoAttendant -Identity MyAutoAttendant -BusinessHoursKeyMappingEnabled $true -BusinessHoursKeyMapping "1,Sales,,SalesAutoAttendant","2,Support,12345","3,Directions,,,directions.wav"
```

This example configures the UM auto attendant MyAutoAttendant and enables business hours key mappings so that when callers press 1, they're forwarded to another UM auto attendant named SalesAutoAttendant. When they press 2, they're forwarded to extension number 12345 for Support, and when they press 3, they're sent to another auto attendant that plays an audio file.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the identifier for the UM auto attendant being viewed. This parameter is the directory object ID for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AfterHoursKeyMapping

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursKeyMapping parameter specifies the key mappings to be used for after business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator.

The following is an example for a custom table that has two entries:

"Sales, 77899","Service, 78990".

The default value is disabled.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursKeyMappingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursKeyMappingEnabled parameter specifies whether to enable or disable key mappings for after business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator.

The following is an example for a custom table that has two entries:

"Sales, 77899","Service, 78990".

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursMainMenuCustomPromptEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursMainMenuCustomPromptEnabled parameter specifies whether the after business hours custom main menu is enabled. The default value is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursMainMenuCustomPromptFilename

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursMainMenuCustomPromptFilename parameter specifies the .wav file to be used for the after business hours custom main menu prompt.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursTransferToOperatorEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursTransferToOperatorEnabled parameter specifies whether to allow calls to be transferred to the operator's extension number after business hours.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursWelcomeGreetingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursWelcomeGreetingEnabled parameter specifies whether the after hours greeting is enabled. The system default audio is used if this parameter is set to disabled. The default value is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AfterHoursWelcomeGreetingFilename

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AfterHoursWelcomeGreetingFilename parameter specifies the .wav file to be used for the after hours greeting message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDialPlanSubscribers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AllowDialPlanSubscribers parameter specifies whether to allow the dial plan subscribers to dial numbers that are resolved to a subscriber in the same dial plan. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedInCountryOrRegionGroups

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AllowedInCountryOrRegionGroups parameter specifies the list of in-country/region dial group names allowed. The names must match group names defined in the dial plan. The string must have fewer than 128 characters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedInternationalGroups

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AllowedInternationalGroups parameter specifies the list of international dial group names allowed. The names must match group names defined in the dial plan. The string must have fewer than 128 characters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExtensions

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AllowExtensions parameter specifies whether callers can make calls to extensions that have the same number of digits as the number specified on the dial plan object. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursKeyMapping

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursKeyMapping parameter specifies the key mappings for business hours for the UM auto attendant. A key mapping is defined as an entry in a table that has as many as 9 entries. The 0 key is reserved for a transfer to the operator.

The following is an example for a custom table that has two entries:

"Sales, 77899","Service, 78990".

The default is disabled.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursKeyMappingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursKeyMappingEnabled parameter specifies whether the custom menus for business hours are enabled or disabled. The default value is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursMainMenuCustomPromptEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursMainMenuCustomPromptEnabled parameter specifies whether the business hours custom main menu prompt is enabled. The default value is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursMainMenuCustomPromptFilename

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursMainMenuCustomPromptFilename parameter specifies the .wav file to be used for the business hours custom main menu prompt.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursSchedule

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursSchedule parameter specifies the hours the business is open.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`. You can specify multiple schedules separated by commas: `"Schedule1","Schedule2",..."ScheduleN"`.

You can use the following values for days:

- Full name of the day.
- Abbreviated name of the day.
- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"
- "6.22:00-6.22:15" (From Saturday at 10:00 PM until Saturday at 10:15 PM.)
- "Sun.1:15 AM-Monday.23:00"
- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Run on Monday and Wednesday mornings from 4:30 until 5:30.)

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursTransferToOperatorEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursTransferToOperatorEnabled parameter specifies whether to allow call transfers to the operator's extension number during business hours.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursWelcomeGreetingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursWelcomeGreetingEnabled parameter specifies whether the custom business hours greeting is enabled. The system default audio is used if this parameter is set to disabled. The default value is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursWelcomeGreetingFilename

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessHoursWelcomeGreetingFilename parameter specifies the .wav file to be used for the welcome message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessLocation

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessLocation parameter specifies what the Mailbox server should read to the caller who selected the business location option on a UM auto attendant menu.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The BusinessName parameter specifies the name of the company or organization being used to generate the UM auto attendant welcome greeting for callers.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallSomeoneEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The CallSomeoneEnabled parameter specifies whether the Call Someone feature is enabled. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactAddressList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ContactAddressList parameter specifies the identity of the address list. If the ContactScope parameter is set to AddressList, this parameter defines the scope for directory searches.

```yaml
Type: AddressListIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactRecipientContainer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ContactRecipientContainer parameter specifies the name or identity of the container used for directory searches.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ContactScope parameter specifies the scope of the directory search given to callers when they access the UM auto attendant and specify a user's name.

```yaml
Type: DialScopeEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DTMFFallbackAutoAttendant

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DTMFFallbackAutoAttendant parameter specifies the dual tone multi-frequency (DTMF) auto attendant used if the speech-enabled auto attendant is unavailable. If the SpeechEnabled parameter is set to $true, this auto attendant must have an associated DTMF auto attendant to use as the fallback auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceUpgrade

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ForceUpgrade switch suppresses the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HolidaySchedule

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The HolidaySchedule parameter specifies the holiday schedule for the organization. The schedule is formatted as an array of strings. Each string contains three parts:

- Name, which is limited to 64 characters
- File name for the audio prompt, which is in the .wav format
- Day (date) of the holiday

The following is an example:

"Christmas, Christmas.wav, 12/25/2014".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InfoAnnouncementEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The InfoAnnouncementEnabled parameter specifies whether to enable the informational greeting. The default setting is $true.

```yaml
Type: InfoAnnouncementEnabledEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InfoAnnouncementFilename

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The InfoAnnouncementFilename parameter specifies the .wav file to be used for the informational announcement.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Language parameter specifies the language used by the UM auto attendant. This language is selected from the list of available dial plan languages.

```yaml
Type: UMLanguage
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchedNameSelectionMethod

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The MatchedNameSelectionMethod parameter specifies the selection to use to differentiate between users who have names that match the touchtone or speech input. This setting can be set to the following:

- Department
- Title
- Location
- None
- Prompt for alias
- Inherited from UM dial plan

```yaml
Type: AutoAttendantDisambiguationFieldEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Name parameter specifies the display name to be used for the UM auto attendant. This name is limited to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameLookupEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The NameLookupEnabled parameter specifies whether to allow callers to perform directory lookups by dialing the name or by speaking the name. This parameter can prevent callers from connecting to unknown extensions.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OperatorExtension

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The OperatorExtension parameter specifies the extension number of the operator. If this parameter isn't specified, the dial plan operator is used. If the dial plan operator isn't specified, the feature isn't enabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PilotIdentifierList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PilotIdentifierList parameter specifies a list of one or more pilot numbers. Pilot numbers are used to route incoming calls to Mailbox servers. The calls are then answered by the UM auto attendant.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendVoiceMsgEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The SendVoiceMsgEnabled parameter specifies whether to allow the Send Message feature.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpeechEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The SpeechEnabled parameter specifies whether the auto attendant is speech-enabled. The default setting on the UM auto attendant is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timezone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Timezone parameter specifies the time zone used with the auto attendant. The default time zone is the time zone setting on the server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timezone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Timezone parameter specifies the time zone used with the auto attendant. The default time zone is the time zone setting on the server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZoneName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The TimeZoneName parameter specifies all or part of a MicrosoftWindows time zone display name. The string is compared to the display names in the local system registry to determine a simple contains match. An error is returned if the time zone name isn't correct.

```yaml
Type: UMTimeZone
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeekStartDay

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The WeekStartDay parameter specifies the starting day of the week. The valid values for this parameter are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday.

```yaml
Type: DayOfWeek
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
