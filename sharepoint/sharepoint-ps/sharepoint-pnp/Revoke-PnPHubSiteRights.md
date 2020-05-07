---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/revoke-pnphubsiterights
applicable: SharePoint Online
schema: 2.0.0
title: Revoke-PnPHubSiteRights
---

# Revoke-PnPHubSiteRights

## SYNOPSIS
Revoke permissions to the permissions already in place to associate sites to Hub Sites for one or more specific users

## SYNTAX 

```powershell
Revoke-PnPHubSiteRights [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Revoke-PnPHubSiteRights -Identity https://contoso.sharepoint.com/sites/hubsite -Principals "myuser@mydomain.com","myotheruser@mydomain.com"
```

This example shows how to revoke the rights of myuser and myotheruser to associate their sites with the provided Hub Site

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)