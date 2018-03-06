---
external help file: 
applicable: SharePoint Online
title: Add-SPOSiteDesign
schema: 2.0.0
---

# Add-SPOSiteDesign

## SYNOPSIS

Creates a new site design available to users when they create a new site from the SharePoint home page.

## SYNTAX

```powershell
Add-SPOSiteDesign
  -Title <string>
  -WebTemplate <string>
  -SiteScripts <SPOSiteScriptPipeBind[]>
  [-Description <string>]
  [-PreviewImageUrl <string>]
  [-PreviewImageAltText <string>]
  [-IsDefault]
  [<CommonParameters>]
```

## PARAMETERS

|Parameter  | Description  |
|-----------|--------------|
|-Title                 | The display name of the site design. |
|-WebTemplate           | Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|-SiteScripts           | An array of one or more site scripts. Each is identified by an ID. The scripts will run in the order listed. |
|[-Description]         | The display description of site design. |
|[-PreviewImageUrl]     | The URL of a preview image. If none is specified SharePoint will use a generic image. |
|[-PreviewImageAltText] | The alt text description of the image for accessibility. |
|[-IsDefault]           | A switch that if provided, applies the site design to the default site template. For more information see [Customize a default site design](customize-default-site-design.md) |

## EXAMPLES

### Example 1

The following example creates a new site design.

```powershell
C:\> Add-SPOSiteDesign `
  -Title "Contoso customer tracking" `
  -WebTemplate "64" `
  -SiteScripts "<ID>" `
  -Description "Tracks key customer data in a list" `
  -PreviewImageUrl "https://contoso.sharepoint.com/SiteAssets/site-preview.png" `
  -PreviewImageAltText "site preview"
```
