---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetimerange
schema: 2.0.0
title: New-CsOnlineTimeRange
---

# New-CsOnlineTimeRange

## SYNOPSIS
The New-CsOnlineTimeRange cmdlet creates a new time range.

## SYNTAX

```
New-CsOnlineTimeRange -Start <TimeSpan> -End <TimeSpan> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineTimeRange cmdlet creates a new time range to be used with the Auto Attendant (AA) service. Time ranges are used to form schedules.

**NOTES**:

- The start bound of the range must be less than its end bound.
- Time ranges within a weekly recurrent schedule must align with 15-minute boundaries.

## EXAMPLES

### Example 1
```
$workdayTimeRange = New-CsOnlineTimeRange -Start 09:00 -End 17:00
```

This example creates a time range for a 9AM to 5PM work day.

### Example 2
```
$allDayTimeRange = New-CsOnlineTimeRange -Start 00:00 -End 1.00:00
```

This example creates a 24-hour time range.

## PARAMETERS

### -End

The End parameter represents the end bound of the time range.

```yaml
Type: System.TimeSpan
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Start

The Start parameter represents the start bound of the time range.

```yaml
Type: System.TimeSpan
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
Type: System.Guid
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.TimeRange

## NOTES

## RELATED LINKS

[New-CsOnlineDateTimeRange](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedatetimerange)

[New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineschedule)

[New-CsAutoAttendantCallFlow](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallflow)

[New-CsAutoAttendantCallHandlingAssociation](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallhandlingassociation)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)
