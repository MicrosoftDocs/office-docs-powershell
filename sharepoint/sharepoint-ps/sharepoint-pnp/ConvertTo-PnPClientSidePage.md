---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/convertto-pnpclientsidepage
applicable: SharePoint Online
schema: 2.0.0
---
# ConvertTo-PnPClientSidePage

## SYNOPSIS
Converts a classic page (wiki or web part page) into a Client-Side Page

## SYNTAX

```powershell
ConvertTo-PnPClientSidePage -Identity <PagePipeBind>
                            [-Library <String>]
                            [-Folder <String>]
                            [-WebPartMappingFile <String>]
                            [-Overwrite [<SwitchParameter>]]
                            [-TakeSourcePageName [<SwitchParameter>]]
                            [-ReplaceHomePageWithDefault [<SwitchParameter>]]
                            [-AddPageAcceptBanner [<SwitchParameter>]]
                            [-SkipItemLevelPermissionCopyToClientSidePage [<SwitchParameter>]]
                            [-SkipUrlRewriting [<SwitchParameter>]]
                            [-ClearCache [<SwitchParameter>]]
                            [-CopyPageMetadata [<SwitchParameter>]]
                            [-UseCommunityScriptEditor [<SwitchParameter>]]
                            [-SummaryLinksToHtml [<SwitchParameter>]]
                            [-TargetWebUrl <String>]
                            [-LogType <ClientSidePageTransformatorLogType>]
                            [-LogFolder <String>]
                            [-LogSkipFlush [<SwitchParameter>]]
                            [-LogVerbose [<SwitchParameter>]]
                            [-DontPublish [<SwitchParameter>]]
                            [-DisablePageComments [<SwitchParameter>]]
                            [-PublishingPage [<SwitchParameter>]]
                            [-PageLayoutMapping <String>]
                            [-PublishingTargetPageName <String>]
                            [-TargetConnection <SPOnlineConnection>]
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

Converts a wiki page named 'somepage' to a client side page and adds the page accept banner web part on top of the page. This requires that the SPFX solution holding the web part (https://github.com/SharePoint/sp-dev-modernization/blob/master/Solutions/PageTransformationUI/assets/sharepointpnp-pagetransformation-client.sppkg?raw=true) has been installed to the tenant app catalog

### ------------------EXAMPLE 4------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -CopyPageMetadata
```

Converts a wiki page named 'somepage' to a client side page, including the copying of the page metadata (if any)

### ------------------EXAMPLE 5------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -PublishingPage -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/targetmodernsite
```

Converts a publishing page named 'somepage' to a client side page in the https://contoso.sharepoint.com/sites/targetmodernsite site

### ------------------EXAMPLE 6------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -PublishingPage -Overwrite -TargetConnection $target
```

Converts a publishing page named 'somepage' to a client side page in the site specified by the TargetConnection connection. This allows to read a page in one environment (on-premises, tenant A) and create in another online location (tenant B)

### ------------------EXAMPLE 7------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Library "SiteAssets" -Folder "Folder1" -Overwrite
```

Converts a web part page named 'somepage' living inside the SiteAssets library in a folder named folder1 into a client side page

### ------------------EXAMPLE 8------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Folder "<root>" -Overwrite
```

Converts a web part page named 'somepage' living inside the root of the site collection (so outside of a library)

### ------------------EXAMPLE 9------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/targetmodernsite
```

Converts a wiki page named 'somepage' to a client side page in the https://contoso.sharepoint.com/sites/targetmodernsite site

### ------------------EXAMPLE 10------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -LogType File -LogFolder c:\temp -LogVerbose -Overwrite
```

Converts a web part page named 'somepage' and creates a log file in c:	emp using verbose logging

### ------------------EXAMPLE 11------------------
```powershell
ConvertTo-PnPClientSidePage -Identity "somepage.aspx" -LogType SharePoint -LogSkipFlush
```

Converts a web part page named 'somepage' and creates a log file in SharePoint but skip the actual write. Use this option to make multiple ConvertTo-PnPClientSidePage invocations create a single log

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
Clears the cache. Can be needed if you've installed a new web part to the site and want to use that in a custom webpartmapping file. Restarting your PS session has the same effect

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CopyPageMetadata
Copies the page metadata to the created modern page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisablePageComments
Disable comments for the created modern page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DontPublish
Don't publish the created modern page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Folder
The folder to load the provided page from. If not provided all folders are searched

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
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

### -Library
The name of the library containing the page. If SitePages then please omit this parameter

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -LogFolder
Folder in where the log file will be created (if LogType==File)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LogSkipFlush
By default each cmdlet invocation will result in a log file, use the -SkipLogFlush to delay the log flushing. The first call without -SkipLogFlush will then write all log entries to a single log

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LogType
Allows to generate a transformation log (File | SharePoint)

```yaml
Type: ClientSidePageTransformatorLogType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LogVerbose
Configure logging to include verbose log entries

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
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

### -PageLayoutMapping
Path and name of the page layout mapping file driving the publishing page transformation

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -PublishingPage
I'm transforming a publishing page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PublishingTargetPageName
Name for the target page (only applies to publishing page transformation)

```yaml
Type: String
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
By default the item level permissions on a page are copied to the created client side page. Use this switch to prevent the copy

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SkipUrlRewriting
If transforming cross site then by default urls in html and summarylinks are rewritten for the target site. Set this flag to prevent that

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SummaryLinksToHtml
By default summarylinks web parts are replaced by QuickLinks, but you can transform to plain html by setting this switch

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

### -TargetConnection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TargetWebUrl
Url of the target web that will receive the modern page. Defaults to null which means in-place transformation

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -UseCommunityScriptEditor
Uses the community script editor (https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-script-editor) as replacement for the classic script editor web part

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
Parameter Sets: (All)

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
