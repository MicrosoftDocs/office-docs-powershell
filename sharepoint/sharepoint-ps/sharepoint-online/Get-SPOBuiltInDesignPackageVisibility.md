---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spobuiltindesignpackagevisibility
applicable: SharePoint Online
title: Get-SPOBuiltInDesignPackageVisibility
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPOBuiltInDesignPackageVisibility

## SYNOPSIS

Gets the visibility of the available built-in Design Packages.

## SYNTAX

```powershell
Get-SPOBuiltInDesignPackageVisibility [-DesignPackage <DesignPackageType>] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to retrieve the current visibility state of each built-in design package.

## EXAMPLES

### Example 1

```powershell
Get-SPOBuiltInDesignPackageVisibility -DesignPackage Showcase
```

This example retrieves the current visibility state of Showcase built-in design package.

### Example 2

```powershell
Get-SPOBuiltInDesignPackageVisibility
```

This example retrieves the current visibility state of each built-in design package.

## PARAMETERS

### -DesignPackage

Name of the design package, available names are
- Topic
- Showcase
- Blank
- TeamSite

```yaml
Type: DesignPackageType
Parameter Sets: (All)
Aliases:
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
