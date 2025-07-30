---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlineschedule
schema: 2.0.0
title: Set-CsOnlineSchedule
---

# Set-CsOnlineSchedule

## SYNOPSIS
Use the Set-CsOnlineSchedule cmdlet to update a schedule.

## SYNTAX
```powershell
Set-CsOnlineSchedule -Instance <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOnlineSchedule cmdlet lets you modify the properties of a schedule.

## EXAMPLES

### Example 1
```powershell
$schedule = Get-CsOnlineSchedule -Id "fa9081d6-b4f3-5c96-baec-0b00077709e5"
$schedule.Name = "Christmas Holiday"
Set-CsOnlineSchedule -Instance $schedule
```

This example modifies the name of the schedule that has a Id of fa9081d6-b4f3-5c96-baec-0b00077709e5.

### Example 2
```powershell
$schedule = Get-CsOnlineSchedule -Id "fa9081d6-b4f3-5c96-baec-0b00077709e5"

$schedule

        Id                      : 5d3e0315-533b-473d-8524-36c954d1fc93
        Name                    : Thanksgiving
        Type                    : Fixed
        WeeklyRecurrentSchedule :
        FixedSchedule           : 22/11/2018 00:00 - 23/11/2018 00:00, 28/11/2019 00:00 - 29/11/2019 00:00, 26/11/2020 00:00 - 27/11/2020 00:00

# Add a new Date Time Range
$schedule.FixedSchedule.DateTimeRanges += New-CsOnlineDateTimeRange -Start "25/11/2021" -End "26/11/2021"

Set-CsOnlineSchedule -Instance $schedule
```

This example updates an existing holiday schedule, adding a new date/time range to it.

## PARAMETERS

### -Instance
The Instance parameter is the object reference to the schedule to be modified.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule
The modified instance of the `Microsoft.Rtc.Management.Hosted.Online.Models.Schedule` object.

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS

[New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/new-csonlineschedule)

[Remove-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/remove-csonlineschedule)
