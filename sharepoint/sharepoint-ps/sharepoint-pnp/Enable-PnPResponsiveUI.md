---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Enable-PnPResponsiveUI

## SYNOPSIS
Activates the PnP Response UI Add-on

## SYNTAX 

```powershell
Enable-PnPResponsiveUI [-InfrastructureSiteUrl <String>]
                       [-Web <WebPipeBind>]
                       [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Enables the PnP Responsive UI implementation on a classic SharePoint Site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Enable-PnPResponsiveUI
```

Will upload a CSS file, a JavaScript file and adds a custom action to the root web of the current site collection, enabling the responsive UI on the site collection. The CSS and JavaScript files are located in the style library, in a folder called SP.Responsive.UI.

## PARAMETERS

### -InfrastructureSiteUrl
A full URL pointing to an infrastructure site. If specified, it will add a custom action pointing to the responsive UI JS code in that site.

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