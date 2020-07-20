---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnphubsiteassociation
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPHubSiteAssociation
---

# Remove-PnPHubSiteAssociation

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Disconnects a site from a hubsite.

## SYNTAX 

```powershell
Remove-PnPHubSiteAssociation -Site <SitePipeBind>
                             [-Connection <PnPConnection>]
```

## DESCRIPTION
Disconnects an site from a hubsite

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPHubSiteAssociation -Site https://tenant.sharepoint.com/sites/mysite
```

This example adds the specified site to the hubsite.

## PARAMETERS

### -Site
The site to disconnect from its hubsite

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