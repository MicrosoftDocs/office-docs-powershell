---
applicable: Microsoft Teams
author: juliiva
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: jomarque
Module Name: MicrosoftTeams
ms.author: juliiva
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cspersonalattendantsettings
schema: 2.0.0
title: Set-CsPersonalAttendantSettings
---

# Set-CsPersonalAttendantSettings

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

This cmdlet will set personal attendant settings for the specified user.

## SYNTAX

```
Set-CsPersonalAttendantSettings -Identity <String> -IsPersonalAttendantEnabled <Boolean> -DefaultLanguage <String> [-DefaultVoice <String>]  [-CalleeName <String>] [-DefaultTone <String>] -IsBookingCalendarEnabled <Boolean> [-IsNonContactCallbackEnabled <Boolean>] -IsCallScreeningEnabled <Boolean> -AllowInboundInternalCalls <Boolean> -AllowInboundFederatedCalls <Boolean> -AllowInboundPSTNCalls <Boolean>  -IsAutomaticTranscriptionEnabled <Boolean> -IsAutomaticRecordingEnabled <Boolean> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet sets personal attendant settings for the specified user.

When specifying settings you need to specify all settings, for instance, you can't just turn call screening on. Instead, you need to
start by getting the current settings, making the necessary changes, and then setting/writing all settings.

## EXAMPLES

### Example 1
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $false -IsCallScreeningEnabled $false
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $false -AllowInboundPSTNCalls $false -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows setting up personal attendant for user1@contoso.com. Personal attendant communicates in English. Personal attendant will refer to its owner as User1. 
Personal attendant is only enabled for inbound Teams calls from the user's domain. Additional capabilities are turned off.

### Example 2
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $true -IsCallScreeningEnabled $false
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $false -AllowInboundPSTNCalls $false -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows setting up personal attendant for user1@contoso.com. In addition to previously mentioned capabilities, personal attendant is able to access personal bookings calendar, 
fetch the user's availability and schedule callbacks on behalf of the user. Calendar operations are enabled for all incoming callers. user1 must specify the bookings link in Teams Personal Attendant settings.

### Example 3
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $true -IsCallScreeningEnabled $false
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $true -AllowInboundPSTNCalls $true -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows setting up personal attendant for user1@contoso.com. In addition to previously mentioned capabilities, personal attendant is enabled for all incoming calls: the user's domain, other domains and PSTN.

### Example 4
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $true -IsCallScreeningEnabled $true
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $true -AllowInboundPSTNCalls $true -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows setting up personal attendant for user1@contoso.com. In addition to previously mentioned capabilities, personal attendant is enabled to evaluate the call's context and pass the info to the user.

### Example 5
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $true -IsCallScreeningEnabled $true
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $true -AllowInboundPSTNCalls $true -IsAutomaticTranscriptionEnabled $true -IsAutomaticRecordingEnabled $true
```

This example shows setting up personal attendant for user1@contoso.com. In addition to previously mentioned capabilities, personal attendant is automatically storing call transcription and recording.

### Example 6
```
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $false
```

This example shows turning off personal attendant for user1@contoso.com.

### Example 7
```
Set-CsUserCallingSettings -Identity user1@contoso.com -IsForwardingEnabled $false
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $false -IsCallScreeningEnabled $false
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $false -AllowInboundPSTNCalls $false -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows how to set up personal attendant for a user, who has call forwarding enabled.

### Example 8
```
Set-CsUserCallingSettings -Identity user1@contoso.com -IsUnansweredEnabled $true -UnansweredTargetType Voicemail -UnansweredDelay 00:00:20
Set-CsPersonalAttendantSettings -Identity user1@contoso.com -IsPersonalAttendantEnabled $true -DefaultLanguage en-US -CalleeName User1 -IsBookingCalendarEnabled $false -IsCallScreeningEnabled $false
-AllowInboundInternalCalls $true -AllowInboundFederatedCalls $false -AllowInboundPSTNCalls $false -IsAutomaticTranscriptionEnabled $false -IsAutomaticRecordingEnabled $false
```

This example shows how to set up personal attendant for a user, who would like to use unanswered call functionality simultaniously with personal attendant.

## PARAMETERS

### -Identity
The Identity of the user to set	personal attendant settings for. Can be specified using the ObjectId or the SIP address.

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

### -IsPersonalAttendantEnabled
This parameter controls whether personal attendant is enabled or not. If personal attendant is enabled, then at least one of: AllowInboundInternalCalls, AllowInboundFederatedCalls, AllowInboundPSTNCalls must be enabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultLanguage
Language to be used by personal attendant in communication. The preliminary list of supported languages is:
en-US, fr-FR, ar-SA, zh-CN, zh-TW, cs-CZ, da-DK, nl-NL, en-AU, en-GB, fi-FI, fr-CA, de-DE, el-GR, hi-IN, id-ID, it-IT, ja-JP, ko-KR, nb-NO, pl-PL, pt-BR, ru-RU, es-ES, es-US, sv-SE, th-TH, tr-TR

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: en-US
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultVoice
Voice to be used by personal attendant in communication. Supported values are Female and Male.

> [!NOTE]
> This parameter is currently in development and changing it does not change the behavior of Personal Attendant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Female
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalleeName
Name that personal attendant uses when referring to its owner. 

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultTone
Tone to be used by personal attendant in communication. Supported values are Formal and Casual.

> [!NOTE]
> This parameter is currently in development and enabling/disabling it does not change the behavior of Personal Attendant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Formal
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsBookingCalendarEnabled
This parameter controls whether personal attendant can access personal bookings calendar to fetch the user's availability and schedule callbacks on behalf of the user.
If access to personal calendar is enabled by admin, user must specify the bookings link in Teams Personal Attendant settings.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsNonContactCallbackEnabled
This parameter controls whether personal attendant calendar operations for callers not in the user contact list are enabled or not.

> [!NOTE]
> This parameter is currently in development and enabling/disabling it does not change the behavior of Personal Attendant.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsCallScreeningEnabled
This parameter controls whether personal attendant evaluates calls context and passes the info to the user.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowInboundInternalCalls
This parameter controls whether personal attendant for incoming domain calls is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowInboundFederatedCalls
This parameter controls whether personal attendant for incoming calls from other domains is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowInboundPSTNCalls
This parameter controls whether personal attendant for incoming PSTN calls is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAutomaticTranscriptionEnabled
This parameter controls whether automatic storing of transcriptions (of personal attendant calls) is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAutomaticRecordingEnabled
This parameter controls whether automatic storing of recordings (of personal attendant calls) is enabled or not.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: True
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

The specified user need to have the Microsoft Phone System license assigned.

The cmdlet is validating different settings and is always writing all the parameters. You might see validation errors from the cmdlet due to
this behavior. As an example, if you already have call forwarding set up and you want to set up personal attendant, you will get a validation error.


## RELATED LINKS
[Get-CsPersonalAttendantSettings](./get-cspersonalattendantsettings.md)
