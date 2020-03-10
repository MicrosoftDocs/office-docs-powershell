---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnporgnewssite
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPOrgNewsSite

## SYNOPSIS
Returns the list of all the configured organizational news sites.

## SYNTAX 

```powershell
Get-PnPOrgNewsSite [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOrgNewsSite
```

Returns the list of all the configured organizational news sites.

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