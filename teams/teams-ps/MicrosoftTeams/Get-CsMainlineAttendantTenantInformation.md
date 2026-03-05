---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineatendanttenantinformation
schema: 2.0.0
title: Get-CsMainlineAttendantTenantInformation
---

# Get-CsMainlineAttendantTenantInformation

## SYNOPSIS

The Get-CsMainlineAttendantTenantInformation cmdlet returns the default language and voice configured in the tenant for Mainline Attendant.

## SYNTAX

```
Get-CsMainlineAttendantTenantInformation
```

## DESCRIPTION

The Get-CsMainlineAttendantTenantInformation cmdlet returns the following Mainling Attendant informaton:

- DefaultLanguageId
- DefaultVoiceId
- DefaultTimeZoneId
- SupportedLanguages
- SupportedVoices

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMainlineAttendantTenantInformation
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

