---
external help file: New-CsOrganizationalAutoAttendant.xml
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendant cmdlet to create a new Organizational Auto Attendant (OAA).

## SYNTAX

```
New-CsOrganizationalAutoAttendant -Name <String> -LanguageId <String> -TimeZoneId <String> -DefaultCallFlow <Object> -CallFlows <Object> -Schedules <Object> -CallHandlingAssociations <Object> [-LineUris <Uri>] [-Operator <Object>] [-Domain <String>] [-VoiceId <String>] [-EnableVoiceResponse] [-InclusionScope <Object>] [-ExclusionScope <Object>] [-ApplicationId <Guid>] [-CallbackUri <Uri>] [-ClientAudience <Object>] [-Ring <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Organizational Auto Attendants (OAAs) are a key element in the Cloud PBX application.
Each OAA can be associated with a phone number that allows callers to reach specific people in the organization through a directory lookup. 
Alternatively, it can route the calls to an operator, a user, another OAA, or a call queue.

You can create new OAAs by using the New-CsOrganizationalAutoAttendant cmdlet; each newly created OAA gets assigned a random Primary (SIP) URI that serves as the identity of the OAA. 

**NOTE**
- **The Holiday feature of auto attendants is currently available to PREVIEW customers only.**
- PrimaryUri of OAAs is a SIP URI.
- The default call flow has the lowest precedence, and any custom call flow has a higher precedence and is executed if the schedule associated with it is in effect.
- Holiday call flows have higher priority than after-hours call flows. Thus, if a holiday schedule and an after-hours schedule are both in effect at a particular time, the call flow corresponding to the holiday call flow will be rendered.
- The default call flow can be used either as the 24/7 call flow if no other call flows are specified, or as the business hours call flow if an “after hours” call flow was specified together with the corresponding schedule and call handling association.
- If a user is present in both inclusion and exclusion scopes, then exclusion scope always takes priority, i.e., the user will not be able to be contacted through directory lookup feature.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$lineUri = [System.Uri] "tel:+11098765432"

$operatorUri = "sip:operator@contoso.com"
$operatorEntity = New-CsOrganizationalAutoAttendantCallableEntity -Identity $operatorUri -Type User

$greetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$menuOptionZero = New-CsOrganizationalAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign or press 0 to reach the operator."
$defaultMenu = New-CsOrganizationalAutoAttendantMenu -Name "Default menu" -Prompts @($menuPrompt) -MenuOptions @($menuOptionZero) -EnableDialByName
$defaultCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default call flow" -Greetings @($greetingPrompt) -Menu $defaultMenu

$afterHoursGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso! Unfortunately, you have reached us outside of our business hours. We value your call please call us back Monday to Friday, between 9 A.M. to 12 P.M. and 1 P.M. to 5 P.M. Goodbye!"
$automaticMenuOption = New-CsOrganizationalAutoAttendantMenuOption -Action Disconnect -DtmfResponse Automatic 
$afterHoursMenu=New-CsOrganizationalAutoAttendantMenu -Name "After Hours menu" -MenuOptions @($automaticMenuOption)
$afterHoursCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "After Hours call flow" -Greetings @($afterHoursGreetingPrompt) -Menu $afterHoursMenu

$timerange1 = New-CsOnlineTimeRange -Start 09:00 -end 12:00
$timerange2 = New-CsOnlineTimeRange -Start 13:00 -end 17:00
$afterHoursSchedule = New-CsOnlineSchedule -Name "After Hours Schedule" -WeeklyRecurrentSchedule -MondayHours @($timerange1, $timerange2) -TuesdayHours @($timerange1, $timerange2) -WednesdayHours @($timerange1, $timerange2) -ThursdayHours @($timerange1, $timerange2) -FridayHours @($timerange1, $timerange2) -Complement

$afterHoursCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

$inclusionScopeGroupIds = @(“4c3053a6-20bf-43df-bf7a-156124168856”)
$inclusionScope = New-CsOrganizationalAutoAttendantDialScope -GroupScope -GroupIds $inclusionScopeGroupIds

$o=New-CsOrganizationalAutoAttendant -Name "Main organizational auto attendant" -LineUris @($lineUri) -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -Schedules @($afterHoursSchedule) -CallFlows @($afterHoursCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation) -Language "en-US" -TimeZoneId "UTC" -Operator $operatorEntity -InclusionScope $inclusionScope
```

This example creates a new OAA named _Main organizational auto attendant_ that has the following properties:

- A phone number is assigned.
- It sets a default call flow.
- It sets an after-hours call flow.
- It enables voice response.
- The default language is en-US.
- The time zone is set to UTC.
- An inclusion scope is specified.

### -------------------------- Example 2 -------------------------- 
```
$lineUri = [System.Uri] "tel:+11098765432"

$operatorUri = "sip:operator@contoso.com"
$operatorEntity = New-CsOrganizationalAutoAttendantCallableEntity -Identity $operatorUri -Type User

$dcfGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
$dcfMenuOptionZero = New-CsOrganizationalAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
$dcfMenuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign or press 0 to reach the operator."
$dcfMenu=New-CsOrganizationalAutoAttendantMenu -Name "Default menu" -Prompts @($dcfMenuPrompt) -MenuOptions @($dcfMenuOptionZero) -EnableDialByName
$defaultCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default call flow" -Greetings @($dcfGreetingPrompt) -Menu $dcfMenu

$afterHoursGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso! Unfortunately, you have reached us outside of our business hours. We value your call please call us back Monday to Friday, between 9 A.M. to 12 P.M. and 1 P.M. to 5 P.M. Goodbye!"
$afterHoursMenuOption = New-CsOrganizationalAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic 
$afterHoursMenu=New-CsOrganizationalAutoAttendantMenu -Name "After Hours menu" -MenuOptions @($afterHoursMenuOption)
$afterHoursCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "After Hours call flow" -Greetings @($afterHoursGreetingPrompt) -Menu $afterHoursMenu

$timerange1 = New-CsOnlineTimeRange -Start 09:00 -end 12:00
$timerange2 = New-CsOnlineTimeRange -Start 13:00 -end 17:00
$afterHoursSchedule = New-CsOnlineSchedule -Name "After Hours Schedule" -WeeklyRecurrentSchedule -MondayHours @($timerange1, $timerange2) -TuesdayHours @($timerange1, $timerange2) -WednesdayHours @($timerange1, $timerange2) -ThursdayHours @($timerange1, $timerange2) -FridayHours @($timerange1, $timerange2) -Complement

$afterHoursCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

$christmasGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Our offices are closed for Christmas from December 24 to December 26. Please call back later."
$christmasMenuOption = New-CsOrganizationalAutoAttendantMenuOption -Action DisconnectCall -DtmfResponse Automatic 
$christmasMenu = New-CsOrganizationalAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($christmasMenuOption)
$christmasCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Christmas" -Greetings @($christmasGreetingPrompt) -Menu $christmasMenu

$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)

$christmasCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $christmasSchedule.Id -CallFlowId $christmasCallFlow.Id

$o=New-CsOrganizationalAutoAttendant -Name "Main organizational auto attendant" -LineUris @($lineUri) -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -Schedules @($afterHoursSchedule, $christmasSchedule) -CallFlows @($afterHoursCallFlow, $christmasCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation, $christmasCallHandlingAssociation) -Language "en-US" -TimeZoneId "UTC" -Operator $operatorEntity
```

This example creates a new OAA named _Main organizational auto attendant_ that has the following properties:

- A phone number is assigned.
- It sets a default call flow.
- It sets an after-hours call flow.
- It sets a call flow for Christmas holiday.
- It enables voice response.
- The default language is en-US.
- The time zone is set to UTC.

## PARAMETERS

### -Name
The Name parameter is a friendly name that is assigned to the OAA.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LanguageId
The LanguageId parameter is the language that is used to read text-to-speech (TTS) prompts. 

You can query the supported languages using the Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZoneId
The TimeZoneId parameter represents the OAA time zone. All schedules are evaluated based on this time zone.

You can query the supported timezones using the Get-CsOrganizationalAutoAttendantSupportedTimeZone cmdlet.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultCallFlow
The DefaultCallFlow parameter is the flow to be executed when no other call flow is in effect (for example, during business hours). 

You can create the DefaultCallFlow by using the New-CsOrganizationalAutoAttendantCallFlow cmdlet. 


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallFlows
The CallFlows parameter represents call flows, which are required if they are referenced in the CallHandlingAssociations parameter. 

You can create CallFlows by using the New-CsOrganizationalAutoAttendantCallFlow cmdlet. 

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Schedules
The Schedules parameter reflects schedules that are associated with the OAA. Schedules are required if they are referenced in the CallHandlingAssociations parameter. 

You can create schedules by using the New-CsOnlineSchedule cmdlet. 


```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallHandlingAssociations
The CallHandlingAssociations parameter represents the call handling associations. 
The OAA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.

You can create CallHandlingAssociations by using the New-CsOrganizationalAutoAttendantCallHandlingAssociation cmdlet.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUris
The LineUris parameter represents PSTN numbers that are assigned to the OAA. 
PSTN numbers must be your Service number or Toll-free number; User PSTN Numbers (normal numbers) cannot be added to Auto Attendant. 
Each Uniform Resource Identifier (URI) must be specified by using the following format: the tel: prefix followed by a plus sign, followed by the country/region calling code, area code, and phone number (using only digits, no blank spaces, periods, or hyphens). 
For example: `-LineUris [System.Uri]"tel:+4255551219"`.

Note: Only PSTN numbers that are acquired through or migrated to Skype for Business Online are supported. 


```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operator
The Operator parameter represents the SIP address or PSTN number of the operator. 

You can create callable entities by using the New-CsOrganizationalAutoAttendantCallableEntity cmdlet. 


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
The Domain parameter represents the domain part of the Primary (SIP) URI that is generated for the OAA. 
The domain name is validated against the list of domains that are configured by the tenant. 
If not provided, then a domain is randomly chosen for primary URI. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceId
The VoiceId parameter represents the voice that is used to read text-to-speech (TTS) prompts. 

You can query the supported voices by using the Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet. You can determine the default voice for a language by issuing the following command: 
 
```
$language = Get-CsOrganizationalAutoAttendantSupportedLanguage -Identity "en-US"`
$defaultVoice = $language.Voices[0].Gender
```

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVoiceResponse
The EnableVoiceResponse parameter indicates whether voice response for OAA is enabled.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InclusionScope
Specifies the users to which call transfers are allowed through directory lookup feature. 
If not specified, all users in the organization can be reached through directory lookup. 

Dial scopes can be created by using the New-CsOrganizationalAutoAttendantDialScope cmdlet. 


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusionScope
Specifies the users to which call transfers are not allowed through directory lookup feature. 
If not specified, no user in the organization is excluded from directory lookup. 

Dial scopes can be created by using the New-CsOrganizationalAutoAttendantDialScope cmdlet. 


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
Specifies a custom application ID to use for OAAs. This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallbackUri
Specifies a custom Callback URI for OAAs. This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAudience
Specifies a custom client audience for OAAs. This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ring
Specifies a custom ring for OAAs. This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.OrgAutoAttendant


## NOTES


## RELATED LINKS

[New-CsOrganizationalAutoAttendantCallFlow](New-CsOrganizationalAutoAttendantCallFlow.md)

[New-CsOrganizationalAutoAttendantCallHandlingAssociation](New-CsOrganizationalAutoAttendantCallHandlingAssociation.md)

[New-CsOrganizationalAutoAttendantCallableEntity](New-CsOrganizationalAutoAttendantCallableEntity.md)

[New-CsOnlineSchedule](New-CsOnlineSchedule.md)

[Get-CsOrganizationalAutoAttendantSupportedLanguage](Get-CsOrganizationalAutoAttendantSupportedLanguage.md)

[Get-CsOrganizationalAutoAttendantSupportedTimeZone](Get-CsOrganizationalAutoAttendantSupportedTimeZone.md)
