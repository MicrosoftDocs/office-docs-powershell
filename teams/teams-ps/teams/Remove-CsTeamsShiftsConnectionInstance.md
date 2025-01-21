---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsConnectionInstance
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# Remove-CsTeamsShiftsConnectionInstance

## SYNOPSIS

This cmdlet deletes a Shifts connection instance.

## SYNTAX

```
Remove-CsTeamsShiftsConnectionInstance -ConnectorInstanceId <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet deletes a connection instance. All available instances can be found by running [Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance).

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsConnectionInstance -ConnectorInstanceId WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b
```

Deletes the connection instance with ID `WCI-4c231dd2-4451-45bd-8eea-bd68b40bab8b`.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance)

[Set-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnectioninstance)

[Remove-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnectioninstance)
