---
external help file: 
applicable: SharePoint Online
title: Get-SPOGeoStorageQuota
schema: 2.0.0
---

# Get-SPOGeoStorageQuota

## SYNOPSIS
This Cmdlet gets the Storage quota on a multi-geo tenant


## SYNTAX

```Powershell
Get-SPOGeoStorageQuota [-AllLocations] [<CommonParameters>]
```

## DESCRIPTION
This Cmdlet shows the storage on the current location or all locations in a multi-geo SPO tenant


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```Powershell
Get-SPOGeoStorageQuota -AllLocations
```
Get the storage size quota of all locations 

### -----------------------EXAMPLE 2-----------------------------
```Powershell
Get-SPOGeoStorageQuota 
```
Get the storage size quota of the current location


## PARAMETERS

### -AllLocations
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Set-SPOGeoStorageQuota](set-SPOGeoStorageQuota.md)