---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPWebPermission

## SYNOPSIS
Set permissions

## SYNTAX 

### Group
```powershell
Set-PnPWebPermission -Group <GroupPipeBind>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

### User
```powershell
Set-PnPWebPermission -User <String>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

### GroupByWebIdentity
```powershell
Set-PnPWebPermission -Identity <WebPipeBind>
                     -Group <GroupPipeBind>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

### UserByWebIdentity
```powershell
Set-PnPWebPermission -Identity <WebPipeBind>
                     -User <String>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

### GroupByWebUrl
```powershell
Set-PnPWebPermission -Url <String>
                     -Group <GroupPipeBind>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

### UserByWebUrl
```powershell
Set-PnPWebPermission -Url <String>
                     -User <String>
                     [-AddRole <String[]>]
                     [-RemoveRole <String[]>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets web permissions

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPWebPermission -Url projectA -User 'user@contoso.com' -AddRole 'Contribute'
```

Adds the 'Contribute' permission to the user 'user@contoso.com' for a web, specified by its site relative url

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPWebPermission -Identity 5fecaf67-6b9e-4691-a0ff-518fc9839aa0 -User 'user@contoso.com' -RemoveRole 'Contribute'
```

Removes the 'Contribute' permission to the user 'user@contoso.com' for a web, specified by its ID

## PARAMETERS

### -AddRole
The role that must be assigned to the group or user

```yaml
Type: String[]
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Group


```yaml
Type: GroupPipeBind
Parameter Sets: Group, GroupByWebIdentity, GroupByWebUrl

Required: True
Position: Named
Accept pipeline input: False
```

### -Identity
Identity/Id/Web object

```yaml
Type: WebPipeBind
Parameter Sets: GroupByWebIdentity, UserByWebIdentity

Required: True
Position: Named
Accept pipeline input: True
```

### -RemoveRole
The role that must be removed from the group or user

```yaml
Type: String[]
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
The site relative url of the web, e.g. 'Subweb1'

```yaml
Type: String
Parameter Sets: GroupByWebUrl, UserByWebUrl

Required: True
Position: Named
Accept pipeline input: False
```

### -User


```yaml
Type: String
Parameter Sets: User, UserByWebIdentity, UserByWebUrl

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