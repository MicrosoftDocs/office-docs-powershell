---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPProperty

## SYNOPSIS
Returns a previously not loaded property of a ClientObject

## SYNTAX 

```powershell
Get-PnPProperty -ClientObject <ClientObject>
                -Property <String[]>
                [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Will populate properties of an object and optionally, if needed, load the value from the server. If one property is specified its value will be returned to the output.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell

$web = Get-PnPWeb
Get-PnPProperty -ClientObject $web -Property Id, Lists
$web.Lists
```

Will load both the Id and Lists properties of the specified Web object.

### ------------------EXAMPLE 2------------------
```powershell

$list = Get-PnPList -Identity 'Site Assets'
Get-PnPProperty -ClientObject $list -Property Views
```

Will load the views object of the specified list object and return its value to the output.

## PARAMETERS

### -ClientObject
Specifies the object where the properties of should be retrieved

```yaml
Type: ClientObject
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Property
The properties to load. If one property is specified its value will be returned to the output.

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: 1
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

### Microsoft.SharePoint.Client.ClientObject

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)