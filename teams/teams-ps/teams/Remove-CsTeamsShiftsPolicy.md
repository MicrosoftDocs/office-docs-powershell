---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-teamsshiftspolicy
title: Remove-CsTeamsShiftsPolicy
schema: 2.0.0
---

# Remove-CsTeamsShiftsPolicy

## SYNOPSIS

The `Remove-CsTeamsShiftsPolicy` cmdlet removes a previously created TeamsShiftsPolicy.

Note: A TeamsShiftsPolicy needs to be unassigned from all the users before it can be deleted.

## SYNTAX

```
Remove-CsTeamsShiftsPolicy [-Identity] <XdsIdentity> [<CommonParameters>]
```

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsPolicy -Identity OffShiftAccess_WarningMessage1_AlwaysShowMessage
```

In this example, the policy instance to be removed is called "OffShiftAccess_WarningMessage1_AlwaysShowMessage".

## PARAMETERS

### -Identity
Policy instance name.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftspolicy)

[New-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftspolicy)

[Set-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftspolicy)

[Grant-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsshiftspolicy)
