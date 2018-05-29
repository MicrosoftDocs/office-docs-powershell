---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPHubSite

## SYNOPSIS
Sets hubsite properties

## SYNTAX 

```powershell
Set-PnPHubSite [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPHubSite -Identity https://tenant.sharepoint.com/sites/myhubsite -Title "My New Title" -LogoUrl https://tenant.sharepoint.com/sites/myhubsite/SiteAssets/hublogo.png `
-Description "My New Description”
```

Sets the title of the hubsite

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

## Optional Parameters
### Title
-The display name of the hub.
```yaml
Type:	String
Position:	Named
Required: False
Accept pipeline input:	False
```
### LogoUrl
-The URL of a logo to use in the hub navigation.
```yaml
Type:	String
Position:	Named
Required: False
Accept pipeline input:	False
```
### Description
-A description of the hub site.
```yaml
Type:	String
Position:	Named
Required: False
Accept pipeline input:	False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
