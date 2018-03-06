---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPSearchConfiguration

## SYNOPSIS
Sets the search configuration

## SYNTAX 

### Config
```powershell
Set-PnPSearchConfiguration -Configuration <String>
                           [-Scope <SearchConfigurationScope>]
                           [-Web <WebPipeBind>]
                           [-Connection <SPOnlineConnection>]
```

### Path
```powershell
Set-PnPSearchConfiguration -Path <String>
                           [-Scope <SearchConfigurationScope>]
                           [-Web <WebPipeBind>]
                           [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPSearchConfiguration -Configuration $config
```

Sets the search configuration for the current web

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPSearchConfiguration -Configuration $config -Scope Site
```

Sets the search configuration for the current site collection

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPSearchConfiguration -Configuration $config -Scope Subscription
```

Sets the search configuration for the current tenant

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPSearchConfiguration -Path searchconfig.xml -Scope Subscription
```

Reads the search configuration from the specified XML file and sets it for the current tenant

## PARAMETERS

### -Configuration
Search configuration string

```yaml
Type: String
Parameter Sets: Config

Required: True
Position: Named
Accept pipeline input: False
```

### -Path
Path to a search configuration

```yaml
Type: String
Parameter Sets: Path

Required: True
Position: Named
Accept pipeline input: False
```

### -Scope


```yaml
Type: SearchConfigurationScope
Parameter Sets: __AllParameterSets

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