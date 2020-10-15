---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/remove-teamsshiftspolicy
schema: 2.0.0
---

# Remove-CsTeamsShiftsPolicy

## SYNOPSIS

Remove the TeamsShiftPolicy for a user.

Note: the command will return immediately, but the Teams application will not reflect the update immediately. The Teams application may need to be open for up to an hour before changes are reflected.

## SYNTAX

```
Remove-CsTeamsShiftsPolicy [-Identity] <XdsIdentity> [<CommonParameters>]
```

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsShiftsPolicy -Identity IsaiahL
```

In this example, the TeamsShiftsPolicy assigned to the user "IsaiahL" is removed.

## PARAMETERS

### -Identity
UserId or user's email id.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

[Get-CsTeamsShiftsPolicy](Get-CsTeamsShiftsPolicy.md)

[New-CsTeamsShiftsPolicy](New-CsTeamsShiftsPolicy.md)

[Set-CsTeamsShiftsPolicy](Set-CsTeamsShiftsPolicy.md)

[Grant-CsTeamsShiftsPolicy](Grant-CsTeamsShiftsPolicy.md)
