---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantsyncclientrestriction
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTenantSyncClientRestriction
---

# Get-PnPTenantSyncClientRestriction

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns organization-level OneDrive synchronization restriction settings

## SYNTAX 

```powershell
Get-PnPTenantSyncClientRestriction [-Connection <PnPConnection>]
```

## DESCRIPTION
Returns organization-level OneDrive synchronization restriction properties such as BlockMacSync,
OptOutOfGrooveBlock, and TenantRestrictionEnabled.

Currently, there are no parameters for this cmdlet.

You must have the SharePoint Online admin or Global admin role to run the cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantSyncClientRestriction
```

This example returns all tenant OneDrive synchronization restriction settings

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

### SharePointPnP.PowerShell.Commands.Model.SPOTenantSyncClientRestriction

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)