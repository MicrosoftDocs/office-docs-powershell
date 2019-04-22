---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Remove-SPOGeoAdministrator
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---

# Remove-SPOGeoAdministrator

## SYNOPSIS
Removes a new SharePoint user or security Group in the current Multi-Geo Tenant.


## SYNTAX

```powershell
Remove-SPOGeoAdministrator [-LoginName] <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains a single parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (https://go.microsoft.com/fwlink/?LinkID=187810).

The `Remove-SPOGeoAdministrator` cmdlet matches a user or a security group and remove the GeoAdministrator privileges in the SharePoint Organization.

You must be a SharePoint Online global administrator, and you must have a Multi-Geo Tenant to run the `Remove-SPOGeoAdministrator` cmdlet successfully.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251832 (https://go.microsoft.com/fwlink/p/?LinkId=251832).




## EXAMPLES

### Example 1 
```powershell
Remove-SPOGeoAdministrator contosoadmin 
```
Remove the GeoAdministrator privileges to the user contosoadmin of the SharePoint Online multi-geo tenant.

### Example 2
```powershell
Remove-SPOGeoAdministrator -LoginName contosoadmin
```
Same as example 1, but using the LoginName parameter explicitly.

## PARAMETERS

### -LoginName
It's the user Principal Name or UPN of a user. Typically the username that he uses to log in.

```yaml
Type: String
Parameter Sets: (All)
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

[Add-SPOGeoAdministrator](Add-SPOGeoAdministrator.md)

[Get-SPOGeoAdministrator](Get-SPOGeoAdministrator.md)


