---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPWikiPageContent

## SYNOPSIS
Sets the contents of a wikipage

## SYNTAX 

### STRING
```powershell
Set-PnPWikiPageContent -Content <String>
                       -ServerRelativePageUrl <String>
                       [-Web <WebPipeBind>]
                       [-Connection <SPOnlineConnection>]
```

### FILE
```powershell
Set-PnPWikiPageContent -Path <String>
                       -ServerRelativePageUrl <String>
                       [-Web <WebPipeBind>]
                       [-Connection <SPOnlineConnection>]
```

## PARAMETERS

### -Content


```yaml
Type: String
Parameter Sets: STRING

Required: True
Position: Named
Accept pipeline input: False
```

### -Path


```yaml
Type: String
Parameter Sets: FILE

Required: True
Position: Named
Accept pipeline input: False
```

### -ServerRelativePageUrl
Site Relative Page Url

```yaml
Type: String
Parameter Sets: FILE, STRING
Aliases: PageUrl

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