---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPHomePage

## SYNOPSIS
Return the homepage

## SYNTAX 

```powershell
Get-PnPHomePage [-Web <WebPipeBind>]
                [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns the URL to the page set as home page

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHomePage
```

Will return the URL of the home page of the web.

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

### System.String

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)