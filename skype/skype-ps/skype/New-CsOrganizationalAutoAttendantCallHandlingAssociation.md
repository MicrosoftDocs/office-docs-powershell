---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantCallHandlingAssociation
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantCallHandlingAssociation

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantCallHandlingAssociation cmdlet to create a new call handling association.

## SYNTAX

```
New-CsOrganizationalAutoAttendantCallHandlingAssociation [-ScheduleId <Object>] [-Type <Object>]
 [-BypassDualWrite <Object>] [-Disable] [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob]
 [-CallFlowId <Object>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantCallHandlingAssociation cmdlet creates a new call handling association to be used with the Organizational Auto Attendant (OAA) service. The OAA service uses call handling associations to determine which call flow to execute when a specific schedule is in effect.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr)
$scheduleId = $schedule.Id

$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName 
$callFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id
$callHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId
```

This example creates a new call handling association.

### -------------------------- Example 2 -------------------------- 
```
$tr = New-CsOnlineTimeRange -Start 09:00 -End 17:00
$schedule = New-CsOnlineSchedule -Name "Business Hours" -WeeklyRecurrentSchedule -MondayHours @($tr)
$scheduleId = $schedule.Id

$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts $menuPrompt -EnableDialByName 
$callFlow = New-CsOrganizationalAutoAttendantCallFlow -Name "Default Call Flow" -Menu $menu
$callFlowId = $callFlow.Id
$disabledCallHandlingAssociation = New-CsOrganizationalAutoAttendantCallHandlingAssociation -Type AfterHours -ScheduleId $scheduleId -CallFlowId $callFlowId -Disable
```

This example creates a disabled call handling association.

## PARAMETERS

### -ScheduleId
PARAMVALUE: String

The ScheduleId parameter represents the schedule to be associated with the call flow. 

You can create a schedule by using the New-CsOnlineSchedule cmdlet 


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

### -Type
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.CallHandlingAssociationType

The Type parameter represents the type of the call handling association. Currently, only AfterHours is supported. 


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

### -Disable
PARAMVALUE: System.Management.Automation.SwitchParameter

The Disable parameter, if set, establishes that the call handling association is created as disabled.

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
PARAMVALUE: Microsoft.Rtc.Management.Deploy.Fqdn

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
PARAMVALUE: System.Management.Automation.SwitchParameter

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

### -CallFlowId
PARAMVALUE: System.String

The CallFlowId parameter represents the call flow to be associated with the schedule. 

You can create a call flow by using the New-CsOrganizationalAutoAttendantCallFlow cmdlet.


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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.CallHandlingAssociation


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendantCallFlow](New-CsOrganizationalAutoAttendantCallFlow.md)

[New-CsOnlineSchedule](New-CsOnlineSchedule.md)