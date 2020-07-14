---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpfolderitem
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPFolderItem
---

# Get-PnPFolderItem

## SYNOPSIS
List content in folder

## SYNTAX 

### Folder via url
```powershell
Get-PnPFolderItem [-FolderSiteRelativeUrl <String>]
                  [-ItemType <String>]
                  [-ItemName <String>]
                  [-Recursive [<SwitchParameter>]]
                  [-Web <WebPipeBind>]
                  [-Connection <PnPConnection>]
```

### Folder via pipebind
```powershell
Get-PnPFolderItem [-Identity <FolderPipeBind>]
                  [-ItemType <String>]
                  [-ItemName <String>]
                  [-Recursive [<SwitchParameter>]]
                  [-Web <WebPipeBind>]
                  [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPFolderItem -FolderSiteRelativeUrl "SitePages"
```

Returns the contents of the folder SitePages which is located in the root of the current web

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPFolderItem -FolderSiteRelativeUrl "SitePages" -ItemName "Default.aspx"
```

Returns the file 'Default.aspx' which is located in the folder SitePages which is located in the root of the current web

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPFolderItem -FolderSiteRelativeUrl "SitePages" -ItemType Folder
```

Returns all folders in the folder SitePages which is located in the root of the current web

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPFolderItem -FolderSiteRelativeUrl "SitePages" -ItemType File
```

Returns all files in the folder SitePages which is located in the root of the current web

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPFolderItem -FolderSiteRelativeUrl "SitePages" -Recursive
```

Returns all files and folders, including contents of any subfolders, in the folder SitePages which is located in the root of the current web

## PARAMETERS

### -FolderSiteRelativeUrl
The site relative URL of the folder to retrieve

```yaml
Type: String
Parameter Sets: Folder via url

Required: False
Position: 0
Accept pipeline input: True
```

### -Identity
A folder instance to the folder to retrieve

```yaml
Type: FolderPipeBind
Parameter Sets: Folder via pipebind

Required: False
Position: 0
Accept pipeline input: False
```

### -ItemName
Optional name of the item to retrieve

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ItemType
The type of contents to retrieve, either File, Folder or All (default)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Recursive
A switch parameter to include contents of all subfolders in the specified folder

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: 4
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)