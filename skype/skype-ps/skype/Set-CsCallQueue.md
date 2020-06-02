---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-cscallqueue
applicable: Skype for Business Online
title: Set-CsCallQueue
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
author: tomkau
---

# Set-CsCallQueue

## SYNOPSIS
Updates a Call Queue in your Skype for Business Online or Teams organization.

## SYNTAX

```
Set-CsCallQueue -Identity <Guid> [-AgentAlertTime <Int16>] [-AllowOptOut <Boolean>] [-DistributionLists <List>] [-MusicOnHoldAudioFileId <Guid>] [-Name <String>] [-OverflowAction <Object>] [-OverflowActionTarget <Guid>] [-OverflowThreshold <Int16>] [-RoutingMethod <Object>] [-TimeoutAction <Object>] [-Tenant <Guid>] [-TimeoutActionTarget <Guid>] [-TimeoutThreshold <Int16>] [-UseDefaultMusicOnHold <Boolean>] [-WelcomeMusicAudioFileId <Guid>] [-PresenceBasedRouting <Boolean>] [-ConferenceMode <Boolean>] [-Users <List>] [LanguageId <String>] [LineUri <String>] [EnableOverflowSharedVoicemailTranscription <Boolean>] [OverflowSharedVoicemailTextToSpeechPrompt <String>] [OverflowSharedVoicemailAudioFilePrompt <Guid>] [EnableTimeoutSharedVoicemailTranscription <Boolean>] [TimeoutSharedVoicemailTextToSpeechPrompt <String>] [TimeoutSharedVoicemailAudioFilePrompt <Guid>] [<CommonParameters>]
```

## DESCRIPTION

Set-CsCallQueue cmdlet provides a way for you to modify the properties of an existing Call Queue; for example, you can change the name for the Call Queue, the distribution lists associated with the Call Queue, or the welcome audio file. 

The Set-CsCallQueue cmdlet may suggest additional steps required to complete the Call Queue setup.

Note that this cmdlet is in the Skype for Business Online PowerShell module and also affects Teams. The reason the "Applies To:" is stated as Skype for Business Online is because it must match the actual module name of the cmdlet. To learn how this cmdlet is used with Skype for Business Online and Teams, see https://docs.microsoft.com/microsoftteams/create-a-phone-system-call-queue.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Set-CsCallQueue -Identity e7e00636-47da-449c-a36b-1b3d6ee04440 -UseDefaultMusicOnHold $true
```

This example updates the Call Queue with identity e7e00636-47da-449c-a36b-1b3d6ee04440 by making it use the default music on hold.

### -------------------------- Example 2 -------------------------- 
```
Set-CsCallQueue -Identity e7e00636-47da-449c-a36b-1b3d6ee04440 -DistributionLists @("8521b0e3-51bd-4a4b-a8d6-b219a77a0a6a", "868dccd8-d723-4b4f-8d74-ab59e207c357") -MusicOnHoldAudioFileId $audioFile.Id
```

This example updates the Call Queue with new distribution lists and references a new music on hold audio file using the audio file ID  from the stored variable $audioFile created with the [Import-CsOnlineAudioFile cmdlet](https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile)

## PARAMETERS

### -Identity
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

### -AgentAlertTime
The AgentAlertTime parameter represents the time (in seconds) that a call can remain unanswered before it is automatically routed to the next agent. The AgentAlertTime can be set to any integer value between 15 and 180 seconds (3 minutes), inclusive.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 30
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOptOut
The AllowOptOut parameter indicates whether or not agents can opt in or opt out from taking calls from a Call Queue.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionLists
The DistributionLists parameter lets you add all the members of the distribution lists to the Call Queue. This is a list of distribution list GUIDs. A service wide configurable maximum number of DLs per Call Queue are allowed. Only the first N (service wide configurable) agents from all distribution lists combined are considered for accepting the call. Nested DLs are supported. O365 Groups can also be used to add members to the Call Queue.

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldAudioFileId
The MusicOnHoldFileContent parameter represents music to play when callers are placed on hold. This is the unique identifier of the audio file. This parameter is required if the UseDefaultMusicOnHold parameter is not specified.

```yaml
Type: Guid
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
The Name parameter specifies a unique name for the Call Queue.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowAction
The OverflowAction parameter designates the action to take if the overflow threshold is reached. The OverflowAction property must be set to one of the following three values: DisconnectWithBusy, Forward, and Voicemail.

PARAMVALUE: DisconnectWithBusy | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: DisconnectWithBusy
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionTarget
The OverflowActionTarget parameter represents the target of the overflow action. If the OverFlowAction is set to Forward, this parameter must be set to a Guid. Otherwise, this parameter is optional.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowThreshold
The OverflowThreshold parameter defines the number of calls that can be in the queue at any one time before the overflow action is triggered. The OverflowThreshold can be any integer value between 0 and 200, inclusive. A value of 0 causes calls not to reach agents and the overflow action to be taken immediately.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 50
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod
The RoutingMethod defines how agents will be called in a Call Queue. If the routing method is set to Serial, then agents will be called one at a time. If the routing method is set to Attendant, then agents will be called in parallel.

PARAMVALUE: Attendant | Serial | RoundRobin

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Attendant
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
The TimeoutAction parameter defines the action to take if the timeout threshold is reached. The TimeoutAction property must be set to one of the following three values: Disconnect, Forward, and Voicemail. The default value is Disconnect.

PARAMVALUE: Disconnect | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionTarget
The TimeoutActionTarget represents the target of the timeout action. If the TimeoutAction is set to Forward, this parameter must be set to a Guid. Otherwise, this field is optional.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutThreshold
The TimeoutThreshold parameter defines the time (in seconds) that a call can be in the queue before that call times out. At that point, the system will take the action specified by the TimeoutAction parameter. 
The TimeoutThreshold can be any integer value between 0 and 2700 seconds (inclusive), and is rounded to the nearest 15th interval. For example, if set to 47 seconds, then it is rounded down to 45. If set to 0, welcome music is played, and then the timeout action will be taken.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 1200
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultMusicOnHold
The UseDefaultMusicOnHold parameter indicates that this Call Queue uses the default music on hold. This parameter cannot be specified together with MusicOnHoldAudioFileId.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeMusicAudioFileId
The WelcomeMusicAudioFileId parameter represents the audio file to play when callers are connected with the Call Queue. This is the unique identifier of the audio file.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PresenceBasedRouting
The PresenceBasedRouting parameter indicates whether or not presence based routing will be applied while call being routed to Call Queue agents. When set to False, calls will be routed to agents who have opted in to receive calls, regardless of their presence state. When set to True, opted-in agents will receive calls only when their presence state is Available.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferenceMode
The ConferenceMode parameter indicates whether or not Conference mode will be applied on calls for this Call queue. Conference mode significantly reduces the amount of time it takes for a caller to be connected to an agent, after the agent accepts the call.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Users
The Users parameter lets you add agents to the Call Queue. This parameter expects a list of user unique identifiers (GUID).

```yaml
Type: List
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
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
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
This parameter is reserved for Microsoft internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
This parameter is reserved for Microsoft internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOverflowSharedVoicemailTranscription
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowSharedVoicemailTextToSpeechPrompt
This parameter is reserved for Microsoft internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowSharedVoicemailAudioFilePrompt
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTimeoutSharedVoicemailTranscription
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutSharedVoicemailTextToSpeechPrompt
This parameter is reserved for Microsoft internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutSharedVoicemailAudioFilePrompt
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS
