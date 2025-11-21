---
author: dlb233
Locale: en-US
Module Name: MicrosoftTeams
ms.author: lingbodu
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-CsTeamsRecordingAndTranscriptionCustomMessage
schema: 2.0.0
title: Get-CsTeamsRecordingAndTranscriptionCustomMessage
---

# Get-CsTeamsRecordingAndTranscriptionCustomMessage

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

## SYNOPSIS
Return information about the instance of TeamsRecordingAndTranscriptionCustomMessage that have been configured for recording and transcription customized message.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsRecordingAndTranscriptionCustomMessage [-Id <Guid>]
```

## DESCRIPTION

The strings defined in TeamsRecordingAndTranscriptionCustomMessage is used for display after recording or transcription is started in a meeting. 
Based on the different scenarios when recording or transcription is enabled, we provide different keys for customization, as detailed below. 
These strings will not take effect immediately after being created; they need to be associated with other configurations and policies.

This command will return existing TeamsRecordingAndTranscriptionCustomMessage by your input condition that have been configured before with New-CsTeamsRecordingAndTranscriptionCustomMessage.

## EXAMPLES

### Example 1
```
PS C:\> Get-CsTeamsRecordingAndTranscriptionCustomMessage
```
The command shown in Example 1 returns information for all the instances of TeamsRecordingAndTranscriptionCustomMessage that have been created.

### Example 2
```
PS C:\> Get-CsTeamsRecordingAndTranscriptionCustomMessage -Id '39dc3ede-c80e-4f19-9153-417a65a1f144'
```
In Example 2, information is returned for a single instance of a TeamsRecordingAndTranscriptionCustomMessage with the Id 39dc3ede-c80e-4f19-9153-417a65a1f144.

## RELATED LINKS

[New-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage)

[Set-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/set-CsTeamsRecordingAndTranscriptionCustomMessage)

[Remove-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/remove-CsTeamsRecordingAndTranscriptionCustomMessage)

[New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage)
