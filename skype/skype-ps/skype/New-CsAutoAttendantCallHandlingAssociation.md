---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsAutoAttendantCallHandlingAssociation
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# New-CsAutoAttendantCallHandlingAssociation

## SYNOPSIS
Use the New-CsAutoAttendantCallHandlingAssociation cmdlet to create a new call handling association.

## SYNTAX

```powershell
New-CsAutoAttendantCallHandlingAssociation -CallFlowId <String> -ScheduleId <String> -Type <AfterHours | Holiday> [-Disable] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantCallHandlingAssociation cmdlet creates a new call handling association to be used with the Auto Attendant (AA) service. The OAA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr)
$scheduleId = $schedule.Id

$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id

$callHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId
```

This example creates the following

- a new after-hours schedule
- a new after-hours call flow
- a new after-hours call handling association

### -------------------------- Example 2 --------------------------
```powershell
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr)
$scheduleId = $schedule.Id

$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id

$disabledCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId -Disable
```

This example creates the following

- a new after-hours schedule
- a new after-hours call flow
- a disabled after-hours call handling association

### -------------------------- Example 3 --------------------------
```powershell
$dtr = New-CsOnlineDateTimeRange -Start "24/12/2017"
$schedule = New-CsOnlineSchedule -Name "Christmas" -FixedSchedule -DateTimeRanges @($dtr)
$scheduleId = $schedule.Id

$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "We are closed for Christmas. Please call back later."
$menuOption = New-CsAutoAttendantMenuOption -DtmfResponse Automatic -Action DisconnectCall
$menu = New-CsAutoAttendantMenu -Name "Christmas Menu" -MenuOptions @($menuOption)
$callFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($greeting) -Menu $menu
$callFlowId = $callFlow.Id

$callHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $scheduleId -CallFlowId $callFlowId
```

This example creates the following

- a new holiday schedule
- a new holiday call flow
- a new holiday call handling association

## PARAMETERS

### -CallFlowId
The CallFlowId parameter represents the call flow to be associated with the schedule.

You can create a call flow by using the [`New-CsAutoAttendantCallFlow`](New-CsAutoAttendantCallFlow.md) cmdlet.


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

### -ScheduleId
The ScheduleId parameter represents the schedule to be associated with the call flow.

You can create a schedule by using the [`New-CsOnlineSchedule`](New-CsOnlineSchedule.md) cmdlet. Additionally, you can use [`Get-CsOnlineSchedule`](Get-CsOnlineSchedule.md) cmdlet to get the schedules configured for your organization.


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

### -Type
The Type parameter represents the type of the call handling association. Currently, only the following types are supported:

- `AfterHours`
- `Holiday`


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

### -Disable
The Disable parameter, if set, establishes that the call handling association is created as disabled. This parameter can only be used when the Type parameter is set to AfterHours.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.CallHandlingAssociation


## NOTES

## RELATED LINKS

[New-CsAutoAttendantCallFlow](New-CsAutoAttendantCallFlow.md)

[New-CsOnlineSchedule](New-CsOnlineSchedule.md)

[`Get-CsOnlineSchedule`](Get-CsOnlineSchedule.md)