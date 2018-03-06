---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPList

## SYNOPSIS
Returns a List object

## SYNTAX 

### 
```powershell
Get-PnPList [-Includes <String[]>]
            [-Identity <ListPipeBind>]
            [-ThrowExceptionIfListNotFound [<SwitchParameter>]]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPList
```

Returns all lists in the current web

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPList -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

Returns a list with the given id.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPList -Identity Lists/Announcements
```

Returns a list with the given url.

## PARAMETERS

### -Identity
The ID, name or Url (Lists/MyList) of the list.

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -ThrowExceptionIfListNotFound
Switch parameter if an exception should be thrown if the requested list does not exist (true) or if omitted, nothing will be returned in case the list does not exist

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
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

## OUTPUTS

### Microsoft.SharePoint.Client.List

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)