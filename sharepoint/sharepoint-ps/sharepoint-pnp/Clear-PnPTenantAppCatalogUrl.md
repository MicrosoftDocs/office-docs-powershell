---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/clear-pnptenantappcatalogurl
applicable: SharePoint Online
schema: 2.0.0
title: Clear-PnPTenantAppCatalogUrl
---

# Clear-PnPTenantAppCatalogUrl

## SYNOPSIS
Removes the url of the tenant scoped app catalog. It will not delete the site collection itself.

## SYNTAX 

```powershell
Clear-PnPTenantAppCatalogUrl [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Clear-PnPTenantAppCatalogUrl
```

Removes the url of the tenant scoped app catalog

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)