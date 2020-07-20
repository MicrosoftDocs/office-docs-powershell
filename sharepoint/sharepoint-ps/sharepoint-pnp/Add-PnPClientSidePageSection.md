---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpclientsidepagesection
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Add-PnPClientSidePageSection
---

# Add-PnPClientSidePageSection

## SYNOPSIS
Adds a new section to a Client-Side page

## SYNTAX 

```powershell
Add-PnPClientSidePageSection -Page <ClientSidePagePipeBind>
                             -SectionTemplate <CanvasSectionTemplate>
                             [-Order <Int>]
                             [-ZoneEmphasis <Int>]
                             [-Web <WebPipeBind>]
                             [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPClientSidePageSection -Page "MyPage" -SectionTemplate OneColumn
```

Adds a new one-column section to the Client-Side page 'MyPage'

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPClientSidePageSection -Page "MyPage" -SectionTemplate ThreeColumn -Order 10
```

Adds a new Three columns section to the Client-Side page 'MyPage' with an order index of 10

### ------------------EXAMPLE 3------------------
```powershell
$page = Add-PnPClientSidePage -Name "MyPage"
PS> Add-PnPClientSidePageSection -Page $page -SectionTemplate OneColumn
```

Adds a new one column section to the Client-Side page 'MyPage'

### ------------------EXAMPLE 4------------------
```powershell
$page = Add-PnPClientSidePage -Name "MyPage"
PS> Add-PnPClientSidePageSection -Page $page -SectionTemplate OneColumn -ZoneEmphasis 2
```

Adds a new one column section to the Client-Side page 'MyPage' and sets the background to 2 (0 is no background, 3 is highest emphasis)

## PARAMETERS

### -Order
Sets the order of the section. (Default = 1)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Page
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -SectionTemplate
Specifies the columns template to use for the section.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: CanvasSectionTemplate
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -ZoneEmphasis
Sets the background of the section (default = 0)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
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