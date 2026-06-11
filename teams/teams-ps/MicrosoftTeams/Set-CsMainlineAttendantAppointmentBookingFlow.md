---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csmainlineattendantappointmentbookingflow
schema: 2.0.0
title: Set-CsMainlineAttendantAppointmentBookingFlow
---

# Set-CsMainlineAttendantAppointmentBookingFlow

## SYNOPSIS
Changes an existing Mainline Attendant appointment booking flow

## SYNTAX

```
Set-CsMainlineAttendantAppointmentBookingFlow -Instance <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsMainlineAttendantAppointmentBookingFlow cmdlet changes an existing appointment booking flow that is used with Mainline Attendant

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES


## PARAMETERS

### -Instance
The Instance parameter is the object reference to the Mainline Attendant Booking flow.

You can retrieve an object reference to an existing Mainline Attendant Booking flow by using the [Get-CsMainlineAttendantAppointmentBookingFlow](Get-CsMainlineAttendantAppointmentBookingFlow.md) cmdlet and assigning the returned value to a variable.

```yaml
Type: Object
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


