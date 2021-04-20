---
Module Name: PnP.PowerShell
title: Remove-PnPTenantSyncClientRestriction
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPTenantSyncClientRestriction.html
---
 
# Remove-PnPTenantSyncClientRestriction

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPTenantSyncClientRestriction.md to change this file.


**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns organization-level OneDrive synchronization restriction settings

## SYNTAX

```powershell
Remove-PnPTenantSyncClientRestriction
```

## DESCRIPTION
The Remove-PnPTenantSyncClientRestriction cmdlet disables the feature for the tenant, but does not remove any present domain GUID entries from the safe sender recipient list. After the Remove-PnPTenantSyncClientRestriction cmdlet is run it can take up to 24 hours for change to take effect. This parameter will also remove any values set from the GrooveBlockOption parameter for syncing.

## EXAMPLES

### EXAMPLE 1
```powershell
Remove-PnPTenantSyncClientRestriction
```

This example disables this feature for the tenant.

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

