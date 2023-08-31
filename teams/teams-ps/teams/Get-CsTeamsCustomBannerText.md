---
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-teamscustombannertext
---

# Get-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to configure a custom text on the banner displayed when compliance recording bots start recording the call. 

## SYNTAX

### Identity (Default)
```
Get-CsTeamsCustomBannerText [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION

Returns all or a single instance of custom banner text(s).


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

[Set-CsTeamsCustomBannerText](Set-CsTeamsCustomBannerText.md)

[New-CsTeamsCustomBannerText](New-CsTeamsCustomBannerText.md)

[Remove-CsTeamsCustomBannerText](Remove-CsTeamsCustomBannerText.md)
