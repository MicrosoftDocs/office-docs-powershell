---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsComplianceRecordingForCallQueueTemplate
applicable: Microsoft Teams
title: Set-CsComplianceRecordingForCallQueueTemplate
schema: 2.0.0
manager: 
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsComplianceRecordingForCallQueueTemplate

## SYNTAX

```powershell
Set-CsComplianceRecordingForCallQueueTemplate -Instance <Object> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsComplianceRecordingForCallQueueTemplate cmdlet to make changes to an existing Compliance Recording for Call Queues template.

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for this feature. General Availability for this functionality has not been determined at this time.

## EXAMPLES

### -------------------------- Example 1 --------------------------
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

[New-CsComplianceRecordingForCallQueueTemplate](new-cscompliancerecordingforcallqueuetemplate.md)

[Set-CsComplianceRecordingForCallQueueTemplate](set-cscompliancerecordingforcallqueuetemplate.md)

[Remove-CsComplianceRecordingForCallQueueTemplate](remove-cscompliancerecordingforcallqueuetemplate.md)

[Get-CsCallQueue](get-cscallqueue.md)

[New-CsCallQueue](new-cscallqueue.md)

[Set-CsCallQueue](set-cscallqueue)

[Remove-CsCallQuuee](remove-cscallqueue)

