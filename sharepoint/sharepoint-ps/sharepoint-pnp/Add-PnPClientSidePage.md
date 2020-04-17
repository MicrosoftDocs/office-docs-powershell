---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpclientsidepage
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Add-PnPClientSidePage
---

# Add-PnPClientSidePage

## SYNOPSIS
Adds a Client-Side Page

## SYNTAX 

```powershell
Add-PnPClientSidePage -Name <String>
                      [-LayoutType <ClientSidePageLayoutType>]
                      [-PromoteAs <ClientSidePagePromoteType>]
                      [-ContentType <ContentTypePipeBind>]
                      [-CommentsEnabled [<SwitchParameter>]]
                      [-Publish [<SwitchParameter>]]
                      [-HeaderLayoutType <ClientSidePageHeaderLayoutType>]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPClientSidePage -Name "NewPage"
```

Creates a new Client-Side page named 'NewPage'

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPClientSidePage -Name "NewPage" -ContentType "MyPageContentType"
```

Creates a new Client-Side page named 'NewPage' and sets the content type to the content type specified

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPClientSidePage -Name "NewPageTemplate" -PromoteAs Template
```

Creates a new Client-Side page named 'NewPage' and saves as a template to the site.

### ------------------EXAMPLE 4------------------
```powershell
Add-PnPClientSidePage -Name "Folder/NewPage"
```

Creates a new Client-Side page named 'NewPage' under 'Folder' folder and saves as a template to the site.

### ------------------EXAMPLE 5------------------
```powershell
Add-PnPClientSidePage -Name "NewPage" -HeaderLayoutType ColorBlock
```

Creates a new Client-Side page named 'NewPage' using the ColorBlock header layout

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

### -HeaderLayoutType
Type of layout used for the header

Only applicable to: SharePoint Online

```yaml
Type: ClientSidePageHeaderLayoutType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LayoutType
Specifies the layout type of the page.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePageLayoutType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Name
Specifies the name of the page.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -PromoteAs
Allows to promote the page for a specific purpose (HomePage | NewsPage)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePromoteType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Publish
Publishes the page once it is saved. Applicable to libraries set to create major and minor versions.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
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