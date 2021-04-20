---
Module Name: PnP.PowerShell
title: Register-PnPHubSite
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Register-PnPHubSite.html
---
 
# Register-PnPHubSite

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Register-PnPHubSite.md to change this file.


**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Registers a site as a hubsite

## SYNTAX

```powershell
Register-PnPHubSite -Site <SitePipeBind> [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION
Registers a site as a hubsite

## EXAMPLES

### EXAMPLE 1
```powershell
Register-PnPHubSite -Site "https://tenant.sharepoint.com/sites/myhubsite"
```

This example registers the specified site as a hubsite

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

### -Site
The site to register as a hubsite

```yaml
Type: SitePipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

