---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOSiteCollectionAppCatalogs
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Get-SPOSiteCollectionAppCatalogs

## SYNOPSIS

.

## SYNTAX

```powershell
 Get-SPOSiteCollectionAppCatalogs [-Site] <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to get the Site Collection App Catalogs.

## EXAMPLES

### Example 1

```powershell
 Get-SPOSiteCollectionAppCatalogs -Site https://contoso.sharepoint.com/sites/Research
```

This example returns the Site Collection App Catalog for the site https://contoso.sharepoint.com/sites/Research.

### Example 2

```powershell
 Get-SPOSiteCollectionAppCatalogs
```

This example returns all Site Collection App Catalogs.

## PARAMETERS

### -Site

.

```yaml
Type: SpoSitePipeBind
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

## NOTES
