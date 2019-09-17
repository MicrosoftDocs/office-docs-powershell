---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Set-CsTenantUpdateTimeWindow
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTenantUpdateTimeWindow

## SYNOPSIS
Use the `Set-CsTenantUpdateTimeWindow` cmdlet to modify an existing tenant update time window's attributes.

## SYNTAX

### Identity (Default)
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Daily
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Daily]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Weekly
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Weekly]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] -DaysOfWeek <TenantUpdateTimeWindowDayOfWeek> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### MonthlyByDate
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Monthly]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] -DayOfMonth <Int32> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### MonthlyByWeekDay
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Monthly]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] -WeeksOfMonth <TenantUpdateTimeWindowWeekOfMonth>
 -DaysOfWeek <TenantUpdateTimeWindowDayOfWeek> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTenantUpdateTimeWindow [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>]
 [-StartTime <TimeSpan>] [-Duration <TimeSpan>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Tenant update time windows are created, retrieved, modified, and deleted by the CsTenantUpdateTimeWindow cmdlet group (New, Get, Set and Remove).
The tenant update time windows can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify tenant update time windows through the CsTenantHybridConfiguration cmdlets.
You must use the CsTenantUpdateTimeWindow cmdlets to manage tenant update time windows.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsTenantUpdateTimeWindow -Identity FirstAndLastWeekend -Monthly -WeeksOfMonth First,Last -DaysOfWeek Sunday,Saturday -StartTime 1:00 -Duration 5:00
```

This example updates an existing tenant update time window in the tenant in Monthly type.


### -------------------------- Example 2 --------------------------
```
Set-CsTenantUpdateTimeWindow -Identity MidDay -Monthly -DayOfMonth 15 -StartTime 5:00 -Duration 6:00
```

This example updates an existing tenant update time window in the tenant in Monthly type.


### -------------------------- Example 3 --------------------------
```
Set-CsTenantUpdateTimeWindow -Identity Weekday -Weekly -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday -StartTime 3:00 -Duration 10:00
```

This example updates an existing tenant update time window in the tenant in Weekly type.


### -------------------------- Example 4 --------------------------
```
Set-CsTenantUpdateTimeWindow -Identity Night -Daily
```

This example updates an existing tenant update time window in the tenant in Daily type.


## PARAMETERS

### -Daily
Type of Time window is daily.

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

### -DayOfMonth
Day of month.
It must be defined when Type is Monthly.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DaysOfWeek
Days of week.
It can be multiple days separated by a comma.
It must be defined when Type is Weekly or Monthly.

```yaml
Type: TenantUpdateTimeWindowDayOfWeek
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the tenant update time window.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Monthly
Type of Time window is monthly.

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

### -Weekly
Type of Time window is weekly.

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

### -WeeksOfMonth
Weeks of month.
It can be multiple weeks separated by a comma.
It must be defined when Type is Monthly.

```yaml
Type: TenantUpdateTimeWindowWeekOfMonth
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Duration
Duration of the update time window.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Instance
PARAMVALUE: PSObject

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
Time of day when the update time window starts.

```yaml
Type: TimeSpan
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
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

