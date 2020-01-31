---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantid
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPTenantId

## SYNOPSIS
Returns the Tenant ID

## SYNTAX 

```powershell
Get-PnPTenantId [-TenantUrl <String>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantId
```

Returns the current Tenant Id. A valid connection with Connect-PnPOnline is required.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantId -TenantUrl https://contoso.sharepoint.com
```

Returns the Tenant ID for the specified tenant. Can be executed without a connecting first with Connect-PnPOnline

## PARAMETERS

### -TenantUrl


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)