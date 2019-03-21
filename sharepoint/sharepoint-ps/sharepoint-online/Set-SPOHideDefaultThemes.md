---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOHideDefaultThemes
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---

# Set-SPOHideDefaultThemes

## SYNOPSIS

Specifies whether the default themes should be available.

## DESCRIPTION

The **Set-SPOHideDefaultThemes** cmdlet is used to specify whether the default themes that come with SharePoint should be included in the theme picker list. For example, you might want to create custom themes for your sites and then remove the default themes to ensure that all pages use your custom themes.

After creating the `"Custom Cyan"` theme, hiding the default themes leaves only the one custom theme in the themes list under **Change the look**.

Specify the setting as either `$true` to hide the default themes, or `$false` (the default setting) to allow use of the default themes. 

> [!NOTE] 
> This cmdlet was named **Set-HideDefaultThemes** until the December 2017 release of the SPO Management Shell. We recommend that you use the latest version of the PowerShell cmdlets.

> [!TIP] 
> Allows you to hide or show **ALL**  default themes, no any particular ones.

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


## INPUTS

## OUTPUTS
## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOHideDefaultThemes](Get-SPOHideDefaultThemes.md)

