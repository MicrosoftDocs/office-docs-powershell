---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOGeoMoveCrossCompatibilityStatus
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOGeoMoveCrossCompatibilityStatus

## SYNOPSIS

This cmdlet returns the compatibility status between geographic locations.

## SYNTAX

```powershell
Get-SPOGeoMoveCrossCompatibilityStatus [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the compatibility between sites and locations for a move in a multi-geo SharePoint Online tenant.

## EXAMPLES

### EXAMPLE 1

```powershell
Get-SPOGeoMoveCrossCompatibilityStatus
```

Get the compatibility status for all locations.

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
