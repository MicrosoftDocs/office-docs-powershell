---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/unregister-pnphubsite
applicable: SharePoint Online
schema: 2.0.0
title: Unregister-PnPHubSite
---

# Unregister-PnPHubSite

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Unregisters a site as a hubsite

## SYNTAX 

```powershell
Unregister-PnPHubSite -Site <SitePipeBind>
                      [-Connection <PnPConnection>]
```

## DESCRIPTION
Registers a site as a hubsite

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Unregister-PnPHubSite -Site https://tenant.sharepoint.com/sites/myhubsite
```

This example unregisters the specified site as a hubsite

## PARAMETERS

### -Site
The site to unregister as a hubsite

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