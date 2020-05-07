---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpindexedproperty
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Add-PnPIndexedProperty
---

# Add-PnPIndexedProperty

## SYNOPSIS
Marks the value of the propertybag key specified to be indexed by search.

## SYNTAX 

```powershell
Add-PnPIndexedProperty -Key <String>
                       [-List <ListPipeBind>]
                       [-Web <WebPipeBind>]
                       [-Connection <SPOnlineConnection>]
```

## PARAMETERS

### -Key
Key of the property bag value to be indexed

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -List
The list object or name where to set the indexed property

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