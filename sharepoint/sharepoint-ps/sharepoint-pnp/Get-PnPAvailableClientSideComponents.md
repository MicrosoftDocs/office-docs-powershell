---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpavailableclientsidecomponents
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Get-PnPAvailableClientSideComponents

## SYNOPSIS
Gets the available client side components on a particular page

## SYNTAX 

```powershell
Get-PnPAvailableClientSideComponents -Page <ClientSidePagePipeBind>
                                     [-Component <ClientSideComponentPipeBind>]
                                     [-Web <WebPipeBind>]
                                     [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAvailableClientSideComponents -Page "MyPage.aspx"
```

Gets the list of available client side components on the page 'MyPage.aspx'

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAvailableClientSideComponents $page
```

Gets the list of available client side components on the page contained in the $page variable

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPAvailableClientSideComponents -Page "MyPage.aspx" -ComponentName "HelloWorld"
```

Gets the client side component 'HelloWorld' if available on the page 'MyPage.aspx'

## PARAMETERS

### -Component
Specifies the component instance or Id to look for.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSideComponentPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Page
The name of the page.

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