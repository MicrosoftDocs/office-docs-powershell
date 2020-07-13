---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnphubsite
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPHubSite
---

# Get-PnPHubSite

## SYNOPSIS
Retrieve all or a specific hubsite.

## SYNTAX 

```powershell
Get-PnPHubSite [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHubSite
```

Returns all hubsite properties

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPHubSite -Identity https://contoso.sharepoint.com/sites/myhubsite
```

Returns the properties of the specified hubsite

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)