---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csmainlineattendantappointmentbookingflow
applicable: Microsoft Teams
title: New-CsMainlineAttendantAppointmentBookingFlow
author: tomkau
ms.author: tomkau
manager: bulenteg
ms.reviewer:
schema: 2.0.0
---

# New-CsMainlineAttendantAppointmentBookingFlow

## SYNOPSIS
Creates new Mainline Attendant appointment booking flow

## SYNTAX

```
New-CsMainlineAttendantAppointmentBookingFlow -Name <String> -Description <String>  -CallerAuthenticationMethod <sms | email | verification_link | voiceprint | user_details> -ApiAuthenticationType <basic | api_key | bearer_token_static | bearer_token_dynamic> -ApiDefinitions <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsMainlineAttendantAppointmentBookingFlow cmdlet creates a new appointment booking connection that can be used with Mainline Attendant

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES


## PARAMETERS

### -Name
The name of the appointment booking flow

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description for the appointment booking flow

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -CallerAuthenticationMethod
The method by which the caller is authenticated

PARAVALUES: sms | email | verification_link | voiceprint | user_details

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -ApiAuthenticationType
The method of authentication used by the API

PARAVALUES: basic | api_key | bearer_token_static | bearer_token_dynamic

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -ApiDefinitions
The parameters used by the API

For an example, see [New-CsMainlineAttendantAppointBookingFlow -ApiDefinitions](New-CsMainLineAttenantAppointmentBookingFlow-ApiDefinitions-JSON.md)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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

