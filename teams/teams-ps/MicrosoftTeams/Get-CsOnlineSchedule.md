---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineschedule
schema: 2.0.0
title: Get-CsOnlineSchedule
---

# Get-CsOnlineSchedule

## SYNOPSIS
Use the Get-CsOnlineSchedule cmdlet to get information about schedules that belong to your organization.

## SYNTAX

```
Get-CsOnlineSchedule -Id <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineSchedule cmdlet returns information about the schedules in your organization.

## EXAMPLES

### Example 1
```
Get-CsOnlineSchedule
```

This example retrieves all schedules that belong to your organization.

### Example 2
```
Get-CsOnlineSchedule -Id "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

This example gets the schedules that has the Id of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

## PARAMETERS

### -Id

> Applicable: Microsoft Teams

The Id for the schedule to be retrieved. If this parameter is not specified, then all schedules in the organization are returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
The Get-CsOnlineSchedule cmdlet accepts a string as the Id parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.Schedule

## NOTES

## RELATED LINKS

[New-CsOnlineTimeRange](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetimerange)

[New-CsOnlineDateTimeRange](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedatetimerange)

[New-CsAutoAttendantCallFlow](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallflow)
