---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpsitecollectionappcatalog
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPSiteCollectionAppCatalog
---

# Remove-PnPSiteCollectionAppCatalog

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Removes a Site Collection scoped App Catalog from a site

## SYNTAX 

```powershell
Remove-PnPSiteCollectionAppCatalog -Site <SitePipeBind>
                                   [-Connection <PnPConnection>]
```

## DESCRIPTION
Notice that this will not remove the App Catalog list and its contents from the site.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPSiteCollectionAppCatalog -Site "https://contoso.sharepoint.com/sites/FinanceTeamsite"
```

This will remove a SiteCollection app catalog from the specified site

## PARAMETERS

### -Site
Url of the site to remove the app catalog from.

```yaml
Type: SitePipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)