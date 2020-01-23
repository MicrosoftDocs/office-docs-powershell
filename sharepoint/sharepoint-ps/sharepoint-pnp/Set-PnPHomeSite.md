---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnphomesite
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPHomeSite

## SYNOPSIS
Sets the home site for your tenant

## SYNTAX

```powershell
Set-PnPHomeSite -Url <String>
                [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPHomeSite -Url https://yourtenant.sharepoint.com/sites/myhome
```

Sets the home site to the provided site collection url

## PARAMETERS

### -Url
The url of the site to set as the home site

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

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
