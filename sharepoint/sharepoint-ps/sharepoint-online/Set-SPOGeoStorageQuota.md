---
external help file: 
applicable: SharePoint Online
title: Set-SPOGeoStorageQuota
schema: 2.0.0
---

# Set-SPOGeoStorageQuota

## SYNOPSIS
This Cmdlet sets the Storage quota on a multi-geo tenant


## SYNTAX

```Powershell
Set-SPOGeoStorageQuota -GeoLocation <String> -StorageQuotaMB <Int64> [<CommonParameters>]
```

## DESCRIPTION
This Cmdlet sets the storage on a particular geolocation, with a specific number of MBs


## EXAMPLES

### --------------------EXAMPLE---------------------
```Powershell
Set-SPOGeoStorageQuota -GeoLocation EASTUS -StorageQuotaMB 512 
```

Sets the SharePoint Online Storage Quota on the EAST US location to 512 MB.


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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOGeoStorageQuota](Get-SPOGeoStorageQuota.md)
