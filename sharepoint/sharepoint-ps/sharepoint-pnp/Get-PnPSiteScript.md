---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsitescript
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteScript
---

# Get-PnPSiteScript

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Retrieve Site Scripts that have been registered on the current tenant.

## SYNTAX 

```powershell
Get-PnPSiteScript [-Identity <TenantSiteScriptPipeBind>]
                  [-SiteDesign <TenantSiteDesignPipeBind>]
                  [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteScript
```

Returns all registered site scripts

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteScript -Identity 5c73382d-9643-4aa0-9160-d0cba35e40fd
```

Returns a specific registered site script

## PARAMETERS

### -Identity
If specified will retrieve the specified site script

```yaml
Type: TenantSiteScriptPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -SiteDesign
If specified will retrieve the site scripts for this design

```yaml
Type: TenantSiteDesignPipeBind
Parameter Sets: (All)

Required: False
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