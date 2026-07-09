---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csmainlineattendantappointmentbookingflow
schema: 2.0.0
title: New-CsMainlineAttendantAppointmentBookingFlow
---

# New-CsMainlineAttendantAppointmentBookingFlow

## SYNOPSIS
Creates new Mainline Attendant appointment booking flow

## SYNTAX

```
New-CsMainlineAttendantAppointmentBookingFlow -Name <String> -Description <String>  -AppointmentBookingPlatform <String> -BookingLink <String> -CallerAuthenticationMethod <SMS | Email | VerificationLink | Voiceprint | UserDetails> -ApiAuthenticationType <Basic | ApiKey | BearerTokenStatic | BearerTokenDynamic> -ApiDefinitions <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsMainlineAttendantAppointmentBookingFlow cmdlet creates a new appointment booking connection that can be used with Mainline Attendant

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES


## PARAMETERS

### -Name
The name of the appointment booking flow

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description for the appointment booking flow

Limit: 500 characters. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppointmentBookingPlatform
The booking platfrom being used.

PARAVALUES: Custom | MicrosoftBookings

If MicrosoftBookings is selected, the `-CallerAuthenticationMethod`, `-ApiAuthenticationType`, and `-ApiDefinitions` will be ignored.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingLink
The Microsoft Bookings URL for the booking calendar to be used.

This field will be ignored if `-AppointmentBookingPlatform` is set to `Custom`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -CallerAuthenticationMethod
The method by which the caller is authenticated

PARAVALUES: SMS | Email | VerificationLink | Voiceprint | UserDetails

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -ApiAuthenticationType
The method of authentication used by the API

PARAVALUES: Basic | ApiKey | BearerTokenStatic | BearerTokenDynamic

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -ApiDefinitions
The parameters used by the API

```yaml
Type: String
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

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

