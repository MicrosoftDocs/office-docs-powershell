---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPMinimalDownloadStrategy

## SYNOPSIS
Activates or deactivates the minimal downloading strategy.

## SYNTAX 

### On
```powershell
Set-PnPMinimalDownloadStrategy -On [<SwitchParameter>]
                               [-Force [<SwitchParameter>]]
                               [-Web <WebPipeBind>]
                               [-Connection <SPOnlineConnection>]
```

### Off
```powershell
Set-PnPMinimalDownloadStrategy -Off [<SwitchParameter>]
                               [-Force [<SwitchParameter>]]
                               [-Web <WebPipeBind>]
                               [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Activates or deactivates the minimal download strategy feature of a site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPMinimalDownloadStrategy -Off
```

Will deactivate minimal download strategy (MDS) for the current web.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPMinimalDownloadStrategy -On
```

Will activate minimal download strategy (MDS) for the current web.

## PARAMETERS

### -Force
Specifies whether to overwrite (when activating) or continue (when deactivating) an existing feature with the same feature identifier. This parameter is ignored if there are no errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Off
Turn minimal download strategy off

```yaml
Type: SwitchParameter
Parameter Sets: Off

Required: True
Position: Named
Accept pipeline input: False
```

### -On
Turn minimal download strategy on

```yaml
Type: SwitchParameter
Parameter Sets: On

Required: True
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