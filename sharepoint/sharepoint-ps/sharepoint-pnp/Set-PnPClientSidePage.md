---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpclientsidepage
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Set-PnPClientSidePage
---

# Set-PnPClientSidePage

## SYNOPSIS
Sets parameters of a Client-Side Page

## SYNTAX 

### Custom Header
```powershell
Set-PnPClientSidePage -Identity <ClientSidePagePipeBind>
                      [-ServerRelativeImageUrl <String>]
                      [-TranslateX <Double>]
                      [-TranslateY <Double>]
                      [-Name <String>]
                      [-Title <String>]
                      [-LayoutType <ClientSidePageLayoutType>]
                      [-PromoteAs <ClientSidePagePromoteType>]
                      [-CommentsEnabled [<SwitchParameter>]]
                      [-Publish [<SwitchParameter>]]
                      [-HeaderType <ClientSidePageHeaderType>]
                      [-ContentType <ContentTypePipeBind>]
                      [-ThumbnailUrl <String>]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -LayoutType Home -Title "My Page"
```

Updates the properties of the Client-Side page named 'MyPage'

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -CommentsEnabled
```

Enables the comments on the Client-Side page named 'MyPage'

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -CommentsEnabled:$false
```

Disables the comments on the Client-Side page named 'MyPage'

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -HeaderType Default
```

Sets the header of the page to the default header

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -HeaderType None
```

Removes the header of the page

### ------------------EXAMPLE 6------------------
```powershell
Set-PnPClientSidePage -Identity "MyPage" -HeaderType Custom -ServerRelativeImageUrl "/sites/demo1/assets/myimage.png" -TranslateX 10.5 -TranslateY 11.0
```

Sets the header of the page to custom header, using the specified image and translates the location of the image in the header given the values specified

## PARAMETERS

### -CommentsEnabled
Enables or Disables the comments on the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ContentType
Specify either the name, ID or an actual content type.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ContentTypePipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -HeaderType
Sets the page header type

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePageHeaderType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The name/identity of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -LayoutType
Sets the layout type of the page. (Default = Article)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePageLayoutType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Name
Sets the name of the page.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PromoteAs
Allows to promote the page for a specific purpose (None | HomePage | NewsArticle | Template)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePromoteType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Publish
Publishes the page once it is saved.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ServerRelativeImageUrl
The URL of the image to show in the header

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: Custom Header

Required: False
Position: 0
Accept pipeline input: False
```

### -ThumbnailUrl
Thumbnail Url

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
Sets the title of the page.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TranslateX
A value defining how to translate the image on the x-axis

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Double
Parameter Sets: Custom Header

Required: False
Position: 0
Accept pipeline input: False
```

### -TranslateY
A value defining how to translate the image on the y-axis

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Double
Parameter Sets: Custom Header

Required: False
Position: 0
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)