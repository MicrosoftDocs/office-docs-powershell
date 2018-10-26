---
external help file: 
applicable: SharePoint Online
title: Get-SPOTenantTaxonomyReplicationParameters
schema: 2.0.0
---

# Get-SPOTenantTaxonomyReplicationParameters

## SYNOPSIS

Get the replication parameters to manage Multi-Geo taxonomy replication.

## SYNTAX

```powershell
Get-SPOTenantTaxonomyReplicationParameters [<CommonParameters>]
```

## DESCRIPTION
Before you use this cmdlet, please use "Connect-SPOService" to connect to SharePoint Online first
This Cmdlet gets the replication parameters and it works to get the replication taxonomy in a Multi-Geo tenant.
It works with the [Set-SPOTenantTaxonomyReplicationParameters](Set-SPOTenantTaxonomyReplicationParameters.md) to set the parameters.

Get the sites to be replicated in a Multi-Geo taxonomy replication.

## EXAMPLES

### Example 1 
```powershell
Get-SPOTenantTaxonomyReplicationParameters 
```

Gets the replication groups that are being replicated on the current tenant.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS

[Introduction to the SharePoint Online management shell](https://support.office.com/en-us/article/introduction-to-the-sharepoint-online-management-shell-c16941c3-19b4-4710-8056-34c034493429)

[SharePoint Online Management Shell Download](https://www.microsoft.com/en-US/download/details.aspx?id=35588)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOTenantTaxonomyReplicationParameters](Get-SPOTenantTaxonomyReplicationParameters.md)

[Get-SPOTenantContentTypeReplicationParameters](Get-SPOTenantContentTypeReplicationParameters.md)

[Set-SPOTenantContentTypeReplicationParameters](Set-SPOTenantContentTypeReplicationParameters.md)