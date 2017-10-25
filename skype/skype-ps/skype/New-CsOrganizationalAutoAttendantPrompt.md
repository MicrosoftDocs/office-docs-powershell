---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantPrompt
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantPrompt

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantPrompt cmdlet to create a new prompt.

## SYNTAX

```
New-CsOrganizationalAutoAttendantPrompt [-ActiveType <Object>] [-AudioFilePrompt <Object>]
 [-TextToSpeechPrompt <Object>] [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantPrompt cmdlet creates a new prompt for the Organizational Auto Attendant (OAA) service. A prompt is either an audio file that is played, or text that is read aloud to give callers additional information. A prompt can be disabled by setting the ActiveType to None. 


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
$dualPrompt = New-CsOrganizationalAutoAttendantPrompt -ActiveType -AudioFile AudioFilePrompt $audioFile -TextToSpeechPrompt "Welcome to Contoso!"
```

This example creates a new prompt that has both audio file and text-to-speech data, but will play the audio file when the prompt is activated (rendered).


## PARAMETERS

### -ActiveType
PARAMVALUE: None | TextToSpeech | AudioFile

The ActiveType parameter identifies the active type (modality) of the OAA prompt.

This is explicitly required if both Audio File and TTS prompts are specified. Otherwise, it is inferred.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFilePrompt
PARAMVALUE: AudioFile

The AudioFilePrompt parameter represents the audio to play when the prompt is activated (rendered).

This parameter is required when audio file prompts are being created. You can create audio files by using the New-CsOnlineAudioFile cmdlet


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TextToSpeechPrompt
PARAMVALUE: String

The TextToSpeechPrompt parameter indicates the Text-to-Speech (TTS) prompt that is to be read when the prompt is activated. 

This parameter is required when text to speech prompts are being created.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
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