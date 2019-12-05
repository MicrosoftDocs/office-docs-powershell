---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Add-SPOSiteCollectionAppCatalog
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Add-SPOSiteCollectionAppCatalog

## SYNOPSIS

Adds a Site Collection scoped App Catalog to a site

## SYNTAX

```powershell
Add-SPOSiteCollectionAppCatalog -Site <SpoSitePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to .

## EXAMPLES

### Example 1

```powershell
Add-SPOSiteCollectionAppCatalog -Site "https://contoso.sharepoint.com/sites/FinanceTeamsite"
```

This will add a SiteCollection app catalog to the specified site

## PARAMETERS

### -Site

Url of the site to add the app catalog to.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
