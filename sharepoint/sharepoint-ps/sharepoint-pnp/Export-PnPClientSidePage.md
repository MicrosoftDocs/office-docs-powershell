---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/export-pnpclientsidepage
applicable: SharePoint Online
schema: 2.0.0
---
# Export-PnPClientSidePage

## SYNOPSIS
Exports a Client Side Page to a PnP Provisioning Template

## SYNTAX

```powershell
Export-PnPClientSidePage -Identity <ClientSidePagePipeBind>
                         [-PersistBrandingFiles [<SwitchParameter>]]
                         [-Out <String>]
                         [-Force [<SwitchParameter>]]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Export-PnPClientSidePage -Identity Home.aspx
```

Exports the page 'Home.aspx' to a new PnP Provisioning Template

## PARAMETERS

### -Force
Specify to override the question to overwrite a file if it already exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The name of the page

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Out
If specified the template will be saved to the file specified with this parameter.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PersistBrandingFiles
If specified referenced files will be exported to the current folder.

```yaml
Type: SwitchParameter
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
