---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disable-pnptenantserviceprincipal
applicable: SharePoint Online
schema: 2.0.0
title: Disable-PnPTenantServicePrincipal
---

# Disable-PnPTenantServicePrincipal

## SYNOPSIS
Enables the current tenant's "SharePoint Online Client" service principal.

## SYNTAX 

```powershell
Disable-PnPTenantServicePrincipal [-Force [<SwitchParameter>]]
                                  [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## DESCRIPTION
Enables the current tenant's "SharePoint Online Client" service principal.

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
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