---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/enable-pnptenantserviceprincipal
applicable: SharePoint Online
schema: 2.0.0
---

# Enable-PnPTenantServicePrincipal

## SYNOPSIS
Enables the current tenant's "SharePoint Online Client" service principal.

## SYNTAX 

```powershell
Enable-PnPTenantServicePrincipal [-Force [<SwitchParameter>]]
                                 [-Connection <SPOnlineConnection>]
```

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
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)