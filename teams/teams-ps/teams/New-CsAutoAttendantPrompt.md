---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csautoattendantprompt
applicable: Microsoft Teams
title: New-CsAutoAttendantPrompt
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsAutoAttendantPrompt

## SYNOPSIS
Use the New-CsAutoAttendantPrompt cmdlet to create a new prompt.

## SYNTAX

### AudioFile
```powershell
New-CsAutoAttendantPrompt -AudioFilePrompt <Object> [-Tenant <Guid>] [<CommonParameters>]
```

### TextToSpeech
```powershell
New-CsAutoAttendantPrompt -TextToSpeechPrompt <String> [-Tenant <Guid>] [<CommonParameters>]
```

### Dual
```powershell
New-CsAutoAttendantPrompt -ActiveType <None | TextToSpeech | AudioFile> -AudioFilePrompt <Object> -TextToSpeechPrompt <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantPrompt cmdlet creates a new prompt for the Auto Attendant (AA) service. A prompt is either an audio file that is played, or text that is read aloud to give callers additional information. A prompt can be disabled by setting the ActiveType to None.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$ttsPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
```

This example creates a new prompt that reads the supplied text.

### -------------------------- Example 2 --------------------------
```powershell
$content = [System.IO.File]::ReadAllBytes('C:\Media\hello.wav')
$audioFile = Import-CsOnlineAudioFile -ApplicationId "OrgAutoAttendant" -FileName "hello.wav" -Content $content
$audioFilePrompt = New-CsAutoAttendantPrompt -AudioFilePrompt $audioFile
```

This example creates a new prompt that plays the selected audio file.

### -------------------------- Example 3 --------------------------
```powershell
$content = [System.IO.File]::ReadAllBytes('C:\Media\hello.wav')
$audioFile = Import-CsOnlineAudioFile -ApplicationId "OrgAutoAttendant" -FileName "hello.wav" -Content $content
$dualPrompt = New-CsAutoAttendantPrompt -ActiveType AudioFile -AudioFilePrompt $audioFile -TextToSpeechPrompt "Welcome to Contoso!"
```

This example creates a new prompt that has both audio file and text-to-speech data, but will play the audio file when the prompt is activated (rendered).

## PARAMETERS

### -ActiveType
PARAMVALUE: None | TextToSpeech | AudioFile

The ActiveType parameter identifies the active type (modality) of the AA prompt. It can be set to None (the prompt is disabled), TextToSpeech (text-to-speech is played when the prompt is rendered) or AudioFile (audio file data is played when the prompt is rendered).

This is explicitly required if both Audio File and TTS prompts are specified. Otherwise, it is inferred.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFilePrompt
The AudioFilePrompt parameter represents the audio to play when the prompt is activated (rendered).

This parameter is required when audio file prompts are being created. You can create audio files by using the `Import-CsOnlineAudioFile` cmdlet.

```yaml
Type: Object
Parameter Sets: AudioFile, Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TextToSpeechPrompt
The TextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt that is to be read when the prompt is activated.

This parameter is required when text to speech prompts are being created.

```yaml
Type: System.String
Parameter Sets: TextToSpeech, Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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

### Microsoft.Rtc.Management.Hosted.OAA.Models.Prompt

## NOTES

## RELATED LINKS

[Import-CsOnlineAudioFile](https://learn.microsoft.com/powershell/module/teams/import-csonlineaudiofile)
