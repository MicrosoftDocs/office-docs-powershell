---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# ConvertTo-PnPClientSidePage

## SYNOPSIS
Converts a classic page (wiki or web part page) into a Client-Side Page

## SYNTAX 

### WebPartMappingFile
```powershell
ConvertTo-PnPClientSidePage -Identity <PagePipeBind>
                            [-WebPartMappingFile <String>]
                            [-Overwrite [<SwitchParameter>]]
                            [-TakeSourcePageName [<SwitchParameter>]]
                            [-ReplaceHomePageWithDefault [<SwitchParameter>]]
                            [-AddPageAcceptBanner [<SwitchParameter>]]
                            [-SkipItemLevelPermissionCopyToClientSidePage [<SwitchParameter>]]
                            [-ClearCache [<SwitchParameter>]]
                            [-CopyPageMetadata [<SwitchParameter>]]
                            [-UseCommunityScriptEditor [<SwitchParameter>]]
                            [-SummaryLinksToHtml [<SwitchParameter>]]
                            [-TargetWebUrl <String>]
                            [-Web <WebPipeBind>]
                            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite
```

Converts a wiki page named 'somepage' to a client side page

### ------------------EXAMPLE 2------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -WebPartMappingFile c:\contoso\webpartmapping.xml
```

Converts a wiki page named 'somepage' to a client side page using a custom provided mapping file

### ------------------EXAMPLE 3------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -AddPageAcceptBanner
```

Converts a wiki page named 'somepage' to a client side page and adds the page accept banner web part on top of the page. This requires that the SPFX solution holding the web part (https://github.com/SharePoint/sp-dev-modernization/blob/master/Solutions/PageTransformationUI/assets/sharepointpnp-pagetransformation-client.sppkg?raw=true) has been installed to the tenant app catalog.

### ------------------EXAMPLE 4------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -CopyPageMetadata
```

Converts a wiki page named 'somepage' to a client side page, including the copying of the page metadata (if any)

### ------------------EXAMPLE 5------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/targetmodernsite
```

Converts a wiki page named 'somepage' to a client side page in the https://contoso.sharepoint.com/sites/targetmodernsite site

## PARAMETERS

### -AddPageAcceptBanner
Adds the page accept banner web part. The actual web part is specified in webpartmapping.xml file

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ClearCache
Clears the cache. Can be needed if you've installed a new web part to the site and want to use that in a custom webpartmapping file. Restarting your PS session has the same effect.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CopyPageMetadata
Copies the page metadata to the created modern page.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The name of the page to convert

```yaml
Type: PagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Overwrite
Overwrites page if already existing

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ReplaceHomePageWithDefault
Replaces a home page with a default stock modern home page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SkipItemLevelPermissionCopyToClientSidePage
By default the item level permissions on a page are copied to the created client side page. Use this switch to prevent the copy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SummaryLinksToHtml
By default summarylinks web parts are replaced by QuickLinks, but you can transform to plain html by setting this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TakeSourcePageName
Created client side page takes name from previous classic page. Classic page gets renamed to previous_&lt;Page&gt;.aspx

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TargetWebUrl
Url of the target web that will receive the modern page. Defaults to null which means in-place transformation.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -UseCommunityScriptEditor
Uses the community script editor (https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-script-editor) as replacement for the classic script editor web part.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -WebPartMappingFile
Path and name of the web part mapping file driving the transformation

```yaml
Type: String
Parameter Sets: WebPartMappingFile

Required: False
Position: Named
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)