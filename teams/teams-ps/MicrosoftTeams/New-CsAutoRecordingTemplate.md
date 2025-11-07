---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/New-CsAutoRecordingTemplate
schema: 2.0.0
title: New-CsAutoRecordingTemplate
---

# New-CsAutoRecordingTemplate

## SYNOPSIS
Use the New-CsAutoRecordingTemplate cmdlet to create an Auto Recording template that can be assigned to a call queue.

## SYNTAX

```
New-CsAutoRecordingTemplate -Name <String> -Description <String> -SharePointHostName <String> -SharePointSiteName <String> [-TranscriptionEnabled <Boolean>] [-RecordingEnabled <Boolean>] [-AgentViewPermission <Object>]  [-RecordingDocumentOwner <String>] [-AutoRecordingAnnouncementAudioFileId <String>] [-AutoRecordingAnnouncementAudioFileName <String>] [-AutoRecordingAnnouncementTextToSpeechPrompt <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the New-CsAutoRecordingTemplate cmdlet to create an Auto Recording tempalte that can be assigned to a call queue.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
New-CsAutoRecordingTemplate -Name "Customer Service" -Description "Transcription & Recording enabled" -TranscriptionEnabled $true -RecordingEnabled $true -AgentViewPermission XXXXX -SharePointHostName YYYYYY -SharePointSiteName ZZZZZ -RecordingDocumentOwner GUID -AutoRecordingAnnouncementTextToSpeechPrompt "This call will be reocorded for quality and training purposes."
```

This example creates a new Auto Recording template that enabled transcription and recording.

## PARAMETERS

### -Name

The name of the auto recording template

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Off
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

A description for the auto recording template.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranscriptionEnabled

Is transcription enabled.

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

### -RecordingEnabled

Is recording enabled.

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

### -AgentViewPermission

Are agents allowed to access the recordings or transcriptions.

PARAMVALUE: None | All 

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

### -SharePointHostName

The SharePoint hostname where the recordings and transcripts are stored.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

>[!CAUTION]
>This must already exist. The cmdlet will not create the SharePoint hostname.

### -SharePointSiteName

The SharePoint sitename where the recordings and transcripts are stored.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

>[!CAUTION]
>This must already exist. The cmdlet will not create the SharePoint site.

### -RecordingDocumentOwner

The owner of the recording document

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoRecordingAnnouncementAudioFileId

The audio file Id for the custom recording.

See [Import-CsOnlineAudioFile](./Import-CsOnlineAudioFile.md)

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoRecordingAnnouncementAudioFileName

TBD if this is necessary.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoRecordingAnnouncementTextToSpeechPrompt

The text to speach prompt that will be played to callers telling them their call is being recorded.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

>[!CAUTION]
>This text needs to be entered in the same language that is set for the call queue.

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[Get-CsAutoRecordingTemplate](./Get-CsAutoRecordingTemplate.md)

[Set-CsAutoRecordingTemplate](./Set-CsAutoRecordingTemplate.md)

[Remove-CsAutoRecordingTemplate](./Remove-CsAutoRecordingTemplate.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)



