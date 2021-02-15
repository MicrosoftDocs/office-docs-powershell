---
Module Name: PnP.PowerShell
title: Get-PnPTenantRecycleBinItem
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPTenantRecycleBinItem.html
---
 
# Get-PnPTenantRecycleBinItem

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPTenantRecycleBinItem.md to change this file.


**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Returns all modern and classic site collections in the tenant scoped recycle bin

## SYNTAX

```powershell
Get-PnPTenantRecycleBinItem [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION
This command will return all the items in the tenant recycle bin for the Office 365 tenant you are connected to. Be sure to connect to the SharePoint Online Admin endpoint (https://yourtenantname-admin.sharepoint.com) in order for this command to work.

## EXAMPLES

### EXAMPLE 1
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

