---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Set-CsAutoRecordingTemplate
schema: 2.0.0
title: Set-CsAutoRecordingTemplate
---

# Set-CsAutoRecordingTemplate

## SYNOPSIS
Use the Set-CsAutoRecordingTemplate cmdlet to change an Auto Recording template

## SYNTAX

```
Set-CsAutoRecordingTemplate -Instance <instance> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsAutoRecordingTemplate cmdlet to change an Auto Recording template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
$AutoRecording = Get-CsAutoRecordingTemplate -Id 66f0dc32-d344-4bb1-b524-027d4635515c
$AutoRecording.EnableTranscript = $true
Set-CsAutoRecordingTemplate -Instance $AutoRecording
```

This example sets the EnableTranscript value in the Auto Recording Template with the Id `66f0dc32-d344-4bb1-b524-027d4635515c`

## PARAMETERS

### -Instance

The instance of the auto recording template to change.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsAutoRecordingTemplate](./New-CsAutoRecordingTemplate.md)

[Get-CsAutoRecordingTemplate](./Get-CsAutoRecordingTemplate.md)

[Remove-CsAutoRecordingTemplate](./Remove-CsAutoRecordingTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)



