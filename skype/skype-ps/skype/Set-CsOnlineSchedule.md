---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsOnlineSchedule
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlineSchedule

## SYNOPSIS
Use the Set-CsOnlineSchedule cmdlet to remove a schedule.

## SYNTAX
```powershell
Set-CsOnlineSchedule -Instance <Object> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOnlineSchedule cmdlet lets you modify the properties of a schedule.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$schedule = Get-CsOnlineSchedule -Id "fa9081d6-b4f3-5c96-baec-0b00077709e5"
$schedule.Name = "Chrismas Holiday"
Set-CsOnlineSchedule -Instance $schedule
```

This example modifies the name of the schedule that has a Id of fa9081d6-b4f3-5c96-baec-0b00077709e5.


### -------------------------- Example 2 --------------------------
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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable`. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule
The modified instance of the `Microsoft.Rtc.Management.Hosted.Online.Models.Schedule` object.


## OUTPUTS

### System.Void


## NOTES

## RELATED LINKS

[New-CsOnlineSchedule](New-CsOnlineSchedule.md)

[Remove-CsOnlineSchedule](Remove-CsOnlineSchedule.md)
