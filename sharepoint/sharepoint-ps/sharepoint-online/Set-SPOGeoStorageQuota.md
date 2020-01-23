---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spogeostoragequota
applicable: SharePoint Online
title: Set-SPOGeoStorageQuota
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOGeoStorageQuota

## SYNOPSIS
This Cmdlet sets the Storage quota on a multi-geo tenant.


## SYNTAX

```powershell
Set-SPOGeoStorageQuota -GeoLocation <String> -StorageQuotaMB <Int64> [<CommonParameters>]
```

## DESCRIPTION
This Cmdlet sets the storage quota, in megabytes, on a particular geo-location. Additionally, it requires a connection to a multi-geo tenant to run correctly. You must be a SharePoint Online global Administrator.


## EXAMPLES

### EXAMPLE 1
```powershell
Set-SPOGeoStorageQuota -GeoLocation EASTUS -StorageQuotaMB 512
```

Sets the SharePoint Online Storage Quota on the EAST US location to 512 MB.

### EXAMPLE 2
```powershell
Set-SPOGeoStorageQuota -GeoLocation NORTHCENTRALUS -StorageQuotaMB 1024
```

Sets the SharePoint Online Storage Quota on the **NORTH CENTRAL US** location to 1 TeraBytes (1Tb).


## PARAMETERS

### -GeoLocation
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

### -StorageQuotaMB
PARAMVALUE: Int64


```yaml
Type: Int64
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOGeoStorageQuota](Get-SPOGeoStorageQuota.md)
