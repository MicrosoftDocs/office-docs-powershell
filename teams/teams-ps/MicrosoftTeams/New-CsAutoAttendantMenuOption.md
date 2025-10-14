---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantmenuoption
schema: 2.0.0
title: New-CsAutoAttendantMenuOption
---

# New-CsAutoAttendantMenuOption

## SYNOPSIS
Use the New-CsAutoAttendantMenuOption cmdlet to create a new menu option.

## SYNTAX

```
New-CsAutoAttendantMenuOption -Action <AgentAndQueues | Announcement | DisconnectCall | MainlineAttendantFlow | TransferCallToOperator | TransferCallToTarget>] [-DtmfResponse <Tone0 | Tone1 | Tone2 | Tone3 | Tone4 | Tone5 | Tone6 | Tone7 | Tone8 | Tone9 | ToneStar | TonePound | Automatic>] [-VoiceResponses <List>] [-CallTarget <Object>] [-Prompt <Object>] [-MainlineAttendantTarget <String>] [-Description <String>] [-AgentTargetType <Copilot | IVR>] [-AgentTarget <String>] [-AgentTargetTagTemplateId <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantMenuOption cmdlet creates a new menu option for the Auto Attendant (AA) service. The AA service uses the menu options to respond to a caller with the appropriate action.

> [!CAUTION]
> The following configuration parameters will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - -Description
> - -Action AgentAndQueues
> - -Action MainLineAttendantFlow
> - -MainlineAttendantTarget

## EXAMPLES

### Example 1
```
$menuOption = New-CsAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
```

This example creates a menu option to call the operator when the 0 key is pressed.

### Example 2
```
$troubleShootObjectId = (Get-CsOnlineUser troubleShoot@contoso.com).ObjectId
$troubleShootEntity = New-CsAutoAttendantCallableEntity -Identity $troubleShootObjectId -Type ApplicationEndpoint
$menuOption = New-CsAutoAttendantMenuOption -Action TransferCallToTarget -DtmfResponse Tone1 -VoiceResponses "Sales" -CallTarget $troubleShootEntity
```

This example creates a menu option to transfer the call to an application endpoint when the caller speaks the word "Sales" or presses the 1 key.

### Example 3
```
$Prompt = New-CsAutoAttendantPrompt -ActiveType TextToSpeech -TextToSpeechPrompt "Our Office is open from Monday to Friday from 9 AM to 5 PM"
$menuOption = New-CsAutoAttendantMenuOption -Action Announcement -DtmfResponse Tone2 -VoiceResponses "Hours" -Prompt $Prompt
```

This example creates a menu option to play an announcement for the defined prompt. After playing the announcement, the **Menu Prompt** is repeated.

## PARAMETERS


### -Action

The Action parameter represents the action to be taken when the menu option is activated. The Action must be set to one of the following values:

- AgentAndQueues - **Restricted to VoiceApps TAP customers**
- Announcement - plays a defined prompt then returns to the menu
- DisconnectCall - The call is disconnected.
- MainlineAttendantFlow - **Restricted to VoiceApps TAP customers**
- TransferCallToOperator - the call is transferred to the operator.
- TransferCallToTarget - The call is transferred to the menu option's call target.

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

### -CallTarget

The CallTarget parameter represents the target for call transfer after the menu option is selected.

CallTarget is required if the action of the menu option is TransferCallToTarget.

Use the New-CsAutoAttendantCallableEntity cmdlet to create new callable entities.

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

### -Description

_Voice applications private preview customers only._

_Saving an auto attendant configuration through Teams admin center will remove this setting._

A description/set of keywords for the option.

Used by Mainline Attendant only.

Limit: 500 characters

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

### -DtmfResponse

The DtmfResponse parameter indicates the key on the telephone keypad to be pressed to activate the menu option. The DtmfResponse must be set to one of the following values:

- Tone0 to Tone9 - Corresponds to DTMF tones from 0 to 9.
- ToneStar - Corresponds to DTMF tone *.
- TonePound - Corresponds to DTMF tone #.
- Automatic - The action is executed without user response.

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

### -MainlineAttendantTarget

_Voice applications private preview customers only._

_Saving an auto attendant configuration through Teams admin center will remove this setting._

The Mainline Attendant call flow target identifier.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True if -Action = MainlineAttendantFlow
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prompt

The **Prompt** parameter reflects the prompts to play when the menu option is activated.

You can create new prompts by using the **New-CsAutoAttendantPrompt** cmdlet.

This parameter is required if the **Action** is set to **Announcement**.

```yaml
Type: Microsoft.Rtc.Management.Hosted.OAA.Models.Prompt
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentTargetType

The AgentTargetType parameter indicates if a Copilot Studio or IVR  application is invoked. The AgentTargetType must be set to one of the following values:

- Copilot - **Restricted to VoiceApps TAP customers - requires that Mainline Attendant be enabled**
- IVR - **Restricted to VoiceApps TAP customers**

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

### -AgentTarget

The AgentTarget parameter is the GUID of the target Copilot or a 3rd party IVR agent.

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

### -AgentTargetTagTemplateId

The AgentTargetTagTemplateId parameter is the GUID of the Tag template to assign.

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

### -VoiceResponses

The VoiceResponses parameter represents the voice responses to select a menu option when Voice Responses are enabled for the auto attendant.

Voice responses are currently limited to one voice response per menu option.

```yaml
Type: System.Collections.Generic.List
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

### Microsoft.Rtc.Management.Hosted.OAA.Models.MenuOption

## NOTES

## RELATED LINKS

[New-CsAutoAttendantCallableEntity](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallableentity)
