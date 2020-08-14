---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantrecyclebinitem
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantRecycleBinItem
---

# Get-PnPTenantRecycleBinItem

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns all modern and classic site collections in the tenant scoped recycle bin

## SYNTAX 

```powershell
Get-PnPTenantRecycleBinItem [-Connection <PnPConnection>]
```

## DESCRIPTION
This command will return all the items in the tenant recycle bin for the Office 365 tenant you are connected to. Be sure to connect to the SharePoint Online Admin endpoint (https://yourtenantname-admin.sharepoint.com) in order for this command to work.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantRecycleBinItem
```

Returns all modern and classic site collections in the tenant scoped recycle bin

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.Online.SharePoint.TenantAdministration.DeletedSiteProperties

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)