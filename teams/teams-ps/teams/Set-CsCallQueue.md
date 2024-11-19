---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-cscallqueue
applicable: Microsoft Teams
title: Set-CsCallQueue
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsCallQueue

## SYNOPSIS
Updates a Call Queue in your Skype for Business Online or Teams organization.

## SYNTAX

```
Set-CsCallQueue -Identity <Guid> [-AgentAlertTime <Int16>] [-AllowOptOut <Boolean>] [-ChannelId <Guid>] [-ChannelUserObjectId <Guid>] [-DistributionLists <List>] [-MusicOnHoldAudioFileId <Guid>] [-Name <String>] [-OboResourceAccountIds <List>] [-OverflowAction <Object>] [-OverflowActionTarget <Guid>] [-OverflowActionCallPriority <Int16>] [-OverflowThreshold <Int16>] [-RoutingMethod <Object>] [-TimeoutAction <Object>] [-Tenant <Guid>] [-TimeoutActionTarget <Guid>] [-TimeoutActionCallPriority <Int16>] [-TimeoutThreshold <Int16>] [-NoAgentApplyTo <String>] [-NoAgentAction <Object>] [-NoAgentActionTarget <Guid>] [-NoAgentActionCallPriority <Int16>] [-UseDefaultMusicOnHold <Boolean>] [-WelcomeMusicAudioFileId <Guid>] [-PresenceBasedRouting <Boolean>] [-ConferenceMode <Boolean>] [-Users <List>] [-LanguageId <String>] [-LineUri <String>] [-OverflowDisconnectTextToSpeechPrompt <String>][-OverflowDisconnectAudioFilePrompt <Guid>] [-OverflowRedirectPersonTextToSpeechPrompt <String>] [-OverflowRedirectPersonAudioFilePrompt <Guid>] [-OverflowRedirectVoiceAppTextToSpeechPrompt <String>] [-OverflowRedirectVoiceAppAudioFilePrompt <Guid>] [-OverflowRedirectPhoneNumberTextToSpeechPrompt <String>] [-OverflowRedirectPhoneNumberAudioFilePrompt <Guid>] [-OverflowRedirectVoicemailTextToSpeechPrompt <String>] [-OverflowRedirectVoicemailAudioFilePrompt <Guid>] [-OverflowSharedVoicemailTextToSpeechPrompt <String>] [-OverflowSharedVoicemailAudioFilePrompt <Guid>] [-EnableOverflowSharedVoicemailTranscription <Boolean>] [-EnableOverflowSharedVoicemailSystemPromptSuppression <Boolean>] [-TimeoutDisconnectTextToSpeechPrompt <String>][-TimeoutDisconnectAudioFilePrompt <Guid>] [-TimeoutRedirectPersonTextToSpeechPrompt <String>] [-TimeoutRedirectPersonAudioFilePrompt <Guid>] [-TimeoutRedirectVoiceAppTextToSpeechPrompt <String>] [-TimeoutRedirectVoiceAppAudioFilePrompt <Guid>] [-TimeoutRedirectPhoneNumberTextToSpeechPrompt <String>][-TimeoutRedirectPhoneNumberAudioFilePrompt <Guid>] [-TimeoutRedirectVoicemailTextToSpeechPrompt <String>] [-TimeoutRedirectVoicemailAudioFilePrompt <Guid>] [-TimeoutSharedVoicemailTextToSpeechPrompt <String>] [-TimeoutSharedVoicemailAudioFilePrompt <Guid>] [-TimeoutSharedVoicemailTextToSpeechPrompt <String>] [-TimeoutSharedVoicemailAudioFilePrompt <Guid>] [-EnableTimeoutSharedVoicemailTranscription <Boolean>] [-EnableTimeoutSharedVoicemailSystemPromptSuppression <Boolean>] [-NoAgentDisconnectTextToSpeechPrompt <String>][-NoAgentDisconnectAudioFilePrompt <Guid>] [-NoAgentRedirectPersonTextToSpeechPrompt <String>] [-NoAgentRedirectPersonAudioFilePrompt <Guid>] [-NoAgentRedirectVoiceAppTextToSpeechPrompt <String>] [-NoAgentRedirectVoiceAppAudioFilePrompt <Guid>] [-NoAgentRedirectPhoneNumberTextToSpeechPrompt <String>] [-NoAgentRedirectPhoneNumberAudioFilePrompt <Guid>] [-NoAgentRedirectVoicemailTextToSpeechPrompt <String>] [-NoAgentRedirectVoicemailAudioFilePrompt <Guid>] [-NoAgentSharedVoicemailTextToSpeechPrompt <String>] [-NoAgentSharedVoicemailAudioFilePrompt <Guid>] [-EnableNoAgentSharedVoicemailTranscription <Boolean>] [-EnableNoAgentSharedVoicemailSystemPromptSuppression <Boolean>] [AuthorizedUsers <List>] [-HideAuthorizedUsers <List>] [-WelcomeTextToSpeechPrompt <String>] [-IsCallbackEnabled <Boolean>] [-CallbackRequestDtmf <String>] [-WaitTimeBeforeOfferingCallbackInSecond <Int16>] [-NumberOfCallsInQueueBeforeOfferingCallback <Int16>] [-CallToAgentRatioThresholdBeforeOfferingCallback <Int16>] [-CallbackOfferAudioFilePromptResourceId <Guid>] [-CallbackOfferTextToSpeechPrompt <String> [-CallbackEmailNotificationTarget <Guid>] [-ServiceLevelThresholdResponseTimeInSecond [Int16> ] [-ShouldOverwriteCallableChannelProperty <Boolean>] [<CommonParameters>]
```

## DESCRIPTION

Set-CsCallQueue cmdlet provides a way for you to modify the properties of an existing Call Queue; for example, you can change the name for the Call Queue, the distribution lists associated with the Call Queue, or the welcome audio file. 

The Set-CsCallQueue cmdlet may suggest additional steps required to complete the Call Queue setup.

Note that this cmdlet is in the Skype for Business Online PowerShell module and also affects Teams. The reason the "Applies To:" is stated as Skype for Business Online is because it must match the actual module name of the cmdlet. To learn how this cmdlet is used with Skype for Business Online and Teams, see https://learn.microsoft.com/microsoftteams/create-a-phone-system-call-queue.

> [!CAUTION]
> The following configuration parameters are currently only available in PowerShell and do not appear in Teams admin center. Saving a call queue configuration through Teams admin center will _remove_ any of these configured items. 
>
> - -HideAuthorizedUsers
> - -OverflowRedirectPersonTextToSpeechPrompt
> - -OverflowRedirectPersonAudioFilePrompt
> - -OverflowRedirectVoicemailTextToSpeechPrompt
> - -OverflowRedirectVoicemailAudioFilePrompt
> - -TimeoutRedirectPersonTextToSpeechPrompt
> - -TimeoutRedirectPersonAudioFilePrompt
> - -TimeoutRedirectVoicemailTextToSpeechPrompt
> - -TimeoutRedirectVoicemailAudioFilePrompt
> - -NoAgentRedirectPersonTextToSpeechPrompt
> - -NoAgentRedirectPersonAudioFilePrompt
> - -NoAgentRedirectVoicemailTextToSpeechPrompt
> - -NoAgentRedirectVoicemailAudioFilePrompt
> - -IsCallbackEnabled
> - -CallbackRequestDtmf
> - -WaitTimeBeforeOfferingCallbackInSecond
> - -NumberOfCallsInQueueBeforeOfferingCallback
> - -CallToAgentRatioThresholdBeforeOfferingCallback
> - -CallbackOfferAudioFilePromptResourceId
> - -CallbackOfferTextToSpeechPrompt
> - -CallbackEmailNotificationTarget
>
> The following configuration parameters will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - -OverflowActionCallPriority
> - -TimeoutActionCallPriority
> - -NoAgentActionCallPriority
>
> The following configuration parameter will only work for customers that are participating in the Queues app private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - -ServiceLevelThresholdResponseTimeInSecond

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

This example updates the Call Queue with new distribution lists and references a new music on hold audio file using the audio file ID  from the stored variable $audioFile created with the [Import-CsOnlineAudioFile cmdlet](Import-CsOnlineAudioFile.md)

## PARAMETERS

### -Identity
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OboResourceAccountIds
The OboResourceAccountIds parameter lets you add resource account with phone number to the Call Queue. The agents in the Call Queue will be able to make outbound calls using the phone number on the resource accounts.  This is a list of resource account GUIDs.

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowAction
The OverflowAction parameter designates the action to take if the overflow threshold is reached. The OverflowAction property must be set to one of the following values: DisconnectWithBusy, Forward, Voicemail, and SharedVoicemail. The default value is DisconnectWithBusy.

PARAMVALUE: DisconnectWithBusy | Forward | Voicemail | SharedVoicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: DisconnectWithBusy
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionTarget
The OverflowActionTarget parameter represents the target of the overflow action. If the OverFlowAction is set to Forward, this parameter must be set to a Guid or a telephone number with a mandatory 'tel:' prefix. If the OverflowAction is set to SharedVoicemail, this parameter must be set to a group ID (Microsoft 365, Distribution list, or Mail-enabled security). Otherwise, this parameter is optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionCallPriority
_Private Preview customers only_

If the OverflowAction is set to Forward, and the OverflowActionTarget is set to an Auto attendant or Call queue resource account Guid, this parameter must be set to indicate the priority that will be assigned to the call. Otherwise, this parameter is not applicable.

PARAMVALUE: 1 | 2 | 3 | 4 | 5
- 1 = Very High
- 2 = High
- 3 = Normal / Default
- 4 = Low
- 5 = Very Low

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 50
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod
The RoutingMethod defines how agents will be called in a Call Queue. If the routing method is set to Serial, then agents will be called one at a time. If the routing method is set to Attendant, then agents will be called in parallel. If routing method is set to RoundRobin, the agents will be called using Round Robin strategy so that all agents share the call-load equally. If routing method is set to LongestIdle, the agents will be called based on their idle time, i.e., the agent that has been idle for the longest period will be called.

PARAMVALUE: Attendant | Serial | RoundRobin | LongestIdle

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Attendant
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
The TimeoutAction parameter defines the action to take if the timeout threshold is reached. The TimeoutAction property must be set to one of the following values: Disconnect, Forward, Voicemail, and SharedVoicemail. The default value is Disconnect.

PARAMVALUE: Disconnect | Forward | Voicemail | SharedVoicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionTarget
The TimeoutActionTarget represents the target of the timeout action. If the TimeoutAction is set to Forward, this parameter must be set to a Guid or a telephone number with a mandatory 'tel:' prefix. If the TimeoutAction is set to SharedVoicemail, this parameter must be set to an Office 365 Group ID. Otherwise, this field is optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionCallPriority
_Private Preview customers only_

If the TimeoutAction is set to Forward, and the TimeoutActionTarget is set to an Auto attendant or Call queue resource account Guid, this parameter must be set to indicate the priority that will be assigned to the call. Otherwise, this parameter is not applicable.

PARAMVALUE: 1 | 2 | 3 | 4 | 5
- 1 = Very High
- 2 = High
- 3 = Normal / Default
- 4 = Low
- 5 = Very Low

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 1200
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentApplyTo
The NoAgentApplyTo parameter defines if the NoAgentAction applies to calls already in queue and new calls arriving to the queue, or only new calls that arrive once the No Agents condition occurs.  The default value is AllCalls.

PARAMVALUE: AllCalls | NewCalls

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentAction
The NoAgentAction parameter defines the action to take if the no agents condition is reached. The NoAgentAction property must be set to one of the following values: Queue, Disconnect, Forward, Voicemail, and SharedVoicemail. The default value is Queue.

PARAMVALUE: Queue | Disconnect | Forward | Voicemail | SharedVoicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentActionTarget
The NoAgentActionTarget represents the target of the no agent action. If the NoAgentAction is set to Forward, this parameter must be set to a Guid or a telephone number with a mandatory 'tel:' prefix. If the NoAgentAction is set to SharedVoicemail, this parameter must be set to a group ID (Microsoft 365, Distribution list, or Mail-enabled security). Otherwise, this field is optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentActionCallPriority
_Private Preview customers only_

If the NoAgentAction is set to Forward, and the NoAgentActionTarget is set to an Auto attendant or Call queue resource account Guid, this parameter must be set to indicate the priority that will be assigned to the call. Otherwise, this parameter is not applicable.

PARAMVALUE: 1 | 2 | 3 | 4 | 5
- 1 = Very High
- 2 = High
- 3 = Normal / Default
- 4 = Low
- 5 = Very Low

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultMusicOnHold
The UseDefaultMusicOnHold parameter indicates that this Call Queue uses the default music on hold. This parameter cannot be specified together with MusicOnHoldAudioFileId.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConferenceMode
The ConferenceMode parameter indicates whether or not Conference mode will be applied on calls for this Call queue. Conference mode significantly reduces the amount of time it takes for a caller to be connected to an agent, after the agent accepts the call. The following bullet points detail the difference between both modes:

- Conference Mode Disabled: CQ call is presented to agent. Agent answers and media streams are setup. Based on geographic location of the CQ call and agent, there may be a slight delay in setting up the media streams which may result in some dead air and the first part of the conversation being cut off.

- Conference Mode Enabled: CQ call is put into conference. Agent answers and is brought into conference. Media streams are already setup when agent is brought into conference thus no dead air, and first bit of conversation will not be cut off.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Users
The User parameter lets you add agents to the Call Queue. This parameter expects a list of user unique identifiers (GUID).

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LanguageId
The LanguageId parameter indicates the language that is used to play shared voicemail prompts. This parameter becomes a required parameter If either OverflowAction or TimeoutAction is set to SharedVoicemail.

You can query the supported languages using the Get-CsAutoAttendantSupportedLanguage cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowDisconnectAudioFilePrompt
The OverflowDisconnectAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being disconnected due to overflow.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowDisconnectTextToSpeechPrompt
The OverflowDisconnectTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being disconnected due to overflow. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectPersonAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The OverflowRedirectPersonAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person in the organization due to overflow. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectPersonTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The OverflowRedirectPersonTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person in the organization due to overflow. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectVoiceAppAudioFilePrompt
The OverflowRedirectVoiceAppAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a voice application due to overflow. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectVoiceAppTextToSpeechPrompt
The OverflowRedirectVoiceAppsTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a voice application due to overflow. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectPhoneNumberAudioFilePrompt
The OverflowRedirectPhoneNumberAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to an external PSTN phone number due to overflow. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectPhoneNumberTextToSpeechPrompt
The OverflowRedirectPhoneNumberTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to an external PSTN phone number due to overflow. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectVoicemailAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The OverflowRedirectVoiceMailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person's voicemail due to overflow. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowRedirectVoicemailTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The OverflowRedirectVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person's voicemail due to overflow. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowSharedVoicemailTextToSpeechPrompt
The OverflowSharedVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is to be played as a greeting to the caller when transferred to shared voicemail on overflow. This parameter becomes a required parameter when OverflowAction is SharedVoicemail and OverflowSharedVoicemailAudioFilePrompt is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowSharedVoicemailAudioFilePrompt
The OverflowSharedVoicemailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is to be played as a greeting to the caller when transferred to shared voicemail on overflow. This parameter becomes a required parameter when OverflowAction is SharedVoicemail and OverflowSharedVoicemailTextToSpeechPrompt is null.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOverflowSharedVoicemailTranscription
The EnableOverflowSharedVoicemailTranscription parameter is used to turn on transcription for voicemails left by a caller on overflow. This parameter is only applicable when OverflowAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOverflowSharedVoicemailSystemPromptSuppression
The EnableOverflowSharedVoicemailSystemPromptSuppress parameter is used to turn off the default voicemail system prompts.  This parameter is only applicable when OverflowAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutDisconnectAudioFilePrompt
The TimeoutDisconnectAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being disconnected due to timeout.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutDisconnectTextToSpeechPrompt
The TimeoutDisconnectTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being disconnected due to timeout. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectPersonAudioFilePrompt
The TimeoutRedirectPersonAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person in the organization due to timeout. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectPersonTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The TimeoutRedirectPersonTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person in the organization due to timeout. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectVoiceAppAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The TimeoutRedirectVoiceAppAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a voice application due to timeout. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectVoiceAppTextToSpeechPrompt
The TimeoutRedirectVoiceAppsTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a voice application due to timeout. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectPhoneNumberAudioFilePrompt
The TimeoutRedirectPhoneNumberAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to an external PSTN phone number due to timeout. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectPhoneNumberTextToSpeechPrompt
The TimeoutRedirectPhoneNumberTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to an external PSTN phone number due to timeout. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectVoicemailAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The TimeoutRedirectVoiceMailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person's voicemail due to timeout. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutRedirectVoicemailTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The TimeoutRedirectVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person's voicemail due to timeout. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutSharedVoicemailTextToSpeechPrompt
The TimeoutSharedVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is to be played as a greeting to the caller when transferred to shared voicemail on timeout. This parameter becomes a required parameter when TimeoutAction is SharedVoicemail and TimeoutSharedVoicemailAudioFilePrompt is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutSharedVoicemailAudioFilePrompt
The TimeoutSharedVoicemailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is to be played as a greeting to the caller when transferred to shared voicemail on timeout. This parameter becomes a required parameter when TimeoutAction is SharedVoicemail and TimeoutSharedVoicemailTextToSpeechPrompt is null.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTimeoutSharedVoicemailTranscription
The EnableTimeoutSharedVoicemailTranscription parameter is used to turn on transcription for voicemails left by a caller on timeout. This parameter is only applicable when TimeoutAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTimeoutSharedVoicemailSystemPromptSuppression
The EnableTimeoutSharedVoicemailSystemPromptSuppression parameter is used to turn off the default voicemail system prompts.  This parameter is only applicable when OverflowAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentDisconnectTextToSpeechPrompt
The NoAgentDisconnectTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being disconnected due to no agents. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentDisconnectAudioFilePrompt
The NoAgentDisconnectAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being disconnected due to no agents.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectPersonTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The NoAgentRedirectPersonTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person in the organization due to no agents. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectPersonAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The NoAgentRedirectPersonAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person in the organization due to no agents. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectVoiceAppTextToSpeechPrompt
The NoAgentRedirectVoiceAppsTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a voice application due to no agents. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectVoiceAppAudioFilePrompt
The NoAgentRedirectVoiceAppAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a voice application due to no agents. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectPhoneNumberTextToSpeechPrompt
The NoAgentRedirectPhoneNumberTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to an external PSTN phone number due to no agents. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectPhoneNumberAudioFilePrompt
The NoAgentRedirectPhoneNumberAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to an external PSTN phone number due to no agents. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectVoicemailTextToSpeechPrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The NoAgentRedirectVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to the caller when being redirected to a person's voicemail due to no agent. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentRedirectVoicemailAudioFilePrompt
_Saving a call queue configuration through Teams admin center will *remove* this setting._

The NoAgentRedirectVoiceMailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is played to the caller when being redirected to a person's voicemail due to no agent. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentSharedVoicemailTextToSpeechPrompt
The NoAgentSharedVoicemailTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is to be played as a greeting to the caller when transferred to shared voicemail on no agents. This parameter becomes a required parameter when NoAgentAction is SharedVoicemail and NoAgentSharedVoicemailAudioFilePrompt is null.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAgentSharedVoicemailAudioFilePrompt
The NoAgentSharedVoicemailAudioFilePrompt parameter indicates the unique identifier for the Audio file prompt which is to be played as a greeting to the caller when transferred to shared voicemail on no agents. This parameter becomes a required parameter when NoAgentAction is SharedVoicemail and NoAgentSharedVoicemailTextToSpeechPrompt is null.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableNoAgentSharedVoicemailTranscription
The EnableNoAgentSharedVoicemailTranscription parameter is used to turn on transcription for voicemails left by a caller on no agents. This parameter is only applicable when NoAgentAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableNoAgentSharedVoicemailSystemPromptSuppression
The EnableNoAgentSharedVoicemailSystemPromptSuppression parameter is used to turn off the default voicemail system prompts.  This parameter is only applicable when NoAgentAction is set to SharedVoicemail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChannelId
Id of the channel to connect a call queue to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChannelUserObjectId
The GUID should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). This is the GUID of one of the owners of the team that the channel belongs to.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthorizedUsers
This is a list of GUIDs for users who are authorized to make changes to this call queue. The users must also have a TeamsVoiceApplications policy assigned. The GUID should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). 

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HideAuthorizedUsers
_Saving a call queue configuration through Teams admin center will *remove* this setting._

This is a list of GUIDs of authorized users who should not appear on the list of supervisors for the agents who are members of this queue.  The GUID should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). 

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeTextToSpeechPrompt
This parameter indicates which Text-to-Speech (TTS) prompt is played when callers are connected to the Call Queue.

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

### -IsCallbackEnabled

The IsCallbackEnabled parameter is used to turn on/off callback.

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

### -CallbackRequestDtmf

The DTMF touch-tone key the caller will be told to press to select callback. The CallbackRequestDtmf must be set to one of the following values:

- Tone0 to Tone9 - Corresponds to DTMF tones from 0 to 9.
- ToneStar - Corresponds to DTMF tone *.
- TonePound - Corresponds to DTMF tone #.

This parameter becomes a required parameter when IsCallbackEnabled is set to `True`.

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

### -WaitTimeBeforeOfferingCallbackInSecond

The number of seconds a call must wait before becoming eligible for callback. This condition applies to calls at the front of the call queue. Set to null ($null) to disable this condition. 

At least one of `-WaitTimeBeforeOfferingCallbackInSecond`, `-NumberOfCallsInQueueBeforeOfferingCallback`, or `-CallToAgentRatioThresholdBeforeOfferingCallback` must be set to a value other than null when `-IsCallbackEnabled` is `True`.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfCallsInQueueBeforeOfferingCallback

The number of calls in queue before a call becomes eligible for callback. This condition applies to calls arriving at the call queue. Set to null ($null) to disable this condition. 

At least one of `-WaitTimeBeforeOfferingCallbackInSecond`, `-NumberOfCallsInQueueBeforeOfferingCallback`, or `-CallToAgentRatioThresholdBeforeOfferingCallback` must be set to a value other than null when `-IsCallbackEnabled` is `True`.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallToAgentRatioThresholdBeforeOfferingCallback

The ratio of calls to agents that must be in queue before a call becomes eligible for callback. This conditon applies to calls arriving at the call queue. Minimum value of one (1).  Set to null ($null) to disable this condition. 

At least one of `-WaitTimeBeforeOfferingCallbackInSecond`, `-NumberOfCallsInQueueBeforeOfferingCallback`, or `-CallToAgentRatioThresholdBeforeOfferingCallback` must be set to a value other than null when `-IsCallbackEnabled` is `True`.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallbackOfferAudioFilePromptResourceId

The CallbackOfferAudioFilePromptResourceId parameter indicates the unique identifier for the Audio file prompt which is played to calls that are eligible for callback. This message should tell callers which DTMF touch-tone key (CallbackRequestDtmf) to press to select callback. This parameter, or `-CallbackOfferTextToSpeechPrompt`, becomes a required parameter when IsCallbackEnabled is set to `True`.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallbackOfferTextToSpeechPrompt

The CallbackOfferTextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt which is played to calls that are eligible for callback. This message should tell callers which DTMF touch-tone key (CallbackRequestDtmf) to press to select callback. This parameter, or `-CallbackOfferAudioFilePromptResourceId`, becomes a required parameter when IsCallbackEnabled is set to `True`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallbackEmailNotificationTarget

The CallbackEmailNotificationTarget parameter must be set to a group ID (Microsoft 365, Distribution list, or Mail-enabled security) that will receive notification if a callback times out of the call queue or can't be completed for some other reason. This parameter becomes a required parameter when IsCallbackEnabled is set to `True`.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceLevelThresholdResponseTimeInSecond
_Private Preview customers only_

The target number of seconds calls should be answered in. This number is used to calculate the call queue service level percentage.

A value of `$null` indicates that a service level percentage will not be calculated for this call queue.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldOverwriteCallableChannelProperty

A Teams Channel can only be linked to one Call Queue at a time.  To force reassignment of the Teams Channel to a new Call Queue, set this to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS
