---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:
schema: 2.0.0
applicable: SharePoint Online
title: Set-SPOStructuralNavigationCacheSiteState
author: paramveersisodia
ms.author: paramsis
manager: suyog
ms.reviewer:
---

# Set-SPOStructuralNavigationCacheSiteState

## SYNOPSIS
Enable or disable caching for all webs in a site collection. 

## SYNTAX

```
Set-SPOStructuralNavigationCacheSiteState -SiteUrl <String> -IsEnabled <Boolean> [<CommonParameters>]
```

## DESCRIPTION
The Set-SPOStructuralNavigationCacheSiteState cmdlet can be used to enable or disable caching for all webs in a site collection. [Learn more](https://support.office.com/article/structural-navigation-and-performance-f163053f-8eca-4b9c-b973-36b395093b43). 

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-SPOStructuralNavigationCacheSiteState –IsEnabled $true -SiteUrl "https://contoso.sharepoint.com/sites/product/" 
```

This example enables caching for all webs in the site collection https://contoso.sharepoint.com/sites/product/. 

### Example 2
```powershell
PS C:\> Set-SPOStructuralNavigationCacheSiteState –IsEnabled $false -SiteUrl "https://contoso.sharepoint.com/sites/product/"  
```

This example disables caching for all webs in the site collection https://contoso.sharepoint.com/sites/product/. 

## PARAMETERS

### -IsEnabled
$true to enable caching, $false to disable caching. 

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
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
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES
    To see the examples, type: "get-help Set-SPOStructuralNavigationCacheSiteState -examples". 

    For more information, type: "get-help Set-SPOStructuralNavigationCacheSiteState -detailed". 

    For technical information, type: "get-help Set-SPOStructuralNavigationCacheSiteState -full". 

    For online help, type: "get-help Set-SPOStructuralNavigationCacheSiteState -online" 

 
## RELATED LINKS
[Get-SPOStructuralNavigationCacheWebState](Get-SPOStructuralNavigationCacheWebState.md)

[Set-SPOStructuralNavigationCacheWebState](Set-SPOStructuralNavigationCacheWebState.md)

[Get-SPOStructuralNavigationCacheSiteState](Get-SPOStructuralNavigationCacheSiteState.md)
 
