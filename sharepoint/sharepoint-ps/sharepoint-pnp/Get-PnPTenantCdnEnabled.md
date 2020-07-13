---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantcdnenabled
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantCdnEnabled
---

# Get-PnPTenantCdnEnabled

## SYNOPSIS
Retrieves if the Office 365 Content Delivery Network has been enabled.

## SYNTAX 

```powershell
Get-PnPTenantCdnEnabled -CdnType <SPOTenantCdnType>
                        [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## DESCRIPTION
Enables or disabled the public or private Office 365 Content Delivery Network (CDN).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantCdnEnabled -CdnType Public
```

Returns the enabled status of the specified CDN

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