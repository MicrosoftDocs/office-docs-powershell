---
Module Name: PnP.PowerShell
title: Set-PnPSearchConfiguration
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPSearchConfiguration.html
---
 
# Set-PnPSearchConfiguration

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPSearchConfiguration.md to change this file.

Sets the search configuration

## SYNTAX

### Config
```powershell
Set-PnPSearchConfiguration -Configuration <String> [-Scope <SearchConfigurationScope>] 
 [-Connection <PnPConnection>] [<CommonParameters>]
```

### Path
```powershell
Set-PnPSearchConfiguration -Path <String> [-Scope <SearchConfigurationScope>] 
 [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Set-PnPSearchConfiguration -Configuration $config
```

Sets the search configuration for the current web

### EXAMPLE 2
```powershell
Set-PnPSearchConfiguration -Configuration $config -Scope Site
```

Sets the search configuration for the current site collection

### EXAMPLE 3
```powershell
Set-PnPSearchConfiguration -Configuration $config -Scope Subscription
```

Sets the search configuration for the current tenant

### EXAMPLE 4
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Path to a search configuration

```yaml
Type: String
Parameter Sets: Path

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope

```yaml
Type: SearchConfigurationScope
Parameter Sets: (All)
Accepted values: Web, Site, Subscription

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

