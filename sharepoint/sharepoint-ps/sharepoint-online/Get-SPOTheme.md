---
external help file: 
applicable: SharePoint Online
title: Get-SPOTheme
schema: 2.0.0
---

# Get-SPOTheme

## SYNOPSIS

Retrieves settings for an existing theme.

## DESCRIPTION

The **Get-SPOTheme** cmdlet returns the settings for a named existing theme, or for all uploaded themes if no name is provided.

## EXAMPLES

### Example 1

This example shows how to use the **Get-SPOTheme** cmdlet to return the settings for the `"Custom Cyan"` theme created in the example for the **Add-SPOTheme** cmdlet. Note that this example uses the PowerShell `ConvertTo-Json` filter to display the theme in JSON format.

```
Get-SPOTheme -Name "Custom Cyan" | ConvertTo-Json
```


```
{
    "Name":  "Custom Cyan",
    "Palette":  {
                    "themeLight":  "#affefe",
                    "themeTertiary":  "#76ffff",
                    "black":  "#000000",
                    "neutralSecondary":  "#666666",
                    "neutralTertiaryAlt":  "#c8c8c8",
                    "themeSecondary":  "#39ffff",
                    "themeDarker":  "#005252",
                    "primaryBackground":  "#fff",
                    "neutralQuaternary":  "#d0d0d0",
                    "neutralPrimaryAlt":  "#3c3c3c",
                    "neutralPrimary":  "#333",
                    "themeDark":  "#009090",
                    "themeLighter":  "#daffff",
                    "neutralTertiary":  "#a6a6a6",
                    "neutralQuaternaryAlt":  "#dadada",
                    "themeLighterAlt":  "#f3fcfc",
                    "white":  "#fff",
                    "neutralSecondaryAlt":  "#767676",
                    "neutralLighter":  "#f4f4f4",
                    "neutralLight":  "#eaeaea",
                    "neutralDark":  "#212121",
                    "themeDarkAlt":  "#00c4c4",
                    "neutralLighterAlt":  "#f8f8f8",
                    "primaryText":  "#333",
                    "themePrimary":  "#00ffff"
                },
    "IsInverted":  false
}
```

### Example 2

To return all uploaded themes, use the **Get-SPOTheme** command with no arguments.

```
Get-SPOTheme
```

<!--(Commenting out this image because I don't see a way to have images in this location) 

This is an example of the output from this command.

![Get-SPOTheme example](../../images/Get-SPOTheme-example.png)-->

## INPUTS

## OUTPUTS

