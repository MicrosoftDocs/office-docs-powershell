---
applicable: Skype for Business Online
schema: 2.0.0
---

# Set-CsTenantUpdateTimeWindow

## SYNOPSIS
Use the Set-CsTenantUpdateTimeWindow cmdlet to modify an existing tenant update time window's attributes.

## SYNTAX

```
Set-CsTenantUpdateTimeWindow [[-Identity] <Object>] [-Daily] [-DayOfMonth <Object>] [-DaysOfWeek <Object>]
 [-Monthly] [-Weekly] [-WeeksOfMonth <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Duration <Object>]
 [-Force] [-Instance <Object>] [-StartTime <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Tenant update time windows are created, retrieved, modified, and deleted by the CsTenantUpdateTimeWindow cmdlet group (New, Get, Set, and Remove).
The tenant update time windows can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify tenant update time windows through the CsTenantHybridConfiguration cmdlets.
You must use the CsTenantUpdateTimeWindow cmdlets to manage tenant update time windows.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example updates an existing tenant update time window in the tenant in Monthly type.

Set-CsTenantUpdateTimeWindow -Identity FirstAndLastWeekend -Monthly -WeeksOfMonth First,Last -DaysOfWeek Sunday,Saturday -StartTime 1:00 -Duration 5:00

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

This example updates an existing tenant update time window in the tenant in Monthly type.

Set-CsTenantUpdateTimeWindow -Identity MidDay -Monthly -DayOfMonth 15 -StartTime 5:00 -Duration 6:00

### -------------------------- Example 3 -------------------------- (Skype for Business Online)
```

```

This example updates an existing tenant update time window in the tenant in Weekly type.

Set-CsTenantUpdateTimeWindow -Identity Weekday -Weekly -DaysOfWeek Monday,Tuesday,Wednesday,Thursday,Friday -StartTime 3:00 -Duration 10:00

### -------------------------- Example 4 -------------------------- (Skype for Business Online)
```

```

This example updates an existing tenant update time window in the tenant in Daily type.

Set-CsTenantUpdateTimeWindow -Identity Night -Daily

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

### -DaysOfWeek
Days of week.
It can be multiple days separated by a comma.
It must be defined when Type is Weekly or Monthly.

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

### -Identity
Specifies the identity of the tenant update time window.

```yaml
Type: Object
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

### -StartTime
Time of day when the update time window starts.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a26a413e-bd59-4709-b8df-62119b289add(OCS.15).aspx)

