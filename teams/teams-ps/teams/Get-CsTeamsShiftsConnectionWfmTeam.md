---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionWfmTeam
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionwfmteam
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionWfmTeam

## SYNOPSIS

This cmdlet supports retrieving the list of available Workforce management (WFM) teams in the connection instance.

## SYNTAX

```
Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the WFM teams that are not currently mapped to a Microsoft Teams team, and thus can be mapped to a Microsoft Teams team in the connection instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b"
```
```output
Id      Name
--      ----
1000105 0002 - Bucktown
1000106 0003 - West Town
1000107 0005 - Old Town
1000108 0004 - River North
1000109 0001 - Wicker Park
1000111 2055
1000112 2056
1000114 1004
1000115 1003
1000116 1002
1000122 0010
1000124 0300
1000125 1000
1000126 4500
1000128 0006 - WFM Team 1
1000129 Test
```

Returns the WFM teams in the connection instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance. You can retrive it by running [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md).

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

[Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

[Get-CsTeamsShiftsConnectionWfmUser](Get-CsTeamsShiftsConnectionWfmUser.md)
