---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantPrompt
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantPrompt

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantPrompt cmdlet to create a new prompt.

## SYNTAX

### AudioFile
```
New-CsOrganizationalAutoAttendantPrompt -AudioFilePrompt <Object> [-Tenant <Guid>] [<CommonParameters>]
```

### TextToSpeech
```
New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt <String> [-Tenant <Guid>] [<CommonParameters>]
```

### Dual
```
New-CsOrganizationalAutoAttendantPrompt -ActiveType <None | TextToSpeech | AudioFile> -AudioFilePrompt <Object> -TextToSpeechPrompt <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantPrompt cmdlet creates a new prompt for the Auto Attendant (AA) service. A prompt is either an audio file that is played, or text that is read aloud to give callers additional information. A prompt can be disabled by setting the ActiveType to None. 


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$ttsPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "Welcome to Contoso!"
```

This example creates a new prompt that reads the supplied text.



### -------------------------- Example 2 -------------------------- 
```
$content = Get-Content "C:\Media\Welcome.wav" -Encoding byte -ReadCount 0
$audioFile = New-CsOnlineAudioFile -FileName "hello.wav" -Content $content
$audioFilePrompt = New-CsOrganizationalAutoAttendantPrompt -AudioFilePrompt $audioFile
```

This example creates a new prompt that plays the selected audio file.

### -------------------------- Example 3 -------------------------- 
```
$content = Get-Content "C:\Media\Welcome.wav" -Encoding byte -ReadCount 0
$audioFile = New-CsOnlineAudioFile -FileName "hello.wav" -Content $content
$dualPrompt = New-CsOrganizationalAutoAttendantPrompt -ActiveType AudioFile -AudioFilePrompt $audioFile -TextToSpeechPrompt "Welcome to Contoso!"
```

This example creates a new prompt that has both audio file and text-to-speech data, but will play the audio file when the prompt is activated (rendered).


## PARAMETERS

### -ActiveType
PARAMVALUE: None | TextToSpeech | AudioFile

The ActiveType parameter identifies the active type (modality) of the OAA prompt. It can be set to None (the prompt is disabled), TextToSpeech (text-to-speech is played when the prompt is rendered) or AudioFile (audio file data is played when the prompt is rendered).

This is explicitly required if both Audio File and TTS prompts are specified. Otherwise, it is inferred.


```yaml
Type: Object
Parameter Sets: Dual
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFilePrompt
The AudioFilePrompt parameter represents the audio to play when the prompt is activated (rendered).

This parameter is required when audio file prompts are being created. You can create audio files by using the New-CsOnlineAudioFile cmdlet.


```yaml
Type: Object
Parameter Sets: AudioFile, Dual
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.Prompt


## NOTES

## RELATED LINKS

[New-CsOnlineAudioFile](New-CsOnlineAudioFile.md)

