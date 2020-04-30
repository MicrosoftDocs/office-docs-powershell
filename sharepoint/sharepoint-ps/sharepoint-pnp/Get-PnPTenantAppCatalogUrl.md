---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantappcatalogurl
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantAppCatalogUrl
---

# Get-PnPTenantAppCatalogUrl

## SYNOPSIS
Retrieves the url of the tenant scoped app catalog

## SYNTAX 

```powershell
Get-PnPTenantAppCatalogUrl [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantAppCatalogUrl
```

Returns the url of the tenant scoped app catalog site collection

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