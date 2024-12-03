---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsConnectionTeamMap
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnectionteammap
schema: 2.0.0
---

# Remove-CsTeamsShiftsConnectionTeamMap

## SYNOPSIS

This cmdlet removes the mapping between the Microsoft Teams team and workforce management (WFM) team.

## SYNTAX

```
Remove-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId <String> -TeamId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet removes the mapping between the Microsoft Teams team and WFM team. All team mappings can be found by running [Get-CsTeamsShiftsConnectionTeamMap](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionteammap).

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsConnectionTeamMap -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b" -TeamId "30b625bd-f0f7-4d5c-8793-9ccef5a63119"
```

Unmaps the Teams team with ID "30b625bd-f0f7-4d5c-8793-9ccef5a63119" in the instance with ID "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b".

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance that you want to delete.

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

The ID of the connection instance that you want to delete.

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

[Get-CsTeamsShiftsConnectionTeamMap](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionteammap)

[New-CsTeamsShiftsConnectionBatchTeamMap](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnectionbatchteammap)
