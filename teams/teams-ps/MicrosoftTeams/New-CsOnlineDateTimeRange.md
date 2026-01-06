---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedatetimerange
schema: 2.0.0
title: New-CsOnlineDateTimeRange
---

# New-CsOnlineDateTimeRange

## SYNOPSIS
Use the New-CsOnlineDateTimeRange cmdlet to create a new date-time range.

## SYNTAX

```
New-CsOnlineDateTimeRange -Start <String> [-End <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineDateTimeRange cmdlet creates a new date-time range to be used with the Organizational Auto Attendant (OAA) service. Date time ranges are used to form schedules.

**NOTE**:

- The start bound of the range must be less than its end bound.
- The time part of the range must be aligned with 30/60-minutes boundaries.
- A date time range bound can only be input in the following formats:
  - "d/m/yyyy H:mm"
  - "d/m/yyyy" (the time component of the date-time range is set to 00:00)

## EXAMPLES

### Example 1
```
$dtr = New-CsOnlineDateTimeRange -Start "1/1/2017"
```

This example creates a date-time range for spanning from January 1, 2017 12AM to January 2, 2017 12AM.

### Example 2
```
$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017 09:00" -End "27/12/2017 00:00"
```

This example creates a date-time range spanning from December 24, 2017 9AM to December 27, 2017 12AM.

## PARAMETERS

### -End

The End parameter represents the end bound of the date-time range.

If not present, the end bound of the date time range is set to 00:00 of the day after the start date.

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

### -Start

The Start parameter represents the start bound of the date-time range.

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

### Microsoft.Rtc.Management.Hosted.Online.Models.DateTimeRange

## NOTES

## RELATED LINKS

[New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineschedule)

[New-CsOnlineTimeRange](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetimerange)
