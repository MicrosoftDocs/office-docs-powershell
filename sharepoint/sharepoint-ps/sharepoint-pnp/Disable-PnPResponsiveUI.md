---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Disable-PnPResponsiveUI

## SYNOPSIS
Deactive the PnP Response UI add-on

## SYNTAX 

```powershell
Disable-PnPResponsiveUI [-Web <WebPipeBind>]
                        [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Disables the PnP Responsive UI implementation on a classic SharePoint Site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-PnPResponsiveUI
```

If enabled previously, this will remove the PnP Responsive UI from a site.

## PARAMETERS

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