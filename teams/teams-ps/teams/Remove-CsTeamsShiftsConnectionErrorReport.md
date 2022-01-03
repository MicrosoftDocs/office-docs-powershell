---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Remove-CsTeamsShiftsConnectionErrorReport
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/remove-csteamsshiftsconnectionerrorreport
schema: 2.0.0
---

# Remove-CsTeamsShiftsConnectionErrorReport

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet deletes an error report.

## SYNTAX

```
Remove-CsTeamsShiftsConnectionErrorReport -ErrorReportId <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet deletes an error report. All available instances can be found by running [Get-CsTeamsShiftsConnectionErrorReport](Get-CsTeamsShiftsConnectionErrorReport.md).

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsConnectionErrorReport -ErrorReportId 18b3e490-e6ed-4c2e-9925-47e36609dff3
```

Deletes the error report with ID `18b3e490-e6ed-4c2e-9925-47e36609dff3`.

## PARAMETERS

### -ErrorReportId

The ID of the error report that you want to delete.

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

[Get-CsTeamsShiftsConnectionErrorReport](Get-CsTeamsShiftsConnectionErrorReport.md)
