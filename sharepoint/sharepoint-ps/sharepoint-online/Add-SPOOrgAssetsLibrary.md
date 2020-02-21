---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spoorgassetslibrary
applicable: SharePoint Online
title: Add-SPOOrgAssetsLibrary
author: Maralesfahanpoor
ms.author: maesfaha
ms.reviewer:
manager: paulac
schema: 2.0.0
---

# Add-SPOOrgAssetsLibrary

## SYNOPSIS

Designates a library to be used as a central location for organization assets across the tenant.

## SYNTAX

```powershell
Add-SPOOrgAssetsLibrary -LibraryUrl <String> [-ThumbnailUrl <String>] [-OrgAssetType <OrgAssetType>] [-CdnType <SPOTenantCdnType>]
[<CommonParameters>]
```

## DESCRIPTION

The Add-SPOOrgAssetsLibrary cmdlet designates a library to be a central location for organization assets across the tenant. Once this cmdlet is run, assets stored within this library are available to sites across the tenant.  The name publicly displayed for the library will be the name of the library on the SharePoint site. Note that it may take from a couple of hours to a day for changes to be reflected.

## EXAMPLES

### Example 1

This example adds <https://contoso.sharepoint.com/sites/branding/Assets> as a designated library for organization assets. Assets is the name of the SharePoint library added and will be the name publicly displayed for the library. The thumbnail publicly displayed for the library is contosologo.jpg, from that same library.

```powershell
Add-SPOOrgAssetsLibrary -LibraryURL https://contoso.sharepoint.com/sites/branding/Assets -ThumbnailURL https://contoso.sharepoint.com/sites/branding/Assets/contosologo.jpg
```

## PARAMETERS

### -CdnType

Specifies the CDN type. The valid values are public or private.

```yaml
Type: SPOTenantCdnType
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Accepted values: Public, Private

Required: False
Position: Named
Default value: Private
Accept pipeline input: False
Accept wildcard characters: False
```

### -LibraryUrl

Indicates the absolute URL of the library to be designated as a central location for organization assets.

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

### -OrgAssetType

Indicates the type of content in this library. Currently supported values are ImageDocumentLibrary, which is set by default, and OfficeTemplateLibrary.

```yaml
Type: OrgAssetType
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Accepted values: ImageDocumentLibrary, OfficeTemplateLibrary

Required: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spoorgassetslibrary?view=sharepoint-ps)

[Set-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/set-spoorgassetslibrary?view=sharepoint-ps)

[Remove-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spoorgassetslibrary?view=sharepoint-ps)
