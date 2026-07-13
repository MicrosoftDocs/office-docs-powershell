---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Remove-CsMainlineAttendantSpamDetectionTemplate
schema: 2.0.0
title: Remove-CsMainlineAttendantSpamDetectionTemplate
---

# Remove-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS

The Remove-CsMainlineAttendantSpamDetectionTemplate cmdlet deletes an existing spam detection templates. The template must not be assigned to a Teams Phone Agent (Mainline Attendant).

## SYNTAX

```
Remove-CsMainlineAttendantSpamDetectionTemplate -Id <string>
```

## DESCRIPTION

The Remove-CsMainlineAttendantSpamDetectionTemplate cmdlet deletes an existing spam detection templates. The template must not be assigned to a Teams Phone Agent (Mainline Attendant).

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsMainlineAttendantSpamDetectionTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842d
```

This example deletes the Spam Detection Template with the Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842d

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

