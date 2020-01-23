---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantserviceprincipal
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPTenantServicePrincipal

## SYNOPSIS
Returns the current tenant's "SharePoint Online Client" service principal.

## SYNTAX

```powershell
Get-PnPTenantServicePrincipal [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns the current tenant's "SharePoint Online Client" service principal.

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
