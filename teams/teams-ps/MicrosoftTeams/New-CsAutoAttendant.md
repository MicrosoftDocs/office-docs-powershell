---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant
schema: 2.0.0
title: New-CsAutoAttendant
---

# New-CsAutoAttendant

## SYNOPSIS
Use the New-CsAutoAttendant cmdlet to create a new Auto Attendant (AA).

## SYNTAX

```powershell
New-CsAutoAttendant -Name <String> -LanguageId <String> -TimeZoneId <String> -DefaultCallFlow <Object> [-CallFlows <Object>] [-CallHandlingAssociations <Object>] [-Operator <Object>] [-VoiceId <String>] [-EnableVoiceResponse] [-EnableMainlineAttendant] [-MainlineAttendantAgentVoiceId <String>] [-InclusionScope <Object>] [-ExclusionScope <Object>] [-AuthorizedUsers <List>] [-HideAuthorizedUsers <List>] [-UserNameExtension <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Auto Attendants (AAs) are a key element in the Office 365 Phone System.
Each AA can be associated with phone numbers that allow callers to reach specific people in the organization through a directory lookup. Alternatively, it can route the calls to an operator, a user, another AA, or a call queue.

You can create new AAs by using the New-CsAutoAttendant cmdlet; each newly created AA gets assigned a random string that serves as the identity of the AA.

> [!IMPORTANT]
> The following configuration parameters are currently only available in PowerShell and do not appear in Teams admin center:
>
> Authorized Users
> - -HideAuthorizedUsers
>
> Dial by name
> - -UserNameExtension
>
> The following configuration parameters will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - -EnableMainLineAttendant
> - -MainlineAttendantAgentVoiceId

**NOTES**:

- To setup your AA for calling, you need to create an application instance first using `New-CsOnlineApplicationInstance` cmdlet , then associate it with your AA configuration using `New-CsOnlineApplicationInstanceAssociation` cmdlet.
- The default call flow has the lowest precedence, and any custom call flow has a higher precedence and is executed if the schedule associated with it is in effect.
- Holiday call flows have higher priority than after-hours call flows. Thus, if a holiday schedule and an after-hours schedule are both in effect at a particular time, the call flow corresponding to the holiday call flow will be rendered.
- The default call flow can be used either as the 24/7 call flow if no other call flows are specified, or as the business hours call flow if an "after hours" call flow was specified together with the corresponding schedule and call handling association.
- If a user is present in both inclusion and exclusion scopes, then exclusion scope always takes priority, i.e., the user will not be able to be contacted through directory lookup feature.

## EXAMPLES

### Example 1
```powershell
$operatorObjectId = (Get-CsOnlineUser operator@contoso.com).Identity
$operatorEntity = New-CsAutoAttendantCallableEntity -Identity $operatorObjectId -Type User

$greetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$menuOptionZero = New-CsAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign or press 0 to reach the operator."
$defaultMenu = New-CsAutoAttendantMenu -Name "Default menu" -Prompts @($menuPrompt) -MenuOptions @($menuOptionZero) -EnableDialByName
$defaultCallFlow = New-CsAutoAttendantCallFlow -Name "Default call flow" -Greetings @($greetingPrompt) -Menu $defaultMenu

$afterHoursGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso! Unfortunately, you have reached us outside of our business hours. We value your call please call us back Monday to Friday, between 9 A.M. to 12 P.M. and 1 P.M. to 5 P.M. Goodbye!"
$automaticMenuOption = New-CsAutoAttendantMenuOption -Action Disconnect -DtmfResponse Automatic
$afterHoursMenu=New-CsAutoAttendantMenu -Name "After Hours menu" -MenuOptions @($automaticMenuOption)
$afterHoursCallFlow = New-CsAutoAttendantCallFlow -Name "After Hours call flow" -Greetings @($afterHoursGreetingPrompt) -Menu $afterHoursMenu

$timerange1 = New-CsOnlineTimeRange -Start 09:00 -end 12:00
$timerange2 = New-CsOnlineTimeRange -Start 13:00 -end 17:00
$afterHoursSchedule = New-CsOnlineSchedule -Name "After Hours Schedule" -WeeklyRecurrentSchedule -MondayHours @($timerange1, $timerange2) -TuesdayHours @($timerange1, $timerange2) -WednesdayHours @($timerange1, $timerange2) -ThursdayHours @($timerange1, $timerange2) -FridayHours @($timerange1, $timerange2) -Complement

$afterHoursCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

$inclusionScopeGroupIds = @("4c3053a6-20bf-43df-bf7a-156124168856")
$inclusionScope = New-CsAutoAttendantDialScope -GroupScope -GroupIds $inclusionScopeGroupIds

$aa = New-CsAutoAttendant -Name "Main auto attendant" -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -CallFlows @($afterHoursCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation) -LanguageId "en-US" -TimeZoneId "UTC" -Operator $operatorEntity -InclusionScope $inclusionScope
```

This example creates a new AA named _Main auto attendant_ that has the following properties:

- It sets a default call flow.
- It sets an after-hours call flow.
- It enables voice response.
- The default language is en-US.
- The time zone is set to UTC.
- An inclusion scope is specified.

### Example 2
```powershell
$operatorObjectId = (Get-CsOnlineUser operator@contoso.com).Identity
$operatorEntity = New-CsAutoAttendantCallableEntity -Identity $operatorObjectId -Type User

$dcfGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$dcfMenuOptionZero = New-CsAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
$dcfMenuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign or press 0 to reach the operator."
$dcfMenu=New-CsAutoAttendantMenu -Name "Default menu" -Prompts @($dcfMenuPrompt) -MenuOptions @($dcfMenuOptionZero) -EnableDialByName
$defaultCallFlow = New-CsAutoAttendantCallFlow -Name "Default call flow" -Greetings @($dcfGreetingPrompt) -Menu $dcfMenu

$afterHoursGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso! Unfortunately, you have reached us outside of our business hours. We value your call please call us back Monday to Friday, between 9 A.M. to 12 P.M. and 1 P.M. to 5 P.M. Goodbye!"
$afterHoursMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$afterHoursMenu=New-CsAutoAttendantMenu -Name "After Hours menu" -MenuOptions @($afterHoursMenuOption)
$afterHoursCallFlow = New-CsAutoAttendantCallFlow -Name "After Hours call flow" -Greetings @($afterHoursGreetingPrompt) -Menu $afterHoursMenu

$timerange1 = New-CsOnlineTimeRange -Start 09:00 -end 12:00
$timerange2 = New-CsOnlineTimeRange -Start 13:00 -end 17:00
$afterHoursSchedule = New-CsOnlineSchedule -Name "After Hours Schedule" -WeeklyRecurrentSchedule -MondayHours @($timerange1, $timerange2) -TuesdayHours @($timerange1, $timerange2) -WednesdayHours @($timerange1, $timerange2) -ThursdayHours @($timerange1, $timerange2) -FridayHours @($timerange1, $timerange2) -Complement

$afterHoursCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

$christmasGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$christmasMenu = New-CsAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)

$christmasCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

$aa = New-CsAutoAttendant -Name "Main auto attendant" -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -CallFlows @($afterHoursCallFlow, $christmasCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation, $christmasCallHandlingAssociation) -LanguageId "en-US" -TimeZoneId "UTC" -Operator $operatorEntity
```

This example creates a new AA named _Main auto attendant_ that has the following properties:

- It sets a default call flow.
- It sets an after-hours call flow.
- It sets a call flow for Christmas holiday.
- It enables voice response.
- The default language is en-US.
- The time zone is set to UTC.

### Example 3
```powershell
# Create Christmas Schedule
$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)

# Create First Auto Attendant
$dcfGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso Customer Support!"
$dcfMenuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$dcfMenu = New-CsAutoAttendantMenu -Name "Default menu" -Prompts @($dcfMenuPrompt) -EnableDialByName -DirectorySearchMethod ByName
$defaultCallFlow = New-CsAutoAttendantCallFlow -Name "Default call flow" -Greetings @($dcfGreetingPrompt) -Menu $dcfMenu

$christmasGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$christmasMenu = New-CsAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$christmasCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

New-CsAutoAttendant -Name "Customer Support Auto Attendant" -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -CallFlows @($afterHoursCallFlow, $christmasCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation, $christmasCallHandlingAssociation) -LanguageId "en-US" -TimeZoneId "UTC"

# Id                       : a65b3434-05a1-48ed-883d-e3ca35a60af8
# TenantId                 : f6b89083-a2f8-55cc-9f62-33b73af44164
# Name                     : Customer Support Auto Attendant
# LanguageId               : en-US
# VoiceId                  : Female
# DefaultCallFlow          : Default call flow
# Operator                 :
# TimeZoneId               : UTC
# VoiceResponseEnabled     : True
# CallFlows                : Christmas
# Schedules                : Christmas
# CallHandlingAssociations : Holiday(1)
# Status                   : Successful
# DialByNameResourceId     : caddaea5-c001-5a09-b997-9d3a33e834f2
# DirectoryLookupScope     :
# ApplicationInstances     :

# Create Second Auto Attendant
$dcfGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso Store!"
$dcfMenuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$dcfMenu = New-CsAutoAttendantMenu -Name "Default menu" -Prompts @($dcfMenuPrompt) -EnableDialByName -DirectorySearchMethod ByName
$defaultCallFlow = New-CsAutoAttendantCallFlow -Name "Default call flow" -Greetings @($dcfGreetingPrompt) -Menu $dcfMenu

$christmasGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$christmasMenu = New-CsAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$christmasCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

New-CsAutoAttendant -Name "Main auto attendant" -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -CallFlows @($afterHoursCallFlow, $christmasCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation, $christmasCallHandlingAssociation) -LanguageId "en-US" -TimeZoneId "UTC"

# Id                       : 236450c4-9f1e-4c19-80eb-d68819d36a15
# TenantId                 : f6b89083-a2f8-55cc-9f62-33b73af44164
# Name                     : Main auto attendant
# LanguageId               : en-US
# VoiceId                  : Female
# DefaultCallFlow          : Default call flow
# Operator                 :
# TimeZoneId               : UTC
# VoiceResponseEnabled     : True
# CallFlows                : Christmas
# Schedules                : Christmas
# CallHandlingAssociations : Holiday(1)
# Status                   : Successful
# DialByNameResourceId     : 5abfa626-8f80-54ff-97eb-03c2aadcc329
# DirectoryLookupScope     :
# ApplicationInstances     :

# Show the auto attendants associated with this holiday schedule:
Get-CsOnlineSchedule $christmasSchedule.Id

# Id                         : 578745b2-1f94-4a38-844c-6bf6996463ee
# Name                       : Christmas
# Type                       : Fixed
# WeeklyRecurrentSchedule    :
# FixedSchedule              : 24/12/2017 00:00 - 26/12/2017 00:00
# AssociatedConfigurationIds : a65b3434-05a1-48ed-883d-e3ca35a60af8, 236450c4-9f1e-4c19-80eb-d68819d36a15
```

This example creates two new AAs named _Main auto attendant_ and _Customer Support Auto Attendant_. Both AAs share the same Christmas holiday schedule. This was done by reusing the Schedule ID of the _Christmas_ holiday when creating the call handling associations for those two AAs using New-CsAutoAttendantCallHandlingAssociation cmdlet.

We can see when we ran the Get-CsOnlineSchedule cmdlet at the end, to get the _Christmas Holiday_ schedule information, that the configuration IDs for the newly created AAs have been added to the `AssociatedConfigurationIds` properties of that schedule. This means any updates made to this schedule would reflect in both associated AAs.

Removing an association between an AA and a schedule is as simple as deleting the CallHandlingAssociation of that schedule in the AA you want to modify. Please refer to [Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant) cmdlet documentation for examples on how to do that.

### Example 4
```powershell
$aaName = "Main Auto Attendant"
$language = "en-US"
$greetingText = "Welcome to Contoso"
$mainMenuText = "To reach your party by name, say it now. To talk to Sales, please press 1. To talk to User2 press 2. Please press 0 for operator"
$afterHoursText = "Sorry Contoso is closed. Please call back during week days from 7AM to 8PM. Goodbye!"
$tz = "Romance Standard Time"
$operatorId = (Get-CsOnlineUser -Identity "sip:user1@contoso.com").Identity
$user1Id = (Get-CsOnlineUser -Identity "sip:user2@contoso.com").Identity
$salesCQappinstance = (Get-CsOnlineUser -Identity "sales@contoso.com").Identity # one of the application instances associated to the Call Queue
$tr1 = New-CsOnlineTimeRange -Start 07:00 -End 20:00

# After hours
$afterHoursSchedule = New-CsOnlineSchedule -Name "After Hours" -WeeklyRecurrentSchedule -MondayHours @($tr1) -TuesdayHours @($tr1) -WednesdayHours @($tr1) -ThursdayHours @($tr1) -FridayHours @($tr1) -Complement
$afterHoursGreetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt $afterHoursText
$afterHoursMenuOption = New-CsAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic
$afterHoursMenu = New-CsAutoAttendantMenu -Name "AA menu1" -MenuOptions @($afterHoursMenuOption)
$afterHoursCallFlow = New-CsAutoAttendantCallFlow -Name "After Hours" -Menu $afterHoursMenu -Greetings @($afterHoursGreetingPrompt)
$afterHoursCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

# Business hours menu options
$operator = New-CsAutoAttendantCallableEntity -Identity $operatorId -Type User
$sales = New-CsAutoAttendantCallableEntity -Identity $salesCQappinstance -Type applicationendpoint
$user1 = New-CsAutoAttendantCallableEntity -Identity $user1Id -Type User
$menuOption0 = New-CsAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0 -CallTarget $operator
$menuOption1 = New-CsAutoAttendantMenuOption -Action TransferCallToTarget -DtmfResponse Tone1 -CallTarget $sales
$menuOption2 = New-CsAutoAttendantMenuOption -Action TransferCallToTarget -DtmfResponse Tone2 -CallTarget $user1

# Business hours menu
$greetingPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt $greetingText
$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt $mainMenuText
$menu = New-CsAutoAttendantMenu -Name "AA menu2" -Prompts @($menuPrompt) -EnableDialByName -MenuOptions @($menuOption0,$menuOption1,$menuOption2)
$callFlow = New-CsAutoAttendantCallFlow -Name "Default" -Menu $menu -Greetings $greetingPrompt

# Auto attendant
New-CsAutoAttendant -Name $aaName -LanguageId $language -CallFlows @($afterHoursCallFlow) -TimeZoneId $tz -Operator $operator -DefaultCallFlow $callFlow -CallHandlingAssociations @($afterHoursCallHandlingAssociation) -EnableVoiceResponse
```

This example creates a new AA named _Main auto attendant_ that has the following properties:

- It sets a default call flow.
- It sets an after-hours call flow.
- It sets a business hours options.
- It references a call queue as a menu option.
- The default language is en-US.
- The time zone is set to Romance Standard.
- It sets user1 as operator.
- It has user2 also as a menu option.
- The Auto Attendant is voice enabled.

## PARAMETERS

### -AuthorizedUsers

This is a list of GUIDs for users who are authorized to make changes to this call queue. The users must also have a TeamsVoiceApplications policy assigned. The GUID should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallFlows

The CallFlows parameter represents call flows, which are required if they are referenced in the CallHandlingAssociations parameter.

You can create CallFlows by using the [`New-CsAutoAttendantCallFlow`](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallflow) cmdlet.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallHandlingAssociations

The CallHandlingAssociations parameter represents the call handling associations.
The AA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.

You can create CallHandlingAssociations by using the `New-CsAutoAttendantCallHandlingAssociation` cmdlet.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultCallFlow

The DefaultCallFlow parameter is the flow to be executed when no other call flow is in effect (for example, during business hours).

You can create the DefaultCallFlow by using the [`New-CsAutoAttendantCallFlow`](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallflow) cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMainlineAttendant

The EnableMainlineAttendant parameter enables Mainline Attendant features for this Auto attendant.

> [!NOTE]
> 1. The Auto attendant must have a Resource account assigned
> 1. `-LanguageId` options are limited when Mainline Attendant is enabled
> 1. `-EnableVoiceResponse` will be enabled automatically

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

### -MainlineAttendantAgentVoiceId

The MainlineAttendantAgentVoiceId parameter sets the voice that will be used with Mainline Attendant.

PARAMVALUE: Alloy | Echo | Shimmer

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

### -EnableVoiceResponse

The EnableVoiceResponse parameter indicates whether voice response for AA is enabled.

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

### -ExclusionScope

Specifies the users to which call transfers are not allowed through directory lookup feature.
If not specified, no user in the organization is excluded from directory lookup.

Dial scopes can be created by using the [`New-CsAutoAttendantDialScope`](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantdialscope) cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HideAuthorizedUsers

The GUID should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InclusionScope

Specifies the users to which call transfers are allowed through directory lookup feature.
If not specified, all users in the organization can be reached through directory lookup.

Dial scopes can be created by using the [`New-CsAutoAttendantDialScope`](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantdialscope) cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LanguageId

The LanguageId parameter is the language that is used to read text-to-speech (TTS) prompts.

You can query the supported languages using the [`Get-CsAutoAttendantSupportedLanguage`](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantsupportedlanguage) cmdlet.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

The Name parameter is a friendly name that is assigned to the AA.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operator

The Operator parameter represents the SIP address or PSTN number of the operator.

You can create callable entities by using the `New-CsAutoAttendantCallableEntity` cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZoneId

The TimeZoneId parameter represents the AA time zone. All schedules are evaluated based on this time zone.

You can query the supported timezones using the [`Get-CsAutoAttendantSupportedTimeZone`](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantsupportedtimezone) cmdlet.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserNameExtension

The UserNameExtension parameter is a string that specifies how to extend usernames in dial search by appending additional information after the name.
This parameter is used in dial search when multiple search results are found, as it helps to distinguish users with similar names. Possible values are:

- None: Default value. No additional information is provided.
  
  In this case, if there are two John Smiths, the caller will hear:
  
     For John Smith, press 1.<br>
     For John Smith, press 2.
  
- Office: Adds office information from the user profile.
- Department: Adds department information from the user profile.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Required: false
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceId

The VoiceId parameter represents the voice that is used to read text-to-speech (TTS) prompts.

You can query the supported voices by using the `Get-CsAutoAttendantSupportedLanguage` cmdlet.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsOnlineApplicationInstanceAssociation](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineapplicationinstanceassociation)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Get-CsAutoAttendantStatus](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantstatus)

[Get-CsAutoAttendantSupportedLanguage](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantsupportedlanguage)

[Get-CsAutoAttendantSupportedTimeZone](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantsupportedtimezone)

[New-CsAutoAttendantCallableEntity](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallableentity)

[New-CsAutoAttendantCallFlow](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallflow)

[New-CsAutoAttendantCallHandlingAssociation](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallhandlingassociation)

[New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineschedule)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Update-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/update-csautoattendant)
