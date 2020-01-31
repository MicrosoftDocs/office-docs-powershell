---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpclientsidepage
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Get-PnPClientSidePage

## SYNOPSIS
Gets a Client-Side Page

## SYNTAX 

```powershell
Get-PnPClientSidePage -Identity <ClientSidePagePipeBind>
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPClientSidePage -Identity "MyPage.aspx"
```

Gets the Modern Page (Client-Side) named 'MyPage.aspx' in the current SharePoint site

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPClientSidePage "MyPage"
```

Gets the Modern Page (Client-Side) named 'MyPage.aspx' in the current SharePoint site

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPClientSidePage "Templates/MyPageTemplate"
```

Gets the Modern Page (Client-Side) named 'MyPageTemplate.aspx' from the templates folder of the Page Library in the current SharePoint site

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPClientSidePage -Identity "MyPage.aspx" -Web (Get-PnPWeb -Identity "Subsite1")
```

Gets the Modern Page (Client-Side) named 'MyPage.aspx' from the subsite named 'Subsite1'

## PARAMETERS

### -Identity
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
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