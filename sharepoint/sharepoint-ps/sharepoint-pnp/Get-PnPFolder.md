---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpfolder
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPFolder
---

# Get-PnPFolder

## SYNOPSIS
Return a folder object

## SYNTAX 

### 
```powershell
Get-PnPFolder [-Includes <String[]>]
              [-Web <WebPipeBind>]
              [-Connection <PnPConnection>]
```

### Folder By Url
```powershell
Get-PnPFolder -Url <String>
              [-Web <WebPipeBind>]
              [-Connection <PnPConnection>]
```

### Folders In List
```powershell
Get-PnPFolder -List <ListPipeBind>
              [-Web <WebPipeBind>]
              [-Connection <PnPConnection>]
```

## DESCRIPTION
Retrieves a folder if it exists or all folders inside a provided list or library. Use Resolve-PnPFolder to create the folder if it does not exist.

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

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPFolder -List "Shared Documents"
```

Returns the folder(s) residing inside a folder called 'Shared Documents'

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

### -List
Name, ID or instance of a list or document library to retrieve the folders residing in it for.

```yaml
Type: ListPipeBind
Parameter Sets: Folders In List

Required: True
Position: 1
Accept pipeline input: False
```

### -Url
Site or server relative URL of the folder to retrieve. In the case of a server relative url, make sure that the url starts with the managed path as the current web.

```yaml
Type: String
Parameter Sets: Folder By Url
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
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Folder

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Resolve-PnPFolder](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/sharepoint/sharepoint-ps/sharepoint-pnp/Resolve-PnPFolder.md)