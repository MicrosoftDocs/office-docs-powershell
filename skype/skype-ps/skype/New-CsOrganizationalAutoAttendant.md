---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendant cmdlet to create a new Organizational Auto Attendant (OAA).

## SYNTAX

```
New-CsOrganizationalAutoAttendant [-DefaultCallFlow <Object>] [-LanguageId <Object>] [-LineUris <Object>]
 [-Name <Object>] [-ApplicationId <Object>] [-BypassDualWrite <Object>] [-CallbackUri <Object>]
 [-CallFlows <Object>] [-CallHandlingAssociations <Object>] [-ClientAudience <Object>] [-Domain <Object>]
 [-DomainController <Object>] [-EnableVoiceResponse] [-Force] [-Operator <Object>] [-Ring <Object>]
 [-Schedules <Object>] [-Tenant <Object>] [-TimeZoneId <Object>] [-VoiceId <Object>] [-AsJob]
 [-ExclusionScope <Object>] [-InclusionScope <Object>] [<CommonParameters>]
```

## DESCRIPTION
OAAs are a key element in the Cloud PBX application. 
Each OAA is associated with a phone number that allows callers to reach specific people in the organization through a directory lookup. 
Alternatively, it can route the calls to an operator, a user, another OAA, or a call queue.

You can create new OAAs by using the New-CsOrganizationalAutoAttendant cmdlet; each newly created OAA gets assigned a random Primary (SIP) URI that serves as the identity of the OAA. 

**NOTE**
- PrimaryUri of OAAs is a SIP URI; however, currently they are not routable, (you cannot call an OAA through the PrimaryUri).
- The default call flow has the lowest precedence, and any custom call flow has a higher precedence and is executed if the schedule associated with it is in effect.
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
$defaultMenu=New-CsOrganizationalAutoAttendantMenu -Name "Default menu" -Prompts @($menuPrompt) -EnableDialByName -MenuOptions @($menuOptionZero)
$defaultCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default call flow" -Menu $defaultMenu -Greetings @($greetingPrompt)

$afterHoursGreetingPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso! Unfortunately, you have reached us outside of our business hours. We value your call please call us back Monday to Friday, between 9 A.M. to 12 P.M. and 1 P.M. to 5 P.M. Goodbye!"
$automaticMenuOption = New-CsOrganizationalAutoAttendantMenuOption -Action Disconnect -DtmfResponse Automatic 
$afterHoursMenu=New-CsOrganizationalAutoAttendantMenu -Name "After Hours menu" -MenuOptions @($automaticMenuOption)
$afterHoursCallFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default call flow" -Menu $afterHoursMenu -Greetings @($afterHoursGreetingPrompt)

$timerange1 = New-CsOnlineTimeRange -Start 09:00 -end 12:00
$timerange2 = New-CsOnlineTimeRange -Start 13:00 -end 17:00
$afterHoursSchedule = New-CsOnlineSchedule -WeeklyRecurrentSchedule -MondayHours @($timerange1, $timerange2) -TuesdayHours @($timerange1, $timerange2) -WednesdayHours @($timerange1, $timerange2) -ThursdayHours @($timerange1, $timerange2) -FridayHours @($timerange1, $timerange2) -Name "After Hours Schedule" -Complement

$afterHoursCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $afterHoursSchedule.Id -CallFlowId $afterHoursCallFlow.Id

$inclusionScopeGroupIds = @(“4c3053a6-20bf-43df-bf7a-156124168856”)
$inclusionScope = New-CsOrganizationalAutoAttendantDialScope -GroupScope -GroupIds $inclusionScopeGroupIds

$o=New-CsOrganizationalAutoAttendant -Name "Main organizational auto attendant" -LineUris @($lineUri) -DefaultCallFlow $defaultCallFlow -EnableVoiceResponse -Schedules @($afterHoursSchedule) -CallFlows @($afterHoursCallFlow) -CallHandlingAssociations @($afterHoursCallHandlingAssociation) -Language "en-us" -TimeZoneId "UTC" -Operator $operatorEntity  -InclusionScope $inclusionScope
```

This example creates a new OAA named Main organizational auto attendant that has the following properties:

- It sets a default call flow.
- It enables voice response.
- It uses the after hours schedule and call flow.
- The default language is en-US.
- The time zone is set to UTC.
- An inclusion scope is specified.


## PARAMETERS

### -DefaultCallFlow
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.CallFlow

The DefaultCallFlow parameter is the flow to be executed when no other call flow is in effect (for example, during business hours). 

You can create the DefaultCallFlow by using the New-CsOrganizationalAutoAttendantCallFlow cmdlet. 


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

### -LanguageId
PARAMVALUE: String

The LanguageId parameter is the language that is used to read text-to-speech (TTS) prompts. 

You can query the supported languages using the Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet.


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

### -LineUris
PARAMVALUE: System.Collections.Generic.List

The LineUris parameter represents PSTN numbers that are assigned to the OAA. 
PSTN numbers must be your Service number or Toll-free number, because User PSTN Numbers (normal numbers) cannot be added to Auto Attendant. 
Each Uniform Resource Identifier (URI) must be specified by using the following format: the tel: prefix followed by a plus sign, followed by the country/region calling code, area code, and phone number (using only digits, no blank spaces, periods, or hyphens). 
For example: -LineUris [System.Uri]"tel:+4255551219".

Note: Only PSTN numbers that are acquired through or migrated to are supported. 


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

### -Name
PARAMVALUE: String

The Name parameter is a friendly name that is assigned to the OAA.

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
PARAMVALUE: Guid

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

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -CallbackUri
PARAMVALUE: Uri

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

### -CallFlows
PARAMVALUE: System.Collections.Generic.List

The CallFlows parameter represents call flows, which are required if they are referenced in the CallHandlingAssociations parameter. 

You can create CallFlows by using the New-CsOrganizationalAutoAttendantCallFlow cmdlet. 


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

### -CallHandlingAssociations
PARAMVALUE: System.Collections.Generic.List

The CallHandlingAssociations parameter represents the call handling associations. 
The OAA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.

You can create CallHandlingAssociations by using the New-CsOrganizationalAutoAttendantCallHandlingAssociation cmdlet.


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

### -ClientAudience
PARAMVALUE: Uri

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
PARAMVALUE: String

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

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVoiceResponse
PARAMVALUE: System.Management.Automation.SwitchParameter

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

### -Force
PARAMVALUE: SwitchParameter

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

### -Operator
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.CallableEntity

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

### -Ring
PARAMVALUE: String

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

### -Schedules
PARAMVALUE: System.Collections.Generic.List

The Schedules parameter reflects schedules that are associated with the OAA. Schedules are required if they are referenced in the CallHandlingAssociations parameter. 

You can create schedules by using the New-CsOnlineSchedule cmdlet. 


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

### -Tenant
PARAMVALUE: Guid

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

### -TimeZoneId
PARAMVALUE: String

The TimeZoneId parameter represents the OAA time zone. All schedules are evaluated based on this time zone.

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
PARAMVALUE: String

The VoiceId parameter represents the voice that is used to read text-to-speech (TTS) prompts. 

You can query the supported voices by using the Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet. You can determine the default voice for a language by issuing the following command: 
 
`$language = Get-CsOrganizationalAutoAttendantSupportedLanguage -Identity "en-US"`

`$defaultVoice = $language.Voices[0].Gender`

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

### -AsJob
{{Fill AsJob Description}}

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

### -ExclusionScope
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.DialScope

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

### -InclusionScope
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.DialScope

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.OrgAutoAttendant


## NOTES


## RELATED LINKS

[New-CsOrganizationalAutoAttendantCallFlow]()

[New-CsOrganizationalAutoAttendantCallHandlingAssociation]()

[New-CsOrganizationalAutoAttendantCallableEntity]()

[New-CsOnlineSchedule]()

[Get-CsOrganizationalAutoAttendantSupportedLanguage]()