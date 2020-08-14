---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantcdnorigin
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantCdnOrigin
---

# Get-PnPTenantCdnOrigin

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns the current registered origins from the public or private content delivery network (CDN).

## SYNTAX 

```powershell
Get-PnPTenantCdnOrigin -CdnType <SPOTenantCdnType>
                       [-Connection <PnPConnection>]
```

## DESCRIPTION
Returns the current registered origins from the public or private content delivery network (CDN).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantCdnOrigin -CdnType Public
```

Returns the configured CDN origins for the specified CDN type

## PARAMETERS

### -CdnType
The type of cdn to retrieve the origins from

```yaml
Type: SPOTenantCdnType
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