---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: colongma
ms.reviewer: colongma
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
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

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

[New-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/new-csmainlineattendantappointmentbookingflow)

[Remove-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csmainlineattendantappointmentbookingflow)
