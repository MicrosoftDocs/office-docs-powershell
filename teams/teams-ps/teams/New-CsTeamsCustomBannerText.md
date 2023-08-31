---
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-teamscustombannertext
---

# Get-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to configure a custom text on the banner displayed when compliance recording bots start recording the call. 

## SYNTAX

### Identity (Default)
```
New-CsTeamsCustomBannerText [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION

Creates a single instance of a custom banner text.

## EXAMPLES

### Example 1

```powershell
PS C:\> New-CsTeamsCustomBannerText -Identity CustomText
```

Creates an instance of TeamsCustomBannerText with the name CustomText.

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
