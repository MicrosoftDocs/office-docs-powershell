---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPWebTheme

## SYNOPSIS
Sets the theme of the current web.

## SYNTAX 

```powershell
Set-PnPWebTheme [-Theme <ThemePipeBind>]
                [-WebUrl <String>]
                [-Web <WebPipeBind>]
                [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets the theme of the current web. * Requires Tenant Administration Rights *

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPWebTheme -Theme MyTheme
```

Sets the theme named "MyTheme" to the current web

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantTheme -Name "MyTheme" | Set-PnPTheme
```

Sets the theme named "MyTheme" to the current web

## PARAMETERS

### -Theme
Specifies the Color Palette Url based on the site or server relative url

```yaml
Type: ThemePipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -WebUrl
The URL of the web to apply the theme to. If not specified it will default to the current web based upon the URL specified with Connect-PnPOnline.

```yaml
Type: String
Parameter Sets: (All)

Required: False
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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)