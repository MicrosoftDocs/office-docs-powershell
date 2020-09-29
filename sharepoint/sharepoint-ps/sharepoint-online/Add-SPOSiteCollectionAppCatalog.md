---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spositecollectionappcatalog
applicable: SharePoint Online
title: Add-SPOSiteCollectionAppCatalog
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Add-SPOSiteCollectionAppCatalog

## SYNOPSIS

Adds a Site Collection scoped App Catalog to a site.

## SYNTAX

```powershell
Add-SPOSiteCollectionAppCatalog -Site <SpoSitePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to add a site collection scoped app catalog to the specified site. To run this cmdlet user must have the following roles:
* SharePoint Admin role or Global Administrator role
* Site Collection Administrator of the tenant app catalog
* Site Collection Administrator of the site collection of the site specified in the `-Site` parameter

## EXAMPLES

### Example 1

```powershell
Add-SPOSiteCollectionAppCatalog -Site "https://contoso.sharepoint.com/sites/FinanceTeamsite"
```

This example adds a SiteCollection app catalog to the specified site.

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

### -Confirm

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
