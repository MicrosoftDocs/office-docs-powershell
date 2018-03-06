---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Add-PnPUserToGroup

## SYNOPSIS
Adds a user to a group

## SYNTAX 

### Internal
```powershell
Add-PnPUserToGroup -LoginName <String>
                   -Identity <GroupPipeBind>
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

### External
```powershell
Add-PnPUserToGroup -Identity <GroupPipeBind>
                   -EmailAddress <String>
                   [-SendEmail [<SwitchParameter>]]
                   [-EmailBody <String>]
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPUserToGroup -LoginName user@company.com -Identity 'Marketing Site Members'
```

Add the specified user to the group "Marketing Site Members"

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPUserToGroup -LoginName user@company.com -Identity 5
```

Add the specified user to the group with Id 5

## PARAMETERS

### -EmailAddress
The email address of the user

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: External

Required: True
Position: Named
Accept pipeline input: False
```

### -EmailBody


Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: External

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The group id, group name or group object to add the user to.

```yaml
Type: GroupPipeBind
Parameter Sets: Internal, External

Required: True
Position: Named
Accept pipeline input: True
```

### -LoginName
The login name of the user

```yaml
Type: String
Parameter Sets: Internal

Required: True
Position: Named
Accept pipeline input: False
```

### -SendEmail


Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: External

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