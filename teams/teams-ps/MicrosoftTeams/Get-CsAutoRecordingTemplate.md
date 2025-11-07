---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsAutoRecordingTemplate
schema: 2.0.0
title: Get-CsAutoRecordingTemplate
---

# Get-CsAutoRecordingTemplate

## SYNOPSIS
Use the Get-CsAutoRecordingTemplate cmdlet to list the Auto Recording templates.

## SYNTAX

```
Get-CsAutoRecordingTemplate [-Id <string>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsAutoRecordingTemplate cmdlet to list the Auto Recording templates.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
Get-CsAutoRecordingTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842c
```

This example retrieves the Auto Recording template with the Id `3a4b3d9b-91d8-4fbf-bcff-6907f325842c`

### Example 2
```
Get-CsAutoRecordingTemplate
```

This example retrieves all the Auto Recording templates.

## PARAMETERS

### -Id

The Id of the auto recording template.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: false
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

[Set-CsAutoRecordingTemplate](./Set-CsAutoRecordingTemplate.md)

[Remove-CsAutoRecordingTemplate](./Remove-CsAutoRecordingTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)
