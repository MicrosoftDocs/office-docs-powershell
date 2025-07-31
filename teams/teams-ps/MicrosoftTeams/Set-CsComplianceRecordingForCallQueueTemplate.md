---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsComplianceRecordingForCallQueueTemplate
schema: 2.0.0
title: Set-CsComplianceRecordingForCallQueueTemplate
---

# Set-CsComplianceRecordingForCallQueueTemplate

## SYNOPSIS
Use the Set-CsComplianceRecordingForCallQueueTemplate cmdlet to make changes to an existing Compliance Recording for Call Queues template.

## SYNTAX

```powershell
Set-CsComplianceRecordingForCallQueueTemplate -Instance <Object> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsComplianceRecordingForCallQueueTemplate cmdlet to make changes to an existing Compliance Recording for Call Queues template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### Example 1
```
$template = CsComplianceRecordingForCallQueueTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
$template.BotId = 14732826-8206-42e3-b51e-6693e2abb698
Set-CsComplianceRecordingForCallQueueTemplate $template
```

The Set-CsComplianceRecordingForCallQueueTemplate cmdlet lets you modify the properties of a Compliance Recording for Call Queue Template.

## PARAMETERS

### -Instance
The Instance parameter is the unique identifier assigned to the Compliance Recording for Call Queue template.

```yaml
Type: System.String
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

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsComplianceRecordingForCallQueueTemplate](./New-CsComplianceRecordingForCallQueueTemplate.md)

[Set-CsComplianceRecordingForCallQueueTemplate](./Set-CsComplianceRecordingForCallQueueTemplate.md)

[Remove-CsComplianceRecordingForCallQueueTemplate](./Remove-CscomplianceRecordingForCallQueueTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQuuee](./Remove-CsCallQueue.md)

