---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---
# Get-PnPSite

## SYNOPSIS
Returns the current site collection from the context.

## SYNTAX

###
```powershell
Get-PnPSite [-Includes <String[]>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSite
```

Gets the current site

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSite -Includes RootWeb,ServerRelativeUrl
```

Gets the current site specifying to include RootWeb and ServerRelativeUrl properties. For the full list of properties see https://docs.microsoft.com/previous-versions/office/sharepoint-server/ee538579(v%3doffice.15)

## PARAMETERS

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
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

## OUTPUTS

### Microsoft.SharePoint.Client.Site

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
