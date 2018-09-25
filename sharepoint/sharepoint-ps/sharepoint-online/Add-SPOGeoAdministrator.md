---
external help file: 
applicable: SharePoint Online
title: Add-SPOGeoAdministrator
schema: 2.0.0
---

# Add-SPOGeoAdministrator

## SYNOPSIS
Adds a new SharePoint user or security Group as Get-Administrator of the current Multi-Geo Tenant.


## SYNTAX

```powershell
Add-SPOGeoAdministrator
  -Title <string>
  -WebTemplate <string>
  -SiteScripts <SPOSiteScriptPipeBind[]>
  [-Description <string>]
  [-PreviewImageUrl <string>]
  [-PreviewImageAltText <string>]
  [-IsDefault]
  [<CommonParameters>]
```

### Group
```
Add-SPOGeoAdministrator [-Group] <String> [<CommonParameters>]
```

### User
```
Add-SPOGeoAdministrator [-User] <String> [<CommonParameters>]
```

## DESCRIPTION
This Cmdlet requires a connection to a multi-geo tenant to run correctly. You must be a SharePoint Online global Administrator to run this script and allows you to add a user or group in the SharePoint Tenant as GeoAdministrator


## EXAMPLES

### EXAMPLE 1
```powershell
Add-SPOGeoAdministrator -user contosoadmin
```
Add the user contosoadmin to the SharePoint Online multi-geo tenant


## PARAMETERS

### -Group
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: Group
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: User
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES


## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOGeoAdministrator](Get-SPOGeoAdministrator.md)

[Remove-SPOGeoAdministrator](Remove-SPOGeoAdministrator.md)



