---
applicable: Microsoft Teams
author: juliiva
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: jomarque
Module Name: MicrosoftTeams
ms.author: juliiva
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamspersonalattendantpolicy
schema: 2.0.0
title: Get-CsTeamsPersonalAttendantPolicy
---

# Get-CsPersonalAttendantSettings

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

This cmdlet will show personal attendant settings for a user.

## SYNTAX

```
Get-CsPersonalAttendantSettings -Identity <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the personal attendant settings for a user.

## EXAMPLES

### Example 1
```
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : False
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
```
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
IsNonContactCallbackEnabled      : False
IsCallScreeningEnabled           : False
AllowInboundInternalCalls        : True
AllowInboundFederatedCalls       : False
AllowInboundPSTNCalls            : False
IsAutomaticTranscriptionEnabled  : False
IsAutomaticRecordingEnabled      : False
```

This example shows that user1@contoso.com has personal attendant enabled. In addition to previously mentioned capabilities, personal attendant is able to access personal bookings calendar, 
fetch the user's availability and schedule callbacks on behalf of the user. Calendar operations are enabled for all incoming callers. user1 must specify the bookings link in Teams Personal Attendant settings.

### Example 3
```
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
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
```
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
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
```
Get-CsPersonalAttendantSettings -Identity user1@contoso.com
```
```output
IsPersonalAttendantEnabled       : True
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : User1
DefaultTone				         : Formal
IsBookingCalendarEnabled         : True
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
```
Get-CsPersonalAttendantSettings -Identity user11@contoso.com
```
```output
IsPersonalAttendantEnabled       : False
DefaultLanguage                  : en-US
DefaultVoice                     : Female
CalleeName				         : 
DefaultTone				         : Formal
IsBookingCalendarEnabled         : False
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

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 7.3.0 or later.

## RELATED LINKS

[Set-CsPersonalAttendantSettings](./set-cspersonalattendantsettings.md)
