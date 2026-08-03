---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: colongma
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantsupportedvoices
schema: 2.0.0
title: Get-CsMainlineAttendantSupportedVoices
---

# Get-CsMainlineAttendantSupportedVoices

## SYNOPSIS

The Get-CsMainlineAttendantSupportedVoices cmdlet returns a list of voices that are supported for use with Mainline Attendant.

## SYNTAX

```
Get-CsMainlineAttendantSupportedVoices
```

## DESCRIPTION

The Get-CsMainlineAttendantSupportedVoices cmdlet returns a list of voices that are supported for use with Mainline Attendant.

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### Example 1
```
Get-CsMainlineAttendantSupportedVoices
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

[Get-CsMainlineAttendantSupportedLanguages](https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantsupportedlanguages)

[Get-CsMainlineAttendantTenantInformation](https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendanttenantinformation)
