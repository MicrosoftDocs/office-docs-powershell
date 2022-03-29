---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsShiftsConnectionTeamMap
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectionteammap
schema: 2.0.0
---

# New-CsTeamsShiftsConnectionTeamMap

## SYNOPSIS

This cmdlet connects a Microsoft Teams team and a Workforce management (WFM) team.

## SYNTAX

```
New-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId <string> -TeamId <string> -TimeZone <string> -WfmTeamId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet connects a Microsoft Teams team and a WFM team to allow for synchronization of shifts related data.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b" -TeamId 30b625bd-f0f7-4d5c-8793-9ccef5a63119 -TimeZone "America/Los_Angeles" -WfmTeamId "1000107"
```
```output
TeamId                               TeamName WfmTeamId WfmTeamName
------                               -------- --------- -----------
30b625bd-f0f7-4d5c-8793-9ccef5a6311          1000107
```

Maps the Teams team with ID `30b625bd-f0f7-4d5c-8793-9ccef5a63119` and WFM team with ID `1000107` in the instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

In case of error, we can capture the error response as following:

* Hold the cmdlet output in a variable: `$result=<CMDLET>`

* To get the entire error message in Json: `$result.ToJsonString()`

* To get the error object and object details: `$result, $result.Detail`

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

[Remove-CsTeamsShiftsConnectionTeamMap](Remove-CsTeamsShiftsConnectionTeamMap.md)
