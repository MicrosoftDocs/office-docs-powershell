---
author: lingbodu
Locale: en-US
Module Name: MicrosoftTeams
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage
schema: 2.0.0
title: New-CsTeamsRecordingAndTranscriptionCustomMessage
---

# New-CsTeamsRecordingAndTranscriptionCustomMessage

## SYNOPSIS

Create a concrete prompt message setting in multiple languages and multiple scenarios to be displayed to participants after recording or transcription has started.
## SYNTAX

```
New-CsTeamsRecordingAndTranscriptionCustomMessage
 [-Id <System.Guid>]
 [-Description <String>]
 [-RecordingAndTranscriptionLocalizationCustomMessage <RecordingAndTranscriptionLocalizationCustomMessage>]
 [<CommonParameters>]
```

## DESCRIPTION
The strings defined by this command is used for display after recording or transcription is started in a meeting. 
Based on the different scenarios when recording or transcription is enabled, we provide different keys for customization, as detailed below. 
These strings will not take effect immediately after being created; they need to be associated with other configurations and policies.

This command will define a complete custom message override policy that can be directly assigned to users. 
It specifies the UFD prompt content that users with different roles will see in six different scenarios when starting recording and transcription, across various language environments.
After this configuration is successfully completed, you can assign the generated Id to the user’s RecordingAndTranscriptionCustomMessageIdentifier field to apply the policy to that user. Afterwards, in meetings hosted by this user, once the language and scenario match, participants will see the new UFD message customized by this command.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsRecordingAndTranscriptionCustomMessage -Id '39dc3ede-c80e-4f19-9153-417a65a1f144'
```

The command shown in Example 1 creates an in-memory instance of a CsTeamsRecordingAndTranscriptionCustomMessage with no content. It can be set to RecordingAndTranscriptionCustomMessageIdentifier but nothing will change.

### Example 2
```
$en = New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage -Language "en-US" -InitiatorImplicit "This call is being recorded." -ParticipantImplicit "This call is being recorded."
>> $zh = New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage -Language "zh-CN" -InitiatorExplicit "请注意，此通话正在录音。" -ParticipantExplicitRequested "此通话正在录音，我们将在得到您同意后再录制你的声音。"
>> New-CsTeamsRecordingAndTranscriptionCustomMessage -Description "Multi languages record custom message" -RecordingAndTranscriptionLocalizationCustomMessage @($en, $zh)
```
Example 2 demonstrates a complete case, defining the recording and transcription prompt messages that users see in English and Chinese under different scenarios.
If such policy applied to the meeting organizer, then:
- Current user is recording/transcription intiator, Teams language is English US", the meeting organizer doesn't enable consent recording/transcription, when current user start recording or transcript, he/she will see "This call is being recorded.".
- Current user is normal participant, Teams language is English US, the meeting organizer doesn't enable consent recording/transcription, when recording or transcript started, current user will see "This call is being recorded."
- Current user is recording/transcription intiator, Teams language is Chinese simplify, the meeting organizer enable the consent recording/transcription, when current user start recording or transcript,  he/she will see "请注意，此通话正在录音。"
- Current user is normal participant, Teams language is Chinese simplify, the meeting organizer enable the consent recording/transcription，after someone started recording or transcription, he will see "此通话正在录音，我们将在得到您同意后再录制你的声音。"

## Parameters
### -Id
The ObjectId of the CsTeamsRecordingAndTranscriptionCustomMessage setting, By assigning the ID to the **RecordingAndTranscriptionCustomMessageIdentifier** field in the meeting policy or calling policy, you can associate the current custom prompt message configuration with a user group or individual users.

At the same time, when creating CsTeamsRecordingAndTranscriptionCustomMessage, it is not necessary to explicitly specify the ID; a GUID will be automatically generated and stored as the Id.

### -DESCRIPTION
Add a description for CsTeamsRecordingAndTranscriptionCustomMessage.

### RecordingAndTranscriptionLocalizationCustomMessage
Set the specific recording and transcription prompt messages to be customized. The type is a list of TeamsRecordingAndTranscriptionLocalizationCustomMessage, with each element in the list representing a custom message for a particular language. For more information, please refer to New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage.
```yaml
Type: TeamsRecordingAndTranscriptionLocalizationCustomMessage[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
