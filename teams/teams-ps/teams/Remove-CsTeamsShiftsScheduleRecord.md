---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsScheduleRecord
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/remove-csteamsshiftsschedulerecord
schema: 2.0.0
---

# Remove-CsTeamsShiftsScheduleRecord

## SYNOPSIS
Note: This cmdlet is currently in private preview.
This cmdlet enqueues the clear schedule message

## SYNTAX
```
Remove-CsTeamsShiftsScheduleRecord -TeamId <string> -DateRangeStartDate <string> -DateRangeEndDate <string> -ClearSchedulingGroup <bool> -EntityType <string[]> -DesignatedActorId <string> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sends a request of removing Shifts schedule with specified time range

## EXAMPLES

### Example 1
```powershell
Remove-CsTeamsShiftsScheduleRecord -TeamId "eddc3b94-21d5-4ef0-a76a-2e4d632e50be" -DateRangeStartDate "2021-09-30T00:00:00" -DateRangeEndDate "2021-10-01T00:00:00" -ClearSchedulingGroup:$false -EntityType "swapRequest", "openShiftRequest" -DesignatedActorId "683af6f2-4f72-4770-b8e1-4ec31836156ad"
```

Removes the Shifts schedule record of swapReqeust and openShiftRequest scenarios in the team with ID `eddc3b94-21d5-4ef0-a76a-2e4d632e50be` from 09/30/2021 to 10/01/2021

## PARAMETERS

### -ClearSchedulingGroup
Gets or sets a value indicating whether to clear schedule group

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateRangeEndDate

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
Gets or sets the entity types.

```yaml
Type: String[]
Parameter Sets: RemoveExpanded
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
Gets or sets the team identifier.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

