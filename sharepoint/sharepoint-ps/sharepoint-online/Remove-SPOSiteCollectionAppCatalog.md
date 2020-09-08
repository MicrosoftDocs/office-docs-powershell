---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spositecollectionappcatalog
applicable: SharePoint Online
title: Remove-SPOSiteCollectionAppCatalog
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Remove-SPOSiteCollectionAppCatalog

## SYNOPSIS

Removes the site collection app catalog.

## SYNTAX

```powershell
Remove-SPOSiteCollectionAppCatalog [-Site] <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to remove the site collection app catalog.

## EXAMPLES

### Example 1

```powershell
Remove-SPOSiteCollectionAppCatalog -Site https://contoso.sharepoint.com/sites/Research
```

This example removes the site collection app catalog from the site <https://contoso.sharepoint.com/sites/Research.>

## PARAMETERS

### -Site

Url of the site collection.

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
