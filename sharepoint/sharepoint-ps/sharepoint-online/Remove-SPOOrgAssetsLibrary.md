---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
applicable: SharePoint Online
title: Remove-SPOOrgAssetsLibrary
author: Maralesfahanpoor
ms.author: maesfaha
ms.reviewer: 
manager: paulac
online version:
schema: 2.0.0
---

# Remove-SPOOrgAssetsLibrary

## SYNOPSIS

Removes a library that was designated as a central location for organization assets across the tenant.

## SYNTAX

```powershell
Remove-SPOOrgAssetsLibrary -LibraryUrl <String> -ShouldRemoveFromCdn <Boolean>
 [<CommonParameters>]
```

## DESCRIPTION

The Remove-SPOOrgAssetsLibrary cmdlet removes a library that was designated as a central location for organization assets across the tenant. Once this cmdlet is run, this library will no longer be accessible from the "Your organization" tab in the file picker.

## EXAMPLES

### Example 1

This example removes https://contoso.sharepoint.com/sites/branding/Assets as a designated library. Assets within this library will no longer be accessible from the "Your organization" tab in the file picker.

```powershell
Remove-SPOOrgAssetsLibrary -LibraryURL sites/branding/Assets
```

## PARAMETERS

### -LibraryUrl

Indicates the server relative URL of the library to be removed as a central location for organization assets.

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

### -ShouldRemoveFromCdn

Remove CDN from the designated library.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/add-spoorgassetslibrary?view=sharepoint-ps)

[Set-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/set-spoorgassetslibrary?view=sharepoint-ps)

[Get-SPOOrgAssetsLibrary](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spoorgassetslibrary?view=sharepoint-ps)
