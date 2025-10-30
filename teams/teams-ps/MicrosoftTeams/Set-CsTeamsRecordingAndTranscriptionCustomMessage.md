---
author: lingbodu
Locale: en-US
Module Name: MicrosoftTeams
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-CsTeamsRecordingAndTranscriptionCustomMessage
schema: 2.0.0
title: Set-CsTeamsRecordingAndTranscriptionCustomMessage
---
# Set-CsTeamsRecordingAndTranscriptionCustomMessage

## SYNOPSIS
Modifies an existing TeamsRecordingAndTranscriptionCustomMessage settings in your tenant, It will affect the RecordingAndTranscriptionCustomMessageIdentifier policy that has already been applied, thereby modifying the prompt messages seen by users and user groups assigned to this policy after recording or transcription is started.

## SYNTAX

```
Set-CsTeamsRecordingAndTranscriptionCustomMessage
 [-Id <System.Guid>]
 [-Description <String>]
 [-RecordingAndTranscriptionLocalizationCustomMessage <RecordingAndTranscriptionLocalizationCustomMessage>]
 [<CommonParameters>]
```

This command modifies the custom recording and transcription prompt messages created using the New-CsTeamsRecordingAndTranscriptionCustomMessage command. Please refer directly to the documentation for New-CsTeamsRecordingAndTranscriptionCustomMessage to learn how to use this command.

The only difference is that when using the Set command, you must specify the Id to indicate which specific TeamsRecordingAndTranscriptionCustomMessage setting you want to modify.

## RELATED LINKS
[New-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage)

[Remove-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/remove-CsTeamsRecordingAndTranscriptionCustomMessage)

[Get-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsRecordingAndTranscriptionCustomMessage)

[New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage)
