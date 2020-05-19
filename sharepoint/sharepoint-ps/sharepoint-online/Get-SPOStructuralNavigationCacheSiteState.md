---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:
schema: 2.0.0
applicable: SharePoint Online
title: Get-SPOStructuralNavigationCacheSiteState
author: paramveersisodia
ms.author: paramsis
manager: suyog
ms.reviewer:
---

# Get-SPOStructuralNavigationCacheSiteState

## SYNOPSIS
Get the structural navigation caching state for a site collection.

## SYNTAX

```
Get-SPOStructuralNavigationCacheSiteState -SiteUrl <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-SPOStructuralNavigationCacheSiteState cmdlet can be used to determine if structural navigation caching is enabled or disabled for a site collection. [Learn more](https://support.office.com/article/structural-navigation-and-performance-f163053f-8eca-4b9c-b973-36b395093b43). 

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-SPOStructuralNavigationCacheSiteState -weburl "https://contoso.sharepoint.com/sites/product/" 
```

This example checks if structural navigation caching is enabled for the entire site collection https://contoso.sharepoint.com/sites/product/. If caching is enabled, then it will return True. If caching is disabled, then it will return False. 

## PARAMETERS

### -SiteUrl
Specifies the absolute URL for the site collection's root web being checked for its caching state. 

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
    To see the examples, type: "get-help Get-SPOStructuralNavigationCacheSiteState -examples". 

    For more information, type: "get-help Get-SPOStructuralNavigationCacheSiteState -detailed". 

    For technical information, type: "get-help Get-SPOStructuralNavigationCacheSiteState -full". 

    For online help, type: "get-help Get-SPOStructuralNavigationCacheSiteState -online" 

 
## RELATED LINKS
[Get-SPOStructuralNavigationCacheWebState](Get-SPOStructuralNavigationCacheWebState.md)

[Set-SPOStructuralNavigationCacheWebState](Set-SPOStructuralNavigationCacheWebState.md)

[Set-SPOStructuralNavigationCacheSiteState](Set-SPOStructuralNavigationCacheSiteState.md)
