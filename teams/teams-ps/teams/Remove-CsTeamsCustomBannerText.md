---
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/Remove-CsTeamsCustomBannerText
title: Remove-CsTeamsCustomBannerText
schema: 2.0.0
author: saleens7
ms.author: wblocker
---

# Remove-CsTeamsCustomBannerText

## SYNOPSIS

Enables administrators to remove a custom banner text configuration that is displayed when compliance recording bots start recording the call.

## SYNTAX

### Identity (Default)
```
Remove-CsTeamsCustomBannerText [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION

Removes a single instance of custom banner text.

## EXAMPLES

### Example 1
PS C:\> Remove-CsTeamsCustomBannerText -Identity CustomText
```

This example removes a TeamsCustomBannerText instance with the name "CustomText".

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
