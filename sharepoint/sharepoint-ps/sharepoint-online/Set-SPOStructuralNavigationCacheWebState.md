---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:
schema: 2.0.0
applicable: SharePoint Online
title: Set-SPOStructuralNavigationCacheWebState
author: paramveersisodia
ms.author: paramsis
ms.reviewer:
---

# Set-SPOStructuralNavigationCacheWebState

## SYNOPSIS
Enable or disable caching for a web in a site collection. 

## SYNTAX

```
Set-SPOStructuralNavigationCacheWebState -WebUrl <String> -IsEnabled <Boolean> [<CommonParameters>]
```

## DESCRIPTION
The Set-SPOStructuralNavigationCacheWebState cmdlet can be used to enable or disable caching for a web in a site collection. [Learn more](https://support.office.com/article/structural-navigation-and-performance-f163053f-8eca-4b9c-b973-36b395093b43). 

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-SPOStructuralNavigationCacheWebState -IsEnabled $true -WebUrl "https://contoso.sharepoint.com/sites/product/electronics" 
```

This example enables caching for the web https://contoso.sharepoint.com/sites/product/electronics. 

### Example 2
```powershell
Set-SPOStructuralNavigationCacheWebState -IsEnabled $false -WebUrl "https://contoso.sharepoint.com/sites/product/electronics" 
```

This example disables caching for the web https://contoso.sharepoint.com/sites/product/electronics. 
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

### -WebUrl
Specifies the absolute URL for the web that needs its caching state to be set. 

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
    To see the examples, type: "get-help Set-SPOStructuralNavigationCacheWebState -examples". 

    For more information, type: "get-help Set-SPOStructuralNavigationCacheWebState -detailed". 

    For technical information, type: "get-help Set-SPOStructuralNavigationCacheWebState -full". 

    For online help, type: "get-help Set-SPOStructuralNavigationCacheWebState -online" 
    
## RELATED LINKS
[Get-SPOStructuralNavigationCacheWebState](Get-SPOStructuralNavigationCacheWebState.md)

[Get-SPOStructuralNavigationCacheSiteState](Get-SPOStructuralNavigationCacheSiteState.md)

[Set-SPOStructuralNavigationCacheSiteState](Set-SPOStructuralNavigationCacheSiteState.md)
