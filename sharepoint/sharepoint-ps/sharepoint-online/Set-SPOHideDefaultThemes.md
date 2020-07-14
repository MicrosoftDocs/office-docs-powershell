---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spohidedefaultthemes
applicable: SharePoint Online
title: Set-SPOHideDefaultThemes
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOHideDefaultThemes

## SYNOPSIS

Specifies whether the default themes should be available.

## SYNTAX

```powershell
Set-SPOHideDefaultThemes [-HideDefaultThemes] <Boolean> [<CommonParameters>]
```

## DESCRIPTION

The **Set-SPOHideDefaultThemes** cmdlet is used to specify whether the default themes that come with SharePoint should be included in the theme picker list. For example, you might want to create custom themes for your sites and then remove the default themes to ensure that all pages use your custom themes.

After creating the `"Custom Cyan"` theme, hiding the default themes leaves only the one custom theme in the themes list under **Change the look**.

Specify the setting as either `$true` to hide the default themes, or `$false` (the default setting) to allow use of the default themes.

> [!NOTE]
> This cmdlet was named **Set-HideDefaultThemes** until the December 2017 release of the SPO Management Shell. We recommend that you use the latest version of the PowerShell cmdlets.
> [!TIP]
> Allows you to hide or show **ALL** default themes, no any particular ones.
> [!NOTE]
> This cmdlet hides the default themes on **Modern Sites**. You cannot hide the default themes on Classic Sites.

## EXAMPLES

### Example 1

In this example, the cmdlet hides the default themes.

```powershell
Set-SPOHideDefaultThemes $true
```

### Example 2

In this example, the cmdlet restores the default themes to the theme picker list.

```powershell
Set-SPOHideDefaultThemes $false
```

## PARAMETERS

### -HideDefaultThemes

Determines whether to hide the default themes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOHideDefaultThemes](Get-SPOHideDefaultThemes.md)
