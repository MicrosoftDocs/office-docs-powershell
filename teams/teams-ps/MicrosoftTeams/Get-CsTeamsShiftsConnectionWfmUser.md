---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectionwfmuser
schema: 2.0.0
title: Get-CsTeamsShiftsConnectionWfmUser
---

# Get-CsTeamsShiftsConnectionWfmUser

## SYNOPSIS

This cmdlet shows the list of Workforce management (WFM) users in a specified WFM team.

## SYNTAX

```powershell
Get-CsTeamsShiftsConnectionWfmUser -ConnectorInstanceId <string> -WfmTeamId <string> -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
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
1006068 ABC
1006069 XYZ
1006095 DEF
```

Returns the users in the WFM team with ID `1000107` in the connection instances with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

## PARAMETERS

### -ConnectorInstanceId

> Applicable: Microsoft Teams

The ID of the connection instance. It can be retrieved by running [Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectioninstance).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

The identity parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WfmTeamId

> Applicable: Microsoft Teams

The Teams team ID. It can be retrieved by running [Get-CsTeamsShiftsConnectionWfmTeam](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectionwfmteam).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
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

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectioninstance)

[Get-CsTeamsShiftsConnectionWfmTeam](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectionwfmteam)
