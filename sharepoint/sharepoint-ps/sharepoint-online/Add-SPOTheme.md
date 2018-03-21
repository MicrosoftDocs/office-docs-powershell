---
external help file: 
applicable: SharePoint Online
title: Add-SPOTheme
schema: 2.0.0
---

# Add-SPOTheme

## SYNOPSIS

Creates a new custom theme, or overwrites an existing theme to modify its settings.

## DESCRIPTION

The **Add-SPOTheme** cmdlet creates a new theme or updates an existing theme. The color pallette settings can be passed as either a hash table or a dictionary.

Adding a theme does not apply the theme to any sites. It adds the theme to your tenant store, and then the theme is available in the list of themes under the **Change the look** option for modern pages.

## EXAMPLES

### Example 1

In this example, a new theme named `"Custom Cyan"` is created, with color pallette settings that are various shades of cyan. Note that the settings are passed as a hash table.

```powershell
$themepallette = @{
  "themePrimary" = "#00ffff";
  "themeLighterAlt" = "#f3fcfc";
  "themeLighter" = "#daffff";
  "themeLight" = "#affefe";
  "themeTertiary" = "#76ffff";
  "themeSecondary" = "#39ffff";
  "themeDarkAlt" = "#00c4c4";
  "themeDark" = "#009090";
  "themeDarker" = "#005252";
  "neutralLighterAlt" = "#f8f8f8";
  "neutralLighter" = "#f4f4f4";
  "neutralLight" = "#eaeaea";
  "neutralQuaternaryAlt" = "#dadada";
  "neutralQuaternary" = "#d0d0d0";
  "neutralTertiaryAlt" = "#c8c8c8";
  "neutralTertiary" = "#a6a6a6";
  "neutralSecondaryAlt" = "#767676";
  "neutralSecondary" = "#666666";
  "neutralPrimary" = "#333";
  "neutralPrimaryAlt" = "#3c3c3c";
  "neutralDark" = "#212121";
  "black" = "#000000";
  "white" = "#fff";
  "primaryBackground" = "#fff";
  "primaryText" = "#333"
 }

Add-SPOTheme -Name "Custom Cyan" -Palette $themepallette -IsInverted $false
```

> [!NOTE]
> Prior to the December 2017 release of the SPO Management Shell, the **Add-SPOTheme** cmdlet required that color pallette settings be passed as a dictionary. We recommend that you use the latest version of the SPO Management Shell; however, the following `HashToDictionary` function can be used to convert a hash table to a dictionary if needed.
>
> ```
> function HashToDictionary {
>  Param ([Hashtable]$ht)
>  $dictionary = New-Object "System.Collections.Generic.Dictionary``2[System.String,System.String]"
>  foreach ($entry in $ht.GetEnumerator()) {
>    $dictionary.Add($entry.Name, $entry.Value)
>  }
>  return $dictionary
> }
> ```


### Example 2

If you want to update an existing theme (to modify some of its color settings, for example), use the same syntax as shown previously, but add the `-Overwrite` flag to the **Add-SPOTheme** cmdlet.

```powershell
Add-SPOTheme -Name "Custom Cyan" -Palette $themepallette -IsInverted $false -Overwrite
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS