---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnphubsite
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPHubSite

## SYNOPSIS
Sets hubsite properties

## SYNTAX

```powershell
Set-PnPHubSite [-SiteDesignId <GuidPipeBind>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -Title "My New Title"
```

Sets the title of the hubsite

## PARAMETERS

### -SiteDesignId


```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: False
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
