---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/import-csonlineaudiofile
applicable: Microsoft Teams
title: Import-CsOnlineAudioFile
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Import-CsOnlineAudioFile

## SYNOPSIS
Use the Import-CsOnlineAudioFile cmdlet to upload a new audio file.

## SYNTAX

```powershell
Import-CsOnlineAudioFile -ApplicationId <OrgAutoAttendant | HuntGroup | TenantGlobal> -FileName <string> -Content <byte[]>
```

## DESCRIPTION
The Import-CsOnlineAudioFile cmdlet uploads a new audio file for use with the Auto Attendant (AA), Call Queue (CQ) service or Music on Hold for Microsoft Teams.

Please note that you can't export the audio file after import, you can only remove it.

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

### -------------------------- Example 3 --------------------------
```powershell
$content = Get-Content "C:\Media\MOH.wav" -Encoding byte -ReadCount 0
$audioFile = Import-CsOnlineAudioFile -ApplicationId TenantGlobal -FileName "MOH.wav" -Content $content
```

This example creates a new audio file using the WAV content that has a filename of MOH.wav to be used as Music On Hold for Microsoft Teams. The stored variable, $audioFile, will be used with [New-CsTeamsCallHoldPolicy] (https://docs.microsoft.com/powershell/module/skype/new-csteamscallholdpolicy) to provide the audio file id. 


## PARAMETERS

### -ApplicationId
The ApplicationId parameter is the identifier for the application which will use this audio file. For example, if the audio file will be used with an organizational auto attendant, then it needs to be set to "OrgAutoAttendant". If the audio file will be used with a hunt group (call queue), then it needs to be set to "HuntGroup". If the audio file will be used with Microsoft Teams, then it needs to be set to "TenantGlobal"

Supported values:

- OrgAutoAttendant
- HuntGroup
- TenantGlobal

```yaml
Type: System.string
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
You are responsible for independently clearing and securing all necessary rights and permissions to use any music or audio file with your Microsoft Teams service, which may include intellectual property and other rights in any music, sound effects, audio, brands, names, and other content in the audio file from all relevant rights holders, which may include artists, actors, performers, musicians, songwriters, composers, record labels, music publishers, unions, guilds, rights societies, collective management organizations and any other parties who own, control or license the music copyrights, sound effects, audio and other intellectual property rights.

## RELATED LINKS
[Get-CsOnlineAudioFile](Get-CsOnlineAudioFile.md)
[Remove-CsOnlineAudioFile](Remove-CsOnlineAudioFile.md)
