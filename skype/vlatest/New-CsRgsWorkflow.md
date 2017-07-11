---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRgsWorkflow

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new Response Group workflow.
Workflows determine the actions that are taken when the Response Group application receives a phone call.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new Response Group workflow.
Workflows determine the actions that are taken when the Response Group application receives a phone call.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsWorkflow [-Parent] <RgsIdentity> -Name <String> -PrimaryUri <Uri> [-Active <Boolean>]
 [-Anonymous <Boolean>] [-BusinessHoursID <RgsIdentity>] [-CustomMusicOnHoldFile <AudioFile>]
 [-DefaultAction <CallAction>] [-Description <String>] [-DisplayNumber <String>]
 [-EnabledForFederation <Boolean>] [-HolidayAction <CallAction>] [-Language <String>] [-LineUri <Uri>]
 [-NonBusinessHoursAction <CallAction>] [-TimeZone <String>] [-Force] [-InMemory] [-Confirm]
 [-HolidaySetIDList <System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.RgsIdentity]>]
 [-WhatIf] [-Managed <Boolean>] [-ManagersByUri <System.Collections.ObjectModel.Collection`1[System.Uri]>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Workflows are a key element in the Response Group application.
Each workflow is uniquely associated with a phone number; when someone calls that number, the workflow determines how the call will be handled.
For example, the call might be routed to a series of interactive voice response (IVR) questions that prompt the caller to enter additional information ("Press 1 for hardware support.
Press 2 for software support.") Alternatively, the call might be placed in a queue and the caller placed on hold until an agent is available to answer the call.
The availability of agents to answer calls is also dictated by the workflow: workflows are used to configure business hours (the days of the week and the times of day when agents are available to answer calls) as well as holidays (days when no agents are available to answer calls).

New workflows are created by using the New-CsRgsWorkflow cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRgsWorkflow cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsRgsWorkflow"}

**Below Content Applies To:** Lync Server 2013

Workflows are a key element in the Response Group application.
Each workflow is uniquely associated with a phone number; when someone calls that number, the workflow determines how the call will be handled.
For example, the call might be routed to a series of interactive voice response (IVR) questions that prompt the caller to enter additional information ("Press 1 for hardware support.
Press 2 for software support.") Alternatively, the call might be placed in a queue and the caller placed on hold until an agent is available to answer the call.
The availability of agents to answer calls is also dictated by the workflow: workflows are used to configure business hours (the days of the week and the times of day when agents are available to answer calls) and also holidays (days when no agents are available to answer calls).

New workflows are created by using the New-CsRgsWorkflow cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRgsWorkflow cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsRgsWorkflow"}

**Below Content Applies To:** Skype for Business Server 2015

Workflows are a key element in the Response Group application.
Each workflow is uniquely associated with a phone number; when someone calls that number, the workflow determines how the call will be handled.
For example, the call might be routed to a series of interactive voice response (IVR) questions that prompt the caller to enter additional information ("Press 1 for hardware support.
Press 2 for software support.") Alternatively, the call might be placed in a queue and the caller placed on hold until an agent is available to answer the call.
The availability of agents to answer calls is also dictated by the workflow: workflows are used to configure business hours (the days of the week and the times of day when agents are available to answer calls) and also holidays (days when no agents are available to answer calls).

New workflows are created by using the New-CsRgsWorkflow cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com"
```

The preceding command creates a new workflow on the service ApplicationServer:atl-cs-001.litwareinc.com.
This workflow is given the Name Help Desk and is assigned a primary URI of sip:helpdesk@litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new workflow on the service ApplicationServer:atl-cs-001.litwareinc.com.
This workflow is given the Name Help Desk and is assigned a primary URI of sip:helpdesk@litwareinc.com.

New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new workflow on the service ApplicationServer:atl-cs-001.litwareinc.com.
This workflow is given the Name Help Desk and is assigned a primary URI of sip:helpdesk@litwareinc.com.

New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com"

### -------------------------- Example 2 ------------------------Add code example (Lync Server 2010)
```
$prompt = New-CsRgsPrompt -TextToSpeechPrompt "Welcome to the help desk."
$queue = (Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk").Identity
$callAction = New-CsRgsCallAction -Prompt $prompt -Action TransferToQueue -QueueId $queue
New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com" -DefaultAction $callAction
```

The command shown in Example 2 create a new workflow prompt and call action, then assigns those items to a new Response Group workflow.
In the first command, the New-CsRgsPrompt cmdlet is used to create a text-to-speech prompt "Welcome to the help desk." This new prompt is stored in a variable named $prompt.

The second command uses the Get-CsRgsQueue cmdlet to retrieve the Identity of an existing Response Group queue named Help Desk; the returned Identity is stored in a variable named $queue.

Command 3 then creates a new call action (stored in a variable named $callAction) that references both the new prompt ($prompt) and the retrieved queue ($queue).
Finally, the last command in the example creates a new workflow named Help Desk.
This command sets the PrimaryUri to sip:helpdesk@litwareinc.com and sets the value of the DefaultAction property to the call action created in the previous step.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 create a new workflow prompt and call action, then assigns those items to a new Response Group workflow.
In the first command, the New-CsRgsPrompt cmdlet is used to create a text-to-speech prompt "Welcome to the help desk." This new prompt is stored in a variable named $prompt.

The second command uses the Get-CsRgsQueue cmdlet to retrieve the Identity of an existing Response Group queue named Help Desk; the returned Identity is stored in a variable named $queue.

Command 3 then creates a new call action (stored in a variable named $callAction) that references both the new prompt ($prompt) and the retrieved queue ($queue).
Finally, the last command in the example creates a new workflow named Help Desk.
This command sets the PrimaryUri to sip:helpdesk@litwareinc.com and sets the value of the DefaultAction property to the call action created in the previous step.

$prompt = New-CsRgsPrompt -TextToSpeechPrompt "Welcome to the help desk."

$queue = (Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk").Identity

$callAction = New-CsRgsCallAction -Prompt $prompt -Action TransferToQueue -QueueId $queue

New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com" -DefaultAction $callAction

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 create a new workflow prompt and call action, then assigns those items to a new Response Group workflow.
In the first command, the New-CsRgsPrompt cmdlet is used to create a text-to-speech prompt "Welcome to the help desk." This new prompt is stored in a variable named $prompt.

The second command uses the Get-CsRgsQueue cmdlet to retrieve the Identity of an existing Response Group queue named Help Desk; the returned Identity is stored in a variable named $queue.

Command 3 then creates a new call action (stored in a variable named $callAction) that references both the new prompt ($prompt) and the retrieved queue ($queue).
Finally, the last command in the example creates a new workflow named Help Desk.
This command sets the PrimaryUri to sip:helpdesk@litwareinc.com and sets the value of the DefaultAction property to the call action created in the previous step.

$prompt = New-CsRgsPrompt -TextToSpeechPrompt "Welcome to the help desk."

$queue = (Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk").Identity

$callAction = New-CsRgsCallAction -Prompt $prompt -Action TransferToQueue -QueueId $queue

New-CsRgsWorkflow -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -PrimaryUri "sip:helpdesk@litwareinc.com" -DefaultAction $callAction

## PARAMETERS

### -Name
Unique name to be assigned to the workflow.
The combination of the Parent property and the Name property enables you to uniquely identify workflows without having to refer to the workflow's globally unique identifier (GUID).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Service where the new workflow will be hosted.
For example: -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com".

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryUri
SIP address for the workflow.
For example: -PrimaryUri "sip:helpdesk@litwareinc.com".
The PrimaryUri must begin with the "sip:" prefix.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Active
If set to True, this means that the workflow is active and available to take phone calls.
If set to False (the default value), the workflow is not available to take phone calls.

When the Active property is set to True then the workflow will be validated before it is created.
For example, the workflow will not be created if a DefaultAction has not been specified.
If Active is set to False (or not configured) then no validation will take place, and the workflow will be created even if a DefaultAction has not been specified.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Anonymous
If set to True, the identities of individual Response Group agents will be masked any time these agents answer a call.
If set to False (the default value), agent identities will be available to callers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BusinessHoursID
Days of the week and times of the day that workflow agents are available to answer calls.
The business hour Identities can be retrieved by using the Get-CsRgsHoursOfBusiness cmdlet.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomMusicOnHoldFile
Represents custom music to be played when callers are placed on hold.
(If not defined, callers will hear the default music when placed on hold.) Custom music must be imported by using the Import-CsRgsAudioFile cmdlet.

```yaml
Type: AudioFile
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultAction
Indicates the action to be taken when a workflow is opened during business hours.
DefaultAction must be defined by using the New-CsRgsCallAction cmdlet, and must either direct the call to a queue or to a question.
The DefaultAction parameter is mandatory if the workflow is active, but can be omitted if the workflow is inactive.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
**Below Content Applies To:** Lync Server 2010

Enables administrators to add additional information about a Response Group workflow.
For example, the Description might include contact information for the owner of the workflow.
This description appears in the Microsoft Lync 2010 contact card for the workflow.



**Below Content Applies To:** Lync Server 2013

Enables administrators to add additional information about a Response Group workflow.
For example, the Description might include contact information for the owner of the workflow.
This description appears in the Lync contact card for the workflow.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to add additional information about a Response Group workflow.
For example, the Description might include contact information for the owner of the workflow.
This description appears in the Skype for Business contact card for the workflow.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayNumber
**Below Content Applies To:** Lync Server 2010

Phone number for the workflow as displayed in Lync 2010.
The DisplayNumber can formatted any way you want; for example:

-DisplayNumber "555-1219"

-DisplayNumber "1-(425)-555-1219"

-DisplayNumber "1.425.555.1219"



**Below Content Applies To:** Lync Server 2013

Phone number for the workflow as displayed in Lync.
The DisplayNumber can be formatted any way you want; for example:

-DisplayNumber "555-1219"

-DisplayNumber "1-(425)-555-1219"

-DisplayNumber "1.425.555.1219"



**Below Content Applies To:** Skype for Business Server 2015

Phone number for the workflow as displayed in Skype for Business.
The DisplayNumber can be formatted any way you want; for example:

-DisplayNumber "555-1219"

-DisplayNumber "1-(425)-555-1219"

-DisplayNumber "1.425.555.1219"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledForFederation
Indicates whether the workflow is available to users from a federated domain.
If set to False, only users within your organization will have access to the workflow.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HolidayAction
Action to be taken if a call is received on a holiday.
The HolidayAction must be defined by using the New-CsRgsCallAction cmdlet.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
**Below Content Applies To:** Lync Server 2010

Language that is used to read workflow text-to-speech prompts.
The language parameter is optional as long as the operating system is using one of the supported languages shown in the list below.
(Note that supported speech languages represent a subset of the languages that can be used on the operating system.)

If the operating system is not using a supported language, then the Language parameter becomes mandatory, and the parameter must specify the language code for a supported language.
If your operating system is using a non-supported language on the operating system, and you run New-CsRgsWorkflow without including the Language parameter, your command will fail.

For example, suppose your operating system is running under the Faroese language.
This  language is supported by the Windows operating system, but not by the Response Group application.
Therefore, you must include the Language parameter and a supported language when creating a new workflow.

This is required because, if no language is specified, the workflow uses the operating system language.
However, that language can be used in a workflow only if it is a language supported by the Response Group application.

The language must be specified using one of the following language codes:

ca-Es - Catalan (Catalan)

da-DK - Danish (Denmark)

de-DE - German (Germany)

en-AU - English (Australia)

en-CA - English (Canada)

en-GB - English (United Kingdom)

en-IN - English (India)

en-US - English (United States)

es-ES - Spanish (Spain)

es-MX - Spanish (Mexico)

fi-FI - Finnish (Finland)

fr-CA - French (Canada)

fr-FR - French (France)

it-IT - Italian (Italy)

ja-JP - Japanese (Japan)

ko-KR - Korean (Korea)

nb-NO - Norwegian, Bokmal (Norway)

nl-NL - Dutch (Netherlands)

pl-PL - Polish (Poland)

pt-BR - Portuguese (Brazil)

pt-PT - Portuguese (Portugal)

ru-RU - Russian (Russia)

sv-SE - Swedish (Sweden)

zh-CN - Chinese (People's Republic of China)

zh-HK - Chinese (Hong Kong SAR)

zh-TW - Chinese (Taiwan)

For example: -Language "nl-NL".



**Below Content Applies To:** Lync Server 2013

Language that is used to read workflow text-to-speech prompts.
The language parameter is optional as long as the operating system is using one of the supported languages shown in the list below.
(Note that supported speech languages represent a subset of the languages that can be used on the operating system.)

If the operating system is not using a supported language, then the Language parameter becomes mandatory, and the parameter must specify the language code for a supported language.
If your operating system is using a non-supported language on the operating system, and you run New-CsRgsWorkflow without including the Language parameter, your command will fail.

For example, suppose your operating system is running under the Faroese language.
This language is supported by the Windows operating system, but not by the Response Group application.
Therefore, you must include the Language parameter and a supported language when creating a new workflow.

This is required because, if no language is specified, the workflow uses the operating system language.
However, that language can be used in a workflow only if it is a language supported by the Response Group application.

The language must be specified using one of the following language codes:

ca-Es - Catalan (Spain)

da-DK - Danish (Denmark)

de-DE - German (Germany)

en-AU - English (Australia)

en-CA - English (Canada)

en-GB - English (United Kingdom)

en-IN - English (India)

en-US - English (United States)

es-ES - Spanish (Spain)

es-MX - Spanish (Mexico)

fi-FI - Finnish (Finland)

fr-CA - French (Canada)

fr-FR - French (France)

it-IT - Italian (Italy)

ja-JP - Japanese (Japan)

ko-KR - Korean (Korea)

nb-NO - Norwegian, Bokmal (Norway)

nl-NL - Dutch (Netherlands)

pl-PL - Polish (Poland)

pt-BR - Portuguese (Brazil)

pt-PT - Portuguese (Portugal)

ru-RU - Russian (Russia)

sv-SE - Swedish (Sweden)

zh-CN - Chinese (People's Republic of China)

zh-HK - Chinese (Hong Kong SAR)

zh-TW - Chinese (Taiwan)

For example: -Language "nl-NL".



**Below Content Applies To:** Skype for Business Server 2015

Language that is used to read workflow text-to-speech prompts.
The language parameter is optional as long as the operating system is using one of the supported languages shown in the list below.
(Note that supported speech languages represent a subset of the languages that can be used on the operating system.)

If the operating system is not using a supported language, then the Language parameter becomes mandatory, and the parameter must specify the language code for a supported language.
If your operating system is using a non-supported language on the operating system, and you run the New-CsRgsWorkflow cmdlet without including the Language parameter, your command will fail.

For example, suppose your operating system is running under the Faroese language.
This language is supported by the Windows operating system, but not by the Response Group application.
Therefore, you must include the Language parameter and a supported language when creating a new workflow.

This is required because, if no language is specified, the workflow uses the operating system language.
However, that language can be used in a workflow only if it is a language supported by the Response Group application.

The language must be specified using one of the following language codes:

ca-ES - Catalan (Spain)

da-DK - Danish (Denmark)

de-DE - German (Germany)

en-AU - English (Australia)

en-CA - English (Canada)

en-GB - English (United Kingdom)

en-IN - English (India)

en-US - English (United States)

es-ES - Spanish (Spain)

es-MX - Spanish (Mexico)

fi-FI - Finnish (Finland)

fr-CA - French (Canada)

fr-FR - French (France)

it-IT - Italian (Italy)

ja-JP - Japanese (Japan)

ko-KR - Korean (Korea)

nb-NO - Norwegian, Bokmal (Norway)

nl-NL - Dutch (Netherlands)

pl-PL - Polish (Poland)

pt-BR - Portuguese (Brazil)

pt-PT - Portuguese (Portugal)

ru-RU - Russian (Russia)

sv-SE - Swedish (Sweden)

zh-CN - Chinese (People's Republic of China)

zh-HK - Chinese (Hong Kong SAR)

zh-TW - Chinese (Taiwan)

For example: -Language "nl-NL".



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
Phone number for the workflow.
The line Uniform Resource Identifier (URI) must be specified by using the following format: the TEL: prefix followed by a plus sign, followed by the country/region calling code, area code, and phone number (using only digits: no blank spaces, periods, or hyphens).
For example: -LineUri "TEL:+14255551219"

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonBusinessHoursAction
Action to be taken if a call is received outside the workflow's business hours.
The NonBusinessHoursAction must be defined by using the New-CsRgsCallAction cmdlet.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone
Time zone information used when determining holidays and business hours.
For example: -TimeZone "Pacific Standard Time"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010

Prompts you for confirmation before running the cmdlet.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HolidaySetIDList
Represents days when workflow agents are not available to answer calls.
The holiday set Identities can be retrieved by using the Get-CsRgsHolidaySet cmdlet.

```yaml
Type: System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.RgsIdentity]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Managed
When set to True indicates that the workflow will be managed by one or more users.
Those users can be specified by using the ManagedByUri parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagersByUri
SIP addresses of the user (or users) who will manage the workflow.
For example:

-ManagedByUri "sip:kenmyer@litwareinc.com"

To specify multiple managers separate the manager SIP addresses by using commas:

-ManagedByUri "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"

```yaml
Type: System.Collections.ObjectModel.Collection`1[System.Uri]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsRgsWorkflow does not accept pipelined input.

###  
None.
The New-CsRgsWorkflow cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsRgsWorkflow creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Workflow object.

###  
The New-CsRgsWorkflow cmdlet creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Workflow object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1a2ac5b7-cb1d-4a83-801f-f27671e71743(OCS.14).aspx)

[Get-CsRgsWorkflow]()

[Remove-CsRgsWorkflow]()

[Set-CsRgsWorkflow]()

[Online Version](http://technet.microsoft.com/EN-US/library/1a2ac5b7-cb1d-4a83-801f-f27671e71743(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1a2ac5b7-cb1d-4a83-801f-f27671e71743(OCS.16).aspx)

