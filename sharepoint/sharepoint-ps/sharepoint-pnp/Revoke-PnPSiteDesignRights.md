---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/revoke-pnpsitedesignrights
applicable: SharePoint Online
schema: 2.0.0
title: Revoke-PnPSiteDesignRights
---

# Revoke-PnPSiteDesignRights

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Revokes the specified principals rights to use the site design.

## SYNTAX 

```powershell
Revoke-PnPSiteDesignRights -Identity <TenantSiteDesignPipeBind>
                           -Principals <String[]>
                           [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Revoke-PnPSiteDesignRights -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd -Principals "myuser@mydomain.com","myotheruser@mydomain.com"
```

Revokes rights to the specified principals on the site design specified

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteDesign -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd | Revoke-PnPSiteDesignRights -Principals "myuser@mydomain.com","myotheruser@mydomain.com"
```

Revokes rights to the specified principals on the site design specified

## PARAMETERS

### -Identity
The site design to use.

```yaml
Type: TenantSiteDesignPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Principals
One or more principals to revoke.

```yaml
Type: String[]
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