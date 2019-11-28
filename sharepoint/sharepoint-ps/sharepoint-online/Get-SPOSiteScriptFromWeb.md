---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
title: Get-SPOSiteScriptFromWeb
schema: 2.0.0
author: Jarbas Horst
---

# Get-SPOSiteScriptFromWeb

## SYNOPSIS
Creates site script syntax from an existing SharePoint site.

## SYNTAX

```powershell
Get-SPOSiteScriptFromWeb
  -WebUrl <String> 
  [-IncludedLists <String[]>] 
  [-IncludeBranding] 
  [-IncludeTheme]
  [-IncludeRegionalSettings] 
  [-IncludeSiteExternalSharingCapability] 
  [-IncludeLinksToExportedItems]
  [<CommonParameters>]
```

>**Note:** At least one **include** parameter must be provided when using this PowerShell command, otherwise the request fails.

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
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

>**Note:** You will get a warning message if the site is not themed.

### -IncludeRegionalSettings
A switch that if provided, extracts the site's regional settings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedLists
An array of one or more lists. Each is identified by the list url.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

>**Note:** Extraction fails if provided list url doesn't exist.
