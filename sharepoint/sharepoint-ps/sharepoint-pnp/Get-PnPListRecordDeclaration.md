---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPListRecordDeclaration

## SYNOPSIS
Returns the manual record declaration settings for a list

## SYNTAX 

```powershell
Get-PnPListRecordDeclaration -List <ListPipeBind>
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPListRecordDeclaration -List "Documents"
```

Returns the record declaration setting for the list "Documents"

## PARAMETERS

### -List
The list to retrieve the record declaration settings for

```yaml
Type: ListPipeBind
Parameter Sets: (All)

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)