---
external help file: New-CsOnlineAudioFile.xml
title: New-CsOnlineAudioFile
schema: 2.0.0
---

# New-CsOnlineAudioFile

## SYNOPSIS
Use the New-CsOnlineAudioFile cmdlet to create a new audio file.

## SYNTAX

```
New-CsOnlineAudioFile -FileName <String> -Content <Byte[]> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineAudioFile cmdlet creates a new audio file for use with the Organizational Auto Attendant (OAA) service.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$content = Get-Content "C:\Media\Welcome.wav" -Encoding byte -ReadCount 0
$audioFile = New-CsOnlineAudioFile -FileName "Hello.wav" -Content $content
```

This example creates a new audio file using the WAV content that has a filename of Hello.wav.

## PARAMETERS

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

### Microsoft.Rtc.Management.Hosted.Online.Models.AudioFile

## NOTES

## RELATED LINKS


