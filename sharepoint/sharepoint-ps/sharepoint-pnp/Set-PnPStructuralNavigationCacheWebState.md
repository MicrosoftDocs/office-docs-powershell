---
Module Name: PnP.PowerShell
title: Set-PnPStructuralNavigationCacheWebState
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPStructuralNavigationCacheWebState.html
---
 
# Set-PnPStructuralNavigationCacheWebState

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPStructuralNavigationCacheWebState.md to change this file.

Enable or disable caching for all webs in a site collection.

## SYNTAX

```
Set-PnPStructuralNavigationCacheWebState -IsEnabled <Boolean> [-WebUrl <String>]
```

## DESCRIPTION
The Set-PnPStructuralNavigationCacheWebtate cmdlet can be used to enable or disable caching for a webs in a site collection. If the WebUrl parameter has not been specified the currently connected to site will be used. 

## EXAMPLES

### Example 1
```powershell
Set-PnPStructuralNavigationCacheWebState -IsEnabled $true -WebUrl "https://contoso.sharepoint.com/sites/product/electronics" 
```

This example enables caching for the web https://contoso.sharepoint.com/sites/product/electronics.

### Example 1
```powershell
Set-PnPStructuralNavigationCacheSiteState -IsEnabled $false -SiteUrl "https://contoso.sharepoint.com/sites/product/electronics" 
```

This example disabled caching for all webs in the web https://contoso.sharepoint.com/sites/product/electronics.

## PARAMETERS

### -IsEnabled
$true to enable caching, $false to disable caching.. 

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl
Specifies the absolute URL for the web that needs its caching state set.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

