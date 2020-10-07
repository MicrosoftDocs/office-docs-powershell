---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spocrossgeousers
applicable: SharePoint Online
title: Get-SPOCrossGeoUsers
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOCrossGeoUsers

## SYNOPSIS

Returns the SharePoint Online users in a multi-geo tenant that match the criteria.

## SYNTAX

```Powershell
Get-SPOCrossGeoUsers -ValidDataLocation <Boolean> [<CommonParameters>]
```

## DESCRIPTION

The Get-SPOCrossGeoUsers cmdlet is used to return the SharePoint Online users that match a given criteria. The ValidDataLocation parameter is a switch used to validate the location of the data. This cmdlet requires a connection to a multi-geo tenant to run correctly. You must have the SharePoint Online Admin role or Global Administrator role to execute this cmdlet.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```Powershell
Get-SPOCrossGeoUsers -ValidDataLocation $true
```

Returns all of the SharePoint Online users in a multi-geo tenant and validates the data location.

### -----------------------EXAMPLE 2-----------------------------

```Powershell
Get-SPOCrossGeoUsers
```

Returns all of the SharePoint Online users in a multi-geo tenant without validating data location.

### -----------------------EXAMPLE 3-----------------------------

```Powershell
Get-SPOCrossGeoUsers -ValidDataLocation $true | where {$_.UserPrincipalName -eq 'jane@contoso.com'}
```

Returns a single user from SharePoint Online in a multi-geo tenant and validates the data location.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[ConvertTo-SPOMigrationTargetedPackage](ConvertTo-SPOMigrationTargetedPackage.md)
