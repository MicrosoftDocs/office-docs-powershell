---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spoorgassetslibrary
applicable: SharePoint Online
title: Set-SPOOrgAssetsLibrary
author: Maralesfahanpoor
ms.author: maesfaha
ms.reviewer:
manager: paulac
schema: 2.0.0
---

# Set-SPOOrgAssetsLibrary

## SYNOPSIS

Updates information for a library that is designated as a location for organization assets.

## SYNTAX

```powershell
Set-SPOOrgAssetsLibrary -LibraryUrl <String> -ThumbnailUrl <String>  [<CommonParameters>]
```

## DESCRIPTION

The Set-SPOOrgAssetsLibrary cmdlet updates information for a library that is designated as a location for organization assets. Updating the thumbnail URL is currently supported.

## EXAMPLES

### Example 1

This example updates the thumbnail URL publicly displayed for the library to contosologo2.jpg.

```powershell
Set-SPOOrgAssetsLibrary -LibraryURL sites/branding/Assets -ThumbnailURL https://contoso.sharepoint.com/sites/branding/Assets/contosologo2.jpg
```

### Example 2

This example removes the thumbnail URL that was previously set for the library.

```powershell
Set-SPOOrgAssetsLibrary -LibraryURL sites/branding/Assets -ThumbnailURL ""
```

## PARAMETERS

### -LibraryUrl

Indicates the server relative URL of the library to be modified.

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

### -ThumbnailUrl

Indicates the URL of the background image used when the library is publicly displayed. If no thumbnail URL is indicated, the card will have a gray background.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/add-spoorgassetslibrary?view=sharepoint-ps)

[Get-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spoorgassetslibrary?view=sharepoint-ps)

[Remove-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spoorgassetslibrary?view=sharepoint-ps)
