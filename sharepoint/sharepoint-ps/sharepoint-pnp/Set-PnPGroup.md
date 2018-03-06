---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPGroup

## SYNOPSIS
Updates a group

## SYNTAX 

```powershell
Set-PnPGroup -Identity <GroupPipeBind>
             [-SetAssociatedGroup <AssociatedGroupType>]
             [-AddRole <String>]
             [-RemoveRole <String>]
             [-Title <String>]
             [-Owner <String>]
             [-Description <String>]
             [-AllowRequestToJoinLeave <Boolean>]
             [-AutoAcceptRequestToJoinLeave <Boolean>]
             [-AllowMembersEditMembership <Boolean>]
             [-OnlyAllowMembersViewMembership <Boolean>]
             [-RequestToJoinEmail <String>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPGroup -Identity 'My Site Members' -SetAssociatedGroup Members
```

Sets the SharePoint group with the name 'My Site Members' as the associated members group

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPGroup -Identity 'My Site Members' -Owner 'site owners'
```

Sets the SharePoint group with the name 'site owners' as the owner of the SharePoint group with the name 'My Site Members'

## PARAMETERS

### -AddRole
Name of the permission set to add to this SharePoint group

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowMembersEditMembership
A switch parameter that specifies whether group members can modify membership in the group

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowRequestToJoinLeave
A switch parameter that specifies whether to allow users to request membership in the group and to allow users to request to leave the group

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -AutoAcceptRequestToJoinLeave
A switch parameter that specifies whether users are automatically added or removed when they make a request

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The description for the group

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
A group object, an ID or a name of a group

```yaml
Type: GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -OnlyAllowMembersViewMembership
A switch parameter that specifies whether only group members are allowed to view the list of members in the group

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Owner
The owner for the group, which can be a user or another group

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RemoveRole
Name of the permission set to remove from this SharePoint group

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RequestToJoinEmail
The e-mail address to which membership requests are sent

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SetAssociatedGroup
One of the associated group types (Visitors, Members, Owners

```yaml
Type: AssociatedGroupType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
The title for the group

```yaml
Type: String
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