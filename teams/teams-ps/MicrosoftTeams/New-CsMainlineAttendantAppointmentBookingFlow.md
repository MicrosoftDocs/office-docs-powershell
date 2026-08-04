---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: colongma
ms.reviewer: colongma
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
The booking platform being used.

Supported values: Custom | MicrosoftBookings

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

Supported values: SMS | Email | VerificationLink | Voiceprint | UserDetails

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

Supported values: Basic | ApiKey | BearerTokenStatic | BearerTokenDynamic

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

### -Tenant

This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
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

[Get-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantappointmentbookingflow)

[Set-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/set-csmainlineattendantappointmentbookingflow)

[Remove-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csmainlineattendantappointmentbookingflow)
