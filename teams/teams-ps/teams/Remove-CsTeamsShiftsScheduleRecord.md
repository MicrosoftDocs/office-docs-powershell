---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsScheduleRecord
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsschedulerecord
schema: 2.0.0
---

# Remove-CsTeamsShiftsScheduleRecord

## SYNOPSIS

This cmdlet enqueues the clear schedule message.

## SYNTAX
```
Remove-CsTeamsShiftsScheduleRecord -TeamId <String> [[-DateRangeStartDate] <String>] -DateRangeEndDate <String> -ClearSchedulingGroup <Bool> -EntityType <String[]> [[-DesignatedActorId] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sends a request of removing Shifts schedule with specified time range.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsScheduleRecord -TeamId "eddc3b94-21d5-4ef0-a76a-2e4d632e50be" -DateRangeStartDate "2021-09-30T00:00:00" -DateRangeEndDate "2021-10-01T00:00:00" -ClearSchedulingGroup:$false -EntityType "swapRequest", "openShiftRequest" -DesignatedActorId "683af6f2-4f72-4770-b8e1-4ec31836156ad"
```

Removes the Shifts schedule record of swapRequest and openShiftRequest scenarios in the team with ID `eddc3b94-21d5-4ef0-a76a-2e4d632e50be` from 09/30/2021 to 10/01/2021.

## PARAMETERS

### -ClearSchedulingGroup
A value indicating whether to clear schedule group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateRangeEndDate
The end date of removing schedule record.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateRangeStartDate
The start date of removing schedule record.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignatedActorId
The user ID of designated actor.

```yaml
Type: String
Parameter Sets: RemoveExpanded
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntityType
The entity types.

```yaml
Type: String[]
Parameter Sets: RemoveExpanded
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
The Teams team ID where you want to remove schedule record.

```yaml
Type: String
Parameter Sets: RemoveExpanded
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
The parameters of start time, end time and designated actor ID are optional only when removing the schedule record of a linked team.

## RELATED LINKS
