---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPWebPart

## SYNOPSIS
Returns a webpart definition object

## SYNTAX 

```powershell
Get-PnPWebPart -ServerRelativePageUrl <String>
               [-Identity <WebPartPipeBind>]
               [-Web <WebPipeBind>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPWebPart -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx"
```

Returns all webparts defined on the given page.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWebPart -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx" -Identity a2875399-d6ff-43a0-96da-be6ae5875f82
```

Returns a specific webpart defined on the given page.

## PARAMETERS

### -Identity
The identity of the webpart, this can be the webpart guid or an webpart object

```yaml
Type: WebPartPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -ServerRelativePageUrl
Full server relative URL of the webpart page, e.g. /sites/mysite/sitepages/home.aspx

```yaml
Type: String
Parameter Sets: (All)
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

## OUTPUTS

### List<Microsoft.SharePoint.Client.WebParts.WebPartDefinition>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)