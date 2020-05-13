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

### User (Default)
```
Add-SPOGeoAdministrator [-UserPrincipalName] <String> [<CommonParameters>]
```

### Group
```
Add-SPOGeoAdministrator [-GroupAlias] <String> [<CommonParameters>]
```

### ObjectId
```
Add-SPOGeoAdministrator [-ObjectId] <Guid> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet requires a connection to a multi-geo tenant to run correctly.
You must be a SharePoint Online global Administrator to run this cmdlet.

## EXAMPLES

### EXAMPLE 1

```powershell
Add-SPOGeoAdministrator -UserPrincipalName admin@contoso.onmicrosoft.com
```

Adds the user **admin\@contoso.onmicrosoft.com** as administrator to the SharePoint Online multi-geo tenant.

## PARAMETERS

### -GroupAlias

Use this parameter to add a security group or a mail-enabled security group as a geo admin. (Distribution groups and Microsoft 365 Groups are not supported.).

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

Not all security groups have a group alias. If you want to add a security group that does not have an alias, run Get-MsolGroup to retrieve a list of groups, find your security group's ObjectID, and then use this parameter. For more information, see [Add or remove a geo administrator in Microsoft 365 Multi-Geo](https://docs.microsoft.com/office365/enterprise/add-a-sharepoint-geo-admin).

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

UserPrincipalName or UPN defined for the specific user on the SharePoint Online tenant.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOGeoAdministrator](Get-SPOGeoAdministrator.md)

[Remove-SPOGeoAdministrator](Remove-SPOGeoAdministrator.md)
