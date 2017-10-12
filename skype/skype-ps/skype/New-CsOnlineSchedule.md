---
external help file: 
applicable: Skype for Business Online
title: New-CsOnlineSchedule
schema: 2.0.0
---

# New-CsOnlineSchedule

## SYNOPSIS
Use the New-CsOnlineSchedule cmdlet to create a new schedule.

## SYNTAX

```
New-CsOnlineSchedule [-Name <Object>] [-WeeklyRecurrentSchedule] [-BypassDualWrite <Object>] [-Complement]
 [-DomainController <Object>] [-Force] [-FridayHours <Object>] [-MondayHours <Object>]
 [-SaturdayHours <Object>] [-SundayHours <Object>] [-Tenant <Object>] [-ThursdayHours <Object>]
 [-TuesdayHours <Object>] [-WednesdayHours <Object>] [-AsJob] [-DateTimeRanges <Object>] [-FixedSchedule]
 [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineSchedule cmdlet creates a new schedule for the Organizational Auto Attendant (OAA) service. The OAA service uses schedules to conditionally execute call flows when a specific schedule is in effect.

Note:
The type of the schedule cannot be altered after the schedule is created.
For a weekly recurrent schedule, at least one day should have time ranges specified.
You can create a new time range by using New-CsOnlineTimeRange cmdlet.
The return type of this cmdlet composes a member for the underlying type/implementation. For example, in case of the weekly recurrent schedule, you can modify Monday’s time ranges through the Schedule.WeeklyRecurrentSchedule.MondayHours property.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$tr1 = New-CsOnlineTimeRange -Start 09:00 -End 12:00
$tr2 = New-CsOnlineTimeRange -Start 13:00 -End 17:00
$businessHours = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr1, $tr2) -TuesdayHours @($tr1, $tr2) -WednesdayHours @($tr1, $tr2) -ThursdayHours @($tr1, $tr2) -FridayHours @($tr1, $tr2)
```

This example creates a schedule that sets business hours (Monday- Friday, 9am-12pm and 1pm-5pm).

### -------------------------- Example 2 -------------------------- 
```
$tr1 = New-CsOnlineTimeRange -Start 09:00 -End 12:00
$tr2 = New-CsOnlineTimeRange -Start 13:00 -End 17:00
$afterHours = New-CsOnlineSchedule -Name " After Hours" -WeeklyRecurrentSchedule -MondayHours @($tr1, $tr2) -TuesdayHours @($tr1, $tr2) -WednesdayHours @($tr1, $tr2) -ThursdayHours @($tr1, $tr2) -FridayHours @($tr1, $tr2) -Complement
```

This example creates an after-hours schedule that is active at all times except Monday- Friday, 9am-12pm and 1pm-5pm.

## PARAMETERS

### -Name
PARAMVALUE: String

The Name parameter is the friendly name for the schedule.

```yaml
Type: Object
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
PARAMVALUE: SwitchParameter

The WeeklyRecurrentSchedule parameter indicates that a weekly recurrent schedule is to be created. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Complement
PARAMVALUE: SwitchParameter

The Complement parameter indicates how the schedule is used. 
When Complement is enabled, the schedule is used as the inverse of the provided configuration. 
For example, if Complement is enabled and the schedule only contains time ranges of Monday to Friday from 9am to 5pm, then the schedule is active at all times other than the specified time ranges. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FridayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MondayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaturdayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SundayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThursdayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TuesdayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WednesdayHours
PARAMVALUE: List

List of time ranges for that day.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeRanges
{{Fill DateTimeRanges Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FixedSchedule
{{Fill FixedSchedule Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule


## NOTES

## RELATED LINKS

