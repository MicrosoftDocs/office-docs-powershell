---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spouseronedrivelocation
applicable: SharePoint Online
title: Get-SPOUserOneDriveLocation
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOUserOneDriveLocation

## SYNOPSIS

This cmdlet will return the user principal name, current location, and corresponding OneDrive for Business url, and the site ID. This cmdlet only supports Multi-Geo OneDrive sites.

## SYNTAX

```powershell
Get-SPOUserOneDriveLocation -UserPrincipalName <String> [<CommonParameters>]
```

## DESCRIPTION

This command will return information about the OneDrive location for the specified user.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
Get-SPOUserOneDriveLocation -UserPrincipalName admin@contoso.com
```

Get the current location the user's OneDrive location, url, and site ID.

## PARAMETERS

### -UserPrincipalName

PARAMVALUE: String

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
