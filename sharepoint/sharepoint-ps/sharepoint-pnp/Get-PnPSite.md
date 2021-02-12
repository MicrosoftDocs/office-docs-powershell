---
Module Name: PnP.PowerShell
title: Get-PnPSite
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPSite.html
---
 
# Get-PnPSite

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPSite.md to change this file.

Returns the current site collection from the context.

## SYNTAX

```powershell
Get-PnPSite [-Connection <PnPConnection>] [-Includes <String[]>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPSite
```

Gets the current site

### EXAMPLE 2
```powershell
Get-PnPSite -Includes RootWeb,ServerRelativeUrl
```

Gets the current site specifying to include RootWeb and ServerRelativeUrl properties. For the full list of properties see https://docs.microsoft.com/previous-versions/office/sharepoint-server/ee538579(v%3doffice.15)

## PARAMETERS

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

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

