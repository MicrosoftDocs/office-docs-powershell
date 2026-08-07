---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: colongma
ms.reviewer: colongma
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csmainlineattendantappointmentbookingflow
schema: 2.0.0
title: Remove-CsMainlineAttendantAppointmentBookingFlow
---

# Remove-CsMainlineAttendantAppointmentBookingFlow

## SYNOPSIS
The Remove-CsMainlineAttendantAppointmentBookingFlow cmdlet deletes an existing Mainline attendant appointment booking flow.

## SYNTAX

```
Remove-CsMainlineAttendantAppointmentBookingFlow -Identity <Guid> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsMainlineAttendantAppointmentBookingFlow cmdlet deletes an existing Mainline attendant appointment booking flow.

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### Example 1
```
Remove-CsMainlineAttendantAppointmentBookingFlow -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example removes the Mainline attendant appointment booking flow with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no appointment booking flow exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Identity
The identifier of the appointment booking flow.

```yaml
Type: Guid
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

### Identity
Represents the unique identifier of a Mainline attendant appointment booking flow.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/get-csmainlineattendantappointmentbookingflow)

[New-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/new-csmainlineattendantappointmentbookingflow)

[Set-CsMainlineAttendantAppointmentBookingFlow](https://learn.microsoft.com/powershell/module/microsoftteams/set-csmainlineattendantappointmentbookingflow)
