---
Module Name: MicrosoftTeams
title: Get-CsTeamsCustomBannerText
author: saleens7
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsCustomBannerText
schema: 2.0.0
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

Returns all or a single instance of custom banner text.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsCustomBannerText
```

This example gets the properties of all instances of the TeamsCustomBannerText.

### Example 2
```powershell
PS C:\> Get-CsTeamsCustomBannerText -Identity CustomText
```

This example gets the properties of the CustomText instance of TeamsCustomBannerText.

## PARAMETERS

### -Identity
Policy instance name (optional).

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

[Set-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/set-csteamscustombannertext)

[New-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/new-csteamscustombannertext)

[Remove-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/teams/remove-csteamscustombannertext)
