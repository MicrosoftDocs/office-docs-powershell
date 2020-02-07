---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpclientsidepage
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Remove-PnPClientSidePage

## SYNOPSIS
Removes a Client-Side Page

## SYNTAX 

```powershell
Remove-PnPClientSidePage -Identity <ClientSidePagePipeBind>
                         [-Force [<SwitchParameter>]]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPClientSidePage -Identity "MyPage"
```

Removes the Client-Side page named 'MyPage.aspx'

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPClientSidePage -Identity "Templates/MyPageTemplate"
```

Removes the specified Client-Side page which is located in the Templates folder of the Site Pages library.

### ------------------EXAMPLE 3------------------
```powershell
Remove-PnPClientSidePage $page
```

Removes the specified Client-Side page which is contained in the $page variable.

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

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