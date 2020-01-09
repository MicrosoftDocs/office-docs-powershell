---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOSiteScriptFromWeb
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Get-SPOSiteScriptFromWeb

## SYNOPSIS

Creates site script syntax from an existing SharePoint site.

## SYNTAX

```powershell
Get-SPOSiteScriptFromWeb [-WebUrl] <string> [-IncludedLists <string[]>] [-IncludeBranding] [-IncludeTheme] [-IncludeRegionalSettings] [-IncludeSiteExternalSharingCapability] [-IncludeLinksToExportedItems] [<CommonParameters>]
```

## DESCRIPTION

Uses an existing SharePoint site to output a JSON blob that can be used to create a site script for use in a site design.

## EXAMPLES

### Example 1

This example creates the site script output from an existing site - and writes it to a variable. This variable is then referenced to create a site script.

```powershell
C:\> $extracted = Get-SPOSiteScriptFromWeb `
    -WebUrl https://contoso.sharepoint.com/sites/template `
    -IncludeBranding `
    -IncludeTheme `
    -IncludeRegionalSettings ` 
    -IncludeSiteExternalSharingCapability ` 
    -IncludeLinksToExportedItems ` 
    -IncludedLists ("Shared Documents", "Lists/Project Activities")
C:\> Add-SPOSiteScript `
    -Title "Contoso template site" `
    -Description "This is a copy of a site collection." `
    -Content $extracted
```

## PARAMETERS

### -WebUrl

The url that starts with HTTPS of the site to retrieve the site script.

```yaml
Type: string
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedLists

An array of one or more lists. Each is identified by the list url.

```yaml
Type: string[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeBranding

A switch that if provided, extracts the configuration of the site's branding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeTheme

A switch that if provided, extracts the site's custom theme by using the themeJson property.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeRegionalSettings

A switch that if provided, extracts the site's regional settings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSiteExternalSharingCapability

A switch that if provided, extracts the site's external sharing capability.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeLinksToExportedItems

A switch that if provided, extracts navigation links. In order to export navigation links pointing to lists, the list needs to be included in the request as well.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).
