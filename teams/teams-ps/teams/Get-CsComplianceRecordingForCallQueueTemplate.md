---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsComplianceRecordingForCallQueueTemplate
applicable: Microsoft Teams
title: Get-CsComplianceRecordingForCallQueueTemplate
schema: 2.0.0
manager: bulenteg
author: colongma
ms.author: colongma
ms.reviewer: williamlooney
---

# Get-CsComplianceRecordingForCallQueueTemplate

## SYNOPSIS
Use the Get-CsComplianceRecordingForCallQueueTemplate cmdlet to retrieve a Compliance Recording for Call Queues template.

## SYNTAX

```powershell
Get-CsComplianceRecordingForCallQueueTemplate [-Id <String>] [<CommonParameters>]
```

## DESCRIPTION
Auto Attendants (AAs) are a key element in the Office 365 Phone System.
Each AA can be associated with phone numbers that allow callers to reach specific people in the organization through a directory lookup. Alternatively, it can route the calls to an operator, a user, another AA, or a call queue.

You can create new AAs by using the New-CsAutoAttendant cmdlet; each newly created AA gets assigned a random string that serves as the identity of the AA.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsComplianceRecordingForCallQueueTemplate
```

This example gets all Call Queues in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsComplianceRecordingForCallQueueTemplate -Id 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example gets the Compliance Recording for Call Queue template with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no Compliance Recording for Call Queue template exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Id
The Id parameter is the unique identifier assigned to the Compliance Recording for Call Queue template.

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

New-CsComplianceRecordingForCallQueueTemplate

Set-CsComplianceRecordingForCallQueueTemplate

Remove-CsComplianceRecordingForCallQueueTemplate

Get-CsCallqueue

New-CsCallQueue

Set-CsCallQueue

Remove-CsCallQuuee

