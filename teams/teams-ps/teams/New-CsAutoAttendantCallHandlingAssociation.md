---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csautoattendantcallhandlingassociation
applicable: Microsoft Teams
title: New-CsAutoAttendantCallHandlingAssociation
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsAutoAttendantCallHandlingAssociation

## SYNOPSIS
Use the `New-CsAutoAttendantCallHandlingAssociation` cmdlet to create a new call handling association.

## SYNTAX

```powershell
New-CsAutoAttendantCallHandlingAssociation -CallFlowId <String> -ScheduleId <String> -Type <AfterHours | Holiday> [-Disable] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The `New-CsAutoAttendantCallHandlingAssociation` cmdlet creates a new call handling association to be used with the Auto Attendant (AA) service. The OAA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr) -TuesdayHours @($tr) -WednesdayHours @($tr) -ThursdayHours @($tr) -FridayHours @($tr) -Complement
$scheduleId = $schedule.Id

$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id

$callHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId
```

This example creates the following:

- a new after-hours schedule
- a new after-hours call flow
- a new after-hours call handling association

### -------------------------- Example 2 --------------------------
```powershell
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr) -TuesdayHours @($tr) -WednesdayHours @($tr) -ThursdayHours @($tr) -FridayHours @($tr) -Complement
$scheduleId = $schedule.Id

$menuPrompt = New-CsAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName
$callFlow = New-CsAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id

$disabledCallHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId -Disable
```

This example creates the following:

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
$menu = New-CsAutoAttendantMenu -Name "Christmas Menu" -Prompts @($menuPrompt) -MenuOptions @($menuOption)
$callFlow = New-CsAutoAttendantCallFlow -Name "Christmas" -Greetings @($greeting) -Menu $menu
$callFlowId = $callFlow.Id

$callHandlingAssociation = New-CsAutoAttendantCallHandlingAssociation -Type Holiday -ScheduleId $scheduleId -CallFlowId $callFlowId
```

This example creates the following:

- a new holiday schedule
- a new holiday call flow
- a new holiday call handling association

## PARAMETERS

### -CallFlowId
The CallFlowId parameter represents the call flow to be associated with the schedule.

You can create a call flow by using the [`New-CsAutoAttendantCallFlow`](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantcallflow) cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleId
The ScheduleId parameter represents the schedule to be associated with the call flow.

You can create a schedule by using the [New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/new-csonlineschedule) cmdlet. additionally, you can use [Get-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/get-csonlineschedule) cmdlet to get the schedules configured for your organization.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.CallHandlingAssociation

## NOTES

## RELATED LINKS

[New-CsAutoAttendantCallFlow](https://learn.microsoft.com/powershell/module/teams/new-csautoattendantcallflow)

[New-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/new-csonlineschedule)

[Get-CsOnlineSchedule](https://learn.microsoft.com/powershell/module/teams/get-csonlineschedule)
