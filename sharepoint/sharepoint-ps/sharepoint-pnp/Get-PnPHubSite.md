---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPHubSite

## SYNOPSIS
Retrieve all or a specific hubsite.

## SYNTAX 

```powershell
Get-PnPHubSite [-Connection <SPOnlineConnection>]
```

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
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)