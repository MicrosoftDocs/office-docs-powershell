---
author: dlb233
Locale: en-US
Module Name: MicrosoftTeams
ms.author: lingbodu
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage
schema: 2.0.0
title: New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage
---

# New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage

## SYNOPSIS

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

Create a set of language-specific prompt messages to be displayed to participants after recording or transcription has started. 

## SYNTAX

```
New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage
 [-Language <String>]
 [-InitiatorImplicit <String>]
 [-ParticipantImplicit <String>]
 [-InitiatorExplicit <String>]
 [-ParticipantExplicitRequested <String>]
 [-ParticipantExplicitProvided <String>]
 [-AgreementDialogue <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The strings defined by this command is used for display after recording or transcription is started in a meeting. Based on the different scenarios when recording or transcription is enabled, we provide different keys for customization, as detailed below.
These strings will not take effect immediately after being created; they need to be associated with other configurations and policies. Followings are the keys we support.
### InitiatorImplicit
User is recording or transcription initiator, recording or transcription consent policy is off for the organizer.
### ParticipantImplicit
Others in meeting or calling turns on the recording or transcription, recording or transcription consent policy is off for the organizer.
### InitiatorExplicit
User is recording or transcription initiator, recording or transcription consent policy is on for the organizer.
### ParticipantExplicitRequested
Others in meeting or calling turns on the recording or transcription, recording or transcription consent policy is on for the organizer. Current consent state is required the attendee to give the consent to recording and transcription.
### ParticipantExplicitProvided
Others in meeting or calling turns on the recording or transcription, recording or transcription consent policy is on for the organizer. Current consent state is attendee has given the consent to recording and transcription.
### AgreementDialogue
Others in meeting or calling turns on the recording or transcription, recording or transcription consent policy is on for the organizer. User clicks the mute, share screen or turn on camera, then a confirm dialog will show to the user.

In most cases, we directly use the custom string to overwrite the original string content. For example, under normal circumstances, when the meeting organizer starts recording, the prompt shown to regular participants is "Started by XXX. By attending this meeting, you agree to being included." If you set the ParticipantImplicit string to "This meeting will be recorded." and successfully apply it to the organizer, then regular participants will see: "Started by XXX. This meeting will be recorded."

However, ParticipantExplicitRequested and agreementDialogue are handled differently. Their original content contains instructional information, so we retain the original content and append the custom content after it.

Note that this cmdlet is only used in conjunction with New-CsTeamsRecordingAndTranscriptionCustomMessage and Set-CsTeamsRecordingAndTranscriptionCustomMessage to create associations between messages in multiple languages. 
Please refer to the documentation of CsTeamsRecordingAndTranscriptionCustomMessage cmdlets for examples and further information.

## EXAMPLES

### Example 1
```
PS C:\> New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage -Language "en-US" -InitiatorImplicit "This call is being recorded." -ParticipantImplicit "This call is being recorded."
```
The command shown in Example 1 created a new set of custom message in en-US, it defined 2 scenarios, InitiatorImplicit and ParticipantImplicit.

### Example 2
```
PS C:\> New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage -Language "en-US" -initiatorExplicit "<empty>" -ParticipantExplicitProvided "<empty>" 
```
 ```<empty>``` is a keyword for clean the default message. The command shown in Example 2 will create a void message to override the default message of initiatorExplicit and ParticipantExplicitProvided scenarios.


## PARAMETERS

### -Language
Define language of the message set. In a meeting, if the organizer has applied a custom message, all participants will use the organizer's policy.

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

### -InitiatorImplicit
Custom message when user is recording or transcription initiator, and recording or transcription consent policy is off for the organizer.

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

### -ParticipantImplicit
Custom message when others in meeting turn on recording or transcription, and consent policy is off for the organizer.

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

### -InitiatorExplicit
Custom message when user is recording or transcription initiator, and consent policy is on for the organizer.

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

### -ParticipantExplicitRequested
Custom message when others turn on recording/transcription, consent policy is on, and consent is required.

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

### -ParticipantExplicitProvided
Custom message when others turn on recording/transcription, consent policy is on, and consent has been given.

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

### -AgreementDialogue
Custom message for the agreement dialog when user interacts (mute, share screen, turn on camera) during recording.

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

## RELATED LINKS
[New-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage)

[Set-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/set-CsTeamsRecordingAndTranscriptionCustomMessage)

[Get-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/get-CsTeamsRecordingAndTranscriptionCustomMessage)

[Remove-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/remove-CsTeamsRecordingAndTranscriptionCustomMessage)
