---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPFile

## SYNOPSIS
Downloads a file.

## SYNTAX 

### Return as file object
```powershell
Get-PnPFile -Url <String>
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

### Return as list item
```powershell
Get-PnPFile -Url <String>
            [-AsListItem [<SwitchParameter>]]
            [-ThrowExceptionIfFileNotFound [<SwitchParameter>]]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

### Return as string
```powershell
Get-PnPFile -Url <String>
            [-AsString [<SwitchParameter>]]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

### Save to local path
```powershell
Get-PnPFile -Url <String>
            -AsFile [<SwitchParameter>]
            [-Path <String>]
            [-Filename <String>]
            [-Force [<SwitchParameter>]]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPFile -Url /sites/project/_catalogs/themes/15/company.spcolor
```

Retrieves the file and downloads it to the current folder

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPFile -Url /sites/project/_catalogs/themes/15/company.spcolor -Path c:\temp -FileName company.spcolor -AsFile
```

Retrieves the file and downloads it to c:\temp\company.spcolor

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPFile -Url /sites/project/_catalogs/themes/15/company.spcolor -AsString
```

Retrieves the file and outputs its contents to the console

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPFile -Url /sites/project/_catalogs/themes/15/company.spcolor -AsFile
```

Retrieves the file and returns it as a File object

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPFile -Url /sites/project/_catalogs/themes/15/company.spcolor -AsListItem
```

Retrieves the file and returns it as a ListItem object

### ------------------EXAMPLE 6------------------
```powershell
Get-PnPFile -Url _catalogs/themes/15/company.spcolor -Path c:\temp -FileName company.spcolor -AsFile
```

Retrieves the file by site relative URL and downloads it to c:\temp\company.spcolor

## PARAMETERS

### -AsFile


```yaml
Type: SwitchParameter
Parameter Sets: Save to local path

Required: True
Position: Named
Accept pipeline input: False
```

### -AsListItem
Returns the file as a listitem showing all its properties

```yaml
Type: SwitchParameter
Parameter Sets: Return as list item

Required: False
Position: Named
Accept pipeline input: False
```

### -AsString
Retrieve the file contents as a string

```yaml
Type: SwitchParameter
Parameter Sets: Return as string

Required: False
Position: Named
Accept pipeline input: False
```

### -Filename
Name for the local file

```yaml
Type: String
Parameter Sets: Save to local path

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
Overwrites the file if it exists.

```yaml
Type: SwitchParameter
Parameter Sets: Save to local path

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
Local path where the file should be saved

```yaml
Type: String
Parameter Sets: Save to local path

Required: False
Position: Named
Accept pipeline input: False
```

### -ThrowExceptionIfFileNotFound
If provided in combination with -AsListItem, a Sytem.ArgumentException will be thrown if the file specified in the -Url argument does not exist. Otherwise it will return nothing instead.

```yaml
Type: SwitchParameter
Parameter Sets: Return as list item

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
The URL (server or site relative) to the file

```yaml
Type: String
Parameter Sets: Return as file object, Return as list item, Save to local path, Return as string
Aliases: ServerRelativeUrl,SiteRelativeUrl

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