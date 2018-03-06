---
external help file: 
applicable: SharePoint Online
title: Set-SPOSiteDesign
schema: 2.0.0
---

# Set-SPOSiteDesign

## SYNOPSIS

Updates a previously uploaded site design. 

## SYNTAX

```powershell
Set-SPOSiteDesign
  -Identity <SPOSiteDesignPipeBind[]>
  [-Title <string>]
  [-WebTemplate <string>]
  [-SiteScripts <SPOSiteScriptPipeBind[]>]
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

### -Title
The display name of the site design.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```
### -WebTemplate
Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### -SiteScripts 
An array of one or more site scripts. Each is identified by an ID. The scripts run in the order listed.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### [-Description]
The display description of the site design.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### [-PreviewImageUrl] 
The URL of a preview image. If none is specified, SharePoint uses a generic image.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### [-PreviewImageAltText] 
The alt text description of the image for accessibility.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### [-IsDefault]
A switch that if provided, applies the site design to the default site template. For more information, see [Customize a default site design](customize-default-site-design.md). 

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

## EXAMPLES

### Example 1 

The following example updates a previously created site design.

```powershell
C:\> Set-SPOSiteDesign `
  -Title "Contoso customer tracking - version 2" `
  -WebTemplate "68" `
  -Description "Updated site design for list schema that tracks key customer data in a list" `
  -PreviewImageUrl "https://contoso.sharepoint.com/SiteAssets/site-preview.png" `
  -PreviewImageAltText "site preview - version 2"
```