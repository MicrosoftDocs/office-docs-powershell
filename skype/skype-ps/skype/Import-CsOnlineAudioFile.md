---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile
applicable: Skype for Business Online
title: Import-CsOnlineAudioFile
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Import-CsOnlineAudioFile

## SYNOPSIS
Use the Import-CsOnlineAudioFile cmdlet to upload a new audio file.

## SYNTAX

```powershell
Import-CsOnlineAudioFile -ApplicationId <OrgAutoAttendant | HuntGroup> -FileName <string> -Content <byte[]>
```

## DESCRIPTION
The Import-CsOnlineAudioFile cmdlet uploads a new audio file for use with the Auto Attendant (AA) or Call Queue (CQ) service.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$content = Get-Content "C:\Media\Welcome.wav" -Encoding byte -ReadCount 0
$audioFile = Import-CsOnlineAudioFile -ApplicationId "OrgAutoAttendant" -FileName "Hello.wav" -Content $content
```

This example creates a new audio file using the WAV content that has a filename of Hello.wav to be used with organizational auto attendants. The stored variable, $audioFile, will be used when running other cmdlets to update the audio file for Auto Attendant, for example: [New-CsAutoAttendantPrompt] (https://docs.microsoft.com/powershell/module/skype/new-csautoattendantprompt)

### -------------------------- Example 2 --------------------------
```powershell
$content = Get-Content "C:\Media\MOH.wav" -Encoding byte -ReadCount 0
$audioFile = Import-CsOnlineAudioFile -ApplicationId "HuntGroup" -FileName "MOH.wav" -Content $content
```

This example creates a new audio file using the WAV content that has a filename of MOH.wav to be used as a Music On Hold file with a Call Queue. The stored variable, $audioFile, will be used with [Set-CsCallQueue] (https://docs.microsoft.com/powershell/module/skype/set-cscallqueue) to provide the audio file id. 


## PARAMETERS

### -ApplicationId
The ApplicationId parameter is the identifier for the application which will use this audio file. For example, if the audio file will be used with an organizational auto attendant, then it needs to be set to "OrgAutoAttendant". If the audio file will be used with a hunt group (call queue), then it needs to be set to "HuntGroup".

Supported values:

- OrgAutoAttendant
- HuntGroup

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
The FileName parameter is the name of the audio file. For example, the file name for the file C:\Media\Welcome.wav is Welcome.wav.

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Content
The Content parameter represents the content of the audio file. Supported formats are WAV (uncompressed, linear PCM with 8/16/32-bit depth in mono or stereo), WMA (mono only), and MP3. The audio file content cannot be more 5MB.

```yaml
Type: System.Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.AudioFile

## NOTES

## RELATED LINKS
