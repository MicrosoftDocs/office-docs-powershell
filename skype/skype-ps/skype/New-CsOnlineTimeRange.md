---
external help file: 
applicable: Skype for Business Online
title: New-CsOnlineTimeRange
schema: 2.0.0
---

# New-CsOnlineTimeRange

## SYNOPSIS
The New-CsOnlineTimeRange cmdlet creates a new time range.

## SYNTAX

```
New-CsOnlineTimeRange [-End <Object>] [-Start <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOnlineTimeRange cmdlet creates a new time range to be used with the Organizational Auto Attendant (OAA) service. Time ranges are used to form schedules.

Note: The start and end bounds of the time range must obey the relation start < end.
A time range can only be formed of minute/hour increments.
A time range can span from one minute to 24 hours.
 


## EXAMPLES

### -------------------------- Example 1 --------------------------
```

$workdayTimeRange = New-CsOnlineTimeRange -Start 09:00 -End 17:00

```

This example creates a time range for a 9am to 5pm work day.

### -------------------------- Example 2 --------------------------
```
$allDayTimeRange = New-CsOnlineTimeRange -Start 00:00 -End 1.00:00
```

This example creates a 24-hour time range.


## PARAMETERS

### -End
PARAMVALUE: TimeSpan

The End parameter represents the end bound of the time range.

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

### -Start
PARAMVALUE: TimeSpan

The Start parameter represents the start bound of the time range.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.TimeRange


## NOTES

## RELATED LINKS
