---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositecollectionappcatalogs
applicable: SharePoint Online
title: Get-SPOSiteCollectionAppCatalogs
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPOSiteCollectionAppCatalogs

## SYNOPSIS

Use this cmdlet to get the Site Collection App Catalog.

## SYNTAX

```powershell
 Get-SPOSiteCollectionAppCatalogs [-Site] <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to get the Site Collection App Catalog. For more information, see [Use the App Catalog to make custom business apps available for your SharePoint environment](https://docs.microsoft.com/sharepoint/use-app-catalog)

## EXAMPLES

### Example 1

```powershell
 Get-SPOSiteCollectionAppCatalogs -Site https://contoso.sharepoint.com/sites/Research
```

This example returns the Site Collection App Catalog for the site <https://contoso.sharepoint.com/sites/Research.>

## PARAMETERS

### -Site

Url of the site

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
