---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# New-PnPUser

## SYNOPSIS
Adds a user to the built-in Site User Info List and returns a user object

## SYNTAX 

```powershell
New-PnPUser -LoginName <String>
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
New-PnPUser -LoginName user@company.com
```

Adds a new user with the login user@company.com to the current site

## PARAMETERS

### -LoginName
The users login name (user@company.com)

```yaml
Type: String
Parameter Sets: (All)
Aliases: LogonName

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

## OUTPUTS

### Microsoft.SharePoint.Client.User

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)