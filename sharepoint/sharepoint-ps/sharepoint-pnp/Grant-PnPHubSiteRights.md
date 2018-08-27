---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Grant-PnPHubSiteRights

## SYNOPSIS
Grant Permissions to associate sites to Hub Sites.

## SYNTAX 

```powershell
Grant-PnPHubSiteRights [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Grant-PnPHubSiteRights -Identity https://contoso.sharepoint.com/sites/hubsite -Principals "myuser@mydomain.com","myotheruser@mydomain.com" -Rights Join
```

This example shows how to grant right to myuser and myotheruser to associate their sites with hubsite

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