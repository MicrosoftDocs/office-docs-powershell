---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-teamsshiftspolicy
schema: 2.0.0
---

# Get-CsTeamsCustomBannerText

## SYNOPSIS


## SYNTAX

### Identity (Default)
```
Get-CsTeamsCustomBannerText [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION



## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsCustomBannerText
```

Gets the properties of all instances of the TeamsCustomBannerText.

### Example 2
```powershell
PS C:\> Get-CsTeamsCustomBannerText -Identity CustomText
```

Gets the properties of the CustomText instance of the TeamsShiftPolicy.

## PARAMETERS

### -Identity
Policy instance name. Optional.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CsTeamsShiftsPolicy](Set-CsTeamsShiftsPolicy.md)

[New-CsTeamsShiftsPolicy](New-CsTeamsShiftsPolicy.md)

[Remove-CsTeamsShiftsPolicy](Remove-CsTeamsShiftsPolicy.md)

[Grant-CsTeamsShiftsPolicy](Grant-CsTeamsShiftsPolicy.md)
