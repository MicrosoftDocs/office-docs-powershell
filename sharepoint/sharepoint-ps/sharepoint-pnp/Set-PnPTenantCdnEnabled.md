---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnptenantcdnenabled
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTenantCdnEnabled
---

# Set-PnPTenantCdnEnabled

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Enables or disabled the public or private Office 365 Content Delivery Network (CDN).

## SYNTAX 

```powershell
Set-PnPTenantCdnEnabled -Enable <Boolean>
                        -CdnType <CdnType>
                        [-Connection <PnPConnection>]
```

## DESCRIPTION
Enables or disabled the public or private Office 365 Content Delivery Network (CDN).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTenantCdnEnabled -CdnType Public -Enable $true
```

This example sets the Public CDN enabled.

## PARAMETERS

### -CdnType
The type of cdn to enable or disable

```yaml
Type: CdnType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Enable
Specify to enable or disable

```yaml
Type: Boolean
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