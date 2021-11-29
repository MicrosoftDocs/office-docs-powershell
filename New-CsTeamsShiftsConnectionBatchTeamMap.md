---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsShiftsConnectionBatchTeamMap
author: rkeury
ms.author: rkeury
manager: stepfitz
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectionbatchteammap
schema: 2.0.0
---

# New-CsTeamsShiftsConnectionBatchTeamMap

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet connects a collection of Microsoft Teams teams to Workforce management (WFM) teams.

## SYNTAX

```
New-CsTeamsShiftsConnectionBatchTeamMap -ConnectorInstanceId <string> -TeamMappings <TeamMappings[]> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet connects a collection of Microsoft Teams teams and a WFM teams to allow for synchronization of shifts related data.

## EXAMPLES

### Example 1
```powershell
PS C:\> $team_mappings = 
"[
    {"teamId": "537c234c-7418-4426-9179-4180aee4544a", "wfmTeamId": "1000107", "timeZone": "America/Los_Angeles"}, 
    {"teamId": "4ba546e6-e28d-4645-8cc1-d3575ef9d266", "wfmTeamId": "1000108", "timeZone": "America/Los_Angeles"}
]"
PS C:\> New-CsTeamsShiftsConnectionBatchTeamMap -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b" -TeamMappings $team_mappings
```
```output
OperationId                               CreatedDateTime            LastActionDateTime        Status
-----------                               ---------------            ------------------        ------
e640a5c9-c74f-4df7-b62e-4b01ae878bdc      1/30/2020 3:21:07 PM       3/23/2020 2:51:17 PM      NotStarted 
```

Maps the Teams team with ID `30b625bd-f0f7-4d5c-8793-9ccef5a63119` and WFM team with ID `1000107` in the instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`. Also maps the Teams team with ID `4ba546e6-e28d-4645-8cc1-d3575ef9d266` and WFM team with ID `1000108` in the instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

## PARAMETERS

### -ConnectorInstanceId

The connection instance ID used to map teams.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId

The Teams team ID mapped.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WfmTeamId

The WFM team ID mapped.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone

The team's time zone.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionTeamMap](Get-CsTeamsShiftsConnectionTeamMap.md)

[New-CsTeamsShiftsConnectionTeamMap](New-CsTeamsShiftsConnectionTeamMap.md)

[Get-CsTeamsShiftsConnectionOperation](Get-CsTeamsShiftsConnectionOperation.md)
