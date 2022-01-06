---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsShiftsConnectionBatchTeamMap
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectionbatchteammap
schema: 2.0.0
---

# New-CsTeamsShiftsConnectionBatchTeamMap

## SYNOPSIS

This cmdlet submits an operation connecting multiple Microsoft Teams teams and Workforce management (WFM) teams.

## SYNTAX

```
New-CsTeamsShiftsConnectionBatchTeamMap -ConnectorInstanceId <string> -TeamMapping <TeamMap[]> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet connects multiple Microsoft Teams teams and WFM teams to allow for asynchronization of shifts related data. It acts like an async batch request of [New-CsTeamsShiftsConnectionTeamMap](New-CsTeamsShiftsConnectionTeamMap.md). You can check the operation status by running [Get-CsTeamsShiftsConnectionOperation](Get-CsTeamsShiftsConnectionOperation.md).

## EXAMPLES

### Example 1
```powershell
PS C:\> $map1 = @{
teamId = 'eddc3b94-21d5-4ef0-a76a-2e4d6f4a50be'
wfmTeamId = 1000553
timeZone = "America/Los_Angeles"
}

$map2 = @{
teamId = '1d8f6288-0459-4c53-8e98-9de7b781844a'
wfmTeamId = 1000555
timeZone = "America/Los_Angeles"
}

New-CsTeamsShiftsConnectionBatchTeamMap -ConnectorInstanceId WCI-2afeb8ec-a0f6-4580-8f1e-85fd4a343e01 -TeamMapping @($map1, $map2)
```
```output
CreatedDateTime      LastActionDateTime   OperationId                          Status
---------------      ------------------   -----------                          ------
12/6/2021 7:28:51 PM 12/6/2021 7:28:51 PM c79131b7-9ecb-484b-a8df-2639c7c1e5f0 NotStarted
```

Sends 2 team mappings: one maps the Teams team with ID `eddc3b94-21d5-4ef0-a76a-2e4d6f4a50be` and WFM team with ID `1000553` and the other maps the Teams team with ID `1d8f6288-0459-4c53-8e98-9de7b781844a` and WFM team with ID `1000555` in the instance with ID `WCI-2afeb8ec-a0f6-4580-8f1e-85fd4a343e01`.

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

### -TeamMapping

The Teams mapping object list.

```yaml
Type: TeamMap[]
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
Please check the example section for the format of TeamMap.

## RELATED LINKS

[Get-CsTeamsShiftsConnectionOperation](Get-CsTeamsShiftsConnectionOperation.md)

[New-CsTeamsShiftsConnectionTeamMap](New-CsTeamsShiftsConnectionTeamMap.md)
