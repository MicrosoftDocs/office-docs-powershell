---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spogeoadministrator
applicable: SharePoint Online
title: Add-SPOGeoAdministrator
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Add-SPOGeoAdministrator

## SYNOPSIS

Adds a new SharePoint user or security group as GeoAdministrator to a multi-geo tenant.


## SYNTAX

```powershell
Add-SPOGeoAdministrator
  -UserPrincipalName <string>
  -GroupAlias <string>
  -ObjectId <guid>
  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires a connection to a multi-geo tenant to run correctly.
You must be a SharePoint Online global Administrator to run this cmdlet.


## EXAMPLES

### EXAMPLE 1
```powershell
Add-SPOGeoAdministrator -UserPrincipalName admin@contoso.onmicrosoft.com
```
Adds the user **admin\@contoso.onmicrosoft.com**  as administrator to the SharePoint Online multi-geo tenant.


## PARAMETERS

### -GroupAlias
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

### -ObjectId
PARAMVALUE: Guid


```yaml
Type: Guid
Parameter Sets: ObjectId
Aliases:
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -UserPrincipalName
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES


## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOGeoAdministrator](Get-SPOGeoAdministrator.md)

[Remove-SPOGeoAdministrator](Remove-SPOGeoAdministrator.md)



