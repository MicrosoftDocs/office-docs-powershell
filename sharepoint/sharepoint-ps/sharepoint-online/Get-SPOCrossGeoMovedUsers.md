---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOCrossGeoMovedUsers
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOCrossGeoMovedUsers

## SYNOPSIS

In a multi-geo tenant returns the SharePoint Online user (or users) that had been moved.

## SYNTAX

```powershell
Get-SPOCrossGeoMovedUsers -Direction <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows you to get the moved users out and in the current SPO Site. It requires a connection to a multi-geo tenant to run correctly. You must be a SharePoint Online global Administrator to get the moved users out and in the current SPO site.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
Get-SPOCrossGeoMovedUsers -Direction MoveIn
```

Get the cross users that have been moved in the current SPO site

### -----------------------EXAMPLE 2-----------------------------

```powershell
Get-SPOCrossGeoMovedUsers -Direction MoveOut
```

Get the cross users that have been moved out the current SPO site

## PARAMETERS

### -Direction

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: MoveIn, MoveOut
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
