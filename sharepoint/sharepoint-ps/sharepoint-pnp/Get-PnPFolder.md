---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPFolder

## SYNOPSIS
Return a folder object

## SYNTAX 

### 
```powershell
Get-PnPFolder -Url <String>
              [-Includes <String[]>]
              [-Web <WebPipeBind>]
              [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Retrieves a folder if it exists. Use Ensure-PnPFolder to create the folder if it does not exist.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPFolder -Url "Shared Documents"
```

Returns the folder called 'Shared Documents' which is located in the root of the current web

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPFolder -Url "/sites/demo/Shared Documents"
```

Returns the folder called 'Shared Documents' which is located in the root of the current web

## PARAMETERS

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Url
Site or server relative URL of the folder to retrieve. In the case of a server relative url, make sure that the url starts with the managed path as the current web.

```yaml
Type: String
Parameter Sets: (All)
Aliases: RelativeUrl

Required: True
Position: 0
Accept pipeline input: True
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
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

## OUTPUTS

### Microsoft.SharePoint.Client.Folder

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)[Ensure-PnPFolder](https://github.com/OfficeDev/PnP-PowerShell/blob/master/Documentation/EnsureSPOFolder.md)