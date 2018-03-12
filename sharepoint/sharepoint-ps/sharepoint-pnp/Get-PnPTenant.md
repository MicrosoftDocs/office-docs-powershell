---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPTenant

## SYNOPSIS
Returns organization-level site collection properties

## SYNTAX 

```powershell
Get-PnPTenant [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns organization-level site collection properties such as StorageQuota, StorageQuotaAllocated, ResourceQuota,
ResourceQuotaAllocated, and SiteCreationMode.

Currently, there are no parameters for this cmdlet.

You must be a SharePoint Online global administrator to run the cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenant
```

This example returns all tenant settings

## PARAMETERS

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)