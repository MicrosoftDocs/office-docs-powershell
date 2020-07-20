---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsitedesignrights
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteDesignRights
---

# Get-PnPSiteDesignRights

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns the principals with design rights on a specific Site Design

## SYNTAX 

```powershell
Get-PnPSiteDesignRights -Identity <TenantSiteDesignPipeBind>
                        [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteDesignRights -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd
```

Returns the principals with rights on a specific site design

## PARAMETERS

### -Identity
The ID of the Site Design to receive the rights for

```yaml
Type: TenantSiteDesignPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
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