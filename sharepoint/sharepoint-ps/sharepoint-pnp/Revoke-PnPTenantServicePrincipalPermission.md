---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/revoke-pnptenantserviceprincipalpermission
applicable: SharePoint Online
schema: 2.0.0
title: Revoke-PnPTenantServicePrincipalPermission
---

# Revoke-PnPTenantServicePrincipalPermission

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.

## SYNTAX 

```powershell
Revoke-PnPTenantServicePrincipalPermission -ObjectId <String>
                                           [-Force [<SwitchParameter>]]
                                           [-Connection <PnPConnection>]
```

## DESCRIPTION
Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.

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

### -ObjectId


```yaml
Type: String
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