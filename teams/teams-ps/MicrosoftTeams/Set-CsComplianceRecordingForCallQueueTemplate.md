---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cscompliancerecordingforcallqueuetemplate
schema: 2.0.0
title: Set-CsComplianceRecordingForCallQueueTemplate
---

# Set-CsComplianceRecordingForCallQueueTemplate

## SYNOPSIS
Modifies an existing Compliance Recording for Call Queues template.

## SYNTAX

```powershell
Set-CsComplianceRecordingForCallQueueTemplate -Instance <Object> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsComplianceRecordingForCallQueueTemplate cmdlet to make changes to an existing Compliance Recording for Call Queues template.

## EXAMPLES

### Example 1
```
$template = Get-CsComplianceRecordingForCallQueueTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
$template.BotId = "14732826-8206-42e3-b51e-6693e2abb698"
Set-CsComplianceRecordingForCallQueueTemplate -Instance $template
```

The Set-CsComplianceRecordingForCallQueueTemplate cmdlet lets you modify the properties of a Compliance Recording for Call Queue Template.

## PARAMETERS

### -Instance

The Instance parameter is the object reference to the Compliance Recording for Call Queue template to be modified.

You can retrieve an object reference to an existing template by using the Get-CsComplianceRecordingForCallQueueTemplate cmdlet and assigning the returned value to a variable.

```yaml
Type: Object
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

[New-CsComplianceRecordingForCallQueueTemplate](./New-CsComplianceRecordingForCallQueueTemplate.md)

[Get-CsComplianceRecordingForCallQueueTemplate](./Get-CsComplianceRecordingForCallQueueTemplate.md)

[Remove-CsComplianceRecordingForCallQueueTemplate](./Remove-CsComplianceRecordingForCallQueueTemplate.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)

