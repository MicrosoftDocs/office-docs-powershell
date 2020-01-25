---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnphomesite
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPHomeSite

## SYNOPSIS
Returns the home site url for your tenant

## SYNTAX

```powershell
Get-PnPHomeSite [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHomeSite
```

Returns the home site url for your tenant

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
