---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantcdnpolicies
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantCdnPolicies
---

# Get-PnPTenantCdnPolicies

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns the CDN Policies for the specified CDN (Public | Private).

## SYNTAX 

```powershell
Get-PnPTenantCdnPolicies -CdnType <SPOTenantCdnType>
                         [-Connection <PnPConnection>]
```

## DESCRIPTION
Enables or disabled the public or private Office 365 Content Delivery Network (CDN).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantCdnPolicies -CdnType Public
```

Returns the policies for the specified CDN type

## PARAMETERS

### -CdnType
The type of cdn to retrieve the policies from

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