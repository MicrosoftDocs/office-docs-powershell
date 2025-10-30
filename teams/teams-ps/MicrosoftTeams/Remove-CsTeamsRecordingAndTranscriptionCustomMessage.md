---
author: lingbodu
Locale: en-US
Module Name: MicrosoftTeams
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Remove-CsTeamsRecordingAndTranscriptionCustomMessage
schema: 2.0.0
title: Remove-CsTeamsRecordingAndTranscriptionCustomMessage
---

# Remove-CsTeamsRecordingAndTranscriptionCustomMessage
> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

## SYNOPSIS

Remove information about the instance of TeamsRecordingAndTranscriptionCustomMessage that have been configured for recording and transcription customized message.
## SYNTAX

```
Remove-CsTeamsRecordingAndTranscriptionCustomMessage -Id <System.Guid>
```

## DESCRIPTION
The strings defined in TeamsRecordingAndTranscriptionCustomMessage is used for display after recording or transcription is started in a meeting. 
Based on the different scenarios when recording or transcription is enabled, we provide different keys for customization, as detailed below. 
These strings will not take effect immediately after being created; they need to be associated with other configurations and policies.

This command will remove an existing TeamsRecordingAndTranscriptionCustomMessage that have been configured before with New-CsTeamsRecordingAndTranscriptionCustomMessage. You must provide an Id to identify the configuration that you want to remove.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsRecordingAndTranscriptionCustomMessage -Id '39dc3ede-c80e-4f19-9153-417a65a1f144'
```
The command shown in Example 1 remove information for the instances of TeamsRecordingAndTranscriptionCustomMessage with the Id 39dc3ede-c80e-4f19-9153-417a65a1f144.

## RELATED LINKS
[New-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage)

[Set-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/set-CsTeamsRecordingAndTranscriptionCustomMessage)

[Get-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsRecordingAndTranscriptionCustomMessage)

[New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage)
