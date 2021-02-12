---
Module Name: PnP.PowerShell
title: Set-PnPStructuralNavigationCacheSiteState
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPStructuralNavigationCacheSiteState.html
---
 
# Set-PnPStructuralNavigationCacheSiteState

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPStructuralNavigationCacheSiteState.md to change this file.

Enable or disable caching for all webs in a site collection.

## SYNTAX

```
Set-PnPStructuralNavigationCacheSiteState -IsEnabled <Boolean> [-SiteUrl <String>]
```

## DESCRIPTION
The Set-PnPStructuralNavigationCacheSiteState cmdlet can be used to enable or disable caching for all webs in a site collection. If the SiteUrl parameter has not been specified the currently connected to site will be used. [Learn more](https://support.office.com/article/structural-navigation-and-performance-f163053f-8eca-4b9c-b973-36b395093b43). 

## EXAMPLES

### Example 1
```powershell
Set-PnPStructuralNavigationCacheSiteState -IsEnabled $true -SiteUrl "https://contoso.sharepoint.com/sites/product/" 
```

This example enables caching for all webs in the site collection https://contoso.sharepoint.com/sites/product/.

### Example 2
```powershell
Set-PnPStructuralNavigationCacheSiteState -IsEnabled $false -SiteUrl "https://contoso.sharepoint.com/sites/product/" 
```

This example disabled caching for all webs in the site collection https://contoso.sharepoint.com/sites/product/.

## PARAMETERS

### -IsEnabled
$true to enable caching, $false to disable caching.

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
Specifies the absolute URL for the site collection's root web that needs its caching state to be set.

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

