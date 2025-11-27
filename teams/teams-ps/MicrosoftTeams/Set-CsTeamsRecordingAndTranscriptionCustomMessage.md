---
author: dlb233
Locale: en-US
Module Name: MicrosoftTeams
ms.author: lingbodu
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-CsTeamsRecordingAndTranscriptionCustomMessage
schema: 2.0.0
title: Set-CsTeamsRecordingAndTranscriptionCustomMessage
---

# Set-CsTeamsRecordingAndTranscriptionCustomMessage

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

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

## DESCRIPTION

This command modifies the custom recording and transcription prompt messages created using the New-CsTeamsRecordingAndTranscriptionCustomMessage command. Please refer directly to the documentation for New-CsTeamsRecordingAndTranscriptionCustomMessage to learn how to use this command.
The only difference is that when using the Set command, you must specify the Id to indicate which specific TeamsRecordingAndTranscriptionCustomMessage setting you want to modify.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsRecordingAndTranscriptionCustomMessage -Id "39dc3ede-c80e-4f19-9153-417a65a1f144" -Description "Updated recording message policy"
```

The command shown in Example 1 updates the description of an existing TeamsRecordingAndTranscriptionCustomMessage with the specified Id.

## Parameters

### -Id

The ObjectId of the CsTeamsRecordingAndTranscriptionCustomMessage setting, By assigning the ID to the **RecordingAndTranscriptionCustomMessageIdentifier** field in the meeting policy or calling policy, you can associate the current custom prompt message configuration with a user group or individual users.

At the same time, when creating CsTeamsRecordingAndTranscriptionCustomMessage, it is not necessary to explicitly specify the ID; a GUID will be automatically generated and stored as the Id.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DESCRIPTION

Add a description for CsTeamsRecordingAndTranscriptionCustomMessage.

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

### -RecordingAndTranscriptionLocalizationCustomMessage

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

## RELATED LINKS

[New-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionCustomMessage)

[Remove-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/remove-CsTeamsRecordingAndTranscriptionCustomMessage)

[Get-CsTeamsRecordingAndTranscriptionCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/get-CsTeamsRecordingAndTranscriptionCustomMessage)

[New-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage](https://learn.microsoft.com/powershell/module/microsoftteams/new-CsTeamsRecordingAndTranscriptionLocalizationCustomMessage)
