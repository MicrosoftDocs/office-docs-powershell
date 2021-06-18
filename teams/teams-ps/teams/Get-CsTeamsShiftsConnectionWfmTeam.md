---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionWfmTeam
author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionwfmteam
schema: 2.4.0
---

# Get-CsTeamsShiftsConnectionWfmTeam

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet supports retrieving the list of available WFM teams in the connection instance.

## SYNTAX

```
Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the available WFM teams that can be mapped in the connection instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionWfmTeam -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b"
```

Returns the WFM teams in the connection instance with ID WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance. You can retrive it by running [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md)

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

[Get-CsTeamsShiftsConnectionUser](Get-CsTeamsShiftsConnectionUser.md)
