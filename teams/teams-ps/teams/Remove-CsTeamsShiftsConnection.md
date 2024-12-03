---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsConnection
author: sofiamaniou
ms.author: serdars
manager: stepfitz
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnection
schema: 2.0.0
---

# Remove-CsTeamsShiftsConnection

## SYNOPSIS

This cmdlet deletes a Shifts connection.

## SYNTAX

```
Remove-CsTeamsShiftsConnection -ConnectionId <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet deletes a connection. All available connections can be found by running [Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection).

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsConnection -ConnectionId 43cd0e23-b62d-44e8-9321-61cb5fcfae85
```

Deletes the connection with ID `43cd0e23-b62d-44e8-9321-61cb5fcfae85`.

## PARAMETERS

### -ConnectionId

The ID of the connection that you want to delete.

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

[Get-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnection)

[New-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftsconnection)

[Set-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsconnection)
