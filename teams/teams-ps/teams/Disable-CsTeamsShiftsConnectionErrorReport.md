---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Disable-CsTeamsShiftsConnectionErrorReport
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/disable-csteamsshiftsconnectionerrorreport
schema: 2.0.0
---

# Disable-CsTeamsShiftsConnectionErrorReport

## SYNOPSIS

This cmdlet disables an error report.

## SYNTAX

```
Disable-CsTeamsShiftsConnectionErrorReport -ErrorReportId <String> [<CommonParameters>]
```

## DESCRIPTION

**Note:** This cmdlet is currently in public preview.

This cmdlet disables an error report. All available instances can be found by running [Get-CsTeamsShiftsConnectionErrorReport](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionerrorreport).

## EXAMPLES

### Example 1
```powershell
PS C:\> Disable-CsTeamsShiftsConnectionErrorReport -ErrorReportId 18b3e490-e6ed-4c2e-9925-47e36609dff3
```

Disables the error report with ID `18b3e490-e6ed-4c2e-9925-47e36609dff3`.

## PARAMETERS

### -ErrorReportId

> Applicable: Microsoft Teams

The ID of the error report that you want to disable.

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

[Get-CsTeamsShiftsConnectionErrorReport](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionerrorreport)
