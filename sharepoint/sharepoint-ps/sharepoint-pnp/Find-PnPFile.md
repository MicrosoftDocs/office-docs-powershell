---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Find-PnPFile

## SYNOPSIS
Finds a file in the virtual file system of the web.

## SYNTAX 

### Web
```powershell
Find-PnPFile -Match <String>
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### List
```powershell
Find-PnPFile -Match <String>
             -List <ListPipeBind>
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### Folder
```powershell
Find-PnPFile -Match <String>
             -Folder <FolderPipeBind>
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Find-PnPFile -Match *.master
```

Will return all masterpages located in the current web.

### ------------------EXAMPLE 2------------------
```powershell
Find-PnPFile -List "Documents" -Match *.pdf
```

Will return all pdf files located in given list.

### ------------------EXAMPLE 3------------------
```powershell
Find-PnPFile -Folder "Shared Documents/Sub Folder" -Match *.docx
```

Will return all docx files located in given folder.

## PARAMETERS

### -Folder
Folder object or relative url of a folder to query

```yaml
Type: FolderPipeBind
Parameter Sets: Folder

Required: True
Position: Named
Accept pipeline input: False
```

### -List
List title, url or an actual List object to query

```yaml
Type: ListPipeBind
Parameter Sets: List

Required: True
Position: Named
Accept pipeline input: False
```

### -Match
Wildcard query

```yaml
Type: String
Parameter Sets: Web, List, Folder

Required: True
Position: 0
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

### Microsoft.SharePoint.Client.File

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)