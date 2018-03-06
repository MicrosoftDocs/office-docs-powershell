---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPSiteSearchQueryResults

## SYNOPSIS
Executes a search query to retrieve indexed site collections

## SYNTAX 

### Limit
```powershell
Get-PnPSiteSearchQueryResults [-StartRow <Int>]
                              [-MaxResults <Int>]
                              [-Query <String>]
                              [-Web <WebPipeBind>]
                              [-Connection <SPOnlineConnection>]
```

### All
```powershell
Get-PnPSiteSearchQueryResults [-All [<SwitchParameter>]]
                              [-Query <String>]
                              [-Web <WebPipeBind>]
                              [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteSearchQueryResults
```

Returns the top 500 site collections indexed by SharePoint Search

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteSearchQueryResults -Query "WebTemplate:STS"
```

Returns the top 500 site collections indexed by SharePoint Search which have are based on the STS (Team Site) template

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPSiteSearchQueryResults -Query "WebTemplate:SPSPERS"
```

Returns the top 500 site collections indexed by SharePoint Search which have are based on the SPSPERS (MySite) template, up to the MaxResult limit

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPSiteSearchQueryResults -Query "Title:Intranet*"
```

Returns the top 500 site collections indexed by SharePoint Search of which the title starts with the word Intranet

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPSiteSearchQueryResults -MaxResults 10
```

Returns the top 10 site collections indexed by SharePoint Search

### ------------------EXAMPLE 6------------------
```powershell
Get-PnPSiteSearchQueryResults -All
```

Returns absolutely all site collections indexed by SharePoint Search

## PARAMETERS

### -All
Automatically page results until the end to get more than 500 sites. Use with caution!

```yaml
Type: SwitchParameter
Parameter Sets: All

Required: False
Position: Named
Accept pipeline input: False
```

### -MaxResults
Maximum amount of search results to return. Default and max is 500 search results.

```yaml
Type: Int
Parameter Sets: Limit

Required: False
Position: Named
Accept pipeline input: False
```

### -Query
Search query in Keyword Query Language (KQL) to execute to refine the returned sites. If omitted, all indexed sites will be returned.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: 0
Accept pipeline input: True
```

### -StartRow
Search result item to start returning the results from. Useful for paging. Leave at 0 to return all results.

```yaml
Type: Int
Parameter Sets: Limit

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

### List<System.Object>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)