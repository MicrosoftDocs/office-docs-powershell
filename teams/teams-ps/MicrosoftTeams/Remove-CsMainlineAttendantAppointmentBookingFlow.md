---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
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

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsMainlineAttendantAppointmentBookingFlow -Identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01
```

This example removes the Mainline attendant appointment booking flow with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01. If no appointment booking flow exists with the identity 5e3a575e-1faa-49ff-83c2-5cf1c36c0e01, then this example generates an error.

## PARAMETERS

### -Identity
PARAMVALUE: Guid

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

### -Tenant
PARAMVALUE: Guid

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

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

