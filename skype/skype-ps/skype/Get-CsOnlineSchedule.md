---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineSchedule
schema: 2.0.0
---

# Get-CsOnlineSchedule

## SYNOPSIS
Use the Get-CsOnlineSchedule cmdlet to get information about schedules that belong to your organization.

## SYNTAX

```
Get-CsOnlineSchedule [-Identity <String>] [-Tenant <Guid>] [-CommonParameters]
```

## DESCRIPTION
The Get-CsOnlineSchedule cmdlet returns information about the schedules in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineSchedule
```

This example retrieves all schedules that belong to your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineSchedule -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

This example gets the schedules that has the identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

## PARAMETERS

### -Identity
The identity for the schedule to be retrieved. If this parameter is not specified, then all schedules in the organization are returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: 0
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

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule


## NOTES

## RELATED LINKS

[New-CsOnlineTimeRange](New-CsOnlineTimeRange.md)

[New-CsOnlineDateTimeRange](New-CsOnlineDateTimeRange.md)

[New-CsAutoAttendantCallFlow](New-CsAutoAttendantCallFlow.md)
