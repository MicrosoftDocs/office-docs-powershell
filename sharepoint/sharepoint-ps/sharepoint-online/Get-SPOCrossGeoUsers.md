---
external help file: 
applicable: SharePoint Online
title: Get-SPOCrossGeoUsers
schema: 2.0.0
---

# Get-SPOCrossGeoUsers

## SYNOPSIS
In a multi-geo tenant returns the SharePoint Online user (or users) that matches the cross Geographics criteria


## SYNTAX

```Powershell
Get-SPOCrossGeoUsers -ValidDataLocation <Boolean> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains a single parameter called (ValidDataLocation) which is a switch and enables to validate the location of the data, for users in a multi-geo tenant in SharePoint Online.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```Powershell
Get-SPOCrossGeoUsers -ValidDataLocation
```
In a multi-geo tenant, get the cross users and validate the data location


## PARAMETERS

### -ValidDataLocation
PARAMVALUE: $true | $false


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[ConvertTo-SPOMigrationTargetedPackage](ConvertTo-SPOMigrationTargetedPackage.md)
