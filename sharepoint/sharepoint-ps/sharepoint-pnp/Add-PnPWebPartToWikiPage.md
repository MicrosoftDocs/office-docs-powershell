---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpwebparttowikipage
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Add-PnPWebPartToWikiPage

## SYNOPSIS
Adds a web part to a wiki page in a specified table row and column

## SYNTAX

### XML
```powershell
Add-PnPWebPartToWikiPage -Xml <String>
                         -ServerRelativePageUrl <String>
                         -Row <Int>
                         -Column <Int>
                         [-AddSpace [<SwitchParameter>]]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

### FILE
```powershell
Add-PnPWebPartToWikiPage -Path <String>
                         -ServerRelativePageUrl <String>
                         -Row <Int>
                         -Column <Int>
                         [-AddSpace [<SwitchParameter>]]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPWebPartToWikiPage -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx" -Path "c:\myfiles\listview.webpart" -Row 1 -Column 1
```

This will add the web part as defined by the XML in the listview.webpart file to the specified page in the first row and the first column of the HTML table present on the page

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPWebPartToWikiPage -ServerRelativePageUrl "/sites/demo/sitepages/home.aspx" -XML $webpart -Row 1 -Column 1
```

This will add the web part as defined by the XML in the $webpart variable to the specified page in the first row and the first column of the HTML table present on the page

## PARAMETERS

### -AddSpace
Must there be a extra space between the web part

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Column
Column number where the web part must be placed

```yaml
Type: Int
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Path
A path to a web part file on a the file system.

```yaml
Type: String
Parameter Sets: FILE

Required: True
Position: Named
Accept pipeline input: False
```

### -Row
Row number where the web part must be placed

```yaml
Type: Int
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -ServerRelativePageUrl
Full server relative url of the web part page, e.g. /sites/demo/sitepages/home.aspx

```yaml
Type: String
Parameter Sets: (All)
Aliases: PageUrl

Required: True
Position: Named
Accept pipeline input: False
```

### -Xml
A string containing the XML for the web part.

```yaml
Type: String
Parameter Sets: XML

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
