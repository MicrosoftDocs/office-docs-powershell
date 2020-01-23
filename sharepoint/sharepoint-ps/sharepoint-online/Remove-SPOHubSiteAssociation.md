---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spohubsiteassociation
applicable: SharePoint Online
title: Remove-SPOHubSiteAssociation
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOHubSiteAssociation

## SYNOPSIS

Removes a site from its associated hub site.

## SYNTAX

```powershell
Remove-SPOHubSiteAssociation [-Site] <SpoSitePipeBind>
[<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to remove an association between a site and a hub site.

> [!IMPORTANT]
> This cmdlet is currently in preview and is subject to change. It is not currently supported for use in production environments.

If the site or hub site doesn't exist, this cmdlet returns a "File not found" error.

## EXAMPLES

### Example 1

```powershell
Remove-SPOHubSiteAssociation https://contoso.sharepoint.com/sites/Research
```

This example removes the research site from the marketing hub site.

## PARAMETERS

### -Site

URL of the site to remove from the hub site.

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
