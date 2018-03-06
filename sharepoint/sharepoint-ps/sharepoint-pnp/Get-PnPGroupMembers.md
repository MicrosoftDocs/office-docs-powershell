---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPGroupMembers

## SYNOPSIS
Retrieves all members of a group

## SYNTAX 

```powershell
Get-PnPGroupMembers -Identity <GroupPipeBind>
                    [-Web <WebPipeBind>]
                    [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
This command will return all the users that are a member of the provided SharePoint Group

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPGroupMembers -Identity 'Marketing Site Members'
```

Returns all the users that are a member of the group 'Marketing Site Members' in the current sitecollection

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPGroup | Get-PnPGroupMembers
```

Returns all the users that are a member of any of the groups in the current sitecollection

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPGroup | ? Title -Like 'Marketing*' | Get-PnPGroupMembers
```

Returns all the users that are a member of any of the groups of which their name starts with the word 'Marketing' in the current sitecollection

## PARAMETERS

### -Identity
A group object, an ID or a name of a group

```yaml
Type: GroupPipeBind
Parameter Sets: (All)

Required: True
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

## OUTPUTS

### Microsoft.SharePoint.Client.User

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)