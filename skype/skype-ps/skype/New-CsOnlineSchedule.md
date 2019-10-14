---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsOnlineSchedule
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsOnlineSchedule

## SYNOPSIS
Use the New-CsOnlineSchedule cmdlet to create a new schedule.

## SYNTAX

### WeeklyRecurrentSchedule
```powershell
New-CsOnlineSchedule -Name <String> -WeeklyRecurrentSchedule [-MondayHours <List>] [-TuesdayHours <List>] [-WednesdayHours <List>] [-ThursdayHours <List>] [-FridayHours <List>] [-SaturdayHours <List>] [-SundayHours <List>] [-Complement] [-Tenant <Guid>] [-CommonParameters]
```

### FixedSchedule
```powershell
New-CsOnlineSchedule -Name <String> -FixedSchedule [-DateTimeRanges <List>] [-Tenant <Guid>] [-CommonParameters]
```

## DESCRIPTION
The New-CsOnlineSchedule cmdlet creates a new schedule for the Organizational Auto Attendant (OAA) service. The OAA service uses schedules to conditionally execute call flows when a specific schedule is in effect.

**NOTE**
- The type of the schedule cannot be altered after the schedule is created.
- Currently, only two types of schedules can be created: WeeklyRecurrentSchedule or FixedSchedule.
- The schedule types are mutually exclusive. So a weekly recurrent schedule cannot be a fixed schedule and vice versa.
- For a weekly recurrent schedule, at least one day should have time ranges specified.
- You can create a new time range by using New-CsOnlineTimeRange cmdlet.
- A fixed schedule can be created without any date-time ranges. In this case, it would never be in effect.
- For a fixed schedule, at most 10 date-time ranges can be specified.
- You can create a new date-time range for a fixed schedule by using the New-CsOnlineDateTimeRange cmdlet.
- The return type of this cmdlet composes a member for the underlying type/implementation. For example, in case of the weekly recurrent schedule, you can modify Monday’s time ranges through the Schedule.WeeklyRecurrentSchedule.MondayHours property. Similarly, date-time ranges of a fixed schedule can be modified by using the Schedule.FixedSchedule.DateTimeRanges property.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$tr1 = New-CsOnlineTimeRange -Start 09:00 -End 12:00
$tr2 = New-CsOnlineTimeRange -Start 13:00 -End 17:00
$businessHours = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr1, $tr2) -TuesdayHours @($tr1, $tr2) -WednesdayHours @($tr1, $tr2) -ThursdayHours @($tr1, $tr2) -FridayHours @($tr1, $tr2)
```

This example creates a weekly recurrent schedule that is active on Monday-Friday from 9AM-12PM and 1PM-5PM.

### -------------------------- Example 2 --------------------------
```powershell
$tr1 = New-CsOnlineTimeRange -Start 09:00 -End 12:00
$tr2 = New-CsOnlineTimeRange -Start 13:00 -End 17:00
$afterHours = New-CsOnlineSchedule -Name " After Hours" -WeeklyRecurrentSchedule -MondayHours @($tr1, $tr2) -TuesdayHours @($tr1, $tr2) -WednesdayHours @($tr1, $tr2) -ThursdayHours @($tr1, $tr2) -FridayHours @($tr1, $tr2) -Complement
```

This example creates a weekly recurrent schedule that is active at all times except Monday-Friday, 9AM-12PM and 1PM-5PM.

### -------------------------- Example 3 --------------------------
```powershell
$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)
```

This example creates a fixed schedule that is active from December 24, 2017 to December 26, 2017.

### -------------------------- Example 4 --------------------------
```powershell
$dtr1 = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$dtr2 = New-CsOnlineDateTimeRange -Start "24/12/2018" -End "26/12/2018"
$christmasSchedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr1, $dtr2)
```

This example creates a fixed schedule that is active from December 24, 2017 to December 26, 2017 and then from December 24, 2018 to December 26, 2018.

### -------------------------- Example 5 --------------------------
```powershell
$dtr1 = New-CsOnlineDateTimeRange -Start "24/12/2017" -End "26/12/2017"
$dtr2 = New-CsOnlineDateTimeRange -Start "24/12/2018" -End "26/12/2018"
$notInEffectSchedule = New-CsOnlineSchedule -Name "NotInEffect" -FixedSchedule
```

This example creates a fixed schedule that is never active.

## PARAMETERS

### -Name
The Name parameter represents a unique friendly name for the schedule.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeeklyRecurrentSchedule
The WeeklyRecurrentSchedule parameter indicates that a weekly recurrent schedule is to be created. This parameter is mandatory when a weekly recurrent schedule is to be created.

```yaml
Type: SwitchParameter
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MondayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TuesdayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WednesdayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThursdayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FridayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaturdayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SundayHours
List of time ranges for that day.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Complement
The Complement parameter indicates how the schedule is used.
When Complement is enabled, the schedule is used as the inverse of the provided configuration.
For example, if Complement is enabled and the schedule only contains time ranges of Monday to Friday from 9AM to 5PM, then the schedule is active at all times other than the specified time ranges.

```yaml
Type: SwitchParameter
Parameter Sets: WeeklyRecurrentSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FixedSchedule
The FixedSchedule parameter indicates that a fixed schedule is to be created.

```yaml
Type: SwitchParameter
Parameter Sets: FixedSchedule
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeRanges
List of date-time ranges for a fixed schedule. At most, 10 date-time ranges can be specified using this parameter.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: FixedSchedule
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule


## NOTES

## RELATED LINKS

[New-CsOnlineTimeRange](New-CsOnlineTimeRange.md)

[New-CsOnlineDateTimeRange](New-CsOnlineDateTimeRange.md)

[New-CsOrganizationalAutoAttendantCallFlow](New-CsOrganizationalAutoAttendantCallFlow.md)

[New-CsOrganizationalAutoAttendantCallHandlingAssociation](New-CsOrganizationalAutoAttendantCallHandlingAssociation.md)
