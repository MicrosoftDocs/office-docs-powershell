---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPListItemPermission

## SYNOPSIS
Sets list item permissions

## SYNTAX 

### Inherit
```powershell
Set-PnPListItemPermission -List <ListPipeBind>
                          -Identity <ListItemPipeBind>
                          [-InheritPermissions [<SwitchParameter>]]
                          [-Web <WebPipeBind>]
                          [-Connection <SPOnlineConnection>]
```

### Group
```powershell
Set-PnPListItemPermission -Group <GroupPipeBind>
                          -List <ListPipeBind>
                          -Identity <ListItemPipeBind>
                          [-AddRole <String>]
                          [-RemoveRole <String>]
                          [-ClearExisting [<SwitchParameter>]]
                          [-Web <WebPipeBind>]
                          [-Connection <SPOnlineConnection>]
```

### User
```powershell
Set-PnPListItemPermission -User <String>
                          -List <ListPipeBind>
                          -Identity <ListItemPipeBind>
                          [-AddRole <String>]
                          [-RemoveRole <String>]
                          [-ClearExisting [<SwitchParameter>]]
                          [-Web <WebPipeBind>]
                          [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPListItemPermission -List 'Documents' -Identity 1 -User 'user@contoso.com' -AddRole 'Contribute'
```

Adds the 'Contribute' permission to the user 'user@contoso.com' for listitem with id 1 in the list 'Documents'

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPListItemPermission -List 'Documents' -Identity 1 -User 'user@contoso.com' -RemoveRole 'Contribute'
```

Removes the 'Contribute' permission to the user 'user@contoso.com' for listitem with id 1 in the list 'Documents'

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPListItemPermission -List 'Documents' -Identity 1 -User 'user@contoso.com' -AddRole 'Contribute' -ClearExisting
```

Adds the 'Contribute' permission to the user 'user@contoso.com' for listitem with id 1 in the list 'Documents' and removes all other permissions

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPListItemPermission -List 'Documents' -Identity 1 -InheritPermissions
```

Resets permissions for listitem with id 1 to inherit permissions from the list 'Documents'

## PARAMETERS

### -AddRole
The role that must be assigned to the group or user

```yaml
Type: String
Parameter Sets: User, Group

Required: False
Position: Named
Accept pipeline input: False
```

### -ClearExisting
Clear all existing permissions

```yaml
Type: SwitchParameter
Parameter Sets: User, Group

Required: False
Position: Named
Accept pipeline input: False
```

### -Group


```yaml
Type: GroupPipeBind
Parameter Sets: Group

Required: True
Position: Named
Accept pipeline input: False
```

### -Identity
The ID of the listitem, or actual ListItem object

```yaml
Type: ListItemPipeBind
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: True
```

### -InheritPermissions
Inherit permissions from the list, removing unique permissions

```yaml
Type: SwitchParameter
Parameter Sets: Inherit

Required: False
Position: Named
Accept pipeline input: False
```

### -List
The ID, Title or Url of the list.

```yaml
Type: ListPipeBind
Parameter Sets: __AllParameterSets

Required: True
Position: 0
Accept pipeline input: True
```

### -RemoveRole
The role that must be removed from the group or user

```yaml
Type: String
Parameter Sets: User, Group

Required: False
Position: Named
Accept pipeline input: False
```

### -User


```yaml
Type: String
Parameter Sets: User

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