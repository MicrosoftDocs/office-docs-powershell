---
external help file: 
applicable: SharePoint Online
title: Get-SPOGeoAdministrator
schema: 2.0.0
---

# Get-SPOGeoAdministrator

## SYNOPSIS
This cmdlet returns the SharePoint Online user or security group accounts with global administrative privilegies in the current Multi-Geographics tenant

## SYNTAX

```powershell
Get-SPOGeoAdministrator [<CommonParameters>]
```

## DESCRIPTION

You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Get-SPOGeoAdministrator` cmdlet a single parameter set and matches a user or a list of users which has the ability to do changes globally in the SharePoint Organization.
Running this Cmdlet on a single tenant organization will lead to a error -4, which means that you're not in a multi-Geo Tenant.

You must be a SharePoint Online global administrator and you must have a Multi-Geo Tenant to run the `Get-SPOGeoAdministrator` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### Example 1 
```powershell
Get-SPOGeoAdministrator 
```
You will get a SharePoint Online User user or security group that are Multi-Geographic administrators on the current multi-geo Tenant


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Add-SPOGeoAdministrator](Add-SPOGeoAdministrator.md)

[Remove-SPOGeoAdministrator](Remove-SPOGeoAdministrator.md)


