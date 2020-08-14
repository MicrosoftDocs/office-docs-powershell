---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/move-pnpfile
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Move-PnPFile
---

# Move-PnPFile

## SYNOPSIS
Moves a file or folder to a different location

## SYNTAX 

### Other Site Collection
```powershell
Move-PnPFile -TargetServerRelativeLibrary <String>
             [-ServerRelativeUrl <String>]
             [-SiteRelativeUrl <String>]
             [-OverwriteIfAlreadyExists [<SwitchParameter>]]
             [-AllowSchemaMismatch [<SwitchParameter>]]
             [-AllowSmallerVersionLimitOnDestination [<SwitchParameter>]]
             [-IgnoreVersionHistory [<SwitchParameter>]]
             [-Force [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### Server Relative
```powershell
Move-PnPFile -ServerRelativeUrl <String>
             -TargetUrl <String>
             [-OverwriteIfAlreadyExists [<SwitchParameter>]]
             [-Force [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### Site Relative
```powershell
Move-PnPFile -SiteRelativeUrl <String>
             -TargetUrl <String>
             [-OverwriteIfAlreadyExists [<SwitchParameter>]]
             [-Force [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

## DESCRIPTION
Allows moving a file or folder to a different location inside the same document library, such as in a subfolder, to a different document library on the same site collection or to a document library on another site collection

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
PS:>Move-PnPFile -SiteRelativeUrl "Shared Documents/Document.docx" -TargetUrl "/sites/project/Archive/Document2.docx"
```

Moves a file named Document.docx located in the document library named "Shared Documents" in the current site to the document library named "Archive" in the same site, renaming the file to Document2.docx. If a file named Document2.docx already exists at the destination, it won't perform the move.

### ------------------EXAMPLE 2------------------
```powershell
PS:>Move-PnPFile -ServerRelativeUrl "/sites/project/Shared Documents/Document.docx -TargetUrl "/sites/project/Archive/Document.docx" -OverwriteIfAlreadyExists
```

Moves a file named Document.docx located in the document library named "Shared Documents" in the current site to the document library named "Archive" in the same site. If a file named Document.docx already exists at the destination, it will overwrite it.

### ------------------EXAMPLE 3------------------
```powershell
PS:>Move-PnPFile -ServerRelativeUrl "/sites/project/Shared Documents/Document.docx" -TargetServerRelativeLibrary "/sites/otherproject/Shared Documents" -OverwriteIfAlreadyExists -AllowSchemaMismatch -AllowSmallerVersionLimitOnDestination
```

Moves a file named Document.docx located in the document library named "Shared Documents" in the current site to the document library named "Shared Documents" in another site collection "otherproject" allowing it to overwrite an existing file Document.docx in the destination, allowing the fields to be different on the destination document library from the source document library and allowing a lower document version limit on the destination compared to the source.

### ------------------EXAMPLE 4------------------
```powershell
PS:>Move-PnPFile -ServerRelativeUrl "/sites/project/Shared Documents/Archive" -TargetServerRelativeLibrary "/sites/archive/Project" -AllowSchemaMismatch -AllowSmallerVersionLimitOnDestination
```

Moves a folder named Archive located in the document library named "Shared Documents" in the current site to the document library named "Project" in another site collection "archive" not allowing it to overwrite an existing folder named "Archive" in the destination, allowing the fields to be different on the destination document library from the source document library and allowing a lower document version limit on the destination compared to the source.

## PARAMETERS

### -AllowSchemaMismatch
If provided and the target document library specified using TargetServerRelativeLibrary has different fields than the document library where the document is being moved from, the move will succeed. If not provided, it will fail to protect against data loss of metadata stored in fields that cannot be moved along.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Other Site Collection

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowSmallerVersionLimitOnDestination
If provided and the target document library specified using TargetServerRelativeLibrary is configured to keep less historical versions of documents than the document library where the document is being moved from, the move will succeed. If not provided, it will fail to protect against data loss of historical versions that cannot be moved along.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Other Site Collection

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
If provided, no confirmation will be requested and the action will be performed

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -IgnoreVersionHistory
If provided, only the latest version of the document will be moved and its history will be discared. If not provided, all historical versions will be moved along.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Other Site Collection

Required: False
Position: Named
Accept pipeline input: False
```

### -OverwriteIfAlreadyExists
If provided, if a file or folder already exists at the TargetUrl, it will be overwritten. If omitted, the move operation will be canceled if the file or folder already exists at the TargetUrl location.

```yaml
Type: SwitchParameter
Parameter Sets: Server Relative, Site Relative, Other Site Collection

Required: False
Position: Named
Accept pipeline input: False
```

### -ServerRelativeUrl
Server relative Url specifying the file to move. Must include the file name.

```yaml
Type: String
Parameter Sets: Server Relative, Other Site Collection

Required: True
Position: 0
Accept pipeline input: True
```

### -SiteRelativeUrl
Site relative Url specifying the file or folder to move. Must include the file or folder name.

```yaml
Type: String
Parameter Sets: Site Relative, Other Site Collection

Required: True
Position: 0
Accept pipeline input: True
```

### -TargetServerRelativeLibrary
Server relative url of a document library where to move the fileor folder to. Must not include the file or folder name.

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Other Site Collection

Required: True
Position: 1
Accept pipeline input: False
```

### -TargetUrl
Server relative Url where to move the file or folder to. Must include the file or folder name.

```yaml
Type: String
Parameter Sets: Site Relative, Server Relative

Required: True
Position: 1
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