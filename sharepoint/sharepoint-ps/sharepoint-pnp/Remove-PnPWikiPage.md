---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Remove-PnPWikiPage

## SYNOPSIS
Removes a wiki page

## SYNTAX 

### SERVER
```powershell
Remove-PnPWikiPage -ServerRelativePageUrl <String>
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

### SITE
```powershell
Remove-PnPWikiPage -SiteRelativePageUrl <String>
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPWikiPage -PageUrl '/pages/wikipage.aspx'
```

Removes the page '/pages/wikipage.aspx'

## PARAMETERS

### -ServerRelativePageUrl


```yaml
Type: String
Parameter Sets: SERVER
Aliases: PageUrl

Required: True
Position: 0
Accept pipeline input: True
```

### -SiteRelativePageUrl


```yaml
Type: String
Parameter Sets: SITE

Required: True
Position: 0
Accept pipeline input: True
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

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)