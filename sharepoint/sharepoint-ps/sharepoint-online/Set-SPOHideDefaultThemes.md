---
external help file: 
applicable: SharePoint Online
title: Set-SPOHideDefaultThemes
schema: 2.0.0
---

# Set-SPOHideDefaultThemes

## SYNOPSIS

Specifies whether the default themes should be available.

## DESCRIPTION

The **Set-SPOHideDefaultThemes** cmdlet is used to specify whether the default themes that come with SharePoint should be included in the theme picker list. For example, you might want to create custom themes for your sites and then remove the default themes to ensure that all pages use your custom themes.

After creating the `"Custom Cyan"` theme, hiding the default themes leaves only the one custom theme in the themes list under **Change the look**.

Specify the setting as either `$true` to hide the default themes, or `$false` (the default setting) to allow use of the default themes. 

Note that this cmdlet was named **Set-HideDefaultThemes** until the December 2017 release of the SPO Management Shell. We recommend that you use the latest version of the PowerShell cmdlets.

## EXAMPLES

### Example 1

In this example, the cmdlet hides the default themes.

```
Set-SPOHideDefaultThemes $true
```

### Example 2

In this example, the cmdlet restores the default themes to the theme picker list.

```
Set-SPOHideDefaultThemes $false
```


## INPUTS

## OUTPUTS

