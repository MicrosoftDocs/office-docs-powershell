---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:
schema: 2.0.0
applicable: SharePoint Online
title: Get-SPOStructuralNavigationCacheWebState
author: paramveersisodia
ms.author: paramsis
ms.reviewer:
---

# Get-SPOStructuralNavigationCacheWebState

## SYNOPSIS
Get the structural navigation caching state for a web. 

## SYNTAX

```
Get-SPOStructuralNavigationCacheWebState -WebUrl <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-SPOStructuralNavigationCacheWebState cmdlet can be used to determine if structural navigation caching is enabled or disabled for a web in a site collection. [Learn more](https://support.office.com/article/structural-navigation-and-performance-f163053f-8eca-4b9c-b973-36b395093b43). 

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-SPOStructuralNavigationCacheWebState -weburl "https://contoso.sharepoint.com/sites/product/electronics" 
```

This example checks if structural navigation caching is enabled for the web https://contoso.sharepoint.com/sites/product/electronics. If caching is enabled, then it will return True. If caching is disabled, then it will return False.

## PARAMETERS

### -WebUrl
Specifies the absolute URL for the web being checked for its caching state.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
    To see the examples, type: "get-help Get-SPOStructuralNavigationCacheWebState -examples". 

    For more information, type: "get-help Get-SPOStructuralNavigationCacheWebState -detailed". 

    For technical information, type: "get-help Get-SPOStructuralNavigationCacheWebState -full". 

    For online help, type: "get-help Get-SPOStructuralNavigationCacheWebState -online" 
## RELATED LINKS
[Set-SPOStructuralNavigationCacheWebState](Set-SPOStructuralNavigationCacheWebState.md)

[Get-SPOStructuralNavigationCacheSiteState](Get-SPOStructuralNavigationCacheSiteState.md)

[Set-SPOStructuralNavigationCacheSiteState](Set-SPOStructuralNavigationCacheSiteState.md)
