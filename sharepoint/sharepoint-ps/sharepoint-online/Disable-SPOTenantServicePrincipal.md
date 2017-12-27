---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Disable-SPOTenantServicePrincipal

> [!WARNING]
> This is a preview feature and should not be used in production.

## SYNOPSIS
Disables the current tenant's "SharePoint Online Client" service principal.

## SYNTAX

```powershell
Disable-SPOTenantServicePrincipal
```

## DESCRIPTION
Disables the current tenant's "SharePoint Online Client" service principal.

When the service principal's account is disabled, clients and components that use this service principal
will not be able to request an access token for this service principal.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-SPOTenantServicePrincipal
```

Disables the current tenant's "SharePoint Online Client" service principal.
