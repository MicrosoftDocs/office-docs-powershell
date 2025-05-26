---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-cspersonalattendantsettings
applicable: Microsoft Teams
title: Get-CsPersonalAttendantSettings
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# Get-CsPersonalAttendantSettings

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

This cmdlet will show personal attendant settings for a user.

## SYNTAX

```powershell
Get-CsPersonalAttendantSettings -Identity <String> [<CommonParameters>]

```

## DESCRIPTION

This cmdlet shows the personal attendant settings for a user.

## EXAMPLES

### Example 1
```powershell
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : False
BookingCalendarId                : 
IsNonContactCallbackEnabled      : False
IsCallScreeningEnabled           : False
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : False
AllowInboundPSTNCalls            : False
IsAutomaticTranscriptionEnabled  : False
IsAutomaticRecordingEnabled      : False
```

This example shows that user1@contoso.com has personal attendant enabled (personal attendant communicates in English). Personal attendant will refer to its owner as User1. 
Personal attendant is only enabled for inbound Teams calls from the user's domain. Additional capabilities are turned off.

### Example 2
```powershell
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
BookingCalendarId                : user1@contoso.onmicrosoft.com
IsNonContactCallbackEnabled      : False
IsCallScreeningEnabled           : False
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : False
AllowInboundPSTNCalls            : False
IsAutomaticTranscriptionEnabled  : False
IsAutomaticRecordingEnabled      : False
```

This example shows that user1@contoso.com has personal attendant enabled. In addition to previously mentioned capabilities, personal attendant is able to access shared calendar with id user1@contoso.onmicrosoft.com, 
fetch the user's availability and schedule callbacks on behalf of the user. Calendar operations are enabled for all incoming callers.

### Example 3
```powershell
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
BookingCalendarId                : user1@contoso.onmicrosoft.com
IsNonContactCallbackEnabled      : True
IsCallScreeningEnabled           : False
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : True
AllowInboundPSTNCalls            : True
IsAutomaticTranscriptionEnabled  : False
IsAutomaticRecordingEnabled      : False
```

This example shows that user1@contoso.com has personal attendant enabled. In addition to previously mentioned capabilities, personal attendant is enabled for all incoming calls: the user's domain, other domains and PSTN.

### Example 4
```powershell
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
BookingCalendarId                : user1@contoso.onmicrosoft.com
IsNonContactCallbackEnabled      : True
IsCallScreeningEnabled           : True
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : True
AllowInboundPSTNCalls            : True
IsAutomaticTranscriptionEnabled  : False
IsAutomaticRecordingEnabled      : False
```

This example shows that user1@contoso.com has personal attendant enabled. In addition to previously mentioned capabilities, personal attendant is enabled to evaluate the call's context and pass the info to the user.

### Example 5
```powershell
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
BookingCalendarId                : user1@contoso.onmicrosoft.com
IsNonContactCallbackEnabled      : True
IsCallScreeningEnabled           : True
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : True
AllowInboundPSTNCalls            : True
IsAutomaticTranscriptionEnabled  : True
IsAutomaticRecordingEnabled      : True
```

This example shows that user1@contoso.com has personal attendant enabled. In addition to previously mentioned capabilities, personal attendant is automatically storing call transcription and recording.

### Example 6
```powershell
Get-CsPersonalAttendantSettings -Identity user11@contoso.com
```
```output
IsPersonalAttendantEnabled       : False
DefaultLanguage                  : En
DefaultVoice                     : Female
CalleeName				         : 
DefaultTone				         : Formal
IsBookingCalendarEnabled         : False
BookingCalendarId                : 
IsNonContactCallbackEnabled      : False
IsCallScreeningEnabled           : True
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : True
AllowInboundPSTNCalls            : True
IsAutomaticTranscriptionEnabled  : True
IsAutomaticRecordingEnabled      : True
```

This example shows the default settings for the user that has never changed the personal attendant settings via Microsoft Teams.

## PARAMETERS

### -Identity
The Identity of the user to show personal attendant settings for. Can be specified using the ObjectId or the SIP address.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module ?.?.? or later.

## RELATED LINKS

[Set-CsPersonalAttendantSettings](./set-cspersonalattendantsettings.md)
