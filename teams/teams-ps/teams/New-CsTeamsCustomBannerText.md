---
Module Name: MicrosoftTeams
title: New-CsTeamsCustomBannerText
author: saleens7
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsCustomBannerText
schema: 2.0.0
---

# New-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to configure a custom text on the banner displayed when compliance recording bots start recording the call.

## SYNTAX

### Identity (Default)
```
New-CsTeamsCustomBannerText [[-Id] <Guid>] [<CommonParameters>]
```

## DESCRIPTION

Creates a single instance of a custom banner text.

## EXAMPLES

### Example 1

```powershell
PS C:\> New-CsTeamsCustomBannerText -Id 123e4567-e89b-12d3-a456-426614174000 -Description "Custom Banner Text Example" -Text "Custom Text"
```

This example creates an instance of TeamsCustomBannerText with the name CustomText.

## PARAMETERS

### -Id
The Identity of the CustomBannerText. You do not need to provide an ID as the backend will generate it for you. However, if you wish to provide your own ID, you can provide your own GUID. Note that you have to provide a unique ID for every CsTeamsCustomBannerText you create.

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
The text that the global admin would like to set in the policy.

```yaml
Type: String
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description that the global admin would like to set to identify what this text represents.

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
