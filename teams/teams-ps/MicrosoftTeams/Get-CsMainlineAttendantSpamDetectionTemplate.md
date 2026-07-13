---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantspamdetectiontemplate
schema: 2.0.0
title: Get-CsMainlineAttendantSpamDetectionTemplate
---

# Get-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS

The Get-CsMainlineAttendantSpamDetectionTemplate cmdlet returns a list of spam detection templates that have been configured in the tenant.

## SYNTAX

```
Get-CsMainlineAttendantSpamDetectionTemplate [-Id <string>]
```

## DESCRIPTION

The Get-CsMainlineAttendantSpamDetectionTemplate cmdlet returns a list of spam detection templates that have been configured in the tenant.

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMainlineAttendantSpamDetectionTemplate 
```

This example will return a list of all the spam detection templates configured in the tenant.

### -------------------------- Example 2 --------------------------
```
Get-CsMainlineAttendantSpamDetectionTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842d
```

This example retrieves the Spam Detection Template with the Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842d

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

