---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version:
schema: 2.0.0
---

# Get-StaffHubShifts

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Get details of shifts for all team members or for a specified team member for the given time window.

## SYNTAX

```
Get-StaffHubShifts [-TeamId] <String> [-StartDateTime] <DateTime> [-EndDateTime] <DateTime>
 [[-MemberId] <String>] [<CommonParameters>]
```

## DESCRIPTION
Get details of the shifts for all team members or for a specified team member

## EXAMPLES

### Example 1
```
$startTime = Get-Date -Date "2018-01-01T00:10:00"
$endTime = Get-Date -Date "2018-01-01T04:10:00"
Get-StaffHubShifts -TeamId "TEAM_1234" -StartDateTime $startTime -EndDateTime $endTime -MemberId MBER_1234
```
Get the details of the shifts for MBER_1234 in the team TEAM_1234 between start time and end time

### Example 2
```
$startTime = Get-Date -Date "2018-01-01T00:10:00"
$endTime = Get-Date -Date "2018-01-01T04:10:00"
Get-StaffHubShifts -TeamId "TEAM_1234" -StartDateTime $startTime -EndDateTime $endTime
```

Get the details of the shifts for all the members in team TEAM_1234 between start time and end time

## PARAMETERS

### -EndDateTime
EndDateTime for the time window between which shifts are to be fetched

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberId
MemberId of the member for which the shifts are to be fetched

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDateTime
StartDateTime for the time window between which shifts are to be fetched

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
TeamId of the team for which the shifts are to be fetched

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
