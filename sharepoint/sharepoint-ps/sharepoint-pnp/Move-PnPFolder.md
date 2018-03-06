---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Move-PnPFolder

## SYNOPSIS
Move a folder to another location in the current web

## SYNTAX 

```powershell
Move-PnPFolder -Folder <String>
               -TargetFolder <String>
               [-Web <WebPipeBind>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Move-PnPFolder -Folder Documents/Reports -TargetFolder 'Archived Reports'
```

This will move the folder Reports in the Documents library to the 'Archived Reports' library

### ------------------EXAMPLE 2------------------
```powershell
Move-PnPFolder -Folder 'Shared Documents/Reports/2016/Templates' -TargetFolder 'Shared Documents/Reports'
```

This will move the folder Templates to the new location in 'Shared Documents/Reports'

## PARAMETERS

### -Folder
The folder to move

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -TargetFolder
The new parent location to which the folder should be moved to

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Folder

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)