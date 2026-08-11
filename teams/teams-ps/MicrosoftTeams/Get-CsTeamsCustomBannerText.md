---
author: saleens7
Locale: en-US
Module Name: MicrosoftTeams
ms.author: wblocker
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamscustombannertext
schema: 2.0.0
title: Get-CsTeamsCustomBannerText
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

> Applicable: Microsoft Teams

Policy instance name (optional).

```yaml
Type: String
Parameter Sets: Identity
Aliases:
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

[Set-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscustombannertext)

[New-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscustombannertext)

[Remove-CsTeamsCustomBannerText](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamscustombannertext)
