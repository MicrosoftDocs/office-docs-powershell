---
Module Name: MicrosoftTeams
title: Get-CsTeamsCustomBannerText
author: wblocker
ms.author: 
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsCustomBannerText
schema: 2.0.0
---

# Set-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to configure a custom text on the banner displayed when compliance recording bots start recording the call. 

## SYNTAX

### Identity (Default)
```
Set-CsTeamsCustomBannerText [[-Id] <Guid>] [<CommonParameters>]
```

## DESCRIPTION

Updates a single instance of custom banner text.

## EXAMPLES

### Example 1
PS C:\> Set-CsTeamsCustomBannerText -Identity CustomText
```

Sets the properties of the CustomText instance of TeamsCustomBannerText.

## PARAMETERS

### -Id
The Identity of the CustomBannerText.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Text
The text that the tenant admin would like to set in policy.

```yaml
Type: String
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description that the tenant admin would like to set to identify what this text represents.

```yaml
Type: String
Position: Named
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
