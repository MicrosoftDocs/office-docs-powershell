---
author: saleens7
Locale: en-US
Module Name: MicrosoftTeams
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsTeamsCustomBannerText
schema: 2.0.0
title: Set-CsTeamsCustomBannerText
---

# Set-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to update a configured custom text on the banner displayed when compliance recording bots start recording the call.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsCustomBannerText [-Id <Guid>] [-Text <String>] [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION

Updates a single instance of custom banner text.

## EXAMPLES

### Example 1

```
PS C:\> Set-CsTeamsCustomBannerText -Id 123e4567-e89b-12d3-a456-426614174000 -Description "Custom Banner Text Example" -Text "Custom Text"
```

This example sets the properties of the CustomText instance of TeamsCustomBannerText.

## PARAMETERS

### -Description
The description that you would like to set to identify what this text represents.

```yaml
Type: String
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id

> Applicable: Microsoft Teams

The Identity of the CustomBannerText.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Text
The text that you would like to set in the policy.

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

[Set-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/set-csteamscustombannertext)

[New-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/new-csteamscustombannertext)

[Remove-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/remove-csteamscustombannertext)
