---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpindexedproperty
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---
# Remove-PnPIndexedProperty

## SYNOPSIS
Removes a key from propertybag to be indexed by search. The key and it's value remain in the propertybag, however it will not be indexed anymore.

## SYNTAX

```powershell
Remove-PnPIndexedProperty -Key <String>
                          [-List <ListPipeBind>]
                          [-Web <WebPipeBind>]
                          [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPIndexedProperty -key "MyIndexProperty"
```

Removes the Indexed property "MyIndexProperty" from the current web

## PARAMETERS

### -Key
Key of the property bag value to be removed from indexing

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -List
The list object or name from where to remove the indexed properties

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
