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
  [-Title <string>]
  [-WebTemplate <string>]
  [-SiteScripts <SPOSiteScriptPipeBind[]>]
  [-Description <string>]
  [-PreviewImageUrl <string>]
  [-PreviewImageAltText <string>]
  [-IsDefault]
  [<CommonParameters>]
```

## EXAMPLES

### Example 1 

This example updates a previously created site design.

```powershell
C:\> Set-SPOSiteDesign `
  -Title "Contoso customer tracking - version 2" `
  -WebTemplate "68" `
  -Description "Updated site design for list schema that tracks key customer data in a list" `
  -PreviewImageUrl "https://contoso.sharepoint.com/SiteAssets/site-preview.png" `
  -PreviewImageAltText "site preview - version 2"
```

## PARAMETERS

### -Title
The display name of the site design.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -WebTemplate
Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -SiteScripts 
An array of one or more site scripts. Each is identified by an ID. The scripts run in the order listed.

```yaml
Type: SPOSiteScriptPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Description
The display description of the site design.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -PreviewImageUrl 
The URL of a preview image. If none is specified, SharePoint uses a generic image.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -PreviewImageAltText
The alt text description of the image for accessibility.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -IsDefault
A switch that if provided, applies the site design to the default site template. For more information, see [Customize a default site design](customize-default-site-design.md). 

```yaml
Type: CommonParameters
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS