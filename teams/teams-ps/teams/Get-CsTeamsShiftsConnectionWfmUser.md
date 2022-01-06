---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionWfmUser
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionwfmuser
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionWfmUser

## SYNOPSIS

This cmdlet shows the list of Workforce management (WFM) users in a specified WFM team. 

## SYNTAX

```
Get-CsTeamsShiftsConnectionWfmUser -ConnectorInstanceId <string> -WfmTeamId <string> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the list of Workforce management (WFM) users in a specified WFM team. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionWfmUser -ConnectorInstanceId "WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b" -WfmTeamId "1000107"
```
```output
Id      Name
--      ----
1000111 FRPET
1000121 WAROS
1000123 LABRO
1000125 JOREE
1006068 maosha.shi
1006069 xiaoxue.chen
1006095 guchuan.sun
```

Returns the users in the WFM team with ID `1000107` in the connection instances with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance. It can be retrieved by running [Get-CsTeamsShiftsConnectionInstance](Get-CsTeamsShiftsConnectionInstance.md).

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

The Teams team ID. It can be retrieved by running [Get-CsTeamsShiftsConnectionWfmTeam](Get-CsTeamsShiftsConnectionWfmTeam.md).

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

[Get-CsTeamsShiftsConnectionWfmTeam](Get-CsTeamsShiftsConnectionWfmTeam.md)
