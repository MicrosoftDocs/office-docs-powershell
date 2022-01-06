---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionTeamMap
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionteammap
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionTeamMap

## SYNOPSIS

This cmdlet supports retrieving the list of team mappings.

## SYNTAX

```
Get-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId <String> [<CommonParameters>]
```

## DESCRIPTION

Workforce management (WFM) systems have locations / sites that are mapped to a Microsoft Teams team for synchronization of shifts data.  This cmdlet shows the list of mapped teams inside the connection instance. Intance IDs can be found by running [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId "WCI-d1addd70-2684-4723-b8f2-7fa2230648c9"
```
```output
TeamId                               TeamName WfmTeamId WfmTeamName
------                               -------- --------- -----------
89ef4689-758c-4598-9206-3e23416da8c2          1000107
```

Returns the list of team mappings in the instance with ID `WCI-d1addd70-2684-4723-b8f2-7fa2230648c9`.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance.

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

[New-CsTeamsShiftsConnectionTeamMap](New-CsTeamsShiftsConnectionTeamMap.md)

[Remove-CsTeamsShiftsConnectionTeamMap](Remove-CsTeamsShiftsConnectionTeamMap.md)

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)
